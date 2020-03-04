"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _reactInfiniteScroller = _interopRequireDefault(require("react-infinite-scroller"));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Pop =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Pop, _React$Component);

  function Pop(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Pop);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Pop).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "search",
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var clear,
            query,
            page,
            res,
            _args = arguments;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                clear = _args.length > 0 && _args[0] !== undefined ? _args[0] : false;
                query = _this.props.query;
                page = clear ? 1 : _this.state.page;

                _this.setState({
                  loading: true
                });

                if (clear) {
                  _this.setState({
                    items: []
                  });
                }

                _context.prev = 5;
                _context.next = 8;
                return _axios.default.get("https://api.github.com/search/repositories?q=".concat(query, "&sort=stars&order=desc&type=Repositories&page=").concat(page));

              case 8:
                res = _context.sent;
                console.log("res", res.data);

                _this.setState(function (state) {
                  return {
                    items: clear ? res.data.items : [].concat((0, _toConsumableArray2.default)(state.items), (0, _toConsumableArray2.default)(res.data.items)),
                    page: clear ? 1 : state.page + 1
                  };
                });

                _context.next = 17;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](5);
                console.log("error", _context.t0);

                _this.setState({
                  end: true
                });

              case 17:
                _this.setState({
                  loading: false
                });

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[5, 13]]);
      }));

      return function () {
        return _ref.apply(this, arguments);
      };
    }());
    _this.state = {
      loading: false,
      end: false,
      page: 1,
      items: []
    };
    return _this;
  }

  (0, _createClass2.default)(Pop, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.search();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.query !== prevProps.query) {
        this.search(true);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          onClick = _this$props.onClick,
          current = _this$props.current;
      var _this$state = this.state,
          items = _this$state.items,
          loading = _this$state.loading,
          end = _this$state.end;
      var lists = items.map(function (item, key) {
        return _react.default.createElement(List, {
          key: key,
          list: item,
          index: key + 1
        });
      });
      var links = [{
        title: "All",
        query: "stars:>1"
      }, {
        title: "JavaScript",
        query: "stars:>1+language:javascript"
      }, {
        title: "Ruby",
        query: "stars:>1+language:ruby"
      }, {
        title: "Java",
        query: "stars:>1+language:java"
      }, {
        title: "CSS",
        query: "stars:>1+language:css"
      }];
      return _react.default.createElement("div", null, _react.default.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }
      }, _react.default.createElement(Lists, {
        onClick: onClick,
        current: current,
        links: links
      })), _react.default.createElement(_reactInfiniteScroller.default, {
        initialLoad: false,
        loadMore: function loadMore() {
          return _this2.search(false);
        },
        hasMore: !loading || end,
        loader: null
      }, _react.default.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'center'
        }
      }, _react.default.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginBottom: "48px",
          width: '990px'
        }
      }, lists)), loading && _react.default.createElement("div", {
        style: {
          textAlign: "center"
        }
      }, _react.default.createElement("span", null, "\u6B63\u5728\u52A0\u8F7D..."))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Pop;
}(_react.default.Component);

