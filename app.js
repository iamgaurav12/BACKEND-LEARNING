const express = require("express");
const userRoutes = require("./routes/user.routes");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const connectToDB = require("./config/db");
connectToDB();


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/user", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
