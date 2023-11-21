const mongoose = require("mongoose");
const Listing = require("../models/listing");
const { data } = require("./data");

main()
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/mp");
}

async function ini() {
  await Listing.deleteMany({});
  await Listing.insertMany(data);
  // let first = await Listing.find({});
  // console.log(first);
  console.log("initilize");
}

ini();
