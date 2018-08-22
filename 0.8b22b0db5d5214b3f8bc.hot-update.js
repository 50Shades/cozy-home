webpackHotUpdate(0,{

/***/ "./node_modules/@emotion/hash/dist/index.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable */
// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash2_32_gc(str) {
  var l = str.length,
      h = l ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return (h >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["a"] = (murmurhash2_32_gc);
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/index.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["a"] = (memoize);
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/index.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var V = function ca(W) {
  function M(d, c, f, h, a) {
    for (var k = 0, b = 0, u = 0, l = 0, q, m, e, D = 0, y = 0, r, E = r = q = 0, n = 0, J = m = 0, t = 0, K = f.length, F = K - 1, w, g = "", p = "", G = "", H = "", A; n < K;) {
      e = f.charCodeAt(n);
      n === F && 0 !== b + l + u + k && (0 !== b && (e = 47 === b ? 10 : 47), l = u = k = 0, K++, F++);

      if (0 === b + l + u + k) {
        if (n === F && (0 < m && (g = g.replace(N, "")), 0 < g.trim().length)) {
          switch (e) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              g += f.charAt(n);
          }

          e = 59;
        }

        switch (e) {
          case 123:
            g = g.trim();
            q = g.charCodeAt(0);
            r = 1;

            for (t = ++n; n < K;) {
              e = f.charCodeAt(n);

              switch (e) {
                case 123:
                  r++;
                  break;

                case 125:
                  r--;
              }

              if (0 === r) break;
              n++;
            }

            e = f.substring(t, n);
            0 === q && (q = (g = g.replace(da, "").trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < m && (g = g.replace(N, ""));
                m = g.charCodeAt(1);

                switch (m) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                e = M(c, r, e, m, a + 1);
                t = e.length;
                0 < z && (r = X(O, g, J), A = I(3, e, r, c, B, x, t, m, a, h), g = r.join(""), void 0 !== A && 0 === (t = (e = A.trim()).length) && (m = 0, e = ""));
                if (0 < t) switch (m) {
                  case 115:
                    g = g.replace(ea, fa);

                  case 100:
                  case 109:
                  case 45:
                    e = g + "{" + e + "}";
                    break;

                  case 107:
                    g = g.replace(ha, "$1 $2");
                    e = g + "{" + e + "}";
                    e = 1 === v || 2 === v && L("@" + e, 3) ? "@-webkit-" + e + "@" + e : "@" + e;
                    break;

                  default:
                    e = g + e, 112 === h && (e = (p += e, ""));
                } else e = "";
                break;

              default:
                e = M(c, X(c, g, J), e, h, a + 1);
            }

            G += e;
            r = J = m = E = q = 0;
            g = "";
            e = f.charCodeAt(++n);
            break;

          case 125:
          case 59:
            g = (0 < m ? g.replace(N, "") : g).trim();
            if (1 < (t = g.length)) switch (0 === E && (q = g.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (g = g.replace(" ", ":")).length), 0 < z && void 0 !== (A = I(1, g, c, d, B, x, p.length, h, a, h)) && 0 === (t = (g = A.trim()).length) && (g = "\x00\x00"), q = g.charCodeAt(0), m = g.charCodeAt(1), q + m) {
              case 0:
                break;

              case 169:
              case 163:
                H += g + f.charAt(n);
                break;

              default:
                58 !== g.charCodeAt(t - 1) && (p += P(g, q, m, g.charCodeAt(2)));
            }
            J = m = E = q = 0;
            g = "";
            e = f.charCodeAt(++n);
        }
      }

      switch (e) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && (m = 1, g += "\x00");
          0 < z * Y && I(0, g, c, d, B, x, p.length, h, a, h);
          x = 1;
          B++;
          break;

        case 59:
        case 125:
          if (0 === b + l + u + k) {
            x++;
            break;
          }

        default:
          x++;
          w = f.charAt(n);

          switch (e) {
            case 9:
            case 32:
              if (0 === l + k + b) switch (D) {
                case 44:
                case 58:
                case 9:
                case 32:
                  w = "";
                  break;

                default:
                  32 !== e && (w = " ");
              }
              break;

            case 0:
              w = "\\0";
              break;

            case 12:
              w = "\\f";
              break;

            case 11:
              w = "\\v";
              break;

            case 38:
              0 === l + b + k && (m = J = 1, w = "\f" + w);
              break;

            case 108:
              if (0 === l + b + k + C && 0 < E) switch (n - E) {
                case 2:
                  112 === D && 58 === f.charCodeAt(n - 3) && (C = D);

                case 8:
                  111 === y && (C = y);
              }
              break;

            case 58:
              0 === l + b + k && (E = n);
              break;

            case 44:
              0 === b + u + l + k && (m = 1, w += "\r");
              break;

            case 34:
            case 39:
              0 === b && (l = l === e ? 0 : 0 === l ? e : l);
              break;

            case 91:
              0 === l + b + u && k++;
              break;

            case 93:
              0 === l + b + u && k--;
              break;

            case 41:
              0 === l + b + k && u--;
              break;

            case 40:
              if (0 === l + b + k) {
                if (0 === q) switch (2 * D + 3 * y) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                u++;
              }

              break;

            case 64:
              0 === b + u + l + k + E + r && (r = 1);
              break;

            case 42:
            case 47:
              if (!(0 < l + k + u)) switch (b) {
                case 0:
                  switch (2 * e + 3 * f.charCodeAt(n + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = n, b = 42;
                  }

                  break;

                case 42:
                  47 === e && 42 === D && (33 === f.charCodeAt(t + 2) && (p += f.substring(t, n + 1)), w = "", b = 0);
              }
          }

          0 === b && (g += w);
      }

      y = D;
      D = e;
      n++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < z && (A = I(2, p, r, d, B, x, t, h, a, h), void 0 !== A && 0 === (p = A).length)) return H + p + G;
      p = r.join(",") + "{" + p + "}";

      if (0 !== v * C) {
        2 !== v || L(p, 2) || (C = 0);

        switch (C) {
          case 111:
            p = p.replace(ia, ":-moz-$1") + p;
            break;

          case 112:
            p = p.replace(Q, "::-webkit-input-$1") + p.replace(Q, "::-moz-$1") + p.replace(Q, ":-ms-input-$1") + p;
        }

        C = 0;
      }
    }

    return H + p + G;
  }

  function X(d, c, f) {
    var h = c.trim().split(ja);
    c = h;
    var a = h.length,
        k = d.length;

    switch (k) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === k ? "" : d[0] + " "; b < a; ++b) {
          c[b] = Z(d, c[b], f, k).trim();
        }

        break;

      default:
        var u = b = 0;

        for (c = []; b < a; ++b) {
          for (var l = 0; l < k; ++l) {
            c[u++] = Z(d[l] + " ", h[b], f, k).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, f) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, "$1" + d.trim());

      case 58:
        switch (c.charCodeAt(1)) {
          case 103:
            break;

          default:
            return d.trim() + c.replace(F, "$1" + d.trim());
        }

      default:
        if (0 < 1 * f && 0 < c.indexOf("\f")) return c.replace(F, (58 === d.charCodeAt(0) ? "" : "$1") + d.trim());
    }

    return d + c;
  }

  function P(d, c, f, h) {
    var a = d + ";",
        k = 2 * c + 3 * f + 4 * h;

    if (944 === k) {
      d = a.indexOf(":", 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ";";
      return 1 === v || 2 === v && L(b, 1) ? "-webkit-" + b + b : b;
    }

    if (0 === v || 2 === v && !L(a, 1)) return a;

    switch (k) {
      case 1015:
        return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return "-webkit-" + a + a;

      case 978:
        return "-webkit-" + a + "-moz-" + a + a;

      case 1019:
      case 983:
        return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;

      case 883:
        return 45 === a.charCodeAt(8) ? "-webkit-" + a + a : a;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;

          case 115:
            return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;

          case 98:
            return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a;
        }
        return "-webkit-" + a + "-ms-" + a + a;

      case 964:
        return "-webkit-" + a + "-ms-flex-" + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
        return "-webkit-box-pack" + b + "-webkit-" + a + "-ms-flex-pack" + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ":-webkit-") + a.replace(aa, ":-moz-") + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf("-") + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, "tb");
            break;

          case 232:
            b = a.replace(G, "tb-rl");
            break;

          case 220:
            b = a.replace(G, "lr");
            break;

          default:
            return a;
        }

        return "-webkit-" + a + "-ms-" + b + a;

      case 1017:
        if (-1 === a.indexOf("sticky", 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(":", 7) + 1).trim();

        switch (k = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, "-webkit-" + b) + ";" + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, "-webkit-" + (102 < k ? "inline-" : "") + "box") + ";" + a.replace(b, "-webkit-" + b) + ";" + a.replace(b, "-ms-" + b + "box") + ";" + a;
        }

        return a + ";";

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace("-items", ""), "-webkit-" + a + "-webkit-box-" + b + "-ms-flex-" + b + a;

          case 115:
            return "-webkit-" + a + "-ms-flex-item-" + a.replace(ba, "") + a;

          default:
            return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(ba, "") + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(":") + 1)).charCodeAt(0) ? P(d.replace("stretch", "fill-available"), c, f, h).replace(":fill-available", ":stretch") : a.replace(b, "-webkit-" + b) + a.replace(b, "-moz-" + b.replace("fill-", "")) + a;
        break;

      case 962:
        if (a = "-webkit-" + a + (102 === a.charCodeAt(5) ? "-ms-" + a : "") + a, 211 === f + h && 105 === a.charCodeAt(13) && 0 < a.indexOf("transform", 10)) return a.substring(0, a.indexOf(";", 27) + 1).replace(ma, "$1-webkit-$2") + a;
    }

    return a;
  }

  function L(d, c) {
    var f = d.indexOf(1 === c ? ":" : "{"),
        h = d.substring(0, 3 !== c ? f : 10);
    f = d.substring(f + 1, d.length - 1);
    return H(2 !== c ? h : h.replace(na, "$1"), f, c);
  }

  function fa(d, c) {
    var f = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return f !== c + ";" ? f.replace(oa, " or ($1)").substring(4) : "(" + c + ")";
  }

  function I(d, c, f, h, a, k, b, u, l, q) {
    for (var m = 0, e = c, v; m < z; ++m) {
      switch (v = R[m].call(y, d, e, f, h, a, k, b, u, l, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          e = v;
      }
    }

    if (e !== c) return e;
  }

  function S(d) {
    switch (d) {
      case void 0:
      case null:
        z = R.length = 0;
        break;

      default:
        switch (d.constructor) {
          case Array:
            for (var c = 0, f = d.length; c < f; ++c) {
              S(d[c]);
            }

            break;

          case Function:
            R[z++] = d;
            break;

          case Boolean:
            Y = !!d | 0;
        }

    }

    return S;
  }

  function T(d) {
    d = d.prefix;
    void 0 !== d && (H = null, d ? "function" !== typeof d ? v = 1 : (v = 2, H = d) : v = 0);
    return T;
  }

  function y(d, c) {
    if (void 0 !== this && this.constructor === y) return ca(d);
    var f = d;
    33 > f.charCodeAt(0) && (f = f.trim());
    U = f;
    f = [U];

    if (0 < z) {
      var h = I(-1, c, f, f, B, x, 0, 0, 0, 0);
      void 0 !== h && "string" === typeof h && (c = h);
    }

    var a = M(O, f, c, 0, 0);
    0 < z && (h = I(-2, a, f, f, B, x, a.length, 0, 0, 0), void 0 !== h && (a = h));
    U = "";
    C = 0;
    x = B = 1;
    return a;
  }

  var da = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ja = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      ha = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ia = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      ea = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      x = 1,
      B = 1,
      C = 0,
      v = 1,
      O = [],
      R = [],
      z = 0,
      H = null,
      Y = 0,
      U = "";
  y.use = S;
  y.set = T;
  void 0 !== W && T(W);
  return y;
};

/* harmony default export */ __webpack_exports__["a"] = (V);
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/index.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var index = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["a"] = (index);
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/cozy-ui/react/Accordion/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = __webpack_require__("./node_modules/cozy-ui/react/Icon/index.jsx");

var _Icon2 = _interopRequireDefault(_Icon);

var _styles = __webpack_require__("./node_modules/cozy-ui/react/Accordion/styles.styl");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AccordionItem = function (_Component) {
  _inherits(AccordionItem, _Component);

  function AccordionItem(props) {
    _classCallCheck(this, AccordionItem);

    var _this = _possibleConstructorReturn(this, (AccordionItem.__proto__ || Object.getPrototypeOf(AccordionItem)).call(this, props));

    _this.toggleSelection = function () {
      _this.setState(function (previousState) {
        return { selected: !previousState.selected };
      });
    };

    _this.state = { selected: false };
    return _this;
  }

  _createClass(AccordionItem, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          label = _props.label,
          className = _props.className;
      var selected = this.state.selected;


      var removeSpaceCharacters = function removeSpaceCharacters(str) {
        return str.replace(/\s+/g, '');
      };

      var bodyName = removeSpaceCharacters(label);

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(_styles2.default['c-accordion-item'], className) },
        _react2.default.createElement(
          'div',
          {
            className: (0, _classnames2.default)(_styles2.default['c-accordion-title'], _defineProperty({}, _styles2.default['is-active'], selected), className),
            'aria-selected': selected,
            'aria-controls': bodyName,
            role: 'tab',
            tabIndex: '0',
            onClick: function onClick() {
              return _this2.toggleSelection();
            }
          },
          _react2.default.createElement(_Icon2.default, { icon: 'forward' }),
          label
        ),
        _react2.default.createElement(
          'div',
          {
            className: (0, _classnames2.default)(_styles2.default['c-accordion-body'], _defineProperty({}, _styles2.default['is-active'], selected), className),
            'aria-hidden': !selected,
            'aria-labelledby': bodyName,
            role: 'tabpanel'
          },
          children
        )
      );
    }
  }]);

  return AccordionItem;
}(_react.Component);

var Accordion = function (_Component2) {
  _inherits(Accordion, _Component2);

  function Accordion() {
    _classCallCheck(this, Accordion);

    return _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).apply(this, arguments));
  }

  _createClass(Accordion, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(_styles2.default['c-accordion'], className) },
        children
      );
    }
  }]);

  return Accordion;
}(_react.Component);

Accordion.propTypes = {
  className: _propTypes2.default.string
};

AccordionItem.propTypes = {
  label: _propTypes2.default.string.isRequired,
  className: _propTypes2.default.string
};

Object.assign(Accordion, { AccordionItem: AccordionItem });

exports.default = Accordion;
exports.AccordionItem = AccordionItem;

/***/ }),

/***/ "./node_modules/cozy-ui/react/Accordion/styles.styl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"c-accordion":"c-accordion--2ddWW","c-accordion-item":"c-accordion-item--1v5Li","c-accordion-title":"c-accordion-title--1gt7U","is-active":"is-active--1jrB6","c-accordion-body":"c-accordion-body--2C6xn"};

/***/ }),

/***/ "./node_modules/cozy-ui/react/ActionMenu/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _hammerjs = __webpack_require__("./node_modules/hammerjs/hammer.js");

var _hammerjs2 = _interopRequireDefault(_hammerjs);

var _styles = __webpack_require__("./node_modules/cozy-ui/react/ActionMenu/styles.styl");

var _styles2 = _interopRequireDefault(_styles);

var _Overlay = __webpack_require__("./node_modules/cozy-ui/react/Overlay/index.jsx");

var _Overlay2 = _interopRequireDefault(_Overlay);

var _once = __webpack_require__("./node_modules/lodash/once.js");

var _once2 = _interopRequireDefault(_once);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TRANSITION_DURATION = 100; // need to be kept in sync with css

/**
 * Use an ActionMenu to show the user possible actions to the user
 * at the bottom of the screen in a modal way.
 *
 * - Animates in/out
 * - Possible to use Escape to close (thanks to `<Overlay />`)
 * - Possible to click outside to close (thanks to `<Overlay />`)
 * - Reacts to gestures with HammerJS
 */

var ActionMenu = function (_Component) {
  _inherits(ActionMenu, _Component);

  function ActionMenu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ActionMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ActionMenu.__proto__ || Object.getPrototypeOf(ActionMenu)).call.apply(_ref, [this].concat(args))), _this), _this.animateClose = function () {
      _this.setState({ closing: true });

      // we need to transition the menu to the bottom before dismissing it
      var close = (0, _once2.default)(function () {
        _this.menuNode.removeEventListener('transitionend', close);
        _this.close();
      });

      _this.menuNode.addEventListener('transitionend', close, false);
      // in case transitionend is not called, for example if the element is removed
      setTimeout(close, TRANSITION_DURATION);

      _this.applyTransformation(1.1);
    }, _this.close = function () {
      _this.setState({ closing: true });
      _this.props.onClose();
    }, _this.handleMenuRef = function (menu) {
      // FIXME
      _this.menuNode = _reactDom2.default.findDOMNode(menu); // eslint-disable-line react/no-find-dom-node
    }, _this.handleWrapperRef = function (wrapper) {
      // FIXME
      _this.wrapperNode = _reactDom2.default.findDOMNode(wrapper); // eslint-disable-line react/no-find-dom-node
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ActionMenu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initialAppear();
      this.attachEvents();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.gesturesHandler.destroy();
    }
  }, {
    key: 'initialAppear',
    value: function initialAppear() {
      var _this2 = this;

      this.turnTransitionsOff();
      this.applyTransformation(1);
      requestAnimationFrame(function () {
        _this2.turnTransitionsOn();
        _this2.applyTransformation(0);
      });
    }
  }, {
    key: 'turnTransitionsOn',
    value: function turnTransitionsOn() {
      this.menuNode.classList.add(_styles2.default['with-transition']);
    }
  }, {
    key: 'turnTransitionsOff',
    value: function turnTransitionsOff() {
      this.menuNode.classList.remove(_styles2.default['with-transition']);
    }
  }, {
    key: 'attachEvents',
    value: function attachEvents() {
      var _this3 = this;

      this.gesturesHandler = new _hammerjs2.default.Manager(this.wrapperNode, {
        recognizers: [[_hammerjs2.default.Pan, { direction: _hammerjs2.default.DIRECTION_VERTICAL }]]
      });

      // to be completely accurate, `maximumGestureDelta` should be the difference between the top of the menu and the
      // bottom of the page; but using the height is much easier to compute and accurate enough.
      var maximumGestureDistance = this.menuNode.getBoundingClientRect().height;
      // between 0 and 1, how far down the gesture must be to be considered complete upon release
      var minimumCloseDistance = 0.6;
      // a gesture faster than this will dismiss the menu, regardless of distance traveled
      var minimumCloseVelocity = 0.6;

      var currentGestureProgress = null;

      this.gesturesHandler.on('panstart', function () {
        _this3.turnTransitionsOff();
        currentGestureProgress = 0;
      });

      this.gesturesHandler.on('pan', function (e) {
        currentGestureProgress = e.deltaY / maximumGestureDistance;
        _this3.applyTransformation(currentGestureProgress);
      });

      this.gesturesHandler.on('panend', function (e) {
        // Dismiss the menu if the swipe pan was bigger than the treshold,
        // or if it was a fast, downward gesture
        var shouldDismiss = e.deltaY / maximumGestureDistance >= minimumCloseDistance || e.deltaY > 0 && e.velocity >= minimumCloseVelocity;

        if (shouldDismiss) {
          if (currentGestureProgress >= 1) {
            // Menu is already hidden, close it right away
            _this3.close();
          } else {
            _this3.turnTransitionsOn();
            _this3.animateClose();
          }
        } else {
          _this3.turnTransitionsOn();
          _this3.applyTransformation(0);
        }
      });
    }

    /**
     * Applies a css trasnform to the element, based on the progress of the gesture
     * @param  {Float} progress - Amount of progress between 0 and 1
     */

  }, {
    key: 'applyTransformation',
    value: function applyTransformation(progress) {
      // constrain between 0 and 1.1 (go a bit further than 1 to be hidden completely)
      progress = Math.min(1.1, Math.max(0, progress));
      this.menuNode.style.transform = 'translateY(' + progress * 100 + '%)';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className;
      var closing = this.state.closing;

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(_styles2.default.ActionMenu, className),
          ref: this.handleWrapperRef
        },
        _react2.default.createElement(
          _Overlay2.default,
          {
            style: { opacity: closing ? 0 : 1 },
            onClick: this.animateClose,
            onEscape: this.animateClose
          },
          _react2.default.createElement(
            'div',
            { className: _styles2.default['c-actionmenu'], ref: this.handleMenuRef },
            children
          )
        )
      );
    }
  }]);

  return ActionMenu;
}(_react.Component);

ActionMenu.propTypes = {
  /** Extra class */
  className: _propTypes2.default.string,
  /** What to do on close */
  onClose: _propTypes2.default.func
};

exports.default = ActionMenu;

/***/ }),

/***/ "./node_modules/cozy-ui/react/ActionMenu/styles.styl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"ActionMenu":"ActionMenu--1ZqTI","c-actionmenu":"c-actionmenu--2fNFG","with-transition":"with-transition--3Vyw-"};

/***/ }),

/***/ "./node_modules/cozy-ui/react/Alerter/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _preactPortal = __webpack_require__("./node_modules/preact-portal/dist/preact-portal.js");

var _preactPortal2 = _interopRequireDefault(_preactPortal);

var _Button = __webpack_require__("./node_modules/cozy-ui/react/Button/index.jsx");

var _Button2 = _interopRequireDefault(_Button);

var _styles = __webpack_require__("./node_modules/cozy-ui/react/Alerter/styles.styl");

var _styles2 = _interopRequireDefault(_styles);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MINIMUM_ALERT_DURATION = 2000;

var createStore = function createStore() {
  var notifications = [];
  var listeners = [];

  var dispatch = function dispatch(notification) {
    notification.id = notifications.length;
    notifications.push(notification);
    listeners.forEach(function (listener) {
      return listener(notification);
    });
  };

  var subscribe = function subscribe(listener) {
    listeners.push(listener);
  };

  return { dispatch: dispatch, subscribe: subscribe };
};

var store = createStore();

var Alert = function (_Component) {
  _inherits(Alert, _Component);

  function Alert() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Alert);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Alert.__proto__ || Object.getPrototypeOf(Alert)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hidden: true
    }, _this.notifyClosed = function () {
      _this.props.onClose();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Alert, [{
    key: 'computeDuration',
    value: function computeDuration() {
      var words = this.props.message.split(/\W/).filter(Boolean);
      return Math.max(MINIMUM_ALERT_DURATION, words.length / 3 * 1000);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.closeTimer = setTimeout(function () {
        _this2.beginClosing();
      }, this.props.duration === 'auto' ? this.computeDuration() : this.props.duration);
      // Delay to trigger CSS transition after the first render.
      // Totally open for a better way to achieve this.
      setTimeout(function () {
        _this2.setState({ hidden: false });
      }, 20);
    }
  }, {
    key: 'beginClosing',
    value: function beginClosing() {
      this.base.addEventListener('transitionend', this.notifyClosed, false);
      this.setState({ hidden: true });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.base.removeEventListener('transitionend', this.notifyClosed, false);
      this.setState({ hidden: false });
      if (this.closeTimer) {
        clearTimeout(this.closeTimer);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          message = _props.message,
          type = _props.type,
          buttonText = _props.buttonText,
          buttonAction = _props.buttonAction;
      var hidden = this.state.hidden;

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(_styles2.default['c-alert'], hidden ? _styles2.default['c-alert--hidden'] : '')
        },
        _react2.default.createElement(
          'div',
          {
            className: (0, _classnames2.default)(_styles2.default['c-alert-wrapper'], _styles2.default['c-alert--' + type])
          },
          _react2.default.createElement(
            'p',
            null,
            message
          ),
          buttonText && _react2.default.createElement(_Button2.default, {
            onClick: buttonAction,
            className: _styles2.default['c-btn--alert-' + type],
            label: buttonText,
            size: 'tiny'
          })
        )
      );
    }
  }]);

  return Alert;
}(_react.Component);

Alert.propTypes = {
  /** @type string - Controls the style of the error */
  type: _propTypes2.default.oneOf(['success', 'info', 'error']),
  /** @type {string} - Message to display */
  message: _propTypes2.default.string.isRequired,
  /** @type {function} - Callback when is dismissed */
  onClose: _propTypes2.default.func,
  /** @type {function} - Text of the button, if absent, no button is displayed */
  buttonText: _propTypes2.default.string,
  /** @type {function} - Callback when clicking on the button */
  buttonAction: _propTypes2.default.func
};

Alert.defaultProps = {
  type: 'info',
  onClose: function onClose() {},
  buttonText: undefined,
  buttonAction: function buttonAction() {},
  duration: 'auto'
};

var Alerter = function (_Component2) {
  _inherits(Alerter, _Component2);

  function Alerter() {
    var _ref2;

    var _temp2, _this3, _ret2;

    _classCallCheck(this, Alerter);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref2 = Alerter.__proto__ || Object.getPrototypeOf(Alerter)).call.apply(_ref2, [this].concat(args))), _this3), _this3.state = {
      notifications: []

      /**
       * @param {string} message
       * @param {object} options
       * @public
       * @static
       */
    }, _this3.notify = function (notification) {
      _this3.setState({
        notifications: [].concat(_toConsumableArray(_this3.state.notifications), [notification])
      });
    }, _this3.handleClose = function (id) {
      var idx = _this3.state.notifications.findIndex(function (n) {
        return n.id === id;
      });
      _this3.setState({
        notifications: [].concat(_toConsumableArray(_this3.state.notifications.slice(0, idx)), _toConsumableArray(_this3.state.notifications.slice(idx + 1)))
      });
    }, _temp2), _possibleConstructorReturn(_this3, _ret2);
  }

  _createClass(Alerter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ mounted: true });
      store.subscribe(this.notify);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props2 = this.props,
          t = _props2.t,
          into = _props2.into;
      var notifications = this.state.notifications;

      return _react2.default.createElement(
        _preactPortal2.default,
        { into: into },
        notifications.map(function (notif) {
          return _react2.default.createElement(Alert, {
            type: notif.type,
            key: notif.id,
            message: t ? t(notif.msg, notif.options) : notif.msg,
            onClose: function onClose() {
              return _this4.handleClose(notif.id);
            },
            buttonText: notif.options && notif.options.buttonText,
            buttonAction: notif.options && notif.options.buttonAction,
            duration: notif.options && notif.options.duration
          });
        })
      );
    }
  }], [{
    key: 'info',
    value: function info(msg, options) {
      store.dispatch({ type: 'info', msg: msg, options: options });
    }

    /**
     * @param {string} msg
     * @param {object} options
     * @public
     * @static
     */

  }, {
    key: 'success',
    value: function success(msg, options) {
      store.dispatch({ type: 'success', msg: msg, options: options });
    }

    /**
     * @param {string} msg
     * @param {object} options
     * @public
     * @static
     */

  }, {
    key: 'error',
    value: function error(msg, options) {
      store.dispatch({ type: 'error', msg: msg, options: options });
    }
  }]);

  return Alerter;
}(_react.Component);

Alerter.propTypes = {
  /** A translation function. If ommited, messages are left intact */
  t: _propTypes2.default.func,
  /** A selector to target a DOM node where alerts will be rendered */
  into: _propTypes2.default.string
};

Alerter.defaultProps = {
  into: 'body'
};

exports.default = Alerter;

/***/ }),

/***/ "./node_modules/cozy-ui/react/Alerter/styles.styl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"u-visuallyhidden":"u-visuallyhidden--3ZwwJ","u-hide":"u-hide--V7ZWj","u-hide--mob":"u-hide--mob--2LQAW","u-hide--tablet":"u-hide--tablet--2-cQF","u-hide--desk":"u-hide--desk--cXT9b","u-error":"u-error--1_NSP","u-error--warning":"u-error--warning--3ZXt2","u-valid":"u-valid--3LJMm","u-warn":"u-warn--1aA1d","u-black":"u-black--3PLDe","u-white":"u-white--132H2","u-paleGrey":"u-paleGrey--cea31","u-silver":"u-silver--3NuRL","u-coolGrey":"u-coolGrey--1Egfn","u-slateGrey":"u-slateGrey--3W-Lq","u-charcoalGrey":"u-charcoalGrey--2uKLc","u-zircon":"u-zircon--WKp59","u-frenchPass":"u-frenchPass--1G_73","u-dodgerBlue":"u-dodgerBlue--2mS7J","u-scienceBlue":"u-scienceBlue--26SvS","u-puertoRico":"u-puertoRico--293cZ","u-emerald":"u-emerald--3UAh_","u-malachite":"u-malachite--9Jf89","u-texasRose":"u-texasRose--1AchS","u-chablis":"u-chablis--2XRos","u-yourPink":"u-yourPink--uvofX","u-pomegranate":"u-pomegranate--MK069","u-monza":"u-monza--3HgNE","u-portage":"u-portage--4oM1g","u-azure":"u-azure--3fR9A","u-melon":"u-melon--1OqSE","u-blazeOrange":"u-blazeOrange--37R2Y","u-mango":"u-mango--3A0fS","u-pumpkinOrange":"u-pumpkinOrange--lCLyz","u-darkPeriwinkle":"u-darkPeriwinkle--2_qiY","u-purpley":"u-purpley--3j2K3","u-lightishPurple":"u-lightishPurple--3Z-Ig","u-weirdGreen":"u-weirdGreen--lxyD4","u-ellipsis":"u-ellipsis--32pGc","u-midellipsis":"u-midellipsis--390E3","c-btn--alert-error":"c-btn--alert-error--3L6xE","c-btn--alert-info":"c-btn--alert-info--23Fur","c-btn--alert-success":"c-btn--alert-success--Y78bf","c-alert":"c-alert--3aE8a","c-alert-wrapper":"c-alert-wrapper--3hp30","c-alert--hidden":"c-alert--hidden--2Zghw","c-alert-title":"c-alert-title--3Ikh1","c-alert--error":"c-alert--error--2aGM-","c-alert--success":"c-alert--success--Bjb-j","c-alert--info":"c-alert--info--395u7","spin":"spin--1ywvo"};

