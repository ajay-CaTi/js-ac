const mongoose = require("mongoose");

main()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String },
  price: { type: Number, min: [1, "Price is too low for selling"] },
  descount: { type: Number, default: 0 },
  category: { type: String, enum: ["friction", "non-friction"] },
  genre: [String],
});

const Book = new mongoose.model("Book", bookSchema);

const book1 = new Book({
  title: "marvel",
  author: "me again",
  price: 50,
  genre: ["comice", "superheroes", "friction"],
});

book1
  .save()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
