import express from 'express';
const app = express();
const PORT = 3000;






import { app_routing } from './app_routing.js';

app.use('v1',app_routing)

app.listen(PORT, () => {
    console.log(`Server is listening on port : ${PORT}`);
})