import { StatusCodes } from "http-status-codes"
import { handleResponse } from "../../utils/handleResponse.js"
import { createWork } from "./service.js"

export const handleCreateWork = async (req, res) => {
    const createdWork = await createWork(req.body)
    return handleResponse(res, StatusCodes.OK, 'Work created!', createdWork)
}