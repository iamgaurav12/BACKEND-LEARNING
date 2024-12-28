const mongoose = require('mongoose');
const { type } = require('os');



const userSchema = new mongoose.Schema({
    username : String,
    email : String,
    password : String,
});

//Importing the schema to the model
const userModel = mongoose.model('user', userSchema);

//Exporting the model
module.exports = userModel;