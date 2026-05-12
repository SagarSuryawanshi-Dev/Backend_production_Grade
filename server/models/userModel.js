import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: String,
    },
    email: {
      type: String,
      required: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true },
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
    
const User = mongoose.model("User", ProductSchema);

export default User;
