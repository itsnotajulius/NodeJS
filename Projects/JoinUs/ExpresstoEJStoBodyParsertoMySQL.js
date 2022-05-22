let bodyParser = require("body-parser");
let express = require("express");
let mysql = require("mysql");
let port = 3000;
let app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

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

app.get("/", function (req, res) {
  let q = "SELECT Count(*) AS count FROM users";

  connnection.query(q, function (err, result, fields) {
    if (err) throw err;
    let count = result[0].count;
    res.render("index", { count: count });
  });
});

app.post("/register", function (req, res) {
  let q = "INSERT INTO users SET ?";
  let person = { email: req.body.email };
  connnection.query(q, person, function (err, results, fields) {
    if (err) throw err;
    res.redirect("/");
  });
});

app.listen(port, function () {
  console.log(`App is listening`);
});
