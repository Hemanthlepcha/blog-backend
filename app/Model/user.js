import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
  },
  password: {
    type: String, // Corrected type
  },
});

export const User = mongoose.model("User", UserSchema);
