import express from "express";
import "dotenv/config";
import { dbConnect } from "./app/config/database.js";
import { Route } from "./app/Router/index.js";
import cors from "cors";
const app = express();
const PORT = process.env.PORT;
console.log("Port", PORT);
var corsOptions = {
  origin: "http://localhost:5173",
};
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: corsOptions, credentials: true }));
dbConnect();
app.use("/api", Route);
app.use("/blog", (req, res, next) => {
  res.send("Blog is here");
});
app.listen(PORT, () => {
  console.log("Server running in http://localhost:5000");
});
