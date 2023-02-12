const RoomTypes = require("../models/RoomType");
const { MESSAGES } = require("../config/constants");
const handleError = require("../utils/handleError");

// utility functions

//-------------------------------------------------------------------//

const fetchAll = async (req, res) => {
  try {
    const roomTypes = await RoomTypes.find({});

    res.status(200).json({ data: roomTypes, success: 1 });
  } catch (error) {
    const errMsg = handleError(error);
    res.status(401).json({ error: errMsg });
  }
};

const create = async (req, res) => {
  const roomName = req.body.name;
  try {
    const roomType = await RoomTypes.create({ name: roomName });
    res.status(201).json({ success: 1, message: MESSAGES.CREATED });
  } catch (error) {
    const errMsg = handleError(error);
    res.status(401).json({ error: errMsg });
  }
};

module.exports = {
  fetchAll,
  create,
};
