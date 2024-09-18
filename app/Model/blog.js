import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  id: { type: String, default: uuidv4 },
  title: { type: String, required: true },
  date: { type: Date, default: Date.now }, // Corrected this line
  image: { type: String, required: true },
  description: { type: String, required: true },
});

export const Blog = mongoose.model("Blog", blogSchema);
