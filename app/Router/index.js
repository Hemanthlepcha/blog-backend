import { Router } from "express";
import { userRouter } from "./User/user.js";
import { postRouter } from "./post/blogRoute.js";

const router = Router();

router.use("/users", userRouter);
router.use("/post", postRouter);

export const Route = router;
