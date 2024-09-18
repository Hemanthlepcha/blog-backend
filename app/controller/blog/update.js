import { Blog } from "../../Model/blog.js";

export const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { updatedata } = req.body;

  if (id) {
    try {
      const updatedBlog = await Blog.findOneAndUpdate({ _id: id }, updatedata, {
        new: true,
        runValidators: true, // Run schema validators
      });

      if (updatedBlog) {
        res.status(200).json(updatedBlog); // Return updated user
      } else {
        res.status(404).json({ message: "Blog not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Blog update failed", error: error.message }); // Include error details
    }
  } else {
    res.status(400).json({ message: "Blog ID is required" }); // Return 400 if no ID is provided
  }
};
