import _ from "lodash";
import { BadRequestError } from "../../utils/handleError.js";
import { handleResponse } from "../../utils/handleResponse.js";
import { createVendor, findVendorByEmail } from "./service.js";
import { StatusCodes } from 'http-status-codes'

export const handleGetVendors = (req, res) => {


    return res.json('Test')
}



export const handleCreateVendor = async (req, res) => {
    const existingVendor = await findVendorByEmail(req?.body?.email)

    if (!_.isEmpty(existingVendor)) {
        throw new BadRequestError('Vendor with this email already exists!')
    }

    const vendor = await createVendor(req.body);

    return handleResponse(res, StatusCodes.OK, 'User Created successfully!', vendor)

}