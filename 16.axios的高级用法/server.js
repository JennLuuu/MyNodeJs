//搭建服务器

//引入内部模块
const express = require("express");
const path = require("path");

//创建express对象
const app = express();

//调用express中间件
app.use(express.json());
app.use(express.urlencoded());

/* 
  接口文档:
    * 功能:请求某个班级某个组的学生列表
    * 接口地址:/userList
    * 请求方式:GET
    * 请求参数
      - className : 班级 query
      - group : 组 query
    * 响应示例
      {
        code:
        message:
        data
      }
*/

//写get接口
app.get("/userList", (req, res) => {
  const { className, group } = req.body;
  console.log("去数据库查询拿到" + className + "班的第" + group + "组的学生");

  //给前端反馈回去
  res.send({
    code: 10000,
    message: ok,
    data: [
      {
        id: 1,
        name: "张三",
      },
      {
        id: 2,
        name: "李四",
      },
      {
        id: 3,
        name: "熊五",
      },
    ],
  });
});

/* 
  接口文档：
    * 功能：登录
    * 地址：/login
    * 方式: POST
    * 请求参数
      - username 用户名 body
      - password 密码 body
    * 响应示例
      {
        code:200成功 201 密码错误 202账号错误
        message:ok 密码错误 账号错误
        data:null
      }

*/

//写post接口
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  //判断账号
  if (username !== "admin") {
    res.send({
      code: 202,
      message: "账号错误",
      data: null,
    });
  }
  //判断密码
  if (password !== "1235") {
    res.send({
      code: 201,
      message: "密码错误",
      data: null,
    });
  }
  //成功

  res.send({
    code: 200,
    message: "ok",
    data: null,
  });
});

//访问/userList接口,可以拿到静态文件get.html
app.get("/1", (req, res) => {
  const filePath = path.resolve(__dirname, "./get.html");

  res.sendFile(filePath);
});
app.get("/2", (req, res) => {
  const filePath = path.resolve(__dirname, "./post.html");

  res.sendFile(filePath);
});

//监听接口
app.listen("8080", () => {
  console.log("http://127.0.0.1:8080");
});
