const userValidateSchema = require("../validation/userValidation");

const validateUser = async (req, res, next) => {
  try {
    await userValidateSchema.validateAsync({
      ...req.body,
    });

    next();
  } catch (err) {
    return res.status(401).json({ error: err });
  }
};

module.exports = validateUser;
