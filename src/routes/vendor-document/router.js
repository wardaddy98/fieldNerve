import express from "express";
import validateSchema from "../../middlewares/validateSchema.js";
import { createVendorDocumentSchema } from "../../validationSchemas/vendorDocument.schema.js";
import { handleCreateVendorDocument } from "./controller.js";

const router = express.Router();


router.route('/')
    .post(validateSchema(createVendorDocumentSchema), handleCreateVendorDocument)


export default router;