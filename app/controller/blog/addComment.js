import { Blog } from "../../Model/blog.js"; // Adjust the path as necessary
import { User } from "../../Model/user.js"; // Assuming you might want to verify the user

export const addComment = async (req, res) => {
  const { id } = req.params; // Blog post ID from the URL
  const { userId, text } = req.body; // User ID and comment text from the request body

  try {
    if (!text || !userId) {
      return res
        .status(400)
        .json({ message: "User ID and comment text are required" });
    }

    const blog = await Blog.findOne({ id }); // Find the blog post by its ID
    if (!blog) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    // Add the comment
    blog.comments.push({ user: userId, text });
    await blog.save(); // Save the updated blog post

    res.status(201).json({ message: "Comment added successfully", blog });
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Error adding comment" });
  }
};
