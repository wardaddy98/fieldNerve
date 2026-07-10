import { DataTypes } from "sequelize";
import { indianStates, workCategories } from "../../../enumConstants.js";
import sequelize from "../sequelize.js";

const Work = sequelize.define('work', {

    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    category: {
        type: DataTypes.ENUM(...workCategories),
        allowNull: false
    },


    estimatedValue: {
        type: DataTypes.BIGINT,
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

    priority: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },

    expectedStartDate: {
        type: DataTypes.DATE
    }

},

    {
        paranoid: true,
        tableName: 'works',
    }
)



export default Work;