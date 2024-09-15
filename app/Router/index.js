import express from "express";
import { createUser } from "../controller/user/createUser.js";
import { getUser, getUsers } from "../controller/user/getUser.js";
import { deleteUser } from "../controller/user/deleteUser.js";
const router = express.Router();

router.use("/test", (req, res) => {
  res.send("router is running successfully");
});
router.post("/user", createUser);
router.get("/getUser/:id", getUser);
router.get("/getUsers", getUsers);
router.delete("/delete/:id", deleteUser);

export const Router = router;
