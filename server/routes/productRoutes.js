import express from "express"
import Product from "../models/productModel.js"
import asyncHandler from "express-async-handler"
import { getProducts } from "../controllers/productController.js";


const router = express.Router();

router.get("/", getProducts);
router.route("/").get(getProducts);


// async handler
// remove try catch block and pass the error to the error handler middleware
// 
