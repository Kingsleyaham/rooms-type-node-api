import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ACCESS_SECRET_TOKEN } from "../constants";

export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.jwt;

  //   check json web token exists and is verified
  if (token) {
    try {
      await jwt.verify(token, ACCESS_SECRET_TOKEN);
      next();
    } catch (error) {
      next(error);
    }
  } else {
    return res.status(401).json({
      message: "you are not authenticated please login to access route",
    });
  }
};
