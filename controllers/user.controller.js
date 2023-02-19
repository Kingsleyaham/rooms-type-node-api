const { MESSAGES } = require("../config/constants");
const User = require("../models/user.model");
const handleError = require("../utils/handleError");

const fetchAll = async (req, res) => {
  try {
    const user = await User.find({});

    res.status(200).json({ data: user, success: 1 });
  } catch (error) {
    const errMsg = handleError(error);
    res.status(401).json({ error: errMsg });
  }
};

const fetchUserById = (req, res) => {};

module.exports = {
  fetchAll,
  fetchUserById,
};
