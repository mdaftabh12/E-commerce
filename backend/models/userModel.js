import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
