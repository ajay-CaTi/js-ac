const mongoose = require("mongoose");
const { data } = require("./data");
const Listing = require("../models/listing");

main()
  .then((res) => console.log(`DB connected`))
  .catch((err) => console.log(err));

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/airseelust");
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(data);
  console.log("data was initilize");
};

initDB();
