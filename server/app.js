import express, { urlencoded } from "express";

import cors from "cors"
import dotenv from "dotenv"

const app = express();


dotenv.config()
app.use(cors());;
app.use(express.json());
app.use(urlencoded({extended: true}))


app.get("/",(req,res)=>{
    console.log("Request recevied")
    res.send("Hello world")
})
    

export default app;
