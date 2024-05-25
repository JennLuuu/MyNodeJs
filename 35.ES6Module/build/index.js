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