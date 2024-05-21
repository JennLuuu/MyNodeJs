const express = require("express");
//引入teacherModel
const teacherModel = require("../db/model/teacher");

const route = express.Router();

route.post("/teacher", async (req, res) => {
  //拿到请求体数据
  const { name, sex, age, subject, address } = req.body;

  //添加数据库
  try {
    await teacherModel.create({
      name,
      sex,
      age,
      subject,
      address,
    });

    res.send({
      code: 200,
      message: "ok",
      data: null,
    });
  } catch (e) {
    res.send({
      code: 201,
      message: "添加数据库失败",
      data: null,
    });
  }
});

module.exports = route;
