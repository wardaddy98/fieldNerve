import VendorDocument from "../../database/models/vendorDocuments.js"

export const createVendorDoc = async (payload) => {
    return await VendorDocument.create(payload)
}

export const findSingleVendorDoc = async (query) => {
    return VendorDocument.findOne({ where: { ...query } })
} 