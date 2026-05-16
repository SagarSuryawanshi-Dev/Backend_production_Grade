import express from "express";
import User from "../models/userModel.js"
import {logoutUser, regsiterUser,updateUser} from "../controllers/userController.js"
import { protect } from "../middleware/authMiddleware.js";


const router = express.router()


router.route("/user").post(regsiterUser)
router.route("/updateuser").put(protect, updateUser)
router.route("/logout").get(protect,logoutUser)

export default router