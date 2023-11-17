const express = require("express");
const mongoose = require("mongoose");
const PORT = 4000;
const app = express();

main()
  .then(() => console.log(`DB connected success`))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  email: { type: String },
});

const User = mongoose.model("User", userSchema);

// User.insertMany([
//   { name: "ajay", age: 26, email: "ajay@gmail.com" },
//   { name: "mohan", age: 28, email: "mohan@gmail.com" },
//   { name: "sohan", age: 30, email: "sohan@gmail.com" },
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// User.find()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`server run on port ${PORT}`);
});
