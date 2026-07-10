import Joi from "joi";
import { indianStates, workCategories } from "../../enumConstants.js";

export const createWorkSchema = Joi.object({
    title: Joi.string().required(),
    category: Joi.string()
        .valid(...workCategories)
        .required(),
    estimatedValue: Joi.number()
        .integer()
        .min(0)
        .required(),
    city: Joi.string().required(),
    state: Joi.string().valid(...indianStates).required(),
    priority: Joi.boolean(),
    expectedStartDate: Joi.date().required()
});