webpackHotUpdate(0,{

/***/ "./src/lib/tutorial.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTutorial = isTutorial;
exports.display = display;

var _intro = __webpack_require__("./node_modules/intro.js/intro.js");

var _tracker = __webpack_require__("./node_modules/cozy-ui/react/helpers/tracker.jsx");

function isTutorial() {
  return window.location.pathname.endsWith('/intro');
}

function display(t) {
  var isEmptyView = !!document.querySelectorAll('[data-tutorial=empty-view]').length;
  var trackerInstance = (0, _tracker.getTracker)();
  var shouldTrackTutorial = (0, _tracker.shouldEnableTracking)() && trackerInstance;
  var pageURLsForTracking = ['tutorial/automate', 'tutorial/apps', 'tutorial/complete'];
  var tutorial = (0, _intro.introJs)();
  tutorial.setOptions({
    overlayOpacity: 0.75,
    showBullets: false,
    hidePrev: true,
    hideNext: true,
    exitOnEsc: false,
    exitOnOverlayClick: false,
    disableInteraction: true,
    doneLabel: '' + t('tutorial.menu_apps.button'),
    nextLabel: '' + t('tutorial.cozy_collect.button'),
    steps: [{
      element: isEmptyView ? document.querySelectorAll('[data-tutorial=empty-view]')[0] : document.querySelectorAll('[data-tutorial=add-service]')[0],
      intro: '<h1>' + t('tutorial.cozy_collect.title') + '</h1><div>' + t('tutorial.cozy_collect.text') + '</div>',
      tooltipClass: isEmptyView ? 'tooltipEmptyBottom' : 'tooltipBottom',
      position: 'bottom'
    }, {
      element: cozyBarMenuButton,
      intro: '<h1>' + t('tutorial.menu_apps.title') + '</h1><div>' + t('tutorial.menu_apps.text') + '</div>',
      tooltipClass: 'tooltipApps',
      position: 'bottom'
    }]
  }).onafterchange(function (targetElement) {
    if (shouldTrackTutorial) {
      var stepIndex = void 0;
      var steps = tutorial._options.steps;
      for (var i = 0, l = steps.length; i < l; ++i) {
        if (steps[i].element === targetElement) {
          stepIndex = i;
          break;
        }
      }

      var trackingURL = pageURLsForTracking[stepIndex];
      trackerInstance.push(['setCustomUrl', trackingURL]);
      trackerInstance.push(['trackPageView']);
    }

    // The intro.js button for the last step is hidden, so we need to show it when we arrive on it
    var doneButton = document.querySelectorAll('.introjs-donebutton')[0];
    if (!doneButton) return; // step 1, no done button yet

    if (targetElement.className === cozyBarMenuButton.className) {
      doneButton.classList.remove('introjs-skipbutton');
    } else {
      doneButton.classList.add('introjs-skipbutton');
    }
  }).oncomplete(function () {
    if (shouldTrackTutorial) {
      trackerInstance.push(['setCustomUrl', pageURLsForTracking[pageURLsForTracking.length - 1]]);
      trackerInstance.push(['trackPageView']);
    }

    // When a click occurs on the last tutorial button, it seems that there
    // is some kind of conflict or event capture that block the click() call
    // on cozyBarMenuButton. So we must delay a little bit this call. It is
    // really dirty and hackish and we should instead call directly a method
    // on the Cozy-Bar to show the app panel.
    setTimeout(function () {
      return cozyBarMenuButton.click();
    }, 10);
    window.location.hash = '#/connected';
  }).start();
  var clickZone = '.introjs-disableInteraction, .introjs-overlay, .introjs-tooltiptext, .introjs-tooltipbuttons';
  var clickAction = function clickAction(e) {
    if (e.target.tagName !== 'A') {
      e.stopPropagation();
      tutorial.nextStep();
    }
  };
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = document.querySelectorAll(clickZone)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var elem = _step.value;

      elem.onclick = clickAction;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/***/ })

})
//# sourceMappingURL=0.15b1fb349d2611fb141f.hot-update.js.map