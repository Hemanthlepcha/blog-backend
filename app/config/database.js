import mongoose from "mongoose";
import "dotenv/config";
export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");
  } catch (error) {
    console.error(error);
  }
};
