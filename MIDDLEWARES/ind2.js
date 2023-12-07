const ExpressEr = require("./ExpressEr");
const express = require("express");
const app = express();

let checkT = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    return next();
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
  let { status = 500, message = "some error occured" } = err;
  res.status(status).send(message);
});

app.listen(4000, () => {
  console.log(`server run on port 4000`);
});
