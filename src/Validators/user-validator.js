const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  age: Joi.number().integer().min(18),
  city: Joi.string(),
  zipCode: Joi.string().pattern(/^\d{5}$/).required(),
});

module.exports = userSchema;
