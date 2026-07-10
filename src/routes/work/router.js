import express from "express";
import validateSchema from "../../middlewares/validateSchema.js";
import { createWorkSchema } from "../../validationSchemas/work.schema.js";
import { handleCreateWork, handleGetWorkRecommendations } from "./controller.js";

const router = express.Router();


router.route('/:workId/recommendations').get(handleGetWorkRecommendations)

router.route('/')
    .post(validateSchema(createWorkSchema), handleCreateWork)



export default router;