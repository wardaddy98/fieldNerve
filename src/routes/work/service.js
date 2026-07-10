import { Sequelize } from "sequelize"
import Vendor from "../../database/models/vendor.js"
import Work from "../../database/models/work.js"

export const createWork = async (payload) => {
    return Work.create(payload, { raw: true })
}


export const getWorkById = (workId) => {
    return Work.findByPk(workId, { raw: true })
}



export const generateRecommendations = async (workDetails) => {

    const vendors = await Vendor.findAll({
        where: {
            category: workDetails.category,
            status: "active",
        },
        attributes: {
            include: [
                [
                    Sequelize.literal(`
                    (
                        CASE WHEN "vendor"."state" = '${workDetails.state}' THEN 5 ELSE 0 END +
                        CASE WHEN "vendor"."city" ILIKE '${workDetails.city}' THEN 5 ELSE 0 END +
                        CASE WHEN "vendor"."type" = 'Self Performing' THEN 5 ELSE 0 END +
                        CASE WHEN "vendor"."type" = 'Hybrid' THEN 3 ELSE 0 END +
                        CASE WHEN "vendor"."type" = 'Outsourcing' THEN 0 ELSE 0 END +
                        COALESCE("vendor"."rating", 0) +
                        COALESCE((
                            SELECT COUNT(*) FROM "vendorDocuments" 
                            WHERE "vendorDocuments"."vendorId" = "vendor"."id"
                        ), 0) +
                        ${workDetails.priority ? `
                        CASE 
                            WHEN "vendor"."leadTimeInDays" <= 10 THEN 5
                            WHEN "vendor"."leadTimeInDays" <= 20 THEN 4
                            WHEN "vendor"."leadTimeInDays" <= 30 THEN 3
                            WHEN "vendor"."leadTimeInDays" <= 60 THEN 2
                            WHEN "vendor"."leadTimeInDays" <= 80 THEN 1
                            ELSE 0
                        END
                        ` : '5'}
                    )
                    `),
                    "score"
                ]
            ],
        },
        order: [[Sequelize.literal("score"), "DESC"]],
        limit: 5
    });

    return vendors

}