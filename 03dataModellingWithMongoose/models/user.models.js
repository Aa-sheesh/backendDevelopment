import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // Beginner Way of Defining Schema
    // username: String,
    // password: String,
    // email: String,
    // isActive: Boolean,

    // Advanced Way of Defining Schema
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
