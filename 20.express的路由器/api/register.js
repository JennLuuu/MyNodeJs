//1. 创建一个路由对象
const express = require("express")
const route = express.Router()

//2. 给路由对象创建路由
route.use("/register",()=>{
    console.log("注册路由");
})

//3. 暴露路由
module.exports = route