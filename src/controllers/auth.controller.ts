import { MESSAGES, ACCESS_SECRET_TOKEN } from "../constants";
import jwt from "jsonwebtoken";
import User from "../models/user.model";
import { Types } from "mongoose";
import { Request, Response } from "express";

//------------ utility functions -----------------//

const generateAccessToken = (id: Types.ObjectId) => {
  return jwt.sign({ id }, ACCESS_SECRET_TOKEN, { expiresIn: "7d" });
};

const setCookie = (cookieName: string, cookieValue: any, res: Response) => {
  const maxAge = 3 * 24 * 60 * 60 * 1000;

  return res.cookie(cookieName, cookieValue, {
    httpOnly: true,
    maxAge,
  });
};

// -------------------------------------------------- //

export const signup = async (req: Request, res: Response) => {
  const { email, password, role } = req.body;

  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(401).json({ error: "user already exist" });
    }
    const user = await User.create({ email, password, role });

    res.status(201).json({ success: 1, message: MESSAGES.CREATED });
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password, res);
    if (user) {
      const token = generateAccessToken(user._id!);
      setCookie("jwt", token, res);

      res
        .status(200)
        .json({ success: 1, data: { id: user._id, email: user.email, token } });
    }
  } catch (err: any) {
    return res.status(401).json({ error: err.message });
  }
};

export const logout = (req: Request, res: Response) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.status(200).json({ success: 1, message: MESSAGES.LOGOUT });
};
