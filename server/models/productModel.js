import mongoose from "mongoose";

const reveiwSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  Rating: {
    type: Number,
    required: true,
  },
  Comment: {
    type: String,
    required: true,
  },
});

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    Image: {
      type: String,
      required: true,
    },
    Brand: {
      type: String,
      required: true,
    },
    Category: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Reveiw: [reviewSchema],
    Rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numRating: {
      type: Number,
      required: true,
      default: 0,
    },
    Price: {
      type: Number,
      required: true,
      default: 0,
    },
    CountInStrock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", productSchema);

export default Product;
