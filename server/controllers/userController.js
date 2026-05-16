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



export const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (!userExists) {
    res.status(400);
    throw new customError("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201)
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      isadmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new customError("Invalid User Credentials");
  }
});


export const updateUser = asyncHandelr(async(req,res)=> {
  const user = await User.findById(req.body._id)
  if(user) {
    user.name = req.body.name || user.name
     user.email = req.body.email || user.email
     if(req.body.password) user.password = req.user.password
     await user.save()
     res.status(200).json({
      id:user._id,
      name:user.name,
      email:user.email
     })
  }else{
    res.status(404)
    throw new customError("user not found")
  }

})

export const logoutUser = asyncHandler(async(req,res,next)=> {
  res.cookie('jwt', " ",{
    httpOnly:true,
    expires: new Date(0)
  })
  res.status(200).json({
    message:"Logout User Successfully"
  })
})