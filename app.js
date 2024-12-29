const express = require("express");
const userRoutes = require("./routes/user.routes");
const app = express();

app.set("view engine", "ejs");

app.use("/user", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});