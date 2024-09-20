import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // User who commented
  text: { type: String, required: true }, // Comment text
  date: { type: Date, default: Date.now },
});

const blogSchema = new Schema({
  id: { type: String, default: uuidv4 }, // UUID for the blog
  title: { type: String, required: true },
  date: { type: Date, default: Date.now }, // Creation date
  image: { type: String, required: true },
  description: { type: String, required: true },

  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

  comments: [commentSchema],
});

export const Blog = mongoose.model("Blog", blogSchema);
