import { RequestHandler, Request, Response, NextFunction } from "express";

import { pg } from "src/Database/dataBasepg";
import { getStatusCode } from "http-status-codes";

export const getLearners: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
	} catch (error) {
		return next(error);
	}
};
