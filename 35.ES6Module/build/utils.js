"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obj = exports.mins = exports.PI = void 0;
exports.show = show;
var PI = exports.PI = 3.1415926;
function show() {
  console.log("show");
}
var obj = exports.obj = {
  name: "luuu",
  sex: "女"
};
var mins = exports.mins = function mins() {
  console.log("重名了");
};

//分别暴露:在要暴露的内容前加export