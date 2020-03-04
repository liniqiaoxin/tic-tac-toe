"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _q = require("q");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

Promise.resolve().then(function () {
  return (0, _interopRequireWildcard2.default)(require('@/styles/index.css'));
});

function Square(props) {
  return _react.default.createElement("button", {
    className: "square",
    onClick: props.onClick
  }, props.value);
}

var Board =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Board, _React$Component);

  function Board() {
    (0, _classCallCheck2.default)(this, Board);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Board).apply(this, arguments));
  }

  (0, _createClass2.default)(Board, [{
    key: "renderSquare",
    value: function renderSquare(i) {
      var _this = this;

      return _react.default.createElement(Square, {
        value: this.props.squares[i],
        onClick: function onClick() {
          return _this.props.onClick(i);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement("div", {
        className: "board-row"
      }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), _react.default.createElement("div", {
        className: "board-row"
      }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), _react.default.createElement("div", {
        className: "board-row"
      }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Board;
}(_react.default.Component);

var Game =
/*#__PURE__*/
function (_React$Component2) {
  (0, _inherits2.default)(Game, _React$Component2);

  function Game(props) {
    var _this2;

    (0, _classCallCheck2.default)(this, Game);
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Game).call(this, props));
    _this2.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xInNext: true
    };
    return _this2;
  }

  (0, _createClass2.default)(Game, [{
    key: "handleClick",
    value: function handleClick(i) {
      var history = this.state.history.slice(0, this.state.stepNumber + 1);
      var current = history[history.length - 1];
      var squares = current.squares.slice();

      if (calculateWinner(squares) || squares[i]) {
        return;
      }

      squares[i] = this.state.xInNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares
        }]),
        stepNumber: history.length,
        xInNext: !this.state.xInNext
      });
    }
  }, {
    key: "jumpTo",
    value: function jumpTo(step) {
      this.setState({
        stepNumber: step,
        xInNext: step % 2 === 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var history = this.state.history;
      var current = history[this.state.stepNumber];
      var winner = calculateWinner(current.squares);
      var moves = history.map(function (step, move) {
        var desc = move ? 'Go to move #' + move : 'Go to game start';
        return _react.default.createElement("li", {
          key: move
        }, _react.default.createElement("button", {
          onClick: function onClick() {
            return _this3.jumpTo(move);
          }
        }, desc));
      });
      var status;

      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xInNext ? 'X' : 'O');
      }

      return _react.default.createElement("div", {
        className: "game"
      }, _react.default.createElement("div", {
        className: "game-board"
      }, _react.default.createElement(Board, {
        squares: current.squares,
        onClick: function onClick(i) {
          return _this3.handleClick(i);
        }
      })), _react.default.createElement("div", {
        className: "game-info"
      }, _react.default.createElement("div", null, status), _react.default.createElement("ol", null, moves)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Game;
}(_react.default.Component);

function calculateWinner(squares) {
  var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  for (var i = 0; i < lines.length; i++) {
    var _lines$i = (0, _slicedToArray2.default)(lines[i], 3),
        a = _lines$i[0],
        b = _lines$i[1],
        c = _lines$i[2];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
} // ========================================


_reactDom.default.render(_react.default.createElement(Game, null), document.getElementById('app'));

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Square, "Square", "D:\\\u65E0\u950B\u7F51\u7EDC\\tic-tac-toe\\src\\index.js");
  reactHotLoader.register(Board, "Board", "D:\\\u65E0\u950B\u7F51\u7EDC\\tic-tac-toe\\src\\index.js");
  reactHotLoader.register(Game, "Game", "D:\\\u65E0\u950B\u7F51\u7EDC\\tic-tac-toe\\src\\index.js");
  reactHotLoader.register(calculateWinner, "calculateWinner", "D:\\\u65E0\u950B\u7F51\u7EDC\\tic-tac-toe\\src\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();