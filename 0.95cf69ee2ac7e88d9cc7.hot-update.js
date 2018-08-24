webpackHotUpdate(0,{

/***/ "./src/components/Services.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _connectedAccounts = __webpack_require__("./src/assets/images/connected-accounts.svg");

var _connectedAccounts2 = _interopRequireDefault(_connectedAccounts);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/es/index.js");

var _reducers = __webpack_require__("./src/reducers/index.js");

var _I18n = __webpack_require__("./node_modules/cozy-ui/react/I18n/index.jsx");

var _sortBy = __webpack_require__("./node_modules/lodash/sortBy.js");

var _sortBy2 = _interopRequireDefault(_sortBy);

var _react3 = __webpack_require__("./node_modules/cozy-ui/react/index.js");

var _KonnectorTile = __webpack_require__("./src/components/KonnectorTile.jsx");

var _KonnectorTile2 = _interopRequireDefault(_KonnectorTile);

var _AddServiceTile = __webpack_require__("./src/components/AddServiceTile.jsx");

var _AddServiceTile2 = _interopRequireDefault(_AddServiceTile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Services = function (_Component) {
  _inherits(Services, _Component);

  function Services() {
    _classCallCheck(this, Services);

    return _possibleConstructorReturn(this, (Services.__proto__ || Object.getPrototypeOf(Services)).apply(this, arguments));
  }

  _createClass(Services, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          breakpoints = _props.breakpoints,
          t = _props.t,
          installedKonnectors = _props.installedKonnectors;

      var hasConnections = !!installedKonnectors.length;
      return _react2.default.createElement(
        'div',
        { className: 'col-services' },
        _react2.default.createElement(
          'h2',
          { className: 'col-view-title' },
          t('services.title')
        ),
        hasConnections ? _react2.default.createElement(
          'div',
          { className: 'connector-list', 'data-tutorial': 'home-services' },
          breakpoints.isMobile && _react2.default.createElement(_AddServiceTile2.default, { label: t('add_service') }),
          installedKonnectors.map(function (konnector) {
            return _react2.default.createElement(_KonnectorTile2.default, {
              konnector: konnector,
              route: 'connected/' + konnector.slug
            });
          }),
          !breakpoints.isMobile && _react2.default.createElement(_AddServiceTile2.default, { label: t('add_service') })
        ) : _react2.default.createElement(
          'div',
          {
            className: 'connector-list col-picture-for-empty-list',
            'data-tutorial': 'home-services'
          },
          _react2.default.createElement('img', {
            src: _connectedAccounts2.default,
            className: 'col-picture-for-empty-list--img',
            alt: t('connector.empty')
          }),
          _react2.default.createElement(
            'div',
            { className: 'col-picture-for-empty-list--text' },
            _react2.default.createElement(
              'h2',
              null,
              t('connector.no-connectors-connected')
            ),
            _react2.default.createElement(
              'p',
              null,
              t('connector.get-info')
            ),
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { to: '/providers/all', className: 'col-button' },
              _react2.default.createElement(
                'span',
                null,
                t('connector.connect-account')
              )
            )
          )
        )
      );
    }
  }]);

  return Services;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    installedKonnectors: (0, _sortBy2.default)((0, _reducers.getInstalledKonnectors)(state), function (konnector) {
      return konnector.name;
    })
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _I18n.translate)()((0, _react3.withBreakpoints)()(Services)));

/***/ })

})
//# sourceMappingURL=0.95cf69ee2ac7e88d9cc7.hot-update.js.map