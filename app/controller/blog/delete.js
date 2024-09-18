import { Blog } from "../../Model/blog.js";

export const deleteBlog = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  console.log("Id from delete", id);
  try {
    if (id) {
      // Query by the custom `id` field which stores the UUID
      const result = await Blog.deleteOne({ id });

      // Check if the blog post was successfully deleted
      if (result.deletedCount > 0) {
        res.status(200).json({ message: "Post deleted successfully" }); // Return JSON with a status of 200
      } else {
        res.status(404).json({ message: "Post not found" }); // Return JSON if no post is found
      }
    } else {
      res.status(400).json({ message: "Invalid request, blog ID is required" }); // Return 400 for missing ID
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Error while deleting post" }); // Return JSON for errors
  }
};
