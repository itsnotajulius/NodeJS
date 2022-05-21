//Defining query
var query = "SELECT 1+1 AS solution";
//Querying the database
connection.query(query, function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SELECTING DATA
var q = "SELECT CURTIME() as time, CURDATE() as date, NOW() as now";
connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results[0].time);
  console.log(results[0].date);
  console.log(results[0].now);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Querying the database
const q = "SELECT * FROM users ";
connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ");
  for (i = 0; i < results.length; i++) {
    console.log(results[i].email);
    console.log(results[i].created_at.toString());
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//*INSERTING DATA TAKE 1
var q = "INSER INTO users(emails) VALUES (rusty@gamil.com)";

connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Earliest creation
var q =
  "SELECT DATE_FORMAT(MIN(created_at), '%M %D %Y') as earliest_date FROM users";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Showing Earliest User
var q = "SELECT * FROM users ORDER BY created_at LIMIT 1";
or;
var q =
  "SELECT * FROM   users WHERE  created_at = (SELECT Min(created_at) FROM   users)";

connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Showing user created count per month
var q =
  "SELECT MONTHNAME(created_at) AS month, COUNT(*) AS count FROM users GROUP BY month ORDER BY count DESC";

connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Getting email that has yahoo in it Take 1
var q = "SELECT COUNT(*) AS yahoo_users FROM users WHERE email LIKE '%yahoo%'";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Getting email that has yahoo in it Take 2
var q = "SELECT COUNT(*) AS yahoo_users FROM users WHERE email LIKE ?";
var likie = "%yahoo%";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Querying MYSQL using Express

app.get("/", function (req, res) {
  var q = "SELECT Count(*) AS count FROM users";
  connection.query(q, function (error, results, fields) {
    if (error) throw error;
    var totalUsers = results[0].count;
    res.send("There are " + totalUsers);
  });
});
