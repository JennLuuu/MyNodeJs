const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/userList", (req, res) => {
  const { className, group } = req.query;
  console.log("去数据库查询" + className + "班的第" + group + "组的学生");
  //响应一段js代码
  res.send("alert(1)");
});

app.get("/user", (req, res) => {
  const { callback } = req.query;

  //响应一段js代码
  res.send(`${callback}()`);
});

app.get("/user2", (req, res) => {
  const { callback } = req.query;
  const data = {
    code: 10000,
    message: "ok",
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
  };

  //响应一段js代码
  res.send(`${callback}(${JSON.stringify(data)})`);
});

app.listen("3000", () => {
  console.log("http://127.0.0.1:3000");
});
