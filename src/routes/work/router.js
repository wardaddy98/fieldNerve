import express from "express";
import validateSchema from "../../middlewares/validateSchema.js";
import { createWorkSchema } from "../../validationSchemas/work.schema.js";
import { handleCreateWork } from "./controller.js";

const router = express.Router();


router.route('/')
    .post(validateSchema(createWorkSchema), handleCreateWork)



export default router;