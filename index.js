import dotenv from 'dotenv'
import express, { json } from 'express'
import  connectMongo  from "./connection/connectMongodb.js";
import { router } from "./router/url.js";

dotenv.config()
//database connection...
connectMongo(process.env.mongoURL);
const server =express();
server.use(json())


//http request...
server.post("/url",router);
server.get("/url1",router);

server.listen(process.env.port,()=>{console.log(`running at server ${process.env.port}`)});