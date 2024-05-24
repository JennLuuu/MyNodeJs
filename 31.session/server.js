//引入要使用的模块
const express = require("express");
const path = require("path");
//引入数据库
const db = require("./db");
const cookieParser = require("cookie-parser");
const userModel = require("./db/Model/userModel");

//创建应用实例
const app = express();

//引入中间件
app.use(express.json());
app.use(express.urlencoded());
app.use("/static", express.static(path.resolve(__dirname, "./public")));
app.use(cookieParser);

//写接口
const session = {};
//注册接口
app.post("/register", async (req, res) => {
  const { username, password, tickname, sex, hobby } = req.body;

  //判断用户名username是否对冲
  const isRepeat = await userModel.findOne({ username });
  if (isRepeat) {
    res.send({
      code: 202,
      message: "用户名冲突",
      data: null,
    });
  }

  //不冲突,则注册用户名
  try {
    await userModel.create({ username, password, tickname, sex, hobby });
    res.send({
      code: 200,
      message: "注册成功",
      data: null,
    });
  } catch (error) {
    res.send({
      code: 201,
      message: "数据库新增失败," + error.message,
      data: null,
    });
  }
});
//登录接口
app.post("/login", async (req, res) => {
  let { username, password } = req.body;
  username = decodeURI(username);
  password = decodeURI(password);

  try {
    const result = await userModel.findOne(
      { username, password },
      { tickname: 1 }
    );
    if (!result) {
      res.send({
        code: 202,
        message: "账号或密码错误",
        data: null,
      });
    } else {
      //创建一个独一无二的sessionID(独一无二:时间戳+随机数)
      const sessionID = (Date.now() + Math.random() * 10 ** 13).toString(36);
      //Date.now()+Math.random()*10**13  得到一个独一无二的值
      //(Date.now()+Math.random()*10**13).toString(36)  将这个值转成字符串,toString(36)里面写一个数字,意为将其转成该进制数

      //将该sessionID设置到session对象身上
      session[sessionID] = { username, password };
      res.send({
        code: 200,
        message: "登录成功",
        data: null,
      });
    }
  } catch (error) {
    res.send({
      code: 203,
      message: "登录时数据库查询失败",
      data: null,
    });
  }
});
//查询接口
app.get("/userList", async (req, res) => {
  const { sessionID } = req.cookies;
  if (!sessionID) {
    return res.send({
      code: 202,
      message: "未登录",
      data: null,
    });
  }

  //验证sessionID
  const { username, password } = session[sessionID];
  try {
    const result = await userModel.findOne({ username, password });
    if (!result) {
      res.send({
        code: 202,
        message: "未登录",
        data: null,
      });
    } else {
      res.send({
        code: 200,
        message: "登录中",
        data: ["张三", "李四", "王五", "赵六"],
      });
    }
  } catch (error) {
    res.send({
        code:202,
        message:"数据库查询失败",
        data:null,
    })
  }
});

//监听端口
app.listen("3001", (req, res) => {
  console.log("服务器启动成功, http://127.0.0.1:3001");
});
