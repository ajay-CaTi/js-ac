const Chat = require("./models/chat");
const mongoose = require("mongoose");

main()
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

let allChats = [
  {
    from: "neha",
    to: "priya",
    msg: "send me exam sheet",
    created_at: new Date(),
  },
  {
    from: "priya",
    to: "neha",
    msg: "i do not have",
    created_at: new Date(),
  },
  {
    from: "neha",
    to: "priya",
    msg: "plz give me exam sheet i have exams",
    created_at: new Date(),
  },
  {
    from: "priya",
    to: "neha",
    msg: "i said i do not have",
    created_at: new Date(),
  },
  {
    from: "neha",
    to: "priya",
    msg: "chal theek",
    created_at: new Date(),
  },
  {
    from: "priya",
    to: "neha",
    msg: "sorry i have to i share you now",
    created_at: new Date(),
  },
  {
    from: "neha",
    to: "priya",
    msg: "got it thanks",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
