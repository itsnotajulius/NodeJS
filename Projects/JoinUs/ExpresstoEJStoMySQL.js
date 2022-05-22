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
    console.log(`err` + err.stack);
  }
  console.log(`Server is connecint`);
});

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  let q = "SELECT Count(*) AS count FROM users";

  connnection.query(q, function (err, result, fields) {
    if (err) throw err;
    let count = result[0].count;
    res.render("index", { data: count });
  });
});

app.post("/register", function (req, res) {
  let q = "INSERT INTO users SET ?";
});

app.listen(port, function () {
  console.log(`App is listening`);
});
