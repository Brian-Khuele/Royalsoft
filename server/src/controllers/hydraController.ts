import { RequestHandler, Request, Response, NextFunction } from "express";

import { pg } from "src/Database/dataBasepg";
import { getStatusCode } from "http-status-codes";

export const getLearners: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let learners = await pg("learner").select().orderBy("surname", "asc");

		//return all the learners to the client
		res.json(learners);
	} catch (error) {
		return next(error);
	}
};
export const getRaces: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let race = await pg("race").select();

		//return all the learners to the client
		res.json(race);
	} catch (error) {
		return next(error);
	}
};
export const getRoles: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let roles = await pg("roles").select();

		//return all the learners to the client
		res.json(roles);
	} catch (error) {
		return next(error);
	}
};
export const getCountries: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let country = await pg("country").select();

		//return all the learners to the client
		res.json(country);
	} catch (error) {
		return next(error);
	}
};
export const getGrades: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let grade = await pg("grade").select();

		//return all the learners to the client
		res.json(grade);
	} catch (error) {
		return next(error);
	}
};
export const getSubjects: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let subject = await pg("subject").select();

		//return all the learners to the client
		res.json(subject);
	} catch (error) {
		return next(error);
	}
};
export const getCombinations: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let combination = await pg("combination").select();

		//return all the learners to the client
		res.json(combination);
	} catch (error) {
		return next(error);
	}
};
export const getGenders: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let gender = await pg("gender").select();

		//return all the learners to the client
		res.json(gender);
	} catch (error) {
		return next(error);
	}
};
export const getIdtypes: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let idtype = await pg("idtype").select();

		//return all the learners to the client
		res.json(idtype);
	} catch (error) {
		return next(error);
	}
};
export const getLanguages: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let languages = await pg("languages").select();

		//return all the learners to the client
		res.json(languages);
	} catch (error) {
		return next(error);
	}
};
export const getRelations: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let relations = await pg("relations").select();

		//return all the learners to the client
		res.json(relations);
	} catch (error) {
		return next(error);
	}
};
export const getLearnerStatus: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let relations = await pg("learner_status").select();

		//return all the learners to the client
		res.json(relations);
	} catch (error) {
		return next(error);
	}
};
export const updateLearner: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		console.log(req.body);
		let learners = await pg("learner").update(req.body).where({ student_number: req.params.id });

		//return all the learners to the client
		res.json({ message: "successfully updated learner information" });
	} catch (error) {
		return next(error);
	}
};
export const setLearnerStatus: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		//remember to update the activity log table here. This is for tracking user actions on the system
		console.log(req.body);
		let learners = await pg("learner")
			.update({ status: req.body.status })
			.where({ student_number: req.body.student_number })
			.returning("*")
			.then((result) => {
				//update the activity table here (set the status change reason and date etc...)
			});

		//return all the learners to the client
		return res.json({ message: "successfully updated learner status" });
	} catch (error) {
		return next(error);
	}
};
export const setLearnerSubjects: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		//remember to update the activity log table here. This is for tracking user actions on the system
		//delete ALL student subjects
		await pg("student_subject").delete().where({ student_number: req.body.student_number });

		req.body.subjects.map(async (subjectId: Number) => {
			//now add new student subjects
			return await pg("student_subject")
				.insert({
					student_number: req.body.student_number,
					subject_id: subjectId,
					combination: "A",
				})
				.returning("*");
		});

		let learnerSubjects = await pg("student_subject")
			.select()
			.where({ student_number: req.body.student_number })
			.returning("*");

		//return all the learners to the client
		return res.json(learnerSubjects);
	} catch (error) {
		return next(error);
	}
};
