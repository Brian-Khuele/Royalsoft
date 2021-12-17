import { RequestHandler, Request, Response, NextFunction } from 'express';

import pg from 'db/knex';
import { StatusCodes } from 'http-status-codes';

export const getRaces: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let race = await pg('race').select();

    //return all the learners to the client
    res.json(race);
  } catch (error) {
    return next(error);
  }
};
export const getRoles: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let roles = await pg('permission').select();

    //return all the learners to the client
    res.json(roles);
  } catch (error) {
    return next(error);
  }
};
export const getCountries: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let country = await pg('country').select();

    //return all the learners to the client
    res.json(country);
  } catch (error) {
    return next(error);
  }
};
export const getGrades: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let grade = await pg('grade').select();

    //return all the learners to the client
    res.json(grade);
  } catch (error) {
    return next(error);
  }
};
export const getSubjects: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let subject = await pg('subject').select();

    //return all the learners to the client
    res.json(subject);
  } catch (error) {
    return next(error);
  }
};
export const getGradeSubjects: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.query.grade) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Grade missing.' });
    }
    let subjectsInGrade = await pg('subject_grade')
      .select(['subject_id', 'grade', 'description', 'compulsory'])
      .innerJoin('subject', function () {
        this.on('subject_grade.subject_id', 'subject.id');
      })
      .where({ 'subject_grade.grade': req.query.grade });

    //console.log(subjectsInGrade);
    //return all the learners to the client
    return res.status(StatusCodes.OK).json(subjectsInGrade);
  } catch (error) {
    return next(error);
  }
};

export const getCombinations: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let combination = await pg('combination').select();

    //return all the learners to the client
    res.json(combination);
  } catch (error) {
    return next(error);
  }
};
export const getGenders: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let gender = await pg('gender').select();

    //return all the learners to the client
    res.json(gender);
  } catch (error) {
    return next(error);
  }
};
export const getIdtypes: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let idtype = await pg('idtype').select();

    //return all the learners to the client
    res.json(idtype);
  } catch (error) {
    return next(error);
  }
};
export const getLanguages: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let languages = await pg('language').select();

    //return all the learners to the client
    res.json(languages);
  } catch (error) {
    return next(error);
  }
};
export const getRelations: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let relations = await pg('relation').select();

    //return all the learners to the client
    res.json(relations);
  } catch (error) {
    return next(error);
  }
};
export const getLearnerStatus: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let relations = await pg('learner_status').select();

    //return all the learners to the client
    res.json(relations);
  } catch (error) {
    return next(error);
  }
};
