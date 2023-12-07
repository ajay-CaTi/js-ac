const express = require("express");
const router = express.Router();
const { wrapAsync } = require("../utils/wrapAsync");
const ExpressErr = require("../ExpressErr");
const { listingSchema } = require("../models/schema");
const Listing = require("../models/listing");
const { isLoggedIn } = require("../middleware");

const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(", ");
    console.log(errMsg);
    throw new ExpressErr(400, error);
  } else {
    next();
  }
};

// New Route

router.get(
  "/new",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    console.log(req.user);

    res.render("listings/new");
  })
);

// get route
router.get(
  "/",
  wrapAsync(async (req, res) => {
    console.log(req.cookies);
    let listings = await Listing.find({});
    console.log(listings.length);
    res.render("listings/index", { listings });
  })
);

// add NEW listing
router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res, next) => {
    let { listing } = req.body;
    console.log(listing, "data comes from body");
    listing.owner = req.user._id;
    let newListing = new Listing(listing);
    let dataSaved = await newListing.save();
    req.flash("success", "New listing created");
    console.log(dataSaved, "saved");
    res.redirect("/listings");
  })
);

//  single listing
router.get(
  "/:id",
  wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id)
      .populate("reviews")
      .populate("owner");
    if (!listing) {
      req.flash("errorMsg", "Listing u request did not exist");
      res.redirect("/listings");
    }
    // if (!listing) {
    //   next(new ExpressErr(500, "chat not found"));
    // }
    // if (listing === null || listing === undefined) {
    // }
    console.log(listing);
    res.render("listings/show", { listing });
  })
);

//  get edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
      req.flash("errorMsg", "Listing u request did not exist");
      res.redirect("/listings");
    }
    res.render("listings/edit", { listing });
  })
);

//  PUT now save the edited data route Update
router.put(
  "/:id",
  isLoggedIn,
  validateListing,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    // let { listing } = await req.body;
    let findListing = Listing.findById(id);

    console.log(
      findListing.owner.equals(res.locals.currUser._id),
      "equal or not"
    );

    if (!findListing.owner.equals(res.locals.currUser._id)) {
      req.flash("errMsg", "You do not have permission to edit");
      return res.redirect(`/listings/${id}`);
    }

    let dataSaved = await Listing.findByIdAndUpdate(id, findListing, {
      new: true,
    });
    console.log(dataSaved, "new data saved");
    req.flash("success", "listing updated");
    res.redirect(`/listings/${id}`);
  })
);

//  DELETE data route
router.delete(
  "/:id",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let dataSaved = await Listing.findByIdAndDelete(id);
    console.log(dataSaved, "this data deleted");
    req.flash("success", "listing is delete");
    res.redirect(`/listings`);
  })
);

// router.get("/wrong", (req, res, next) => {
//   try {
//     abc = abc;
//     console.log(err.message);
//     // throw new Error("access denide");
//   } catch (err) {
//     next(err);
//   }
// });

// Middleware Practice
// router.use("/api", (req, res) => {
//   let { token } = req.query;
//   if (token === "access") {
//     console.log("inside middleware route");
//     res.send("Access granted");
//   } else {
//     throw new ExpressErr(403, "Access Denide!");
//   }
// });

// router.get("/api", (req, res) => {
//   console.log("inside api route");
//   res.send("access granted");
// });

module.exports = router;
