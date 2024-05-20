//1. 搭建服务器
const express = require("express");

//2. 创建应用对象
const app = express();

//3. 调用中间件
app.use(express.json());
app.use(express.urlencoded());

//4. 写接口
app.get("/user", (req, res) => {
  //设置CORS响应头解决跨域问题
  res.set("Access-Control-Allow-Origin", req.headers.origin);

  res.send("good nice");
});

app.get("/user1", (req, res) => {
  console.log(req.headers.origin);
  const whiteArr = [
    "http://127.0.0.1:5501",
    "http://127.0.0.1:5502",
    "http://127.0.0.1:5503",
    "http://127.0.0.1:5504",
  ];

  if(whiteArr.includes(req.headers.origin)){
    res.set("Access-Control-Allow-Origin",req.headers.origin)
  }

  res.send("good nice")
});

//5. 监听端口
app.listen("8080",()=>{
    console.log("http://127.0.0.1:8080");
})
