import { DataTypes } from "sequelize";
import { indianStates, vendorStatus, vendorTypes, workCategories } from "../../../enumConstants.js";
import sequelize from "../sequelize.js";
import VendorDocument from "./vendorDocuments.js";

const Vendor = sequelize.define('vendor', {

    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },


    city: {
        type: DataTypes.STRING,
        allowNull: false
    },


    state: {
        type: DataTypes.ENUM(...indianStates),
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    phoneNo: {
        type: DataTypes.STRING,
        allowNull: false
    },

    rating: {
        type: DataTypes.DOUBLE,
        defaultValue: 0,
        validate: {
            max: 5,
            min: 0
        }
    },

    status: {
        type: DataTypes.ENUM(...vendorStatus),
        allowNull: false
    },

    category: {
        type: DataTypes.ENUM(...workCategories),
        allowNull: false
    },

    type: {
        type: DataTypes.ENUM(...vendorTypes),
        allowNull: false
    },

    //days in which vendor can begin work
    leadTimeInDays: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        }
    }


},

    {
        paranoid: true,
        tableName: 'vendors',
    }
)


Vendor.hasMany(VendorDocument),
    VendorDocument.belongsTo(Vendor, {
        foreignKey: {
            allowNull: false,
            name: 'vendorId'

        },
        onDelete: 'CASCADE'
    })


export default Vendor;