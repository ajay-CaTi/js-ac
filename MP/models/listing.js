const mongoose = require("mongoose");

const listingSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number },
  image: { type: String },
  location: { type: String },
  country: { type: String },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
