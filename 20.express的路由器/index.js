//入口文件

//1. 引入express
const express = require("express")

//2. 引入外部路由对象
const loginRoute = require("./api/login")
const registerRoute = require("./api/register")
const corsRoute = require("./middleware/cors")

//3. 创建应用实例
const app = express()

//4. 把外部路由对象交给app
app.use(loginRoute)
app.use(registerRoute)
app.use(corsRoute)

//5. 监听端口
app.listen("8080",()=>{
    console.log("服务器启动成功");
})