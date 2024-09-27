import { Blog } from "../../Model/blog.js";

export const addComment = async (req, res) => {
  const { id } = req.params;
  const { userId, text } = req.body;

  try {
    if (!text || !userId) {
      return res
        .status(400)
        .json({ message: "User ID and comment text are required" });
    }

    const foundBlog = await Blog.findOne({ id });
    if (!foundBlog) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    // Add the comment
    foundBlog.comments.push({ user: userId, text });
    await foundBlog.save();

    res.status(201).json({ message: "Comment added successfully", foundBlog });
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Error adding comment" });
  }
};
