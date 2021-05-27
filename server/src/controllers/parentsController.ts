import { RequestHandler, Request, Response, NextFunction } from 'express';

import pg from 'db/knex';
import { getStatusCode } from 'http-status-codes';

export const getParents: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let parent = await pg('parent').select().orderBy('surname', 'asc');

    //return all the parents to the client
    res.json(parent);
  } catch (error) {
    return next(error);
  }
};
