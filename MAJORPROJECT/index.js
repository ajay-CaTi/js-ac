const Listing = require("./models/listing");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const PORT = 4000;
const app = express();

app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set(path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

main()
  .then((res) => console.log(`DB connected`))
  .catch((err) => console.log(err));

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/airseelust");
}

app.get("/", (req, res) => {
  res.send("working");
});

// app.get("/test", async (req, res) => {
//   let sample = new Listing({
//     title: "dd",
//     description: "dd",
//     price: 45,
//     location: "goa",
//     country: "India",
//   });
//   await sample.save();
//   res.send("working");
// });

app.get("/listing", async (req, res) => {
  let listings = await Listing.find();
  res.render("listings/index", { listings });
});

// new route
app.get("/listings/new", (req, res) => {
  res.render("listings/new");
});

app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  console.log(id);
  let listing = await Listing.findById(id);
  if (listing) {
    res.render("listings/show", { listing });
  } else {
    res.send("Something went wrong");
  }
});

// add new listing
app.post("/listings", async (req, res) => {
  // let listing = req.body.listing;
  // console.log(listing);
  let newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listing");
});

// EDIT ROUTE
app.get("/listings/:id/edit", async (req, res) => {
  let id = req.params.id;
  let listing = await Listing.findById(id);
  console.log(id, "id", listing, "listing");

  res.render("listings/edit", { listing });
});

// update route
app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  // let data = req.body.listing;
  // console.log(data);
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  res.redirect("/listing");
});

// delete route
app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listing");
});

app.listen(PORT, () => {
  console.log(`server run on port: ${PORT}`);
});
