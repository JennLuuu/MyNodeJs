const {resolve} = require("path")
const fs = require("fs")

//被操作的文件路径
const filePath = resolve(__dirname,"./01.txt")

/* 
 * 同步打开: fs.openSync(文件地址,文件系统标志)
    - 参数1:文件地址
    - 参数2:文件系统标志 (常用 `a`标识,表示追加)
   //返回文件id,将来可以直接拿到id对这个文件操作
 * 同步写入:fs.writeSync(文件id,"追加的内容")
    - 参数1:文件id -- fd
    - 参数2:追加的内容,字符串形式
 * 同步关闭:fs.closeSync(文件id)
    - 参数1:文件id -- fd

只要运行了js,就会自动调用上述过程
 */



//同步打开
const fd = fs.openSync(filePath,"a");

//同步写入
fs.writeSync(fd,"锄禾日当午");

//同步关闭
fs.closeSync(fd)
