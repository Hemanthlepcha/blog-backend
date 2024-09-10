import express from "express";
const app = express();
const PORT = 5000;

/* route(app); */
app.use("/blog", (req, res, next) => {
  res.send("Blog is here");
});
app.listen(PORT, () => {
  console.log("Server running in localhost:5000");
});
