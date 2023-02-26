import { Request, Response } from "express";
import RoomType from "../models/roomType.model";
import { MESSAGES } from "../constants";
import handleError from "../utils/handleError";

export const fetchAll = async (req: Request, res: Response) => {
  try {
    const roomType = await RoomType.find({});

    res.status(200).json({ success: 1, data: roomType });
  } catch (err: any) {
    const errMsg = handleError(err);
    res.status(401).json({ error: errMsg });
  }
};

export const create = async (req: Request, res: Response) => {
  const roomName = req.body.name;
  try {
    await RoomType.create({ name: roomName });
    res.status(201).json({ success: 1, message: MESSAGES.CREATED });
  } catch (err: any) {
    const errMsg = handleError(err);
    res.status(401).json({ error: errMsg });
  }
};

export const updateRoomType = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const roomType = await RoomType.findByIdAndUpdate(id, { ...req.body });

    if (!roomType) {
      return res.status(400).json({ error: "invalid room type id" });
    }

    res.status(200).json({ success: 1, message: MESSAGES.UPDATED });
  } catch (err: any) {
    const errMsg = handleError(err);
    res.status(401).json({ error: errMsg });
  }
};

export const deleteRoomType = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const roomType = await RoomType.findByIdAndDelete(id);

    if (!roomType) {
      return res.status(400).json({ error: "invalid room type id" });
    }

    res.status(200).json({ success: 1, message: MESSAGES.DELETED });
  } catch (err: any) {
    const errMsg = handleError(err);
    res.status(401).json({ error: errMsg });
  }
};
