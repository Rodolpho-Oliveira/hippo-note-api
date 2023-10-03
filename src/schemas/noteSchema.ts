import Joi from "joi"

export const noteSchema = Joi.object({
    title: Joi.string().min(1).max(30).required(),
    description: Joi.string().min(1).max(999).required(),
    categoryName: Joi.string().required(),
    image: Joi.string().uri().allow('')
})