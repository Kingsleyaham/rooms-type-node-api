const jwt = require("jsonwebtoken");
const { MESSAGES } = require("../config/constants");
const User = require("../models/user.model");
const handleError = require("../utils/handleError");

const generateAccessToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "7d" });
};

const setCookie = (cookieName = "", cookieValue, res) => {
  const maxAge = 3 * 24 * 60 * 60 * 1000;

  return res.cookie(cookieName, cookieValue, {
    httpOnly: true,
    maxAge,
  });
};

const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(401).json({ message: "user already exist" });
    }
    const user = await User.create({ email, password });

    res.status(201).json({ success: 1, message: MESSAGES.CREATED });
  } catch (error) {
    const errMsg = handleError(error);
    // res.status(401).json({ error: errMsg });
    console.log(error.message);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = generateAccessToken(user._id);
    setCookie("jwt", token, res);

    res
      .status(200)
      .json({ success: 1, data: { id: user._id, email: user.email, token } });
  } catch (error) {
    console.log(error);
    const errMsg = handleError(error);
    res.status(401).json({ error: errMsg });
  }
};

const logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.status(200).json({ success: 1, message: "logout successful" });
};

module.exports = {
  signup,
  login,
  logout,
};
