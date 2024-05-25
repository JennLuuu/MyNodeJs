(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function add(a, b) {
  return console.log(a + b);
}

//默认暴露
var _default = exports["default"] = add;
},{}],2:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _add = _interopRequireDefault(require("./add"));
var _mins = _interopRequireWildcard(require("./mins"));
var _utils = _interopRequireWildcard(require("./utils"));
var utilsAll = _utils;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
//模块引入
//引入默认暴露

//引入统一暴露

//引入分别暴露
// import { PI, show, obj } from "./utils";

//想要收集成一个对象来使用

//引入时命名冲突

console.log(_mins["default"]);
console.log(utilsAll);
console.log(_utils.PI, _utils.obj);
console.log(_utils.mins);
(0, _add["default"])(5, 6);
(0, _mins.mins)(2, 3);
(0, _mins.random)(7);
(0, _utils.show)();
},{"./add":1,"./mins":3,"./utils":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mins = mins;
exports.random = random;
/*
 * @Author: Jenn_Lu 1129694837@qq.com
 * @Date: 2024-05-25 11:43:05
 * @LastEditors: Jenn_Lu 1129694837@qq.com
 * @LastEditTime: 2024-05-25 14:18:02
 * @FilePath: \MyNodeJs\35.ES6Module\module\mins.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function mins(a, b) {
  return console.log(a * b);
}
function random(c) {
  console.log(Math.random() * c);
}

//统一暴露
},{}],4:[function(require,module,exports){
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
},{}]},{},[2]);
