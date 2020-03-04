"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("@babel/polyfill");

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PageAllContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PageAllContent, _React$Component);

  function PageAllContent(props) {
    var _this;

    _classCallCheck(this, PageAllContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PageAllContent).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _axios["default"].get('https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories').then(function (res) {
        console.log('res', res.data);

        _this.setState({
          repos: res.data.items
        });
      })["catch"](function (error) {
        console.log(error);
        alert("获取服务器数据异常");
      });
    });

    _this.state = {
      repos: []
    };
    return _this;
  }

  _createClass(PageAllContent, [{
    key: "render",
    value: function render() {
      var list = this.state.repos.map(function (item, key) {
        if (key + 1 < 11) return _react["default"].createElement("div", {
          style: {
            backgroundColor: '#e5e5e5',
            width: '200px',
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'row-reverse'
          },
          key: item.id
        }, _react["default"].createElement("div", {
          style: {
            width: '200px'
          }
        }, _react["default"].createElement("h2", {
          style: {
            display: 'flex',
            justifyContent: 'center'
          }
        }, "# ", key + 1), _react["default"].createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center'
          }
        }, _react["default"].createElement("img", {
          src: item.owner.avatar_url,
          alt: "",
          style: {
            width: '100px'
          }
        })), _react["default"].createElement("h3", {
          style: {
            display: 'flex',
            justifyContent: 'center'
          }
        }, item.owner.login), _react["default"].createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'flex-end'
          }
        }, _react["default"].createElement("div", {
          style: {
            width: '180px'
          }
        }, _react["default"].createElement("p", {
          style: {
            marginLeft: '2px',
            fontSize: '14px'
          }
        }, "  ", _react["default"].createElement("i", {
          className: "fa fa-user",
          style: {
            color: "orange"
          },
          "aria-hidden": "true"
        }), "  ", item.owner.login), _react["default"].createElement("p", {
          style: {
            fontSize: '14px'
          }
        }, _react["default"].createElement("i", {
          className: "fa fa-star",
          style: {
            color: "yellow"
          },
          "aria-hidden": "true"
        }), " ", item.watchers, " stars"), _react["default"].createElement("p", {
          style: {
            marginLeft: '3px',
            fontSize: '14px'
          }
        }, "  ", _react["default"].createElement("i", {
          className: "fa fa-code-fork",
          style: {
            color: "blue",
            fontSize: '15px'
          },
          "aria-hidden": "true"
        }), "  ", item.forks, " forks"), _react["default"].createElement("p", {
          style: {
            fontSize: '13px'
          }
        }, _react["default"].createElement("i", {
          className: "fa fa-exclamation-triangle",
          style: {
            color: "pink"
          },
          "aria-hidden": "true"
        }), "  ", item.open_issues, " open issues")))));
      });
      console.log(list);
      return _react["default"].createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'center'
        }
      }, _react["default"].createElement("div", {
        style: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          width: '990px'
        }
      }, list));
    }
  }]);

  return PageAllContent;
}(_react["default"].Component);

