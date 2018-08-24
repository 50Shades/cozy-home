webpackHotUpdate(1,{

/***/ "./src/assets/sprites recursive ^\\.\\/icon\\-.*\\.svg$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./icon-activity.svg": "./src/assets/sprites/icon-activity.svg",
	"./icon-appointment.svg": "./src/assets/sprites/icon-appointment.svg",
	"./icon-arrow-left.svg": "./src/assets/sprites/icon-arrow-left.svg",
	"./icon-bankAccounts.svg": "./src/assets/sprites/icon-bankAccounts.svg",
	"./icon-bankTransactions.svg": "./src/assets/sprites/icon-bankTransactions.svg",
	"./icon-bill.svg": "./src/assets/sprites/icon-bill.svg",
	"./icon-bloodPressure.svg": "./src/assets/sprites/icon-bloodPressure.svg",
	"./icon-calendar.svg": "./src/assets/sprites/icon-calendar.svg",
	"./icon-call-log.svg": "./src/assets/sprites/icon-call-log.svg",
	"./icon-categories-active.svg": "./src/assets/sprites/icon-categories-active.svg",
	"./icon-categories.svg": "./src/assets/sprites/icon-categories.svg",
	"./icon-certificate.svg": "./src/assets/sprites/icon-certificate.svg",
	"./icon-check.svg": "./src/assets/sprites/icon-check.svg",
	"./icon-commit.svg": "./src/assets/sprites/icon-commit.svg",
	"./icon-consumption.svg": "./src/assets/sprites/icon-consumption.svg",
	"./icon-contact.svg": "./src/assets/sprites/icon-contact.svg",
	"./icon-contract.svg": "./src/assets/sprites/icon-contract.svg",
	"./icon-courseMaterial.svg": "./src/assets/sprites/icon-courseMaterial.svg",
	"./icon-dashboard.svg": "./src/assets/sprites/icon-dashboard.svg",
	"./icon-document.svg": "./src/assets/sprites/icon-document.svg",
	"./icon-event.svg": "./src/assets/sprites/icon-event.svg",
	"./icon-fallback.svg": "./src/assets/sprites/icon-fallback.svg",
	"./icon-family.svg": "./src/assets/sprites/icon-family.svg",
	"./icon-files-pen.svg": "./src/assets/sprites/icon-files-pen.svg",
	"./icon-forbidden.svg": "./src/assets/sprites/icon-forbidden.svg",
	"./icon-geolocation.svg": "./src/assets/sprites/icon-geolocation.svg",
	"./icon-geopoint.svg": "./src/assets/sprites/icon-geopoint.svg",
	"./icon-graduated.svg": "./src/assets/sprites/icon-graduated.svg",
	"./icon-heartbeat.svg": "./src/assets/sprites/icon-heartbeat.svg",
	"./icon-home.svg": "./src/assets/sprites/icon-home.svg",
	"./icon-money.svg": "./src/assets/sprites/icon-money.svg",
	"./icon-movies.svg": "./src/assets/sprites/icon-movies.svg",
	"./icon-new.svg": "./src/assets/sprites/icon-new.svg",
	"./icon-phonecommunicationlog.svg": "./src/assets/sprites/icon-phonecommunicationlog.svg",
	"./icon-pin-active.svg": "./src/assets/sprites/icon-pin-active.svg",
	"./icon-pin.svg": "./src/assets/sprites/icon-pin.svg",
	"./icon-podcast.svg": "./src/assets/sprites/icon-podcast.svg",
	"./icon-profile.svg": "./src/assets/sprites/icon-profile.svg",
	"./icon-refund.svg": "./src/assets/sprites/icon-refund.svg",
	"./icon-sinister.svg": "./src/assets/sprites/icon-sinister.svg",
	"./icon-sleepTime.svg": "./src/assets/sprites/icon-sleepTime.svg",
	"./icon-stepsNumber.svg": "./src/assets/sprites/icon-stepsNumber.svg",
	"./icon-sync.svg": "./src/assets/sprites/icon-sync.svg",
	"./icon-temperature.svg": "./src/assets/sprites/icon-temperature.svg",
	"./icon-travelDate.svg": "./src/assets/sprites/icon-travelDate.svg",
	"./icon-tweet.svg": "./src/assets/sprites/icon-tweet.svg",
	"./icon-videostream.svg": "./src/assets/sprites/icon-videostream.svg",
	"./icon-warning.svg": "./src/assets/sprites/icon-warning.svg",
	"./icon-waves.svg": "./src/assets/sprites/icon-waves.svg",
	"./icon-weight.svg": "./src/assets/sprites/icon-weight.svg"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/sprites recursive ^\\.\\/icon\\-.*\\.svg$";

/***/ }),

