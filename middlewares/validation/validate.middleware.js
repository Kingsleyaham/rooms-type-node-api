const handleError = require("../../utils/handleError");
const roomValidateSchema = require("./helper/roomValidation");
const userValidateSchema = require("./helper/userValidation");

const validateUser = async (req, res, next) => {
  if (req.path !== "/logout") {
    try {
      await userValidateSchema.validateAsync({
        ...req.body,
      });

      next();
    } catch (err) {
      const [error] = err.details;
      const errMsg = handleError(error);
      return res.status(401).json({ error: errMsg });
    }
  } else {
    return next();
  }
};

const validateRoom = async (req, res, next) => {
  if (req.path == "/" && req.method == "POST") {
    try {
      await roomValidateSchema.validateAsync({ ...req.body });

      next();
    } catch (err) {
      const [error] = err.details;
      const errMsg = handleError(error);
      return res.status(401).json({ error: errMsg });
    }
  } else {
    return next();
  }
};

const validateRoomType = async (req, res, next) => {
  if (!((req.path == "/" && req.method == "GET") || req.method == "DELETE")) {
    try {
      await roomValidateSchema.validateAsync({ ...req.body });

      next();
    } catch (err) {
      const [error] = err.details;
      const errMsg = handleError(error);
      return res.status(401).json({ error: errMsg });
    }
  } else {
    return next();
  }
};

module.exports = { validateUser, validateRoom, validateRoomType };
