webpackHotUpdate(0,{

/***/ "./src/components/AppTile.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppTile = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _I18n = __webpack_require__("./node_modules/cozy-ui/react/I18n/index.jsx");

var _AppIcon = __webpack_require__("./node_modules/cozy-ui/react/AppIcon/index.jsx");

var _AppIcon2 = _interopRequireDefault(_AppIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchIcon = function fetchIcon(cozyClient) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
      var icon, resp, mimeType;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              icon = void 0;
              _context.prev = 1;
              _context.next = 4;
              return cozyClient.fetch('GET', url);

            case 4:
              resp = _context.sent;

              if (resp.ok) {
                _context.next = 7;
                break;
              }

              throw new Error('Error while fetching icon ' + resp.statusText + ': ' + url);

            case 7:
              _context.next = 9;
              return resp.blob();

            case 9:
              icon = _context.sent;
              _context.next = 16;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context['catch'](1);

              console.warn(_context.t0.message);
              return _context.abrupt('return', null);

            case 16:
              mimeType = icon.type;

              if (!(mimeType && mimeType.match(/^image\/.*$/))) {
                _context.next = 19;
                break;
              }

              return _context.abrupt('return', URL.createObjectURL(icon));

            case 19:
              console.warn('App icon ' + url + ' is not an image.');
              return _context.abrupt('return', null);

            case 21:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[1, 12]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var AppTile = exports.AppTile = function (_Component) {
  _inherits(AppTile, _Component);

  function AppTile() {
    _classCallCheck(this, AppTile);

    return _possibleConstructorReturn(this, (AppTile.__proto__ || Object.getPrototypeOf(AppTile)).apply(this, arguments));
  }

  _createClass(AppTile, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          app = _props.app,
          t = _props.t;
      var client = this.context.client;

      console.debug('AppTile', app);
      return _react2.default.createElement(
        'a',
        { className: 'item-wrapper', href: app.links && app.links.related },
        _react2.default.createElement(
          'header',
          { className: 'item-header' },
          _react2.default.createElement(
            'div',
            { className: 'item-icon' },
            _react2.default.createElement(_AppIcon2.default, {
              alt: t('app.logo.alt', { name: app.name }),
              app: app,
              fetchIcon: fetchIcon(client)
            })
          )
        ),
        _react2.default.createElement(
          'h3',
          { className: 'item-title' },
          app.name
        )
      );
    }
  }]);

  return AppTile;
}(_react.Component);

exports.default = (0, _I18n.translate)()(AppTile);

/***/ })

})
//# sourceMappingURL=0.a08b08aa3eeeda2ae1df.hot-update.js.map