/*
 * @Author: Jenn_Lu 1129694837@qq.com
 * @Date: 2024-05-24 23:17:58
 * @LastEditors: Jenn_Lu 1129694837@qq.com
 * @LastEditTime: 2024-05-24 23:18:16
 * @FilePath: \MyNodeJs\31.session\db\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//数据库的入口文件
//数据库中引入mongoose,用mongoose将链接上mongodb数据库
const mongoose = require("mongoose")

mongoose.connect("mongodb:127.0.0.1:27017/bye0306")

mongoose.connection.on("open",()=>{
    console.log("数据库连接成功");
})