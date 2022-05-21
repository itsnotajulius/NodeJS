let express = require("express");
let mysql = require("mysql");
let port = 3000;
let app = express();

let connnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "join_us",
});

connnection.connect(function (err) {
  if (err) {
    console.log(`Server is connecint`);
  }
});

let q = "SELECT Count(*) AS count FROM users";

app.get("/", function (req, res) {
  connnection.query(q, function (err, result, fields) {
    res.send("This ammount users " + result[0].count);
  });
});

app.listen(function () {
  console.log(`App is listening`);
});
