const express = require("express");
const path = require("path");
const eTag = require("etag");
const fs = require("fs");
const util = require("util");

const app = new express();

//引入静态资源中间件
app.use("/static", express.static(path.resolve(__dirname, "./public")));

//写get接口
app.get("/txt", async (req, res) => {
  //拿到请求头中客户端保存的文件唯一标识和最后一次修改时间
  const ifNoneMatch = req.headers["if-none-match"];
  const ifModifiedSince = req.headers["if-modified-since"];

  //文件路径
  const filePath = path.resolve(__dirname, "./01.txt");

  //获取文件的唯一标识
  const fileETag = eTag(filePath);

  //获取文件的最后一次修改时间
  //fs上的stat方法,可以获取到stat对象,里面存放有修改时间
  //util上的promisify方法可以将()内的内容包装成一个promise对象
  //把fs的stat封装成返回promise的stat方法
  const stat = util.promisify(fs.stat);
  const fileStat = await stat(filePath);
  const fileLastModified = fileStat.mtime.toLocaleString();

  //判断是否需要缓存
  //如果文件eTag和最后一次修改时间,和请求头中保存的一致,则返回状态码304读取缓存
  //否则给响应头设置文件标识和最后一次修改时间
  if (ifNoneMatch === fileETag && ifModifiedSince === fileLastModified) {
    res.status(304).send();
  } else {
    res.set("etag", fileETag);
    res.set("Last-Modified", fileLastModified);
    res.sendFile(filePath);
  }
});

//监听端口
app.listen("8080", () => {
  console.log("服务器启动成功, http://127.0.0.1:8080");
});
