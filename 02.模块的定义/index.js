/*
 * @Author: Jenn_Lu 1129694837@qq.com
 * @Date: 2024-05-12 18:33:14
 * @LastEditors: Jenn_Lu 1129694837@qq.com
 * @LastEditTime: 2024-05-12 18:40:36
 * @FilePath: \MyNodeJs\02.模块的定义\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//引入模块
require("./test")

const add = require("./add")
const {PI,show} = require("./utils")

add(3,5)
show()
console.log(PI);