import mongoose from "mongoose";
import { Blog } from "../../Model/blog.js";

export const createBlog = async (req, res) => {
  const { title, date, image, description } = req.body;
  const user = req.user.user;
  console.log("User from request:", req.user);

  try {
    if (!mongoose.Types.ObjectId.isValid(user)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const post = new Blog({
      title: title,
      date: date,
      image: image,
      description: description,
      author: new mongoose.Types.ObjectId(user),
    });

    const savedPost = await post.save();
    res.status(201).json({
      success: true,
      data: savedPost,
    });
  } catch (error) {
    console.error("Error while creating blog:", error);
    res
      .status(500)
      .json({ message: "Error creating blog", error: error.message });
  }
};
