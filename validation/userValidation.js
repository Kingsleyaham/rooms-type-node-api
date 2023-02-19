const Joi = require("joi");

const userValidateSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .trim()
    .required(),
  password: Joi.string()
    .required()
    .pattern(new RegExp("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$")),
});

module.exports = userValidateSchema;
