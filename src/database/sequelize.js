
import { Sequelize } from "sequelize";
import constants from "../constants.js";

const sequelize = new Sequelize(constants.DB_URI, {
    dialect: 'postgres'
})


export default sequelize