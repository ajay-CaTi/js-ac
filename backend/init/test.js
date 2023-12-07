const mongoose = require("mongoose");
const Listing = require("../model/listing");
const { data } = require("./data");

main()
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/mm");
}

fun();

async function fun() {
  console.log(data);
  let deleteData = await Listing.deleteMany();
  let insertData = await Listing.insertMany(data);
  console.log(insertData, deleteData, "work done");
}
