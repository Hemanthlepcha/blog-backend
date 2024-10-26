import { Blog } from "../../Model/blog.js";

export const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const result = await Blog.deleteOne({ id });

      if (result.deletedCount > 0) {
        res.status(200).json({ message: "Post deleted successfully" });
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    } else {
      res.status(400).json({ message: "Invalid request, blog ID is required" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Error while deleting post" });
  }
};
