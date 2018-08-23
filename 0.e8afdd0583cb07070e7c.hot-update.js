webpackHotUpdate(0,{

/***/ "./src/components/Home.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/es/index.js");

var _Layout = __webpack_require__("./node_modules/cozy-ui/react/Layout/index.js");

var _tutorial = __webpack_require__("./src/lib/tutorial.js");

var _Applications = __webpack_require__("./src/components/Applications.jsx");

var _Applications2 = _interopRequireDefault(_Applications);

var _ConnectionManagement = __webpack_require__("./src/containers/ConnectionManagement.jsx");

var _ConnectionManagement2 = _interopRequireDefault(_ConnectionManagement);

var _ScrollToTopOnMount = __webpack_require__("./src/components/ScrollToTopOnMount.jsx");

var _ScrollToTopOnMount2 = _interopRequireDefault(_ScrollToTopOnMount);

var _AccountPicker = __webpack_require__("./src/components/AccountPicker.jsx");

var _AccountPicker2 = _interopRequireDefault(_AccountPicker);

var _Services = __webpack_require__("./src/components/Services.jsx");

var _Services2 = _interopRequireDefault(_Services);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.launchTutorial();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.launchTutorial();
    }
  }, {
    key: 'launchTutorial',
    value: function launchTutorial() {
      var _this2 = this;

      if ((0, _tutorial.isTutorial)()) {
        window.history.pushState({}, '', '/' + window.location.hash);
        setTimeout(function () {
          (0, _tutorial.display)(_this2.props.t);
        }, 1000);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var wrapper = this.props.wrapper;

      return _react2.default.createElement(
        _Layout.Main,
        null,
        _react2.default.createElement(_ScrollToTopOnMount2.default, { target: wrapper }),
        _react2.default.createElement(
          _Layout.Content,
          null,
          _react2.default.createElement(
            'div',
            { className: 'col-content' },
            _react2.default.createElement(_Applications2.default, null),
            _react2.default.createElement(_Services2.default, null)
          )
        ),
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Route, {
            exact: true,
            path: '/connected/:konnectorSlug',
            component: _AccountPicker2.default
          }),
          _react2.default.createElement(_reactRouterDom.Route, {
            path: '/connected/:konnectorSlug/new',
            render: function render(props) {
              return _react2.default.createElement(_ConnectionManagement2.default, _extends({ originPath: '/connected' }, props));
            }
          }),
          _react2.default.createElement(_reactRouterDom.Route, {
            path: '/connected/:konnectorSlug/accounts/:accountId',
            render: function render(props) {
              return _react2.default.createElement(_ConnectionManagement2.default, _extends({ originPath: '/connected' }, props));
            }
          }),
          _react2.default.createElement(_reactRouterDom.Redirect, { from: '/connected/*', to: '/connected' })
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Home);

/***/ })

})
//# sourceMappingURL=0.e8afdd0583cb07070e7c.hot-update.js.map