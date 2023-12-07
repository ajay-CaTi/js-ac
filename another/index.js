const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require("path");
// const ExpressErr = require("./ExpressErr");
const engine = require("ejs-mate");
const flash = require("connect-flash");
// const wrapAsync = require('./utils/wrapAsync')
// const { listingSchema, reviewSchema } = require("./models/schema");
const PORT = 4000;
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

const session = require("express-session");
const app = express();

// IMPORT ROUTES
const listingRouter = require("./routes/listing");
const reviewRouter = require("./routes/review");
const userRouter = require("./routes/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", engine);
// use ejs-locals for all ejs templates:
app.set("view engine", "ejs");
app.set(path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

// console.log(path.join(__dirname, "/views"));

// Connect DB
main()
  .then(() => console.log("db rr connected"))
  .catch((err) => console.log(err));

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/rr");
}

const sessionOptions = {
  secret: "secretsupercode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() * 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
};

// httpOnly; for security purpose, prevent from ross scripting attcaks

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize()); // middleware initilze passport
app.use(passport.session()); // bec web application needs ability to identify users as they browse from one page to another. This series of request and responses, each associated with the same user, is known as session.

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));
// authenticate() Generates a function that is used in Passport's LocalStrategy

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// passport me PBKDF2 Algorithm used

//serializeUser() Generates a function that is used by Passport to serialize users into the session
// deserializeUser() Generates a function that is used by Passport to deserialize users into the session

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.errorMsg = req.flash("errorMsg");
  res.locals.currUser = req.user;
  console.log(res.locals.success, "res.locals.success");
  next();
});

app.get("/demouser", async (req, res) => {
  let fakeuser = new User({ email: "abc@gmail.com", username: "me-user" });
  let registerUser = await User.register(fakeuser, "helloworld"); // to register a new user or save a new user & also check for UNIQUE USERNAME
  console.log(registerUser);
  res.send(registerUser);
});

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

function handleValidationError(err) {
  console.log("validation error plz follow rules");
  console.dir(err.message);
  return err;
}

app.use((err, req, res, next) => {
  console.log(err.name, "err name");
  if (err.name === "ValidationError") {
    err = handleValidationError(err);
  }
  next(err);
});

// After custom error handler class runs
app.use((err, req, res, next) => {
  console.log("--error--");
  let { status = 500, message = "something went wrong" } = err;
  res.render("listings/error.ejs", { err });
  // res.status(status).send(message);
});

// If no route match
app.use((req, res) => {
  // throw new Error("acces denide");
  res.status(404).send("page not found");
});

app.listen(PORT, () => {
  console.log(`server run on port ${PORT}`);
});
