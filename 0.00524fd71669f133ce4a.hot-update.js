webpackHotUpdate(0,{

/***/ "./src/assets/icons/icon-plus.svg":
false,

/***/ "./src/components/AccountPicker.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccountPicker = undefined;

var _accountPicker = __webpack_require__("./src/styles/accountPicker.styl");

var _accountPicker2 = _interopRequireDefault(_accountPicker);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _I18n = __webpack_require__("./node_modules/cozy-ui/react/I18n/index.jsx");

var _reducers = __webpack_require__("./src/reducers/index.js");

var _konnectors = __webpack_require__("./src/ducks/konnectors/index.js");

var _Icon = __webpack_require__("./node_modules/cozy-ui/react/Icon/index.jsx");

var _Icon2 = _interopRequireDefault(_Icon);

var _Modal = __webpack_require__("./node_modules/cozy-ui/react/Modal/index.jsx");

var _Modal2 = _interopRequireDefault(_Modal);

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/es/index.js");

var _AccountPickerItem = __webpack_require__("./src/components/AccountPickerItem.jsx");

var _AccountPickerItem2 = _interopRequireDefault(_AccountPickerItem);

var _KonnectorHeaderIcon = __webpack_require__("./src/components/KonnectorHeaderIcon.jsx");

var _KonnectorHeaderIcon2 = _interopRequireDefault(_KonnectorHeaderIcon);

var _iconArrowLeft = __webpack_require__("./src/assets/sprites/icon-arrow-left.svg");

var _iconArrowLeft2 = _interopRequireDefault(_iconArrowLeft);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AccountPicker = exports.AccountPicker = function AccountPicker(_ref) {
  var t = _ref.t,
      connections = _ref.connections,
      history = _ref.history,
      konnector = _ref.konnector,
      match = _ref.match;
  var konnectorSlug = match.params.konnectorSlug;

  if (!connections.length) return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/connected/' + konnector.slug + '/new' });
  return _react2.default.createElement(
    _Modal2.default,
    { dismissAction: function dismissAction() {
        return history.push('/connected');
      }, mobileFullscreen: true },
    _react2.default.createElement(
      _Modal.ModalHeader,
      null,
      _react2.default.createElement(
        'div',
        { className: 'col-account-connection-header' },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { to: '/connected', className: 'col-account-connection-back' },
          _react2.default.createElement(_Icon2.default, { icon: _iconArrowLeft2.default })
        ),
        _react2.default.createElement(_KonnectorHeaderIcon2.default, { konnector: konnector })
      )
    ),
    _react2.default.createElement(
      _Modal.ModalContent,
      null,
      _react2.default.createElement(
        'ul',
        { className: _accountPicker2.default[(0, _classnames2.default)('col-account-picker')] },
        connections.map(function (connection) {
          return _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(_AccountPickerItem2.default, {
              konnectorSlug: konnectorSlug,
              connection: connection
            })
          );
        }),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            {
              to: '/connected/' + konnectorSlug + '/new',
              className: (0, _classnames2.default)(_accountPicker2.default['col-account-picker-button'], _accountPicker2.default['col-account-picker-button-add'])
            },
            _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(_Icon2.default, { icon: 'plus' }),
              _react2.default.createElement(
                'span',
                null,
                t('account_picker.add_account_button.label')
              )
            )
          )
        )
      )
    )
  );
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var konnectorSlug = ownProps.match.params.konnectorSlug;

  return {
    connections: (0, _reducers.getConnectionsByKonnector)(state, konnectorSlug),
    konnector: (0, _konnectors.getKonnector)(state.cozy, konnectorSlug)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _I18n.translate)()((0, _reactRouterDom.withRouter)(AccountPicker)));

/***/ })

})
//# sourceMappingURL=0.00524fd71669f133ce4a.hot-update.js.map