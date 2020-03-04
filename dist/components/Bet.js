"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Players =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Players, _React$Component);

  function Players(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Players);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Players).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleGetInputValue", function (event) {
      _this.setState({
        InputValue: event.target.value
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handlePost", function () {
      var InputValue = _this.state.InputValue;
      console.log(InputValue, '------InputValue'); //在此做提交操作，比如发dispatch等
    });
    _this.state = {
      InputValue: ''
    };
    return _this;
  }

  (0, _createClass2.default)(Players, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "space-around"
        }
      }, _react.default.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          width: "600px"
        }
      }, _react.default.createElement("div", null, _react.default.createElement("h3", null, " Player One")), _react.default.createElement("div", {
        style: {
          display: "flex",
          fontSize: "16px"
        }
      }, _react.default.createElement("input", {
        type: "text",
        placeholder: "github username",
        value: this.state.InputValue,
        onChange: this.handleGetInputValue,
        style: {
          width: "500px",
          height: "42px",
          marginRight: "20px",
          fontSize: "16px"
        }
      }), _react.default.createElement("input", {
        type: "submit",
        value: "submit",
        onClick: this.handlePost,
        style: {
          width: "125px",
          height: "48px"
        }
      }))), _react.default.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          width: "600px"
        }
      }, _react.default.createElement("div", null, _react.default.createElement("h3", null, "Player Two")), _react.default.createElement("div", {
        style: {
          display: "flex",
          fontSize: "16px"
        }
      }, _react.default.createElement("input", {
        type: "text",
        placeholder: "github username",
        style: {
          width: "500px",
          height: "42px",
          marginRight: "20px",
          fontSize: "16px"
        }
      }), _react.default.createElement("input", {
        type: "submit",
        value: "submit",
        style: {
          width: "125px",
          height: "48px"
        }
      }))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Players;
}(_react.default.Component);

var Battle =
/*#__PURE__*/
function (_React$Component2) {
  (0, _inherits2.default)(Battle, _React$Component2);

  function Battle() {
    (0, _classCallCheck2.default)(this, Battle);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Battle).apply(this, arguments));
  }

  (0, _createClass2.default)(Battle, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement("h2", {
        className: "text-center"
      }, "Instructions"), _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "col-1",
        style: {
          alignItems: "flex-end"
        }
      }, _react.default.createElement("div", {
        style: {
          fontSize: "20px",
          textAlign: "center",
          margin: "8px 16px"
        }
      }, "Enter two Github"), _react.default.createElement("div", null, _react.default.createElement("i", {
        className: "fa fa-users",
        style: {
          backgroundColor: "#eee",
          fontSize: "120px",
          padding: "32px",
          color: "rgba(255,191,116)"
        }
      }))), _react.default.createElement("div", {
        className: "col-2",
        style: {
          alignItems: "center"
        }
      }, _react.default.createElement("div", {
        style: {
          fontSize: "20px",
          textAlign: "center",
          margin: "8px 16px"
        }
      }, "Battle"), _react.default.createElement("div", null, _react.default.createElement("i", {
        className: "fa fa-fighter-jet",
        style: {
          backgroundColor: "#eee",
          fontSize: "120px",
          padding: "32px",
          color: "gray"
        }
      }))), _react.default.createElement("div", {
        className: "col-3",
        style: {
          alignItems: "flex-start"
        }
      }, _react.default.createElement("div", {
        style: {
          fontSize: "20px",
          textAlign: "center",
          margin: "8px 16px"
        }
      }, "See the winner"), _react.default.createElement("div", null, _react.default.createElement("i", {
        className: "fa fa-trophy",
        style: {
          backgroundColor: "#eee",
          fontSize: "120px",
          padding: "32px",
          color: " gold"
        }
      })))), _react.default.createElement("div", null, _react.default.createElement("h3", {
        style: {
          textAlign: "center"
        }
      }, "players")));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Battle;
}(_react.default.Component);

var Bet =
/*#__PURE__*/
function (_React$Component3) {
  (0, _inherits2.default)(Bet, _React$Component3);

  function Bet() {
    (0, _classCallCheck2.default)(this, Bet);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Bet).apply(this, arguments));
  }

  (0, _createClass2.default)(Bet, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(Battle, null), _react.default.createElement(Players, null));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Bet;
}(_react.default.Component);

var _default = Bet;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Players, "Players", "D:\\\u65E0\u950B\u7F51\u7EDC\\githubTwo(1)\\githubTwo(3)\\githubTwo\\src\\components\\Bet.js");
  reactHotLoader.register(Battle, "Battle", "D:\\\u65E0\u950B\u7F51\u7EDC\\githubTwo(1)\\githubTwo(3)\\githubTwo\\src\\components\\Bet.js");
  reactHotLoader.register(Bet, "Bet", "D:\\\u65E0\u950B\u7F51\u7EDC\\githubTwo(1)\\githubTwo(3)\\githubTwo\\src\\components\\Bet.js");
  reactHotLoader.register(_default, "default", "D:\\\u65E0\u950B\u7F51\u7EDC\\githubTwo(1)\\githubTwo(3)\\githubTwo\\src\\components\\Bet.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();