// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// const { Schema } = mongoose;
// main()
//   .then((res) => console.log("Db connected"))
//   .catch((err) => console.log(err));

// async function main() {
//   mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
// }

// const userSchema = new Schema({
//   username: String,
//   addresses: [{ _id: false, location: String, city: String }],
// });

// const User = mongoose.model("User", userSchema);

// const addUsers = async () => {
//   let user1 = new User({
//     name: "champak",
//     addresses: [{ location: "221B mohan farma street", city: "bagghapur" }],
//   });

//   user1.addresses.push({
//     location: "447A kohla market street",
//     city: "chisti nagar",
//   });

//   let result = await user1.save();
//   console.log(result);
// };

// addUsers();

// app.get("/", (req, res) => {
//   res.send("working");
// });

// app.listen(4000, () => {
//   console.log("serevr run on port 4000");
// });

const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Db connected"))
  .catch((err) => console.log(err));

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/rd");
}

const userSchema = new Schema({
  username: String,
  address: [{ _id: false, location: String, city: String }],
});

const User = mongoose.model("User", userSchema);

const addUser = async function () {
  const user1 = new User({
    username: "aman",
    address: [{ location: "mannu pur", city: "gorakhpur" }],
  });

  user1.address.push({ location: "guana", city: "mana" });

  let res = await user1.save();

  console.log(res);
};

addUser();
