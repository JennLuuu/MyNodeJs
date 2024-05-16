// 引入crypto模块
const crypto = require("crypto");

//使用crypto身上的createHash创建一个md5算法对象
const md5 = crypto.createHash("md5");

//拿到明文密码
let password = "56985496583";

//加盐
let salt = "#$^@#2@#%##^Y$~!!~";

//加盐
password += salt;

//密码加密
const secret = md5.update(password, "utf8").digest("hex");

console.log(secret);
