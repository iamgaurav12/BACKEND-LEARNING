const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://0.0.0.0/node").then(() => {
  console.log("Connected to the database");
});

module.exports = connection;
