import express from "express";
import { createBlog } from "../../controller/blog/createBlog.js";
import { getBlog, getBlogs } from "../../controller/blog/get.js";
import { deleteBlog } from "../../controller/blog/delete.js";
const postRoute = express.Router();

postRoute.use("/test", (req, res) => {
  res.send("post route working");
});
postRoute.post("/createPost", createBlog);
postRoute.get("/getPost/:id", getBlog);
postRoute.get("/getPosts", getBlogs);
postRoute.delete("/deletePost/:id", deleteBlog);

export const postRouter = postRoute;
