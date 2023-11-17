const Chat = require("./models/chat");
const methodOverride = require("method-override");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
// DATA NEED TO PARSE
app.use(express.json());
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

main()
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// let chat1 = new Chat({
//   from: "neha",
//   to: "priya",
//   msg: "send me exam sheet",
//   created_at: new Date(),
// });
// chat1
//   .save()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//   Index route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  console.log(chats);
  res.render("index", { chats });
});

// New route
app.get("/chats/new", (req, res) => {
  res.render("new");
});

// create route  use express.json()
app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  newChat
    .save()
    .then((res) => console.log(res, "chat is saved"))
    .catch((err) => console.log(err));
  res.redirect("/chats");
});

// edit route
app.get("/chats/:id/edit", async (req, res) => {
  try {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    console.log(chat);
    res.render("edit", { chat });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msg } = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { msg: msg },
    { runValidators: true, new: true }
  );
  console.log(updatedChat);
  res.redirect("/chats");
});

// Delete chats

app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let delChat = await Chat.findByIdAndDelete(id);
  console.log(delChat);
  res.redirect("/chats");
});

app.listen(PORT, () => {
  console.log(`server run on port: ${PORT}`);
});