var PageJavaScriptContent =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(PageJavaScriptContent, _React$Component2);

  function PageJavaScriptContent(props) {
    var _this2;

    _classCallCheck(this, PageJavaScriptContent);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(PageJavaScriptContent).call(this, props));
    _this2.state = {
      repos: []
    };
    return _this2;
  }

  _createClass(PageJavaScriptContent, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this3 = this;

        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _axios["default"].get('https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories').then(function (res) {
                  console.log('res', res.data);

                  _this3.setState({
                    repos: res.data.items
                  });
                })["catch"](function (error) {
                  console.log(error);
                  alert("获取服务器数据异常");
                });

              case 2:
                res = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var list = this.state.repos.map(function (item, key) {
        if (key + 1 < 11) return _react["default"].createElement("div", {
          style: {
            backgroundColor: '#e5e5e5',
            width: '200px',
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'row-reverse'
          },
          key: item.id
        }, _react["default"].createElement("div", {
          style: {
            width: '200px'
          }
        }, _react["default"].createElement("h2", {
          style: {
            display: 'flex',
            justifyContent: 'center'
          }
        }, "# ", key + 1), _react["default"].createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center'
          }
        }, _react["default"].createElement("img", {
          src: item.owner.avatar_url,
          alt: "",
          style: {
            width: '100px'
          }
        })), _react["default"].createElement("h3", {
          style: {
            display: 'flex',
            justifyContent: 'center'
          }
        }, item.owner.login), _react["default"].createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'flex-end'
          }
        }, _react["default"].createElement("div", {
          style: {
            width: '180px'
          }
        }, _react["default"].createElement("p", {
          style: {
            marginLeft: '2px',
            fontSize: '14px'
          }
        }, "  ", _react["default"].createElement("i", {
          className: "fa fa-user",
          style: {
            color: "orange"
          },
          "aria-hidden": "true"
        }), "  ", item.owner.login), _react["default"].createElement("p", {
          style: {
            fontSize: '14px'
          }
        }, _react["default"].createElement("i", {
          className: "fa fa-star",
          style: {
            color: "yellow"
          },
          "aria-hidden": "true"
        }), " ", item.watchers, " stars"), _react["default"].createElement("p", {
          style: {
            marginLeft: '3px',
            fontSize: '14px'
          }
        }, "  ", _react["default"].createElement("i", {
          className: "fa fa-code-fork",
          style: {
            color: "blue",
            fontSize: '15px'
          },
          "aria-hidden": "true"
        }), "  ", item.forks, " forks"), _react["default"].createElement("p", {
          style: {
            fontSize: '13px'
          }
        }, _react["default"].createElement("i", {
          className: "fa fa-exclamation-triangle",
          style: {
            color: "pink"
          },
          "aria-hidden": "true"
        }), "  ", item.open_issues, " open issues")))));
      });
      console.log(list);
      return _react["default"].createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'center'
        }
      }, _react["default"].createElement("div", {
        style: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          width: '990px'
        }
      }, list));
    }
  }]);

  return PageJavaScriptContent;
}(_react["default"].Component);

var PageRubyContent =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(PageRubyContent, _React$Component3);

  function PageRubyContent(props) {
    var _this4;

    _classCallCheck(this, PageRubyContent);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(PageRubyContent).call(this, props));
    _this4.state = {
      repos: []
    };
    return _this4;
  }

  _createClass(PageRubyContent, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _this5 = this;

        var res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _axios["default"].get('https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories').then(function (res) {
                  console.log('res', res.data);

                  _this5.setState({
                    repos: res.data.items
                  });
                })["catch"](function (error) {
                  console.log(error);
                  alert("获取服务器数据异常");
                });

              case 2:
                res = _context2.sent;

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function componentDidMount() {
        return _componentDidMount2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var list = this.state.repos.map(function (item, key) {
        if (key + 1 < 11) return _react["default"].createElement("div", {
          style: {
            backgroundColor: '#e5e5e5',
            width: '200px',
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'row-reverse'
          },
          key: item.id
        }, _react["default"].createElement("div", {
          style: {
            width: '200px'
          }
        }, _react["default"].createElement("h2", {
          style: {
            display: 'flex',
            justifyContent: 'center'
          }
        }, "# ", key + 1), _react["default"].createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center'
          }
        }, _react["default"].createElement("img", {
          src: item.owner.avatar_url,
          alt: "",
          style: {
            width: '100px'
          }
        })), _react["default"].createElement("h3", {
          style: {
            display: 'flex',
            justifyContent: 'center'
          }
        }, item.owner.login), _react["default"].createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'flex-end'
          }
        }, _react["default"].createElement("div", {
          style: {
            width: '180px'
          }
        }, _react["default"].createElement("p", {
          style: {
            marginLeft: '2px',
            fontSize: '14px'
          }
        }, "  ", _react["default"].createElement("i", {
          className: "fa fa-user",
          style: {
            color: "orange"
          },
          "aria-hidden": "true"
        }), "  ", item.owner.login), _react["default"].createElement("p", {
          style: {
            fontSize: '14px'
          }
        }, _react["default"].createElement("i", {
          className: "fa fa-star",
          style: {
            color: "yellow"
          },
          "aria-hidden": "true"
        }), " ", item.watchers, " stars"), _react["default"].createElement("p", {
          style: {
            marginLeft: '3px',
            fontSize: '14px'
          }
        }, "  ", _react["default"].createElement("i", {
          className: "fa fa-code-fork",
          style: {
            color: "blue",
            fontSize: '15px'
          },
          "aria-hidden": "true"
        }), "  ", item.forks, " forks"), _react["default"].createElement("p", {
          style: {
            fontSize: '13px'
          }
        }, _react["default"].createElement("i", {
          className: "fa fa-exclamation-triangle",
          style: {
            color: "pink"
          },
          "aria-hidden": "true"
        }), "  ", item.open_issues, " open issues")))));
      });
      console.log(list);
      return _react["default"].createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'center'
        }
      }, _react["default"].createElement("div", {
        style: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          width: '990px'
        }
      }, list));
    }
  }]);

  return PageRubyContent;
}(_react["default"].Component);

