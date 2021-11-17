import { RequestHandler, Request, Response, NextFunction } from 'express';

import pg from 'db/knex';
import { getStatusCode } from 'http-status-codes';

export const getStaff: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let staff = await pg('staff').select().orderBy('surname', 'asc');

    //return all the parents to the client
    res.json(staff);
  } catch (error) {
    return next(error);
  }
};
