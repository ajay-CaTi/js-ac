const express = require("express");
const data = require("./data.json");
const app = express();
const path = require("path");
const PORT = 4000;

app.use(express.urlencoded({ extended: true })); // if urlencoded data comes then express understand all data

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

console.log(path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("home", { diceVal }); // bi-defaut express will find views folder for this file
});

app.get("/register", (req, res) => {
  let { femail, fpassword } = req.query;
  console.log(femail, fpassword, req.query);
  res.send(`standard GET response. Welcome ${femail}`);
});

app.post("/register", (req, res) => {
  console.log(req.body);
  let { email, password } = req.body;
  res.send(`standard POST responase ${email}`); // bi-defaut express will find views folder for this file
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  let { posts } = data;
  console.log(username);

  res.render("instagramPage", { username, posts });
});

app.get("/:username/:id", (req, res) => {
  console.log(req.params);
  let { username, id } = req.params;
  res.send(`<h1>Hello ${username} and id is ${id}</h1>`);
});

// To get QUERY
app.get("/search", (req, res) => {
  // console.log(req.query);
  let { q } = req.query;
  res.send(`These are search results: ${q}`); // here capture query
});

// app.use((req, res) => {
//   console.log("Request received");
//   // listen for all path request and give same response for different request
// });

app.listen(PORT, () => {
  console.log(`server run on port ${PORT}`);
});
