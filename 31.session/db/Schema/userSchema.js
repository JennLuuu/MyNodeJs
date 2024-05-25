const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  tickname: String,
  sex: String,
  hobby: String,
});

module.exports = userSchema;
