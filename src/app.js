import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { Config } from './configuration/config.js';

const app = express();
const PORT = process.env.PORT || 3000;

import morgan from 'morgan';


global.connectionObj = new  Config().connectMongoDb();


app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.json({ liimit: '15mb'}));





import { app_routing } from './app_routing.js';

app.use('/v1',app_routing)

app.listen(PORT, () => {
    console.log(`Server is listening on port : ${PORT}`);
})