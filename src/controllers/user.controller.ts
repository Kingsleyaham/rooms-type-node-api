import { Request, Response } from "express";
import User from "../models/user.model";
import handleError from "../utils/handleError";

export const fetchAll = async (req: Request, res: Response) => {
  try {
    const user = await User.find({});

    res.status(200).json({ data: user, success: 1 });
  } catch (err: any) {
    const errMsg = handleError(err);
    res.status(401).json({ error: errMsg });
  }
};

export const fetchUserById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);

    res.status(200).json({ success: 1, data: user });
  } catch (err: any) {
    const errMsg = handleError(err);
    res.status(401).json({ error: errMsg });
  }
};
