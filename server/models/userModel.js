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
userSchema.pre('save',async function(next){
  if(this.isModified('password')){
    next()
  }
  const slat = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})
    
const User = mongoose.model("User", ProductSchema);

export default User;
