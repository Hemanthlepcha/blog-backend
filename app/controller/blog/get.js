import { Blog } from "../../Model/blog.js";

export const getBlog = (req, res) => {
  const { id } = req.body;

  try {
    if (id) {
      const post = Blog.findOne({ id });
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "Blog not found" });
      }
    } else {
      throw new Error("Id not found");
    }
  } catch (error) {
    res.status(500).json({ error: error.message, message: "Error fetching" });
  }
};

export const getBlogs = async (req, res) => {
  try {
    // Find all blogs and populate the 'author' field to get full user data
    const blogs = await Blog.find().populate("author");

    res.status(200).json(blogs);
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Error fetching blogs" });
  }
};
