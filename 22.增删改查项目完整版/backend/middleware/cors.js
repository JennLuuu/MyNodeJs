/*
 * @Author: Jenn_Lu 1129694837@qq.com
 * @Date: 2024-05-21 18:34:08
 * @LastEditors: Jenn_Lu 1129694837@qq.com
 * @LastEditTime: 2024-05-21 19:42:46
 * @FilePath: \MyNodeJs\22.增删改查项目完整版\backend\middleware\cors.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require("express");

const route = express.Router();

route.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Allow-Methods", "DELETE");
  res.set("Access-Control-Allow-Methods", "PUT");
  next();
});

module.exports = route;
