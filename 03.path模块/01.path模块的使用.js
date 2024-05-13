//引入内部模块,直接在require中写path
const path = require("path")

//使用path模块的resolve方法可以对多个路径进行合并操作
const filePath = path.resolve(__dirname,".././02.模块的定义/04.txt")

console.log("~~~~",filePath);