// Making connections to the NPM faker and mysql. Look in Resources for how to set them up

const { faker } = require("@faker-js/faker"); //Was in the scope/folder: faker-sj
var mysql = require("mysql");

//Connecting to database
var connection = mysql.createConnection({
  host: "localhost",
  user: "root", // your root username
  database: "join_us", // the name of your db
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id" + connection.threadId);
});

var s = "SELECT * FROM users";
var del = "DELETE FROM users";
var insertStatmenmt = "INSERT INTO users (email,created_at) VALUES ?";
var data = [];

for (let index = 0; index < 500; index++) {
  data.push([faker.internet.email(), faker.date.past()]);
}

connection.query(del, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.query(insertStatmenmt, [data], function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.query(s, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.end(function () {});
