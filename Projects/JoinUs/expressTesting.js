const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (reg, res) {
  res.send("Hello APP");
});

app.get("/joke", function (reg, res) {
  res.send("Jokiee");
});

app.get("/random_num", function (req, res) {
  Math.floor(Math.random() * 1) + 1;
});

app.listen(port, function () {
  console.log("App is listing");
});
