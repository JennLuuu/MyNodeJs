const express = require("express")
const app = express()
app.listen("3000",(err)=>{
    if (err) {
        return console.log("服务器启动失败",err.message);
    }

    console.log("服务器启动成功,地址是 http://127.0.0.1:3000");
})