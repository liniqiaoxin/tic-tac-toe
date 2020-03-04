"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("@babel/polyfill");

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var PageAllContent =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(PageAllContent, _React$Component);

  function PageAllContent(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, PageAllContent);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PageAllContent).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "componentDidMount", function () {
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

  (0, _createClass2["default"])(PageAllContent, [{
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
  (0, _inherits2["default"])(PageJavaScriptContent, _React$Component2);

  function PageJavaScriptContent(props) {
    var _this2;

    (0, _classCallCheck2["default"])(this, PageJavaScriptContent);
    _this2 = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PageJavaScriptContent).call(this, props));
    _this2.state = {
      repos: []
    };
    return _this2;
  }

  (0, _createClass2["default"])(PageJavaScriptContent, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var _this3 = this;

        var res;
        return _regenerator["default"].wrap(function _callee$(_context) {
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
  (0, _inherits2["default"])(PageRubyContent, _React$Component3);

  function PageRubyContent(props) {
    var _this4;

    (0, _classCallCheck2["default"])(this, PageRubyContent);
    _this4 = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PageRubyContent).call(this, props));
    _this4.state = {
      repos: []
    };
    return _this4;
  }

  (0, _createClass2["default"])(PageRubyContent, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        var _this5 = this;

        var res;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
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
  (0, _inherits2["default"])(PageJavaContent, _React$Component4);

  function PageJavaContent(props) {
    var _this6;

    (0, _classCallCheck2["default"])(this, PageJavaContent);
    _this6 = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PageJavaContent).call(this, props));
    _this6.state = {
      repos: []
    };
    return _this6;
  }

  (0, _createClass2["default"])(PageJavaContent, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount3 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3() {
        var _this7 = this;

        var res;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
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
  (0, _inherits2["default"])(PageCssContent, _React$Component5);

  function PageCssContent(props) {
    var _this8;

    (0, _classCallCheck2["default"])(this, PageCssContent);
    _this8 = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PageCssContent).call(this, props));
    _this8.state = {
      repos: []
    };
    return _this8;
  }

  (0, _createClass2["default"])(PageCssContent, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount4 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4() {
        var _this9 = this;

        var res;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
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
  (0, _inherits2["default"])(TabList, _React$Component6);

  function TabList() {
    var _this10;

    (0, _classCallCheck2["default"])(this, TabList);
    _this10 = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TabList).call(this));
    _this10.state = {
      n: 1
    };
    return _this10;
  }

  (0, _createClass2["default"])(TabList, [{
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
  (0, _inherits2["default"])(App, _React$Component7);

  function App() {
    (0, _classCallCheck2["default"])(this, App);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(App).apply(this, arguments));
  }

  (0, _createClass2["default"])(App, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", null, _react["default"].createElement(TabList, null));
    }
  }]);
  return App;
}(_react["default"].Component);

var _default = App;
exports["default"] = _default;