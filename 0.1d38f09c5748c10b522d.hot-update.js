webpackHotUpdate(0,{

/***/ "./src/components/Failure.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Failure = undefined;

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _I18n = __webpack_require__("./node_modules/cozy-ui/react/I18n/index.jsx");

var _Button = __webpack_require__("./node_modules/cozy-ui/react/Button/index.jsx");

var _Button2 = _interopRequireDefault(_Button);

var _Empty = __webpack_require__("./node_modules/cozy-ui/react/Empty/index.jsx");

var _Empty2 = _interopRequireDefault(_Empty);

var _default = __webpack_require__("./src/assets/icons/color/default.svg");

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reload = function reload() {
  window.location.reload();
};

var Failure = exports.Failure = function Failure(_ref) {
  var t = _ref.t,
      errorType = _ref.errorType;
  return _react2.default.createElement(
    _Empty2.default,
    {
      title: t('error.' + errorType),
      icon: _default2.default
    },
    _react2.default.createElement(_Button2.default, { label: t('error.button.reload'), onClick: reload })
  );
};

exports.default = (0, _I18n.translate)()(Failure);

/***/ })

})
//# sourceMappingURL=0.1d38f09c5748c10b522d.hot-update.js.map