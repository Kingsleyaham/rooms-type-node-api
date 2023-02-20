const RoomType = require("../models/roomType.model");
const { MESSAGES } = require("../config/constants");
const handleError = require("../utils/handleError");

// utility functions

//-------------------------------------------------------------------//

const fetchAll = async (req, res) => {
  try {
    const roomType = await RoomType.find({});

    res.status(200).json({ data: roomType, success: 1 });
  } catch (err) {
    const errMsg = handleError(err);
    res.status(401).json({ error: errMsg });
  }
};

const create = async (req, res) => {
  const roomName = req.body.name;
  try {
    await RoomType.create({ name: roomName });
    res.status(201).json({ success: 1, message: MESSAGES.CREATED });
  } catch (err) {
    const errMsg = handleError(err);
    res.status(401).json({ error: errMsg });
  }
};

const updateRoomType = async (req, res) => {
  const id = req.params.id;

  try {
    await RoomType.findByIdAndUpdate(id, { ...req.body });

    res.status(200).json({ success: 1, message: MESSAGES.UPDATED });
  } catch (err) {
    const errMsg = handleError(err);
    res.status(401).json({ error: errMsg });
  }
};

const deleteRoomType = async (req, res) => {
  const id = req.params.id;

  try {
    await RoomType.findByIdAndDelete(id);

    res.status(200).json({ success: 1, message: MESSAGES.DELETED });
  } catch (err) {
    const errMsg = handleError(err);
    res.status(401).json({ error: errMsg });
  }
};

module.exports = {
  fetchAll,
  create,
  updateRoomType,
  deleteRoomType,
};
