import { Request, Response } from "express";
import mongoose, { Types } from "mongoose";
// import { Types } from "mongoose";
import { MESSAGES } from "../constants";
const {
  Types: { ObjectId },
} = mongoose;
import Room from "../models/room.model";
import RoomType from "../models/roomType.model";
import handleError from "../utils/handleError";

// interfaces

interface IQueryValues {
  name?: string;
  roomType?: unknown;
  price?: { $gte: number; $lte?: number };
}

// ----------------------------------- //

// utility functions

const isValidObjectId = (id: Types.ObjectId) => {
  return ObjectId.isValid(id) && new ObjectId(id) === id;
};

const getObjectIdByRoomName = async (roomType: any, res: Response) => {
  try {
    if (isValidObjectId(roomType)) return roomType;

    const roomId = await RoomType.findOne({ name: roomType }).select("_id");

    if (!roomId) {
      const randomId = new mongoose.Types.ObjectId();

      return randomId;
    }

    return roomId._id;
  } catch (err: any) {
    const errMsg = handleError(err);
    res.status(401).json({ error: errMsg });
  }
};

const roomTypeExist = async (roomTypeId: Types.ObjectId, res: Response) => {
  try {
    const typeExist = await RoomType.findById(roomTypeId);
    return typeExist;
  } catch (err: any) {
    const errMsg = handleError(err);
    res.status(401).json({ error: errMsg });
  }
};

const dbQueryByFilter = async (
  search: any,
  roomType: unknown,
  minPrice: any,
  maxPrice: any,
  res: Response
) => {
  const roomTypeVal = await getObjectIdByRoomName(roomType, res);
  const query: IQueryValues = {};

  if (search) query.name = search.toLowerCase();
  if (roomType) query.roomType = roomTypeVal;
  if (minPrice) query.price = { $gte: parseInt(minPrice) };
  if (maxPrice) query.price = { $gte: 0, $lte: parseInt(maxPrice) };

  return query;
};

//-------------------------------------------------------------------//

export const fetchRoomsBySearchParams = async (req: Request, res: Response) => {
  const { search, roomType, minPrice, maxPrice } = req.query;

  const query = await dbQueryByFilter(
    search,
    roomType,
    minPrice,
    maxPrice,
    res
  );

  try {
    const rooms = await Room.find(query);
    res.status(200).json({ success: 1, data: rooms });
  } catch (err: any) {
    const errMsg = handleError(err);
    res.status(401).json({ error: errMsg });
  }
};

export const fetchRoomById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const room = await Room.findById(id);
    if (!room) {
      return res.status(400).json({ error: "invalid room id" });
    }

    res.status(200).json({ success: 1, data: room });
  } catch (err: any) {
    const errMsg = handleError(err);
    res.status(401).json({ error: errMsg });
  }
};

export const create = async (req: Request, res: Response) => {
  const { name, roomType, price } = req.body;

  if (!(await roomTypeExist(roomType, res))) {
    return res.status(401).json({ error: "room type does not exist" });
  }

  try {
    await Room.create({ name, roomType, price });
    res.status(201).json({ success: 1, message: MESSAGES.CREATED });
  } catch (err: any) {
    const errMsg = handleError(err);
    res.status(401).json({ error: errMsg });
  }
};

export const updateRoom = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const room = await Room.findByIdAndUpdate(id, { ...req.body });
    if (!room) {
      return res.status(400).json({ error: "invalid room id" });
    }

    res.status(200).json({ success: 1, message: MESSAGES.UPDATED });
  } catch (err: any) {
    const errMsg = handleError(err);
    res.status(401).json({ error: errMsg });
  }
};

export const deleteRoom = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const room = await Room.findByIdAndDelete(id);
    if (!room) {
      return res.status(400).json({ error: "invalid room id" });
    }

    res.status(200).json({ success: 1, message: MESSAGES.DELETED });
  } catch (err: any) {
    const errMsg = handleError(err);
    res.status(401).json({ error: errMsg });
  }
};
