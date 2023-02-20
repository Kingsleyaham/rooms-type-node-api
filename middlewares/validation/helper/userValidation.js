const Joi = require("joi");

const userValidateSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .trim()
    .required(),
  password: Joi.string().required().min(8),
});

module.exports = userValidateSchema;
