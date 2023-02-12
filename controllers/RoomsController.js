const mongoose = require("mongoose");
const {
  Types: { ObjectId },
} = mongoose;
const { MESSAGES } = require("../config/constants");
const Room = require("../models/Room");
const RoomTypes = require("../models/RoomType");
const handleError = require("../utils/handleError");

// utility functions

const isValidObjectId = (id) => {
  return ObjectId.isValid(id) && new ObjectId(id).toString() === id;
};

const getObjectIdByRoomName = async (roomType) => {
  try {
    if (isValidObjectId(roomType)) return roomType;

    const roomId = await RoomTypes.findOne({ name: roomType }).select("_id");

    if (!roomId) {
      const randomId = mongoose.Types.ObjectId();

      return randomId;
    }

    return roomId._id;
  } catch (error) {
    const errMsg = handleError(error);
    res.status(401).json({ error: errMsg });
  }
};

const roomTypeExist = async (roomTypeId, res) => {
  try {
    const typeExist = await RoomTypes.findById(roomTypeId);
    return typeExist;
  } catch (error) {
    const errMsg = handleError(error);
    res.status(401).json({ success: 0, message: errMsg });
  }
};

const dbQueryByFilter = async (search, roomType, minPrice, maxPrice) => {
  const roomTypeVal = await getObjectIdByRoomName(roomType);
  const query = {};

  if (search) query.name = search.toLowerCase();
  if (roomType) query.roomType = roomTypeVal;
  if (minPrice) query.price = { $gte: parseInt(minPrice) };
  if (maxPrice) query.price = { $gte: 0, $lte: parseInt(maxPrice) };

  return query;
};

//-------------------------------------------------------------------//

const fetchRoomsBySearchParams = async (req, res) => {
  const { search, roomType, minPrice, maxPrice } = req.query;

  const query = await dbQueryByFilter(search, roomType, minPrice, maxPrice);

  try {
    const rooms = await Room.find(query);
    res.status(200).json({ data: rooms, success: 1 });
  } catch (error) {
    const errMsg = handleError(error);
    res.status(401).json({ error: errMsg });
  }
};

const fetchRoomById = async (req, res) => {
  const id = req.params.id;
  try {
    const room = await Room.findById(id);

    res.status(200).json({ success: 1, data: room });
  } catch (error) {
    const errMsg = handleError(error);
    res.status(401).json({ error: errMsg });
  }
};

const create = async (req, res) => {
  const { name, roomType, price } = req.body;

  if (!roomTypeExist(roomType, res)) {
    return res.json({ success: 0, message: "room type does not exist" });
  }

  try {
    const newRoom = await Room.create({ name, roomType, price });
    res.status(201).json({ success: 1, message: MESSAGES.CREATED });
  } catch (error) {
    const errMsg = handleError(error);
    res.status(401).json({ error: errMsg });
    // console.log(error.message, error.name, error.code);
  }
};

const updateRoom = async (req, res) => {
  const id = req.params.id;

  try {
    const room = await Room.findByIdAndUpdate(id, { ...req.body });

    res.status(200).json({ success: 1, message: MESSAGES.UPDATED });
  } catch (error) {
    const errMsg = handleError(error);
    res.status(401).json({ error: errMsg });
  }
};

const deleteRoom = async (req, res) => {
  const id = req.params.id;

  try {
    const room = await Room.findByIdAndDelete(id, { ...req.body });

    res.status(200).json({ success: 1, message: MESSAGES.DELETED });
  } catch (error) {
    const errMsg = handleError(error);
    res.status(401).json({ error: errMsg });
  }
};

module.exports = {
  fetchRoomsBySearchParams,
  create,
  updateRoom,
  deleteRoom,
  fetchRoomById,
};
