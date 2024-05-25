const mongoose = require("mongoose");

const userSchema = require("../Schema/userSchema");

const userModel = mongoose.model("userList", userSchema);

module.exports = userModel;
