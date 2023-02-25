import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Types } from "mongoose";
import User from "../models/user.model";

interface IPayloadTypes {
  id: Types.ObjectId;
}

export const requireAuthorization = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.jwt;
  const decodedJwt = jwt.decode(token, { complete: true });
  const payload: any = decodedJwt!.payload;

  if (payload) {
    const user = await User.findById(payload!.id);
    if (user && user.role.toLowerCase() === "admin") {
      return next();
    }
    return res.status(401).json({ error: "unauthorized to access route" });
  }

  return res.status(401).json({ error: "unauthorized" });
};
