import { Blog } from "../../Model/blog";

export const createBlog = (req, res) => {
  const { tittle, date, image, description } = req.body;
  try {
    const post = new Blog({
      title: tittle,
      data: date,
      image: image,
      description: description,
    });
    const savedPost = post.save();
    res.status(200).json({
      success: true,
      data: savedPost,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating post" });
  }
};
