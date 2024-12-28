const express = require("express");
const app = express();
const morgan = require("morgan");
const dbConnection = require("./config/db");
const userModel = require("./models/user");

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

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

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  const newUser = await userModel.create({
    username,
    email,
    password,
  });

  res.send(newUser);
});

//Read
app.get("/get-users", (req, res) => {
  userModel
    .find({
      username: "b",
    })
    .then((users) => {
      res.send(users);
    });
});

//Update
app.get("/update-user", async (req, res) => {
  await userModel
    .findOneAndUpdate(
      {
        username: "b",
      },
      {
        email: "c@c.com",
      }
    )
    .then((user) => {
      res.send(user);
    });
});

app.get("/delete-user", async (req, res) => {
  await userModel.findOneAndDelete({
    username: "b",
  })
  res.send("User deleted");
})

app.post("/get-form-data", (req, res) => {
  console.log(req.body);
  res.send("Data received");
});
app.listen(3000, () => {
  console.log("Server is listening on the port 3000");
});
