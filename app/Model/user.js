import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {
    type: String, // Store UUID as a string
    default: uuidv4, // Use uuidv4 to generate default values
  },
  name: {
    type: String,
    required: true,
    maxLength: 100,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure emails are unique
  },
  password: {
    type: String,
    required: true, // Password should be required
  },

  // Blogs authored by this user
  blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog" }],

  // Blogs liked by this user
  likedBlogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog" }],

  // Blogs commented on by this user
  commentedBlogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog" }],
});

export const User = mongoose.model("User", userSchema);
