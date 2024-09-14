import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  id: { type: string, default: uuidv4 },
  title: { type: String, required: true },
  date: { type: Date.now },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

export const Blog = mongoose.model("Blog", blogSchema);
