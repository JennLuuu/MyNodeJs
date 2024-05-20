//1. 创建一个路由对象
const express = require("express")

const route = express.Router()

//2. 给路由对象扩展路由(接口)
route.use("/login",(req,res)=>{
    console.log("登录路由");
    res.send("good job")
})

//3. 将建好的路由暴露出去
module.exports = route