/***/ "./src/ducks/connections/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isConnectionRunning = exports.isConnectionEnqueued = exports.isConnectionDeleting = exports.isConnectionConnected = exports.isCreatingConnection = exports.getTriggerLastSuccess = exports.getTriggerIdByKonnectorAndAccount = exports.getTriggerAccount = exports.getCreatedAccount = exports.getConnectionError = exports.getQueue = exports.getLastSyncDate = exports.getFirstUserError = exports.getFirstError = exports.getConnectionsByKonnector = exports.launchTriggerAndQueue = exports.deleteConnection = exports.endConnectionCreation = exports.startConnectionCreation = exports.updateConnectionError = exports.purgeQueue = exports.enqueueConnection = exports.createConnection = exports.END_CONNECTION_CREATION = exports.START_CONNECTION_CREATION = exports.UPDATE_CONNECTION_ERROR = exports.UPDATE_CONNECTION_RUNNING_STATUS = exports.RECEIVE_NEW_DOCUMENT = exports.RECEIVE_DATA = exports.PURGE_QUEUE = exports.LAUNCH_TRIGGER = exports.ENQUEUE_CONNECTION = exports.DELETE_CONNECTION = exports.CONNECTION_DELETED = exports.CREATE_CONNECTION = exports.DEFAULT_QUEUE_DELAY = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = __webpack_require__("./node_modules/redux/es/index.js");

var _moment = __webpack_require__("./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _icons = __webpack_require__("./src/lib/icons.js");

var _konnectors = __webpack_require__("./src/lib/konnectors.js");

var _jobs = __webpack_require__("./src/ducks/jobs/index.js");

var _triggers = __webpack_require__("./src/ducks/triggers/index.js");

var _accounts = __webpack_require__("./src/ducks/accounts/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// constant
var ACCOUNT_DOCTYPE = 'io.cozy.accounts';
var TRIGGERS_DOCTYPE = 'io.cozy.triggers';
var JOBS_DOCTYPE = 'io.cozy.jobs';

// Delay until the konnector is queued. It is used to compensate the fact that
// we cannot determine when a login is OK for the konnector.
var DEFAULT_QUEUE_DELAY = exports.DEFAULT_QUEUE_DELAY = 7000;

var CREATE_CONNECTION = exports.CREATE_CONNECTION = 'CREATE_CONNECTION';
var CONNECTION_DELETED = exports.CONNECTION_DELETED = 'CONNECTION_DELETED';
var DELETE_CONNECTION = exports.DELETE_CONNECTION = 'DELETE_CONNECTION';
var ENQUEUE_CONNECTION = exports.ENQUEUE_CONNECTION = 'ENQUEUE_CONNECTION';
var LAUNCH_TRIGGER = exports.LAUNCH_TRIGGER = 'LAUNCH_TRIGGER';
var PURGE_QUEUE = exports.PURGE_QUEUE = 'PURGE_QUEUE';
var RECEIVE_DATA = exports.RECEIVE_DATA = 'RECEIVE_DATA';
var RECEIVE_NEW_DOCUMENT = exports.RECEIVE_NEW_DOCUMENT = 'RECEIVE_NEW_DOCUMENT';
var UPDATE_CONNECTION_RUNNING_STATUS = exports.UPDATE_CONNECTION_RUNNING_STATUS = 'UPDATE_CONNECTION_RUNNING_STATUS';
var UPDATE_CONNECTION_ERROR = exports.UPDATE_CONNECTION_ERROR = 'UPDATE_CONNECTION_ERROR';
var START_CONNECTION_CREATION = exports.START_CONNECTION_CREATION = 'START_CONNECTION_CREATION';
var END_CONNECTION_CREATION = exports.END_CONNECTION_CREATION = 'END_CONNECTION_CREATION';

// Helpers
var getTriggerKonnectorSlug = function getTriggerKonnectorSlug(trigger) {
  return trigger && trigger.message && trigger.message.konnector || null;
};

var isKonnectorTrigger = function isKonnectorTrigger(doc) {
  return doc._type === TRIGGERS_DOCTYPE && !!doc.message && !!doc.message.konnector;
};

var isKonnectorJob = function isKonnectorJob(doc) {
  return doc._type === JOBS_DOCTYPE && doc.worker === 'konnector';
};

// reducers
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case CONNECTION_DELETED:
    case DELETE_CONNECTION:
      if (!action.trigger || !action.trigger._id) throw new Error('Missing trigger id');
      if (!action.trigger.message || !action.trigger.message.konnector) throw new Error('Malformed trigger message');
      return _extends({}, state, _defineProperty({}, getTriggerKonnectorSlug(action.trigger), konnectorReducer(state[getTriggerKonnectorSlug(action.trigger)], action)));
    case CREATE_CONNECTION:
    case ENQUEUE_CONNECTION:
    case UPDATE_CONNECTION_ERROR:
    case UPDATE_CONNECTION_RUNNING_STATUS:
    case LAUNCH_TRIGGER:
      // Trigger is launched, connection should be running.
      if (!action.trigger || !action.trigger._id) throw new Error('Missing trigger id');
      if (!action.trigger.message || !action.trigger.message.konnector) throw new Error('Malformed trigger message');
      return _extends({}, state, _defineProperty({}, getTriggerKonnectorSlug(action.trigger), konnectorReducer(state[getTriggerKonnectorSlug(action.trigger)], action)));

    case RECEIVE_DATA:
    case RECEIVE_NEW_DOCUMENT:
      if (!action.response || !action.response.data || !action.response.data.length) {
        return state;
      }

      return action.response.data.reduce(function (newState, doc) {
        var isTrigger = isKonnectorTrigger(doc);
        var isJob = isKonnectorJob(doc);
        // Ignore non triggers or non jobs
        if (!isTrigger && !isJob) return newState;
        var konnectorSlug = doc.message.konnector;
        var triggerId = isTrigger && doc._id || isJob && doc.trigger_id;
        if (!triggerId) return newState;

        var account = isTrigger && !!doc.message && doc.message.account;

        var currentStatus = isTrigger && doc.current_state && doc.current_state.status || isJob && doc.state;
        if (!currentStatus) return newState;

        var error = isTrigger && !!doc.current_state && doc.current_state.status !== 'done' && !!doc.current_state.last_error && (0, _konnectors.buildKonnectorError)(doc.current_state.last_error) || isJob && !!doc.error && (0, _konnectors.buildKonnectorError)(doc.error) || null;

        var lastSyncDate = isTrigger && !!doc.current_state && doc.current_state.last_execution || isJob && doc.queued_at;

        return _extends({}, newState, _defineProperty({}, konnectorSlug, {
          triggers: _extends({}, newState[konnectorSlug] && newState[konnectorSlug].triggers || {}, _defineProperty({}, triggerId, _extends({}, newState[konnectorSlug] && newState[konnectorSlug].triggers && newState[konnectorSlug].triggers[triggerId] || {}, {
            account: account || newState[konnectorSlug] && newState[konnectorSlug].triggers && newState[konnectorSlug].triggers[triggerId] && newState[konnectorSlug].triggers[triggerId].account,
            error: error,
            hasError: !!error || currentStatus === 'errored',
            isRunning: ['queued', 'running'].includes(currentStatus),
            isConnected: !error && currentStatus === 'done',
            lastSyncDate: lastSyncDate
          })))
        }));
      }, state);

    case PURGE_QUEUE:
      return Object.keys(state).reduce(function (konnectors, slug) {
        return _extends({}, konnectors, _defineProperty({}, slug, konnectorReducer(state[slug], action)));
      }, state);

    default:
      return state;
  }
};

