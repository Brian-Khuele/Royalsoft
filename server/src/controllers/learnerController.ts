import { RequestHandler, Request, Response, NextFunction } from 'express';

import pg from 'db/knex';
import { getStatusCode } from 'http-status-codes';

export const getLearners: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let learners = await pg('learner').select().orderBy('surname', 'asc');

    //return all the learners to the client
    res.json(learners);
  } catch (error) {
    return next(error);
  }
};
export const updateLearner: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body);
    let learners = await pg('learner').update(req.body).where({ student_number: req.params.id });

    //return all the learners to the client
    res.json({ message: 'successfully updated learner information' });
  } catch (error) {
    return next(error);
  }
};
export const setLearnerStatus: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //remember to update the activity log table here. This is for tracking user actions on the system
    console.log(req.body);
    let learners = await pg('learner')
      .update({ status: req.body.status })
      .where({ student_number: req.body.student_number })
      .returning('*')
      .then((result) => {
        //update the activity table here (set the status change reason and date etc...)
      });

    //return all the learners to the client
    return res.json({ message: 'successfully updated learner status' });
  } catch (error) {
    return next(error);
  }
};
export const setLearnerSubjects: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //remember to update the activity log table here. This is for tracking user actions on the system
    //delete ALL student subjects
    await pg('learner_subject_combination')
      .delete()
      .where({ student_number: req.body.student_number });

    req.body.subjects.map(async (subjectId: Number) => {
      //now add new student subjects
      return await pg('learner_subject_combination')
        .insert({
          student_number: req.body.student_number,
          subject_id: subjectId,
          combination_id: 'A',
        })
        .returning('*');
    });

    let learnerSubjects = await pg('learner_subject_combination')
      .select()
      .where({ student_number: req.body.student_number })
      .returning('*');

    //return all the learners to the client
    return res.json(learnerSubjects);
  } catch (error) {
    return next(error);
  }
};
/**** HANDLE NEW REGISTRATION, INCLUDES FILE UPLOADS*****/
export const registerLearner: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let newLearner = await pg('learner').insert(JSON.parse(req.body.learner), '*');
    //return all the learners to the client
    console.log(JSON.stringify(JSON.parse(req.body.learner)));
    res.json({ message: 'FILES RECEIVED', uploaded: newLearner });
  } catch (error) {
    return next(error);
  }
};
