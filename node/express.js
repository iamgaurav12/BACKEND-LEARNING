const express = require("express");
const app = express();
const morgan = require("morgan");

app.set("view engine", "ejs");

app.use(morgan("dev"));

app.get(
  "/",
  (req, res, next) => {
    console.log("A new request received at " + Date.now());
    return next();
  },
  (req, res) => {
    res.render("index");
  }
);

app.get("/about", (req, res) => {
  res.send("The about page");
});

app.get("/profile", (req, res) => {
  res.send("The profile page");
});

app.listen(3000, () => {
  console.log("Server is listening on the port 3000");
});
