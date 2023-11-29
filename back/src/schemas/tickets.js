import Joi from "joi"

const ticketSchema = Joi.object({
    contenido: Joi.string().min(10).max(150).required(),
    estado: Joi.string().min(10).max(20),
    admin_id: Joi.number().integer(),
    usuario_id: Joi.number().integer(),
})

export default ticketSchema