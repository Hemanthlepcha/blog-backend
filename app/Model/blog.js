import mongoose from "mongoose";

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date.now },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

export const Blog = mongoose.model("Blog", blogSchema);
