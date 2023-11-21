const Listing = require("./models/listing");
var engine = require("ejs-mate");
const express = require("express");
const path = require("path");
const app = express();
const PORT = 4000;
const mongoose = require("mongoose");
const methodOverride = require("method-override");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
// use ejs-locals for all ejs templates:
app.engine("ejs", engine);
app.set(path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

main()
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/mp");
}

app.get("/", (req, res) => {
  res.send("working");
});

app.get("/listings", async (req, res) => {
  let listings = await Listing.find({});
  res.render("listings/index", { listings });
});

// new route
app.get("/listing/new", (req, res) => {
  res.render("listings/new");
});

// new post route
app.post("/listing", async (req, res) => {
  let data = req.body.listing;
  console.log(data);
  let listing = new Listing(data);
  await listing.save();
  // console.log(listing);
  res.redirect("/listings");
});

// view route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  res.render("listings/show", { listing });
});

// edit route
app.get("/listing/:id/edit", async (req, res) => {
  let { id } = req.params;
  console.log(id);
  let listing = await Listing.findById(id);
  console.log(listing);
  res.render("listings/edit", { listing });
});

app.put("/listing/:id", async (req, res) => {
  let { id } = req.params;
  let data = req.body.listing;
  await Listing.findByIdAndUpdate(id, data);
  res.redirect("/listings");
});

// delete route
app.delete("/listing/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
});

app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`);
});
