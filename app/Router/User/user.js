import express from "express";
import { createUser } from "../../controller/user/createUser.js";
import { getUser, getUsers } from "../../controller/user/getUser.js";
import { deleteUser } from "../../controller/user/deleteUser.js";
import { logIn } from "../../controller/user/logIn.js";
const userRoute = express.Router();

userRoute.use("/test", (req, res) => {
  res.send("router is running successfully");
});
userRoute.post("/createUser", createUser);
userRoute.get("/getUser/:id", getUser);
userRoute.get("/getUsers", getUsers);
userRoute.delete("/delete/:id", deleteUser);
userRoute.get("/logIn", logIn);
export const userRouter = userRoute;
