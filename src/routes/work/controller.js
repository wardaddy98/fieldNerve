import { StatusCodes } from "http-status-codes"
import _ from "lodash"
import { Sequelize } from "sequelize"
import { BadRequestError } from "../../utils/handleError.js"
import { handleResponse } from "../../utils/handleResponse.js"
import { createWork, generateRecommendations, getWorkById } from "./service.js"

export const handleCreateWork = async (req, res) => {
    const createdWork = await createWork(req.body)
    return handleResponse(res, StatusCodes.OK, 'Work created!', createdWork)
}


export const handleGetWorkRecommendations = async (req, res) => {

    const workId = req.params?.workId;

    if (!workId) {
        throw new BadRequestError('Work id Missing!')
    }


    if (!Sequelize.Validator.isUUID(workId, 4)) {
        throw new BadRequestError('Work Id is not valid!')
    }

    const work = await getWorkById(workId);

    if (_.isEmpty(work)) {
        throw new BadRequestError('Work enquiry by this id does not exist!')
    }

    const recommendations = await generateRecommendations(work);
    return handleResponse(res, StatusCodes.OK, 'Recommendations Generated!', recommendations)
}