module.exports.isLoggedIn = (req, res, next) => {
  console.log(req.user);
  console.log(
    req.isAuthenticated(),
    "req.isAuthenticated(), in middleware file"
  );
  if (!req.isAuthenticated()) {
    req.flash("errorMsg", "you must be logged in to create listing");
    return res.redirect("/login");
  }
  next();
};
