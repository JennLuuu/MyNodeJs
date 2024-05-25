/*
 * @Author: Jenn_Lu 1129694837@qq.com
 * @Date: 2024-05-25 11:43:05
 * @LastEditors: Jenn_Lu 1129694837@qq.com
 * @LastEditTime: 2024-05-25 14:18:02
 * @FilePath: \MyNodeJs\35.ES6Module\module\mins.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function mins(a,b){
    return console.log(a*b);
}

function random(c){
    console.log(Math.random()*c);
}

//统一暴露
export {mins,random}