const Joi = require("joi");

const roomTypeValidateSchema = Joi.object({
  name: Joi.string().trim().required(),
});

module.exports = roomTypeValidateSchema;
