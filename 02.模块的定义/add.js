/*
 * @Author: Jenn_Lu 1129694837@qq.com
 * @Date: 2024-05-12 18:33:23
 * @LastEditors: Jenn_Lu 1129694837@qq.com
 * @LastEditTime: 2024-05-12 18:34:09
 * @FilePath: \MyNodeJs\02.模块的定义\add.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//定义模块
function random(m, n) {
  return Math.floor(Math.random() * (n - m) + m);
}
function add(a, b) {
  console.log(a + b + random(1, 10));
}

module.exports = add;