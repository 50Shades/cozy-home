webpackHotUpdate(0,{

/***/ "./src/components/AddServiceTile.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_cozy_dot_client) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddServiceTile = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _Icon = __webpack_require__("./node_modules/cozy-ui/react/Icon/index.jsx");

var _Icon2 = _interopRequireDefault(_Icon);

var _Spinner = __webpack_require__("./node_modules/cozy-ui/react/Spinner/index.jsx");

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global cozy */


var AddServiceTile = exports.AddServiceTile = function (_Component) {
  _inherits(AddServiceTile, _Component);

  function AddServiceTile(props) {
    _classCallCheck(this, AddServiceTile);

    var _this = _possibleConstructorReturn(this, (AddServiceTile.__proto__ || Object.getPrototypeOf(AddServiceTile)).call(this, props));

    _this.state = {
      redirecting: false
    };

    _this.toggleRedirect = _this.toggleRedirect.bind(_this);
    return _this;
  }

  _createClass(AddServiceTile, [{
    key: 'toggleRedirect',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.state.redirecting) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                // don't toggle twice
                this.setState(function () {
                  return { redirecting: true };
                });
                _context.prev = 3;
                _context.next = 6;
                return __webpack_provided_cozy_dot_client.intents.redirect('io.cozy.apps', { type: 'konnector' });

              case 6:
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](3);

                console.error(_context.t0);
                this.setState({
                  redirecting: false
                });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 8]]);
      }));

      function toggleRedirect() {
        return _ref.apply(this, arguments);
      }

      return toggleRedirect;
    }()
  }, {
    key: 'render',
    value: function render() {
      var label = this.props.label;
      var redirecting = this.state.redirecting;

      return _react2.default.createElement(
        'div',
        {
          'aria-busy': redirecting,
          className: 'item-wrapper --add-service',
          onClick: this.toggleRedirect
        },
        _react2.default.createElement(
          'header',
          { className: 'item-header' },
          redirecting ? _react2.default.createElement(_Spinner2.default, { color: 'grey', size: 'xlarge' }) : _react2.default.createElement(_Icon2.default, { className: 'item-icon', icon: plusIcon })
        ),
        _react2.default.createElement(
          'span',
          { className: 'item-add-service-label' },
          label
        )
      );
    }
  }]);

  return AddServiceTile;
}(_react.Component);

exports.default = AddServiceTile;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/cozy-client-js/dist/cozy-client.js")))

/***/ })

})
//# sourceMappingURL=0.3b6b620df05a1d229dbb.hot-update.js.map