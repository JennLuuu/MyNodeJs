const {resolve} = require("path")
const fs = require("fs")

//被操作的文件路径
const filePath = resolve(__dirname,"./01.txt")

/* 
 * 异步打开:fs.open(被操作文件地址,文件系统标识,回调函数)
    + 参数1: 被操作文件地址
    + 参数2: 文件系统标识 (常用`a`标识,表示追加)
    + 参数3: 回调函数(error,fd)=>{}
      - 接收两个参数
      - error: 错误信息,表示文件打开失败
      - fd: 打开的文件id,拿到fd可以在回调函数中对文件进行操作
 * 异步写入:fs.write(被操作文件id,"要写入的内容",回调函数)
    + 参数1: 被操作文件id -- fd
    + 参数2: 要写入的内容(字符串类型)
    + 参数3: 回调函数(error)=>{}
 * 异步关闭:fs.close(被操作文件id,回调函数)
    + 参数1: 被操作文件id -- fd
    + 参数2: 回调函数(error)=>{}
*/

//异步打开
fs.open(filePath,"a",(error,fd)=>{
    //判断文件是否打开失败,失败则退出整个异步
    if (error) {
        return console.log("文件打开失败");
    }
    console.log("打开成功");

    //异步写入
    //文件打开成功,才能对文件进行写入
    fs.write(fd,"汗滴禾下土",(error)=>{
        if (error) {
            return console.log("文件写入失败");
        }
        // throw new Error("写入出错");
        console.log("文件写入成功");

        //异步关闭
        //写入完成后才能将文件关闭
        fs.close(fd,(error)=>{
            if (error) {
                return console.log("文件关闭失败");
            }
            console.log("文件关闭成功");
        })
    })
})