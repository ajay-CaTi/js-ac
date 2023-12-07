const express = require("express");
const router = express.Router({ mergeParams: true });
const { wrapAsync } = require("../utils/wrapAsync");
const ExpressErr = require("../ExpressErr");
const { reviewSchema } = require("../models/schema");
const Review = require("../models/reviews");
const Listing = require("../models/listing");

const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(", ");
    console.log(errMsg);
    throw new ExpressErr(400, error);
  } else {
    next();
  }
};

//Reviews
// Post route
router.post(
  "/",
  validateReview,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    let newReview = new Review(req.body.review);
    listing.reviews.push(newReview);
    let saveReview = await newReview.save();
    let saveListing = await listing.save();

    req.flash("success", "review added");

    console.log(
      saveReview,
      saveListing,
      "new review and review inside listing is saved"
    );
    res.redirect(`/listings/${id}`);
  })
);

//Reviews
// Delete route
router.delete(
  "/:reviewId",
  wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;

    let updateListing = await Listing.findByIdAndUpdate(id, {
      $pull: { reviews: reviewId },
    });
    let reviewDel = await Review.findByIdAndDelete(reviewId, { new: true });

    req.flash("success", "review deleted");

    console.log(reviewDel, "review deleted", updateListing, "listing updated");
    res.redirect(`/listings/${id}`);
  })
);

module.exports = router;