/***/ }),

/***/ "./node_modules/cozy-ui/react/Avatar/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = undefined;

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _palette = __webpack_require__("./node_modules/cozy-ui/stylus/settings/palette.json");

var _palette2 = _interopRequireDefault(_palette);

var _styles = __webpack_require__("./node_modules/cozy-ui/react/Avatar/styles.styl");

var _styles2 = _interopRequireDefault(_styles);

var _Icon = __webpack_require__("./node_modules/cozy-ui/react/Icon/index.jsx");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var nameToColor = function nameToColor() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var colors = [_palette2.default['azure'], _palette2.default['melon'], _palette2.default['blazeOrange'], _palette2.default['pomegranate'], _palette2.default['mango'], _palette2.default['pumpkinOrange'], _palette2.default['darkPeriwinkle'], _palette2.default['purpley'], _palette2.default['lightishPurple'], _palette2.default['weirdGreen'], _palette2.default['puertoRico'], _palette2.default['emerald']];
  var key = Array.from(name.toUpperCase()).map(function (letter) {
    return letter.charCodeAt(0);
  }).reduce(function (sum, number) {
    return sum + number;
  }, 0) % colors.length;
  return colors[key];
};

var Avatar = exports.Avatar = function Avatar(_ref) {
  var text = _ref.text,
      textId = _ref.textId,
      image = _ref.image,
      size = _ref.size,
      className = _ref.className,
      style = _ref.style;

  var colored = {
    backgroundColor: '' + nameToColor(textId || text),
    color: 'white'
  };

  if (style) {
    Object.assign(colored, style);
  }

  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)(_styles2.default['c-avatar'], _defineProperty({}, _styles2.default['c-avatar--' + size], size), className),
      style: text ? colored : style
    },
    image && _react2.default.createElement('img', { src: image, className: _styles2.default['c-avatar-image'], alt: '' }),
    !image && text && _react2.default.createElement(
      'span',
      { className: _styles2.default['c-avatar-initials'] },
      text
    ),
    !image && !text && _react2.default.createElement(_Icon2.default, { icon: 'people' })
  );
};

Avatar.propTypes = {
  text: _propTypes2.default.string,
  image: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['small', 'medium']),
  className: _propTypes2.default.string
};

Avatar.defaultProps = {
  text: '',
  image: '',
  size: 'medium',
  className: ''
};

exports.default = Avatar;

/***/ }),

/***/ "./node_modules/cozy-ui/react/Avatar/styles.styl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"c-avatar":"c-avatar--3nILq","c-avatar--small":"c-avatar--small--cN_QU","c-avatar--medium":"c-avatar--medium--1LlFX","c-avatar-initials":"c-avatar-initials--1dZcc","c-avatar-image":"c-avatar-image--5EqK4"};

/***/ }),

/***/ "./node_modules/cozy-ui/react/Badge/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Badge = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__("./node_modules/cozy-ui/react/Badge/styles.styl");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Badge = function Badge(_ref) {
  var children = _ref.children,
      content = _ref.content,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ['children', 'content', 'type']);

  return _react2.default.createElement(
    'span',
    _extends({ className: _styles2.default['c-badge-root'] }, props),
    children,
    _react2.default.createElement(
      'span',
      {
        className: (0, _classnames2.default)(_styles2.default['c-badge'], _defineProperty({}, _styles2.default['c-badge--' + type], type))
      },
      content
    )
  );
};

exports.Badge = Badge;
Badge.propTypes = {
  /** The content of the badge */
  content: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /** The type of the badge */
  type: _propTypes2.default.oneOf(['normal', 'new', 'error'])
};

Badge.defaultProps = {
  content: '',
  type: 'normal'
};

exports.default = Badge;

/***/ }),

/***/ "./node_modules/cozy-ui/react/Badge/styles.styl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"c-badge-root":"c-badge-root--O4MML","c-badge":"c-badge--1FRyV","c-badge--new":"c-badge--new--1d7gI","c-badge--normal":"c-badge--normal--2c8tj","c-badge--error":"c-badge--error--3gMRk"};

/***/ }),

/***/ "./node_modules/cozy-ui/react/ButtonAction/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__("./node_modules/cozy-ui/react/ButtonAction/styles.styl");

var _styles2 = _interopRequireDefault(_styles);

var _Icon = __webpack_require__("./node_modules/cozy-ui/react/Icon/index.jsx");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ButtonAction = function ButtonAction(props) {
  var _cx;

  var type = props.type,
      disabled = props.disabled,
      children = props.children,
      label = props.label,
      leftIcon = props.leftIcon,
      rightIcon = props.rightIcon,
      compact = props.compact,
      className = props.className,
      onClick = props.onClick,
      restProps = _objectWithoutProperties(props, ['type', 'disabled', 'children', 'label', 'leftIcon', 'rightIcon', 'compact', 'className', 'onClick']);

  return _react2.default.createElement(
    'button',
    _extends({
      disabled: disabled,
      type: 'button',
      role: 'button',
      className: (0, _classnames2.default)(_styles2.default['c-actionbtn'], (_cx = {}, _defineProperty(_cx, _styles2.default['c-actionbtn--' + type], type), _defineProperty(_cx, _styles2.default['c-actionbtn--compact'], compact), _cx), className),
      onClick: onClick,
      title: compact ? label : undefined
    }, restProps),
    _react2.default.createElement(
      'span',
      null,
      _Icon2.default.isProperIcon(leftIcon) ? _react2.default.createElement(_Icon2.default, { icon: leftIcon }) : leftIcon,
      label && _react2.default.createElement(
        'span',
        { 'data-action': 'label', className: _styles2.default['c-actionbtn-label'] },
        label
      ),
      rightIcon && _react2.default.createElement(
        'span',
        { 'data-action': 'icon', className: _styles2.default['c-actionbtn-icon'] },
        _Icon2.default.isProperIcon(rightIcon) ? _react2.default.createElement(_Icon2.default, { icon: rightIcon }) : rightIcon
      ),
      children
    )
  );
};

ButtonAction.propTypes = {
  type: _propTypes2.default.oneOf(['new', 'normal', 'error']).isRequired,
  label: _propTypes2.default.node,
  leftIcon: _propTypes2.default.node,
  rightIcon: _propTypes2.default.node,
  disabled: _propTypes2.default.bool,
  compact: _propTypes2.default.bool
};

ButtonAction.defaultProps = {
  type: 'normal',
  disabled: false,
  compact: false
};

exports.default = ButtonAction;

/***/ }),

/***/ "./node_modules/cozy-ui/react/ButtonAction/styles.styl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"c-actionbtn":"c-actionbtn---AUX_","spin":"spin--1ywvo","u-visuallyhidden":"u-visuallyhidden--3ZwwJ","u-hide":"u-hide--V7ZWj","c-actionbtn--compact":"c-actionbtn--compact--1RPEL","u-hide--mob":"u-hide--mob--2LQAW","u-hide--tablet":"u-hide--tablet--2-cQF","u-hide--desk":"u-hide--desk--cXT9b","u-error":"u-error--1_NSP","u-error--warning":"u-error--warning--3ZXt2","u-valid":"u-valid--3LJMm","u-warn":"u-warn--1aA1d","u-black":"u-black--3PLDe","u-white":"u-white--132H2","u-paleGrey":"u-paleGrey--cea31","u-silver":"u-silver--3NuRL","u-coolGrey":"u-coolGrey--1Egfn","u-slateGrey":"u-slateGrey--3W-Lq","u-charcoalGrey":"u-charcoalGrey--2uKLc","u-zircon":"u-zircon--WKp59","u-frenchPass":"u-frenchPass--1G_73","u-dodgerBlue":"u-dodgerBlue--2mS7J","u-scienceBlue":"u-scienceBlue--26SvS","u-puertoRico":"u-puertoRico--293cZ","u-emerald":"u-emerald--3UAh_","u-malachite":"u-malachite--9Jf89","u-texasRose":"u-texasRose--1AchS","u-chablis":"u-chablis--2XRos","u-yourPink":"u-yourPink--uvofX","u-pomegranate":"u-pomegranate--MK069","u-monza":"u-monza--3HgNE","u-portage":"u-portage--4oM1g","u-azure":"u-azure--3fR9A","u-melon":"u-melon--1OqSE","u-blazeOrange":"u-blazeOrange--37R2Y","u-mango":"u-mango--3A0fS","u-pumpkinOrange":"u-pumpkinOrange--lCLyz","u-darkPeriwinkle":"u-darkPeriwinkle--2_qiY","u-purpley":"u-purpley--3j2K3","u-lightishPurple":"u-lightishPurple--3Z-Ig","u-weirdGreen":"u-weirdGreen--lxyD4","u-ellipsis":"u-ellipsis--32pGc","c-actionbtn-label":"c-actionbtn-label--3F7kG","u-midellipsis":"u-midellipsis--390E3","c-actionbtn--normal":"c-actionbtn--normal--166nN","c-actionbtn--error":"c-actionbtn--error--Ds-9H","c-actionbtn--new":"c-actionbtn--new--2VGAi","c-actionbtn-icon":"c-actionbtn-icon--3GEQZ"};

/***/ }),

/***/ "./node_modules/cozy-ui/react/Checkbox/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__("./node_modules/cozy-ui/react/Checkbox/styles.styl");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Checkbox = function Checkbox(props) {
  var className = props.className,
      value = props.value,
      name = props.name,
      label = props.label,
      error = props.error,
      mixed = props.mixed,
      restProps = _objectWithoutProperties(props, ['className', 'value', 'name', 'label', 'error', 'mixed']);

  return _react2.default.createElement(
    'label',
    {
      className: (0, _classnames2.default)(_styles2.default['c-input-checkbox'], _defineProperty({}, _styles2.default['is-error'], error), className),
      'aria-checked': mixed ? 'mixed' : ''
    },
    _react2.default.createElement('input', _extends({ type: 'checkbox', value: value, name: name }, restProps)),
    _react2.default.createElement(
      'span',
      null,
      label
    )
  );
};

Checkbox.propTypes = {
  className: _propTypes2.default.string,
  value: _propTypes2.default.string,
  name: _propTypes2.default.string,
  error: _propTypes2.default.bool,
  mixed: _propTypes2.default.bool,
  label: _propTypes2.default.string
};

Checkbox.defaultProps = {
  className: '',
  value: '',
  name: '',
  error: false,
  mixed: false,
  label: ''
};

exports.default = Checkbox;

/***/ }),

/***/ "./node_modules/cozy-ui/react/Checkbox/styles.styl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"u-visuallyhidden":"u-visuallyhidden--3ZwwJ","u-hide":"u-hide--V7ZWj","u-hide--mob":"u-hide--mob--2LQAW","u-hide--tablet":"u-hide--tablet--2-cQF","u-hide--desk":"u-hide--desk--cXT9b","u-error":"u-error--1_NSP","u-error--warning":"u-error--warning--3ZXt2","u-valid":"u-valid--3LJMm","u-warn":"u-warn--1aA1d","u-black":"u-black--3PLDe","u-white":"u-white--132H2","u-paleGrey":"u-paleGrey--cea31","u-silver":"u-silver--3NuRL","u-coolGrey":"u-coolGrey--1Egfn","u-slateGrey":"u-slateGrey--3W-Lq","u-charcoalGrey":"u-charcoalGrey--2uKLc","u-zircon":"u-zircon--WKp59","u-frenchPass":"u-frenchPass--1G_73","u-dodgerBlue":"u-dodgerBlue--2mS7J","u-scienceBlue":"u-scienceBlue--26SvS","u-puertoRico":"u-puertoRico--293cZ","u-emerald":"u-emerald--3UAh_","u-malachite":"u-malachite--9Jf89","u-texasRose":"u-texasRose--1AchS","u-chablis":"u-chablis--2XRos","u-yourPink":"u-yourPink--uvofX","u-pomegranate":"u-pomegranate--MK069","u-monza":"u-monza--3HgNE","u-portage":"u-portage--4oM1g","u-azure":"u-azure--3fR9A","u-melon":"u-melon--1OqSE","u-blazeOrange":"u-blazeOrange--37R2Y","u-mango":"u-mango--3A0fS","u-pumpkinOrange":"u-pumpkinOrange--lCLyz","u-darkPeriwinkle":"u-darkPeriwinkle--2_qiY","u-purpley":"u-purpley--3j2K3","u-lightishPurple":"u-lightishPurple--3Z-Ig","u-weirdGreen":"u-weirdGreen--lxyD4","u-ellipsis":"u-ellipsis--32pGc","u-midellipsis":"u-midellipsis--390E3","c-input-checkbox":"c-input-checkbox--vVpxp","is-error":"is-error--3G058","spin":"spin--1ywvo"};

/***/ }),

/***/ "./node_modules/cozy-ui/react/Chip/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChipButton = exports.RoundChip = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__("./node_modules/cozy-ui/react/Chip/styles.styl");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chip = function (_React$PureComponent) {
  _inherits(Chip, _React$PureComponent);

  function Chip() {
    _classCallCheck(this, Chip);

    return _possibleConstructorReturn(this, (Chip.__proto__ || Object.getPrototypeOf(Chip)).apply(this, arguments));
  }

  _createClass(Chip, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          props = _objectWithoutProperties(_props, ['children', 'className']);

      return _react2.default.createElement(
        'div',
        _extends({
          className: (0, _classnames2.default)(_styles2.default['c-chip'], className, this.constructor.className)
        }, props),
        children
      );
    }
  }]);

  return Chip;
}(_react2.default.PureComponent);

var RoundChip = exports.RoundChip = function (_Chip) {
  _inherits(RoundChip, _Chip);

  function RoundChip() {
    _classCallCheck(this, RoundChip);

    return _possibleConstructorReturn(this, (RoundChip.__proto__ || Object.getPrototypeOf(RoundChip)).apply(this, arguments));
  }

  return RoundChip;
}(Chip);

RoundChip.className = _styles2.default['c-chip--round'];
exports.default = Chip;


var disabledChipButtonStyle = _styles2.default['c-chip-button--disabled'];

var ChipButton = exports.ChipButton = function (_React$PureComponent2) {
  _inherits(ChipButton, _React$PureComponent2);

  function ChipButton() {
    _classCallCheck(this, ChipButton);

    return _possibleConstructorReturn(this, (ChipButton.__proto__ || Object.getPrototypeOf(ChipButton)).apply(this, arguments));
  }

  _createClass(ChipButton, [{
    key: 'render',
    value: function render(_ref) {
      var children = _ref.children,
          className = _ref.className,
          disabled = _ref.disabled,
          props = _objectWithoutProperties(_ref, ['children', 'className', 'disabled']);

      return _react2.default.createElement(
        RoundChip,
        _extends({
          className: (0, _classnames2.default)(_styles2.default['c-chip-button'], className, _defineProperty({}, disabledChipButtonStyle, disabled))
        }, props),
        children
      );
    }
  }]);

  return ChipButton;
}(_react2.default.PureComponent);

Chip.Button = ChipButton;
Chip.Round = RoundChip;
Chip.Separator = function (_ref2) {
  var className = _ref2.className;
  return _react2.default.createElement('span', { className: (0, _classnames2.default)(_styles2.default['c-chip-separator'], className) });
};

/***/ }),

/***/ "./node_modules/cozy-ui/react/Chip/styles.styl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"c-chip":"c-chip--1cUpr","c-chip--round":"c-chip--round--2kyLb","c-chip-separator":"c-chip-separator--3bGld","c-chip-button":"c-chip-button--3nfL5","c-chip-button--disabled":"c-chip-button--disabled--1Hvo7"};

/***/ }),

/***/ "./node_modules/cozy-ui/react/Field/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__("./node_modules/cozy-ui/react/Field/styles.styl");

var _styles2 = _interopRequireDefault(_styles);

var _Label = __webpack_require__("./node_modules/cozy-ui/react/Label/index.jsx");

var _Label2 = _interopRequireDefault(_Label);

var _Input = __webpack_require__("./node_modules/cozy-ui/react/Input/index.jsx");

var _Input2 = _interopRequireDefault(_Input);

var _Textarea = __webpack_require__("./node_modules/cozy-ui/react/Textarea/index.jsx");

var _Textarea2 = _interopRequireDefault(_Textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Field = function Field(props) {
  var className = props.className,
      label = props.label,
      id = props.id,
      type = props.type,
      value = props.value,
      placeholder = props.placeholder,
      error = props.error;


  var inputType = function inputType(type) {
    switch (type) {
      case 'textarea':
        return _react2.default.createElement(_Textarea2.default, {
          id: id,
          placeholder: placeholder,
          value: value,
          error: error
        });
      case 'text':
      case 'password':
      case 'email':
      case 'url':
        return _react2.default.createElement(_Input2.default, {
          id: id,
          type: type,
          placeholder: placeholder,
          value: value,
          error: error
        });
      default:
        throw new Error('type must be text, password, email, url or textarea, got ' + type);
    }
  };

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(_styles2.default['o-field'], className) },
    _react2.default.createElement(
      _Label2.default,
      { forID: id },
      label
    ),
    inputType(type)
  );
};

Field.propTypes = {
  label: _propTypes2.default.string.isRequired,
  id: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(['text', 'password', 'email', 'url', 'textarea']),
  value: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  error: _propTypes2.default.bool
};

Field.defaultProps = {
  label: '',
  id: '',
  type: 'text',
  value: '',
  placeholder: '',
  error: false
};

exports.default = Field;

/***/ }),

/***/ "./node_modules/cozy-ui/react/Field/styles.styl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"u-visuallyhidden":"u-visuallyhidden--3ZwwJ","u-hide":"u-hide--V7ZWj","u-hide--mob":"u-hide--mob--2LQAW","u-hide--tablet":"u-hide--tablet--2-cQF","u-hide--desk":"u-hide--desk--cXT9b","u-error":"u-error--1_NSP","u-error--warning":"u-error--warning--3ZXt2","u-valid":"u-valid--3LJMm","u-warn":"u-warn--1aA1d","u-black":"u-black--3PLDe","u-white":"u-white--132H2","u-paleGrey":"u-paleGrey--cea31","u-silver":"u-silver--3NuRL","u-coolGrey":"u-coolGrey--1Egfn","u-slateGrey":"u-slateGrey--3W-Lq","u-charcoalGrey":"u-charcoalGrey--2uKLc","u-zircon":"u-zircon--WKp59","u-frenchPass":"u-frenchPass--1G_73","u-dodgerBlue":"u-dodgerBlue--2mS7J","u-scienceBlue":"u-scienceBlue--26SvS","u-puertoRico":"u-puertoRico--293cZ","u-emerald":"u-emerald--3UAh_","u-malachite":"u-malachite--9Jf89","u-texasRose":"u-texasRose--1AchS","u-chablis":"u-chablis--2XRos","u-yourPink":"u-yourPink--uvofX","u-pomegranate":"u-pomegranate--MK069","u-monza":"u-monza--3HgNE","u-portage":"u-portage--4oM1g","u-azure":"u-azure--3fR9A","u-melon":"u-melon--1OqSE","u-blazeOrange":"u-blazeOrange--37R2Y","u-mango":"u-mango--3A0fS","u-pumpkinOrange":"u-pumpkinOrange--lCLyz","u-darkPeriwinkle":"u-darkPeriwinkle--2_qiY","u-purpley":"u-purpley--3j2K3","u-lightishPurple":"u-lightishPurple--3Z-Ig","u-weirdGreen":"u-weirdGreen--lxyD4","u-ellipsis":"u-ellipsis--32pGc","u-midellipsis":"u-midellipsis--390E3","o-field":"o-field--24KHZ","spin":"spin--1ywvo"};

/***/ }),

/***/ "./node_modules/cozy-ui/react/IntentHeader/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntentHeader = undefined;

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__("./node_modules/cozy-ui/react/IntentHeader/styles.styl");

var _styles2 = _interopRequireDefault(_styles);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IntentHeader = exports.IntentHeader = function IntentHeader(_ref) {
  var appName = _ref.appName,
      appEditor = _ref.appEditor,
      appIcon = _ref.appIcon,
      className = _ref.className;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(_styles2.default['intentHeader'], className) },
    _react2.default.createElement(
      'h1',
      { className: _styles2.default['intentHeader-title'] },
      _react2.default.createElement('img', { className: _styles2.default['intentHeader-icon'], src: appIcon }),
      appEditor && _react2.default.createElement(
        'span',
        null,
        appEditor,
        '\xA0'
      ),
      appName
    )
  );
};

IntentHeader.propTypes = {
  appIcon: _propTypes2.default.string,
  appEditor: _propTypes2.default.string,
  appName: _propTypes2.default.string.isRequired
};

IntentHeader.defaultProps = {
  appIcon: '',
  appEditor: '',
  appName: ''
};

exports.default = IntentHeader;

/***/ }),

/***/ "./node_modules/cozy-ui/react/IntentHeader/styles.styl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"intentHeader":"intentHeader--1D-_G","intentHeader-title":"intentHeader-title--26M1u","intentHeader-icon":"intentHeader-icon--34ITn"};

/***/ }),

/***/ "./node_modules/cozy-ui/react/IntentIframe/IntentIframe.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_cozy_dot_client) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Spinner = __webpack_require__("./node_modules/cozy-ui/react/Spinner/index.jsx");

var _Spinner2 = _interopRequireDefault(_Spinner);

var _styles = __webpack_require__("./node_modules/cozy-ui/react/IntentIframe/styles.styl");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global cozy */


var DEFAULT_DATA = {
  // TODO remove `closeable` since it is only there for backward compatibility
  // https://mattermost.cozycloud.cc/test-team/pl/t1iagfhqp3n8mqf3nchp6bxsur
  closeable: false,
  exposeIntentFrameRemoval: true
};

var IntentIframe = function (_React$Component) {
  _inherits(IntentIframe, _React$Component);

  function IntentIframe() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, IntentIframe);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IntentIframe.__proto__ || Object.getPrototypeOf(IntentIframe)).call.apply(_ref, [this].concat(args))), _this), _this.state = { loading: false }, _this.onFrameLoaded = function () {
      _this.setState({ loading: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(IntentIframe, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          action = _props.action,
          data = _props.data,
          type = _props.type,
          onCancel = _props.onCancel,
          onError = _props.onError,
          onTerminate = _props.onTerminate;


      var create = this.props.create || __webpack_provided_cozy_dot_client.intents.create;

      this.setState({ loading: true });
      create(action, type, Object.assign({}, DEFAULT_DATA, data)).start(this.intentViewer, this.onFrameLoaded).then(function (result) {
        result ? onTerminate && onTerminate(result) : onCancel();
      }).catch(function (error) {
        ;onError && onError(error) || _this2.setState({ error: error, loading: false });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          error = _state.error,
          loading = _state.loading;

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(intentViewer) {
            return _this3.intentViewer = intentViewer;
          },
          className: _styles2.default.intentContainer,
          'aria-busy': loading
        },
        loading && _react2.default.createElement(_Spinner2.default, { size: 'xxlarge' }),
        error && _react2.default.createElement(
          'div',
          { className: _styles2.default.intentContainer__error },
          error.message
        )
      );
    }
  }]);

  return IntentIframe;
}(_react2.default.Component);

IntentIframe.propTypes = {
  action: _propTypes2.default.string.isRequired,
  create: _propTypes2.default.func,
  type: _propTypes2.default.string.isRequired,
  data: _propTypes2.default.object,
  onCancel: _propTypes2.default.func,
  onError: _propTypes2.default.func,
  onTerminate: _propTypes2.default.func.isRequired
};

IntentIframe.defaultProps = {
  data: {}
};

exports.default = IntentIframe;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/cozy-client-js/dist/cozy-client.js")))

/***/ }),

/***/ "./node_modules/cozy-ui/react/IntentIframe/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IntentIframe__ = __webpack_require__("./node_modules/cozy-ui/react/IntentIframe/IntentIframe.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IntentIframe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__IntentIframe__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__IntentIframe___default.a; });



/***/ }),

/***/ "./node_modules/cozy-ui/react/IntentIframe/styles.styl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"intentContainer":"intentContainer--2ZsXQ","intentPlaceHolder":"intentPlaceHolder--1dSAS","intentContainer__error":"intentContainer__error--ZsaBD"};

/***/ }),

/***/ "./node_modules/cozy-ui/react/IntentModal/IntentModal.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__("./node_modules/cozy-ui/react/IntentModal/styles.styl");

var _styles2 = _interopRequireDefault(_styles);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _once = __webpack_require__("./node_modules/lodash/once.js");

var _once2 = _interopRequireDefault(_once);

var _IntentIframe = __webpack_require__("./node_modules/cozy-ui/react/IntentIframe/index.js");

var _IntentIframe2 = _interopRequireDefault(_IntentIframe);

var _Modal = __webpack_require__("./node_modules/cozy-ui/react/Modal/index.jsx");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Render a modal for the specified intent.
 *
 * The modal for an intent takes the majority of the viewport.
 */
var IntentModal = function (_Component) {
  _inherits(IntentModal, _Component);

  function IntentModal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, IntentModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IntentModal.__proto__ || Object.getPrototypeOf(IntentModal)).call.apply(_ref, [this].concat(args))), _this), _this.dismiss = (0, _once2.default)(function () {
      var dismissAction = _this.props.dismissAction;

      dismissAction && dismissAction();
    }), _temp), _possibleConstructorReturn(_this, _ret);
  }
  // As dismissAction is passed twice to the modal, both for closing and for
  // intent cancellation, we need to ensure that it is only actually
  // called once.
  // FIXME: this should be fixed by diferenciating dismissAction (for closing
  // modal) and onCancel (for intent cancellation), but it implies deprecating
  // dismissAction first, ensure legacy, prevent regressions, etc.


  _createClass(IntentModal, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          action = _props.action,
          doctype = _props.doctype,
          options = _props.options,
          onComplete = _props.onComplete,
          onError = _props.onError,
          create = _props.create;

      var modalProps = Object.keys(_Modal2.default.propTypes).reduce(function (props, key) {
        return Object.assign({}, props, _defineProperty({}, key, _this2.props[key]));
      }, {});
      return _react2.default.createElement(
        _Modal2.default,
        _extends({}, modalProps, {
          key: 'modal',
          className: _styles2.default.intentModal,
          crossClassName: _styles2.default.intentModal__cross,
          dismissAction: this.dismiss,
          overflowHidden: true
        }),
        _react2.default.createElement(_IntentIframe2.default, {
          action: action,
          create: create,
          data: options,
          onCancel: this.dismiss,
          onError: onError,
          onTerminate: onComplete,
          type: doctype
        })
      );
    }
  }]);

  return IntentModal;
}(_react.Component);

IntentModal.propTypes = Object.assign({}, _Modal2.default.propTypes, {
  /** What should happen when the intent has completed */
  onComplete: _propTypes2.default.func.isRequired,
  /** What should happen if an intent error occurs */
  onError: _propTypes2.default.func,
  /** Action you want to execute */
  action: _propTypes2.default.string.isRequired,
  /** Doctype on which you want to execute the action */
  doctype: _propTypes2.default.string.isRequired
});

IntentModal.defaultProps = Object.assign({}, _Modal2.default.defaultProps);

exports.default = IntentModal;

/***/ }),

/***/ "./node_modules/cozy-ui/react/IntentModal/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IntentModal__ = __webpack_require__("./node_modules/cozy-ui/react/IntentModal/IntentModal.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IntentModal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__IntentModal__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__IntentModal___default.a; });



/***/ }),

/***/ "./node_modules/cozy-ui/react/IntentModal/styles.styl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"intentModal":"intentModal--25jqp","intentModal__cross":"intentModal__cross--1elWg"};

/***/ }),

/***/ "./node_modules/cozy-ui/react/IntentOpener/IntentOpener.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _IntentModal = __webpack_require__("./node_modules/cozy-ui/react/IntentModal/index.js");

var _IntentModal2 = _interopRequireDefault(_IntentModal);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Wrapper that adds an `onClick` handler to its children that opens a modal
 * for the specified intent.
 *
 * The modal for an intent takes the majority of the viewport.
 */
var IntentOpener = function (_React$Component) {
  _inherits(IntentOpener, _React$Component);

  function IntentOpener() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, IntentOpener);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IntentOpener.__proto__ || Object.getPrototypeOf(IntentOpener)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      modalOpened: false
    }, _this.openModal = function () {
      _this.setState({
        modalOpened: true
      });
    }, _this.closeModal = function () {
      _this.setState({
        modalOpened: false
      });
    }, _this.handleComplete = function (result) {
      _this.closeModal();
      if (_this.props.onComplete) {
        _this.props.onComplete(result);
      }
    }, _this.handleDismiss = function () {
      _this.closeModal();
      if (_this.props.onDismiss) {
        _this.props.onDismiss();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(IntentOpener, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          options = _props.options,
          action = _props.action,
          doctype = _props.doctype,
          children = _props.children,
          closable = _props.closable,
          create = _props.create,
          tag = _props.tag,
          into = _props.into,
          modalProps = _objectWithoutProperties(_props, ['options', 'action', 'doctype', 'children', 'closable', 'create', 'tag', 'into']);

      var modalOpened = this.state.modalOpened;


      var Tag = tag; // React needs uppercase element names

      var elements = [_react2.default.cloneElement(children, { key: 'opener', onClick: this.openModal })];

      if (modalOpened) {
        elements.push(_react2.default.createElement(_IntentModal2.default, _extends({
          key: 'intent-modal',
          closable: closable,
          overflowHidden: true,
          dismissAction: this.handleDismiss,
          action: action,
          doctype: doctype,
          options: options,
          onComplete: this.handleComplete,
          create: create,
          into: into
        }, modalProps)));
      }

      return _react2.default.createElement(
        Tag,
        null,
        elements
      );
    }
  }]);

  return IntentOpener;
}(_react2.default.Component);

IntentOpener.propTypes = {
  /** Element on which the onClick handler will be added */
  children: _propTypes2.default.element.isRequired,
  /** What should happen when the intent has completed */
  onComplete: _propTypes2.default.func.isRequired,
  /** What should happen when the modal is dimissed */
  onDismiss: _propTypes2.default.func.isRequired,
  /** Action you want to execute */
  action: _propTypes2.default.string.isRequired,
  /** Doctype on which you want to execute the action */
  doctype: _propTypes2.default.string.isRequired,
  /** Where the modal should be rendered in the DOM */
  into: _propTypes2.default.string
};

