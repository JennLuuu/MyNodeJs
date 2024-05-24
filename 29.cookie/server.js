//引入所需模块
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

//创建应用对象app
const app = express();

//引入所需中间件
app.use("/static", express.static(path.resolve(__dirname, "./public")));

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

//写接口
//登录接口
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username !== "admin" || password !== "123") {
    return res.send({
      code: 201,
      message: "登录失败,用户名或密码错误",
      data: null,
    });
  }

  //保存到cookie
  //参数1: cookie的key
  //参数2: cookie的value
  //参数3: 对cookie的配置对象
  res.cookie("message", "user=admin&pass=123", {
    //旧的设置cookie过期时间的方式:expires设置过期时间
    // expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    //新的方式:max-age设置有效的时间长度
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true, //限制:只有服务端能够操作cookie
  });

  res.send({
    code: 200,
    message: "登录成功",
    data: null,
  });
});
//查询接口
app.get("/userList", (req, res) => {
  //拿到cookie中的key,判断是否存在
  //存在则说明保存过cookie,处于登录状态,否则是未登录
  const { message } = req.cookies;
  if (!message) {
    return res.send({
      code: 202,
      message: "未登录",
      data: null,
    });
  }

  //有message存在,但不确定是当前用户
  const userMessage = message.split("&").reduce((p, c) => {
    const [key, value] = c.split("=");
    p[key] = value;
    return p;
  }, {});

  const { user, pass } = userMessage;

  //判断当前用户是否登录
  if (user !== "admin"||pass!=="123") {
    return res.send({
        code:202,
        message:"未登录",
        data:null,
    })
  }

  res.send({
    code:200,
    message:"该用户已登录",
    data:["张三", "李四", "王五"],
  })
});
//退出登录接口
qpp.get("/logout", (req, res) => {
  //退出登录就是删除客户端的cookie
  //给cookie设置一个过期的时间,就是删除cookie
  res.cookie("message", "", {
    maxAge: -1000,
  });

  res.send({
    code: 200,
    message: "ok",
    data: null,
  });
});

//监听接口
app.listen("3000", () => {
  console.log("服务器启动成功, http://127.0.0.1:3000");
});
