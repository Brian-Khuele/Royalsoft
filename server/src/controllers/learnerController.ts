import { RequestHandler, Request, Response, NextFunction } from 'express';

import pg from 'db/knex';
import { StatusCodes } from 'http-status-codes';

export const getLearners: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let learners = await pg('learner').select().orderBy('surname', 'asc');

    //return all the learners to the client
    res.status(StatusCodes.OK).json(learners);
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
    if (!req.params.id) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Student number missing' });
    }

    await pg('learner').update(req.body).where({ student_number: req.params.id });

    return res.status(StatusCodes.OK).json({ message: 'successfully updated learner information' });
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
    console.log('setLearnerSubjects', req.body);
    const newLearnerSubjects = req.body.subjects.map(async (subjectId: Number) => {
      //now add new student subjects
      return await pg('learner_subject_combination')
        .insert({
          student_number: req.body.student_number,
          subject_id: subjectId,
          combination_id: 'A',
        })
        .onConflict(['student_number', 'subject_id', 'combination_id'])
        .merge() //This will basically update
        .returning('*');
    });

    //return all the learners to the client
    return res.status(StatusCodes.OK).json(newLearnerSubjects);
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
    console.log('learner object', req.body.learner);
    let newLearner = await pg('learner').insert(JSON.parse(req.body.learner), '*');

    return res.json({ message: 'FILES RECEIVED', uploaded: newLearner });
  } catch (error) {
    return next(error);
  }
};