var creation = function creation() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case RECEIVE_DATA:
    case RECEIVE_NEW_DOCUMENT:
      if (!state) return null;
      if (!action.response || !action.response.data || action.response.data.length !== 1) {
        return state;
      }

      var doc = action.response.data[0];
      var isAccount = doc._type === ACCOUNT_DOCTYPE;

      if (isAccount) return _extends({}, state, {
        account: doc._id
      });

      var isTrigger = isKonnectorTrigger(doc);
      if (isTrigger) return _extends({}, state, {
        trigger: doc._id
      });

      return state;

    case START_CONNECTION_CREATION:
      // Store all data related to the creation of a new connection in then
      // property `creation`
      // While a new connection is being configured, new trigger and account
      // are store here
      return {};
    case END_CONNECTION_CREATION:
      return null;
    default:
      return state;
  }
};

exports.default = (0, _redux.combineReducers)({
  creation: creation,
  konnectors: reducer
});

// sub(?) reducers

var konnectorReducer = function konnectorReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case CONNECTION_DELETED:
    case DELETE_CONNECTION:
    case ENQUEUE_CONNECTION:
    case LAUNCH_TRIGGER:
    case RECEIVE_DATA:
    case RECEIVE_NEW_DOCUMENT:
    case PURGE_QUEUE:
      // We assume that document being a trigger has already been validated.
      return _extends({}, state, {
        triggers: triggersReducer(state.triggers, action)
      });
    default:
      return state;
  }
};

