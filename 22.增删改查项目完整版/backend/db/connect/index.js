const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/pro0306");

mongoose.connection.on("open", () => {
  console.log("数据库连接成功");
});
