const mongoose = require("mongoose");
const Listing = require("../models/listing");
let { sampleListings } = require("./data");

main()
  .then(() => console.log("db rr connected"))
  .catch((err) => console.log(err));

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/rr");
}

async function cr() {
  // console.log(sampleListings);
  await Listing.deleteMany();
  console.log("data deleted success");
  sampleListings = sampleListings.map((obj) => ({
    ...obj,
    owner: "656eedd30406bca746cc09c2",
  }));
  let listing = await Listing.insertMany(sampleListings);
  console.log(listing, listing.length, "inserted success");
}

cr();
