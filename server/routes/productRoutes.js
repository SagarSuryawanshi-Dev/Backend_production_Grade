import express from "express"
import Product from "../models/productModel.js"
import { getProducts } from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";


const router = express.Router();

// router.get("/", getProducts);
router.route("/").get(protect, admin, getProducts);


// async handler
// remove try catch block and pass the error to the error handler middleware
 
