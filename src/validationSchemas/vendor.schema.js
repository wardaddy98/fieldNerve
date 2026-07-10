import Joi from "joi";
import { indianStates, vendorStatus, vendorTypes, workCategories } from "../../enumConstants.js";

export const createVendorSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string()
        .email()
        .required(),
    city: Joi.string().required(),
    state: Joi.string().valid(...indianStates).required(),
    phoneNo: Joi.string()
        .pattern(/^[6-9]\d{9}$/)
        .required()
        .messages({
            "string.pattern.base": "Phone number must be a valid 10-digit Indian mobile number.",
        }),
    rating: Joi.number().min(0).max(5).required(),
    status: Joi.string().valid(...vendorStatus).required(),
    type: Joi.string().valid(...vendorTypes).required(),
    category: Joi.string().valid(...workCategories).required(),
    leadTimeInDays: Joi.number().integer().min(0).required()

})