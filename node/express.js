const express = require("express");
const app = express();
const morgan = require("morgan");

app.set("view engine", "ejs");

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get(
  "/",
  (req, res, next) => {
    console.log("A new request received at " + Date.now());
    return next();
  },
  (req, res) => {
    res.render("form");
  }
);

app.get("/about", (req, res) => {
  res.send("The about page");
});

app.get("/profile", (req, res) => {
  res.send("The profile page");
});

app.post("/get-form-data", (req, res) => {
  console.log(req.body);
  res.send("Data received");
});
app.listen(3000, () => {
  console.log("Server is listening on the port 3000");
});
