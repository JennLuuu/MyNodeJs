const express = require("express");
const teacherModel = require("../db/model/teacher");

const route = express.Router();

route.delete("/teacher/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await teacherModel.deleteOne({ _id: id });
    res.send({
      code: 200,
      message: "ok",
      data: null,
    });
  } catch (e) {
    console.log(e.message);
    res.send({
      code: 201,
      message: "删除失败",
      data: e.message,
    });
  }
});

module.exports = route;
