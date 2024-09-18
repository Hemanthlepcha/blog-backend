import { Blog } from "../../Model/blog.js";

export const createBlog = async (req, res) => {
  const { title, date, image, description } = req.body;
  console.log("title", req.body);
  try {
    const post = new Blog({
      title: title,
      data: date,
      image: image,
      description: description,
    });
    const savedPost = await post.save();
    res.status(200).json({
      success: true,
      data: savedPost,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
