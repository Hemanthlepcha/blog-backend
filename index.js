import express from "express";
import "dotenv/config";
import { dbConnect } from "./app/config/database.js";
const app = express();

dbConnect();

const PORT = process.env.PORT;
console.log("Port", PORT);
/* route(app); */
app.use("/blog", (req, res, next) => {
  res.send("Blog is here");
});
app.listen(PORT, () => {
  console.log("Server running in http://localhost:5000");
});