IntentOpener.defaultProps = {
  tag: 'span',
  closable: true
};

exports.default = IntentOpener;

/***/ }),

/***/ "./node_modules/cozy-ui/react/IntentOpener/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IntentOpener__ = __webpack_require__("./node_modules/cozy-ui/react/IntentOpener/IntentOpener.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IntentOpener___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__IntentOpener__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__IntentOpener___default.a; });



/***/ }),

/***/ "./node_modules/cozy-ui/react/Label/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__("./node_modules/cozy-ui/react/Label/styles.styl");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Label = function Label(props) {
  var htmlFor = props.htmlFor,
      className = props.className,
      children = props.children,
      error = props.error;

  return _react2.default.createElement(
    'label',
    {
      htmlFor: htmlFor,
      className: (0, _classnames2.default)(_styles2.default['c-label'], _defineProperty({}, _styles2.default['is-error'], error), className)
    },
    children
  );
};

Label.propTypes = {
  children: _propTypes2.default.node.isRequired,
  htmlFor: _propTypes2.default.string.isRequired,
  className: _propTypes2.default.string,
  error: _propTypes2.default.bool
};

Label.defaultProps = {
  className: '',
  error: false
};

exports.default = Label;

/***/ }),

/***/ "./node_modules/cozy-ui/react/Label/styles.styl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"u-visuallyhidden":"u-visuallyhidden--3ZwwJ","u-hide":"u-hide--V7ZWj","u-hide--mob":"u-hide--mob--2LQAW","u-hide--tablet":"u-hide--tablet--2-cQF","u-hide--desk":"u-hide--desk--cXT9b","u-error":"u-error--1_NSP","u-error--warning":"u-error--warning--3ZXt2","u-valid":"u-valid--3LJMm","u-warn":"u-warn--1aA1d","u-black":"u-black--3PLDe","u-white":"u-white--132H2","u-paleGrey":"u-paleGrey--cea31","u-silver":"u-silver--3NuRL","u-coolGrey":"u-coolGrey--1Egfn","u-slateGrey":"u-slateGrey--3W-Lq","u-charcoalGrey":"u-charcoalGrey--2uKLc","u-zircon":"u-zircon--WKp59","u-frenchPass":"u-frenchPass--1G_73","u-dodgerBlue":"u-dodgerBlue--2mS7J","u-scienceBlue":"u-scienceBlue--26SvS","u-puertoRico":"u-puertoRico--293cZ","u-emerald":"u-emerald--3UAh_","u-malachite":"u-malachite--9Jf89","u-texasRose":"u-texasRose--1AchS","u-chablis":"u-chablis--2XRos","u-yourPink":"u-yourPink--uvofX","u-pomegranate":"u-pomegranate--MK069","u-monza":"u-monza--3HgNE","u-portage":"u-portage--4oM1g","u-azure":"u-azure--3fR9A","u-melon":"u-melon--1OqSE","u-blazeOrange":"u-blazeOrange--37R2Y","u-mango":"u-mango--3A0fS","u-pumpkinOrange":"u-pumpkinOrange--lCLyz","u-darkPeriwinkle":"u-darkPeriwinkle--2_qiY","u-purpley":"u-purpley--3j2K3","u-lightishPurple":"u-lightishPurple--3Z-Ig","u-weirdGreen":"u-weirdGreen--lxyD4","u-ellipsis":"u-ellipsis--32pGc","u-midellipsis":"u-midellipsis--390E3","c-label":"c-label--i_p7K","is-error":"is-error--3G058","spin":"spin--1ywvo"};

/***/ }),

/***/ "./node_modules/cozy-ui/react/ListItemText/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Text = __webpack_require__("./node_modules/cozy-ui/react/Text/index.jsx");

var _styles = __webpack_require__("./node_modules/cozy-ui/react/ListItemText/styles.styl");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ListItemText = function ListItemText(props) {
  var primaryText = props.primaryText,
      secondaryText = props.secondaryText,
      className = props.className,
      ellipsis = props.ellipsis,
      children = props.children,
      rest = _objectWithoutProperties(props, ['primaryText', 'secondaryText', 'className', 'ellipsis', 'children']);

  return _react2.default.createElement(
    'div',
    _extends({ className: (0, _classnames2.default)(_styles2.default['c-list-text'], className) }, rest),
    primaryText && _react2.default.createElement(
      _Text.Text,
      { ellipsis: ellipsis },
      primaryText
    ),
    secondaryText && _react2.default.createElement(
      _Text.Caption,
      { ellipsis: ellipsis },
      secondaryText
    ),
    children
  );
};

ListItemText.propTypes = {
  children: _propTypes2.default.node,
  primaryText: _propTypes2.default.string,
  secondaryText: _propTypes2.default.string,
  className: _propTypes2.default.string,
  ellipsis: _propTypes2.default.bool
};

ListItemText.defaultProps = {
  ellipsis: true
};

exports.default = ListItemText;

/***/ }),

/***/ "./node_modules/cozy-ui/react/ListItemText/styles.styl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"c-list-text":"c-list-text--3TAiu","u-caption":"u-caption--3P1w0"};

/***/ }),

/***/ "./node_modules/cozy-ui/react/Media/Media.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bd = exports.Img = exports.Media = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__("./node_modules/cozy-ui/react/Media/styles.styl");

var _styles2 = _interopRequireDefault(_styles);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Useful to align image/icon and content.
 */
var Media = function Media(_ref) {
  var children = _ref.children,
      className = _ref.className,
      align = _ref.align,
      rest = _objectWithoutProperties(_ref, ['children', 'className', 'align']);

  return _react2.default.createElement(
    'div',
    _extends({
      className: (0, _classnames2.default)(_styles2.default.media, className, align ? _styles2.default['media--' + align] : null)
    }, rest),
    children
  );
};

exports.Media = Media;
var Img = function Img(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      style = _ref2.style,
      rest = _objectWithoutProperties(_ref2, ['children', 'className', 'style']);

  return _react2.default.createElement(
    'div',
    _extends({ className: (0, _classnames2.default)(_styles2.default.img, className), style: style }, rest),
    children
  );
};

exports.Img = Img;
var Bd = function Bd(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      style = _ref3.style,
      rest = _objectWithoutProperties(_ref3, ['children', 'className', 'style']);

  return _react2.default.createElement(
    'div',
    _extends({ className: (0, _classnames2.default)(_styles2.default.bd, className), style: style }, rest),
    children
  );
};
exports.Bd = Bd;

/***/ }),

/***/ "./node_modules/cozy-ui/react/Media/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Media__ = __webpack_require__("./node_modules/cozy-ui/react/Media/Media.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Media___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Media__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__Media__, "Media")) __webpack_require__.d(__webpack_exports__, "Media", function() { return __WEBPACK_IMPORTED_MODULE_0__Media__["Media"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__Media__, "Bd")) __webpack_require__.d(__webpack_exports__, "Bd", function() { return __WEBPACK_IMPORTED_MODULE_0__Media__["Bd"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__Media__, "Img")) __webpack_require__.d(__webpack_exports__, "Img", function() { return __WEBPACK_IMPORTED_MODULE_0__Media__["Img"]; });



/***/ }),

/***/ "./node_modules/cozy-ui/react/Media/styles.styl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"media":"media--1C7OY","media--top":"media--top--L2M8O","media--bottom":"media--bottom--37pIk","bd":"bd--1uyco","img":"img--26SNb"};

/***/ }),

/***/ "./node_modules/cozy-ui/react/Menu/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItem = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__("./node_modules/cozy-ui/react/Menu/styles.styl");

var _styles2 = _interopRequireDefault(_styles);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Media = __webpack_require__("./node_modules/cozy-ui/react/Media/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuItem = function (_Component) {
  _inherits(MenuItem, _Component);

  function MenuItem() {
    _classCallCheck(this, MenuItem);

    return _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).apply(this, arguments));
  }

  _createClass(MenuItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          className = _props.className,
          children = _props.children,
          icon = _props.icon,
          props = _objectWithoutProperties(_props, ['disabled', 'className', 'children', 'icon']);

      return _react2.default.createElement(
        'div',
        _extends({}, props, {
          className: (0, _classnames2.default)(_styles2.default['c-menu__item'], _defineProperty({}, _styles2.default['c-menu__item--disabled'], disabled), className)
        }),
        !icon ? children : _react2.default.createElement(
          _Media.Media,
          null,
          _react2.default.createElement(
            _Media.Img,
            { className: _styles2.default['c-menu__item-icon'] },
            icon
          ),
          _react2.default.createElement(
            _Media.Bd,
            null,
            children
          )
        )
      );
    }
  }]);

  return MenuItem;
}(_react.Component);

var Menu = function (_Component2) {
  _inherits(Menu, _Component2);

  function Menu() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = { opened: false }, _this2.toggle = function () {
      return _this2.state.opened ? _this2.close() : _this2.open();
    }, _this2.handleClickOutside = function (e) {
      if (!_this2.container.contains(e.target)) {
        e.stopPropagation();
        _this2.close();
      }
    }, _this2.handleClick = function (item) {
      var isDisabled = item.props.disabled;
      var itemHandler = isDisabled ? null : item.props.onSelect;
      var handler = itemHandler || _this2.props[!isDisabled ? 'onSelect' : 'onSelectDisabled'];
      if (handler) {
        var res = handler(item.props.data);
        if (res !== false) {
          _this2.close();
        }
      } else if (!isDisabled) {
        _this2.close();
      }
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Menu, [{
    key: 'open',
    value: function open() {
      this.setState({ opened: true });
      document.addEventListener('click', this.handleClickOutside, true);
    }
  }, {
    key: 'close',
    value: function close() {
      this.setState({ opened: false });
      document.removeEventListener('click', this.handleClickOutside, true);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleClickOutside, true);
    }
  }, {
    key: 'renderItems',
    value: function renderItems() {
      var _this3 = this;

      return _react2.default.Children.map(this.props.children, function (item) {
        if (!item) return item;
        // ideally here, we should rely on React's type property and verify that
        // type === Item, but for some reason, preact vnodes don't have this property
        if (item.nodeName !== 'hr') {
          return _react2.default.cloneElement(item, {
            onClick: _this3.handleClick.bind(_this3, item)
          });
        }
        return item;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _cx2,
          _this4 = this;

      var _props2 = this.props,
          text = _props2.text,
          disabled = _props2.disabled,
          className = _props2.className,
          buttonClassName = _props2.buttonClassName,
          position = _props2.position,
          component = _props2.component;
      var opened = this.state.opened;

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(_styles2.default['c-menu'], className, (_cx2 = {}, _defineProperty(_cx2, _styles2.default['c-menu--left'], position === 'left'), _defineProperty(_cx2, _styles2.default['c-menu--right'], position === 'right'), _cx2)),
          ref: function ref(_ref2) {
            _this4.container = _ref2;
          }
        },
        !component ? _react2.default.createElement(
          'button',
          {
            role: 'button',
            className: (0, _classnames2.default)('c-btn', _styles2.default['c-menu__btn'], buttonClassName),
            disabled: disabled,
            onClick: this.toggle
          },
          text
        ) : _react2.default.cloneElement(component, { disabled: disabled, onClick: this.toggle }),
        opened ? _react2.default.createElement(
          'div',
          {
            className: (0, _classnames2.default)(_styles2.default['c-menu__inner'], _defineProperty({}, _styles2.default['c-menu__inner--opened'], opened))
          },
          this.renderItems()
        ) : null
      );
    }
  }]);

  return Menu;
}(_react.Component);

Menu.defaultProps = {
  position: 'left',
  disabled: false,
  component: null,
  onSelect: null,
  onSelectDisabled: null
};

Menu.propTypes = {
  /** Use position='right' to display the menu to the right */
  position: _propTypes2.default.string,
  /** Disables the menu */
  disabled: _propTypes2.default.bool,
  /** Specifies a custom component for the opener */
  component: _propTypes2.default.element,
  /** `onClick` handler for non disabled items */
  onSelect: _propTypes2.default.func,
  /** `onClick` handler for disabled items */
  onSelectDisabled: _propTypes2.default.func
};

Menu.MenuItem = MenuItem;
exports.default = Menu;
exports.MenuItem = MenuItem;

/***/ }),

/***/ "./node_modules/cozy-ui/react/Menu/styles.styl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"c-menu__inner":"c-menu__inner--19ccB","c-menu":"c-menu--1mYNa","c-menu--left":"c-menu--left--3EsHB","c-menu--right":"c-menu--right--2Amud","c-menu__inner--opened":"c-menu__inner--opened--3w6t_","c-menu__btn":"c-menu__btn--2Jp-E","c-menu__item":"c-menu__item--2Ijiw","c-menu__item-icon":"c-menu__item-icon--VIzEf","c-menu__item--disabled":"c-menu__item--disabled--1dSqI"};

/***/ }),

/***/ "./node_modules/cozy-ui/react/MidEllipsis/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MidEllipsis = function MidEllipsis(props) {
  var text = props.text,
      className = props.className;

  var partLength = Math.round(text.length / 2);
  var firstPart = text.substr(0, partLength);
  var lastPart = text.substr(partLength, text.length);

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('u-midellipsis', className) },
    _react2.default.createElement(
      'span',
      null,
      firstPart
    ),
    _react2.default.createElement(
      'span',
      null,
      lastPart
    )
  );
};

MidEllipsis.propTypes = {
  text: _propTypes2.default.string.isRequired,
  className: _propTypes2.default.string
};

exports.default = MidEllipsis;

/***/ }),

/***/ "./node_modules/cozy-ui/react/Nav/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavIcon = exports.genNavLink = exports.NavLink = exports.NavText = exports.NavItem = undefined;

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _Icon = __webpack_require__("./node_modules/cozy-ui/react/Icon/index.jsx");

var _Icon2 = _interopRequireDefault(_Icon);

var _styles = __webpack_require__("./node_modules/cozy-ui/react/Nav/styles.styl");

var _styles2 = _interopRequireDefault(_styles);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavItem = exports.NavItem = function NavItem(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'li',
    { className: _styles2.default['c-nav-item'] },
    children
  );
};

var NavText = exports.NavText = function NavText(_ref2) {
  var children = _ref2.children;
  return _react2.default.createElement(
    'span',
    { className: _styles2.default['c-nav-text'] },
    children
  );
};

var NavLink = exports.NavLink = {
  className: _styles2.default['c-nav-link'],
  activeClassName: _styles2.default['is-active']
};

var genNavLink = exports.genNavLink = function genNavLink(RRNavLink) {
  return function (_ref3) {
    var to = _ref3.to,
        children = _ref3.children;
    return _react2.default.createElement(
      RRNavLink,
      {
        to: to,
        className: NavLink.className,
        activeClassName: NavLink.activeClassName
      },
      children
    );
  };
};

var NavIcon = exports.NavIcon = function NavIcon(_ref4) {
  var icon = _ref4.icon;
  return _react2.default.createElement(
    'span',
    { className: (0, _classnames2.default)(_styles2.default['c-nav-icon']) },
    _react2.default.createElement(_Icon2.default, { icon: icon })
  );
};

var Nav = function Nav(_ref5) {
  var children = _ref5.children;

  return _react2.default.createElement(
    'nav',
    null,
    _react2.default.createElement(
      'ul',
      { className: _styles2.default['c-nav'] },
      children
    )
  );
};

exports.default = Nav;

Nav.NavItem = NavItem;

/***/ }),

/***/ "./node_modules/cozy-ui/react/Nav/styles.styl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"c-nav":"c-nav--2iqla","c-nav-item":"c-nav-item--3HJO0","c-nav-icon":"c-nav-icon--23pW7","is-active":"is-active--1jrB6","c-nav-text":"c-nav-text--2NxKh","c-nav-link":"c-nav-link--3aZyS","active":"active--3CjnL"};

/***/ }),

/***/ "./node_modules/cozy-ui/react/Panel/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Side = exports.Main = exports.Group = undefined;

var _utils = __webpack_require__("./node_modules/cozy-ui/react/utils.jsx");

var _styles = __webpack_require__("./node_modules/cozy-ui/react/Panel/styles.styl");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Group = exports.Group = (0, _utils.mkComponent)('div', { className: _styles2.default['Panel-group'] });
var Main = exports.Main = (0, _utils.mkComponent)('div', { className: _styles2.default['Panel-main'] });
var Side = exports.Side = (0, _utils.mkComponent)('aside', { className: _styles2.default['Panel-side'] });

exports.default = {
  Group: Group,
  Main: Main,
  Side: Side
};

/***/ }),

/***/ "./node_modules/cozy-ui/react/Panel/styles.styl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"u-p-0":"u-p-0--2JHuM","u-pt-0":"u-pt-0--355aN","u-pb-0":"u-pb-0--1WODJ","u-pl-0":"u-pl-0--3y3r5","u-pr-0":"u-pr-0--1nOZU","u-pv-0":"u-pv-0--1E2Ay","u-ph-0":"u-ph-0--1lM22","u-p-1":"u-p-1--3IhoV","u-pt-1":"u-pt-1--30xgO","u-pb-1":"u-pb-1--3psP0","u-pl-1":"u-pl-1--21JgL","u-pr-1":"u-pr-1--bF1EH","u-pv-1":"u-pv-1--UPdZ9","u-ph-1":"u-ph-1--9uLtn","u-p-2":"u-p-2--2x7gI","u-pt-2":"u-pt-2--2QY38","u-pb-2":"u-pb-2--_SvsV","u-pl-2":"u-pl-2--PdEcG","u-pr-2":"u-pr-2--1Gm6s","u-pv-2":"u-pv-2--2Vvb1","u-ph-2":"u-ph-2--kGGxk","u-p-3":"u-p-3--39qCX","u-pt-3":"u-pt-3--1-KSX","u-pb-3":"u-pb-3--1Pvj8","u-pl-3":"u-pl-3--kWfDE","u-pr-3":"u-pr-3--1aun4","u-pv-3":"u-pv-3--3SdJh","u-ph-3":"u-ph-3--2PTGi","u-p-half":"u-p-half--1y4-6","u-pt-half":"u-pt-half--1yWgR","u-pb-half":"u-pb-half--qw6qM","u-pl-half":"u-pl-half--2yijB","u-pr-half":"u-pr-half---H5bM","u-pv-half":"u-pv-half--1zkqT","u-ph-half":"u-ph-half--2n-pz","u-p-1-half":"u-p-1-half--3Yr0z","u-pt-1-half":"u-pt-1-half--3gy0j","u-pb-1-half":"u-pb-1-half--1GiPN","u-pl-1-half":"u-pl-1-half--1Wnrr","u-pr-1-half":"u-pr-1-half--1mV49","u-pv-1-half":"u-pv-1-half--19poe","u-ph-1-half":"u-ph-1-half--_4L-g","u-p-2-half":"u-p-2-half--dzRiE","u-pt-2-half":"u-pt-2-half--1Yco7","u-pb-2-half":"u-pb-2-half--20Mez","u-pl-2-half":"u-pl-2-half--3Laiw","u-pr-2-half":"u-pr-2-half--2AMiJ","u-pv-2-half":"u-pv-2-half--107dv","u-ph-2-half":"u-ph-2-half--1zBp5","u-m-0":"u-m-0--2MTAy","u-mt-0":"u-mt-0--3mfzp","u-mb-0":"u-mb-0--3eocp","u-ml-0":"u-ml-0--21aue","u-mr-0":"u-mr-0--3rhZM","u-mv-0":"u-mv-0--3maTu","u-mh-0":"u-mh-0--Pp2E7","u-m-1":"u-m-1--2NWnj","u-mt-1":"u-mt-1--xYaJC","u-mb-1":"u-mb-1--2Wej0","u-ml-1":"u-ml-1--2EJ-p","u-mr-1":"u-mr-1--MfsC-","u-mv-1":"u-mv-1--LIBRP","u-mh-1":"u-mh-1--nyGBM","u-m-2":"u-m-2--1NQK9","u-mt-2":"u-mt-2--jf0Af","u-mb-2":"u-mb-2--10wnq","u-ml-2":"u-ml-2--zBtIe","u-mr-2":"u-mr-2--djVMY","u-mv-2":"u-mv-2--1l2sL","u-mh-2":"u-mh-2--3cAn1","u-m-3":"u-m-3--2Pug_","u-mt-3":"u-mt-3--28H6X","u-mb-3":"u-mb-3--294c0","u-ml-3":"u-ml-3--3IvyA","u-mr-3":"u-mr-3--3aD0M","u-mv-3":"u-mv-3--32hwm","u-mh-3":"u-mh-3--3RYva","u-m-half":"u-m-half--VpDCt","u-mt-half":"u-mt-half--2kQTb","u-mb-half":"u-mb-half--12uLL","u-ml-half":"u-ml-half--1q6UR","u-mr-half":"u-mr-half--2ZjVL","u-mv-half":"u-mv-half--1DtAs","u-mh-half":"u-mh-half--UosyW","u-m-1-half":"u-m-1-half--3RQXJ","u-mt-1-half":"u-mt-1-half--f6oK5","u-mb-1-half":"u-mb-1-half--1IoLd","u-ml-1-half":"u-ml-1-half--2nmDF","u-mr-1-half":"u-mr-1-half--27bxA","u-mv-1-half":"u-mv-1-half--3DlhS","u-mh-1-half":"u-mh-1-half--20S2b","u-m-2-half":"u-m-2-half--2D3fm","u-mt-2-half":"u-mt-2-half--1yOlX","u-mb-2-half":"u-mb-2-half--1OzQ7","u-ml-2-half":"u-ml-2-half--1C89P","u-mr-2-half":"u-mr-2-half--3AA22","u-mv-2-half":"u-mv-2-half--3WQ3n","u-mh-2-half":"u-mh-2-half--3prt-","Panel-group":"Panel-group--opN-t","Panel-main":"Panel-main--qCoGt","Panel-side":"Panel-side--rOhDm"};

/***/ }),

/***/ "./node_modules/cozy-ui/react/Radio/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__("./node_modules/cozy-ui/react/Radio/styles.styl");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Radio = function Radio(props) {
  var className = props.className,
      value = props.value,
      name = props.name,
      label = props.label,
      error = props.error,
      restProps = _objectWithoutProperties(props, ['className', 'value', 'name', 'label', 'error']);

  return _react2.default.createElement(
    'label',
    {
      className: (0, _classnames2.default)(_styles2.default['c-input-radio'], _defineProperty({}, _styles2.default['is-error'], error), className)
    },
    _react2.default.createElement('input', _extends({ type: 'radio', value: value, name: name }, restProps)),
    _react2.default.createElement(
      'span',
      null,
      label
    )
  );
};

Radio.propTypes = {
  className: _propTypes2.default.string,
  value: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  error: _propTypes2.default.bool,
  label: _propTypes2.default.string.isRequired
};

Radio.defaultProps = {
  error: false
};

exports.default = Radio;

/***/ }),

/***/ "./node_modules/cozy-ui/react/Radio/styles.styl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"u-visuallyhidden":"u-visuallyhidden--3ZwwJ","u-hide":"u-hide--V7ZWj","u-hide--mob":"u-hide--mob--2LQAW","u-hide--tablet":"u-hide--tablet--2-cQF","u-hide--desk":"u-hide--desk--cXT9b","u-error":"u-error--1_NSP","u-error--warning":"u-error--warning--3ZXt2","u-valid":"u-valid--3LJMm","u-warn":"u-warn--1aA1d","u-black":"u-black--3PLDe","u-white":"u-white--132H2","u-paleGrey":"u-paleGrey--cea31","u-silver":"u-silver--3NuRL","u-coolGrey":"u-coolGrey--1Egfn","u-slateGrey":"u-slateGrey--3W-Lq","u-charcoalGrey":"u-charcoalGrey--2uKLc","u-zircon":"u-zircon--WKp59","u-frenchPass":"u-frenchPass--1G_73","u-dodgerBlue":"u-dodgerBlue--2mS7J","u-scienceBlue":"u-scienceBlue--26SvS","u-puertoRico":"u-puertoRico--293cZ","u-emerald":"u-emerald--3UAh_","u-malachite":"u-malachite--9Jf89","u-texasRose":"u-texasRose--1AchS","u-chablis":"u-chablis--2XRos","u-yourPink":"u-yourPink--uvofX","u-pomegranate":"u-pomegranate--MK069","u-monza":"u-monza--3HgNE","u-portage":"u-portage--4oM1g","u-azure":"u-azure--3fR9A","u-melon":"u-melon--1OqSE","u-blazeOrange":"u-blazeOrange--37R2Y","u-mango":"u-mango--3A0fS","u-pumpkinOrange":"u-pumpkinOrange--lCLyz","u-darkPeriwinkle":"u-darkPeriwinkle--2_qiY","u-purpley":"u-purpley--3j2K3","u-lightishPurple":"u-lightishPurple--3Z-Ig","u-weirdGreen":"u-weirdGreen--lxyD4","u-ellipsis":"u-ellipsis--32pGc","u-midellipsis":"u-midellipsis--390E3","c-input-radio":"c-input-radio--1G9PF","is-error":"is-error--3G058","spin":"spin--1ywvo"};

/***/ }),

/***/ "./node_modules/cozy-ui/react/SelectBox/SelectBox.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.components = exports.reactSelectControl = exports.CheckboxOption = exports.Option = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactSelect = __webpack_require__("./node_modules/react-select/dist/react-select.es.js");

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _styles = __webpack_require__("./node_modules/cozy-ui/react/SelectBox/styles.styl");

var _styles2 = _interopRequireDefault(_styles);

var _Icon = __webpack_require__("./node_modules/cozy-ui/react/Icon/index.jsx");

var _Icon2 = _interopRequireDefault(_Icon);

var _palette = __webpack_require__("./node_modules/cozy-ui/stylus/settings/palette.json");

var _palette2 = _interopRequireDefault(_palette);

var _withBreakpoints = __webpack_require__("./node_modules/cozy-ui/react/helpers/withBreakpoints.jsx");

var _withBreakpoints2 = _interopRequireDefault(_withBreakpoints);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var customStyles = {
  container: function container(base) {
    return Object.assign({}, base, {
      maxWidth: '30rem'
    });
  },
  control: function control(base, state) {
    return Object.assign({}, base, {
      backgroundColor: 'white',
      border: state.isFocused ? '.0625rem solid ' + _palette2.default['dodgerBlue'] : '.0625rem solid ' + _palette2.default['silver'],
      ':hover': {
        borderColor: _palette2.default['coolGrey']
      },
      borderRadius: '.1875rem',
      boxShadow: 'unset',
      padding: '.503rem .5rem'
    });
  },
  dropdownIndicator: function dropdownIndicator(base, state) {
    return Object.assign({}, base, {
      backgroundImage: state.menuIsOpen ? 'url("../../assets/icons/ui/icon-top-select.svg")' : 'url("../../assets/icons/ui/icon-bottom-select.svg")',
      backgroundSize: '.875rem',
      height: '.875rem',
      marginRight: '.75rem',
      padding: 0,
      width: '.875rem'
    });
  },
  indicatorSeparator: function indicatorSeparator() {
    return {
      display: 'none'
    };
  },
  valueContainer: function valueContainer(base) {
    return Object.assign({}, base, {
      color: 'black'
    });
  },
  menu: function menu(base) {
    return Object.assign({}, base, {
      zIndex: 10
    });
  }
};

var reactSelectControl = function reactSelectControl(CustomControl) {
  return function (_ref) {
    var innerProps = _ref.innerProps,
        children = _ref.children;
    return _react2.default.createElement(
      'div',
      innerProps,
      CustomControl,
      _react2.default.createElement(
        'div',
        { className: _styles2.default['select-control__input'] },
        children
      )
    );
  };
};

var Option = function Option(_ref2) {
  var _classNames;

  var children = _ref2.children,
      isSelected = _ref2.isSelected,
      isFocused = _ref2.isFocused,
      isDisabled = _ref2.isDisabled,
      innerProps = _ref2.innerProps,
      withCheckbox = _ref2.withCheckbox;
  return _react2.default.createElement(
    'div',
    _extends({}, innerProps, {
      className: (0, _classnames2.default)(_styles2.default['select-option'], (_classNames = {}, _defineProperty(_classNames, _styles2.default['select-option--selected'], isSelected && !withCheckbox), _defineProperty(_classNames, _styles2.default['select-option--focused'], isFocused), _defineProperty(_classNames, _styles2.default['select-option--disabled'], isDisabled), _classNames))
    }),
    withCheckbox && _react2.default.createElement('input', {
      type: 'checkbox',
      checked: isSelected,
      className: _styles2.default['select-option__checkbox']
    }),
    children,
    isSelected && !withCheckbox && _react2.default.createElement(_Icon2.default, {
      icon: 'check-circleless',
      color: _palette2.default['dodgerBlue'],
      className: _styles2.default['select-option--checkmark']
    })
  );
};

Option.propTypes = {
  withCheckbox: _propTypes2.default.bool
};

Option.defaultProps = {
  withCheckbox: false
};

var CheckboxOption = function CheckboxOption(_ref3) {
  var props = _objectWithoutProperties(_ref3, []);

  return _react2.default.createElement(Option, _extends({}, props, { withCheckbox: true }));
};

CheckboxOption.propTypes = {};

var SelectBox = function (_Component) {
  _inherits(SelectBox, _Component);

  function SelectBox() {
    var _ref4;

    var _temp, _this, _ret;

    _classCallCheck(this, SelectBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref4 = SelectBox.__proto__ || Object.getPrototypeOf(SelectBox)).call.apply(_ref4, [this].concat(args))), _this), _this.state = { isOpen: false }, _this.handleOpen = function () {
      _this.setState({ isOpen: true });
    }, _this.handleClose = function () {
      _this.setState({ isOpen: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SelectBox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          components = _props.components,
          reactSelectStyles = _props.styles,
          isMobile = _props.breakpoints.isMobile,
          classNamePrefix = _props.classNamePrefix,
          props = _objectWithoutProperties(_props, ['className', 'components', 'styles', 'breakpoints', 'classNamePrefix']);

      var showOverlay = this.state.isOpen && isMobile;
      return _react2.default.createElement(_reactSelect2.default, _extends({
        components: Object.assign({ Option: Option }, components),
        styles: Object.assign({}, customStyles, reactSelectStyles),
        onMenuOpen: this.handleOpen,
        onMenuClose: this.handleClose
      }, props, {
        className: (0, _classnames2.default)(className, showOverlay ? _styles2.default['select__overlay'] : null)
        // react-select temporarily adds className to its innerComponents
        // but this behavior will soon be removed. For the moment, we
        // cancel it by setting it to empty string
        , classNamePrefix: classNamePrefix || ''
      }));
    }
  }]);

  return SelectBox;
}(_react.Component);

