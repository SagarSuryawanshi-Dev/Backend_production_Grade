import express from "express";
import conntectDB from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();



dotenv.config();
conntectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("Request recevied");
  res.send("Hello world");
});

app.get("/api/products", (req, res) => {
  res.send("products are working");
});

export default app;
