import { Router } from "express";
import { userRouter } from "./User/user.js";

const router = Router();

router.use("users/", userRouter);

export const Route = router;
