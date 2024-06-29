import express from "express";
import {config} from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/dbConnection.js";
import{errorMiddleware} from "./middlewares/errorMiddlewares.js"
import userRouter from "../backend/router/userRouter.js"
import nutRoutes from './router/nutRouter.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import aut from "./router/auth.js"


export const app = express();
config({path:"./config/config.env"});
app.use(cors({
    origin:[process.env.FRONTEND_URL,process.env.DASHBOARD_URL],
    methods:["GET","PUT","POST","DELETE"],
    credentials:true,
})
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true})); 
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir:"/tmp/"
}));

app.use("/api/v1/user",userRouter);
app.use("/api/v1/nutrients", nutRoutes);
app.use('/api/auth', aut);
dbConnection();


app.use(errorMiddleware);
export default app;