import express from "express";
import { createBlog } from "../../controller/blog/createBlog.js";
import { getBlog, getBlogs } from "../../controller/blog/get.js";
import { deleteBlog } from "../../controller/blog/delete.js";
import { auth } from "../../middleware/auth.js";
const postRoute = express.Router();

postRoute.use("/test", (req, res) => {
  res.send("post route working");
});
postRoute.post("/createPost", auth, createBlog);
postRoute.get("/getPost/:id", auth, getBlog);
postRoute.get("/getPosts", getBlogs);
postRoute.delete("/deletePost/:id", auth, deleteBlog);

export const postRouter = postRoute;
