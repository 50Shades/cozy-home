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
          { className: 'connector-list' },
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
          { className: 'connector-list col-picture-for-empty-list' },
          _react2.default.createElement('img', {
            'data-tutorial': 'empty-view',
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

/***/ }),

/***/ "./src/styles/index.styl":
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: ParseError: illegal unary \"==\", missing left-hand operand\n    at Parser.error (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/parser.js:259:11)\n    at Parser.equality (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/parser.js:1905:23)\n    at Parser.typecheck (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/parser.js:1886:21)\n    at Parser.logical (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/parser.js:1873:21)\n    at Parser.ternary (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/parser.js:1857:21)\n    at Parser.negation (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/parser.js:1849:17)\n    at Parser.expression (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/parser.js:1828:24)\n    at Parser.stmt (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/parser.js:818:25)\n    at Parser.statement (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/parser.js:685:21)\n    at Parser.parse (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/parser.js:236:25)\n    at CachedPathEvaluator.importFile (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus-loader/lib/evaluator.js:73:20)\n    at CachedPathEvaluator.visitImport (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus-loader/lib/evaluator.js:162:27)\n    at CachedPathEvaluator.Visitor.visit (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/visitor/index.js:28:40)\n    at CachedPathEvaluator.Evaluator.visit (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/visitor/evaluator.js:160:18)\n    at CachedPathEvaluator.Evaluator.visitBlock (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/visitor/evaluator.js:720:39)\n    at CachedPathEvaluator.Visitor.visit (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/visitor/index.js:28:40)\n    at CachedPathEvaluator.Evaluator.visit (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/visitor/evaluator.js:160:18)\n    at CachedPathEvaluator.Evaluator.visitGroup (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/visitor/evaluator.js:261:22)\n    at CachedPathEvaluator.Visitor.visit (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/visitor/index.js:28:40)\n    at CachedPathEvaluator.Evaluator.visit (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/visitor/evaluator.js:160:18)\n    at CachedPathEvaluator.Evaluator.visitRoot (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/visitor/evaluator.js:707:27)\n    at CachedPathEvaluator.Visitor.visit (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/visitor/index.js:28:40)\n    at CachedPathEvaluator.Evaluator.visit (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/visitor/evaluator.js:160:18)\n    at CachedPathEvaluator.Evaluator.evaluate (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/visitor/evaluator.js:247:15)\n    at Renderer.render (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/renderer.js:86:26)\n    at /Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus-loader/index.js:167:12\n    at tryCatchReject (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/when/lib/makePromise.js:840:30)\n    at runContinuation1 (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/when/lib/makePromise.js:799:4)\n    at Fulfilled.when (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/when/lib/makePromise.js:590:4)\n    at Pending.run (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/when/lib/makePromise.js:481:13)\n    at Scheduler._drain (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/when/lib/Scheduler.js:62:19)\n    at Scheduler.drain (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/when/lib/Scheduler.js:27:9)\n    at runLoaders (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/cozy-scripts/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at /Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus-loader/index.js:169:11\n    at Renderer.render (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/renderer.js:107:12)\n    at /Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus-loader/index.js:167:12\n    at tryCatchReject (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/when/lib/makePromise.js:840:30)\n    at runContinuation1 (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/when/lib/makePromise.js:799:4)\n    at Fulfilled.when (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/when/lib/makePromise.js:590:4)\n    at Pending.run (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/when/lib/makePromise.js:481:13)\n    at Scheduler._drain (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/when/lib/Scheduler.js:62:19)\n    at Scheduler.drain (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/when/lib/Scheduler.js:27:9)\n    at _combinedTickCallback (internal/process/next_tick.js:95:7)\n    at process._tickCallback (internal/process/next_tick.js:161:9)");

/***/ })

})
//# sourceMappingURL=0.8fe998f176be4ae0863c.hot-update.js.map