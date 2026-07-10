import { StatusCodes } from "http-status-codes"
import _ from "lodash"
import { BadRequestError } from "../../utils/handleError.js"
import { handleResponse } from "../../utils/handleResponse.js"
import { createVendorDoc, findSingleVendorDoc } from "./service.js"

export const handleCreateVendorDocument = async (req, res) => {

    const existingVendorDoc = await findSingleVendorDoc({ type: req.body.type, vendorId: req.body.vendorId })

    if (!_.isEmpty(existingVendorDoc)) {
        throw new BadRequestError(`A Doc for ${existingVendorDoc.type} already exists for this vendor!`)
    }

    const createdVendorDocument = await createVendorDoc(req.body)


    return handleResponse(res, StatusCodes.OK, 'Vendor Doc created', createdVendorDocument)
}