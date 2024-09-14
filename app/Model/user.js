import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  email: { type: String, required: true },
  password: { type: string },
});
export const User = mongoose.model("User", UserSchema);