SelectBox.propTypes = {
  components: _propTypes2.default.object,
  styles: _propTypes2.default.object
};

SelectBox.defaultProps = {
  components: {},
  styles: {}
};

var components = _reactSelect2.default.components;

exports.default = (0, _withBreakpoints2.default)()(SelectBox);
exports.Option = Option;
exports.CheckboxOption = CheckboxOption;
exports.reactSelectControl = reactSelectControl;
exports.components = components;

/***/ }),

/***/ "./node_modules/cozy-ui/react/SelectBox/SelectBoxWithFixedOptions.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactSelect = __webpack_require__("./node_modules/react-select/dist/react-select.es.js");

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _groupBy2 = __webpack_require__("./node_modules/lodash/groupBy.js");

var _groupBy3 = _interopRequireDefault(_groupBy2);

var _SelectBox = __webpack_require__("./node_modules/cozy-ui/react/SelectBox/SelectBox.jsx");

var _SelectBox2 = _interopRequireDefault(_SelectBox);

var _palette = __webpack_require__("./node_modules/cozy-ui/stylus/settings/palette.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var optionPadding = 0.25;

var fixedOptionsStyle = {
  borderBottomLeftRadius: '4px',
  borderBottomRightRadius: '4px',
  paddingTop: optionPadding + 'rem',
  paddingBottom: optionPadding + 'rem',
  borderTop: '1px solid ' + _palette.silver,
  background: 'white',
  position: 'relative'
};

var FixedOptions = function FixedOptions(props) {
  return _react2.default.createElement(
    'div',
    { style: fixedOptionsStyle },
    props.children
  );
};

/*
  This is the hacky part, where fixed options vnodes are manually spliced
  from the options vnodes. Fixed options vnodes are returned along with
  the menuUi where fixed vnodes have been removed.

  We rely on react-select internal structure `menu > scroll captor > menu list > options`.
  This code should be updated if react-select's internal structure changes.

  https://github.com/cozy/cozy-ui/pull/501
*/
var extractFixed = function extractFixed(children) {
  var newChildren = _react2.default.cloneElement(children);
  var menuList = newChildren.children ? newChildren.children[0] : null;
  if (!menuList) {
    return { fixed: [], newChildren: newChildren };
  }
  var options = menuList.children;

  var _groupBy = (0, _groupBy3.default)(options, function (vnode) {
    return vnode.attributes.data.fixed === true ? 'fixed' : 'normal';
  }),
      fixed = _groupBy.fixed,
      normal = _groupBy.normal;

  newChildren.children[0].children = normal;
  return { fixed: fixed, newChildren: newChildren };
};

var MenuWithFixedOptions = function MenuWithFixedOptions(props) {
  var children = props.children;

  var _extractFixed = extractFixed(children),
      fixed = _extractFixed.fixed,
      menuUi = _extractFixed.newChildren;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactSelect.components.Menu,
      props,
      menuUi,
      _react2.default.createElement(
        FixedOptions,
        null,
        fixed
      )
    )
  );
};

var fixedMenuStyle = {
  zIndex: 10,
  overflow: 'hidden',
  // the space at the end is important otherwise the property gets autoprefixed (by what, I
  // don't know) and is no longer understood by the browser
  display: 'flex ',
  flexDirection: 'column'
};

var SelectBoxWithFixedOptions = function SelectBoxWithFixedOptions(props) {
  return _react2.default.createElement(_SelectBox2.default, _extends({}, props, {
    styles: Object.assign({
      menu: function menu(base) {
        return Object.assign({}, base, fixedMenuStyle);
      }
    }, props.styles || {}),
    components: Object.assign({
      Menu: MenuWithFixedOptions
    }, props.components || {})
  }));
};

exports.default = SelectBoxWithFixedOptions;

/***/ }),

/***/ "./node_modules/cozy-ui/react/SelectBox/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactSelect = __webpack_require__("./node_modules/react-select/dist/react-select.es.js");

Object.keys(_reactSelect).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _reactSelect[key];
    }
  });
});

var _SelectBox = __webpack_require__("./node_modules/cozy-ui/react/SelectBox/SelectBox.jsx");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SelectBox).default;
  }
});
Object.defineProperty(exports, 'Option', {
  enumerable: true,
  get: function get() {
    return _SelectBox.Option;
  }
});
Object.defineProperty(exports, 'CheckboxOption', {
  enumerable: true,
  get: function get() {
    return _SelectBox.CheckboxOption;
  }
});
Object.defineProperty(exports, 'reactSelectControl', {
  enumerable: true,
  get: function get() {
    return _SelectBox.reactSelectControl;
  }
});

var _SelectBoxWithFixedOptions = __webpack_require__("./node_modules/cozy-ui/react/SelectBox/SelectBoxWithFixedOptions.jsx");

Object.defineProperty(exports, 'SelectBoxWithFixedOptions', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SelectBoxWithFixedOptions).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/cozy-ui/react/SelectBox/styles.styl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"select-control__input":"select-control__input--3fXzP","select-option":"select-option--1TD9j","select-option--disabled":"select-option--disabled--jBAvK","select-option--focused":"select-option--focused--2HKhT","select-option--selected":"select-option--selected--2TZCi","select-option__checkbox":"select-option__checkbox--32K64","select-option--checkmark":"select-option--checkmark--2Q3Qk","select__overlay":"select__overlay--aGbBZ"};

/***/ }),

/***/ "./node_modules/cozy-ui/react/SelectionBar/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _I18n = __webpack_require__("./node_modules/cozy-ui/react/I18n/index.jsx");

var _index = __webpack_require__("./node_modules/cozy-ui/react/index.js");

var _styles = __webpack_require__("./node_modules/cozy-ui/react/SelectionBar/styles.styl");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*

If you want use SelectionBar component, you must have `actions` parameter, like :

actions = {
  trash: {
    action: selections => dispatch(trashFiles(selections)))
  },
  rename: {
    action: selections => dispatch(startRenamingAsync(selected[0])),
    displayCondition: selections => selections.length === 1
  }
}

*/

var SelectionBar = function SelectionBar(_ref) {
  var t = _ref.t,
      actions = _ref.actions,
      selected = _ref.selected,
      hideSelectionBar = _ref.hideSelectionBar;

  var selectedCount = selected.length;
  var actionNames = Object.keys(actions).filter(function (actionName) {
    var action = actions[actionName];
    return action.displayCondition === undefined || action.displayCondition(selected);
  });
  return _react2.default.createElement(
    'div',
    { className: _styles2.default['coz-selectionbar'], role: 'toolbar' },
    _react2.default.createElement(
      'span',
      { className: _styles2.default['coz-selectionbar-count'] },
      selectedCount,
      _react2.default.createElement(
        'span',
        null,
        ' ',
        t('SelectionBar.selected_count', { smart_count: selectedCount })
      )
    ),
    _react2.default.createElement('span', { className: _styles2.default['coz-selectionbar-separator'] }),
    actionNames.map(function (actionName, index) {
      return _react2.default.createElement(
        'button',
        {
          key: index,
          disabled: selectedCount < 1,
          onClick: function onClick() {
            return actions[actionName].action(selected);
          }
        },
        _react2.default.createElement(_index.Icon, { icon: actionName.toLowerCase() }),
        _react2.default.createElement(
          'span',
          { className: _styles2.default['coz-selectionbar-label'] },
          t('SelectionBar.' + actionName)
        )
      );
    }),
    _react2.default.createElement(
      _index.Button,
      {
        theme: 'close',
        className: _styles2.default['coz-action-close'],
        onClick: hideSelectionBar,
        extension: 'narrow'
      },
      _react2.default.createElement(_index.Icon, { icon: 'cross' })
    )
  );
};

SelectionBar.propTypes = {
  t: _propTypes2.default.func.isRequired, // translate action name.
  actions: _propTypes2.default.object.isRequired, // An object with actions
  selected: _propTypes2.default.array.isRequired, // selected items id.
  hideSelectionBar: _propTypes2.default.func.isRequired // function to close SelectionBar.
};

exports.default = (0, _I18n.translate)()(SelectionBar);

/***/ }),

/***/ "./node_modules/cozy-ui/react/SelectionBar/styles.styl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"u-visuallyhidden":"u-visuallyhidden--3ZwwJ","coz-selectionbar":"coz-selectionbar--2UF9M","coz-selectionbar-label":"coz-selectionbar-label--bV81X","u-hide":"u-hide--V7ZWj","u-hide--mob":"u-hide--mob--2LQAW","u-hide--tablet":"u-hide--tablet--2-cQF","u-hide--desk":"u-hide--desk--cXT9b","u-error":"u-error--1_NSP","u-error--warning":"u-error--warning--3ZXt2","u-valid":"u-valid--3LJMm","u-warn":"u-warn--1aA1d","u-black":"u-black--3PLDe","u-white":"u-white--132H2","u-paleGrey":"u-paleGrey--cea31","u-silver":"u-silver--3NuRL","u-coolGrey":"u-coolGrey--1Egfn","u-slateGrey":"u-slateGrey--3W-Lq","u-charcoalGrey":"u-charcoalGrey--2uKLc","u-zircon":"u-zircon--WKp59","u-frenchPass":"u-frenchPass--1G_73","u-dodgerBlue":"u-dodgerBlue--2mS7J","u-scienceBlue":"u-scienceBlue--26SvS","u-puertoRico":"u-puertoRico--293cZ","u-emerald":"u-emerald--3UAh_","u-malachite":"u-malachite--9Jf89","u-texasRose":"u-texasRose--1AchS","u-chablis":"u-chablis--2XRos","u-yourPink":"u-yourPink--uvofX","u-pomegranate":"u-pomegranate--MK069","u-monza":"u-monza--3HgNE","u-portage":"u-portage--4oM1g","u-azure":"u-azure--3fR9A","u-melon":"u-melon--1OqSE","u-blazeOrange":"u-blazeOrange--37R2Y","u-mango":"u-mango--3A0fS","u-pumpkinOrange":"u-pumpkinOrange--lCLyz","u-darkPeriwinkle":"u-darkPeriwinkle--2_qiY","u-purpley":"u-purpley--3j2K3","u-lightishPurple":"u-lightishPurple--3Z-Ig","u-weirdGreen":"u-weirdGreen--lxyD4","u-ellipsis":"u-ellipsis--32pGc","u-midellipsis":"u-midellipsis--390E3","coz-selectionbar-separator":"coz-selectionbar-separator--84gtR","coz-action-extra":"coz-action-extra--2gk-U","coz-action-close":"coz-action-close--2Ys_W","coz-selectionbar-count":"coz-selectionbar-count--2phs1","coz-action-moveto":"coz-action-moveto--2NUgl","spin":"spin--1ywvo"};

/***/ }),

/***/ "./node_modules/cozy-ui/react/Sidebar/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__("./node_modules/cozy-ui/react/Sidebar/styles.styl");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sidebar = function Sidebar(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return _react2.default.createElement(
    'aside',
    { className: (0, _classnames2.default)(_styles2.default['o-sidebar'], className) },
    children
  );
};

Sidebar.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string
};

exports.default = Sidebar;

/***/ }),

/***/ "./node_modules/cozy-ui/react/Sidebar/styles.styl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"o-sidebar":"o-sidebar--1UCaO"};

/***/ }),

/***/ "./node_modules/cozy-ui/react/Textarea/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__("./node_modules/cozy-ui/react/Textarea/styles.styl");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Textarea = function Textarea(props) {
  var _cx;

  var className = props.className,
      placeholder = props.placeholder,
      children = props.children,
      error = props.error,
      size = props.size,
      fullwidth = props.fullwidth,
      restProps = _objectWithoutProperties(props, ['className', 'placeholder', 'children', 'error', 'size', 'fullwidth']);

  return _react2.default.createElement(
    'textarea',
    _extends({
      placeholder: placeholder,
      className: (0, _classnames2.default)(_styles2.default['c-textarea'], (_cx = {}, _defineProperty(_cx, _styles2.default['is-error'], error), _defineProperty(_cx, _styles2.default['c-textarea--' + size], size), _defineProperty(_cx, _styles2.default['c-textarea--fullwidth'], fullwidth), _cx), className)
    }, restProps),
    children
  );
};

Textarea.propTypes = {
  children: _propTypes2.default.node,
  placeholder: _propTypes2.default.string,
  className: _propTypes2.default.string,
  error: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['tiny', 'medium']),
  fullwidth: _propTypes2.default.bool
};

Textarea.defaultProps = {
  placeholder: '',
  error: false,
  fullwidth: false
};

exports.default = Textarea;

/***/ }),

/***/ "./node_modules/cozy-ui/react/Textarea/styles.styl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"u-visuallyhidden":"u-visuallyhidden--3ZwwJ","u-hide":"u-hide--V7ZWj","u-hide--mob":"u-hide--mob--2LQAW","u-hide--tablet":"u-hide--tablet--2-cQF","u-hide--desk":"u-hide--desk--cXT9b","u-error":"u-error--1_NSP","u-error--warning":"u-error--warning--3ZXt2","u-valid":"u-valid--3LJMm","u-warn":"u-warn--1aA1d","u-black":"u-black--3PLDe","u-white":"u-white--132H2","u-paleGrey":"u-paleGrey--cea31","u-silver":"u-silver--3NuRL","u-coolGrey":"u-coolGrey--1Egfn","u-slateGrey":"u-slateGrey--3W-Lq","u-charcoalGrey":"u-charcoalGrey--2uKLc","u-zircon":"u-zircon--WKp59","u-frenchPass":"u-frenchPass--1G_73","u-dodgerBlue":"u-dodgerBlue--2mS7J","u-scienceBlue":"u-scienceBlue--26SvS","u-puertoRico":"u-puertoRico--293cZ","u-emerald":"u-emerald--3UAh_","u-malachite":"u-malachite--9Jf89","u-texasRose":"u-texasRose--1AchS","u-chablis":"u-chablis--2XRos","u-yourPink":"u-yourPink--uvofX","u-pomegranate":"u-pomegranate--MK069","u-monza":"u-monza--3HgNE","u-portage":"u-portage--4oM1g","u-azure":"u-azure--3fR9A","u-melon":"u-melon--1OqSE","u-blazeOrange":"u-blazeOrange--37R2Y","u-mango":"u-mango--3A0fS","u-pumpkinOrange":"u-pumpkinOrange--lCLyz","u-darkPeriwinkle":"u-darkPeriwinkle--2_qiY","u-purpley":"u-purpley--3j2K3","u-lightishPurple":"u-lightishPurple--3Z-Ig","u-weirdGreen":"u-weirdGreen--lxyD4","u-ellipsis":"u-ellipsis--32pGc","u-midellipsis":"u-midellipsis--390E3","c-textarea":"c-textarea--2p1Vn","is-error":"is-error--3G058","c-textarea--tiny":"c-textarea--tiny--xEBwt","c-textarea--medium":"c-textarea--medium--b9dOC","c-textarea--fullwidth":"c-textarea--fullwidth--1WGjn","spin":"spin--1ywvo"};

/***/ }),

/***/ "./node_modules/cozy-ui/react/Toggle/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _styles = __webpack_require__("./node_modules/cozy-ui/react/Toggle/styles.styl");

var _styles2 = _interopRequireDefault(_styles);

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggle = function (_Component) {
  _inherits(Toggle, _Component);

  function Toggle() {
    _classCallCheck(this, Toggle);

    return _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).apply(this, arguments));
  }

  _createClass(Toggle, [{
    key: 'onChange',
    value: function onChange(e) {
      if (this.props.onToggle) {
        this.props.onToggle(e.target.checked);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          _props$checked = _props.checked,
          checked = _props$checked === undefined ? false : _props$checked,
          _props$disabled = _props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled;

      return _react2.default.createElement(
        'span',
        { className: _styles2.default['toggle'] },
        _react2.default.createElement('input', {
          type: 'checkbox',
          id: id,
          className: _styles2.default['checkbox'],
          checked: checked,
          disabled: disabled,
          onChange: this.onChange.bind(this)
        }),
        _react2.default.createElement('label', { htmlFor: id, className: _styles2.default['label'] })
      );
    }
  }]);

  return Toggle;
}(_react.Component);

Toggle.propTypes = {
  id: _propTypes2.default.string.isRequired, // A unique id for the toggle, used internally.
  checked: _propTypes2.default.bool, // The state of the toggle
  disabled: _propTypes2.default.bool, // Guess what...
  onToggle: _propTypes2.default.func // A callback when the state of the toggle changes. Called with the new state as argument.
};

exports.default = Toggle;

/***/ }),

/***/ "./node_modules/cozy-ui/react/Toggle/styles.styl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"toggle":"toggle--3NGK8","checkbox":"checkbox--Q3jzD","label":"label--3TGxL"};

/***/ }),

/***/ "./node_modules/cozy-ui/react/helpers/withBreakpoints.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onlyDesktop = exports.onlyTablet = exports.onlyMobile = exports.renderOnlyIf = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _pick = __webpack_require__("./node_modules/lodash/pick.js");

var _pick2 = _interopRequireDefault(_pick);

var _flowRight = __webpack_require__("./node_modules/lodash/flowRight.js");

var _flowRight2 = _interopRequireDefault(_flowRight);

var _mapValues = __webpack_require__("./node_modules/lodash/mapValues.js");

var _mapValues2 = _interopRequireDefault(_mapValues);

var _throttle = __webpack_require__("./node_modules/lodash/throttle.js");

var _throttle2 = _interopRequireDefault(_throttle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var large = 1200;
var medium = 1023;
var small = 768;
var tiny = 543;

var breakpoints = {
  isExtraLarge: [large + 1],
  isLarge: [medium + 1, large],
  isMedium: [small + 1, medium],
  isSmall: [tiny + 1, small],
  isTiny: [0, tiny],
  isDesktop: [medium + 1],
  isTablet: [small + 1, medium],
  isMobile: [0, small]
};

var getBreakpointsStatus = function getBreakpointsStatus(breakpoints) {
  var width = window.innerWidth;
  return (0, _mapValues2.default)(breakpoints, function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        min = _ref2[0],
        max = _ref2[1];

    return width >= min && (max === undefined || width <= max);
  });
};

/**
 * HOC providing the `breakpoints` property to its children to help
 * with responsive web design.
 *
 * `breakpoints` values will reflect if the window.innerWidth is under
 * those breakpoints.
 *
 * @Example
 * ````
 * // here we define `mobile` as a screen under 1000px
 * const B = withBreakpoints({ mobile: 1000 })(A)
 * ````
 *
 * `A` will receive `{ breakpoints: { mobile: true }}` if the screen
 * width is under 1000px.
 *
 * `A` will receive `{ breakpoints: { mobile: false }}` if the screen
 * width is over 1000px;
 *
 *
 */
var withBreakpoints = function withBreakpoints() {
  var bp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : breakpoints;
  return function (Wrapped) {
    return function (_Component) {
      _inherits(Aware, _Component);

      function Aware(props) {
        _classCallCheck(this, Aware);

        var _this = _possibleConstructorReturn(this, (Aware.__proto__ || Object.getPrototypeOf(Aware)).call(this, props));

        _this.state = {
          breakpoints: getBreakpointsStatus(bp)
        };
        _this.checkBreakpoints = (0, _throttle2.default)(function () {
          _this.setState({ breakpoints: getBreakpointsStatus(bp) });
        }, 100, { trailing: true });
        return _this;
      }

      _createClass(Aware, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          window.addEventListener('resize', this.checkBreakpoints);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          window.removeEventListener('resize', this.checkBreakpoints);
        }
      }, {
        key: 'render',
        value: function render() {
          var props = this.props;
          var breakpoints = this.state.breakpoints;

          return _react2.default.createElement(Wrapped, _extends({}, props, { breakpoints: breakpoints }));
        }
      }]);

      return Aware;
    }(_react.Component);
  };
};

/**
 * HOC that tries a predicate on props + state and
 * renders a component only if the predicate returns true
 */
var renderOnlyIf = exports.renderOnlyIf = function renderOnlyIf(predicate) {
  return function (Wrapped) {
    return function (_Component2) {
      _inherits(_class, _Component2);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
      }

      _createClass(_class, [{
        key: 'render',
        value: function render() {
          var props = this.props;
          var state = this.state;
          if (predicate(props, state)) {
            return _react2.default.createElement(Wrapped, props);
          }
        }
      }]);

      return _class;
    }(_react.Component);
  };
};

/**
 * Use this HOC if you only want your component to be
 * rendered on mobile
 */
var onlyMobile = exports.onlyMobile = (0, _flowRight2.default)(withBreakpoints((0, _pick2.default)(breakpoints, 'isMobile')), renderOnlyIf(function (props) {
  return props.breakpoints.isMobile;
}));

/**
 * Use this HOC if you only want your component to be
 * rendered on tablet
 */
var onlyTablet = exports.onlyTablet = (0, _flowRight2.default)(withBreakpoints((0, _pick2.default)(breakpoints, 'isTablet')), renderOnlyIf(function (props) {
  return props.breakpoints.isTablet;
}));

/**
 * Use this HOC if you only want your component to be
 * rendered on desktop
 */
var onlyDesktop = exports.onlyDesktop = (0, _flowRight2.default)(withBreakpoints((0, _pick2.default)(breakpoints, 'isDesktop')), renderOnlyIf(function (props) {
  return props.breakpoints.isDesktop;
}));

exports.default = withBreakpoints;

/***/ }),

