const express = require("express");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Iam in AWS!");
});
app.listen(port, () => {
  console.log(`Server Listening on Port ${port}`);
});
