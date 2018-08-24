webpackHotUpdate(0,{

/***/ "./src/components/Applications.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Applications = undefined;

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _AppTile = __webpack_require__("./src/components/AppTile.jsx");

var _AppTile2 = _interopRequireDefault(_AppTile);

var _LoadingPlaceholder = __webpack_require__("./src/components/LoadingPlaceholder.jsx");

var _LoadingPlaceholder2 = _interopRequireDefault(_LoadingPlaceholder);

var _cozyClient = __webpack_require__("./node_modules/cozy-client/dist/cozy-client.js");

var _I18n = __webpack_require__("./node_modules/cozy-ui/react/I18n/index.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingAppTiles = function LoadingAppTiles(_ref) {
  var num = _ref.num;

  var tiles = [];
  for (var i = 0; i < num; i++) {
    tiles.push(_react2.default.createElement(
      'div',
      { className: 'item-wrapper' },
      _react2.default.createElement(
        'header',
        { className: 'item-header' },
        _react2.default.createElement(
          'div',
          { className: 'item-icon' },
          _react2.default.createElement(_LoadingPlaceholder2.default, null)
        )
      ),
      _react2.default.createElement(
        'h3',
        { className: 'item-title' },
        _react2.default.createElement(_LoadingPlaceholder2.default, null)
      )
    ));
  }
  return _react2.default.createElement(
    'div',
    { className: 'app-list' },
    tiles
  );
};

var Applications = exports.Applications = function Applications(props) {
  var t = props.t;

  var ignoredAppSlugs = ['home', 'onboarding', 'settings'];
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      t('apps.title')
    ),
    _react2.default.createElement(
      _cozyClient.Query,
      {
        query: function query(client) {
          return client.all('io.cozy.apps');
        }
      },
      function (_ref2) {
        var data = _ref2.data,
            fetchStatus = _ref2.fetchStatus;

        return fetchStatus !== 'loaded' ? _react2.default.createElement(LoadingAppTiles, { num: '3' }) : _react2.default.createElement(
          'div',
          { className: 'app-list' },
          data.filter(function (app) {
            return !ignoredAppSlugs.includes(app.slug);
          }).map(function (app) {
            return _react2.default.createElement(_AppTile2.default, { app: app });
          })
        );
      }
    )
  );
};

exports.default = (0, _I18n.translate)()(Applications);

/***/ })

})
//# sourceMappingURL=0.40872d0836813848d517.hot-update.js.map