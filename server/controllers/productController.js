import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  if (product) {
    res.json(products);
  } else {
    res.status(404);
    throw new Error("Products not Found");
  }
});
