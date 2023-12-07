const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = Schema({
  comment: String,
  rating: { type: Number, min: 1, max: 5 },
  createdAt: {
    type: Date,
    default: new Date(Date.now()).toString(),
  },
});

module.exports = mongoose.model("Review", reviewSchema);
