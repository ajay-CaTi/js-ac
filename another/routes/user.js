const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { wrapAsync } = require("../utils/wrapAsync");
const passport = require("passport");

router.get("/signup", (req, res) => {
  res.render("users/signup");
});

router.post(
  "/signup",
  wrapAsync(async (req, res, next) => {
    try {
      let { username, email, password } = await req.body;
      let newuser = new User({ username, email });
      let registerUser = await User.register(newuser, password);
      console.log(registerUser);
      req.login(registerUser, (err) => {
        if (err) {
          return next(err);
        }
        req.flash("success", "user registered successfully Welcome");

        res.redirect("/listings");
      });
    } catch (err) {
      console.log(err);
      req.flash("errorMsg", err.message);
      res.redirect("/");
    }
  })
);

router.get("/login", (req, res) => {
  res.render("users/login");
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  wrapAsync(async (req, res) => {
    req.flash("success", " Welcome back you are loggedIn!");
    res.redirect("/listings");
  })
);

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "Logout success!");
    res.redirect("/listings");
  });
});

module.exports = router;
