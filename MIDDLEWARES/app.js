const ExpressError = require("./ExpressError");
const express = require("express");
const app = express();

// MIDDLEWARE
// app.use((req, res) => {
//   console.log("Middleware");
// });

// app.use((req, res) => {
//   console.log("Middleware");
//   res.send("middlewae finished");
// });

// app.use((req, res, next) => {
//   console.log("Middleware", Date.now());
//   next();
// });

// app.use((req, res, next) => {
//   console.log("i am next Middleware", Date.now());
//   next();
// });

app.get((req, res, next) => {
  req.time = new Date(Date.now()).toString();
  console.log(req.method, req.hostname, req.path, req.pathname, req.time);
  next();
});

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token == "giveaccess") {
    console.log(token);
    return next();
  }
  //   throw new Error("Access Denied!");
  throw new ExpressError(401, "Access Denied!");
  //   res.send("Access Denied");
};

app.get("/wrong", (req, res) => {});

app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

app.get("/", (req, res) => {
  res.send("working root");
});

app.get("/err", (req, res) => {
  abcd = abcd;
  res.send("some");
});

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access to admin forbidden");
});

app.use((err, req, res, next) => {
  console.log("----Error---");
  let { status = 500, message = "some error occured" } = err;
  //   console.log(err);
  //   next(err);// want to call next error handling middleware
  //   next(err); // want to call next non error handling middleware
  res.status(status).send(message);
});

app.get("/random", (req, res) => {
  res.send("random page");
});

app.listen(4000, () => {
  console.log(`server run on port 4000`);
});
