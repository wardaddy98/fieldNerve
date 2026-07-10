import Joi from "joi";
import { vendorDocTypes } from "../../enumConstants.js";

export const createVendorDocumentSchema = Joi.object({
    type: Joi.string().valid(...vendorDocTypes).required(),
    vendorId: Joi.string().guid({
        version: [
            'uuidv4'
        ]
    }).required()

})