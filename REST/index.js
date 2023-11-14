// REST
// Representational State Transfer ::-- is an arctictural style that define set of rules rules for craeting web services

// RESTFULL api used in CRUD(TERM from DB concept) operation

const express = require("express");
const app = express();
const PORT = 4000;
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

let posts = [
  { id: uuidv4(), username: "Monu", content: "Working coding" },
  { id: uuidv4(), username: "Changu", content: "Only Working" },
  { id: uuidv4(), username: "Mangu", content: "Only coding" },
];

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true })); // if urlencoded data comes then express understand all data
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public")));

// console.log(path.join(__dirname, "/views"));

// API START *************-------

app.get("/posts", (req, res) => {
  res.render("index", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new");
});

app.post("/posts", (req, res) => {
  console.log(req.body);
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  //   res.send("working post request");
  res.redirect(302, "/posts");
});

// show.ejs
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);

  if (post === undefined) {
    console.log(id, req.params, post);
    res.status(500).send("USER NOT FOUND");
  } else {
    console.log(id, req.params, post);
    res.render("show", { post });
  }
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  console.log(post);

  let newContent = req.body.content;
  // console.log(newContent);
  // post.username = username;
  post.content = newContent;
  console.log(post);
  res.redirect("/posts");
});

// edit
app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  console.log("post is:- ", post, "id is:- ", id);

  if (post === undefined) {
    console.log(`id is ${id}, parameter is ${req.params.id}, post is ${post}`);
    res.status(500).send("USER NOT FOUND");
  } else {
    // let newContent = post.content;
    // console.log(newContent);
    // post.content = newContent;
    // console.log(post);
    res.render("edit", { post });
  }
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  console.log("delete succes", post);
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
});

app.listen(PORT, () => {
  console.log(`serven run on port: ${PORT}`);
});
