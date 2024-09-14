import express from "express";
import { createUser } from "../controller/user/createUser.js";
import { getUser, getUsers } from "../controller/user/getUser.js";
const router = express.Router();

router.use("/test", (req, res) => {
  res.send("router is running successfully");
});
router.post("/user", createUser);
router.get("/getUser/:id", getUser);
router.get("/getUsers", getUsers);

export const Router = router;
