const mongoose = require("mongoose");
const teacherSchema = require("../schema/teacher");

const teacherModel = mongoose.model("teacher", teacherSchema);

module.exports = teacherModel;
