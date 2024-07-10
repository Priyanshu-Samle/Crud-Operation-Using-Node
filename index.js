import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import nodemon from "nodemon"
import dotenv from "dotenv";
import { error } from "console";


import route from "./Routes/Routes.js"
const app =  express();

app.use(bodyParser.json());

dotenv.config();
const port = process.env.Port||500;
const MongoUrl = process.env.MongoUrl

mongoose.connect(MongoUrl).then(
    app.listen(port, (req,res)=>{
        console.log("sucess");
    })
   
).catch((error)=>{
    console.log(error);
    
})
console.log("hello")
app.use("/api/data" , route);
