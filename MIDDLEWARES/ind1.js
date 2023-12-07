const ExpressEr = require("./ExpressEr");
const express = require("express");
const app = express();

let checkT = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }

  throw new ExpressEr(401, "access denide!"); // do this
};

app.get("/apii", checkT, (req, res) => {
  res.send("access granted");
});

app.get("/err", (req, res) => {
  abcd = abcd;
  res.send("some");
});

app.use((err, req, res, next) => {
  console.log(err);
  console.log("--Error--"); // for normal execution after error then put next()
  next(err);
});

app.use((err, req, res, next) => {
  console.log("--Error2--");
  res.send(err);
});

app.listen(4000, () => {
  console.log(`server run on port 4000`);
});
