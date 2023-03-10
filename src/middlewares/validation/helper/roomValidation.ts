import Joi from "joi";

const roomValidateSchema = Joi.object({
  name: Joi.string().trim().required(),
  roomType: Joi.string().trim().required(),
  price: Joi.number().required().min(0),
});

export default roomValidateSchema;
