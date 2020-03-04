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

var _root = require("react-hot-loader/root");

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
      var username = event.target.value;

      _this.setState({
        username: username
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handlePost", function () {
      var username = _this.state.username;
      console.log(username, '------username'); //在此做提交操作，比如发dispatch等

      var transmitDate = _this.props.transmitDate;
      var url = 'https://api.github.com/search/users?q=' + username;

      _axios.default.get(url).then(function (response) {
        var _response$data$items$ = response.data.items[0],
            login = _response$data$items$.login,
            avatar_url = _response$data$items$.avatar_url,
            score = _response$data$items$.score;
        var state = {
          login: login,
          avatar_url: avatar_url,
          score: score,
          click: false
        };

        _this.setState(state);

        transmitDate(state);
      });

      event.preventDefault();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClick", function () {
      _this.setState({
        click: true
      });

      _this.props.empty();
    });
    _this.state = {
      username: '',
      login: '',
      avatar_url: '',
      score: 0,
      click: true
    };
    return _this;
  }

  (0, _createClass2.default)(Players, [{
    key: "render",
    value: function render() {
      var style = {
        input: {
          width: "360px",
          height: "42px",
          marginRight: "20px",
          fontSize: "16px"
        },
        button: {
          width: "125px",
          height: "48px",
          border: "0",
          fontSize: "18px"
        },
        play: {
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
          background: '#e5e5e5',
          textAlign: "center",
          alignItems: 'center'
        },
        img: {
          width: '50px',
          height: '50px',
          marginRight: "20px",
          marginLeft: "20px"
        },
        btn: {
          fontSize: '25px',
          backgroundColor: '#e5e5e5',
          border: '0',
          color: 'red'
        },
        imgp: {
          display: 'flex',
          flexWrap: 'nowrap',
          alignItems: 'center'
        }
      };

      if (this.state.click) {
        return _react.default.createElement("div", {
          style: {
            display: "flex",
            justifyContent: "space-around"
          }
        }, _react.default.createElement("form", {
          onSubmit: this.handlePost,
          style: {
            display: "flex",
            fontSize: "16px"
          }
        }, _react.default.createElement("input", {
          type: "text",
          placeholder: "github username",
          value: this.state.username,
          onChange: this.handleGetInputValue,
          style: style.input
        }), _react.default.createElement("input", {
          type: "submit",
          value: "submit",
          className: "button",
          style: style.button
        })));
      } else {
        return _react.default.createElement("div", {
          style: style.play
        }, _react.default.createElement("div", {
          style: style.imgp
        }, _react.default.createElement("img", {
          src: this.state.avatar_url,
          style: style.img
        }), _react.default.createElement("p", {
          style: {
            fontSize: '25px'
          }
        }, this.state.username)), _react.default.createElement("button", {
          onClick: this.onClick,
          style: style.btn
        }, _react.default.createElement("i", {
          className: "fa fa-times",
          "aria-hidden": "true"
        })));
      }
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

var Instructions =
/*#__PURE__*/
function (_React$Component2) {
  (0, _inherits2.default)(Instructions, _React$Component2);

  function Instructions() {
    (0, _classCallCheck2.default)(this, Instructions);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Instructions).apply(this, arguments));
  }

  (0, _createClass2.default)(Instructions, [{
    key: "render",
    value: function render() {
      var style = {
        col1: {
          fontSize: "20px",
          textAlign: "center",
          margin: "8px 16px"
        },
        icon1: {
          backgroundColor: "#eee",
          fontSize: "120px",
          padding: "32px",
          color: "rgba(255,191,116)"
        },
        col2: {
          fontSize: "20px",
          textAlign: "center",
          margin: "8px 16px"
        },
        icon2: {
          backgroundColor: "#eee",
          fontSize: "120px",
          padding: "32px",
          color: "gray"
        },
        col3: {
          fontSize: "20px",
          textAlign: "center",
          margin: "8px 16px"
        },
        icon3: {
          backgroundColor: "#eee",
          fontSize: "120px",
          padding: "32px",
          color: " gold"
        }
      };
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
        style: style.col1
      }, "Enter two Github"), _react.default.createElement("div", null, _react.default.createElement("i", {
        className: "fa fa-users",
        style: style.icon1
      }))), _react.default.createElement("div", {
        className: "col-2",
        style: {
          alignItems: "center"
        }
      }, _react.default.createElement("div", {
        style: style.col2
      }, "Battle"), _react.default.createElement("div", null, _react.default.createElement("i", {
        className: "fa fa-fighter-jet",
        style: style.icon2
      }))), _react.default.createElement("div", {
        className: "col-3",
        style: {
          alignItems: "flex-start"
        }
      }, _react.default.createElement("div", {
        style: style.col3
      }, "See the winner"), _react.default.createElement("div", null, _react.default.createElement("i", {
        className: "fa fa-trophy",
        style: style.icon3
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
  return Instructions;
}(_react.default.Component);

var Bat =
/*#__PURE__*/
function (_React$Component3) {
  (0, _inherits2.default)(Bat, _React$Component3);

  function Bat(props) {
    var _this2;

    (0, _classCallCheck2.default)(this, Bat);
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Bat).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "clickBattle", function () {
      var _this2$state = _this2.state,
          player = _this2$state.player,
          first = _this2$state.first,
          last = _this2$state.last;

      if (player == 'BATTLE' && first.length != 0 && last.length != 0) {
        _this2.setState({
          player: 'RESET'
        });
      } else if (player == 'RESET' && first.length != 0 && last.length != 0) {
        _this2.setState({
          player: 'BATTLE',
          first: [],
          last: []
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "transmitDate", function (date) {
      var _this2$state2 = _this2.state,
          first = _this2$state2.first,
          last = _this2$state2.last;

      if (first.length == 0 && last.length == 0) {
        _this2.setState({
          first: date
        });
      } else if (last.length == 0 && first.length != 0) {
        _this2.setState({
          last: date
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "empty", function () {
      var _this2$state3 = _this2.state,
          first = _this2$state3.first,
          last = _this2$state3.last;

      if (first.length != 0 && last.length == 0) {
        _this2.setState({
          first: []
        });
      } else if (last.length != 0 && first.length != 0) {
        _this2.setState({
          last: []
        });
      }
    });
    _this2.state = {
      player: 'BATTLE',
      first: [],
      last: []
    };
    return _this2;
  }

  (0, _createClass2.default)(Bat, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          player = _this$state.player,
          first = _this$state.first,
          last = _this$state.last;
      var style = {
        btn: {
          display: "flex",
          justifyContent: "center",
          marginTop: '10px'
        },
        b: {
          fontSize: '18px',
          border: '0',
          textAlign: "center"
        },
        result: {
          marginTop: '95px'
        },
        resultCard: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: '200px',
          backgroundColor: '#e5e5e5'
        },
        img: {
          width: '150px'
        },
        p: {
          fontSize: '18px'
        },
        h: {
          marginTop: '0'
        }
      };
      console.log("first", first.score);
      console.log("last", last.score);

      if (player == 'BATTLE' || first.length == 0 || last.length == 0) {
        return _react.default.createElement("div", null, _react.default.createElement("div", null, _react.default.createElement(Instructions, null)), _react.default.createElement("div", {
          style: {
            display: "flex",
            justifyContent: "space-around"
          }
        }, _react.default.createElement("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "500px"
          }
        }, _react.default.createElement("h3", null, "Player One"), _react.default.createElement(Players, {
          transmitDate: this.transmitDate,
          empty: this.empty
        })), _react.default.createElement("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "500px"
          }
        }, _react.default.createElement("h3", null, "Player Two"), _react.default.createElement(Players, {
          transmitDate: this.transmitDate,
          empty: this.empty
        }))), _react.default.createElement("div", {
          style: style.btn
        }, _react.default.createElement("button", {
          style: style.b,
          className: first.length == 0 || last.length == 0 ? "hide" : "",
          onClick: this.clickBattle
        }, player)));
      }

      if (first.score > last.score) {
        return _react.default.createElement("div", {
          style: style.result
        }, _react.default.createElement("div", {
          style: {
            display: "flex",
            justifyContent: "space-around"
          }
        }, _react.default.createElement("div", {
          style: style.resultCard
        }, _react.default.createElement("h3", null, "Winner"), _react.default.createElement("img", {
          src: first.avatar_url,
          style: style.img
        }), _react.default.createElement("p", {
          style: style.p
        }, first.login), _react.default.createElement("h4", {
          style: style.h
        }, "score:", first.score)), _react.default.createElement("div", {
          style: style.resultCard
        }, _react.default.createElement("h3", null, "Loser"), _react.default.createElement("img", {
          src: last.avatar_url,
          style: style.img
        }), _react.default.createElement("p", {
          style: style.p
        }, last.login), _react.default.createElement("h4", {
          style: style.h
        }, "score:", last.score))), _react.default.createElement("div", {
          style: style.btn
        }, _react.default.createElement("button", {
          style: style.b,
          onClick: this.clickBattle
        }, player)));
      } else {
        return _react.default.createElement("div", {
          style: style.result
        }, _react.default.createElement("div", {
          style: {
            display: "flex",
            justifyContent: "space-around"
          }
        }, _react.default.createElement("div", {
          style: style.resultCard
        }, _react.default.createElement("h3", null, "Winner"), _react.default.createElement("img", {
          src: last.avatar_url,
          style: style.img
        }), _react.default.createElement("p", {
          style: style.p
        }, last.login), _react.default.createElement("h4", {
          style: style.h
        }, "score:", last.score)), _react.default.createElement("div", {
          style: style.resultCard
        }, _react.default.createElement("h3", null, "Loser"), _react.default.createElement("img", {
          src: first.avatar_url,
          style: style.img
        }), _react.default.createElement("p", {
          style: style.p
        }, first.login), _react.default.createElement("h4", {
          style: style.h
        }, "score:", first.score))), _react.default.createElement("div", {
          style: style.btn
        }, _react.default.createElement("button", {
          style: style.b,
          onClick: this.clickBattle
        }, player)));
      }
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Bat;
}(_react.default.Component);

var _default = (0, _root.hot)(Bat);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Players, "Players", "D:\\\u65E0\u950B\u7F51\u7EDC\\githubTwo(1)\\githubTwo(3)\\githubTwo\\src\\components\\Bat.js");
  reactHotLoader.register(Instructions, "Instructions", "D:\\\u65E0\u950B\u7F51\u7EDC\\githubTwo(1)\\githubTwo(3)\\githubTwo\\src\\components\\Bat.js");
  reactHotLoader.register(Bat, "Bat", "D:\\\u65E0\u950B\u7F51\u7EDC\\githubTwo(1)\\githubTwo(3)\\githubTwo\\src\\components\\Bat.js");
  reactHotLoader.register(_default, "default", "D:\\\u65E0\u950B\u7F51\u7EDC\\githubTwo(1)\\githubTwo(3)\\githubTwo\\src\\components\\Bat.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();