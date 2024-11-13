import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { test } from "./backend/controllers/alumno.controller.js";
dotenv.config()
mongoose.connect(process.env.url_db)
.then(()=>{
    console.log('funciona la base de datos')
})
.catch((error)=>{
    console.log('No funciona ya valio')
})

const app=express();

app.use(cors());
app.listen(4000, ()=>{
    console.log('se escucha bien el servidor')
})

test()