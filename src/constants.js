import dotenv from 'dotenv';
import { cleanEnv, port, str } from 'envalid';
dotenv.config();

const constants = cleanEnv(process.env, {
    DB_URI: str(),
    PORT: port({ default: 3001 }),

})


export default constants;
