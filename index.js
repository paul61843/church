const express = require("express");
const app = express();
const port = process.env.PORT || 5656;

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(port, () => {
  console.log(`app running on ${port}`);
});