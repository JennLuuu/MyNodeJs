const express = require("express")

const route = express.Router()

route.use((req,res,next)=>{
    console.log("进入跨域处理中间件");
    next()
})

module.exports = route