const jwt = require("jsonwebtoken");

const requireAuth = async (req, res, next) => {
  const token = req.cookies.jwt;

  //   check json web token exists and is verified
  if (token) {
    try {
      const verifyToken = await jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET
      );

      req.isAuthenticated = true;

      next();
    } catch (error) {
      console.log(error.message);
      next(error);
      //   res.redirect("/login");
    }
  } else {
    req.isAuthenticated = false;
    return res.status(401).json({
      message: "you are not authenticated please login to access route",
    });
    // next();
  }

  //   res.redirect("/login");
};

module.exports = { requireAuth };