var triggersReducer = function triggersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case DELETE_CONNECTION:
      return _extends({}, state, _defineProperty({}, action.trigger._id, _extends({}, state[action.trigger._id], {
        isDeleting: true
      })));
    case CONNECTION_DELETED:
      return function (_ref) {
        var deleted = _ref[action.trigger._id],
            state = _objectWithoutProperties(_ref, [action.trigger._id]);

        return state;
      }(state);
    case ENQUEUE_CONNECTION:
      return _extends({}, state, _defineProperty({}, action.trigger._id, _extends({}, state[action.trigger._id], {
        isEnqueued: true
      })));
    case LAUNCH_TRIGGER:
      return _extends({}, state, _defineProperty({}, action.trigger._id, _extends({}, state[action.trigger._id], {
        account: action.trigger.message.account,
        isRunning: true
      })));
    case PURGE_QUEUE:
      return state ? Object.keys(state).reduce(function (newState, triggerId) {
        return _extends({}, newState, _defineProperty({}, triggerId, _extends({}, newState[triggerId], {
          isEnqueued: false
        })));
      }, state) : state;
    default:
      return state;
  }
};

// action creators sync
var createConnection = exports.createConnection = function createConnection(konnector, account, folder) {
  return {
    type: CREATE_CONNECTION,
    konnector: konnector,
    account: account,
    folder: folder
  };
};

var enqueueConnection = exports.enqueueConnection = function enqueueConnection(trigger) {
  return {
    type: ENQUEUE_CONNECTION,
    trigger: trigger
  };
};

var purgeQueue = exports.purgeQueue = function purgeQueue() {
  return {
    type: PURGE_QUEUE
  };
};

var updateConnectionError = exports.updateConnectionError = function updateConnectionError(konnector, account, error) {
  return {
    type: UPDATE_CONNECTION_ERROR,
    konnector: konnector,
    account: account,
    error: error
  };
};

var startConnectionCreation = exports.startConnectionCreation = function startConnectionCreation(konnector) {
  return {
    type: START_CONNECTION_CREATION,
    konnector: konnector
  };
};

var endConnectionCreation = exports.endConnectionCreation = function endConnectionCreation() {
  return {
    type: END_CONNECTION_CREATION
  };
};

// action creators async
var deleteConnection = exports.deleteConnection = function deleteConnection(trigger) {
  return function (dispatch, getState) {
    dispatch({
      type: DELETE_CONNECTION,
      trigger: trigger
    });
    var account = getTriggerAccount(getState(), trigger);
    return dispatch((0, _accounts.deleteAccount)(account)).then(function () {
      dispatch((0, _triggers.deleteTrigger)(trigger));
    }).then(function () {
      return dispatch({
        type: CONNECTION_DELETED,
        trigger: trigger
      });
    });
  };
};

var launchTriggerAndQueue = exports.launchTriggerAndQueue = function launchTriggerAndQueue(trigger) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_QUEUE_DELAY;
  return function (dispatch, getState, options) {
    setTimeout(function () {
      if (isConnectionRunning(getState().connections, trigger)) {
        dispatch(enqueueConnection(trigger));
      }
    }, delay);

    return dispatch((0, _triggers.launchTrigger)(trigger));
  };
};

// selectors
var getConnectionsByKonnector = exports.getConnectionsByKonnector = function getConnectionsByKonnector(state, konnectorSlug) {
  var validAccounts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var validKonnectors = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  var konnectorIsValid = !validKonnectors.length || validKonnectors.includes(konnectorSlug);
  var konnectorHasConnections = state.konnectors[konnectorSlug] && Object.keys(state.konnectors[konnectorSlug].triggers).length;
  if (!konnectorIsValid || !konnectorHasConnections) return [];

  return Object.values(state.konnectors[konnectorSlug].triggers).filter(function (trigger) {
    return validAccounts.includes(trigger.account);
  });
};

var getFirstError = exports.getFirstError = function getFirstError(state, konnectorSlug) {
  var firstTriggerHavingError = !!state.konnectors && !!state.konnectors[konnectorSlug] && !!state.konnectors[konnectorSlug].triggers && Object.values(state.konnectors[konnectorSlug].triggers).find(function (trigger) {
    return !!trigger.error;
  });
  return !!firstTriggerHavingError && firstTriggerHavingError.error;
};

var getFirstUserError = exports.getFirstUserError = function getFirstUserError(state, konnectorSlug) {
  var firstTriggerHavingUserError = !!state.konnectors && !!state.konnectors[konnectorSlug] && !!state.konnectors[konnectorSlug].triggers && Object.values(state.konnectors[konnectorSlug].triggers).find(function (trigger) {
    return (0, _konnectors.isKonnectorUserError)(trigger.error);
  });
  return firstTriggerHavingUserError && firstTriggerHavingUserError.error;
};

