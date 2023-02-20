const User = require("../models/user.model");
const handleError = require("../utils/handleError");

const fetchAll = async (req, res) => {
  try {
    const user = await User.find({});

    res.status(200).json({ data: user, success: 1 });
  } catch (err) {
    const errMsg = handleError(err);
    res.status(401).json({ error: errMsg });
  }
};

const fetchUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);

    res.status(200).json({ success: 1, data: user });
  } catch (err) {
    const errMsg = handleError(err);
    res.status(401).json({ error: errMsg });
  }
};

module.exports = {
  fetchAll,
  fetchUserById,
};
