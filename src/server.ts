import 'reflect-metadata';
import express from "express";

require('dotenv').config();

import router from "./routes/routes";

import "./database/connect"

const app = express();

app.use(express.json());
app.use(router);

const port = 3000
app.listen(port, () => console.log(`✅ Api is running in http://localhost:${port}`));

 