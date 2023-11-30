import Joi from "joi";

const userSchema = Joi.object({
  nombre: Joi.string().alphanum().min(3).max(15).required(),
  apellido: Joi.string().alphanum().min(3).max(15).required(),
  correo: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string()
    .pattern(/^(?=.+[0-9])(?=.+[a-z])(?=.+[A-Z])(?=.+[#%&_-]).{8,16}$/m)
    .required(),
});

export default userSchema;