var PageJavaContent =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(PageJavaContent, _React$Component4);

  function PageJavaContent(props) {
    var _this6;

    _classCallCheck(this, PageJavaContent);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(PageJavaContent).call(this, props));
    _this6.state = {
      repos: []
    };
    return _this6;
  }

  _createClass(PageJavaContent, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var _this7 = this;

        var res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _axios["default"].get('https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories').then(function (res) {
                  console.log('res', res.data);

                  _this7.setState({
                    repos: res.data.items
                  });
                })["catch"](function (error) {
                  console.log(error);
                  alert("获取服务器数据异常");
                });

              case 2:
                res = _context3.sent;

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function componentDidMount() {
        return _componentDidMount3.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var list = this.state.repos.map(function (item, key) {
        if (key + 1 < 11) return _react["default"].createElement("div", {
          style: {
            backgroundColor: '#e5e5e5',
            width: '200px',
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'row-reverse'
          },
          key: item.id
        }, _react["default"].createElement("div", {
          style: {
            width: '200px'
          }
        }, _react["default"].createElement("h2", {
          style: {
            display: 'flex',
            justifyContent: 'center'
          }
        }, "# ", key + 1), _react["default"].createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center'
          }
        }, _react["default"].createElement("img", {
          src: item.owner.avatar_url,
          alt: "",
          style: {
            width: '100px'
          }
        })), _react["default"].createElement("h3", {
          style: {
            display: 'flex',
            justifyContent: 'center'
          }
        }, item.owner.login), _react["default"].createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'flex-end'
          }
        }, _react["default"].createElement("div", {
          style: {
            width: '180px'
          }
        }, _react["default"].createElement("p", {
          style: {
            marginLeft: '2px',
            fontSize: '14px'
          }
        }, "  ", _react["default"].createElement("i", {
          className: "fa fa-user",
          style: {
            color: "orange"
          },
          "aria-hidden": "true"
        }), "  ", item.owner.login), _react["default"].createElement("p", {
          style: {
            fontSize: '14px'
          }
        }, _react["default"].createElement("i", {
          className: "fa fa-star",
          style: {
            color: "yellow"
          },
          "aria-hidden": "true"
        }), " ", item.watchers, " stars"), _react["default"].createElement("p", {
          style: {
            marginLeft: '3px',
            fontSize: '14px'
          }
        }, "  ", _react["default"].createElement("i", {
          className: "fa fa-code-fork",
          style: {
            color: "blue",
            fontSize: '15px'
          },
          "aria-hidden": "true"
        }), "  ", item.forks, " forks"), _react["default"].createElement("p", {
          style: {
            fontSize: '13px'
          }
        }, _react["default"].createElement("i", {
          className: "fa fa-exclamation-triangle",
          style: {
            color: "pink"
          },
          "aria-hidden": "true"
        }), "  ", item.open_issues, " open issues")))));
      });
      console.log(list);
      return _react["default"].createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'center'
        }
      }, _react["default"].createElement("div", {
        style: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          width: '990px'
        }
      }, list));
    }
  }]);

  return PageJavaContent;
}(_react["default"].Component);

