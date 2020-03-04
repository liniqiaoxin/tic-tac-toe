"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _React = _interopRequireDefault(require("React"));

var _reactRouterDom = require("react-router-dom");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

//nav.js
var NavBar = function NavBar() {
  return _React.default.createElement("div", null, _React.default.createElement("div", {
    style: {
      marginTop: "30px",
      marginLeft: "50px"
    }
  }, _React.default.createElement(_reactRouterDom.NavLink, {
    exact: true,
    to: "/"
  }, "Popular"), " \xA0", _React.default.createElement(_reactRouterDom.NavLink, {
    to: "/Bat"
  }, "Battle")));
};

var _default = NavBar;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NavBar, "NavBar", "D:\\\u65E0\u950B\u7F51\u7EDC\\githubTwo(1)\\githubTwo(3)\\githubTwo\\src\\components\\Nav.js");
  reactHotLoader.register(_default, "default", "D:\\\u65E0\u950B\u7F51\u7EDC\\githubTwo(1)\\githubTwo(3)\\githubTwo\\src\\components\\Nav.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();