const jwt = require("jsonwebtoken");

const requireAuth = async (req, res, next) => {
  const token = req.cookies.jwt;

  //   check json web token exists and is verified
  if (token) {
    try {
      await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      next();
    } catch (error) {
      next(error);
    }
  } else {
    return res.status(401).json({
      message: "you are not authenticated please login to access route",
    });
  }
};

module.exports = { requireAuth };
