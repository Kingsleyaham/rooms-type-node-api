import { NextFunction, Request, Response } from "express";
import handleError from "../../utils/handleError";
import roomValidateSchema from "./helper/roomValidation";
import userValidateSchema from "./helper/userValidation";

export const validateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.path !== "/logout") {
    try {
      await userValidateSchema.validateAsync({
        ...req.body,
      });

      next();
    } catch (err: any) {
      const [error] = err.details;
      const errMsg = handleError(error);
      return res.status(401).json({ error: errMsg });
    }
  } else {
    return next();
  }
};

export const validateRoom = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.path == "/" && req.method == "POST") {
    try {
      await roomValidateSchema.validateAsync({ ...req.body });

      next();
    } catch (err: any) {
      const [error] = err.details;
      const errMsg = handleError(error);
      return res.status(401).json({ error: errMsg });
    }
  } else {
    return next();
  }
};

export const validateRoomType = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!((req.path == "/" && req.method == "GET") || req.method == "DELETE")) {
    try {
      await roomValidateSchema.validateAsync({ ...req.body });

      next();
    } catch (err: any) {
      const [error] = err.details;
      const errMsg = handleError(error);
      return res.status(401).json({ error: errMsg });
    }
  } else {
    return next();
  }
};
