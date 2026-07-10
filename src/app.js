import express from 'express';
import helmet from 'helmet';
import constants from './constants.js';
import sequelize from './database/sequelize.js';
import baseRouter from './routes/baseRouter.js';
import { handleError } from './utils/handleError.js';



(async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()


const app = express();

app.use(helmet());
app.use(express.json());

app.get('/health-check', (req, res) => {
    res.json('Live')
})

app.use('/', baseRouter);

app.use(handleError)


app.listen(constants.PORT)


