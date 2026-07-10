import express from "express";
import validateSchema from "../../middlewares/validateSchema.js";
import { createVendorSchema } from "../../validationSchemas/vendor.schema.js";
import { handleCreateVendor } from "./controller.js";

const router = express.Router();


router.route('/')
    .post(validateSchema(createVendorSchema), handleCreateVendor)

export default router;