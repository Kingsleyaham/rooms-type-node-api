import Joi from "joi";

const roomTypeValidateSchema = Joi.object({
  name: Joi.string().trim().required(),
});

export default roomTypeValidateSchema;
