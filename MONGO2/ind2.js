const Chat = require("./models/chat");
const ExpressErr = require("./ExpressErr");
const methodOverride = require("method-override");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
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

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  console.log(chats);
  res.render("index", { chats });
});

// NEW ROUTE
app.get("/chats/new", (req, res) => {
  //   throw new ExpressErr(404, "page not found");
  res.render("new");
});

// create route  use express.json()
app.post("/chats", async (req, res, next) => {
  try {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
      from: from,
      to: to,
      msg: msg,
      created_at: new Date(),
    });
    await newChat.save();
    res.render("/chats");
  } catch (err) {
    next(err);
  }
});

// const handleValidationError = (err) => {
//   console.log("this was a validation error plz follow rules");
//   console.dir(err.message);
//   return err;
// };

// app.use((err, req, res, next) => {
//   console.log(err.name);
//   if (err.name === "ValidationError") {
//     err = handleValidationError(err);
//   }
//   next(err);
// });

// // ERROR handler Middleware
// function asyncWrap(fn) {
//   return function (req, res, next) {
//     fn(req, res, next).catch((err) => next(err));
//   };
// }

// edit ROUTE SHOW
app.get("/chats/:id", async (req, res, next) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  if (!chat) {
    // throw new ExpressErr(404, "chat not found");
    next(new ExpressErr(500, "chat not found"));
  }
  //   console.log(chat);
  res.render("edit", { chat });
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

// Error handling middleware
app.use((err, req, res, next) => {
  console.log("--Error--");
  let { status = 500, message = "some error occured" } = err;
  res.status(status).send(message);
});

app.listen(PORT, () => {
  console.log(`server run on port: ${PORT}`);
});
