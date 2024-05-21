const express = require("express");
const teacherModel = require("../db/model/teacher");

const route = express.Router();

route.put("/teacher/:id", async (req, res) => {
  const { age, address } = req.body;
  const { id } = req.params;

  try {
    await teacherModel.updateOne({ _id: id }, { $set: { age, address } });
    res.send({
      code: 200,
      message: "ok",
      data: null,
    });
  } catch (e) {
    res.send({
      code: 201,
      message: "数据库修改失败",
      data: e.message,
    });
  }
});

module.exports = route;
