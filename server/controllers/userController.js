import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import customError from "../middleware/errorMiddleware.js";
import jwt from "jsonwebtoken";

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new customError("Please provide email and password", 400);
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new customError("Invalid email or Password", 401);
  }
  const isPasswordMatch = await User.matchPassword(password);

  if (!isPasswordMatch) {
    throw new customError("Invalid Password", 401);
  } else {
    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      isadmin: user.isadmin,
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
});
