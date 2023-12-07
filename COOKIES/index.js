const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// app.use(cookieParser("secretcode"));

const sessionOptions = {
  secret: "supersecure",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
  res.locals.successMsg = req.flash("successMsg");
  res.locals.errorMsg = req.flash("errorMsg");
  next();
});

app.get("/register", (req, res) => {
  // if(name===null || name===undefined){ }
  let { name = "anonymous" } = req.query;
  req.session.name = "ajay";
  if (name == "anonymous") {
    req.flash("errorMsg", "user not registered");
  } else {
    req.flash("successMsg", "user registered successfully");
  }
  res.redirect(`/hello`);
});

app.get("/hello", (req, res) => {
  res.render(`index`, { name: req.session.name });
});

// resave:-  even the session is not modfied it will save in temporary storege/SESSION STORE.

// saveUninitialized:- force the session that is uninitilize to be save in store.

// session:- store usefulll info inside session

// connect-flash:- FLASH is special area of session for storing messsages. Messages are written in flash and cleared after being displayed to the user.

// use req.locals to access some variables in request.render

app.get("/reqcount", (req, res) => {
  console.log(req.session);
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }
  res.send(`you send request ${req.session.count} times`);
});

// MEMORY STORE is not use for production , we use other DB based temp storage

app.get("/test", (req, res) => {
  res.send(`test success`);
});

// cookie
// router.get("/getcookie", (req, res) => {
//   res.cookie("namaste", "browser");
//   res.cookie("mast", "bro tu bata");
//   res.send("send dome cookie");
// });

// app.get("/getcookie", (req, res) => {
//   let { name = "anonymous" } = req.cookies;
//   res.send(`Hi ${name}`);
// });

// app.get("/greatsignedcookie", (req, res) => {
//   res.cookie("made-in", "India", { signed: true });
//   res.send(`signed cookie send`);
// });

// verify signed cookie
// app.get("/verify", (req, res) => {
//   console.log(req.cookies);
//   console.log(req.signedCookies);
//   res.send(`verified`);
// });

app.listen(4000, () => {
  console.log("server run on port 4000");
});
