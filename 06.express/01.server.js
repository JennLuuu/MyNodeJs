//1. node提供了一个http模块可以搭建一个服务器
const http = require("http")

//2. 通过http模块的createServer的方法可以创建一个服务,当服务器启动,只要有请求,回调函数就会执行
const server = http.createServer((req,res)=>{
    
})