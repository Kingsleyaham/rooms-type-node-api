const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const requireAuthorization = async (req, res, next) => {
  const token = req.cookies.jwt;
  const decodedJwt = jwt.decode(token, { complete: true });

  const payload = decodedJwt.payload;

  if (payload) {
    const user = await User.findById(payload.id);
    if (user && user.role.toLowerCase() === "admin") {
      return next();
    }
    return res.status(401).json({ error: "unauthorized to access route" });
  }

  return res.status(401).json({ error: "unauthorized" });
};

module.exports = { requireAuthorization };