var getLastSyncDate = exports.getLastSyncDate = function getLastSyncDate(state, konnectorSlug) {
  var lastExecutions = !!state.konnectors && !!state.konnectors[konnectorSlug] && !!state.konnectors[konnectorSlug].triggers && Object.values(state.konnectors[konnectorSlug].triggers).map(function (trigger) {
    return trigger.lastSyncDate;
  }).sort(function (dateA, dateB) {
    var momentA = _moment2.default.utc(dateA);
    var momentB = _moment2.default.utc(dateB);
    return momentA.isAfter(momentB) ? -1 : momentA.isBefore(momentB) ? 1 : 0;
  });
  return lastExecutions.length && lastExecutions[0];
};

// Map the trigger status to a status compatible with queue
var getTriggerQueueStatus = function getTriggerQueueStatus(trigger) {
  if (trigger.isRunning) return 'ongoing';
  if (trigger.hasError) return 'error';
  if (trigger.isConnected) return 'done';
  return 'pending';
};

var getQueue = exports.getQueue = function getQueue(state, konnectors) {
  return (
    // state is state.connections
    state.konnectors ? Object.keys(state.konnectors).reduce(function (queuedConnections, konnectorSlug) {
      var triggers = state.konnectors[konnectorSlug].triggers;
      if (!triggers) return queuedConnections;
      var konnector = konnectors[konnectorSlug];
      return queuedConnections.concat(Object.keys(triggers).reduce(function (queuedTriggers, triggerId) {
        if (triggers[triggerId].isEnqueued) {
          var label = konnector.name;
          var status = getTriggerQueueStatus(triggers[triggerId]);
          var icon = (0, _icons.getKonnectorIcon)(konnector);
          return queuedTriggers.concat({ label: label, status: status, icon: icon });
        }

        return queuedTriggers;
      }, []));
    }, []) : []
  );
};

var getConnectionError = exports.getConnectionError = function getConnectionError(state, trigger) {
  return getTriggerState(state, trigger).error;
};

var getCreatedAccount = exports.getCreatedAccount = function getCreatedAccount(state) {
  return !!state.creation && state.creation.account;
};

var getTriggerAccount = exports.getTriggerAccount = function getTriggerAccount(state, trigger) {
  return (0, _accounts.getAccount)(state.cozy, trigger.message.account);
};

var getTriggerIdByKonnectorAndAccount = exports.getTriggerIdByKonnectorAndAccount = function getTriggerIdByKonnectorAndAccount(state, konnector, account) {
  var validAccounts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  return !!konnector && !!account && validAccounts.includes(account._id) && !!state.konnectors[konnector.slug] && Object.keys(state.konnectors[konnector.slug].triggers).find(function (triggerId) {
    return state.konnectors[konnector.slug].triggers[triggerId].account === account._id;
  });
};

var getTriggerLastSuccess = exports.getTriggerLastSuccess = function getTriggerLastSuccess(state, trigger) {
  var lastJob = (0, _jobs.getTriggerLastJob)(state, trigger);
  var lastJobIsSuccess = lastJob && lastJob.state === 'done';
  if (lastJobIsSuccess) return lastJob.started_at;
  return !!trigger && !!trigger.current_state && trigger.current_state.last_success;
};

// get trigger from state, in state.konnectors[konnectorSlug].triggers[triggerId]
var getTriggerState = function getTriggerState(state, trigger) {
  var konnectorSlug = getTriggerKonnectorSlug(trigger);
  if (!konnectorSlug || !state.konnectors || !state.konnectors[konnectorSlug]) return false;
  var triggers = state.konnectors[konnectorSlug].triggers;
  if (!triggers) return false;
  return !!triggers && !!triggers[trigger._id] && triggers[trigger._id] || {};
};

var isCreatingConnection = exports.isCreatingConnection = function isCreatingConnection(state) {
  return !!state.creation;
};

var isConnectionConnected = exports.isConnectionConnected = function isConnectionConnected(state, trigger) {
  return getTriggerState(state, trigger).isConnected;
};

var isConnectionDeleting = exports.isConnectionDeleting = function isConnectionDeleting(state, trigger) {
  return getTriggerState(state, trigger).isDeleting;
};

var isConnectionEnqueued = exports.isConnectionEnqueued = function isConnectionEnqueued(state, trigger) {
  return getTriggerState(state, trigger).isEnqueued;
};

var isConnectionRunning = exports.isConnectionRunning = function isConnectionRunning(state, trigger) {
  return getTriggerState(state, trigger).isRunning;
};

/***/ }),

