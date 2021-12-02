const express = require("express");
const app = express();
const { findMedian } = require("./calcFunction");
const cors = require("cors");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cors());

app.post("/calculate/", (req, res) => {
  const number = req.body.number;
  res.send(findMedian(number)).status(200);
});

module.exports = app;