/***/ "./node_modules/cozy-ui/react/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Alerter__ = __webpack_require__("./node_modules/cozy-ui/react/Alerter/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Alerter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Alerter__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Alerter", function() { return __WEBPACK_IMPORTED_MODULE_0__Alerter___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Badge__ = __webpack_require__("./node_modules/cozy-ui/react/Badge/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Badge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Badge__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return __WEBPACK_IMPORTED_MODULE_1__Badge___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Button__ = __webpack_require__("./node_modules/cozy-ui/react/Button/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Button__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__Button__, "Button")) __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_2__Button__["Button"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__Button__, "ButtonLink")) __webpack_require__.d(__webpack_exports__, "ButtonLink", function() { return __WEBPACK_IMPORTED_MODULE_2__Button__["ButtonLink"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ButtonAction__ = __webpack_require__("./node_modules/cozy-ui/react/ButtonAction/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ButtonAction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ButtonAction__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "ButtonAction", function() { return __WEBPACK_IMPORTED_MODULE_3__ButtonAction___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__I18n__ = __webpack_require__("./node_modules/cozy-ui/react/I18n/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__I18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__I18n__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "I18n", function() { return __WEBPACK_IMPORTED_MODULE_4__I18n___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__I18n__, "translate")) __webpack_require__.d(__webpack_exports__, "translate", function() { return __WEBPACK_IMPORTED_MODULE_4__I18n__["translate"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Icon__ = __webpack_require__("./node_modules/cozy-ui/react/Icon/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Icon__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return __WEBPACK_IMPORTED_MODULE_5__Icon___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Sidebar__ = __webpack_require__("./node_modules/cozy-ui/react/Sidebar/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Sidebar__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return __WEBPACK_IMPORTED_MODULE_6__Sidebar___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Nav__ = __webpack_require__("./node_modules/cozy-ui/react/Nav/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Nav___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Nav__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return __WEBPACK_IMPORTED_MODULE_7__Nav___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__Nav__, "NavItem")) __webpack_require__.d(__webpack_exports__, "NavItem", function() { return __WEBPACK_IMPORTED_MODULE_7__Nav__["NavItem"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__Nav__, "NavIcon")) __webpack_require__.d(__webpack_exports__, "NavIcon", function() { return __WEBPACK_IMPORTED_MODULE_7__Nav__["NavIcon"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__Nav__, "NavText")) __webpack_require__.d(__webpack_exports__, "NavText", function() { return __WEBPACK_IMPORTED_MODULE_7__Nav__["NavText"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__Nav__, "NavLink")) __webpack_require__.d(__webpack_exports__, "NavLink", function() { return __WEBPACK_IMPORTED_MODULE_7__Nav__["NavLink"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__Nav__, "genNavLink")) __webpack_require__.d(__webpack_exports__, "genNavLink", function() { return __WEBPACK_IMPORTED_MODULE_7__Nav__["genNavLink"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ListItemText__ = __webpack_require__("./node_modules/cozy-ui/react/ListItemText/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ListItemText___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__ListItemText__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "ListItemText", function() { return __WEBPACK_IMPORTED_MODULE_8__ListItemText___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Modal__ = __webpack_require__("./node_modules/cozy-ui/react/Modal/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Modal__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return __WEBPACK_IMPORTED_MODULE_9__Modal___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_9__Modal__, "ModalContent")) __webpack_require__.d(__webpack_exports__, "ModalContent", function() { return __WEBPACK_IMPORTED_MODULE_9__Modal__["ModalContent"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_9__Modal__, "ModalSection")) __webpack_require__.d(__webpack_exports__, "ModalSection", function() { return __WEBPACK_IMPORTED_MODULE_9__Modal__["ModalSection"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_9__Modal__, "ModalFooter")) __webpack_require__.d(__webpack_exports__, "ModalFooter", function() { return __WEBPACK_IMPORTED_MODULE_9__Modal__["ModalFooter"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_9__Modal__, "ModalDescription")) __webpack_require__.d(__webpack_exports__, "ModalDescription", function() { return __WEBPACK_IMPORTED_MODULE_9__Modal__["ModalDescription"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_9__Modal__, "ModalHeader")) __webpack_require__.d(__webpack_exports__, "ModalHeader", function() { return __WEBPACK_IMPORTED_MODULE_9__Modal__["ModalHeader"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_9__Modal__, "ModalBrandedHeader")) __webpack_require__.d(__webpack_exports__, "ModalBrandedHeader", function() { return __WEBPACK_IMPORTED_MODULE_9__Modal__["ModalBrandedHeader"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__SelectionBar__ = __webpack_require__("./node_modules/cozy-ui/react/SelectionBar/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__SelectionBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__SelectionBar__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "SelectionBar", function() { return __WEBPACK_IMPORTED_MODULE_10__SelectionBar___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__IntentIframe__ = __webpack_require__("./node_modules/cozy-ui/react/IntentIframe/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IntentIframe", function() { return __WEBPACK_IMPORTED_MODULE_11__IntentIframe__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__IntentOpener__ = __webpack_require__("./node_modules/cozy-ui/react/IntentOpener/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IntentOpener", function() { return __WEBPACK_IMPORTED_MODULE_12__IntentOpener__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__IntentModal__ = __webpack_require__("./node_modules/cozy-ui/react/IntentModal/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IntentModal", function() { return __WEBPACK_IMPORTED_MODULE_13__IntentModal__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Spinner__ = __webpack_require__("./node_modules/cozy-ui/react/Spinner/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__Spinner__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return __WEBPACK_IMPORTED_MODULE_14__Spinner___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Tabs__ = __webpack_require__("./node_modules/cozy-ui/react/Tabs/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__Tabs__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_15__Tabs__, "Tabs")) __webpack_require__.d(__webpack_exports__, "Tabs", function() { return __WEBPACK_IMPORTED_MODULE_15__Tabs__["Tabs"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_15__Tabs__, "TabPanels")) __webpack_require__.d(__webpack_exports__, "TabPanels", function() { return __WEBPACK_IMPORTED_MODULE_15__Tabs__["TabPanels"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_15__Tabs__, "TabPanel")) __webpack_require__.d(__webpack_exports__, "TabPanel", function() { return __WEBPACK_IMPORTED_MODULE_15__Tabs__["TabPanel"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_15__Tabs__, "TabList")) __webpack_require__.d(__webpack_exports__, "TabList", function() { return __WEBPACK_IMPORTED_MODULE_15__Tabs__["TabList"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_15__Tabs__, "Tab")) __webpack_require__.d(__webpack_exports__, "Tab", function() { return __WEBPACK_IMPORTED_MODULE_15__Tabs__["Tab"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Accordion__ = __webpack_require__("./node_modules/cozy-ui/react/Accordion/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Accordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__Accordion__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return __WEBPACK_IMPORTED_MODULE_16__Accordion___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_16__Accordion__, "AccordionItem")) __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return __WEBPACK_IMPORTED_MODULE_16__Accordion__["AccordionItem"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Toggle__ = __webpack_require__("./node_modules/cozy-ui/react/Toggle/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Toggle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__Toggle__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Toggle", function() { return __WEBPACK_IMPORTED_MODULE_17__Toggle___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__helpers_withBreakpoints__ = __webpack_require__("./node_modules/cozy-ui/react/helpers/withBreakpoints.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__helpers_withBreakpoints___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__helpers_withBreakpoints__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "withBreakpoints", function() { return __WEBPACK_IMPORTED_MODULE_18__helpers_withBreakpoints___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Media__ = __webpack_require__("./node_modules/cozy-ui/react/Media/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Media", function() { return __WEBPACK_IMPORTED_MODULE_19__Media__["Media"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Img", function() { return __WEBPACK_IMPORTED_MODULE_19__Media__["Img"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Bd", function() { return __WEBPACK_IMPORTED_MODULE_19__Media__["Bd"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Layout__ = __webpack_require__("./node_modules/cozy-ui/react/Layout/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return __WEBPACK_IMPORTED_MODULE_20__Layout__["Layout"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return __WEBPACK_IMPORTED_MODULE_20__Layout__["Main"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return __WEBPACK_IMPORTED_MODULE_20__Layout__["Content"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__MidEllipsis__ = __webpack_require__("./node_modules/cozy-ui/react/MidEllipsis/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__MidEllipsis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__MidEllipsis__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "MidEllipsis", function() { return __WEBPACK_IMPORTED_MODULE_21__MidEllipsis___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ActionMenu__ = __webpack_require__("./node_modules/cozy-ui/react/ActionMenu/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ActionMenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__ActionMenu__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "ActionMenu", function() { return __WEBPACK_IMPORTED_MODULE_22__ActionMenu___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Menu__ = __webpack_require__("./node_modules/cozy-ui/react/Menu/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__Menu__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return __WEBPACK_IMPORTED_MODULE_23__Menu___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_23__Menu__, "MenuItem")) __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return __WEBPACK_IMPORTED_MODULE_23__Menu__["MenuItem"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Overlay__ = __webpack_require__("./node_modules/cozy-ui/react/Overlay/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Overlay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__Overlay__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return __WEBPACK_IMPORTED_MODULE_24__Overlay___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Label__ = __webpack_require__("./node_modules/cozy-ui/react/Label/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Label___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25__Label__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return __WEBPACK_IMPORTED_MODULE_25__Label___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Input__ = __webpack_require__("./node_modules/cozy-ui/react/Input/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26__Input__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return __WEBPACK_IMPORTED_MODULE_26__Input___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Checkbox__ = __webpack_require__("./node_modules/cozy-ui/react/Checkbox/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27__Checkbox__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return __WEBPACK_IMPORTED_MODULE_27__Checkbox___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__Radio__ = __webpack_require__("./node_modules/cozy-ui/react/Radio/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__Radio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28__Radio__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return __WEBPACK_IMPORTED_MODULE_28__Radio___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__Textarea__ = __webpack_require__("./node_modules/cozy-ui/react/Textarea/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__Textarea___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29__Textarea__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return __WEBPACK_IMPORTED_MODULE_29__Textarea___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__Field__ = __webpack_require__("./node_modules/cozy-ui/react/Field/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__Field___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30__Field__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return __WEBPACK_IMPORTED_MODULE_30__Field___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__Avatar__ = __webpack_require__("./node_modules/cozy-ui/react/Avatar/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__Avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31__Avatar__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return __WEBPACK_IMPORTED_MODULE_31__Avatar___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__IntentHeader__ = __webpack_require__("./node_modules/cozy-ui/react/IntentHeader/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__IntentHeader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32__IntentHeader__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "IntentHeader", function() { return __WEBPACK_IMPORTED_MODULE_32__IntentHeader___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__Panel__ = __webpack_require__("./node_modules/cozy-ui/react/Panel/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__Panel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33__Panel__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return __WEBPACK_IMPORTED_MODULE_33__Panel___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__SelectBox__ = __webpack_require__("./node_modules/cozy-ui/react/SelectBox/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__SelectBox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34__SelectBox__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "SelectBox", function() { return __WEBPACK_IMPORTED_MODULE_34__SelectBox___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_34__SelectBox__, "SelectBoxWithFixedOptions")) __webpack_require__.d(__webpack_exports__, "SelectBoxWithFixedOptions", function() { return __WEBPACK_IMPORTED_MODULE_34__SelectBox__["SelectBoxWithFixedOptions"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__Chip__ = __webpack_require__("./node_modules/cozy-ui/react/Chip/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__Chip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35__Chip__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Chip", function() { return __WEBPACK_IMPORTED_MODULE_35__Chip___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__Text__ = __webpack_require__("./node_modules/cozy-ui/react/Text/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__Text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36__Text__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return __WEBPACK_IMPORTED_MODULE_36__Text___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_36__Text__, "MainTitle")) __webpack_require__.d(__webpack_exports__, "MainTitle", function() { return __WEBPACK_IMPORTED_MODULE_36__Text__["MainTitle"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_36__Text__, "Title")) __webpack_require__.d(__webpack_exports__, "Title", function() { return __WEBPACK_IMPORTED_MODULE_36__Text__["Title"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_36__Text__, "SubTitle")) __webpack_require__.d(__webpack_exports__, "SubTitle", function() { return __WEBPACK_IMPORTED_MODULE_36__Text__["SubTitle"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_36__Text__, "Bold")) __webpack_require__.d(__webpack_exports__, "Bold", function() { return __WEBPACK_IMPORTED_MODULE_36__Text__["Bold"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_36__Text__, "Caption")) __webpack_require__.d(__webpack_exports__, "Caption", function() { return __WEBPACK_IMPORTED_MODULE_36__Text__["Caption"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__Empty__ = __webpack_require__("./node_modules/cozy-ui/react/Empty/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__Empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37__Empty__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Empty", function() { return __WEBPACK_IMPORTED_MODULE_37__Empty___default.a; });








































/***/ }),

/***/ "./node_modules/cozy-ui/react/utils.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mkComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mkComponent = function mkComponent(Tag) {
  var extra = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (_ref) {
    var children = _ref.children,
        className = _ref.className,
        props = _objectWithoutProperties(_ref, ['children', 'className']);

    var extraClassName = extra.className,
        restExtra = _objectWithoutProperties(extra, ['className']);

    return _react2.default.createElement(
      Tag,
      _extends({}, restExtra, props, {
        className: (className || '') + ' ' + (extraClassName || '')
      }),
      children
    );
  };
};

exports.mkComponent = mkComponent;

/***/ }),

/***/ "./node_modules/create-emotion/dist/index.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_memoize__ = __webpack_require__("./node_modules/@emotion/memoize/dist/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emotion_unitless__ = __webpack_require__("./node_modules/@emotion/unitless/dist/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emotion_hash__ = __webpack_require__("./node_modules/@emotion/hash/dist/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__emotion_stylis__ = __webpack_require__("./node_modules/@emotion/stylis/dist/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_stylis_rule_sheet__ = __webpack_require__("./node_modules/stylis-rule-sheet/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_stylis_rule_sheet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_stylis_rule_sheet__);






var hyphenateRegex = /[A-Z]|^ms/g;
var processStyleName = Object(__WEBPACK_IMPORTED_MODULE_0__emotion_memoize__["a" /* default */])(function (styleName) {
  return styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var processStyleValue = function processStyleValue(key, value) {
  if (value == null || typeof value === 'boolean') {
    return '';
  }

  if (__WEBPACK_IMPORTED_MODULE_1__emotion_unitless__["a" /* default */][key] !== 1 && key.charCodeAt(1) !== 45 && // custom properties
  !isNaN(value) && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (process.env.NODE_ENV !== 'production') {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    return oldProcessStyleValue(key, value);
  };
}

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'function':
        if (process.env.NODE_ENV !== 'production') {
          console.error('Passing functions to cx is deprecated and will be removed in the next major version of Emotion.\n' + 'Please call the function before passing it to cx.');
        }

        toAdd = classnames([arg()]);
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};
var isBrowser = typeof document !== 'undefined';

/*

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance
- 'polyfills' on server side

// usage

import StyleSheet from 'glamor/lib/sheet'
let styleSheet = new StyleSheet()

styleSheet.inject()
- 'injects' the stylesheet into the page (or into memory if on server)

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function makeStyleTag(opts) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', opts.key || '');

  if (opts.nonce !== undefined) {
    tag.setAttribute('nonce', opts.nonce);
  }

  tag.appendChild(document.createTextNode('')) // $FlowFixMe
  ;
  (opts.container !== undefined ? opts.container : document.head).appendChild(tag);
  return tag;
}

function _StyleSheet(options) {
  this.isSpeedy = process.env.NODE_ENV === 'production'; // the big drawback here is that the css won't be editable in devtools

  this.tags = [];
  this.ctr = 0;
  this.opts = options;
}

function _inject() {
  if (this.injected) {
    throw new Error('already injected!');
  }

  this.tags[0] = makeStyleTag(this.opts);
  this.injected = true;
}

function _speedy(bool) {
  if (this.ctr !== 0) {
    // cannot change speedy mode after inserting any rule to sheet. Either call speedy(${bool}) earlier in your app, or call flush() before speedy(${bool})
    throw new Error("cannot change speedy now");
  }

  this.isSpeedy = !!bool;
}

function _insert(rule, sourceMap) {
  // this is the ultrafast version, works across browsers
  if (this.isSpeedy) {
    var tag = this.tags[this.tags.length - 1];
    var sheet = sheetForTag(tag);

    try {
      sheet.insertRule(rule, sheet.cssRules.length);
    } catch (e) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('illegal rule', rule); // eslint-disable-line no-console
      }
    }
  } else {
    var _tag = makeStyleTag(this.opts);

    this.tags.push(_tag);

    _tag.appendChild(document.createTextNode(rule + (sourceMap || '')));
  }

  this.ctr++;

  if (this.ctr % 65000 === 0) {
    this.tags.push(makeStyleTag(this.opts));
  }
}

function _ref(tag) {
  return tag.parentNode.removeChild(tag);
}

function _flush() {
  // $FlowFixMe
  this.tags.forEach(_ref);
  this.tags = [];
  this.ctr = 0; // todo - look for remnants in document.styleSheets

  this.injected = false;
}

var StyleSheet =
/*#__PURE__*/
function () {
  var _proto = _StyleSheet.prototype;
  _proto.inject = _inject;
  _proto.speedy = _speedy;
  _proto.insert = _insert;
  _proto.flush = _flush;
  return _StyleSheet;
}();

function createEmotion(context, options) {
  if (context.__SECRET_EMOTION__ !== undefined) {
    return context.__SECRET_EMOTION__;
  }

  if (options === undefined) options = {};
  var key = options.key || 'css';

  if (process.env.NODE_ENV !== 'production') {
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var current;

  function insertRule(rule) {
    current += rule;

    if (isBrowser) {
      sheet.insert(rule, currentSourceMap);
    }
  }

  var insertionPlugin = __WEBPACK_IMPORTED_MODULE_4_stylis_rule_sheet___default()(insertRule);
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var caches = {
    registered: {},
    inserted: {},
    nonce: options.nonce,
    key: key
  };
  var sheet = new StyleSheet(options);

  if (isBrowser) {
    // 🚀
    sheet.inject();
  }

  var stylis = new __WEBPACK_IMPORTED_MODULE_3__emotion_stylis__["a" /* default */](stylisOptions);
  stylis.use(options.stylisPlugins)(insertionPlugin);
  var currentSourceMap = '';

  function handleInterpolation(interpolation, couldBeSelectorInterpolation) {
    if (interpolation == null) {
      return '';
    }

    switch (typeof interpolation) {
      case 'boolean':
        return '';

      case 'function':
        if (interpolation.__emotion_styles !== undefined) {
          var selector = interpolation.toString();

          if (selector === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production') {
            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
          }

          return selector;
        }

        if (this === undefined && process.env.NODE_ENV !== 'production') {
          console.error('Interpolating functions in css calls is deprecated and will be removed in the next major version of Emotion.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        return handleInterpolation.call(this, this === undefined ? interpolation() : // $FlowFixMe
        interpolation(this.mergedProps, this.context), couldBeSelectorInterpolation);

      case 'object':
        return createStringFromObject.call(this, interpolation);

      default:
        var cached = caches.registered[interpolation];
        return couldBeSelectorInterpolation === false && cached !== undefined ? cached : interpolation;
    }
  }

  var objectToStringCache = new WeakMap();

  function createStringFromObject(obj) {
    if (objectToStringCache.has(obj)) {
      // $FlowFixMe
      return objectToStringCache.get(obj);
    }

    var string = '';

    function _ref(interpolation) {
      string += handleInterpolation.call(this, interpolation, false);
    }

    function _ref3(key) {
      function _ref2(value) {
        string += processStyleName(key) + ":" + processStyleValue(key, value) + ";";
      }

      if (typeof obj[key] !== 'object') {
        if (caches.registered[obj[key]] !== undefined) {
          string += key + "{" + caches.registered[obj[key]] + "}";
        } else {
          string += processStyleName(key) + ":" + processStyleValue(key, obj[key]) + ";";
        }
      } else {
        if (key === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(obj[key]) && typeof obj[key][0] === 'string' && caches.registered[obj[key][0]] === undefined) {
          obj[key].forEach(_ref2);
        } else {
          string += key + "{" + handleInterpolation.call(this, obj[key], false) + "}";
        }
      }
    }

    if (Array.isArray(obj)) {
      obj.forEach(_ref, this);
    } else {
      Object.keys(obj).forEach(_ref3, this);
    }

    objectToStringCache.set(obj, string);
    return string;
  }

  var name;
  var stylesWithLabel;
  var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;

  var createStyles = function createStyles(strings) {
    var stringMode = true;
    var styles = '';
    var identifierName = '';

    if (strings == null || strings.raw === undefined) {
      stringMode = false;
      styles += handleInterpolation.call(this, strings, false);
    } else {
      styles += strings[0];
    }

    for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    interpolations.forEach(function (interpolation, i) {
      styles += handleInterpolation.call(this, interpolation, styles.charCodeAt(styles.length - 1) === 46 // .
      );

      if (stringMode === true && strings[i + 1] !== undefined) {
        styles += strings[i + 1];
      }
    }, this);
    stylesWithLabel = styles;
    styles = styles.replace(labelPattern, function (match, p1) {
      identifierName += "-" + p1;
      return '';
    });
    name = Object(__WEBPACK_IMPORTED_MODULE_2__emotion_hash__["a" /* default */])(styles + identifierName) + identifierName;
    return styles;
  };

  if (process.env.NODE_ENV !== 'production') {
    var sourceMapRegEx = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
    var oldStylis = stylis;

    stylis = function stylis(selector, styles) {
      var result = sourceMapRegEx.exec(styles);
      currentSourceMap = result ? result[0] : '';
      oldStylis(selector, styles);
      currentSourceMap = '';
    };
  }

  function insert(scope, styles) {
    if (caches.inserted[name] === undefined) {
      current = '';
      stylis(scope, styles);
      caches.inserted[name] = current;
    }
  }

  var css = function css() {
    var styles = createStyles.apply(this, arguments);
    var selector = key + "-" + name;

    if (caches.registered[selector] === undefined) {
      caches.registered[selector] = stylesWithLabel;
    }

    insert("." + selector, styles);
    return selector;
  };

  var keyframes = function keyframes() {
    var styles = createStyles.apply(this, arguments);
    var animation = "animation-" + name;
    insert('', "@keyframes " + animation + "{" + styles + "}");
    return animation;
  };

  var injectGlobal = function injectGlobal() {
    var styles = createStyles.apply(this, arguments);
    insert('', styles);
  };

  function getRegisteredStyles(registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function (className) {
      if (caches.registered[className] !== undefined) {
        registeredStyles.push(className);
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }

  function merge(className, sourceMap) {
    var registeredStyles = [];
    var rawClassName = getRegisteredStyles(registeredStyles, className);

    if (registeredStyles.length < 2) {
      return className;
    }

    return rawClassName + css(registeredStyles, sourceMap);
  }

  function cx() {
    for (var _len2 = arguments.length, classNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      classNames[_key2] = arguments[_key2];
    }

    return merge(classnames(classNames));
  }

  function hydrateSingleId(id) {
    caches.inserted[id] = true;
  }

  function hydrate(ids) {
    ids.forEach(hydrateSingleId);
  }

  function flush() {
    if (isBrowser) {
      sheet.flush();
      sheet.inject();
    }

    caches.inserted = {};
    caches.registered = {};
  }

  function _ref4(node) {
    // $FlowFixMe
    sheet.tags[0].parentNode.insertBefore(node, sheet.tags[0]); // $FlowFixMe

    node.getAttribute("data-emotion-" + key).split(' ').forEach(hydrateSingleId);
  }

  if (isBrowser) {
    var chunks = document.querySelectorAll("[data-emotion-" + key + "]");
    Array.prototype.forEach.call(chunks, _ref4);
  }

  var emotion = {
    flush: flush,
    hydrate: hydrate,
    cx: cx,
    merge: merge,
    getRegisteredStyles: getRegisteredStyles,
    injectGlobal: injectGlobal,
    keyframes: keyframes,
    css: css,
    sheet: sheet,
    caches: caches
  };
  context.__SECRET_EMOTION__ = emotion;
  return emotion;
}

/* harmony default export */ __webpack_exports__["a"] = (createEmotion);
//# sourceMappingURL=index.es.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/emotion/dist/index.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export flush */
/* unused harmony export hydrate */
/* unused harmony export cx */
/* unused harmony export merge */
/* unused harmony export getRegisteredStyles */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return injectGlobal; });
/* unused harmony export keyframes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return css; });
/* unused harmony export sheet */
/* unused harmony export caches */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_create_emotion__ = __webpack_require__("./node_modules/create-emotion/dist/index.es.js");


var context = typeof global !== 'undefined' ? global : {};

var _createEmotion = Object(__WEBPACK_IMPORTED_MODULE_0_create_emotion__["a" /* default */])(context),
    flush = _createEmotion.flush,
    hydrate = _createEmotion.hydrate,
    cx = _createEmotion.cx,
    merge = _createEmotion.merge,
    getRegisteredStyles = _createEmotion.getRegisteredStyles,
    injectGlobal = _createEmotion.injectGlobal,
    keyframes = _createEmotion.keyframes,
    css = _createEmotion.css,
    sheet = _createEmotion.sheet,
    caches = _createEmotion.caches;


//# sourceMappingURL=index.es.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/cozy-scripts/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/hammerjs/hammer.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');


/***/ }),

/***/ "./node_modules/lodash/_LazyWrapper.js":
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__("./node_modules/lodash/_baseCreate.js"),
    baseLodash = __webpack_require__("./node_modules/lodash/_baseLodash.js");

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

module.exports = LazyWrapper;


/***/ }),

/***/ "./node_modules/lodash/_LodashWrapper.js":
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__("./node_modules/lodash/_baseCreate.js"),
    baseLodash = __webpack_require__("./node_modules/lodash/_baseLodash.js");

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

module.exports = LodashWrapper;


/***/ }),

/***/ "./node_modules/lodash/_arrayAggregator.js":
/***/ (function(module, exports) {

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

module.exports = arrayAggregator;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__("./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__("./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseAggregator.js":
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__("./node_modules/lodash/_baseEach.js");

/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  baseEach(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

module.exports = baseAggregator;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseLodash.js":
/***/ (function(module, exports) {

/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}

module.exports = baseLodash;


/***/ }),

/***/ "./node_modules/lodash/_basePick.js":
/***/ (function(module, exports, __webpack_require__) {

var basePickBy = __webpack_require__("./node_modules/lodash/_basePickBy.js"),
    hasIn = __webpack_require__("./node_modules/lodash/hasIn.js");

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),

/***/ "./node_modules/lodash/_basePickBy.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__("./node_modules/lodash/_baseGet.js"),
    baseSet = __webpack_require__("./node_modules/lodash/_baseSet.js"),
    castPath = __webpack_require__("./node_modules/lodash/_castPath.js");

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__("./node_modules/lodash/_assignValue.js"),
    castPath = __webpack_require__("./node_modules/lodash/_castPath.js"),
    isIndex = __webpack_require__("./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    toKey = __webpack_require__("./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_createAggregator.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayAggregator = __webpack_require__("./node_modules/lodash/_arrayAggregator.js"),
    baseAggregator = __webpack_require__("./node_modules/lodash/_baseAggregator.js"),
    baseIteratee = __webpack_require__("./node_modules/lodash/_baseIteratee.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js");

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray(collection) ? arrayAggregator : baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
  };
}

module.exports = createAggregator;


/***/ }),

/***/ "./node_modules/lodash/_createFlow.js":
/***/ (function(module, exports, __webpack_require__) {

var LodashWrapper = __webpack_require__("./node_modules/lodash/_LodashWrapper.js"),
    flatRest = __webpack_require__("./node_modules/lodash/_flatRest.js"),
    getData = __webpack_require__("./node_modules/lodash/_getData.js"),
    getFuncName = __webpack_require__("./node_modules/lodash/_getFuncName.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isLaziable = __webpack_require__("./node_modules/lodash/_isLaziable.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var WRAP_CURRY_FLAG = 8,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256;

/**
 * Creates a `_.flow` or `_.flowRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new flow function.
 */
function createFlow(fromRight) {
  return flatRest(function(funcs) {
    var length = funcs.length,
        index = length,
        prereq = LodashWrapper.prototype.thru;

    if (fromRight) {
      funcs.reverse();
    }
    while (index--) {
      var func = funcs[index];
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
        var wrapper = new LodashWrapper([], true);
      }
    }
    index = wrapper ? index : length;
    while (++index < length) {
      func = funcs[index];

      var funcName = getFuncName(func),
          data = funcName == 'wrapper' ? getData(func) : undefined;

      if (data && isLaziable(data[0]) &&
            data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
            !data[4].length && data[9] == 1
          ) {
        wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
      } else {
        wrapper = (func.length == 1 && isLaziable(func))
          ? wrapper[funcName]()
          : wrapper.thru(func);
      }
    }
    return function() {
      var args = arguments,
          value = args[0];

      if (wrapper && args.length == 1 && isArray(value)) {
        return wrapper.plant(value).value();
      }
      var index = 0,
          result = length ? funcs[index].apply(this, args) : value;

      while (++index < length) {
        result = funcs[index].call(this, result);
      }
      return result;
    };
  });
}

module.exports = createFlow;


/***/ }),

/***/ "./node_modules/lodash/_flatRest.js":
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__("./node_modules/lodash/flatten.js"),
    overRest = __webpack_require__("./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__("./node_modules/lodash/_setToString.js");

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ "./node_modules/lodash/_getData.js":
/***/ (function(module, exports, __webpack_require__) {

var metaMap = __webpack_require__("./node_modules/lodash/_metaMap.js"),
    noop = __webpack_require__("./node_modules/lodash/noop.js");

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData = !metaMap ? noop : function(func) {
  return metaMap.get(func);
};

module.exports = getData;


/***/ }),

/***/ "./node_modules/lodash/_getFuncName.js":
/***/ (function(module, exports, __webpack_require__) {

var realNames = __webpack_require__("./node_modules/lodash/_realNames.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = (func.name + ''),
      array = realNames[result],
      length = hasOwnProperty.call(realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

module.exports = getFuncName;


/***/ }),

/***/ "./node_modules/lodash/_isLaziable.js":
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__("./node_modules/lodash/_LazyWrapper.js"),
    getData = __webpack_require__("./node_modules/lodash/_getData.js"),
    getFuncName = __webpack_require__("./node_modules/lodash/_getFuncName.js"),
    lodash = __webpack_require__("./node_modules/lodash/wrapperLodash.js");

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable(func) {
  var funcName = getFuncName(func),
      other = lodash[funcName];

  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData(other);
  return !!data && func === data[0];
}

module.exports = isLaziable;


/***/ }),

/***/ "./node_modules/lodash/_metaMap.js":
/***/ (function(module, exports, __webpack_require__) {

var WeakMap = __webpack_require__("./node_modules/lodash/_WeakMap.js");

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap;

module.exports = metaMap;


/***/ }),

/***/ "./node_modules/lodash/_realNames.js":
/***/ (function(module, exports) {

/** Used to lookup unminified function names. */
var realNames = {};

module.exports = realNames;


/***/ }),

/***/ "./node_modules/lodash/_wrapperClone.js":
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__("./node_modules/lodash/_LazyWrapper.js"),
    LodashWrapper = __webpack_require__("./node_modules/lodash/_LodashWrapper.js"),
    copyArray = __webpack_require__("./node_modules/lodash/_copyArray.js");

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone(wrapper) {
  if (wrapper instanceof LazyWrapper) {
    return wrapper.clone();
  }
  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray(wrapper.__actions__);
  result.__index__  = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

module.exports = wrapperClone;


/***/ }),

/***/ "./node_modules/lodash/before.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("./node_modules/lodash/toInteger.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

module.exports = before;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    now = __webpack_require__("./node_modules/lodash/now.js"),
    toNumber = __webpack_require__("./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/flatten.js":
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__("./node_modules/lodash/_baseFlatten.js");

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ "./node_modules/lodash/flowRight.js":
/***/ (function(module, exports, __webpack_require__) {

var createFlow = __webpack_require__("./node_modules/lodash/_createFlow.js");

/**
 * This method is like `_.flow` except that it creates a function that
 * invokes the given functions from right to left.
 *
 * @static
 * @since 3.0.0
 * @memberOf _
 * @category Util
 * @param {...(Function|Function[])} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see _.flow
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var addSquare = _.flowRight([square, _.add]);
 * addSquare(1, 2);
 * // => 9
 */
var flowRight = createFlow(true);

module.exports = flowRight;


/***/ }),

/***/ "./node_modules/lodash/groupBy.js":
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__("./node_modules/lodash/_baseAssignValue.js"),
    createAggregator = __webpack_require__("./node_modules/lodash/_createAggregator.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = createAggregator(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    baseAssignValue(result, key, [value]);
  }
});

module.exports = groupBy;


/***/ }),

/***/ "./node_modules/lodash/mapValues.js":
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__("./node_modules/lodash/_baseAssignValue.js"),
    baseForOwn = __webpack_require__("./node_modules/lodash/_baseForOwn.js"),
    baseIteratee = __webpack_require__("./node_modules/lodash/_baseIteratee.js");

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;


/***/ }),

/***/ "./node_modules/lodash/noop.js":
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/once.js":
/***/ (function(module, exports, __webpack_require__) {

var before = __webpack_require__("./node_modules/lodash/before.js");

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */
function once(func) {
  return before(2, func);
}

module.exports = once;


/***/ }),

/***/ "./node_modules/lodash/pick.js":
/***/ (function(module, exports, __webpack_require__) {

var basePick = __webpack_require__("./node_modules/lodash/_basePick.js"),
    flatRest = __webpack_require__("./node_modules/lodash/_flatRest.js");

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),

/***/ "./node_modules/lodash/throttle.js":
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__("./node_modules/lodash/debounce.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__("./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__("./node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__("./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/lodash/wrapperLodash.js":
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__("./node_modules/lodash/_LazyWrapper.js"),
    LodashWrapper = __webpack_require__("./node_modules/lodash/_LodashWrapper.js"),
    baseLodash = __webpack_require__("./node_modules/lodash/_baseLodash.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js"),
    wrapperClone = __webpack_require__("./node_modules/lodash/_wrapperClone.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;
lodash.prototype.constructor = lodash;

module.exports = lodash;


/***/ }),

/***/ "./node_modules/performance-now/lib/performance-now.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/raf/index.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__("./node_modules/performance-now/lib/performance-now.js")
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/cozy-scripts/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-input-autosize/lib/AutosizeInput.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

var cleanInputProps = function cleanInputProps(inputProps) {
	INPUT_PROPS_BLACKLIST.forEach(function (field) {
		return delete inputProps[field];
	});
	return inputProps;
};

var copyStyles = function copyStyles(styles, node) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
};

var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

var generateId = function generateId() {
	// we only need an auto-generated ID for stylesheet injection, which is only
	// used for IE. so if the browser is not IE, this should return undefined.
	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: props.id || generateId()
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var id = nextProps.id;

			if (id !== this.props.id) {
				this.setState({ inputId: id || generateId() });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyles = this.input && window.getComputedStyle(this.input);
			if (!inputStyles) {
				return;
			}
			copyStyles(inputStyles, this.sizer);
			if (this.placeHolderSizer) {
				copyStyles(inputStyles, this.placeHolderSizer);
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
			var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
			newInputWidth += extraWidth;
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'renderStyles',
		value: function renderStyles() {
			// this method injects styles to hide IE's clear indicator, which messes
			// with input size detection. the stylesheet is only injected when the
			// browser is IE, and can also be disabled by the `injectStyles` prop.
			var injectStyles = this.props.injectStyles;

			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
				} }) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

			var inputStyle = _extends({
				boxSizing: 'content-box',
				width: this.state.inputWidth + 'px'
			}, this.props.inputStyle);

			var inputProps = _objectWithoutProperties(this.props, []);

			cleanInputProps(inputProps);
			inputProps.className = this.props.inputClassName;
			inputProps.id = this.state.inputId;
			inputProps.style = inputStyle;

			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				this.renderStyles(),
				_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(_react.Component);

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	extraWidth: _propTypes2.default.oneOfType([// additional width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(event) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1,
	injectStyles: true
};

exports.default = AutosizeInput;

/***/ }),

/***/ "./node_modules/react-select/dist/react-select.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBase", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Async", function() { return Async; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncCreatable", function() { return AsyncCreatable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Creatable", function() { return Creatable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilter", function() { return createFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return mergeStyles; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_emotion__ = __webpack_require__("./node_modules/emotion/dist/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_raf__ = __webpack_require__("./node_modules/raf/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_raf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_raf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_input_autosize__ = __webpack_require__("./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_input_autosize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_input_autosize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);







var diacritics = [{ base: 'A', letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g }, { base: 'AA', letters: /[\uA732]/g }, { base: 'AE', letters: /[\u00C6\u01FC\u01E2]/g }, { base: 'AO', letters: /[\uA734]/g }, { base: 'AU', letters: /[\uA736]/g }, { base: 'AV', letters: /[\uA738\uA73A]/g }, { base: 'AY', letters: /[\uA73C]/g }, { base: 'B', letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g }, { base: 'C', letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g }, { base: 'D', letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g }, { base: 'DZ', letters: /[\u01F1\u01C4]/g }, { base: 'Dz', letters: /[\u01F2\u01C5]/g }, { base: 'E', letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g }, { base: 'F', letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g }, { base: 'G', letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g }, { base: 'H', letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g }, { base: 'I', letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g }, { base: 'J', letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g }, { base: 'K', letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g }, { base: 'L', letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g }, { base: 'LJ', letters: /[\u01C7]/g }, { base: 'Lj', letters: /[\u01C8]/g }, { base: 'M', letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g }, { base: 'N', letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g }, { base: 'NJ', letters: /[\u01CA]/g }, { base: 'Nj', letters: /[\u01CB]/g }, { base: 'O', letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g }, { base: 'OI', letters: /[\u01A2]/g }, { base: 'OO', letters: /[\uA74E]/g }, { base: 'OU', letters: /[\u0222]/g }, { base: 'P', letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g }, { base: 'Q', letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g }, { base: 'R', letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g }, { base: 'S', letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g }, { base: 'T', letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g }, { base: 'TZ', letters: /[\uA728]/g }, { base: 'U', letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g }, { base: 'V', letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g }, { base: 'VY', letters: /[\uA760]/g }, { base: 'W', letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g }, { base: 'X', letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g }, { base: 'Y', letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g }, { base: 'Z', letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g }, { base: 'a', letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g }, { base: 'aa', letters: /[\uA733]/g }, { base: 'ae', letters: /[\u00E6\u01FD\u01E3]/g }, { base: 'ao', letters: /[\uA735]/g }, { base: 'au', letters: /[\uA737]/g }, { base: 'av', letters: /[\uA739\uA73B]/g }, { base: 'ay', letters: /[\uA73D]/g }, { base: 'b', letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g }, { base: 'c', letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g }, { base: 'd', letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g }, { base: 'dz', letters: /[\u01F3\u01C6]/g }, { base: 'e', letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g }, { base: 'f', letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g }, { base: 'g', letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g }, { base: 'h', letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g }, { base: 'hv', letters: /[\u0195]/g }, { base: 'i', letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g }, { base: 'j', letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g }, { base: 'k', letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g }, { base: 'l', letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g }, { base: 'lj', letters: /[\u01C9]/g }, { base: 'm', letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g }, { base: 'n', letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g }, { base: 'nj', letters: /[\u01CC]/g }, { base: 'o', letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g }, { base: 'oi', letters: /[\u01A3]/g }, { base: 'ou', letters: /[\u0223]/g }, { base: 'oo', letters: /[\uA74F]/g }, { base: 'p', letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g }, { base: 'q', letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g }, { base: 'r', letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g }, { base: 's', letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g }, { base: 't', letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g }, { base: 'tz', letters: /[\uA729]/g }, { base: 'u', letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g }, { base: 'v', letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g }, { base: 'vy', letters: /[\uA761]/g }, { base: 'w', letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g }, { base: 'x', letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g }, { base: 'y', letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g }, { base: 'z', letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g }];

var stripDiacritics = function stripDiacritics(str) {
	for (var i = 0; i < diacritics.length; i++) {
		str = str.replace(diacritics[i].letters, diacritics[i].base);
	}
	return str;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};
var defaulStringify = function defaulStringify(option) {
  return option.label + ' ' + option.value;
};

var createFilter = function createFilter(config) {
  return function (option, rawInput) {
    var _ignoreCase$ignoreAcc = _extends({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaulStringify,
      trim: true,
      matchFrom: 'any'
    }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;

    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);
    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }
    if (ignoreAccents) {
      input = stripDiacritics(input);
      candidate = stripDiacritics(candidate);
    }
    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

var DummyInput = function (_Component) {
  inherits(DummyInput, _Component);

  function DummyInput() {
    classCallCheck(this, DummyInput);
    return possibleConstructorReturn(this, (DummyInput.__proto__ || Object.getPrototypeOf(DummyInput)).apply(this, arguments));
  }

  createClass(DummyInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          inProp = _props.in,
          out = _props.out,
          onExited = _props.onExited,
          appear = _props.appear,
          enter = _props.enter,
          exit = _props.exit,
          innerRef = _props.innerRef,
          props = objectWithoutProperties(_props, ['in', 'out', 'onExited', 'appear', 'enter', 'exit', 'innerRef']);

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', _extends({
        ref: innerRef
      }, props, {
        className: Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])({
          // get rid of any default styles
          background: 0,
          border: 0,
          fontSize: 'inherit',
          outline: 0,
          padding: 0,

          // important! without `width` browsers won't allow focus
          width: 1,

          // remove cursor on desktop
          color: 'transparent',

          // remove cursor on mobile whilst maintaining "scroll into view" behaviour
          left: -100,
          opacity: 0,
          position: 'relative',
          transform: 'scale(0)'
        })
      }));
    }
  }]);
  return DummyInput;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var NodeResolver = function (_Component) {
  inherits(NodeResolver, _Component);

  function NodeResolver() {
    classCallCheck(this, NodeResolver);
    return possibleConstructorReturn(this, (NodeResolver.__proto__ || Object.getPrototypeOf(NodeResolver)).apply(this, arguments));
  }

  createClass(NodeResolver, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.innerRef(Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["findDOMNode"])(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.innerRef(null);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return NodeResolver;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];

var LOCK_STYLES = {
  boxSizing: 'border-box', // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};

function preventTouchMove(e) {
  e.preventDefault();
}

function allowTouchMove(e) {
  e.stopPropagation();
}

function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
}

// `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface
function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var activeScrollLocks = 0;

var ScrollLock = function (_Component) {
  inherits(ScrollLock, _Component);

  function ScrollLock() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ScrollLock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ScrollLock.__proto__ || Object.getPrototypeOf(ScrollLock)).call.apply(_ref, [this].concat(args))), _this), _this.originalStyles = {}, _this.listenerOptions = {
      capture: false,
      passive: false
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ScrollLock, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (!canUseDOM) return;

      var _props = this.props,
          accountForScrollbars = _props.accountForScrollbars,
          touchScrollTarget = _props.touchScrollTarget;

      var target = document.body;
      var targetStyle = target && target.style;

      if (accountForScrollbars) {
        // store any styles already applied to the body
        STYLE_KEYS.forEach(function (key) {
          var val = targetStyle && targetStyle[key];
          _this2.originalStyles[key] = val;
        });
      }

      // apply the lock styles and padding if this is the first scroll lock
      if (accountForScrollbars && activeScrollLocks < 1) {
        var currentPadding = parseInt(this.originalStyles.paddingRight, 10) || 0;
        var clientWidth = document.body ? document.body.clientWidth : 0;
        var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;

        Object.keys(LOCK_STYLES).forEach(function (key) {
          var val = LOCK_STYLES[key];
          if (targetStyle) {
            targetStyle[key] = val;
          }
        });

        if (targetStyle) {
          targetStyle.paddingRight = adjustedPadding + 'px';
        }
      }

      // account for touch devices
      if (target && isTouchDevice()) {
        // Mobile Safari ignores { overflow: hidden } declaration on the body.
        target.addEventListener('touchmove', preventTouchMove, this.listenerOptions);

        // Allow scroll on provided target
        if (touchScrollTarget) {
          touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.addEventListener('touchmove', allowTouchMove, this.listenerOptions);
        }
      }

      // increment active scroll locks
      activeScrollLocks += 1;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this3 = this;

      if (!canUseDOM) return;

      var _props2 = this.props,
          accountForScrollbars = _props2.accountForScrollbars,
          touchScrollTarget = _props2.touchScrollTarget;

      var target = document.body;
      var targetStyle = target && target.style;

      // safely decrement active scroll locks
      activeScrollLocks = Math.max(activeScrollLocks - 1, 0);

      // reapply original body styles, if any
      if (accountForScrollbars && activeScrollLocks < 1) {
        STYLE_KEYS.forEach(function (key) {
          var val = _this3.originalStyles[key];
          if (targetStyle) {
            targetStyle[key] = val;
          }
        });
      }

      // remove touch listeners
      if (target && isTouchDevice()) {
        target.removeEventListener('touchmove', preventTouchMove, this.listenerOptions);

        if (touchScrollTarget) {
          touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.removeEventListener('touchmove', allowTouchMove, this.listenerOptions);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return ScrollLock;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

ScrollLock.defaultProps = {
  accountForScrollbars: true
};

var createPrimitive = function createPrimitive(Tag) {
  return function (_ref) {
    var css$$1 = _ref.css,
        innerRef = _ref.innerRef,
        props = objectWithoutProperties(_ref, ['css', 'innerRef']);
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Tag, _extends({ ref: innerRef, className: Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])(css$$1)
    }, props));
  };
};
var Div = createPrimitive('div');

// Assistive text to describe visual elements. Hidden for sighted users.
var A11yText = function A11yText(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span', _extends({
    className: Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])({
      border: 0,
      clip: 'rect(1px, 1px, 1px, 1px)',
      height: 1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: 1
    })
  }, props));
};

function ScrollBlock() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    Div,
    {
      className: Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])({ position: 'fixed', left: 0, bottom: 0, right: 0, top: 0 })
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ScrollLock, null)
  );
}

var ScrollCaptor = function (_Component) {
  inherits(ScrollCaptor, _Component);

  function ScrollCaptor() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ScrollCaptor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ScrollCaptor.__proto__ || Object.getPrototypeOf(ScrollCaptor)).call.apply(_ref, [this].concat(args))), _this), _this.isBottom = false, _this.isTop = false, _this.cancelScroll = function (event) {
      event.preventDefault();
      event.stopPropagation();
    }, _this.handleEventDelta = function (event, delta) {
      var _this$props = _this.props,
          onBottomArrive = _this$props.onBottomArrive,
          onBottomLeave = _this$props.onBottomLeave,
          onTopArrive = _this$props.onTopArrive,
          onTopLeave = _this$props.onTopLeave;
      var _this$scrollTarget = _this.scrollTarget,
          scrollTop = _this$scrollTarget.scrollTop,
          scrollHeight = _this$scrollTarget.scrollHeight,
          clientHeight = _this$scrollTarget.clientHeight;

      var target = _this.scrollTarget;
      var isDeltaPositive = delta > 0;
      var availableScroll = scrollHeight - clientHeight - scrollTop;
      var shouldCancelScroll = false;

      // reset bottom/top flags
      if (availableScroll > delta && _this.isBottom) {
        if (onBottomLeave) onBottomLeave(event);
        _this.isBottom = false;
      }
      if (isDeltaPositive && _this.isTop) {
        if (onTopLeave) onTopLeave(event);
        _this.isTop = false;
      }

      // bottom limit
      if (isDeltaPositive && delta > availableScroll) {
        if (onBottomArrive && !_this.isBottom) {
          onBottomArrive(event);
        }
        target.scrollTop = scrollHeight;
        shouldCancelScroll = true;
        _this.isBottom = true;

        // top limit
      } else if (!isDeltaPositive && -delta > scrollTop) {
        if (onTopArrive && !_this.isTop) {
          onTopArrive(event);
        }
        target.scrollTop = 0;
        shouldCancelScroll = true;
        _this.isTop = true;
      }

      // cancel scroll
      if (shouldCancelScroll) {
        _this.cancelScroll(event);
      }
    }, _this.onWheel = function (event) {
      _this.handleEventDelta(event, event.deltaY);
    }, _this.onTouchStart = function (event) {
      // set touch start so we can calculate touchmove delta
      _this.touchStart = event.changedTouches[0].clientY;
    }, _this.onTouchMove = function (event) {
      var deltaY = _this.touchStart - event.changedTouches[0].clientY;
      _this.handleEventDelta(event, deltaY);
    }, _this.getScrollTarget = function (ref) {
      _this.scrollTarget = ref;
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ScrollCaptor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.startListening(this.scrollTarget);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stopListening(this.scrollTarget);
    }
  }, {
    key: 'startListening',
    value: function startListening(el) {
      // bail early if no scroll available
      if (el.scrollHeight <= el.clientHeight) return;

      // all the if statements are to appease Flow 😢
      if (typeof el.addEventListener === 'function') {
        el.addEventListener('wheel', this.onWheel, false);
      }
      if (typeof el.addEventListener === 'function') {
        el.addEventListener('touchstart', this.onTouchStart, false);
      }
      if (typeof el.addEventListener === 'function') {
        el.addEventListener('touchmove', this.onTouchMove, false);
      }
    }
  }, {
    key: 'stopListening',
    value: function stopListening(el) {
      // bail early if no scroll available
      if (el.scrollHeight <= el.clientHeight) return;

      // all the if statements are to appease Flow 😢
      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('wheel', this.onWheel, false);
      }
      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('touchstart', this.onTouchStart, false);
      }
      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('touchmove', this.onTouchMove, false);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        NodeResolver,
        { innerRef: this.getScrollTarget },
        this.props.children
      );
    }
  }]);
  return ScrollCaptor;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var ScrollCaptorSwitch = function (_Component2) {
  inherits(ScrollCaptorSwitch, _Component2);

  function ScrollCaptorSwitch() {
    classCallCheck(this, ScrollCaptorSwitch);
    return possibleConstructorReturn(this, (ScrollCaptorSwitch.__proto__ || Object.getPrototypeOf(ScrollCaptorSwitch)).apply(this, arguments));
  }

  createClass(ScrollCaptorSwitch, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isEnabled = _props.isEnabled,
          props = objectWithoutProperties(_props, ['isEnabled']);

      return isEnabled ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ScrollCaptor, props) : this.props.children;
    }
  }]);
  return ScrollCaptorSwitch;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

ScrollCaptorSwitch.defaultProps = { isEnabled: true };

// ==============================
// NO OP
// ==============================

var noop = function noop() {};

// ==============================
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/
function applyPrefixToName(prefix, name) {
  return name ? prefix + '__' + name : prefix;
}

function classNames(prefix, cssKey, state, className) {
  var arr = [cssKey, className];
  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push('' + applyPrefixToName(prefix, key));
      }
    }
  }

  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
}
// ==============================
// Clean Value
// ==============================

var cleanValue = function cleanValue(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null) return [value];
  return [];
};

// ==============================
// Handle Input Change
// ==============================

function handleInputChange(inputValue, actionMeta, onInputChange) {
  if (onInputChange) {
    var newValue = onInputChange(inputValue, actionMeta);
    if (typeof newValue === 'string') return newValue;
  }
  return inputValue;
}

// ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].includes(el);
}

// Normalized scrollTo & scrollTop
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }
  return el.scrollTop;
}

function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }

  el.scrollTop = top;
}

// Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  var docEl = document.documentElement; // suck it, flow...

  if (style.position === 'fixed') return docEl;

  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);
    if (excludeStaticParent && style.position === 'static') {
      continue;
    }
    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }

  return docEl;
}

// Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/
function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;

  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;

  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);
    if (currentTime < duration) {
      __WEBPACK_IMPORTED_MODULE_3_raf___default()(animateScroll);
    } else {
      callback(element);
    }
  }
  animateScroll();
}

// Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
}

// ==============================
// Get bounding client object
// ==============================

// cannot get keys using array notation with DOMRect
function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}

// ==============================
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
}

// ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    );
  } catch (e) {
    return false;
  }
}

var formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};

var getOptionLabel = function getOptionLabel(option) {
  return option.label;
};

var getOptionValue = function getOptionValue(option) {
  return option.value;
};

var isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};

var borderRadius = 4;

var colors = {
  text: '#222',
  textLight: '#444',
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  danger: '#DE350B',
  dangerLight: '#FFBDAD',

  neutral0: 'hsl(0, 0%, 100%)',
  neutral1: 'hsl(0, 0%, 99%)',
  neutral2: 'hsl(0, 0%, 98%)',
  neutral3: 'hsl(0, 0%, 97%)',
  neutral4: 'hsl(0, 0%, 96%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)',
  neutral100: 'hsl(0, 0%, 0%)',

  neutral1a: 'hsla(0, 0%, 0%, 0.01)',
  neutral2a: 'hsla(0, 0%, 0%, 0.02)',
  neutral3a: 'hsla(0, 0%, 0%, 0.03)',
  neutral4a: 'hsla(0, 0%, 0%, 0.04)',
  neutral5a: 'hsla(0, 0%, 0%, 0.05)',
  neutral10a: 'hsla(0, 0%, 0%, 0.1)',
  neutral20a: 'hsla(0, 0%, 0%, 0.2)',
  neutral30a: 'hsla(0, 0%, 0%, 0.3)',
  neutral40a: 'hsla(0, 0%, 0%, 0.4)',
  neutral50a: 'hsla(0, 0%, 0%, 0.5)',
  neutral60a: 'hsla(0, 0%, 0%, 0.6)',
  neutral70a: 'hsla(0, 0%, 0%, 0.7)',
  neutral80a: 'hsla(0, 0%, 0%, 0.8)',
  neutral90a: 'hsla(0, 0%, 0%, 0.9)'
};

var baseUnit = 4;

var spacing = {
  /* Used to calculate consistent margin/padding on elements */
  baseUnit: baseUnit,
  /* The minimum height of the control */
  controlHeight: 38,
  /* The amount of space between the control and menu */
  menuGutter: baseUnit * 2
};

// ==============================
// Root Container
// ==============================

var containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isRtl = _ref.isRtl;
  return {
    direction: isRtl ? 'rtl' : null,
    pointerEvents: isDisabled ? 'none' : null, // cancel mouse events when disabled
    position: 'relative'
  };
};
var SelectContainer = function SelectContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    _extends({
      className: cx( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])(getStyles('container', props)), {
        '--is-disabled': isDisabled,
        '--is-rtl': isRtl
      }, className)
    }, innerProps),
    children
  );
};

// ==============================
// Value Container
// ==============================

var valueContainerCSS = function valueContainerCSS() {
  return {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: spacing.baseUnit / 2 + 'px ' + spacing.baseUnit * 2 + 'px',
    WebkitOverflowScrolling: 'touch',
    position: 'relative'
  };
};
var ValueContainer = function (_Component) {
  inherits(ValueContainer, _Component);

  function ValueContainer() {
    classCallCheck(this, ValueContainer);
    return possibleConstructorReturn(this, (ValueContainer.__proto__ || Object.getPrototypeOf(ValueContainer)).apply(this, arguments));
  }

  createClass(ValueContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          cx = _props.cx,
          isMulti = _props.isMulti,
          getStyles = _props.getStyles,
          hasValue = _props.hasValue;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: cx( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])(getStyles('valueContainer', this.props)), {
            'value-container': true,
            'value-container--is-multi': isMulti,
            'value-container--has-value': hasValue
          }, className)
        },
        children
      );
    }
  }]);
  return ValueContainer;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

// ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles;


  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: cx( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])(getStyles('indicatorsContainer', props)), {
        'indicators': true
      }, className)
    },
    children
  );
};

// ==============================
// Dropdown & Clear Icons
// ==============================

var Svg = function Svg(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ['size']);
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('svg', _extends({
    height: size,
    width: size,
    viewBox: '0 0 20 20',
    className: /*#__PURE__*/ /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])({
      display: 'inline-block',
      fill: 'currentColor',
      lineHeight: 1,
      stroke: 'currentColor',
      strokeWidth: 0
    })
  }, props));
};

var CrossIcon = function CrossIcon(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    Svg,
    _extends({ size: 20, focusable: 'false', role: 'presentation' }, props),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', { d: 'M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z' })
  );
};
var DownChevron = function DownChevron(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    Svg,
    _extends({ size: 20, focusable: 'false', role: 'presentation' }, props),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', { d: 'M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z' })
  );
};

// ==============================
// Dropdown & Clear Buttons
// ==============================

var baseCSS = function baseCSS(_ref2) {
  var isFocused = _ref2.isFocused;
  return {
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: spacing.baseUnit * 2,
    transition: 'color 150ms',

    ':hover': {
      color: isFocused ? colors.neutral100 : colors.neutral40
    }
  };
};

var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator(props) {
  var _props$children = props.children,
      children = _props$children === undefined ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(DownChevron, null) : _props$children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    _extends({}, innerProps, {
      className: cx( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])(getStyles('dropdownIndicator', props)), {
        'indicator': true,
        'dropdown-indicator': true
      }, className)
    }),
    children
  );
};

var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator(props) {
  var _props$children2 = props.children,
      children = _props$children2 === undefined ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CrossIcon, null) : _props$children2,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    _extends({}, innerProps, {
      className: cx( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])(getStyles('clearIndicator', props)), {
        'indicator': true,
        'clear-indicator': true
      }, className)
    }),
    children
  );
};

// ==============================
// Separator
// ==============================

var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref3) {
  var isDisabled = _ref3.isDisabled;
  return {
    alignSelf: 'stretch',
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: spacing.baseUnit * 2,
    marginTop: spacing.baseUnit * 2,
    width: 1
  };
};

var IndicatorSeparator = function IndicatorSeparator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span', _extends({}, innerProps, {
    className: cx( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])(getStyles('indicatorSeparator', props)), { 'indicator-separator': true }, className)
  }));
};

// ==============================
// Loading
// ==============================

var keyframesName = 'react-select-loading-indicator';

var loadingIndicatorCSS = function loadingIndicatorCSS(_ref4) {
  var isFocused = _ref4.isFocused,
      size = _ref4.size;
  return {
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: spacing.baseUnit * 2,
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  };
};

var LoadingDot = function LoadingDot(_ref5) {
  var color = _ref5.color,
      delay = _ref5.delay,
      offset = _ref5.offset;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span', {
    css: {
      animationDuration: '1s',
      animationDelay: delay + 'ms',
      animationIterationCount: 'infinite',
      animationName: keyframesName,
      animationTimingFunction: 'ease-in-out',
      backgroundColor: color,
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : null,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    }
  });
};

// eslint-disable-next-line no-unused-expressions
Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["b" /* injectGlobal */])('@keyframes ', keyframesName, '{0%,80%,100%{opacity:0;}40%{opacity:1;}};');

var LoadingIndicator = function LoadingIndicator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isFocused = props.isFocused,
      isRtl = props.isRtl;

  var color = isFocused ? colors.text : colors.neutral20;

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    _extends({}, innerProps, {
      className: cx( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])(getStyles('loadingIndicator', props)), {
        'indicator': true,
        'loading-indicator': true
      }, className)
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(LoadingDot, { color: color, delay: 0, offset: isRtl }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(LoadingDot, { color: color, delay: 160, offset: true }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(LoadingDot, { color: color, delay: 320, offset: !isRtl }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      A11yText,
      null,
      'Loading'
    )
  );
};
LoadingIndicator.defaultProps = { size: 4 };

var css$1 = function css$$1(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused;
  return {
    alignItems: 'center',
    backgroundColor: isDisabled ? colors.neutral5 : isFocused ? colors.neutral0 : colors.neutral2,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius: borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? '0 0 0 1px ' + colors.primary : null,
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms',

    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  };
};

var Control = function Control(props) {
  var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      className = props.className,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerProps = props.innerProps;
  var innerRef = innerProps.innerRef,
      rest = objectWithoutProperties(innerProps, ['innerRef']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    _extends({
      ref: innerRef,
      className: cx( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])(getStyles('control', props)), {
        'control': true,
        'control-is-disabled': isDisabled,
        'control-is-focused': isFocused
      }, className)
    }, rest),
    children
  );
};

var groupCSS = function groupCSS() {
  return {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};

var Group = function Group(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      Heading = props.Heading,
      headingProps = props.headingProps,
      label = props.label,
      innerProps = props.innerProps;

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    _extends({
      className: cx( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])(getStyles('group', props)), { 'group': true }, className)
    }, innerProps),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      Heading,
      _extends({ getStyles: getStyles, cx: cx }, headingProps),
      label
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      null,
      children
    )
  );
};

var groupHeadingCSS = function groupHeadingCSS() {
  return {
    color: '#999',
    cursor: 'default',
    display: 'block',
    fontSize: '75%',
    fontWeight: '500',
    marginBottom: '0.25em',
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: 'uppercase'
  };
};

var GroupHeading = function GroupHeading(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      cleanProps = objectWithoutProperties(props, ['className', 'cx', 'getStyles']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', _extends({
    className: cx( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])(getStyles('groupHeading', props)), { 'group-heading': true }, className)
  }, cleanProps));
};

var css$2 = function css$$1(_ref) {
  var isDisabled = _ref.isDisabled;
  return {
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    visibility: isDisabled ? 'hidden' : 'visible',
    color: colors.text
  };
};
var inputStyle = function inputStyle(isHidden) {
  return {
    background: 0,
    border: 0,
    fontSize: 'inherit',
    opacity: isHidden ? 0 : 1,
    outline: 0,
    padding: 0,
    color: 'inherit'
  };
};

var Input$1 = function Input(_ref2) {
  var className = _ref2.className,
      cx = _ref2.cx,
      getStyles = _ref2.getStyles,
      innerRef = _ref2.innerRef,
      isHidden = _ref2.isHidden,
      isDisabled = _ref2.isDisabled,
      props = objectWithoutProperties(_ref2, ['className', 'cx', 'getStyles', 'innerRef', 'isHidden', 'isDisabled']);
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])(getStyles('input', props))
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_input_autosize___default.a, _extends({
      className: cx(null, { 'input': true }, className),
      inputRef: innerRef,
      inputStyle: inputStyle(isHidden),
      disabled: isDisabled
    }, props))
  );
};

// ==============================
// Menu
// ==============================

// Get Menu Placement
// ------------------------------

function getMenuPlacement(_ref) {
  var maxHeight = _ref.maxHeight,
      menuEl = _ref.menuEl,
      minHeight = _ref.minHeight,
      placement = _ref.placement,
      shouldScroll = _ref.shouldScroll,
      isFixedPosition = _ref.isFixedPosition;

  var scrollParent = getScrollParent(menuEl);
  var defaultState = { placement: 'bottom', maxHeight: maxHeight };

  // something went wrong, return default state
  if (!menuEl || !menuEl.offsetParent) return defaultState;

  // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered

  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
      scrollHeight = _scrollParent$getBoun.height;

  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
      menuBottom = _menuEl$getBoundingCl.bottom,
      menuHeight = _menuEl$getBoundingCl.height,
      menuTop = _menuEl$getBoundingCl.top;

  // $FlowFixMe function returns above if there's no offsetParent


  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
      containerTop = _menuEl$offsetParent$.top;

  var viewHeight = window.innerHeight;
  var scrollTop = getScrollTop(scrollParent);
  var gutter = spacing.menuGutter;

  var viewSpaceAbove = containerTop - gutter;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;

  var scrollDown = menuBottom - viewHeight + scrollTop + gutter;
  var scrollUp = scrollTop + menuTop - gutter;
  var scrollDuration = 160;

  switch (placement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return { placement: 'bottom', maxHeight: maxHeight };
      }

      // 2: the menu will fit, if scrolled
      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        return { placement: 'bottom', maxHeight: maxHeight };
      }

      // 3: the menu will fit, if constrained
      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.
        var constrainedHeight = isFixedPosition ? viewSpaceBelow - gutter : scrollSpaceBelow - gutter;

        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      }

      // 4. Forked beviour when there isn't enough space below

      // AUTO: flip the menu, render above
      if (placement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = maxHeight;

        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight = isFixedPosition ? viewSpaceAbove - gutter - spacing.controlHeight : scrollSpaceAbove - gutter - spacing.controlHeight;
        }

        return { placement: 'top', maxHeight: _constrainedHeight };
      }

      // BOTTOM: allow browser to increase scrollable area and immediately set scroll
      if (placement === 'bottom') {
        scrollTo(scrollParent, scrollDown);
        return { placement: 'bottom', maxHeight: maxHeight };
      }
      break;
    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return { placement: 'top', maxHeight: maxHeight };
      }

      // 2: the menu will fit, if scrolled
      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return { placement: 'top', maxHeight: maxHeight };
      }

      // 3: the menu will fit, if constrained
      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = maxHeight;

        // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.
        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - gutter : scrollSpaceAbove - gutter;
        }

        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      }

      // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below
      return { placement: 'bottom', maxHeight: maxHeight };
    default:
      throw new Error('Invalid placement provided "' + placement + '".');
  }

  // fulfil contract with flow: implicit return value of undefined
  return defaultState;
}

// Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = { bottom: 'top', top: 'bottom' };
  return placement ? placementToCSSProp[placement] : 'bottom';
}
var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};

var menuCSS = function menuCSS(_ref2) {
  var _ref3;

  var placement = _ref2.placement;
  return _ref3 = {}, defineProperty(_ref3, alignToControl(placement), '100%'), defineProperty(_ref3, 'backgroundColor', colors.neutral0), defineProperty(_ref3, 'borderRadius', borderRadius), defineProperty(_ref3, 'boxShadow', '0 0 0 1px ' + colors.neutral10a + ', 0 4px 11px ' + colors.neutral10a), defineProperty(_ref3, 'marginBottom', spacing.menuGutter), defineProperty(_ref3, 'marginTop', spacing.menuGutter), defineProperty(_ref3, 'position', 'absolute'), defineProperty(_ref3, 'width', '100%'), defineProperty(_ref3, 'zIndex', 1), _ref3;
};

var Menu = function (_Component) {
  inherits(Menu, _Component);

  function Menu() {
    var _ref4;

    var _temp, _this, _ret;

    classCallCheck(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref4 = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref4, [this].concat(args))), _this), _this.state = {
      maxHeight: _this.props.maxMenuHeight,
      placement: null
    }, _this.getPlacement = function (ref) {
      var _this$props = _this.props,
          minMenuHeight = _this$props.minMenuHeight,
          maxMenuHeight = _this$props.maxMenuHeight,
          menuPlacement = _this$props.menuPlacement,
          menuPosition = _this$props.menuPosition,
          menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView;
      var getPortalPlacement = _this.context.getPortalPlacement;


      if (!ref) return;

      // DO NOT scroll if position is fixed
      var isFixedPosition = menuPosition === 'fixed';
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;

      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: ref,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll: shouldScroll,
        isFixedPosition: isFixedPosition
      });

      if (getPortalPlacement) getPortalPlacement(state);

      _this.setState(state);
    }, _this.getState = function () {
      var menuPlacement = _this.props.menuPlacement;

      var placement = _this.state.placement || coercePlacement(menuPlacement);

      return _extends({}, _this.props, { placement: placement, maxHeight: _this.state.maxHeight });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Menu, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          cx = _props.cx,
          getStyles = _props.getStyles,
          innerProps = _props.innerProps;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        _extends({
          className: cx( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])(getStyles('menu', this.getState())), {
            'menu': true
          }, className),
          ref: this.getPlacement
        }, innerProps),
        children
      );
    }
  }]);
  return Menu;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Menu.contextTypes = {
  getPortalPlacement: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func
};

// ==============================
// Menu List
// ==============================

