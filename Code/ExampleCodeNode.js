// Making connections to the NPM faker and mysql. Look in Resources for how to set them up

const { faker } = require("@faker-js/faker");
var mysql = require("mysql");

//Connecting to database
var connection = mysql.createConnection({
  host: "localhost",
  user: "root", // your root username
  database: "join_us", // the name of your db
});

//Defining query
var query = "SELECT 1+1 AS solution";

//Defining the connection and catching errors
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id" + connection.threadId);
});

//Querying the database
connection.query(query, function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

connection.end(function (err) {
  // The connection is terminated now
});

//SELECTING DATA
var q = "SELECT CURTIME() as time, CURDATE() as date, NOW() as now";
connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results[0].time);
  console.log(results[0].date);
  console.log(results[0].now);
});

const q = "SELECT * FROM users ";

//Querying the database
connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ");
  for (i = 0; i < results.length; i++) {
    console.log(results[i].email);
    console.log(results[i].created_at.toString());
  }
});

//*INSERTING DATA TAKE 1
var q = "INSER INTO users(emails) VALUES (rusty@gamil.com)";

connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results);
});

//*INSTERTING DATA TAKE 2
var q = { email: "matjulgaming@gmail.com" };

connection.query(
  "INSERT INTO users SET ?",
  q,
  function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
  }
);

//INSERTING DATA TAKE 3
var s = "SELECT * FROM users";
var insertStatmenmt = "INSERT INTO users SET ?";
var person = { email: faker.internet.email() };

connection.query(insertStatmenmt, person, function (error, results, fields) {
  if (error) throw error;
});

connection.query(s, function (error, results, fields) {
  if (error) throw error;
  for (var i = 0; i < results.length; i++) {
    console.log(results[i].email);
  }
  console.log(results.length);
});

//*INSTERTING DATA TAKE 4
var s = "SELECT * FROM users";
var insertStatmenmt = "INSERT INTO users (email,created_at) VALUES ?";
var data = [];

for (let index = 0; index < 500; index++) {
  data.push([faker.internet.email(), faker.date.past()]);
}

connection.query(insertStatmenmt, data, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

//INSERTING DATA TAKE 5
var s = "SELECT * FROM users";
var del = "DELETE FROM users";
var insertStatmenmt = "INSERT INTO users (email,created_at) VALUES ?";
var data = [];

for (let index = 0; index < 500; index++) {
  data.push([faker.internet.email(), faker.date.past()]);
}

connection.query(insertStatmenmt, [data], function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.query(s, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

//Earliest creation
var q =
  "SELECT DATE_FORMAT(MIN(created_at), '%M %D %Y') as earliest_date FROM users";

//Showing Earliest User
var q = "SELECT * FROM users ORDER BY created_at LIMIT 1";
or;
var q =
  "SELECT * FROM   users WHERE  created_at = (SELECT Min(created_at) FROM   users)";

connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

//Showing user created count per month
var q =
  "SELECT MONTHNAME(created_at) AS month, COUNT(*) AS count FROM users GROUP BY month ORDER BY count DESC";

connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

//Getting email that has yahoo in it Take 1
var q = "SELECT COUNT(*) AS yahoo_users FROM users WHERE email LIKE '%yahoo%'";

//Getting email that has yahoo in it Take 2
var q = "SELECT COUNT(*) AS yahoo_users FROM users WHERE email LIKE ?";
var likie = "%yahoo%";

//Getting different types of emails
var q =
  "SELECT CASE WHEN email LIKE ? THEN 'gmail' WHEN email LIKE ? THEN 'yahoo' WHEN email LIKE ? THEN 'hotmail' ELSE 'other' END AS provider, COUNT(*) AS total_users FROM users GROUP BY provider ORDER BY total_users DESC";
var $gmail = "%gmail%";
var $yahoo = "%yahoo%";
var $hotmail = "%hotmail%";

connection.query(
  q,
  [$gmail, $yahoo, $hotmail],
  function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  }
);

///////////////////////////

//Setting up express
const express = require("express");
const app = express();
const port = 3000;

//Looking for home
app.get("/", function (reg, res) {
  res.send("Hello APP");
});

//Listening on given port
app.listen(port, function () {
  console.log("App is listing");
});

///////////////////////////////////////

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