/***/ "./src/locales/en.json":
/***/ (function(module, exports) {

module.exports = {"manifest":{"name":"Collect","short_description":"Cozy Collect is the application that help you gather all your personal data inside Cozy.","long_description":"With Cozy Collect, you can easily:\n * Downloads documents from all your suppliers\n * Set how often Cozy will collect your bills\n * Access directly to the documents gathered by your Cozy","changes":"You haven't missed it, the Store arrived in your Cozy!\nWe took advantage of it to improve Collect:\n * Store adaptation.\n * Tile merge: when you have several accounts for a single supplier, the former are now merged under the supplier tile.\n * Improvement of some Connectors pages."},"add_service":"Add a service","account":{"config":{"default_folder":"/Administrative/%{name}","optional":"(Optional)","title":"Connect your %{name} account","data":{"title":"Collected data:","service":{"description":"Service description:"}},"tabs":{"sync":"synchronization","account":"account","data":"collected data"}},"disconnect":{"title":"Disconnection","description":"Your will be disconnected from this account, but imported data will be kept"},"form":{"title":"Account","label":{"firstname":"Firstname","lastname":"Lastname","login":"Login","consumerKey":"Consumer Key","consumerSecret":"Consumer Secret","appKey":"Application Key","appSecret":"Application Secret","tricountUrl":"Tricount URL","cardNumber":"Card Number","dob":"Date of birth","password":"Password","email":"Email","bank_identifier":"Bank identifier (optional)","profileName":"Profile Name","identifier":"Identifier","new_identifier":"Identifier","secret":"Password","answer":"Secret Answer","access_token":"Access token","accessTokenSecret":"Access token secret","apikey":"Api key","phoneNumber":"Phone number","folderPath":"Folder path","namePath":"Folder name","authCode":"Auth code","accountName":"Account name","loginUrl":"Login URL","token":"Token","agreement":"I agree","refreshToken":"Refresh Token","timeout":"Delay (ms)","branchName":"Branch","code":"Confidential code"},"placeholder":{"password":"The password you use to connect to the service","update_password":"Update the password","accountName":"Example: Personal account","namePath":"Example: Camille bills. Default name path is your login."},"button":{"connect":"Connect","cancel":"Cancel","save":"Save","disconnect":"Disconnect this account","delete":"Delete this account","advanced":"Advanced options","synchronize":"Synchronize now"}},"folder":{"title":"Related folder settings","link":"Open the folder in Cozy Drive","changePath":"change the path","error":"Oops, something went wrong. Don't panic, your files are still there, please try again later","close":"close","warning":"You're changing your folder path","oldFiles":"All your olds bills will be moved in your new path.","newFiles":"Your news bills will be downloaded in your new path.","newPath":"Everything went well, the new path for your %{name} account is:"},"success":{"title":{"connect":"Successful configuration!","update":"Your %{name} account is updated!"},"banksLinkText":"See my accounts into Cozy Banks","driveLinkText":"Open the folder into Cozy Drive","button":"Close"},"message":{"folder":{"title":"Folder","link":"Open folder on cozy drive"},"success":{"connect":"Your data will be available in your Cozy in a few minutes and the next ones will follow automatically.","update":"Your %{name} account has been updated successfully.","delete":"Account removed succesfully."},"syncing":{"bill":"Your bills are syncing and will be available in the following path:"},"synced":{"title":"Your data synchronization","cron":"Synchronization frequency: %{frequency}","cron_hourly":"each hour","cron_daily":"once a day","cron_weekly":"once a week","cron_monthly":"once a month","cron_undefined":"manually","syncing":"running…","unknown":"unknown","last_sync":"Last synchronization: **%{date}**","date_format":"MMMM D[,] YYYY [at] HH[:]mm","bill":"Find your datas in the Drive app at this location:"},"error":{"server":"Apologies, our server had an hiccup, do you mind starting again?","bad_credentials":"Sorry, you entered an incorrect login or password.","delete":"Apologies, our server had an hiccup, do you mind starting again?"}},"forceConnection":"Synchronize now","editor_detail":"Service developed by %{editor}"},"account_picker":{"add_account_button":{"label":"Add an account"}},"apps":{"title":"My apps"},"connection":{"error":{"default":{"title":"An error occured","description":"Unfortunately, something went wrong when trying to connect to %{name}. Please check again your account informations or visit our online help."},"DISK_QUOTA_EXCEEDED":{"title":"Cozy Storage full","description":"This service cannot fetch your documents now. Please remove some files or go to **Settings > Storage** to get more free space."},"CHALLENGE_ASKED":{"title":"Challenge required","description":"It seems that the website requires a second authentification factor that we don’t support yet. You may try to settle the issue on the [%{name}](%{link}) website before a retry."},"LOGIN_FAILED":{"title":"Bad credentials","description":"Bad credentials. Check the konnector fields and run the connection again."},"LOGIN_FAILED.NEEDS_SECRET":{"title":"Needs secret","description":"An additional field must be filled in before checking your credentials."},"LOGIN_FAILED.TOO_MANY_ATTEMPTS":{"title":"Temporarily blocked","description":"Too many attempts occured. Please update your credentials on [%{name}](%{link}) website and update the konnector later on."},"MAINTENANCE":{"title":"Unavailable website","description":"It seems that the [%{name}](%{link}) website is unavailable or the konnector must be updated. Please rerun the connector later or visit our online help."},"NOT_EXISTING_DIRECTORY":{"title":"Missing destination folder","description":"It seems that this account's destination folder has been deleted. Please restore it by disconnecting this account and then reconnect again."},"UNKNOWN_ERROR":{"title":"Connection error","description":"An unknown error has occurred."},"USER_ACTION_NEEDED":{"title":"Action needed on the provider","description":"It seems that the [%{name}](%{link}) website requires you to log in and to do a specific action. Please rerun the connector once you have settled the issue on the website."},"USER_ACTION_NEEDED.OAUTH_OUTDATED":{"title":"Access refresh required","description":"It seems that the [%{name}](%{link}) website requires you to refresh the access you gave to the connector. Please disconnect and reconnect this connector. No data will be lost."},"USER_ACTION_NEEDED.ACCOUNT_REMOVED":{"title":"Unavailable account","description":"It seems that your account is no longer active. Please check your account on [%{name}](%{link}) before retry."},"USER_ACTION_NEEDED.CHANGE_PASSWORD":{"title":"Password update required","description":"It seems that the [%{name}](%{link}) website requires you to log in and update your password. Please rerun the connector once you have settled the issue on the website."},"USER_ACTION_NEEDED.PERMISSIONS_CHANGED":{"title":"New permissions validation needed","description":"You connector was updated and the permissions changed. Please validate them before launching the connector again."},"VENDOR_DOWN":{"title":"Unavailable service","description":"It seems that the [%{name}](%{link}) service is unavailable at the moment. Please rerun the connector later."},"VENDOR_DOWN.BANK_DOWN":{"title":"Unavailable website","description":"It seems that the [%{name}](%{link}) website is unavailable at the moment. Please rerun the connector later."},"VENDOR_DOWN.LINXO_DOWN":{"title":"Unavailable service","description":"It seems that we are experiencing overload with our bank konnectors at the moment. Please rerun the connector later."}}},"intent":{"konnector":{"install":{"error":{"message":"The konnector cannot be installed"}}},"service":{"return":"Back to connectors list","success":{"button":{"label":"Close"}},"error":{"initialization":"Service failed to initialize. Sorry for the inconvenience.","creation":"Unable to create account, an error occurred.","cause":"Cause: %{error}"},"cancel":"Cancel","terminate":"Terminate"}},"field":{"password":{"visibility":{"hide":"Hide","show":"Show","title":{"hide":"Hide password","show":"Show password"}}}},"nav":{"services":"My services"},"category":{"all":"All","banking":"Banks","health":"Health","insurance":"Insurance","transport":"Transportation","social":"Social","isp":"ISP","telecom":"Telecom","energy":"Energy","host_provider":"Host","productivity":"Productivity","shopping":"Shopping","public_service":"Public Services","other":"Others"},"dataType":{"none":"%{name} won't access any data in your Cozy","activity":"Your activities","appointment":"Your appointments","bankTransactions":"Your bank transactions","bankAccounts":"Your bank accounts","bill":"Your bills","bloodPressure":"Your blood pressure","calendar":"Your calendars","certificate":"Your certificates","commit":"Your commits","consumption":"Your consumption","contact":"Your contacts","contract":"Your contracts","courseMaterial":"Your course materials","document":"Your documents","event":"Your events","family":"Your family informations","geopoint":"Your geolocations","heartbeat":"Your heartbeats","home":"Your home informations","phonecommunicationlog":"Your phone communications log","podcast":"Your podcasts","profile":"Your client profile","refund":"Your refunds","sinister":"Your sinisters","sleepTime":"Your sleep time","stepsNumber":"Your number of steps","temperature":"Your temperature data","travelDate":"Your travel dates","tweet":"Your tweets","videostream":"Your videos","weight":"Your weights"},"loading":{"initial":"Loading connectors accounts...","working":"Loading"},"validation":{"exact_length":"It's must be made up of %{length} characters exactly.","max_length":"The length maximum is %{length} characters.","min_length":"It should contain at least %{length} characters.","pattern":"The value must match a specific pattern: %{pattern}"},"error":{"initial":"Something went wrong when fetching your connectors and informations. Please refresh the page.","LOGIN_FAILED":"Bad credentials. Check the konnector fields and run the connection again.","UNKNOWN_ERROR":"Something unexpected happened while running the connector","JOB_TIMEOUT":"The connector execution was too long","button":{"reload":"Refresh now"}},"tutorial":{"cozy_collect":{"title":"Automate your data gathering","text":"They will be stored in your Cozy, you won't have to look for them anymore.","button":"Next"},"menu_apps":{"title":"Your Cozy is so much more than a simple data aggregator","text":"Open the Applications menu to discover all the features your Cozy has to offer.","button":"Discover my Apps"}},"maintenance":{"icon":"This connector is under maintenance","service":"Service interrupted","problem":"%{konnectorName} doesn't allow your Cozy to access your data","title":"What is going on ?"},"connector":{"debug":{"successMessage":"This konnector is for debug purpose only, this is an additionnal custom success message."},"empty":"No connectors configured","noAccount":"No account","add":"Add a service","no-connectors-connected":"You have not yet connected connectors","get-info":"Get automatically all your informations in your Cozy","connect-account":"Connect my accounts","logo":{"alt":"%{name} logo"},"enedis":{"description":{"service":"Recover your Linky data by connecting your Enedis account. You must have a Linky meter and have first created your Enedis account (on the [Enedis website](https://espace-client-connexion.enedis.fr/auth/UI/Login?realm=particuliers). This connector is provided by Fing for the MesInfos project. It retrieves the data from your electricity contract and downloads your electricity consumption the day before. This connector is running on your Cozy and the Fing will have no access to this data."}},"orange":{"message":{"delay":"Once connected, a demand to extract your data will be sent to Orange information system. These data will be available within 15 days. You data will be updated automatically, every 15 days."}},"orangemobile":{"description":{"connector":"In the context of 'MesInfos', Orange allows you to localize your phone regularly.\n\n**Data collection needs your express agreement**\n\nThis agreement may be revoked at any time by this data connector.\n\nBy clicking on \"Agree\", you give your consent to collect your phone's position, every 30 minutes. Information gathered will on be : \n<ul><li>Date and time of this location.</li><li>Location data of the closest radio antenna at the time of collect.</li></ul>Collected data by Orange after you agreement will be available only in your Cozy that you have been assigned in context of  « Mes Infos ». They will be added to location data already stored in call logs.","service":"This connector will download data from your Orange account on your Cozy. It will automatically download the call logs from your phone. Thus call logs include your phone number, your corresponding's phone number, date and time of this call and location data of the closest radio antenna at the time of collect.\n\nYou will be able to use these data in different apps in your Cozy, for example \"Mapping My Life\" (available soon on the Cozy Store).","field":{"agreement":"Do you agree that Orange localizes regularly your phone in context of  « Mes Infos » ?"}}},"orangevideos":{"description":{"service":"This connector will download data from your Orange account on your Cozy. It will automatically download the list of movies you downloaded in free (TV Replay) or paid VOD from 01/01/2015 (adult contents are not included).\n\nYou will be able to use these data in different apps in your Cozy, for example \"My Movies Music\" (available soon on the Cozy Store)."}},"axabanque102":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"banquepopulaire":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"barclays136":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"bforbank97":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"bnpparibas82":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"boursorama83":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"bred":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"caatlantica3":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"caissedepargne1":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"carrefour159":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"casden173":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"cdngroup109":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"cdngroup88":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"cic45":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"cic63":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"comptenickel168":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"creditcooperatif148":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"creditmaritime":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"fortuneo84":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"hellobank145":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"hsbc119":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo).","connector":"The secret answer is [asked by HSBC](https://www.hsbc.fr/1/2/hsbc-france/particuliers/connexion) when you connect without double authentication. Example: what is the name of your pet?"}},"ingdirect95":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"labanquepostale44":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"lcl143":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"lcl144":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"lcl146":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"monabanq96":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}},"societegenerale":{"description":{"service":"The connection to your bank is operated and secured by our partner : Linxo. [Learn more](https://support.cozy.io/article/147-linxo)."}}},"Queue":{"header":"Syncing accounts:","header_mobile":"%{done} of %{total}","header_done":"Synced %{done} out of %{total}","item":{"pending":"Pending"},"close":"Close"},"services":{"title":"My services"},"status":{"interrupted":"INTERRUPTED SERVICE","edf":{"maintenance":"EDF's information system has changed and the related data access doesn't work anymore. This konnector is not currently able to get back your data from EDF. We are trying to restore the situation and we will notice you when it will be fixed. [Learn more](%{supportLink})","support_link":"https://support.cozy.io/article/123-le-connecteur-edf-ne-fonctionne-pas"}},"tile":{"konnector":{"lastSyncDate":{"format":"MMM DD"}}}}

/***/ })

})
//# sourceMappingURL=1.8fb7f5980c82e4ca69d3.hot-update.js.map