var menuListCSS = function menuListCSS(_ref5) {
  var maxHeight = _ref5.maxHeight;
  return {
    maxHeight: maxHeight,
    overflowY: 'auto',
    paddingBottom: spacing.baseUnit,
    paddingTop: spacing.baseUnit,
    position: 'relative', // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  };
};
var MenuList = function MenuList(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isMulti = props.isMulti,
      innerProps = props.innerProps;
  var innerRef = innerProps.innerRef,
      rest = objectWithoutProperties(innerProps, ['innerRef']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    _extends({
      className: cx( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])(getStyles('menuList', props)), {
        'menu-list': true,
        'menu-list--is-multi': isMulti
      }, className),
      ref: innerRef
    }, rest),
    children
  );
};
var noticeCSS = function noticeCSS() {
  return {
    color: colors.neutral40,
    padding: spacing.baseUnit * 2 + 'px ' + spacing.baseUnit * 3 + 'px',
    textAlign: 'center'
  };
};
var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;

var NoOptionsMessage = function NoOptionsMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    _extends({
      className: cx( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])(getStyles('noOptionsMessage', props)), {
        'menu-notice': true,
        'menu-notice--no-options': true
      }, className)
    }, innerProps),
    children
  );
};
NoOptionsMessage.defaultProps = {
  children: 'No options'
};

var LoadingMessage = function LoadingMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    _extends({
      className: cx( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])(getStyles('loadingMessage', props)), {
        'menu-notice': true,
        'menu-notice--loading': true
      }, className)
    }, innerProps),
    children
  );
};
LoadingMessage.defaultProps = {
  children: 'Loading...'
};

// ==============================
// Menu Portal
// ==============================

var menuPortalCSS = function menuPortalCSS(_ref6) {
  var rect = _ref6.rect,
      offset = _ref6.offset,
      position = _ref6.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};

var MenuPortal = function (_Component2) {
  inherits(MenuPortal, _Component2);

  function MenuPortal() {
    var _ref7;

    var _temp2, _this2, _ret2;

    classCallCheck(this, MenuPortal);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = possibleConstructorReturn(this, (_ref7 = MenuPortal.__proto__ || Object.getPrototypeOf(MenuPortal)).call.apply(_ref7, [this].concat(args))), _this2), _this2.state = { placement: null }, _this2.getPortalPlacement = function (_ref8) {
      var placement = _ref8.placement;

      var initialPlacement = coercePlacement(_this2.props.menuPlacement);

      // avoid re-renders if the placement has not changed
      if (placement !== initialPlacement) {
        _this2.setState({ placement: placement });
      }
    }, _temp2), possibleConstructorReturn(_this2, _ret2);
  }

  createClass(MenuPortal, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        getPortalPlacement: this.getPortalPlacement
      };
    }

    // callback for occassions where the menu must "flip"

  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          appendTo = _props2.appendTo,
          children = _props2.children,
          controlElement = _props2.controlElement,
          menuPlacement = _props2.menuPlacement,
          position = _props2.menuPosition,
          getStyles = _props2.getStyles;

      var isFixed = position === 'fixed';

      // bail early if required elements aren't present
      if (!appendTo && !isFixed || !controlElement) {
        return null;
      }

      var placement = this.state.placement || coercePlacement(menuPlacement);
      var rect = getBoundingClientObj(controlElement);
      var scrollDistance = isFixed ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      var state = { offset: offset, position: position, rect: rect };

      // same wrapper element whether fixed or portalled
      var menuWrapper = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: /*#__PURE__*/ /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])(getStyles('menuPortal', state))
        },
        children
      );

      return appendTo ? Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["createPortal"])(menuWrapper, appendTo) : menuWrapper;
    }
  }]);
  return MenuPortal;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);
MenuPortal.childContextTypes = {
  getPortalPlacement: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func
};

var multiValueCSS = function multiValueCSS() {
  return {
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    display: 'flex',
    margin: spacing.baseUnit / 2,
    minWidth: 0 // resolves flex/text-overflow bug
  };
};
var multiValueLabelCSS = function multiValueLabelCSS(_ref) {
  var cropWithEllipsis = _ref.cropWithEllipsis;
  return {
    color: colors.text,
    fontSize: '85%',
    overflow: 'hidden',
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis ? 'ellipsis' : null,
    whiteSpace: 'nowrap'
  };
};
var multiValueRemoveCSS = function multiValueRemoveCSS(_ref2) {
  var isFocused = _ref2.isFocused;
  return {
    alignItems: 'center',
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused && colors.dangerLight,
    display: 'flex',
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  };
};

var MultiValueContainer = Div;
var MultiValueLabel = Div;

var MultiValueRemove = function (_Component) {
  inherits(MultiValueRemove, _Component);

  function MultiValueRemove() {
    classCallCheck(this, MultiValueRemove);
    return possibleConstructorReturn(this, (MultiValueRemove.__proto__ || Object.getPrototypeOf(MultiValueRemove)).apply(this, arguments));
  }

  createClass(MultiValueRemove, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          props = objectWithoutProperties(_props, ['children']);

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        Div,
        props,
        children
      );
    }
  }]);
  return MultiValueRemove;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

MultiValueRemove.defaultProps = {
  children: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CrossIcon, { size: 14 })
};

var MultiValue = function (_Component2) {
  inherits(MultiValue, _Component2);

  function MultiValue() {
    classCallCheck(this, MultiValue);
    return possibleConstructorReturn(this, (MultiValue.__proto__ || Object.getPrototypeOf(MultiValue)).apply(this, arguments));
  }

  createClass(MultiValue, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          components = _props2.components,
          cx = _props2.cx,
          getStyles = _props2.getStyles,
          innerProps = _props2.innerProps,
          isDisabled = _props2.isDisabled,
          removeProps = _props2.removeProps;

      var cn = {
        container: cx( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])(getStyles('multiValue', this.props)), {
          'multi-value': true,
          'multi-value--is-disabled': isDisabled
        }, className),
        label: cx( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])(getStyles('multiValueLabel', this.props)), {
          'multi-value__label': true
        }, className),
        remove: cx( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])(getStyles('multiValueRemove', this.props)), {
          'multi-value__remove': true
        }, className)
      };
      var Container = components.Container,
          Label = components.Label,
          Remove = components.Remove;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        Container,
        _extends({
          className: cn.container
        }, innerProps),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          Label,
          { className: cn.label },
          children
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Remove, _extends({ className: cn.remove }, removeProps))
      );
    }
  }]);
  return MultiValue;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

MultiValue.defaultProps = {
  cropWithEllipsis: true
};

var css$3 = function css$$1(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected;
  return {
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    padding: spacing.baseUnit * 2 + 'px ' + spacing.baseUnit * 3 + 'px',
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

    // provide some affordance on touch devices
    ':active': {
      backgroundColor: isSelected ? colors.primary : colors.primary50
    }
  };
};

var Option = function Option(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerProps = props.innerProps;
  var innerRef = innerProps.innerRef,
      rest = objectWithoutProperties(innerProps, ['innerRef']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    _extends({
      ref: innerRef,
      className: cx( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])(getStyles('option', props)), {
        'option': true,
        'option--is-disabled': isDisabled,
        'option--is-focused': isFocused,
        'option--is-selected': isSelected
      }, className)
    }, rest),
    children
  );
};

var css$4 = function css$$1() {
  return {
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var Placeholder = function Placeholder(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    _extends({
      className: cx( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])(getStyles('placeholder', props)), {
        'placeholder': true
      }, className)
    }, innerProps),
    children
  );
};

var css$5 = function css$$1(_ref) {
  var isDisabled = _ref.isDisabled;
  return {
    color: isDisabled ? colors.neutral40 : colors.text,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    maxWidth: 'calc(100% - ' + spacing.baseUnit * 2 + 'px)',
    overflow: 'hidden',
    position: 'absolute',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var SingleValue = function SingleValue(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    _extends({
      className: cx( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["a" /* css */])(getStyles('singleValue', props)), {
        'single-value': true,
        'single-value--is-disabled': isDisabled
      }, className)
    }, innerProps),
    children
  );
};

var components = {
  ClearIndicator: ClearIndicator,
  Control: Control,
  DropdownIndicator: DropdownIndicator,
  DownChevron: DownChevron,
  CrossIcon: CrossIcon,
  Group: Group,
  GroupHeading: GroupHeading,
  IndicatorsContainer: IndicatorsContainer,
  IndicatorSeparator: IndicatorSeparator,
  Input: Input$1,
  LoadingIndicator: LoadingIndicator,
  Menu: Menu,
  MenuList: MenuList,
  MenuPortal: MenuPortal,
  LoadingMessage: LoadingMessage,
  NoOptionsMessage: NoOptionsMessage,
  MultiValue: MultiValue,
  MultiValueContainer: MultiValueContainer,
  MultiValueLabel: MultiValueLabel,
  MultiValueRemove: MultiValueRemove,
  Option: Option,
  Placeholder: Placeholder,
  SelectContainer: SelectContainer,
  SingleValue: SingleValue,
  ValueContainer: ValueContainer
};

var defaultComponents = function defaultComponents(props) {
  return _extends({}, components, props.components);
};

var defaultStyles = {
  clearIndicator: clearIndicatorCSS,
  container: containerCSS,
  control: css$1,
  dropdownIndicator: dropdownIndicatorCSS,
  group: groupCSS,
  groupHeading: groupHeadingCSS,
  indicatorsContainer: indicatorsContainerCSS,
  indicatorSeparator: indicatorSeparatorCSS,
  input: css$2,
  loadingIndicator: loadingIndicatorCSS,
  loadingMessage: loadingMessageCSS,
  menu: menuCSS,
  menuList: menuListCSS,
  menuPortal: menuPortalCSS,
  multiValue: multiValueCSS,
  multiValueLabel: multiValueLabelCSS,
  multiValueRemove: multiValueRemoveCSS,
  noOptionsMessage: noOptionsMessageCSS,
  option: css$3,
  placeholder: css$4,
  singleValue: css$5,
  valueContainer: valueContainerCSS
};

// Merge Utility
// Allows consumers to extend a base Select with additional styles

function mergeStyles(source) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // initialize with source styles
  var styles = _extends({}, source);

  // massage in target styles
  Object.keys(target).forEach(function (key) {
    if (source[key]) {
      styles[key] = function (rsCss, props) {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });

  return styles;
}

var defaultProps = {
  backspaceRemovesValue: true,
  blurInputOnSelect: isTouchCapable(),
  captureMenuScroll: !isTouchCapable(),
  closeMenuOnSelect: true,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel: formatGroupLabel,
  getOptionLabel: getOptionLabel,
  getOptionValue: getOptionValue,
  hideSelectedOptions: true,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !isMobileDevice(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return count + ' result' + (count !== 1 ? 's' : '') + ' available.';
  },
  styles: {},
  tabIndex: '0',
  tabSelectsValue: true
};

var instanceId = 1;

var Select = function (_Component) {
  inherits(Select, _Component);

  function Select(props) {
    classCallCheck(this, Select);

    var _this = possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _initialiseProps.call(_this);

    var value = props.value;

    _this.components = defaultComponents(props);
    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);

    var selectValue = cleanValue(value);
    var menuOptions = _this.buildMenuOptions(props, selectValue);

    _this.state.menuOptions = menuOptions;
    _this.state.selectValue = selectValue;
    return _this;
  } // TODO


  createClass(Select, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.startListeningToTouch();

      if (this.props.autoFocus) {
        this.focusInput();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _props = this.props,
          components$$1 = _props.components,
          options = _props.options,
          value = _props.value,
          inputValue = _props.inputValue;
      // re-cache custom components

      if (nextProps.components !== components$$1) {
        this.components = defaultComponents(nextProps);
      }
      // rebuild the menu options
      if (nextProps.value !== value || nextProps.options !== options || nextProps.inputValue !== inputValue) {
        var _selectValue = cleanValue(nextProps.value);
        var _menuOptions = this.buildMenuOptions(nextProps, _selectValue);
        var _focusedValue = this.getNextFocusedValue(_selectValue);
        var _focusedOption = this.getNextFocusedOption(_menuOptions.focusable);
        this.setState({ menuOptions: _menuOptions, selectValue: _selectValue, focusedOption: _focusedOption, focusedValue: _focusedValue });
      }
      // some updates should toggle the state of the input visibility
      if (this.inputIsHiddenAfterUpdate != null) {
        this.setState({
          inputIsHidden: this.inputIsHiddenAfterUpdate
        });
        delete this.inputIsHiddenAfterUpdate;
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props,
          isDisabled = _props2.isDisabled,
          menuIsOpen = _props2.menuIsOpen;
      var isFocused = this.state.isFocused;


      if (
      // ensure focus is restored correctly when the control becomes enabled
      isFocused && !isDisabled && prevProps.isDisabled ||
      // ensure focus is on the Input when the menu opens
      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      }

      // scroll the focused option into view if necessary
      if (this.menuRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        scrollIntoView(this.menuRef, this.focusedOptionRef);
      }
      this.scrollToFocusedOptionOnUpdate = false;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stopListeningToTouch();
    }

    // ==============================
    // Element Refs
    // ==============================

  }, {
    key: 'onMenuOpen',


    // ==============================
    // Consumer Handlers
    // ==============================

    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: 'onMenuClose',
    value: function onMenuClose() {
      this.onInputChange('', { action: 'menu-close' });
      this.props.onMenuClose();
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    }

    // ==============================
    // Methods
    // ==============================

  }, {
    key: 'focusInput',
    value: function focusInput() {
      if (!this.input) return;
      this.input.focus();
    }
  }, {
    key: 'blurInput',
    value: function blurInput() {
      if (!this.input) return;
      this.input.blur();
    }

    // aliased for consumers

  }, {
    key: 'openMenu',
    value: function openMenu(focusOption) {
      var _state = this.state,
          menuOptions = _state.menuOptions,
          selectValue = _state.selectValue;
      var isMulti = this.props.isMulti;


      var openAtIndex = focusOption === 'first' ? 0 : menuOptions.focusable.length - 1;

      if (!isMulti) {
        var selectedIndex = menuOptions.focusable.indexOf(selectValue[0]);
        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      }

      this.scrollToFocusedOptionOnUpdate = true;
      this.inputIsHiddenAfterUpdate = false;
      this.onMenuOpen();
      this.setState({
        focusedValue: null,
        focusedOption: menuOptions.focusable[openAtIndex]
      });
    }
  }, {
    key: 'focusValue',
    value: function focusValue(direction) {
      var isMulti = this.props.isMulti;
      var _state2 = this.state,
          selectValue = _state2.selectValue,
          focusedValue = _state2.focusedValue;

      // Only multiselects support value focusing

      if (!isMulti) return;

      this.setState({
        focusedOption: null
      });

      var focusedIndex = focusedValue ? selectValue.indexOf(focusedValue) : -1;
      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;

      switch (direction) {
        case 'previous':
          if (focusedIndex === 0) {
            // don't cycle from the start to the end
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            // if nothing is focused, focus the last value first
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }
          break;
        case 'next':
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }
          break;
      }

      this.setState({
        inputIsHidden: nextFocus === -1 ? false : true,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: 'focusOption',
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
      var pageSize = this.props.pageSize;
      var _state3 = this.state,
          focusedOption = _state3.focusedOption,
          menuOptions = _state3.menuOptions;

      var options = menuOptions.focusable;

      if (!options.length) return;
      var nextFocus = 0; // handles 'first'
      var focusedIndex = focusedOption ? options.indexOf(focusedOption) : -1;
      if (direction === 'up') {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
      } else if (direction === 'down') {
        nextFocus = (focusedIndex + 1) % options.length;
      } else if (direction === 'pageup') {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === 'pagedown') {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
      } else if (direction === 'last') {
        nextFocus = options.length - 1;
      }
      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options[nextFocus],
        focusedValue: null
      });
    }
  }, {
    key: 'getCommonProps',


    // ==============================
    // Getters
    // ==============================

    value: function getCommonProps() {
      var clearValue = this.clearValue,
          getStyles = this.getStyles,
          setValue = this.setValue,
          selectOption = this.selectOption,
          props = this.props;
      var className = props.className,
          classNamePrefix = props.classNamePrefix,
          isMulti = props.isMulti,
          isRtl = props.isRtl,
          options = props.options;
      var selectValue = this.state.selectValue;

      var hasValue = this.hasValue();
      var getValue = function getValue() {
        return selectValue;
      };
      var cxPrefix = classNamePrefix;
      if (className && classNamePrefix === undefined) {
        console.warn('\n        Warning: the behaviour of \'className\' has changed between 2.0.0-beta.2 and 2.0.0-beta.3.\n        You can now use className to specify the class name of the outer container, and classNamePrefix to enable our provided BEM class names for internal elements.\n        The className prop will have no effect on internal elements when 2.0.0 is released.\n      ');
        cxPrefix = className;
      }

      var cx = classNames.bind(null, cxPrefix);
      return {
        cx: cx,
        clearValue: clearValue,
        getStyles: getStyles,
        getValue: getValue,
        hasValue: hasValue,
        isMulti: isMulti,
        isRtl: isRtl,
        options: options,
        selectOption: selectOption,
        setValue: setValue,
        selectProps: props
      };
    }
  }, {
    key: 'getNextFocusedValue',
    value: function getNextFocusedValue(nextSelectValue) {
      if (this.clearFocusValueOnUpdate) {
        this.clearFocusValueOnUpdate = false;
        return null;
      }
      var _state4 = this.state,
          focusedValue = _state4.focusedValue,
          lastSelectValue = _state4.selectValue;

      var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);
      if (lastFocusedIndex > -1) {
        var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);
        if (nextFocusedIndex > -1) {
          // the focused value is still in the selectValue, return it
          return focusedValue;
        } else if (lastFocusedIndex < nextSelectValue.length) {
          // the focusedValue is not present in the next selectValue array by
          // reference, so return the new value at the same index
          return nextSelectValue[lastFocusedIndex];
        }
      }
      return null;
    }
  }, {
    key: 'getNextFocusedOption',
    value: function getNextFocusedOption(options) {
      var lastFocusedOption = this.state.focusedOption;

      return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
    }
  }, {
    key: 'getOptionLabel',
    value: function getOptionLabel$$1(data) {
      return this.props.getOptionLabel(data);
    }
  }, {
    key: 'getOptionValue',
    value: function getOptionValue$$1(data) {
      return this.props.getOptionValue(data);
    }
  }, {
    key: 'hasValue',


    // ==============================
    // Helpers
    // ==============================

    value: function hasValue() {
      var selectValue = this.state.selectValue;

      return selectValue.length > 0;
    }
  }, {
    key: 'hasOptions',
    value: function hasOptions() {
      return !!this.state.menuOptions.render.length;
    }
  }, {
    key: 'countOptions',
    value: function countOptions() {
      return this.state.menuOptions.focusable.length;
    }
  }, {
    key: 'isClearable',
    value: function isClearable() {
      var _props3 = this.props,
          isClearable = _props3.isClearable,
          isMulti = _props3.isMulti;

      // single select, by default, IS NOT clearable
      // multi select, by default, IS clearable

      if (isClearable === undefined) return isMulti;

      return isClearable;
    }
  }, {
    key: 'isOptionDisabled',
    value: function isOptionDisabled$$1(option) {
      return typeof this.props.isOptionDisabled === 'function' ? this.props.isOptionDisabled(option) : false;
    }
  }, {
    key: 'isOptionSelected',
    value: function isOptionSelected(option, selectValue) {
      var _this2 = this;

      if (selectValue.indexOf(option) > -1) return true;
      if (typeof this.props.isOptionSelected === 'function') {
        return this.props.isOptionSelected(option, selectValue);
      }
      var candidate = this.getOptionValue(option);
      return selectValue.some(function (i) {
        return _this2.getOptionValue(i) === candidate;
      });
    }
  }, {
    key: 'filterOption',
    value: function filterOption(option, inputValue) {
      return this.props.filterOption ? this.props.filterOption(option, inputValue) : true;
    }
  }, {
    key: 'formatOptionLabel',
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === 'function') {
        var _inputValue = this.props.inputValue;
        var _selectValue2 = this.state.selectValue;

        return this.props.formatOptionLabel(data, {
          context: context,
          inputValue: _inputValue,
          selectValue: _selectValue2
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: 'formatGroupLabel',
    value: function formatGroupLabel$$1(data) {
      return this.props.formatGroupLabel(data);
    }

    // ==============================
    // Mouse Handlers
    // ==============================

  }, {
    key: 'startListeningToTouch',


    // ==============================
    // Touch Handlers
    // ==============================

    value: function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener('touchstart', this.onTouchStart, false);
        document.addEventListener('touchmove', this.onTouchMove, false);
        document.addEventListener('touchend', this.onTouchEnd, false);
      }
    }
  }, {
    key: 'stopListeningToTouch',
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener('touchstart', this.onTouchStart);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
      }
    }

    // ==============================
    // Focus Handlers
    // ==============================

    // ==============================
    // Keyboard Handlers
    // ==============================

  }, {
    key: 'buildMenuOptions',


    // ==============================
    // Menu Options
    // ==============================

    value: function buildMenuOptions(props, selectValue) {
      var _this3 = this;

      var hideSelectedOptions = props.hideSelectedOptions,
          isMulti = props.isMulti,
          _props$inputValue = props.inputValue,
          inputValue = _props$inputValue === undefined ? '' : _props$inputValue,
          options = props.options;


      var toOption = function toOption(option, id) {
        var isDisabled = _this3.isOptionDisabled(option);
        var isSelected = _this3.isOptionSelected(option, selectValue);
        var label = _this3.getOptionLabel(option);
        var value = _this3.getOptionValue(option);

        if (isMulti && hideSelectedOptions && isSelected || !_this3.filterOption({ label: label, value: value, data: option }, inputValue)) {
          return;
        }

        var onHover = isDisabled ? undefined : function () {
          return _this3.onOptionHover(option);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this3.selectOption(option);
        };
        var optionId = _this3.getElementId('option') + '-' + id;

        return {
          innerProps: {
            'aria-selected': isSelected,
            id: optionId,
            onClick: onSelect,
            onMouseMove: onHover,
            onMouseOver: onHover,
            role: 'option',
            tabIndex: -1
          },
          data: option,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: 'option',
          value: value
        };
      };

      return options.reduce(function (acc, item, itemIndex) {
        if (item.options) {
          // TODO needs a tidier implementation
          if (!_this3.hasGroups) _this3.hasGroups = true;

          var items = item.options;

          var children = items.map(function (child, i) {
            var option = toOption(child, itemIndex + '-' + i);
            if (option && !option.isDisabled) acc.focusable.push(child);
            return option;
          }).filter(Boolean);
          if (children.length) {
            var groupId = _this3.getElementId('group') + '-' + itemIndex;
            acc.render.push({
              type: 'group',
              key: groupId,
              data: item,
              options: children
            });
          }
        } else {
          var option = toOption(item, '' + itemIndex);
          if (option) {
            acc.render.push(option);
            if (!option.isDisabled) acc.focusable.push(item);
          }
        }
        return acc;
      }, { render: [], focusable: [] });
    }

    // ==============================
    // Renderers
    // ==============================

  }, {
    key: 'renderScreenReaderStatus',
    value: function renderScreenReaderStatus() {
      var screenReaderStatus = this.props.screenReaderStatus;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        A11yText,
        { 'aria-atomic': 'true', 'aria-live': 'polite', role: 'status' },
        screenReaderStatus({ count: this.countOptions() })
      );
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      var _props4 = this.props,
          isDisabled = _props4.isDisabled,
          isLoading = _props4.isLoading,
          isSearchable = _props4.isSearchable,
          inputId = _props4.inputId,
          inputValue = _props4.inputValue,
          menuIsOpen = _props4.menuIsOpen,
          tabIndex = _props4.tabIndex;
      var Input$$1 = this.components.Input;
      var inputIsHidden = this.state.inputIsHidden;


      var id = inputId || this.getElementId('input');

      if (!isSearchable) {
        // use a dummy input to maintain focus/blur functionality
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(DummyInput, {
          id: id,
          innerRef: this.onInputRef,
          onBlur: this.onInputBlur,
          onChange: noop,
          onFocus: this.onInputFocus,
          readOnly: true,
          tabIndex: tabIndex,
          value: ''
        });
      }

      // aria attributes makes the JSX "noisy", separated for clarity
      var ariaAttributes = {
        'aria-activedescendant': this.getActiveDescendentId(),
        'aria-autocomplete': 'list',
        'aria-busy': isLoading,
        'aria-describedby': this.props['aria-describedby'],
        'aria-expanded': menuIsOpen,
        'aria-haspopup': menuIsOpen,
        'aria-label': this.props['aria-label'],
        'aria-labelledby': this.props['aria-labelledby'],
        'aria-owns': menuIsOpen ? this.getElementId('listbox') : undefined,
        role: 'combobox'
      };

      var cx = this.commonProps.cx;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Input$$1, _extends({
        autoCapitalize: 'none',
        autoComplete: 'off',
        autoCorrect: 'off',
        cx: cx,
        getStyles: this.getStyles,
        id: id,
        innerRef: this.onInputRef,
        isDisabled: isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        spellCheck: 'false',
        tabIndex: tabIndex,
        type: 'text',
        value: inputValue
      }, ariaAttributes));
    }
  }, {
    key: 'renderPlaceholderOrValue',
    value: function renderPlaceholderOrValue() {
      var _this4 = this;

      var _components = this.components,
          MultiValue = _components.MultiValue,
          MultiValueContainer = _components.MultiValueContainer,
          MultiValueLabel = _components.MultiValueLabel,
          MultiValueRemove = _components.MultiValueRemove,
          SingleValue = _components.SingleValue,
          Placeholder = _components.Placeholder;
      var commonProps = this.commonProps;
      var _props5 = this.props,
          controlShouldRenderValue = _props5.controlShouldRenderValue,
          isDisabled = _props5.isDisabled,
          isMulti = _props5.isMulti,
          inputValue = _props5.inputValue,
          placeholder = _props5.placeholder;
      var _state5 = this.state,
          selectValue = _state5.selectValue,
          focusedValue = _state5.focusedValue;


      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          Placeholder,
          _extends({}, commonProps, { key: 'placeholder', isDisabled: isDisabled }),
          placeholder
        );
      }

      if (isMulti) {
        return selectValue.map(function (opt) {
          var isFocused = opt === focusedValue;
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            MultiValue,
            _extends({}, commonProps, {
              components: {
                Container: MultiValueContainer,
                Label: MultiValueLabel,
                Remove: MultiValueRemove
              },
              isFocused: isFocused,
              isDisabled: isDisabled,
              key: _this4.getOptionValue(opt),
              removeProps: {
                onClick: function onClick() {
                  return _this4.removeValue(opt);
                },
                onMouseDown: function onMouseDown(e) {
                  e.preventDefault();
                  e.stopPropagation();
                }
              },
              data: opt
            }),
            _this4.formatOptionLabel(opt, 'value')
          );
        });
      }

      if (inputValue) {
        return null;
      }

      var singleValue = selectValue[0];
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        SingleValue,
        _extends({}, commonProps, { data: singleValue, isDisabled: isDisabled }),
        this.formatOptionLabel(singleValue, 'value')
      );
    }
  }, {
    key: 'renderClearIndicator',
    value: function renderClearIndicator() {
      var ClearIndicator = this.components.ClearIndicator;
      var commonProps = this.commonProps;
      var _props6 = this.props,
          isDisabled = _props6.isDisabled,
          isLoading = _props6.isLoading;
      var isFocused = this.state.isFocused;


      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }

      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        role: 'button'
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ClearIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isFocused: isFocused
      }));
    }
  }, {
    key: 'renderLoadingIndicator',
    value: function renderLoadingIndicator() {
      var LoadingIndicator = this.components.LoadingIndicator;
      var commonProps = this.commonProps;
      var _props7 = this.props,
          isDisabled = _props7.isDisabled,
          isLoading = _props7.isLoading;
      var isFocused = this.state.isFocused;


      if (!LoadingIndicator || !isLoading) return null;

      var innerProps = {
        role: 'presentation'
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(LoadingIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: 'renderIndicatorSeparator',
    value: function renderIndicatorSeparator() {
      var _components2 = this.components,
          DropdownIndicator = _components2.DropdownIndicator,
          IndicatorSeparator = _components2.IndicatorSeparator;

      // separator doesn't make sense without the dropdown indicator

      if (!DropdownIndicator || !IndicatorSeparator) return null;

      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;

      var innerProps = { role: 'presentation' };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(IndicatorSeparator, _extends({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: 'renderDropdownIndicator',
    value: function renderDropdownIndicator() {
      var DropdownIndicator = this.components.DropdownIndicator;

      if (!DropdownIndicator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;


      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        role: 'button'
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(DropdownIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: 'renderMenu',
    value: function renderMenu() {
      var _this5 = this;

      var _components3 = this.components,
          Group = _components3.Group,
          GroupHeading = _components3.GroupHeading,
          Menu = _components3.Menu,
          MenuList = _components3.MenuList,
          MenuPortal = _components3.MenuPortal,
          LoadingMessage = _components3.LoadingMessage,
          NoOptionsMessage = _components3.NoOptionsMessage,
          Option = _components3.Option;
      var commonProps = this.commonProps;
      var _state6 = this.state,
          focusedOption = _state6.focusedOption,
          menuOptions = _state6.menuOptions;
      var _props8 = this.props,
          captureMenuScroll = _props8.captureMenuScroll,
          inputValue = _props8.inputValue,
          isLoading = _props8.isLoading,
          isMulti = _props8.isMulti,
          loadingMessage = _props8.loadingMessage,
          minMenuHeight = _props8.minMenuHeight,
          maxMenuHeight = _props8.maxMenuHeight,
          menuIsOpen = _props8.menuIsOpen,
          menuPlacement = _props8.menuPlacement,
          menuPosition = _props8.menuPosition,
          menuPortalTarget = _props8.menuPortalTarget,
          menuShouldBlockScroll = _props8.menuShouldBlockScroll,
          menuShouldScrollIntoView = _props8.menuShouldScrollIntoView,
          noOptionsMessage = _props8.noOptionsMessage,
          onMenuScrollToTop = _props8.onMenuScrollToTop,
          onMenuScrollToBottom = _props8.onMenuScrollToBottom;


      if (!menuIsOpen) return null;

      // TODO: Internal Option Type here
      var render = function render(props) {
        // for performance, the menu options in state aren't changed when the
        // focused option changes so we calculate additional props based on that
        var isFocused = focusedOption === props.data;
        props.innerProps.innerRef = isFocused ? _this5.onFocusedOptionRef : undefined;

        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          Option,
          _extends({}, commonProps, props, { isFocused: isFocused }),
          _this5.formatOptionLabel(props.data, 'menu')
        );
      };

      var menuUI = void 0;

      if (this.hasOptions()) {
        menuUI = menuOptions.render.map(function (item) {
          if (item.type === 'group') {
            var type = item.type,
                group = objectWithoutProperties(item, ['type']);

            var headingId = item.key + '-heading';

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              Group,
              _extends({}, commonProps, group, {
                Heading: GroupHeading,
                innerProps: {
                  'aria-expanded': true,
                  'aria-labelledby': headingId,
                  role: 'group'
                },
                headingProps: {
                  id: headingId
                },
                label: _this5.formatGroupLabel(item.data)
              }),
              item.options.map(function (option) {
                return render(option);
              })
            );
          } else if (item.type === 'option') {
            return render(item);
          }
        });
      } else if (isLoading) {
        menuUI = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          LoadingMessage,
          commonProps,
          loadingMessage({ inputValue: inputValue })
        );
      } else {
        menuUI = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          NoOptionsMessage,
          commonProps,
          noOptionsMessage({ inputValue: inputValue })
        );
      }

      var menuElement = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        null,
        menuShouldBlockScroll ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ScrollBlock, null) : null,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          Menu,
          _extends({}, commonProps, {
            innerProps: {
              onMouseDown: this.onMenuMouseDown,
              onMouseMove: this.onMenuMouseMove
            },
            isLoading: isLoading,
            minMenuHeight: minMenuHeight,
            maxMenuHeight: maxMenuHeight,
            menuPlacement: menuPlacement,
            menuPosition: menuPosition,
            menuShouldScrollIntoView: menuShouldScrollIntoView
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            ScrollCaptorSwitch,
            {
              isEnabled: captureMenuScroll,
              onTopArrive: onMenuScrollToTop,
              onBottomArrive: onMenuScrollToBottom
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              MenuList,
              _extends({}, commonProps, {
                innerProps: {
                  'aria-multiselectable': isMulti,
                  id: this.getElementId('listbox'),
                  innerRef: this.onMenuRef,
                  role: 'listbox'
                },
                isLoading: isLoading,
                maxHeight: maxMenuHeight
              }),
              menuUI
            )
          )
        )
      );

      // positioning behaviour is almost identical for portalled and fixed,
      // so we use the same component. the actual portalling logic is forked
      // within the component based on `menuPosition`
      return menuPortalTarget || menuPosition === 'fixed' ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        MenuPortal,
        _extends({}, commonProps, {
          appendTo: menuPortalTarget,
          controlElement: this.controlRef,
          menuPlacement: menuPlacement,
          menuPosition: menuPosition
        }),
        menuElement
      ) : menuElement;
    }
  }, {
    key: 'renderFormField',
    value: function renderFormField() {
      var _this6 = this;

      var _props9 = this.props,
          delimiter = _props9.delimiter,
          isDisabled = _props9.isDisabled,
          isMulti = _props9.isMulti,
          name = _props9.name;
      var selectValue = this.state.selectValue;


      if (!name || isDisabled) return;

      if (isMulti) {
        if (delimiter) {
          var _value = selectValue.map(function (opt) {
            return _this6.getOptionValue(opt);
          }).join(delimiter);
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { name: name, type: 'hidden', value: _value });
        } else {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            null,
            selectValue.map(function (opt, i) {
              return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
                key: 'i-' + i,
                name: name,
                type: 'hidden',
                value: _this6.getOptionValue(opt)
              });
            })
          );
        }
      } else {
        var _value2 = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { name: name, type: 'hidden', value: _value2 });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _components4 = this.components,
          Control = _components4.Control,
          IndicatorsContainer = _components4.IndicatorsContainer,
          SelectContainer = _components4.SelectContainer,
          ValueContainer = _components4.ValueContainer;
      var _props10 = this.props,
          className = _props10.className,
          id = _props10.id,
          isDisabled = _props10.isDisabled;
      var isFocused = this.state.isFocused;


      var commonProps = this.commonProps = this.getCommonProps();

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        SelectContainer,
        _extends({}, commonProps, {
          className: className,
          innerProps: {
            id: id,
            onKeyDown: this.onKeyDown
          },
          isDisabled: isDisabled,
          isFocused: isFocused
        }),
        this.renderScreenReaderStatus(),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          Control,
          _extends({}, commonProps, {
            innerProps: {
              innerRef: this.onControlRef,
              onMouseDown: this.onControlMouseDown,
              onTouchEnd: this.onControlTouchEnd
            },
            isDisabled: isDisabled,
            isFocused: isFocused
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            ValueContainer,
            _extends({}, commonProps, { isDisabled: isDisabled }),
            this.renderPlaceholderOrValue(),
            this.renderInput()
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            IndicatorsContainer,
            _extends({}, commonProps, { isDisabled: isDisabled }),
            this.renderClearIndicator(),
            this.renderLoadingIndicator(),
            this.renderIndicatorSeparator(),
            this.renderDropdownIndicator()
          )
        ),
        this.renderMenu(),
        this.renderFormField()
      );
    }
  }]);
  return Select;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Select.defaultProps = defaultProps;

