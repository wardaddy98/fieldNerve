import { DataTypes } from "sequelize";
import { vendorDocTypes } from "../../../enumConstants.js";
import sequelize from "../sequelize.js";



const VendorDocument = sequelize.define('vendorDocument', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },

    vendorId: {
        type: DataTypes.UUID,
        allowNull: false
    },

    type: {
        type: DataTypes.ENUM(...vendorDocTypes),
        allowNull: false
    },
},

    {
        tableName: 'vendorDocuments',
    }
)



export default VendorDocument;