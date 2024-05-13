const { resolve } = require("path");
const fs = require("fs");

//被操作文件路径
const filePath = resolve(__dirname, "./01.txt");

new Promise((resolve, reject) => {
  fs.open(filePath, "a", (error, fd) => {
    //判断文件是否打开失败,失败则退出整个异步
    if (error) {
      return reject(error);
    } else {
      resolve(fd);
    }
  });
})
  .then((fd) => {
    return new Promise((resolve, reject) => {
      //写入文件
      fs.write(fd, "汗滴禾下土", (error) => {
        if (error) {
          return reject(error);
        } else {
          resolve(fd);
        }
      });
    });
  })
  .then((fd) => {
    return new Promise((resolve, reject) => {
      //关闭文件
      fs.close(fd, (error) => {
        if (error) {
          return reject(error);
        } else {
          resolve(fd);
        }
      });
    });
  })
  .catch((error) => {
    console.log("文件操作出错,错误信息为:", error.message);
  })
  .finally(() => {
    console.log("文件操作完毕");
  });
