const Chat = require("./models/chat");
const ExpressError = require("./ExpressError");
const methodOverride = require("method-override");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const PORT = 5000;

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

app.get(
  "/chats",
  asyncWrap(async (req, res, next) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render("index", { chats });
  })
);

// NEW ROUTE
app.get("/chats/new", (req, res) => {
  res.render("new");
  // throw new ExpressError(401, "page not found");
});

// create route  use express.json()
app.post(
  "/chats",
  asyncWrap(async (req, res, next) => {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
      from: from,
      to: to,
      msg: msg,
      created_at: new Date(),
    });
    await newChat.save();
    res.render("/chats");
  })
);

const handleValidationError = (err) => {
  console.log("this was a validation error plz follow rules");
  console.dir(err.message);
  return err;
};

app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "ValidationError") {
    err = handleValidationError(err);
  }
  next(err);
});

// ERROR handler Middleware
function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

// edit ROUTE SHOW
app.get(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
      // throw new ExpressError(404, "chat not found");
      next(new ExpressError(404, "chat not found"));
    }
    console.log(chat);
    res.render("edit", { chat });
  })
);

app.put(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let { msg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
      id,
      { msg: msg },
      { runValidators: true, new: true }
    );
    console.log(updatedChat);
    res.redirect("/chats");
  })
);

// Delete chats

app.delete(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let delChat = await Chat.findByIdAndDelete(id);
    console.log(delChat);
    res.redirect("/chats");
  })
);

// Error handling middleware
app.use((err, req, res, next) => {
  console.log("--Error--");
  let { status = 500, message = "some error occured" } = err;
  res.status(status).send(message);
});

app.listen(PORT, () => {
  console.log(`server run on port: ${PORT}`);
});