var PageCssContent =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(PageCssContent, _React$Component5);

  function PageCssContent(props) {
    var _this8;

    _classCallCheck(this, PageCssContent);

    _this8 = _possibleConstructorReturn(this, _getPrototypeOf(PageCssContent).call(this, props));
    _this8.state = {
      repos: []
    };
    return _this8;
  }

  _createClass(PageCssContent, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        var _this9 = this;

        var res;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _axios["default"].get('https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories').then(function (res) {
                  console.log('res', res.data);

                  _this9.setState({
                    repos: res.data.items
                  });
                })["catch"](function (error) {
                  console.log(error);
                  alert("获取服务器数据异常");
                });

              case 2:
                res = _context4.sent;

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function componentDidMount() {
        return _componentDidMount4.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var list = this.state.repos.map(function (item, key) {
        if (key + 1 < 11) return _react["default"].createElement("div", {
          style: {
            backgroundColor: '#e5e5e5',
            width: '200px',
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'row-reverse'
          },
          key: item.id
        }, _react["default"].createElement("div", {
          style: {
            width: '200px'
          }
        }, _react["default"].createElement("h2", {
          style: {
            display: 'flex',
            justifyContent: 'center'
          }
        }, "# ", key + 1), _react["default"].createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center'
          }
        }, _react["default"].createElement("img", {
          src: item.owner.avatar_url,
          alt: "",
          style: {
            width: '100px'
          }
        })), _react["default"].createElement("h3", {
          style: {
            display: 'flex',
            justifyContent: 'center'
          }
        }, item.owner.login), _react["default"].createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'flex-end'
          }
        }, _react["default"].createElement("div", {
          style: {
            width: '180px'
          }
        }, _react["default"].createElement("p", {
          style: {
            marginLeft: '2px',
            fontSize: '14px'
          }
        }, "  ", _react["default"].createElement("i", {
          className: "fa fa-user",
          style: {
            color: "orange"
          },
          "aria-hidden": "true"
        }), "  ", item.owner.login), _react["default"].createElement("p", {
          style: {
            fontSize: '14px'
          }
        }, _react["default"].createElement("i", {
          className: "fa fa-star",
          style: {
            color: "yellow"
          },
          "aria-hidden": "true"
        }), " ", item.watchers, " stars"), _react["default"].createElement("p", {
          style: {
            marginLeft: '3px',
            fontSize: '14px'
          }
        }, "  ", _react["default"].createElement("i", {
          className: "fa fa-code-fork",
          style: {
            color: "blue",
            fontSize: '15px'
          },
          "aria-hidden": "true"
        }), "  ", item.forks, " forks"), _react["default"].createElement("p", {
          style: {
            fontSize: '13px'
          }
        }, _react["default"].createElement("i", {
          className: "fa fa-exclamation-triangle",
          style: {
            color: "pink"
          },
          "aria-hidden": "true"
        }), "  ", item.open_issues, " open issues")))));
      });
      console.log(list);
      return _react["default"].createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'center'
        }
      }, _react["default"].createElement("div", {
        style: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          width: '990px'
        }
      }, list));
    }
  }]);

  return PageCssContent;
}(_react["default"].Component);

var TabList =
/*#__PURE__*/
function (_React$Component6) {
  _inherits(TabList, _React$Component6);

  function TabList() {
    var _this10;

    _classCallCheck(this, TabList);

    _this10 = _possibleConstructorReturn(this, _getPrototypeOf(TabList).call(this));
    _this10.state = {
      n: 1
    };
    return _this10;
  }

  _createClass(TabList, [{
    key: "change",
    value: function change(i) {
      this.setState({
        n: i
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this11 = this;

      return _react["default"].createElement("div", null, _react["default"].createElement("div", {
        id: "a"
      }, _react["default"].createElement("a", {
        style: {
          marginLeft: '10px'
        },
        className: this.state.n == 1 ? 'selected' : '',
        onClick: function onClick() {
          return _this11.change(1);
        },
        id: "a1"
      }, "All"), _react["default"].createElement("a", {
        style: {
          marginLeft: '10px'
        },
        className: this.state.n == 2 ? 'selected' : '',
        onClick: function onClick() {
          return _this11.change(2);
        },
        id: "a2"
      }, "JavaScript"), _react["default"].createElement("a", {
        style: {
          marginLeft: '10px'
        },
        className: this.state.n == 3 ? 'selected' : '',
        onClick: function onClick() {
          return _this11.change(3);
        },
        id: "a3"
      }, "Ruby"), _react["default"].createElement("a", {
        style: {
          marginLeft: '10px'
        },
        className: this.state.n == 4 ? 'selected' : '',
        onClick: function onClick() {
          return _this11.change(4);
        },
        id: "a4"
      }, "Java"), _react["default"].createElement("a", {
        style: {
          marginLeft: '10px'
        },
        className: this.state.n == 5 ? 'selected' : '',
        onClick: function onClick() {
          return _this11.change(5);
        },
        id: "a5"
      }, "CSS")), _react["default"].createElement("div", null, this.state.n == 1 ? _react["default"].createElement(PageAllContent, null) : "", this.state.n == 2 ? _react["default"].createElement(PageJavaScriptContent, null) : "", this.state.n == 3 ? _react["default"].createElement(PageRubyContent, null) : "", this.state.n == 4 ? _react["default"].createElement(PageJavaContent, null) : "", this.state.n == 5 ? _react["default"].createElement(PageCssContent, null) : ""));
    }
  }]);

  return TabList;
}(_react["default"].Component);

var App =
/*#__PURE__*/
function (_React$Component7) {
  _inherits(App, _React$Component7);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", null, _react["default"].createElement(TabList, null));
    }
  }]);

  return App;
}(_react["default"].Component);

var _default = App;
exports["default"] = _default;