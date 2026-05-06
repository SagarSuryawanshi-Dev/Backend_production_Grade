import express from "express";

import cors from "cors"
import dotenv from "dotenv"

const app = express();


dotenv.config()
app.use(cors());;
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get("/",(req,res)=>{
    console.log("Request recevied")
    res.send("Hello world")
})

app.get("/api/products", (req, res) => {
    res.send("products are working")
})


    

export default app;
