const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError");
const wrapAsync = require("./utils/wrapSync");
var engine = require("ejs-mate");
const { listingSchema, reviewSchema } = require("./schema");
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

const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(", ");
    console.log(error);
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(", ");
    console.log(error);
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

app.get("/", (req, res) => {
  res.send("working");
});

app.get(
  "/listings",
  wrapAsync(async (req, res) => {
    let listings = await Listing.find({});
    console.log(listings.length);
    res.render("listings/index", { listings });
  })
);

// new route
app.get("/listing/new", (req, res) => {
  res.render("listings/new");
});

// new post route
app.post(
  "/listing",
  validateListing,
  wrapAsync(async (req, res, next) => {
    // if (!req.body.listing) {
    //   throw new ExpressError(400, "send valid data for listing");
    // }

    // const lis = new Listing(req.body.listing);
    // console.log(lis, "lis");

    let data = req.body.listing;

    let listing = new Listing(data);
    let saveData = await listing.save();
    console.log(saveData);
    res.redirect("/listings");
  })
);

// view SHOW route
app.get(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show", { listing });
  })
);

// edit route
app.get(
  "/listing/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    console.log(id);
    let listing = await Listing.findById(id);
    console.log(listing);
    res.render("listings/edit", { listing });
  })
);

app.put(
  "/listing/:id",
  validateListing,
  wrapAsync(async (req, res) => {
    if (!req.body.listing) {
      throw new ExpressError(400, "send valid data for listing");
    }

    let { id } = req.params;
    let data = req.body.listing;
    await Listing.findByIdAndUpdate(id, data);
    res.redirect("/listings");
  })
);

// delete route
app.delete(
  "/listing/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deteleListing = await Listing.findByIdAndDelete(id);
    console.log(id, "id", deteleListing, "deteleListing");
    res.redirect("/listings");
  })
);

// Reviews
// POST route
app.post(
  "/listing/:id/reviews",
  validateReview,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    let review = await Review(req.body.review);
    listing.reviews.push(review);
    await review.save();
    await listing.save();
    console.log(listing, "listing save", review, "review save");
    res.redirect(`/listings/${id}`);
  })
);

// Delete Route

app.delete(
  "/listing/:id/reviews/:reviewId",
  wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, {
      $pull: { reviews: reviewId },
    });
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listings/${id}`);
  })
);

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "page not found"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "something went wrong" } = err;
  // res.status(statusCode).send(message);
  res.status(statusCode).render("Error.ejs", { message });
  // res.status(statusCode).send(message);
});

app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`);
});
