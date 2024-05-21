const express = require("express");
//引入数据库
require("./db");
//引入teacher接口
const addTeacher = require("./api/addTeacher");
const searchTeacher = require("./api/searchTeacher");
const deleteTeacher = require("./api/deleteTeacher");
const updateTeacher = require("./api/updateTeacher");
//引入中间件
const corsMiddle = require("./middleware/cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(corsMiddle);

app.use(addTeacher);
app.use(searchTeacher);
app.use(deleteTeacher);
app.use(updateTeacher);

app.listen("3000", (err) => {
  if (err) {
    return console.log("服务器启动失败", err.message);
  }

  console.log("服务器启动成功,地址是 http://127.0.0.1:3000");
});
