const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (reg, res) {
  res.send("Hello APP");
});

app.get("/joke", function (reg, res) {
  res.send("Jokiee");
});

app.listen(port, function () {
  console.log("App is listing");
});
