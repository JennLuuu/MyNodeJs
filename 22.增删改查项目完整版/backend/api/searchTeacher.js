const express = require("express");
const teacherModel = require("../db/model/teacher");

const route = express.Router();

route.get("/teacher", async (req, res) => {
  let {
    subject = /./g,
    sex = /./g,
    maxAge = 10000,
    minAge = -10000,
  } = req.query;
  if (subject === "") {
    subject = /./g;
  }
  if (sex === "") {
    sex = /./g;
  }
  if (maxAge === "") {
    maxAge = 10000;
  }
  if (minAge === "") {
    minAge = -10000;
  }

  // console.log(subject, sex, typeof maxAge, minAge);

  try {
    const result = await teacherModel.find({
      subject,
      sex,
      age: { $gte: minAge, $lte: maxAge },
    });
    res.send({
      code: 200,
      message: "ok",
      data: result,
    });
  } catch (e) {
    res.send({
      code: 201,
      message: "数据库查询失败",
      data: null,
    });
  }
});

module.exports = route;
