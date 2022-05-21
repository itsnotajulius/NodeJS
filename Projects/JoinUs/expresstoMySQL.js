const express = require("express");
const app = express();
const mysql = require("mysql");
const { createConnection } = require("net");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "join_us",
});

connection.
(function (err) {
  if (err) {
    console.error("Error is:" + err.stack);
  }
});

var q = "SELECT Count(*) AS count FROM users";

connection.query(q, function (error, results, fields) {
  console.log(results);
});

app.get("/", function (req, res) {});

app.listen(function () {
  console.log("App is listening");
});

connection.end(function (err) {});
