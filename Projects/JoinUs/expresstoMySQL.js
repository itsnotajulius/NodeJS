const express = require("express");
const app = express();
const mysql = require("mysql");
const { createConnection } = require("net");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "join_us",
});

connection.connect(function (err) {
  if (err) {
    console.error("Error is:" + err.stack);
  }
});

app.get("/", function (req, res) {
  var q = "SELECT Count(*) AS count FROM users";
  connection.query(q, function (error, results, fields) {
    if (error) throw error;
    var totalUsers = results[0].count;
    res.send("There are " + totalUsers);
  });
});

app.listen(port, function () {
  console.log("Server is listening");
});
