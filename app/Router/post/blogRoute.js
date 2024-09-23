import express from "express";
import { createBlog } from "../../controller/blog/createBlog.js";
import { getBlog, getBlogs } from "../../controller/blog/get.js";
import { deleteBlog } from "../../controller/blog/delete.js";
import { auth } from "../../middleware/auth.js";
import { addComment } from "../../controller/blog/addComment.js";
import { likeBlog } from "../../controller/blog/addLike.js";
const postRoute = express.Router();

postRoute.use("/test", (req, res) => {
  res.send("post route working");
});
postRoute.post("/createPost", auth, createBlog);
postRoute.get("/getPost/:id", auth, getBlog);
postRoute.get("/getPosts", getBlogs);
postRoute.delete("/deletePost/:id", auth, deleteBlog);
postRoute.post("/comment/:id", auth, addComment);
postRoute.post("/likes/:id", auth, likeBlog);

export const postRouter = postRoute;
