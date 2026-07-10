import express from "express";
import { handleCreateVendor, handleGetVendors } from "./controller.js";
import validateSchema from "../../middlewares/validateSchema.js";
import { createVendorSchema } from "../../validationSchemas/vendor.schema.js";

const router = express.Router();


router.route('/')
    .get(handleGetVendors)
    .post(validateSchema(createVendorSchema), handleCreateVendor)



export default router;