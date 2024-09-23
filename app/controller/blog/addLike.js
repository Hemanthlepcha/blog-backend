import { Blog } from "../../Model/blog.js";

export const likeBlog = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  try {
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const blog = await Blog.findOne({ id });
    if (!blog) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    if (blog.likes.includes(userId)) {
      return res
        .status(400)
        .json({ message: "You have already liked this post" });
    }

    blog.likes.push(userId);
    await blog.save();

    res.status(200).json({ message: "Blog liked successfully", blog });
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Error liking blog" });
  }
};