var Lists =
/*#__PURE__*/
function (_React$Component2) {
  (0, _inherits2.default)(Lists, _React$Component2);

  function Lists(props) {
    var _this3;

    (0, _classCallCheck2.default)(this, Lists);
    _this3 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Lists).call(this, props));
    _this3.state = {
      current: props.current
    };
    return _this3;
  }

  (0, _createClass2.default)(Lists, [{
    key: "onClick",
    value: function onClick(query) {
      var onClick = this.props.onClick;
      this.setState({
        current: query
      });
      onClick(query);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var links = this.props.links;
      var current = this.state.current; // 现在样式变内联了，如何实现:hover, :active的功能？

      var children = links.map(function (item, key) {
        return _react.default.createElement("li", {
          style: {
            display: "inline-flex",
            padding: "8px 16px",
            fontSize: "18px"
          },
          key: key
        }, _react.default.createElement("a", {
          href: "#",
          onClick: function onClick() {
            return _this4.onClick(item.query);
          },
          className: current === item.query ? "active" : ""
        }, item.title));
      });
      return _react.default.createElement("ul", {
        style: {
          display: "flex",
          listStyleType: "none",
          flexDirection: "row",
          margin: 0,
          padding: 0
        }
      }, children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Lists;
}(_react.default.Component);

var List =
/*#__PURE__*/
function (_React$Component3) {
  (0, _inherits2.default)(List, _React$Component3);

  function List() {
    (0, _classCallCheck2.default)(this, List);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(List).apply(this, arguments));
  }

  (0, _createClass2.default)(List, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          index = _this$props2.index,
          list = _this$props2.list;
      return _react.default.createElement("div", {
        style: {
          boxSizing: "border-box",
          width: "200px",
          padding: "24px",
          paddingRight: "10px",
          marginTop: "10px",
          marginBottom: "10px",
          backgroundColor: "rgb(235, 235, 235)"
        }
      }, _react.default.createElement("div", {
        style: {
          paddingRight: "24px"
        }
      }, _react.default.createElement("h2", {
        className: "text-center"
      }, "#", index), _react.default.createElement("div", {
        className: "text-center"
      }, _react.default.createElement("img", {
        style: {
          width: "50%"
        },
        src: list.owner.avatar_url
      })), _react.default.createElement("h4", {
        style: {
          display: "flex",
          flexDirection: "row",
          height: "36px",
          justifyContent: "center"
        }
      }, list.owner.login)), _react.default.createElement("div", null, _react.default.createElement("i", {
        className: "fa fa-user",
        style: {
          display: "inline-flex",
          width: "16px",
          justifyContent: "center",
          color: "orange"
        }
      }), list.owner.login), _react.default.createElement("div", null, _react.default.createElement("i", {
        className: "fa fa-star",
        style: {
          display: "inline-flex",
          width: "16px",
          justifyContent: "center",
          color: "yellow"
        }
      }), list.stargazers_count, " stars"), _react.default.createElement("div", null, _react.default.createElement("i", {
        className: "fa fa-code-fork",
        style: {
          display: "inline-flex",
          width: "16px",
          justifyContent: "center",
          color: "blue"
        }
      }), list.forks, " forks"), _react.default.createElement("div", null, _react.default.createElement("i", {
        className: "fa fa-exclamation-triangle",
        style: {
          display: "inline-flex",
          width: "16px",
          justifyContent: "center",
          color: "pink"
        }
      }), list.open_issues, " open issues"));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return List;
}(_react.default.Component);

var App =
/*#__PURE__*/
function (_React$Component4) {
  (0, _inherits2.default)(App, _React$Component4);

  function App(props) {
    var _this5;

    (0, _classCallCheck2.default)(this, App);
    _this5 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this5), "onClick", function (query) {
      _this5.setState({
        query: query
      });
    });
    _this5.state = {
      query: "stars:>1"
    };
    return _this5;
  }

  (0, _createClass2.default)(App, [{
    key: "render",
    value: function render() {
      var query = this.state.query;
      return _react.default.createElement("div", null, _react.default.createElement(Pop, {
        query: query,
        current: query,
        onClick: this.onClick
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return App;
}(_react.default.Component);

var _default = App;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Pop, "Pop", "D:\\\u65E0\u950B\u7F51\u7EDC\\githubTwo(1)\\githubTwo(3)\\githubTwo\\src\\components\\Pop.js");
  reactHotLoader.register(Lists, "Lists", "D:\\\u65E0\u950B\u7F51\u7EDC\\githubTwo(1)\\githubTwo(3)\\githubTwo\\src\\components\\Pop.js");
  reactHotLoader.register(List, "List", "D:\\\u65E0\u950B\u7F51\u7EDC\\githubTwo(1)\\githubTwo(3)\\githubTwo\\src\\components\\Pop.js");
  reactHotLoader.register(App, "App", "D:\\\u65E0\u950B\u7F51\u7EDC\\githubTwo(1)\\githubTwo(3)\\githubTwo\\src\\components\\Pop.js");
  reactHotLoader.register(_default, "default", "D:\\\u65E0\u950B\u7F51\u7EDC\\githubTwo(1)\\githubTwo(3)\\githubTwo\\src\\components\\Pop.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();