var _initialiseProps = function _initialiseProps() {
  var _this7 = this;

  this.blockOptionHover = false;
  this.clearFocusValueOnUpdate = false;
  this.hasGroups = false;
  this.instancePrefix = '';
  this.initialTouchX = 0;
  this.initialTouchY = 0;
  this.openAfterFocus = false;
  this.scrollToFocusedOptionOnUpdate = false;
  this.state = {
    focusedOption: null,
    focusedValue: null,
    inputIsHidden: false,
    isFocused: false,
    menuOptions: { render: [], focusable: [] },
    selectValue: []
  };

  this.onInputRef = function (ref) {
    _this7.input = ref;
  };

  this.onControlRef = function (ref) {
    _this7.controlRef = ref;
  };

  this.onMenuRef = function (ref) {
    _this7.menuRef = ref;
  };

  this.onFocusedOptionRef = function (ref) {
    _this7.focusedOptionRef = ref;
  };

  this.focus = this.focusInput;
  this.blur = this.blurInput;

  this.setValue = function (newValue) {
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'set-value';
    var _props11 = _this7.props,
        closeMenuOnSelect = _props11.closeMenuOnSelect,
        isMulti = _props11.isMulti,
        onChange = _props11.onChange;

    _this7.onInputChange('', { action: 'set-value' });
    if (closeMenuOnSelect) {
      _this7.inputIsHiddenAfterUpdate = !isMulti;
      _this7.onMenuClose();
    }
    // when the select value should change, we should reset focusedValue
    _this7.clearFocusValueOnUpdate = true;
    onChange(newValue, { action: action });
  };

  this.selectOption = function (newValue) {
    var _props12 = _this7.props,
        blurInputOnSelect = _props12.blurInputOnSelect,
        isMulti = _props12.isMulti;


    if (isMulti) {
      var _selectValue3 = _this7.state.selectValue;

      if (_this7.isOptionSelected(newValue, _selectValue3)) {
        var candidate = _this7.getOptionValue(newValue);
        _this7.setValue(_selectValue3.filter(function (i) {
          return _this7.getOptionValue(i) !== candidate;
        }), 'deselect-option');
      } else {
        _this7.setValue([].concat(toConsumableArray(_selectValue3), [newValue]), 'select-option');
      }
    } else {
      _this7.setValue(newValue, 'select-option');
    }

    if (blurInputOnSelect) {
      _this7.blurInput();
    }
  };

  this.removeValue = function (removedValue) {
    var onChange = _this7.props.onChange;
    var selectValue = _this7.state.selectValue;

    var candidate = _this7.getOptionValue(removedValue);
    onChange(selectValue.filter(function (i) {
      return _this7.getOptionValue(i) !== candidate;
    }), {
      action: 'remove-value',
      removedValue: removedValue
    });
    _this7.focusInput();
  };

  this.clearValue = function () {
    var _props13 = _this7.props,
        isMulti = _props13.isMulti,
        onChange = _props13.onChange;

    onChange(isMulti ? [] : null, { action: 'clear' });
  };

  this.popValue = function () {
    var onChange = _this7.props.onChange;
    var selectValue = _this7.state.selectValue;

    onChange(selectValue.slice(0, selectValue.length - 1), {
      action: 'pop-value',
      removedValue: selectValue[selectValue.length - 1]
    });
  };

  this.getStyles = function (key, props) {
    var base = defaultStyles[key](props);
    base.boxSizing = 'border-box';
    var custom = _this7.props.styles[key];
    return custom ? custom(base, props) : base;
  };

  this.getElementId = function (element) {
    return _this7.instancePrefix + '-' + element;
  };

  this.getActiveDescendentId = function () {
    var menuIsOpen = _this7.props.menuIsOpen;
    var _state7 = _this7.state,
        menuOptions = _state7.menuOptions,
        focusedOption = _state7.focusedOption;


    if (!focusedOption || !menuIsOpen) return undefined;

    var index = menuOptions.focusable.indexOf(focusedOption);
    var option = menuOptions.render[index];

    return option && option.key;
  };

  this.onMenuMouseDown = function (event) {
    if (event.button !== 0) {
      return;
    }
    event.stopPropagation();
    event.preventDefault();
    _this7.focusInput();
  };

  this.onMenuMouseMove = function (event) {
    _this7.blockOptionHover = false;
  };

  this.onControlMouseDown = function (event) {
    var openMenuOnClick = _this7.props.openMenuOnClick;

    if (!_this7.state.isFocused) {
      if (openMenuOnClick) {
        _this7.openAfterFocus = true;
      }
      _this7.focusInput();
    } else if (!_this7.props.menuIsOpen) {
      _this7.openMenu('first');
    } else {
      _this7.onMenuClose();
    }
    // $FlowFixMe HTMLElement type does not have tagName property
    if (event.target.tagName !== 'INPUT') {
      event.preventDefault();
    }
  };

  this.onDropdownIndicatorMouseDown = function (event) {
    // ignore mouse events that weren't triggered by the primary button
    if (event && event.type === 'mousedown' && event.button !== 0) {
      return;
    }
    if (_this7.props.isDisabled) return;
    var _props14 = _this7.props,
        isMulti = _props14.isMulti,
        menuIsOpen = _props14.menuIsOpen;

    _this7.focusInput();
    if (menuIsOpen) {
      _this7.inputIsHiddenAfterUpdate = !isMulti;
      _this7.onMenuClose();
    } else {
      _this7.openMenu('first');
    }
    event.preventDefault();
    event.stopPropagation();
  };

  this.onClearIndicatorMouseDown = function (event) {
    // ignore mouse events that weren't triggered by the primary button
    if (event && event.type === 'mousedown' && event.button !== 0) {
      return;
    }
    _this7.clearValue();
    event.stopPropagation();
    _this7.openAfterFocus = false;
    setTimeout(function () {
      return _this7.focusInput();
    });
  };

  this.onTouchStart = function (_ref2) {
    var _ref2$touches = slicedToArray(_ref2.touches, 1),
        touch = _ref2$touches[0];

    _this7.initialTouchX = touch.clientX;
    _this7.initialTouchY = touch.clientY;
    _this7.userIsDragging = false;
  };

  this.onTouchMove = function (_ref3) {
    var _ref3$touches = slicedToArray(_ref3.touches, 1),
        touch = _ref3$touches[0];

    var deltaX = Math.abs(touch.clientX - _this7.initialTouchX);
    var deltaY = Math.abs(touch.clientY - _this7.initialTouchY);
    var moveThreshold = 5;

    _this7.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
  };

  this.onTouchEnd = function (event) {
    if (_this7.userIsDragging) return;

    // close the menu if the user taps outside
    if (_this7.controlRef && !_this7.controlRef.contains(event.target) && _this7.menuRef && !_this7.menuRef.contains(event.target)) {
      _this7.blurInput();
    }

    // reset move vars
    _this7.initialTouchX = 0;
    _this7.initialTouchY = 0;
  };

  this.onControlTouchEnd = function (event) {
    if (_this7.userIsDragging) return;

    _this7.onControlMouseDown(event);
  };

  this.onClearIndicatorTouchEnd = function (event) {
    if (_this7.userIsDragging) return;

    _this7.onClearIndicatorMouseDown(event);
  };

  this.onDropdownIndicatorTouchEnd = function (event) {
    if (_this7.userIsDragging) return;

    _this7.onDropdownIndicatorMouseDown(event);
  };

  this.handleInputChange = function (event) {
    var inputValue = event.currentTarget.value;
    _this7.inputIsHiddenAfterUpdate = false;
    _this7.onInputChange(inputValue, { action: 'input-change' });
    _this7.onMenuOpen();
  };

  this.onInputFocus = function (event) {
    if (_this7.props.onFocus) {
      _this7.props.onFocus(event);
    }
    _this7.inputIsHiddenAfterUpdate = false;
    _this7.setState({
      isFocused: true
    });
    if (_this7.openAfterFocus || _this7.props.openMenuOnFocus) {
      _this7.openMenu('first');
    }
    _this7.openAfterFocus = false;
  };

  this.onInputBlur = function (event) {
    if (_this7.props.onBlur) {
      _this7.props.onBlur(event);
    }
    _this7.onInputChange('', { action: 'input-blur' });
    _this7.onMenuClose();
    _this7.setState({
      focusedValue: null,
      isFocused: false
    });
  };

  this.onOptionHover = function (focusedOption) {
    if (_this7.blockOptionHover || _this7.state.focusedOption === focusedOption) {
      return;
    }
    _this7.setState({ focusedOption: focusedOption });
  };

  this.onKeyDown = function (event) {
    var _props15 = _this7.props,
        isMulti = _props15.isMulti,
        backspaceRemovesValue = _props15.backspaceRemovesValue,
        escapeClearsValue = _props15.escapeClearsValue,
        inputValue = _props15.inputValue,
        isClearable = _props15.isClearable,
        isDisabled = _props15.isDisabled,
        menuIsOpen = _props15.menuIsOpen,
        onKeyDown = _props15.onKeyDown,
        tabSelectsValue = _props15.tabSelectsValue,
        openMenuOnFocus = _props15.openMenuOnFocus;
    var _state8 = _this7.state,
        focusedOption = _state8.focusedOption,
        focusedValue = _state8.focusedValue,
        selectValue = _state8.selectValue;


    if (isDisabled) return;

    if (typeof onKeyDown === 'function') {
      onKeyDown(event);
      if (event.defaultPrevented) {
        return;
      }
    }

    // Block option hover events when the user has just pressed a key
    _this7.blockOptionHover = true;
    switch (event.key) {
      case 'ArrowLeft':
        if (!isMulti || inputValue) return;
        _this7.focusValue('previous');
        break;
      case 'ArrowRight':
        if (!isMulti || inputValue) return;
        _this7.focusValue('next');
        break;
      case 'Backspace':
        if (inputValue) return;
        if (focusedValue) {
          _this7.removeValue(focusedValue);
        } else {
          if (!backspaceRemovesValue) return;
          _this7.popValue();
        }
        break;
      case 'Tab':
        if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption ||
        // don't capture the event if the menu opens on focus and the focused
        // option is already selected; it breaks the flow of navigation
        openMenuOnFocus && _this7.isOptionSelected(focusedOption, selectValue)) {
          return;
        }
        _this7.selectOption(focusedOption);
        break;
      case 'Enter':
        if (menuIsOpen) {
          if (!focusedOption) return;
          _this7.selectOption(focusedOption);
        } else {
          _this7.focusOption('first');
        }
        break;
      case 'Escape':
        if (menuIsOpen) {
          _this7.inputIsHiddenAfterUpdate = false;
          _this7.onInputChange('', { action: 'menu-close' });
          _this7.onMenuClose();
        } else if (isClearable && escapeClearsValue) {
          _this7.clearValue();
        }
        break;
      case ' ':
        // space
        if (inputValue) {
          return;
        }
        if (!menuIsOpen) {
          _this7.openMenu('first');
          break;
        }
        if (!focusedOption) return;
        _this7.selectOption(focusedOption);
        break;
      case 'ArrowUp':
        if (menuIsOpen) {
          _this7.focusOption('up');
        } else {
          _this7.openMenu('last');
        }
        break;
      case 'ArrowDown':
        if (menuIsOpen) {
          _this7.focusOption('down');
        } else {
          _this7.openMenu('first');
        }
        break;
      case 'PageUp':
        if (!menuIsOpen) return;
        _this7.focusOption('pageup');
        break;
      case 'PageDown':
        if (!menuIsOpen) return;
        _this7.focusOption('pagedown');
        break;
      case 'Home':
        if (!menuIsOpen) return;
        _this7.focusOption('first');
        break;
      case 'End':
        if (!menuIsOpen) return;
        _this7.focusOption('last');
        break;
      default:
        return;
    }
    event.preventDefault();
  };
};

var manageState = function manageState(SelectComponent) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    inherits(StateManager, _Component);

    function StateManager() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, StateManager);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = StateManager.__proto__ || Object.getPrototypeOf(StateManager)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        inputValue: _this.props.inputValue !== undefined ? _this.props.inputValue : _this.props.defaultInputValue,
        menuIsOpen: _this.props.menuIsOpen !== undefined ? _this.props.menuIsOpen : _this.props.defaultMenuIsOpen,
        value: _this.props.value !== undefined ? _this.props.value : _this.props.defaultValue
      }, _this.onChange = function (value, actionMeta) {
        _this.callProp('onChange', value, actionMeta);
        _this.setState({ value: value });
      }, _this.onInputChange = function (value, actionMeta) {
        // TODO: for backwards compatibility, we allow the prop to return a new
        // value, but now inputValue is a controllable prop we probably shouldn't
        var newValue = _this.callProp('onInputChange', value, actionMeta);
        _this.setState({
          inputValue: newValue !== undefined ? newValue : value
        });
      }, _this.onMenuOpen = function () {
        _this.callProp('onMenuOpen');
        _this.setState({ menuIsOpen: true });
      }, _this.onMenuClose = function () {
        _this.callProp('onMenuClose');
        _this.setState({ menuIsOpen: false });
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(StateManager, [{
      key: 'focus',
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: 'blur',
      value: function blur() {
        this.select.blur();
      }
    }, {
      key: 'getProp',
      value: function getProp(key) {
        return this.props[key] !== undefined ? this.props[key] : this.state[key];
      }
    }, {
      key: 'callProp',
      value: function callProp(name) {
        if (typeof this.props[name] === 'function') {
          var _props;

          for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          return (_props = this.props)[name].apply(_props, toConsumableArray(args));
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(SelectComponent, _extends({}, this.props, {
          ref: function ref(_ref2) {
            _this2.select = _ref2;
          },
          inputValue: this.getProp('inputValue'),
          menuIsOpen: this.getProp('menuIsOpen'),
          onChange: this.onChange,
          onInputChange: this.onInputChange,
          onMenuClose: this.onMenuClose,
          onMenuOpen: this.onMenuOpen,
          value: this.getProp('value')
        }));
      }
    }]);
    return StateManager;
  }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]), _class.defaultProps = {
    defaultInputValue: '',
    defaultMenuIsOpen: false,
    defaultValue: null
  }, _temp2;
};

var defaultProps$1 = {
  cacheOptions: false,
  defaultOptions: false
};

var makeAsyncSelect = function makeAsyncSelect(SelectComponent) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    inherits(Async, _Component);

    function Async(props) {
      classCallCheck(this, Async);

      var _this = possibleConstructorReturn(this, (Async.__proto__ || Object.getPrototypeOf(Async)).call(this));

      _this.mounted = false;
      _this.optionsCache = {};

      _this.handleInputChange = function (newValue, actionMeta) {
        var _this$props = _this.props,
            cacheOptions = _this$props.cacheOptions,
            onInputChange = _this$props.onInputChange;
        // TODO

        var inputValue = handleInputChange(newValue, actionMeta, onInputChange);
        if (!inputValue) {
          delete _this.lastRequest;
          _this.setState({
            inputValue: '',
            loadedInputValue: '',
            loadedOptions: [],
            isLoading: false,
            passEmptyOptions: false
          });
          return;
        }
        if (cacheOptions && _this.optionsCache[inputValue]) {
          _this.setState({
            inputValue: inputValue,
            loadedInputValue: inputValue,
            loadedOptions: _this.optionsCache[inputValue],
            isLoading: false,
            passEmptyOptions: false
          });
        } else {
          var request = _this.lastRequest = {};
          _this.setState({
            inputValue: inputValue,
            isLoading: true,
            passEmptyOptions: !_this.state.loadedInputValue
          }, function () {
            _this.loadOptions(inputValue, function (options) {
              if (!_this.mounted) return;
              if (options) {
                _this.optionsCache[inputValue] = options;
              }
              if (request !== _this.lastRequest) return;
              delete _this.lastRequest;
              _this.setState({
                isLoading: false,
                loadedInputValue: inputValue,
                loadedOptions: options || [],
                passEmptyOptions: false
              });
            });
          });
        }
        return inputValue;
      };

      _this.state = {
        defaultOptions: Array.isArray(props.defaultOptions) ? props.defaultOptions : undefined,
        inputValue: '',
        isLoading: props.defaultOptions === true ? true : false,
        loadedOptions: [],
        passEmptyOptions: false
      };
      return _this;
    }

    createClass(Async, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        this.mounted = true;
        var defaultOptions = this.props.defaultOptions;

        if (defaultOptions === true) {
          this.loadOptions('', function (options) {
            if (!_this2.mounted) return;
            var isLoading = !!_this2.lastRequest;
            _this2.setState({ defaultOptions: options || [], isLoading: isLoading });
          });
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        // if the cacheOptions prop changes, clear the cache
        if (nextProps.cacheOptions !== this.props.cacheOptions) {
          this.optionsCache = {};
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.mounted = false;
      }
    }, {
      key: 'focus',
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: 'blur',
      value: function blur() {
        this.select.blur();
      }
    }, {
      key: 'loadOptions',
      value: function loadOptions(inputValue, callback) {
        var loadOptions = this.props.loadOptions;

        if (!loadOptions) return callback();
        var loader = loadOptions(inputValue, callback);
        if (loader && typeof loader.then === 'function') {
          loader.then(callback, function () {
            return callback();
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var _props = this.props,
            loadOptions = _props.loadOptions,
            props = objectWithoutProperties(_props, ['loadOptions']);
        var _state = this.state,
            defaultOptions = _state.defaultOptions,
            inputValue = _state.inputValue,
            isLoading = _state.isLoading,
            loadedInputValue = _state.loadedInputValue,
            loadedOptions = _state.loadedOptions,
            passEmptyOptions = _state.passEmptyOptions;

        var options = passEmptyOptions ? [] : inputValue && loadedInputValue ? loadedOptions : defaultOptions || [];
        return (
          // $FlowFixMe
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(SelectComponent, _extends({}, props, {
            ref: function ref(_ref) {
              _this3.select = _ref;
            },
            options: options,
            filterOption: null,
            isLoading: isLoading,
            onInputChange: this.handleInputChange
          }))
        );
      }
    }]);
    return Async;
  }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]), _class.defaultProps = defaultProps$1, _temp;
};
var Async = makeAsyncSelect(manageState(Select));

var compareOption = function compareOption(inputValue, option) {
  var candidate = inputValue.toLowerCase();
  return option.value.toLowerCase() === candidate || option.label.toLowerCase() === candidate;
};

var builtins = {
  formatCreateLabel: function formatCreateLabel(inputValue) {
    return 'Create "' + inputValue + '"';
  },
  isValidNewOption: function isValidNewOption(inputValue, selectValue, selectOptions) {
    return !(!inputValue || selectValue.some(function (option) {
      return compareOption(inputValue, option);
    }) || selectOptions.some(function (option) {
      return compareOption(inputValue, option);
    }));
  },
  getNewOptionData: function getNewOptionData(inputValue, optionLabel) {
    return {
      label: optionLabel,
      value: inputValue,
      __isNew__: true
    };
  }
};

var defaultProps$2 = _extends({
  allowCreateWhileLoading: false,
  createOptionPosition: 'last'
}, builtins);

var makeCreatableSelect = function makeCreatableSelect(SelectComponent) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    inherits(Creatable, _Component);

    function Creatable(props) {
      classCallCheck(this, Creatable);

      var _this = possibleConstructorReturn(this, (Creatable.__proto__ || Object.getPrototypeOf(Creatable)).call(this, props));

      _this.onChange = function (newValue, actionMeta) {
        var _this$props = _this.props,
            getNewOptionData = _this$props.getNewOptionData,
            inputValue = _this$props.inputValue,
            isMulti = _this$props.isMulti,
            onChange = _this$props.onChange,
            onCreateOption = _this$props.onCreateOption,
            value = _this$props.value;

        if (actionMeta.action !== 'select-option') {
          return onChange(newValue, actionMeta);
        }
        var newOption = _this.state.newOption;

        var valueArray = Array.isArray(newValue) ? newValue : [newValue];

        if (valueArray[valueArray.length - 1] === newOption) {
          if (onCreateOption) onCreateOption(inputValue);else {
            var newOptionData = getNewOptionData(inputValue, inputValue);
            var newActionMeta = { action: 'create-option' };
            if (isMulti) {
              onChange([].concat(toConsumableArray(cleanValue(value)), [newOptionData]), newActionMeta);
            } else {
              onChange(newOptionData, newActionMeta);
            }
          }
          return;
        }
        onChange(newValue, actionMeta);
      };

      var options = props.options || [];
      _this.state = {
        newOption: undefined,
        options: options
      };
      return _this;
    }

    createClass(Creatable, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var allowCreateWhileLoading = nextProps.allowCreateWhileLoading,
            createOptionPosition = nextProps.createOptionPosition,
            formatCreateLabel = nextProps.formatCreateLabel,
            getNewOptionData = nextProps.getNewOptionData,
            inputValue = nextProps.inputValue,
            isLoading = nextProps.isLoading,
            isValidNewOption = nextProps.isValidNewOption,
            value = nextProps.value;

        var options = nextProps.options || [];
        var newOption = this.state.newOption;

        if (isValidNewOption(inputValue, cleanValue(value), options)) {
          newOption = getNewOptionData(inputValue, formatCreateLabel(inputValue));
        } else {
          newOption = undefined;
        }
        this.setState({
          newOption: newOption,
          options: (allowCreateWhileLoading || !isLoading) && newOption ? createOptionPosition === 'first' ? [newOption].concat(toConsumableArray(options)) : [].concat(toConsumableArray(options), [newOption]) : options
        });
      }
    }, {
      key: 'focus',
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: 'blur',
      value: function blur() {
        this.select.blur();
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var props = objectWithoutProperties(this.props, []);
        var options = this.state.options;

        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(SelectComponent, _extends({}, props, {
          ref: function ref(_ref) {
            _this2.select = _ref;
          },
          options: options,
          onChange: this.onChange
        }));
      }
    }]);
    return Creatable;
  }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]), _class.defaultProps = defaultProps$2, _temp;
};
var Creatable = manageState(makeCreatableSelect(Select));

var AsyncCreatable = makeAsyncSelect(manageState(makeCreatableSelect(Select)));

var index = manageState(Select);

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "./node_modules/stylis-rule-sheet/index.js":
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		typeof define === 'function' && define['amd'] ? define(factory()) :
			(window['stylisRuleSheet'] = factory())
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),

/***/ "./src/assets/icons/icon-plus.svg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__("./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__("./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "icon-plus",
  "use": "icon-plus-usage",
  "viewBox": "0 0 32 32",
  "content": "<symbol viewBox=\"0 0 32 32\" id=\"icon-plus\">\n    <defs>\n        <path d=\"M14,1.99853516 C14,1.99853516 14,-9.09739631e-13 16,-4.54747351e-13 C18,-1.00974196e-28 18,1.99853516 18,1.99853516 L18,14 L30,14 C30,14 32,13.9985352 32,16 C32,18.0014648 30,18 30,18 L18,18 L18,30 C18,30 18,32 16,32 C14,32 14,30 14,30 L14,18 L2,18 C2,18 -8.77520279e-13,18 -8.77520279e-13,15.9992676 C-8.77397769e-13,13.9985352 2,14 2,14 L14,14 L14,1.99853516 Z\" id=\"icon-plus_path-1\" />\n    </defs>\n    <g id=\"icon-plus_icons/32/plus\" stroke=\"none\" stroke-width=\"1\" fill-rule=\"evenodd\">\n        <mask id=\"icon-plus_mask-2\">\n            <use xlink:href=\"#icon-plus_path-1\" />\n        </mask>\n        <use id=\"icon-plus_Mask\" xlink:href=\"#icon-plus_path-1\" />\n    </g>\n</symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./src/assets/images/icon-add-service.svg":
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

/***/ }),

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

var _iconPlus = __webpack_require__("./src/assets/icons/icon-plus.svg");

var _iconPlus2 = _interopRequireDefault(_iconPlus);

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
          redirecting ? _react2.default.createElement(_Spinner2.default, { color: 'grey', size: 'xlarge' }) : _react2.default.createElement(_Icon2.default, { className: 'item-icon', icon: _iconPlus2.default })
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

/***/ }),

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

      var displayName = app.name_prefix ? app.name_prefix + ' ' + app.name : app.name;
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
              alt: t('app.logo.alt', { name: displayName }),
              app: app,
              fetchIcon: fetchIcon(client)
            })
          )
        ),
        _react2.default.createElement(
          'h3',
          { className: 'item-title' },
          displayName
        )
      );
    }
  }]);

  return AppTile;
}(_react.Component);

exports.default = (0, _I18n.translate)()(AppTile);

/***/ }),

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

/***/ }),

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
          { className: 'col-picture-for-emtpy-list' },
          _react2.default.createElement('img', {
            'data-tutorial': 'empty-view',
            src: _connectedAccounts2.default,
            className: 'col-picture-for-emtpy-list--img',
            alt: t('connector.empty')
          }),
          _react2.default.createElement(
            'div',
            null,
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
//# sourceMappingURL=0.8b22b0db5d5214b3f8bc.hot-update.js.map