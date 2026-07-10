import Work from "../../database/models/work.js"

export const createWork = async (payload) => {
    return Work.create(payload, { raw: true })
}