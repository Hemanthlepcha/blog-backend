export const route = (app) => {
  app.use("/", (req, res) => {
    res.send("Request received");
  });
};
