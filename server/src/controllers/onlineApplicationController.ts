import { RequestHandler, Request, Response, NextFunction } from 'express';

import pg from 'db/knex';
import { getStatusCode } from 'http-status-codes';

export const getOnlineApplication: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let onlineApplication = await pg('onlineApplications').select();

    //return all the parents to the client
    res.json(onlineApplication);
  } catch (error) {
    return next(error);
  }
};
