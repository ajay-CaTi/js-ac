const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 4000;
const ejs = require("ejs");
const engine = require("ejs-mate");
const path = require("path");
const methodOverride = require("method-override");
const MONGO_URL = "mongodb://127.0.0.1:27017/mm";
const Listing = require("./model/listing");

main()
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

async function main() {
  mongoose.connect(MONGO_URL);
}

//Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", engine);
app.set("view engine", ejs);
app.set(path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(methodOverride("_method"));

// Routes
app.get("/", async (req, res) => {
  console.log("saving done");
  res.send("working");
});

// Get all listing [ INDEX ROUTE ]
app.get("/listings", async (req, res) => {
  let listings = await Listing.find({});
  // console.log(listings);
  // res.send(listings);
  res.render("listings/index.ejs", { listings });
});

// [ NEW ROUTE ]
app.get("/listings/new", async (req, res) => {
  res.render("listings/new.ejs");
});

// [ Show ROUTE ]
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

// [ CREATE ROUTE ]
app.post("/listings/new", async (req, res) => {
  let listing = req.body.listing;
  console.log(listing);
  listing = new Listing(listing);
  listing = await listing.save();
  res.redirect("/listings");
});

// [ Edit ROUTE ]
app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  console.log(id);
  let listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
});

// [ Edit ROUTE ]
app.put("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  let listing = req.body.listing;
  console.log(id, "id", listing, "listing");
  listing = await Listing.findByIdAndUpdate(id, listing);
  res.redirect(`/listings/${id}`);
});

// [ Delete ROUTE ]
app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  console.log(id, "id");
  let listing = await Listing.findByIdAndDelete(id, { new: true });
  console.log(listing);
  res.redirect(`/listings`);
});

app.listen(PORT, () => {
  console.log(`server run on port ${PORT}`);
});
