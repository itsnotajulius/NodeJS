const express = require("express");
const app = express();
const mysql = require("mysql");
const { createConnection } = require("net");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "join_us",
});

connection.start(function (err) {
  if (err) {
    console.error("Error is:" + err.stack);
  }
});

connection.query();

app.get("/", function (req, res) {});

app.listen(function () {});

connection.end(function (err) {});
