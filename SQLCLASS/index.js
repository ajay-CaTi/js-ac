const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const path = require("path");
const methodOverride = require("method-override");
const express = require("express");
const app = express();
const PORT = 4000;

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true })); // if urlencoded data comes then express understand all data
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "my_app",
  password: "123456789",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// // simple query INSET NEW DATA
// let q = "INSERT INTO user(id, username, email, password) VALUES ?";
// let data = [];
// for (let i = 1; i <= 100; i++) {
//   console.log(data.push(getRandomUser()));
// }
// connection.end();

app.get("/", (req, res) => {
  let q = `SELECT COUNT(*) FROM user`;
  try {
    connection.query(q, (err, results, fields) => {
      if (err) throw err;
      let total = results[0]["COUNT(*)"]; //[{"COUNT(*)":100}]
      console.log(total);
      res.render("home", { total });
    });
  } catch (error) {
    console.log(error);
    res.send("some error in DB");
  }
});

app.get("/users", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, users, fields) => {
      if (err) throw err;
      let total = users[0]["COUNT(*)"];
      console.log("total: ", total);
      res.render("showusers", { users });
    });
  } catch (error) {
    console.log(error);
    res.send("some error in DB");
  }
});

// Edit route

app.get("/user/:id/edit", (req, res) => {
  let id = req.params.id;
  let q = `SELECT * FROM user WHERE id="${id}"`;
  console.log("id", id);
  try {
    connection.query(q, (err, result, fields) => {
      if (err) throw err;
      console.log(result);
      let user = result[0];
      if (user) {
        res.render("edit", { user });
      } else {
        res.send("USER NOT FOUND");
      }
    });
  } catch (error) {
    console.log(error);
    res.send("some error in DB");
  }
});

// UPDATED route

app.patch("/user/:id", (req, res) => {
  let { username: newUsername, password: formPassword } = req.body;
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  console.log("id", id, newUsername, formPassword);

  try {
    connection.query(q, (err, result, fields) => {
      if (err) throw err;
      let user = result[0];
      console.log("user: ", user);
      if (formPassword != user.password) {
        res.send("Wrong Pasword");
      } else {
        let q2 = `UPDATE user SET username="${newUsername}" WHERE id='${id}'`;
        console.log("enter else", newUsername, q2);
        connection.query(q2, (err, result) => {
          if (err) throw err;
          console.log(result);
          res.redirect("/users");
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.send("some error in DB");
  }
});

app.listen(PORT, () => {
  console.log(`server listen on port: ${PORT}`);
});

// try {
//   connection.query(q, [data], (err, results, fields) => {
//     if (err) throw err;
//     console.log(results); // results contains rows returned by server
//   });
// } catch (error) {
//   console.log(error);
// }

// mysql -u root -p
// source schema.sql
