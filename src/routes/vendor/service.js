import Vendor from "../../database/models/vendor.js"

export const createVendor = async (payload) => {
    return Vendor.create(payload)
}


export const findVendorByEmail = async (email) => {
    return Vendor.findOne({ where: { email }, raw: true })
}