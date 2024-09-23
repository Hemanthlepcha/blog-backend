import { Blog } from "../../Model/blog.js";

export const likeBlog = async (req, res) => {
  const { id } = req.params; // Blog post ID from the URL
  const { userId } = req.body; // User ID from the request body

  try {
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const blog = await Blog.findOne({ id }); // Find the blog post by its ID
    if (!blog) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    // Check if the user has already liked the blog
    if (blog.likes.includes(userId)) {
      return res
        .status(400)
        .json({ message: "You have already liked this post" });
    }

    // Add the user's ID to the likes array
    blog.likes.push(userId);
    await blog.save(); // Save the updated blog post

    res.status(200).json({ message: "Blog liked successfully", blog });
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Error liking blog" });
  }
};
