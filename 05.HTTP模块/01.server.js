//1. node提供了一个http模块可以搭建一个服务器
const http = require("http");

//2. 通过http模块的createServer的方法可以创建一个服务,当服务器启动,只要有请求,回调函数就会执行
const server = http.createServer((request, response) => {
  //回调函数接收两个参数,分别是request(请求对象)和response(响应对象)
  // console.log("hello");

  // console.log(request);

  //响应头
  response.setHeader("Content-Type", "text/plain;charset=utf-8");

  //response中提供一个方法end,可以响应数据
  response.end("发财暴富,财神爱护");
});

//3. 启动服务(配置服务器的地址和端口号)
//服务器地址有3种(localhost,127.0.0.1,本地局域网地址)
server.listen("8080", "192.168.37.23", (err) => {
  if (err) {
    return console.log("服务器启动失败");
  }

  console.log("发财暴富,财神爱护");

  console.log("服务器启动成功,地址是http://192.168.37.23:8080");
});
