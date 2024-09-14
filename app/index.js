import express from "express";
import "dotenv/config";
import { dbConnect } from "./app/config/database.js";
const app = express();
const PORT = process.env.PORT;
console.log("Port", PORT);

//Internal middleware for parsing json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbConnect();

route(app);
app.use("/blog", (req, res, next) => {
  res.send("Blog is here");
});
app.listen(PORT, () => {
  console.log("Server running in http://localhost:5000");
});
