webpackHotUpdate(0,{

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/cozy-client/dist/cozy-client.js":
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){if(true)module.exports=n(__webpack_require__("./node_modules/preact-compat/dist/preact-compat.js"));else if("function"==typeof define&&define.amd)define(["react"],n);else{var t="object"==typeof exports?n(require("react")):n(e.react);for(var a in t)("object"==typeof exports?exports:e)[a]=t[a]}}(window,function(e){return function(e){var n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=184)}([function(e,n,t){e.exports=t(88)()},function(e,n){var t=Array.isArray;e.exports=t},function(n,t){n.exports=e},function(e,n,t){var a=t(57),i="object"==typeof self&&self&&self.Object===Object&&self,o=a||i||Function("return this")();e.exports=o},function(e,n,t){var a=t(171),i=t(168);e.exports=function(e,n){var t=i(e,n);return a(t)?t:void 0}},function(e,n){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,n,t){var a=t(7),i=t(181),o=t(180),r="[object Null]",s="[object Undefined]",c=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?s:r:c&&c in Object(e)?i(e):o(e)}},function(e,n,t){var a=t(3).Symbol;e.exports=a},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}();var o=t(182),r=(n.QueryDefinition=function(){function e(n){var t=n.doctype,a=n.id,i=n.selector,o=n.fields,r=n.sort,s=n.includes,c=n.referenced,u=n.limit,p=n.skip;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.doctype=t,this.id=a,this.selector=i,this.fields=o,this.sort=r,this.includes=s,this.referenced=c,this.limit=u,this.skip=p}return i(e,[{key:"where",value:function(n){return new e(a({},this.toDefinition(),{selector:n}))}},{key:"select",value:function(n){return new e(a({},this.toDefinition(),{fields:n}))}},{key:"sortBy",value:function(n){if(o(n))throw new Error('Invalid sort, should be an object (`{ label: "desc"}`), you passed a string.');return new e(a({},this.toDefinition(),{sort:n}))}},{key:"include",value:function(n){return new e(a({},this.toDefinition(),{includes:n}))}},{key:"UNSAFE_noLimit",value:function(){return new e(a({},this.toDefinition(),{limit:null}))}},{key:"offset",value:function(n){return new e(a({},this.toDefinition(),{skip:n}))}},{key:"referencedBy",value:function(n){return new e(a({},this.toDefinition(),{referenced:n}))}},{key:"toDefinition",value:function(){return{doctype:this.doctype,id:this.id,selector:this.selector,fields:this.fields,sort:this.sort,includes:this.includes,referenced:this.referenced,limit:this.limit,skip:this.skip}}}]),e}(),n.createDocument=function(e){return{mutationType:d.CREATE_DOCUMENT,document:e}}),s=n.updateDocument=function(e){return{mutationType:d.UPDATE_DOCUMENT,document:e}},c=n.deleteDocument=function(e){return{mutationType:d.DELETE_DOCUMENT,document:e}},u=n.addReferencesTo=function(e,n){return{mutationType:d.ADD_REFERENCES_TO,referencedDocuments:n,document:e}},p=n.removeReferencesTo=function(e,n){return{mutationType:d.REMOVE_REFERENCES_TO,referencedDocuments:n,document:e}},l=n.uploadFile=function(e,n){return{mutationType:d.UPLOAD_FILE,file:e,dirPath:n}},d=(n.getDoctypeFromOperation=function(e){if(!e.mutationType)return e.doctype;var n=e.mutationType;switch(n){case"CREATE_DOCUMENT":case"UPDATE_DOCUMENT":case"DELETE_DOCUMENT":return e.document._type;case"ADD_REFERENCES_TO":case"UPLOAD_FILE":throw new Error("Not implemented");default:throw new Error("Unknown mutationType "+n)}},n.Mutations={createDocument:r,updateDocument:s,deleteDocument:c,addReferencesTo:u,removeReferencesTo:p,uploadFile:l},n.MutationTypes={CREATE_DOCUMENT:"CREATE_DOCUMENT",UPDATE_DOCUMENT:"UPDATE_DOCUMENT",DELETE_DOCUMENT:"DELETE_DOCUMENT",ADD_REFERENCES_TO:"ADD_REFERENCES_TO",REMOVE_REFERENCES_TO:"REMOVE_REFERENCES_TO",UPLOAD_FILE:"UPLOAD_FILE"})},function(e,n,t){var a=t(20),i=1/0;e.exports=function(e){if("string"==typeof e||a(e))return e;var n=e+"";return"0"==n&&1/e==-i?"-0":n}},function(e,n,t){var a=t(131);e.exports=function(e,n){var t=e.__data__;return a(n)?t["string"==typeof n?"string":"hash"]:t.map}},function(e,n,t){var a=t(4)(Object,"create");e.exports=a},function(e,n,t){var a=t(47);e.exports=function(e,n){for(var t=e.length;t--;)if(a(e[t][0],n))return t;return-1}},function(e,n,t){var a=t(149),i=t(148),o=t(147),r=t(146),s=t(145);function c(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var a=e[n];this.set(a[0],a[1])}}c.prototype.clear=a,c.prototype.delete=i,c.prototype.get=o,c.prototype.has=r,c.prototype.set=s,e.exports=c},function(e,n){e.exports=function(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.receiveMutationError=n.receiveMutationResult=n.initMutation=n.receiveQueryError=n.receiveQueryResult=n.initQuery=n.receiveDocumentUpdate=n.getRawQueryFromStore=n.getQueryFromStore=n.getDocumentFromStore=n.getStateRoot=n.createStore=n.StoreProxy=void 0;var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),o=t(56);Object.defineProperty(n,"receiveDocumentUpdate",{enumerable:!0,get:function(){return o.receiveDocumentUpdate}});var r=t(55);Object.defineProperty(n,"initQuery",{enumerable:!0,get:function(){return r.initQuery}}),Object.defineProperty(n,"receiveQueryResult",{enumerable:!0,get:function(){return r.receiveQueryResult}}),Object.defineProperty(n,"receiveQueryError",{enumerable:!0,get:function(){return r.receiveQueryError}});var s=t(27);Object.defineProperty(n,"initMutation",{enumerable:!0,get:function(){return s.initMutation}}),Object.defineProperty(n,"receiveMutationResult",{enumerable:!0,get:function(){return s.receiveMutationResult}}),Object.defineProperty(n,"receiveMutationError",{enumerable:!0,get:function(){return s.receiveMutationError}});var c=t(32),u=l(o),p=l(r);function l(e){return e&&e.__esModule?e:{default:e}}function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var f=n.StoreProxy=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.state=n}return i(e,[{key:"readDocument",value:function(e,n){return this.state.documents[e][n]}},{key:"writeDocument",value:function(e){this.setState(function(n){return a({},n,{documents:a({},n.documents,d({},e._type,a({},n.documents[e._type],d({},e._id,e))))})})}},{key:"readQuery",value:function(e){return this.state.queries[e]}},{key:"writeQuery",value:function(e,n){this.setState(function(t){return a({},t,{queries:a({},t.queries,d({},e,n))})})}},{key:"touchQuery",value:function(e){this.writeQuery(e,a({},this.readQuery(e),{lastUpdate:Date.now()}))}},{key:"setState",value:function(e){this.state=e(this.state)}},{key:"getState",value:function(){return this.state}}]),e}(),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{documents:{},queries:{}},n=arguments[1];if(!(0,r.isQueryAction)(n)&&!(0,s.isMutationAction)(n))return e;if(n.update){var t=new f(e);return n.update(t,n.response),n.contextQueryId&&t.touchQuery(n.contextQueryId),t.getState()}return{documents:(0,u.default)(e.documents,n),queries:(0,p.default)(e.queries,n,e.documents)}};n.default=m;n.createStore=function(){return(0,c.createStore)((0,c.combineReducers)({cozy:m}))};var v=n.getStateRoot=function(e){return e.cozy||{}};n.getDocumentFromStore=function(e,n,t){return(0,o.getDocumentFromSlice)(v(e).documents,n,t)},n.getQueryFromStore=function(e,n){return(0,r.getQueryFromSlice)(v(e).queries,n,v(e).documents)},n.getRawQueryFromStore=function(e,n){return(0,r.getQueryFromSlice)(v(e).queries,n)}},function(e,n,t){"use strict";e.exports=function(e,n,t,a,i,o,r,s){if(!e){var c;if(void 0===n)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[t,a,i,o,r,s],p=0;(c=new Error(n.replace(/%s/g,function(){return u[p++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},function(e,n,t){var a=t(37),i=t(18),o=4294967295;function r(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=o,this.__views__=[]}r.prototype=a(i.prototype),r.prototype.constructor=r,e.exports=r},function(e,n){e.exports=function(){}},function(e,n,t){var a=t(37),i=t(18);function o(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=void 0}o.prototype=a(i.prototype),o.prototype.constructor=o,e.exports=o},function(e,n,t){var a=t(6),i=t(5),o="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||i(e)&&a(e)==o}},function(e,n,t){var a=t(1),i=t(20),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/;e.exports=function(e,n){if(a(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!i(e))||r.test(e)||!o.test(e)||null!=n&&e in Object(n)}},function(e,n,t){var a=t(139),i=t(132),o=t(130),r=t(129),s=t(128);function c(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var a=e[n];this.set(a[0],a[1])}}c.prototype.clear=a,c.prototype.delete=i,c.prototype.get=o,c.prototype.has=r,c.prototype.set=s,e.exports=c},function(e,n,t){var a=t(4)(t(3),"Map");e.exports=a},function(e,n){var t=9007199254740991;e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=t}},function(e,n,t){var a=t(162),i=t(5),o=Object.prototype,r=o.hasOwnProperty,s=o.propertyIsEnumerable,c=a(function(){return arguments}())?a:function(e){return i(e)&&r.call(e,"callee")&&!s.call(e,"callee")};e.exports=c},function(e,n,t){var a=t(164),i=t(157),o=t(153);e.exports=function(e){return o(e)?a(e):i(e)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i="INIT_MUTATION",o="RECEIVE_MUTATION_RESULT",r="RECEIVE_MUTATION_ERROR";n.isMutationAction=function(e){return-1!==[i,o,r].indexOf(e.type)},n.isReceivingMutationResult=function(e){return e.type===o},n.initMutation=function(e,n){return{type:i,mutationId:e,definition:n}},n.receiveMutationResult=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a({type:o,mutationId:e,response:n},t)},n.receiveMutationError=function(e,n){return{type:r,mutationId:e,error:n}}},function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}();var o=function(){function e(n,t,a,i){var o=i.get,r=i.query,s=i.mutate,c=i.save;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.target=n,this.name=t,this.doctype=a,this.get=o,this.query=r,this.mutate=s,this.save=c}return i(e,[{key:"fetchMore",value:function(){throw"Not implemented"}},{key:"exists",value:function(e){return void 0!==this.getRelationship().data.find(function(n){var t=n._id;return e._id===t})}},{key:"getRelationship",value:function(){return this.target.relationships&&this.target.relationships[this.name]?this.target.relationships[this.name]:(console.warn("You're trying to access data on a relationship that appear to not be loaded yet. You may want to use 'include()' on your query"),{data:[],next:!0,meta:{count:0}})}},{key:"updateTargetRelationship",value:function(e,n){var t=e.readDocument(this.target._type,this.target._id);e.writeDocument(this.updateRelationship(t,n))}},{key:"updateRelationship",value:function(e,n){return a({},e,{relationships:a({},e.relationships,(t={},i=this.name,o=a({},e.relationships[this.name],n(e.relationships[this.name])),i in t?Object.defineProperty(t,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[i]=o,t))});var t,i,o}},{key:"data",get:function(){var e=this;return this.getRelationship().data.map(function(n){var t=n._id,a=n._type;return e.get(a,t)})}},{key:"hasMore",get:function(){return this.getRelationship().next}},{key:"count",get:function(){var e=this.getRelationship();return e.meta?e.meta.count:e.data.length}}]),e}();n.default=o},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}();var i=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),"function"==typeof n&&(this.request=n)}return a(e,[{key:"request",value:function(e,n,t){throw new Error("request is not implemented")}}]),e}();n.default=i;var o=function(e){return"function"==typeof e?new i(e):e},r=(n.chain=function(e){return e.map(o).reduce(r)},function(e,n){return new i(function(t,a,i){return e.request(t,a,function(e,t){return n.request(e,t,i)})})})},function(e,n){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,n,t){"use strict";t.r(n);var a=t(34),i=t(33),o={INIT:"@@redux/INIT"};function r(e,n,t){var s;if("function"==typeof n&&void 0===t&&(t=n,n=void 0),void 0!==t){if("function"!=typeof t)throw new Error("Expected the enhancer to be a function.");return t(r)(e,n)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var c=e,u=n,p=[],l=p,d=!1;function f(){l===p&&(l=p.slice())}function m(){return u}function v(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var n=!0;return f(),l.push(e),function(){if(n){n=!1,f();var t=l.indexOf(e);l.splice(t,1)}}}function x(e){if(!Object(a.a)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,u=c(u,e)}finally{d=!1}for(var n=p=l,t=0;t<n.length;t++){(0,n[t])()}return e}return x({type:o.INIT}),(s={dispatch:x,subscribe:v,getState:m,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,x({type:o.INIT})}})[i.a]=function(){var e,n=v;return(e={subscribe:function(e){if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");function t(){e.next&&e.next(m())}return t(),{unsubscribe:n(t)}}})[i.a]=function(){return this},e},s}function s(e,n){var t=n&&n.type;return"Given action "+(t&&'"'+t.toString()+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function c(e){for(var n=Object.keys(e),t={},a=0;a<n.length;a++){var i=n[a];0,"function"==typeof e[i]&&(t[i]=e[i])}var r=Object.keys(t);var c=void 0;try{!function(e){Object.keys(e).forEach(function(n){var t=e[n];if(void 0===t(void 0,{type:o.INIT}))throw new Error('Reducer "'+n+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===t(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+n+"\" returned undefined when probed with a random type. Don't try to handle "+o.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(t)}catch(e){c=e}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1];if(c)throw c;for(var a=!1,i={},o=0;o<r.length;o++){var u=r[o],p=t[u],l=e[u],d=p(l,n);if(void 0===d){var f=s(u,n);throw new Error(f)}i[u]=d,a=a||d!==l}return a?i:e}}function u(e,n){return function(){return n(e.apply(void 0,arguments))}}function p(e,n){if("function"==typeof e)return u(e,n);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var t=Object.keys(e),a={},i=0;i<t.length;i++){var o=t[i],r=e[o];"function"==typeof r&&(a[o]=u(r,n))}return a}function l(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return 0===n.length?function(e){return e}:1===n.length?n[0]:n.reduce(function(e,n){return function(){return e(n.apply(void 0,arguments))}})}var d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e};function f(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return function(t,a,i){var o,r=e(t,a,i),s=r.dispatch,c={getState:r.getState,dispatch:function(e){return s(e)}};return o=n.map(function(e){return e(c)}),s=l.apply(void 0,o)(r.dispatch),d({},r,{dispatch:s})}}}t.d(n,"createStore",function(){return r}),t.d(n,"combineReducers",function(){return c}),t.d(n,"bindActionCreators",function(){return p}),t.d(n,"applyMiddleware",function(){return f}),t.d(n,"compose",function(){return l})},function(e,n,t){"use strict";(function(e,a){var i,o=t(60);i="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:a;var r=Object(o.a)(i);n.a=r}).call(this,t(31),t(91)(e))},function(e,n,t){"use strict";var a=t(185),i="object"==typeof self&&self&&self.Object===Object&&self,o=(a.a||i||Function("return this")()).Symbol,r=Object.prototype,s=r.hasOwnProperty,c=r.toString,u=o?o.toStringTag:void 0;var p=function(e){var n=s.call(e,u),t=e[u];try{e[u]=void 0;var a=!0}catch(e){}var i=c.call(e);return a&&(n?e[u]=t:delete e[u]),i},l=Object.prototype.toString;var d=function(e){return l.call(e)},f="[object Null]",m="[object Undefined]",v=o?o.toStringTag:void 0;var x=function(e){return null==e?void 0===e?m:f:v&&v in Object(e)?p(e):d(e)};var h=function(e,n){return function(t){return e(n(t))}}(Object.getPrototypeOf,Object);var y=function(e){return null!=e&&"object"==typeof e},b="[object Object]",g=Function.prototype,w=Object.prototype,k=g.toString,_=w.hasOwnProperty,O=k.call(Object);n.a=function(e){if(!y(e)||x(e)!=b)return!1;var n=h(e);if(null===n)return!0;var t=_.call(n,"constructor")&&n.constructor;return"function"==typeof t&&t instanceof t&&k.call(t)==O}},function(e,n,t){var a=t(66),i=Object.prototype.hasOwnProperty;e.exports=function(e){for(var n=e.name+"",t=a[n],o=i.call(a,n)?t.length:0;o--;){var r=t[o],s=r.func;if(null==s||s==e)return r.name}return n}},function(e,n,t){var a=t(68),i=t(67),o=a?function(e){return a.get(e)}:i;e.exports=o},function(e,n,t){var a=t(14),i=Object.create,o=function(){function e(){}return function(n){if(!a(n))return{};if(i)return i(n);e.prototype=n;var t=new e;return e.prototype=void 0,t}}();e.exports=o},function(e,n){e.exports=function(e){return e}},function(e,n,t){var a=t(1),i=t(21),o=t(104),r=t(101);e.exports=function(e,n){return a(e)?e:i(e,n)?[e]:o(r(e))}},function(e,n,t){var a=t(39),i=t(9);e.exports=function(e,n){for(var t=0,o=(n=a(n,e)).length;null!=e&&t<o;)e=e[i(n[t++])];return t&&t==o?e:void 0}},function(e,n){e.exports=function(e,n){return function(t){return null!=t&&t[e]===n&&(void 0!==n||e in Object(t))}}},function(e,n,t){var a=t(14);e.exports=function(e){return e==e&&!a(e)}},function(e,n,t){var a=t(4)(t(3),"WeakMap");e.exports=a},function(e,n){e.exports=function(e,n){for(var t=-1,a=n.length,i=e.length;++t<a;)e[i+t]=n[t];return e}},function(e,n,t){var a=t(126),i=t(123),o=t(122),r=1,s=2;e.exports=function(e,n,t,c,u,p){var l=t&r,d=e.length,f=n.length;if(d!=f&&!(l&&f>d))return!1;var m=p.get(e);if(m&&p.get(n))return m==n;var v=-1,x=!0,h=t&s?new a:void 0;for(p.set(e,n),p.set(n,e);++v<d;){var y=e[v],b=n[v];if(c)var g=l?c(b,y,v,n,e,p):c(y,b,v,e,n,p);if(void 0!==g){if(g)continue;x=!1;break}if(h){if(!i(n,function(e,n){if(!o(h,n)&&(y===e||u(y,e,t,c,p)))return h.push(n)})){x=!1;break}}else if(y!==b&&!u(y,b,t,c,p)){x=!1;break}}return p.delete(e),p.delete(n),x}},function(e,n,t){var a=t(127),i=t(5);e.exports=function e(n,t,o,r,s){return n===t||(null==n||null==t||!i(n)&&!i(t)?n!=n&&t!=t:a(n,t,o,r,e,s))}},function(e,n){e.exports=function(e,n){return e===n||e!=e&&n!=n}},function(e,n,t){var a=t(13),i=t(144),o=t(143),r=t(142),s=t(141),c=t(140);function u(e){var n=this.__data__=new a(e);this.size=n.size}u.prototype.clear=i,u.prototype.delete=o,u.prototype.get=r,u.prototype.has=s,u.prototype.set=c,e.exports=u},function(e,n,t){var a=t(160),i=t(159),o=t(158),r=o&&o.isTypedArray,s=r?i(r):a;e.exports=s},function(e,n){var t=9007199254740991,a=/^(?:0|[1-9]\d*)$/;e.exports=function(e,n){var i=typeof e;return!!(n=null==n?t:n)&&("number"==i||"symbol"!=i&&a.test(e))&&e>-1&&e%1==0&&e<n}},function(e,n,t){(function(e){var a=t(3),i=t(161),o="object"==typeof n&&n&&!n.nodeType&&n,r=o&&"object"==typeof e&&e&&!e.nodeType&&e,s=r&&r.exports===o?a.Buffer:void 0,c=(s?s.isBuffer:void 0)||i;e.exports=c}).call(this,t(28)(e))},function(e,n){var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},function(e,n,t){var a=t(6),i=t(14),o="[object AsyncFunction]",r="[object Function]",s="[object GeneratorFunction]",c="[object Proxy]";e.exports=function(e){if(!i(e))return!1;var n=a(e);return n==r||n==s||n==o||n==c}},function(e,n,t){var a=t(4),i=function(){try{var e=a(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=i},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getQueryFromSlice=n.receiveQueryError=n.receiveQueryResult=n.initQuery=n.isReceivingData=n.isQueryAction=void 0;var a=function(){return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],a=!0,i=!1,o=void 0;try{for(var r,s=e[Symbol.iterator]();!(a=(r=s.next()).done)&&(t.push(r.value),!n||t.length!==n);a=!0);}catch(e){i=!0,o=e}finally{try{!a&&s.return&&s.return()}finally{if(i)throw o}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o=t(56),r=t(27),s=u(t(173)),c=u(t(92));function u(e){return e&&e.__esModule?e:{default:e}}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}var d="INIT_QUERY",f="RECEIVE_QUERY_RESULT",m="RECEIVE_QUERY_ERROR",v=n.isQueryAction=function(e){return-1!==[d,f,m].indexOf(e.type)},x=(n.isReceivingData=function(e){return e.type===f},{id:null,definition:null,fetchStatus:"pending",lastFetch:null,lastUpdate:null,lastError:null,hasMore:!1,count:0,data:[]}),h=function(e){return i({},e,{lastUpdate:Date.now()})};n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(v(n))return i({},e,p({},n.queryId,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,n=arguments[1];switch(n.type){case d:return i({},e,{id:n.queryId,definition:n.queryDefinition,fetchStatus:"loading"});case f:var t=n.response;return Array.isArray(t.data)?i({},e,{id:n.queryId,fetchStatus:"loaded",lastFetch:Date.now(),lastUpdate:Date.now(),hasMore:void 0!==t.next?t.next:e.hasMore,count:t.meta&&t.meta.count?t.meta.count:t.data.length,data:0===t.skip?t.data.map(function(e){return e._id}):[].concat(l(e.data),l(t.data.map(function(e){return e._id})))}):i({},e,{id:n.queryId,fetchStatus:"loaded",lastFetch:Date.now(),lastUpdate:Date.now(),hasMore:!1,count:1,data:[t.data._id]});case m:return i({},e,{id:n.queryId,fetchStatus:"failed",lastError:n.error});default:return e}}(e[n.queryId],n)));if((0,r.isReceivingMutationResult)(n)){if(n.updateQueries){var o=Object.keys(n.updateQueries).filter(function(n){return!!e[n]}).map(function(a){var i=y(e,a,t),o=n.updateQueries[a];return{queryId:i.id,newData:o(i.data,n.response)}}).reduce(function(n,t){return i({},n,p({},t.queryId,i({},e[t.queryId],{lastUpdate:Date.now(),data:t.newData.map(function(e){return e._id}),count:t.newData.length})))},{});return i({},e,o)}var u=n.response.data;if(!Array.isArray(u)){var b=function(e){return(0,s.default)(e,h)}(function(e,n){return(0,c.default)(Object.entries(e).filter(function(e){var t=a(e,2);return t[0],function(e,n){return e.data.indexOf(n)>-1}(t[1],n)}))}(e,n.response.data.id));return i({},e,b)}if(n.contextQueryId)return i({},e,p({},n.contextQueryId,i({},e[n.contextQueryId],{lastUpdate:Date.now()})))}return e};n.initQuery=function(e,n){return{type:d,queryId:e,queryDefinition:n}},n.receiveQueryResult=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i({type:f,queryId:e,response:n},t)},n.receiveQueryError=function(e,n){return{type:m,queryId:e,error:n}};var y=n.getQueryFromSlice=function(e,n,t){if(!e||!e[n])return i({},x,{data:null});var a=e[n];return t?i({},a,{data:function(e,n,t){return t.map(function(t){return(0,o.getDocumentFromSlice)(e,n,t)})}(t,a.definition.doctype,a.data)}):a}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getDocumentFromSlice=void 0;var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i=t(55),o=t(27);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var s=function(e,n){var t=n._type;if(!t)throw new Error("Document without _type",n);return a({},e,r({},t,a({},e[t],r({},n._id,n))))};n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1];if(!(0,i.isReceivingData)(n)&&!(0,o.isReceivingMutationResult)(n))return e;var t=n.response,c=t.data,u=t.included;if(!c||Array.isArray(c)&&0===c.length)return e;var p=u?u.reduce(s,e):e;if(!Array.isArray(c))return s(p,c);var l=c[0]._type;if(!l)throw new Error("Document without _type",c[0]);return a({},p,r({},l,a({},p[l],c.reduce(function(e,n){return a({},e,r({},n._id,n))},{}))))};n.getDocumentFromSlice=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1],t=arguments[2];return e[n]&&e[n][t]||null}},function(e,n,t){(function(n){var t="object"==typeof n&&n&&n.Object===Object&&n;e.exports=t}).call(this,t(31))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,i=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),o=t(8),r=t(30),s=(a=r)&&a.__esModule?a:{default:a};function c(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}var u=function(e){function n(e){var t=e.client,a=e.schema;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var i=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return i.client=t,i.schema=a,i}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,s.default),i(n,[{key:"request",value:function(e){return e.mutationType?this.executeMutation(e):this.executeQuery(e)}},{key:"executeQuery",value:function(e){var n=e.doctype,t=e.selector,a=e.id,i=e.referenced,o=c(e,["doctype","selector","id","referenced"]);if(!n)throw new Error("No doctype found in a query definition");var r=this.client.collection(n);return a?r.get(a):i?r.findReferencedBy(i,o):t?r.find(t,o):r.all(o)}},{key:"executeMutation",value:function(e){var n=e.mutationType,t=c(e,["mutationType"]);switch(n){case o.MutationTypes.CREATE_DOCUMENT:return this.client.collection(t.document._type).create(t.document);case o.MutationTypes.UPDATE_DOCUMENT:return this.client.collection(t.document._type).update(t.document);case o.MutationTypes.DELETE_DOCUMENT:return this.client.collection(t.document._type).destroy(t.document);case o.MutationTypes.ADD_REFERENCES_TO:return this.client.collection(t.referencedDocuments[0]._type).addReferencesTo(t.document,t.referencedDocuments);case o.MutationTypes.REMOVE_REFERENCES_TO:return this.client.collection(t.referencedDocuments[0]._type).removeReferencesTo(t.document,t.referencedDocuments);case o.MutationTypes.UPLOAD_FILE:return this.client.collection("io.cozy.files").upload(t.file,t.dirPath);default:throw new Error("Unknown mutation type: "+n)}}}]),n}();n.default=u},function(e,n,t){e.exports=function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t=Object.defineProperty,a=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,o=Object.getOwnPropertyDescriptor,r=Object.getPrototypeOf,s=r&&r(Object);return function c(u,p,l){if("string"!=typeof p){if(s){var d=r(p);d&&d!==s&&c(u,d,l)}var f=a(p);i&&(f=f.concat(i(p)));for(var m=0;m<f.length;++m){var v=f[m];if(!(e[v]||n[v]||l&&l[v])){var x=o(p,v);try{t(u,v,x)}catch(e){}}}return u}return u}}()},function(e,n,t){"use strict";function a(e){var n,t=e.Symbol;return"function"==typeof t?t.observable?n=t.observable:(n=t("observable"),t.observable=n):n="@@observable",n}t.d(n,"a",function(){return a})},function(e,n,t){"use strict";t.r(n);var a=t(2),i=t(0),o=t.n(i),r=o.a.shape({trySubscribe:o.a.func.isRequired,tryUnsubscribe:o.a.func.isRequired,notifyNestedSubs:o.a.func.isRequired,isSubscribed:o.a.func.isRequired}),s=o.a.shape({subscribe:o.a.func.isRequired,dispatch:o.a.func.isRequired,getState:o.a.func.isRequired});function c(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"store",t=arguments[1]||n+"Subscription",i=function(e){function i(t,a){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i);var o=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,e.call(this,t,a));return o[n]=t.store,o}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(i,e),i.prototype.getChildContext=function(){var e;return(e={})[n]=this[n],e[t]=null,e},i.prototype.render=function(){return a.Children.only(this.props.children)},i}(a.Component);return i.propTypes={store:s.isRequired,children:o.a.element.isRequired},i.childContextTypes=((e={})[n]=s.isRequired,e[t]=r,e),i}var u=c(),p=t(59),l=t.n(p),d=t(16),f=t.n(d);var m=null,v={notify:function(){}};var x=function(){function e(n,t,a){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.store=n,this.parentSub=t,this.onStateChange=a,this.unsubscribe=null,this.listeners=v}return e.prototype.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},e.prototype.notifyNestedSubs=function(){this.listeners.notify()},e.prototype.isSubscribed=function(){return Boolean(this.unsubscribe)},e.prototype.trySubscribe=function(){var e,n;this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange),this.listeners=(e=[],n=[],{clear:function(){n=m,e=m},notify:function(){for(var t=e=n,a=0;a<t.length;a++)t[a]()},get:function(){return n},subscribe:function(t){var a=!0;return n===e&&(n=e.slice()),n.push(t),function(){a&&e!==m&&(a=!1,n===e&&(n=e.slice()),n.splice(n.indexOf(t),1))}}}))},e.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=v)},e}(),h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e};var y=0,b={};function g(){}function w(e){var n,t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=i.getDisplayName,c=void 0===o?function(e){return"ConnectAdvanced("+e+")"}:o,u=i.methodName,p=void 0===u?"connectAdvanced":u,d=i.renderCountProp,m=void 0===d?void 0:d,v=i.shouldHandleStateChanges,w=void 0===v||v,k=i.storeKey,_=void 0===k?"store":k,O=i.withRef,j=void 0!==O&&O,P=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(i,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),E=_+"Subscription",R=y++,T=((n={})[_]=s,n[E]=r,n),S=((t={})[E]=r,t);return function(n){f()("function"==typeof n,"You must pass a component to the function returned by "+p+". Instead received "+JSON.stringify(n));var t=n.displayName||n.name||"Component",i=c(t),o=h({},P,{getDisplayName:c,methodName:p,renderCountProp:m,shouldHandleStateChanges:w,storeKey:_,withRef:j,displayName:i,wrappedComponentName:t,WrappedComponent:n}),r=function(t){function r(e,n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r);var a=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,t.call(this,e,n));return a.version=R,a.state={},a.renderCount=0,a.store=e[_]||n[_],a.propsMode=Boolean(e[_]),a.setWrappedInstance=a.setWrappedInstance.bind(a),f()(a.store,'Could not find "'+_+'" in either the context or props of "'+i+'". Either wrap the root component in a <Provider>, or explicitly pass "'+_+'" as a prop to "'+i+'".'),a.initSelector(),a.initSubscription(),a}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(r,t),r.prototype.getChildContext=function(){var e,n=this.propsMode?null:this.subscription;return(e={})[E]=n||this.context[E],e},r.prototype.componentDidMount=function(){w&&(this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},r.prototype.componentWillReceiveProps=function(e){this.selector.run(e)},r.prototype.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},r.prototype.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.notifyNestedSubs=g,this.store=null,this.selector.run=g,this.selector.shouldComponentUpdate=!1},r.prototype.getWrappedInstance=function(){return f()(j,"To access the wrapped instance, you need to specify { withRef: true } in the options argument of the "+p+"() call."),this.wrappedInstance},r.prototype.setWrappedInstance=function(e){this.wrappedInstance=e},r.prototype.initSelector=function(){var n=e(this.store.dispatch,o);this.selector=function(e,n){var t={run:function(a){try{var i=e(n.getState(),a);(i!==t.props||t.error)&&(t.shouldComponentUpdate=!0,t.props=i,t.error=null)}catch(e){t.shouldComponentUpdate=!0,t.error=e}}};return t}(n,this.store),this.selector.run(this.props)},r.prototype.initSubscription=function(){if(w){var e=(this.propsMode?this.props:this.context)[E];this.subscription=new x(this.store,e,this.onStateChange.bind(this)),this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}},r.prototype.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate,this.setState(b)):this.notifyNestedSubs()},r.prototype.notifyNestedSubsOnComponentDidUpdate=function(){this.componentDidUpdate=void 0,this.notifyNestedSubs()},r.prototype.isSubscribed=function(){return Boolean(this.subscription)&&this.subscription.isSubscribed()},r.prototype.addExtraProps=function(e){if(!(j||m||this.propsMode&&this.subscription))return e;var n=h({},e);return j&&(n.ref=this.setWrappedInstance),m&&(n[m]=this.renderCount++),this.propsMode&&this.subscription&&(n[E]=this.subscription),n},r.prototype.render=function(){var e=this.selector;if(e.shouldComponentUpdate=!1,e.error)throw e.error;return Object(a.createElement)(n,this.addExtraProps(e.props))},r}(a.Component);return r.WrappedComponent=n,r.displayName=i,r.childContextTypes=S,r.contextTypes=T,r.propTypes=T,l()(r,n)}}var k=Object.prototype.hasOwnProperty;function _(e,n){return e===n?0!==e||0!==n||1/e==1/n:e!=e&&n!=n}function O(e,n){if(_(e,n))return!0;if("object"!=typeof e||null===e||"object"!=typeof n||null===n)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(var i=0;i<t.length;i++)if(!k.call(n,t[i])||!_(e[t[i]],n[t[i]]))return!1;return!0}var j=t(32);t(34);function P(e){return function(n,t){var a=e(n,t);function i(){return a}return i.dependsOnOwnProps=!1,i}}function E(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function R(e,n){return function(n,t){t.displayName;var a=function(e,n){return a.dependsOnOwnProps?a.mapToProps(e,n):a.mapToProps(e)};return a.dependsOnOwnProps=!0,a.mapToProps=function(n,t){a.mapToProps=e,a.dependsOnOwnProps=E(e);var i=a(n,t);return"function"==typeof i&&(a.mapToProps=i,a.dependsOnOwnProps=E(i),i=a(n,t)),i},a}}var T=[function(e){return"function"==typeof e?R(e):void 0},function(e){return e?void 0:P(function(e){return{dispatch:e}})},function(e){return e&&"object"==typeof e?P(function(n){return Object(j.bindActionCreators)(e,n)}):void 0}];var S=[function(e){return"function"==typeof e?R(e):void 0},function(e){return e?void 0:P(function(){return{}})}],D=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e};function C(e,n,t){return D({},t,e,n)}var A=[function(e){return"function"==typeof e?function(e){return function(n,t){t.displayName;var a=t.pure,i=t.areMergedPropsEqual,o=!1,r=void 0;return function(n,t,s){var c=e(n,t,s);return o?a&&i(c,r)||(r=c):(o=!0,r=c),r}}}(e):void 0},function(e){return e?void 0:function(){return C}}];function I(e,n,t,a){return function(i,o){return t(e(i,o),n(a,o),o)}}function q(e,n,t,a,i){var o=i.areStatesEqual,r=i.areOwnPropsEqual,s=i.areStatePropsEqual,c=!1,u=void 0,p=void 0,l=void 0,d=void 0,f=void 0;function m(i,c){var m,v,x=!r(c,p),h=!o(i,u);return u=i,p=c,x&&h?(l=e(u,p),n.dependsOnOwnProps&&(d=n(a,p)),f=t(l,d,p)):x?(e.dependsOnOwnProps&&(l=e(u,p)),n.dependsOnOwnProps&&(d=n(a,p)),f=t(l,d,p)):h?(m=e(u,p),v=!s(m,l),l=m,v&&(f=t(l,d,p)),f):f}return function(i,o){return c?m(i,o):(l=e(u=i,p=o),d=n(a,p),f=t(l,d,p),c=!0,f)}}function M(e,n){var t=n.initMapStateToProps,a=n.initMapDispatchToProps,i=n.initMergeProps,o=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(n,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),r=t(e,o),s=a(e,o),c=i(e,o);return(o.pure?q:I)(r,s,c,e,o)}var z=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e};function N(e,n,t){for(var a=n.length-1;a>=0;a--){var i=n[a](e);if(i)return i}return function(n,a){throw new Error("Invalid value of type "+typeof e+" for "+t+" argument when connecting component "+a.wrappedComponentName+".")}}function U(e,n){return e===n}var F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.connectHOC,t=void 0===n?w:n,a=e.mapStateToPropsFactories,i=void 0===a?S:a,o=e.mapDispatchToPropsFactories,r=void 0===o?T:o,s=e.mergePropsFactories,c=void 0===s?A:s,u=e.selectorFactory,p=void 0===u?M:u;return function(e,n,a){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=o.pure,u=void 0===s||s,l=o.areStatesEqual,d=void 0===l?U:l,f=o.areOwnPropsEqual,m=void 0===f?O:f,v=o.areStatePropsEqual,x=void 0===v?O:v,h=o.areMergedPropsEqual,y=void 0===h?O:h,b=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(o,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),g=N(e,i,"mapStateToProps"),w=N(n,r,"mapDispatchToProps"),k=N(a,c,"mergeProps");return t(p,z({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:g,initMapDispatchToProps:w,initMergeProps:k,pure:u,areStatesEqual:d,areOwnPropsEqual:m,areStatePropsEqual:x,areMergedPropsEqual:y},b))}}();t.d(n,"Provider",function(){return u}),t.d(n,"createProvider",function(){return c}),t.d(n,"connectAdvanced",function(){return w}),t.d(n,"connect",function(){return F})},function(e,n){e.exports=function(e,n){var t=-1,a=e.length;for(n||(n=Array(a));++t<a;)n[t]=e[t];return n}},function(e,n,t){var a=t(17),i=t(19),o=t(62);e.exports=function(e){if(e instanceof a)return e.clone();var n=new i(e.__wrapped__,e.__chain__);return n.__actions__=o(e.__actions__),n.__index__=e.__index__,n.__values__=e.__values__,n}},function(e,n,t){var a=t(17),i=t(19),o=t(18),r=t(1),s=t(5),c=t(63),u=Object.prototype.hasOwnProperty;function p(e){if(s(e)&&!r(e)&&!(e instanceof a)){if(e instanceof i)return e;if(u.call(e,"__wrapped__"))return c(e)}return new i(e)}p.prototype=o.prototype,p.prototype.constructor=p,e.exports=p},function(e,n,t){var a=t(17),i=t(36),o=t(35),r=t(64);e.exports=function(e){var n=o(e),t=r[n];if("function"!=typeof t||!(n in a.prototype))return!1;if(e===t)return!0;var s=i(t);return!!s&&e===s[0]}},function(e,n){e.exports={}},function(e,n){e.exports=function(){}},function(e,n,t){var a=t(43),i=a&&new a;e.exports=i},function(e,n){var t=800,a=16,i=Date.now;e.exports=function(e){var n=0,o=0;return function(){var r=i(),s=a-(r-o);if(o=r,s>0){if(++n>=t)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}},function(e,n){e.exports=function(e){return function(){return e}}},function(e,n,t){var a=t(70),i=t(54),o=t(38),r=i?function(e,n){return i(e,"toString",{configurable:!0,enumerable:!1,value:a(n),writable:!0})}:o;e.exports=r},function(e,n,t){var a=t(71),i=t(69)(a);e.exports=i},function(e,n){e.exports=function(e,n,t){switch(t.length){case 0:return e.call(n);case 1:return e.call(n,t[0]);case 2:return e.call(n,t[0],t[1]);case 3:return e.call(n,t[0],t[1],t[2])}return e.apply(n,t)}},function(e,n,t){var a=t(73),i=Math.max;e.exports=function(e,n,t){return n=i(void 0===n?e.length-1:n,0),function(){for(var o=arguments,r=-1,s=i(o.length-n,0),c=Array(s);++r<s;)c[r]=o[n+r];r=-1;for(var u=Array(n+1);++r<n;)u[r]=o[r];return u[n]=t(c),a(e,this,u)}}},function(e,n,t){var a=t(7),i=t(25),o=t(1),r=a?a.isConcatSpreadable:void 0;e.exports=function(e){return o(e)||i(e)||!!(r&&e&&e[r])}},function(e,n,t){var a=t(44),i=t(75);e.exports=function e(n,t,o,r,s){var c=-1,u=n.length;for(o||(o=i),s||(s=[]);++c<u;){var p=n[c];t>0&&o(p)?t>1?e(p,t-1,o,r,s):a(s,p):r||(s[s.length]=p)}return s}},function(e,n,t){var a=t(76);e.exports=function(e){return null!=e&&e.length?a(e,1):[]}},function(e,n,t){var a=t(77),i=t(74),o=t(72);e.exports=function(e){return o(i(e,void 0,a),e+"")}},function(e,n,t){var a=t(19),i=t(78),o=t(36),r=t(35),s=t(1),c=t(65),u="Expected a function",p=8,l=32,d=128,f=256;e.exports=function(e){return i(function(n){var t=n.length,i=t,m=a.prototype.thru;for(e&&n.reverse();i--;){var v=n[i];if("function"!=typeof v)throw new TypeError(u);if(m&&!x&&"wrapper"==r(v))var x=new a([],!0)}for(i=x?i:t;++i<t;){v=n[i];var h=r(v),y="wrapper"==h?o(v):void 0;x=y&&c(y[0])&&y[1]==(d|p|l|f)&&!y[4].length&&1==y[9]?x[r(y[0])].apply(x,y[3]):1==v.length&&c(v)?x[h]():x.thru(v)}return function(){var e=arguments,a=e[0];if(x&&1==e.length&&s(a))return x.plant(a).value();for(var i=0,o=t?n[i].apply(this,e):a;++i<t;)o=n[i].call(this,o);return o}})}},function(e,n,t){var a=t(79)();e.exports=a},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),o=t(2),r=(s(o),t(15),t(8),s(t(0)));function s(e){return e&&e.__esModule?e:{default:e}}var c={},u=function(e){function n(e,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var a=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,t));a.onQueryChange=function(){console.log("query "+a.observableQuery.queryId+" changed, forcing rerender"),a.setState(c)};var i=t.client,o="function"==typeof e.query?e.query(i,e):e.query;a.observableQuery=i.watchQuery(o,e);var r=e.mutations,s=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(e,["mutations"]);return a.mutations="function"==typeof r?r(a.observableQuery,s):{},a}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,o.Component),i(n,[{key:"componentDidMount",value:function(){this.queryUnsubscribe=this.observableQuery.subscribe(this.onQueryChange)}},{key:"componentWillUnmount",value:function(){this.queryUnsubscribe()}},{key:"render",value:function(){var e=this.props.children,n=this.context,t=(n.client,n.store,this.observableQuery);return e(a({fetchMore:t.fetchMore.bind(t)},t.currentResult()),a({createDocument:t.create.bind(t),saveDocument:t.save.bind(t),deleteDocument:t.destroy.bind(t),getAssociation:t.getAssociation.bind(t)},this.mutations))}}]),n}();n.default=u,u.propTypes={query:r.default.func.isRequired,as:r.default.string,children:r.default.func.isRequired}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),r=t(2),s=(a=r)&&a.__esModule?a:{default:a};n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(n){var t=function(t){function a(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,a);var o=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n,t)),r=t.client;return o.mutations=i({createDocument:r.create.bind(r),saveDocument:r.save.bind(r),deleteDocument:r.destroy.bind(r)},"function"==typeof e?e(r,n):e),o}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(a,r.Component),o(a,[{key:"render",value:function(){return s.default.createElement(n,i({},this.mutations,this.props))}}]),a}();return t.displayName="WithMutations("+(n.displayName||n.name||"Component")+")",t}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),o=t(2),r=c(o),s=c(t(0));function c(e){return e&&e.__esModule?e:{default:e}}n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t){var c=t.displayName||t.name||"Component",u=function(s){function u(t,a){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,u);var i=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,t,a));if(i.mutate=function(){for(var t=arguments.length,a=Array(t),o=0;o<t;o++)a[o]=arguments[o];return i.client.mutate(e.apply(null,a),n)},i.client=t.client||a.client,!i.client)throw new Error('Could not find "client" in either the context or props of '+c);return i}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(u,o.Component),i(u,[{key:"render",value:function(){var e,i,o,s=(e={},i=n.name||"mutate",o=this.mutate,i in e?Object.defineProperty(e,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[i]=o,e);return r.default.createElement(t,a({},s,this.props))}}]),u}();return u.contextTypes={client:s.default.object},u.displayName="WithMutation("+c+")",u}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o=t(2),r=p(o),s=t(61),c=p(t(0)),u=t(15);function p(e){return e&&e.__esModule?e:{default:e}}n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t){var p=t.displayName||t.name||"Component",l=(0,s.connect)(function(e,n){return i({},(0,u.getQueryFromStore)(e,n.queryId))})(t),d=function(t){function s(t,a){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,s);var i=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,t,a));if(i.client=t.client||a.client,!i.client)throw new Error('Could not find "client" in either the context or props of '+p);return i.queryId=n.as||i.client.generateId(),i.queryDef="function"==typeof e?e(i.client,t):e,i}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(s,o.Component),a(s,[{key:"componentDidMount",value:function(){this.client.query(this.queryDef,{as:this.queryId})}},{key:"render",value:function(){return r.default.createElement(l,i({queryId:this.queryId},this.props))}}]),s}();return d.contextTypes={client:c.default.object},d.displayName="CozyConnect("+p+")",d}}},function(e,n,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,n,t){"use strict";var a=function(e){};e.exports=function(e,n,t,i,o,r,s,c){if(a(n),!e){var u;if(void 0===n)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var p=[t,i,o,r,s,c],l=0;(u=new Error(n.replace(/%s/g,function(){return p[l++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}}},function(e,n,t){"use strict";function a(e){return function(){return e}}var i=function(){};i.thatReturns=a,i.thatReturnsFalse=a(!1),i.thatReturnsTrue=a(!0),i.thatReturnsNull=a(null),i.thatReturnsThis=function(){return this},i.thatReturnsArgument=function(e){return e},e.exports=i},function(e,n,t){"use strict";var a=t(87),i=t(86),o=t(85);e.exports=function(){function e(e,n,t,a,r,s){s!==o&&i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n};return t.checkPropTypes=a,t.PropTypes=t,t}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,i=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),o=t(2),r=t(0),s=(a=r)&&a.__esModule?a:{default:a};var c=function(e){function n(e,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var a=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,t));if(!e.client)throw new Error("CozyProvider was not passed a client instance.");return e.store&&e.client.setStore(e.store),a}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,o.Component),i(n,[{key:"getChildContext",value:function(){return{store:this.props.store||this.context.store||this.props.client.getOrCreateStore(),client:this.props.client}}},{key:"render",value:function(){return this.props.children?Array.isArray(this.props.children)?this.props.children[0]:this.props.children:null}}]),n}();c.propTypes={store:s.default.shape({subscribe:s.default.func.isRequired,dispatch:s.default.func.isRequired,getState:s.default.func.isRequired}),client:s.default.object.isRequired,children:s.default.element.isRequired},c.childContextTypes={store:s.default.object,client:s.default.object.isRequired},c.contextTypes={store:s.default.object},n.default=c},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=t(15);var s=Object.prototype.hasOwnProperty;function c(e,n){return e===n?0!==e||0!==n||1/e==1/n:e!=e&&n!=n}var u=function(){function e(n,t,a){var i=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.handleStoreChange=function(){var e=i.currentRawResult();(function(e,n){if(c(e,n))return!0;if("object"!==(void 0===e?"undefined":o(e))||null===e||"object"!==(void 0===n?"undefined":o(n))||null===n)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(var i=0;i<t.length;i++)if(!s.call(n,t[i])||!c(e[t[i]],n[t[i]]))return!1;return!0})(e,i.lastResult)||(i.lastResult=e,i.notifyObservers())},this.queryId=n,this.definition=t,this.client=a,this.observers={},this.idCounter=1,this.lastResult=this.currentRawResult(),this.unsubscribeStore=this.getStore().subscribe(this.handleStoreChange)}return i(e,[{key:"currentResult",value:function(){var e=(0,r.getQueryFromStore)(this.getStore().getState(),this.queryId);return"loaded"!==e.fetchStatus?e:a({},e,{data:this.client.hydrateDocuments(this.definition.doctype,e.data,this.queryId)})}},{key:"fetchMore",value:function(){return this.client.query(this.definition.offset(this.currentRawResult().data.length),{as:this.queryId})}},{key:"getAssociation",value:function(e,n){return this.client.getAssociation(e,n,this.queryId)}},{key:"create",value:function(e,n,t){n._type;var i=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(n,["_type"]),o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.client.create(e,i,t,a({},o,{contextQueryId:this.queryId}))}},{key:"save",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.client.save(e,a({},n,{contextQueryId:this.queryId}))}},{key:"validate",value:function(e){return this.client.validate(e)}},{key:"destroy",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.client.destroy(e,a({},n,{contextQueryId:this.queryId}))}},{key:"upload",value:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.client.upload(e,n,a({},t,{contextQueryId:this.queryId}))}},{key:"currentRawResult",value:function(){return(0,r.getRawQueryFromStore)(this.getStore().getState(),this.queryId)}},{key:"notifyObservers",value:function(){var e=this;Object.keys(this.observers).forEach(function(n){return e.observers[n]()})}},{key:"subscribe",value:function(e){var n=this,t=this.idCounter;return this.idCounter++,this.observers[t]=e,function(){return n.unsubscribe(t)}}},{key:"unsubscribe",value:function(e){delete this.observers[e]}},{key:"getStore",value:function(){return this.client.getOrCreateStore()}}]),e}();n.default=u},function(e,n){e.exports=function(e){if(!e.webpackPolyfill){var n=Object.create(e);n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),Object.defineProperty(n,"exports",{enumerable:!0}),n.webpackPolyfill=1}return n}},function(e,n){e.exports=function(e){for(var n=-1,t=null==e?0:e.length,a={};++n<t;){var i=e[n];a[i[0]]=i[1]}return a}},function(e,n,t){var a=t(40);e.exports=function(e){return function(n){return a(n,e)}}},function(e,n){e.exports=function(e){return function(n){return null==n?void 0:n[e]}}},function(e,n,t){var a=t(94),i=t(93),o=t(21),r=t(9);e.exports=function(e){return o(e)?a(r(e)):i(e)}},function(e,n,t){var a=t(39),i=t(25),o=t(1),r=t(50),s=t(24),c=t(9);e.exports=function(e,n,t){for(var u=-1,p=(n=a(n,e)).length,l=!1;++u<p;){var d=c(n[u]);if(!(l=null!=e&&t(e,d)))break;e=e[d]}return l||++u!=p?l:!!(p=null==e?0:e.length)&&s(p)&&r(d,p)&&(o(e)||i(e))}},function(e,n){e.exports=function(e,n){return null!=e&&n in Object(e)}},function(e,n,t){var a=t(97),i=t(96);e.exports=function(e,n){return null!=e&&i(e,n,a)}},function(e,n){e.exports=function(e,n){for(var t=-1,a=null==e?0:e.length,i=Array(a);++t<a;)i[t]=n(e[t],t,e);return i}},function(e,n,t){var a=t(7),i=t(99),o=t(1),r=t(20),s=1/0,c=a?a.prototype:void 0,u=c?c.toString:void 0;e.exports=function e(n){if("string"==typeof n)return n;if(o(n))return i(n,e)+"";if(r(n))return u?u.call(n):"";var t=n+"";return"0"==t&&1/n==-s?"-0":t}},function(e,n,t){var a=t(100);e.exports=function(e){return null==e?"":a(e)}},function(e,n,t){var a=t(22),i="Expected a function";function o(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError(i);var t=function(){var a=arguments,i=n?n.apply(this,a):a[0],o=t.cache;if(o.has(i))return o.get(i);var r=e.apply(this,a);return t.cache=o.set(i,r)||o,r};return t.cache=new(o.Cache||a),t}o.Cache=a,e.exports=o},function(e,n,t){var a=t(102),i=500;e.exports=function(e){var n=a(e,function(e){return t.size===i&&t.clear(),e}),t=n.cache;return n}},function(e,n,t){var a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,o=t(103)(function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(a,function(e,t,a,o){n.push(a?o.replace(i,"$1"):t||e)}),n});e.exports=o},function(e,n,t){var a=t(40);e.exports=function(e,n,t){var i=null==e?void 0:a(e,n);return void 0===i?t:i}},function(e,n,t){var a=t(46),i=t(105),o=t(98),r=t(21),s=t(42),c=t(41),u=t(9),p=1,l=2;e.exports=function(e,n){return r(e)&&s(n)?c(u(e),n):function(t){var r=i(t,e);return void 0===r&&r===n?o(t,e):a(n,r,p|l)}}},function(e,n,t){var a=t(42),i=t(26);e.exports=function(e){for(var n=i(e),t=n.length;t--;){var o=n[t],r=e[o];n[t]=[o,r,a(r)]}return n}},function(e,n,t){var a=t(4)(t(3),"Set");e.exports=a},function(e,n,t){var a=t(4)(t(3),"Promise");e.exports=a},function(e,n,t){var a=t(4)(t(3),"DataView");e.exports=a},function(e,n,t){var a=t(110),i=t(23),o=t(109),r=t(108),s=t(43),c=t(6),u=t(52),p=u(a),l=u(i),d=u(o),f=u(r),m=u(s),v=c;(a&&"[object DataView]"!=v(new a(new ArrayBuffer(1)))||i&&"[object Map]"!=v(new i)||o&&"[object Promise]"!=v(o.resolve())||r&&"[object Set]"!=v(new r)||s&&"[object WeakMap]"!=v(new s))&&(v=function(e){var n=c(e),t="[object Object]"==n?e.constructor:void 0,a=t?u(t):"";if(a)switch(a){case p:return"[object DataView]";case l:return"[object Map]";case d:return"[object Promise]";case f:return"[object Set]";case m:return"[object WeakMap]"}return n}),e.exports=v},function(e,n){e.exports=function(){return[]}},function(e,n){e.exports=function(e,n){for(var t=-1,a=null==e?0:e.length,i=0,o=[];++t<a;){var r=e[t];n(r,t,e)&&(o[i++]=r)}return o}},function(e,n,t){var a=t(113),i=t(112),o=Object.prototype.propertyIsEnumerable,r=Object.getOwnPropertySymbols,s=r?function(e){return null==e?[]:(e=Object(e),a(r(e),function(n){return o.call(e,n)}))}:i;e.exports=s},function(e,n,t){var a=t(44),i=t(1);e.exports=function(e,n,t){var o=n(e);return i(e)?o:a(o,t(e))}},function(e,n,t){var a=t(115),i=t(114),o=t(26);e.exports=function(e){return a(e,o,i)}},function(e,n,t){var a=t(116),i=1,o=Object.prototype.hasOwnProperty;e.exports=function(e,n,t,r,s,c){var u=t&i,p=a(e),l=p.length;if(l!=a(n).length&&!u)return!1;for(var d=l;d--;){var f=p[d];if(!(u?f in n:o.call(n,f)))return!1}var m=c.get(e);if(m&&c.get(n))return m==n;var v=!0;c.set(e,n),c.set(n,e);for(var x=u;++d<l;){var h=e[f=p[d]],y=n[f];if(r)var b=u?r(y,h,f,n,e,c):r(h,y,f,e,n,c);if(!(void 0===b?h===y||s(h,y,t,r,c):b)){v=!1;break}x||(x="constructor"==f)}if(v&&!x){var g=e.constructor,w=n.constructor;g!=w&&"constructor"in e&&"constructor"in n&&!("function"==typeof g&&g instanceof g&&"function"==typeof w&&w instanceof w)&&(v=!1)}return c.delete(e),c.delete(n),v}},function(e,n){e.exports=function(e){var n=-1,t=Array(e.size);return e.forEach(function(e){t[++n]=e}),t}},function(e,n){e.exports=function(e){var n=-1,t=Array(e.size);return e.forEach(function(e,a){t[++n]=[a,e]}),t}},function(e,n,t){var a=t(3).Uint8Array;e.exports=a},function(e,n,t){var a=t(7),i=t(120),o=t(47),r=t(45),s=t(119),c=t(118),u=1,p=2,l="[object Boolean]",d="[object Date]",f="[object Error]",m="[object Map]",v="[object Number]",x="[object RegExp]",h="[object Set]",y="[object String]",b="[object Symbol]",g="[object ArrayBuffer]",w="[object DataView]",k=a?a.prototype:void 0,_=k?k.valueOf:void 0;e.exports=function(e,n,t,a,k,O,j){switch(t){case w:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case g:return!(e.byteLength!=n.byteLength||!O(new i(e),new i(n)));case l:case d:case v:return o(+e,+n);case f:return e.name==n.name&&e.message==n.message;case x:case y:return e==n+"";case m:var P=s;case h:var E=a&u;if(P||(P=c),e.size!=n.size&&!E)return!1;var R=j.get(e);if(R)return R==n;a|=p,j.set(e,n);var T=r(P(e),P(n),a,k,O,j);return j.delete(e),T;case b:if(_)return _.call(e)==_.call(n)}return!1}},function(e,n){e.exports=function(e,n){return e.has(n)}},function(e,n){e.exports=function(e,n){for(var t=-1,a=null==e?0:e.length;++t<a;)if(n(e[t],t,e))return!0;return!1}},function(e,n){e.exports=function(e){return this.__data__.has(e)}},function(e,n){var t="__lodash_hash_undefined__";e.exports=function(e){return this.__data__.set(e,t),this}},function(e,n,t){var a=t(22),i=t(125),o=t(124);function r(e){var n=-1,t=null==e?0:e.length;for(this.__data__=new a;++n<t;)this.add(e[n])}r.prototype.add=r.prototype.push=i,r.prototype.has=o,e.exports=r},function(e,n,t){var a=t(48),i=t(45),o=t(121),r=t(117),s=t(111),c=t(1),u=t(51),p=t(49),l=1,d="[object Arguments]",f="[object Array]",m="[object Object]",v=Object.prototype.hasOwnProperty;e.exports=function(e,n,t,x,h,y){var b=c(e),g=c(n),w=b?f:s(e),k=g?f:s(n),_=(w=w==d?m:w)==m,O=(k=k==d?m:k)==m,j=w==k;if(j&&u(e)){if(!u(n))return!1;b=!0,_=!1}if(j&&!_)return y||(y=new a),b||p(e)?i(e,n,t,x,h,y):o(e,n,w,t,x,h,y);if(!(t&l)){var P=_&&v.call(e,"__wrapped__"),E=O&&v.call(n,"__wrapped__");if(P||E){var R=P?e.value():e,T=E?n.value():n;return y||(y=new a),h(R,T,t,x,y)}}return!!j&&(y||(y=new a),r(e,n,t,x,h,y))}},function(e,n,t){var a=t(10);e.exports=function(e,n){var t=a(this,e),i=t.size;return t.set(e,n),this.size+=t.size==i?0:1,this}},function(e,n,t){var a=t(10);e.exports=function(e){return a(this,e).has(e)}},function(e,n,t){var a=t(10);e.exports=function(e){return a(this,e).get(e)}},function(e,n){e.exports=function(e){var n=typeof e;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e}},function(e,n,t){var a=t(10);e.exports=function(e){var n=a(this,e).delete(e);return this.size-=n?1:0,n}},function(e,n,t){var a=t(11),i="__lodash_hash_undefined__";e.exports=function(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=a&&void 0===n?i:n,this}},function(e,n,t){var a=t(11),i=Object.prototype.hasOwnProperty;e.exports=function(e){var n=this.__data__;return a?void 0!==n[e]:i.call(n,e)}},function(e,n,t){var a=t(11),i="__lodash_hash_undefined__",o=Object.prototype.hasOwnProperty;e.exports=function(e){var n=this.__data__;if(a){var t=n[e];return t===i?void 0:t}return o.call(n,e)?n[e]:void 0}},function(e,n){e.exports=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}},function(e,n,t){var a=t(11);e.exports=function(){this.__data__=a?a(null):{},this.size=0}},function(e,n,t){var a=t(137),i=t(136),o=t(135),r=t(134),s=t(133);function c(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var a=e[n];this.set(a[0],a[1])}}c.prototype.clear=a,c.prototype.delete=i,c.prototype.get=o,c.prototype.has=r,c.prototype.set=s,e.exports=c},function(e,n,t){var a=t(138),i=t(13),o=t(23);e.exports=function(){this.size=0,this.__data__={hash:new a,map:new(o||i),string:new a}}},function(e,n,t){var a=t(13),i=t(23),o=t(22),r=200;e.exports=function(e,n){var t=this.__data__;if(t instanceof a){var s=t.__data__;if(!i||s.length<r-1)return s.push([e,n]),this.size=++t.size,this;t=this.__data__=new o(s)}return t.set(e,n),this.size=t.size,this}},function(e,n){e.exports=function(e){return this.__data__.has(e)}},function(e,n){e.exports=function(e){return this.__data__.get(e)}},function(e,n){e.exports=function(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t}},function(e,n,t){var a=t(13);e.exports=function(){this.__data__=new a,this.size=0}},function(e,n,t){var a=t(12);e.exports=function(e,n){var t=this.__data__,i=a(t,e);return i<0?(++this.size,t.push([e,n])):t[i][1]=n,this}},function(e,n,t){var a=t(12);e.exports=function(e){return a(this.__data__,e)>-1}},function(e,n,t){var a=t(12);e.exports=function(e){var n=this.__data__,t=a(n,e);return t<0?void 0:n[t][1]}},function(e,n,t){var a=t(12),i=Array.prototype.splice;e.exports=function(e){var n=this.__data__,t=a(n,e);return!(t<0||(t==n.length-1?n.pop():i.call(n,t,1),--this.size,0))}},function(e,n){e.exports=function(){this.__data__=[],this.size=0}},function(e,n,t){var a=t(48),i=t(46),o=1,r=2;e.exports=function(e,n,t,s){var c=t.length,u=c,p=!s;if(null==e)return!u;for(e=Object(e);c--;){var l=t[c];if(p&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++c<u;){var d=(l=t[c])[0],f=e[d],m=l[1];if(p&&l[2]){if(void 0===f&&!(d in e))return!1}else{var v=new a;if(s)var x=s(f,m,d,e,n,v);if(!(void 0===x?i(m,f,o|r,s,v):x))return!1}}return!0}},function(e,n,t){var a=t(150),i=t(107),o=t(41);e.exports=function(e){var n=i(e);return 1==n.length&&n[0][2]?o(n[0][0],n[0][1]):function(t){return t===e||a(t,e,n)}}},function(e,n,t){var a=t(151),i=t(106),o=t(38),r=t(1),s=t(95);e.exports=function(e){return"function"==typeof e?e:null==e?o:"object"==typeof e?r(e)?i(e[0],e[1]):a(e):s(e)}},function(e,n,t){var a=t(53),i=t(24);e.exports=function(e){return null!=e&&i(e.length)&&!a(e)}},function(e,n){e.exports=function(e,n){return function(t){return e(n(t))}}},function(e,n,t){var a=t(154)(Object.keys,Object);e.exports=a},function(e,n){var t=Object.prototype;e.exports=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||t)}},function(e,n,t){var a=t(156),i=t(155),o=Object.prototype.hasOwnProperty;e.exports=function(e){if(!a(e))return i(e);var n=[];for(var t in Object(e))o.call(e,t)&&"constructor"!=t&&n.push(t);return n}},function(e,n,t){(function(e){var a=t(57),i="object"==typeof n&&n&&!n.nodeType&&n,o=i&&"object"==typeof e&&e&&!e.nodeType&&e,r=o&&o.exports===i&&a.process,s=function(){try{var e=o&&o.require&&o.require("util").types;return e||r&&r.binding&&r.binding("util")}catch(e){}}();e.exports=s}).call(this,t(28)(e))},function(e,n){e.exports=function(e){return function(n){return e(n)}}},function(e,n,t){var a=t(6),i=t(24),o=t(5),r={};r["[object Float32Array]"]=r["[object Float64Array]"]=r["[object Int8Array]"]=r["[object Int16Array]"]=r["[object Int32Array]"]=r["[object Uint8Array]"]=r["[object Uint8ClampedArray]"]=r["[object Uint16Array]"]=r["[object Uint32Array]"]=!0,r["[object Arguments]"]=r["[object Array]"]=r["[object ArrayBuffer]"]=r["[object Boolean]"]=r["[object DataView]"]=r["[object Date]"]=r["[object Error]"]=r["[object Function]"]=r["[object Map]"]=r["[object Number]"]=r["[object Object]"]=r["[object RegExp]"]=r["[object Set]"]=r["[object String]"]=r["[object WeakMap]"]=!1,e.exports=function(e){return o(e)&&i(e.length)&&!!r[a(e)]}},function(e,n){e.exports=function(){return!1}},function(e,n,t){var a=t(6),i=t(5),o="[object Arguments]";e.exports=function(e){return i(e)&&a(e)==o}},function(e,n){e.exports=function(e,n){for(var t=-1,a=Array(e);++t<e;)a[t]=n(t);return a}},function(e,n,t){var a=t(163),i=t(25),o=t(1),r=t(51),s=t(50),c=t(49),u=Object.prototype.hasOwnProperty;e.exports=function(e,n){var t=o(e),p=!t&&i(e),l=!t&&!p&&r(e),d=!t&&!p&&!l&&c(e),f=t||p||l||d,m=f?a(e.length,String):[],v=m.length;for(var x in e)!n&&!u.call(e,x)||f&&("length"==x||l&&("offset"==x||"parent"==x)||d&&("buffer"==x||"byteLength"==x||"byteOffset"==x)||s(x,v))||m.push(x);return m}},function(e,n){e.exports=function(e){return function(n,t,a){for(var i=-1,o=Object(n),r=a(n),s=r.length;s--;){var c=r[e?s:++i];if(!1===t(o[c],c,o))break}return n}}},function(e,n,t){var a=t(165)();e.exports=a},function(e,n,t){var a=t(166),i=t(26);e.exports=function(e,n){return e&&a(e,n,i)}},function(e,n){e.exports=function(e,n){return null==e?void 0:e[n]}},function(e,n,t){var a=t(3)["__core-js_shared__"];e.exports=a},function(e,n,t){var a,i=t(169),o=(a=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||""))?"Symbol(src)_1."+a:"";e.exports=function(e){return!!o&&o in e}},function(e,n,t){var a=t(53),i=t(170),o=t(14),r=t(52),s=/^\[object .+?Constructor\]$/,c=Function.prototype,u=Object.prototype,p=c.toString,l=u.hasOwnProperty,d=RegExp("^"+p.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!o(e)||i(e))&&(a(e)?d:s).test(r(e))}},function(e,n,t){var a=t(54);e.exports=function(e,n,t){"__proto__"==n&&a?a(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}},function(e,n,t){var a=t(172),i=t(167),o=t(152);e.exports=function(e,n){var t={};return n=o(n,3),i(e,function(e,i,o){a(t,i,n(e,i,o))}),t}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.authenticateWithCordova=function(e){return void 0!==window.cordova&&void 0!==window.cordova.InAppBrowser?new Promise(function(n,t){var a=window.cordova.InAppBrowser.open(e,"_blank","clearcache=yes,zoom=no"),i=function(){a.removeEventListener("loadstart",o),a.removeEventListener("exit",r)},o=function(e){var t=e.url,o=/\?access_code=(.+)$/.test(t),r=/\?state=(.+)$/.test(t);(o||r)&&(n(t),i(),a.close())},r=function(){t(new Error("REGISTRATION_ABORT")),i(),a.close()};a.addEventListener("loadstart",o),a.addEventListener("exit",r)}):(console.log(e),new Promise(function(e){setTimeout(function(){var n=prompt("Paste the url here:");e(n)},1e4)}))}},function(e,n,t){"use strict";(function(e){var t,a,i,o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};window,o=function(){return function(e){var n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=15)}([function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.uri=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];for(var i=[e[0]],o=0;o<t.length;o++)i.push(encodeURIComponent(t[o])+e[o+1]);return i.join("")},n.attempt=function(e){return e.then(function(){return!0}).catch(function(){return!1})},n.sleep=function(e,n){return new Promise(function(t){setTimeout(t,e,n)})},n.slugify=function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},n.forceFileDownload=function(e,n){var t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download",n),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}},function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.normalizeDoc=n.FETCH_LIMIT=void 0;var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o=h(["/data/","/_all_docs?include_docs=true"],["/data/","/_all_docs?include_docs=true"]),r=h(["/data/","/_all_docs?include_docs=true&keys=[","]"],["/data/","/_all_docs?include_docs=true&keys=[","]"]),s=h(["/data/","/_all_docs?include_docs=true&limit=","&skip=",""],["/data/","/_all_docs?include_docs=true&limit=","&skip=",""]),c=h(["/data/","/_find"],["/data/","/_find"]),u=h(["/data/","/",""],["/data/","/",""]),p=h(["/data/","/"],["/data/","/"]),l=h(["/data/","/","?rev=",""],["/data/","/","?rev=",""]),d=h(["/data/","/_index"],["/data/","/_index"]),f=t(0);function m(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function x(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}function h(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function y(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){return function a(i,o){try{var r=n[i](o),s=r.value}catch(e){return void t(e)}if(!r.done)return Promise.resolve(s).then(function(e){a("next",e)},function(e){a("throw",e)});e(s)}("next")})}}var b=n.FETCH_LIMIT=50,g=n.normalizeDoc=function(e,n){var t=e._id||e.id;return i({id:t,_id:t,_type:n},e)},w=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.doctype=n,this.client=t,this.indexes={}}return a(e,[{key:"all",value:function(){var e=y(regeneratorRuntime.mark(function e(){var n,t,a,i,c,u,p,l,d,m=this,v=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=v.limit,t=void 0===n?b:n,a=v.skip,i=void 0===a?0:a,c=v.keys,u=void 0===c?void 0:c,p=null===t?(0,f.uri)(o,this.doctype):u?(0,f.uri)(r,this.doctype,u.map(function(e){return'"'+e+'"'}).join(",")):(0,f.uri)(s,this.doctype,t,i),e.prev=2,e.next=5,this.client.fetchJSON("GET",p);case 5:return l=e.sent,d=l.rows.filter(function(e){return e.doc&&!e.doc.hasOwnProperty("views")}),e.abrupt("return",{data:d.map(function(e){return g(e.doc,m.doctype)}),meta:{count:l.total_rows},skip:l.offset||0,next:l.offset+d.length<=l.total_rows});case 10:if(e.prev=10,e.t0=e.catch(2),!e.t0.message.match(/not_found/)){e.next=14;break}return e.abrupt("return",{data:[],meta:{count:0},skip:0,next:!1});case 14:throw e.t0;case 15:case"end":return e.stop()}},e,this,[[2,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"find",value:function(){var e=y(regeneratorRuntime.mark(function e(n){var t,a,i,o=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.skip,a=void 0===t?0:t,e.t0=this.client,e.t1=(0,f.uri)(c,this.doctype),e.next=5,this.toMangoOptions(n,r);case 5:return e.t2=e.sent,e.next=8,e.t0.fetchJSON.call(e.t0,"POST",e.t1,e.t2);case 8:return i=e.sent,e.abrupt("return",{data:i.docs.map(function(e){return g(e,o.doctype)}),meta:{count:i.next?a+i.docs.length+1:i.docs.length},next:i.next,skip:a});case 10:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"get",value:function(){var e=y(regeneratorRuntime.mark(function e(n){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.fetchJSON("GET",(0,f.uri)(u,this.doctype,n));case 2:return t=e.sent,e.abrupt("return",{data:g(t,this.doctype)});case 4:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"create",value:function(){var e=y(regeneratorRuntime.mark(function e(n){n._id,n._type;var t,a=x(n,["_id","_type"]);return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.fetchJSON("POST",(0,f.uri)(p,this.doctype),a);case 2:return t=e.sent,e.abrupt("return",{data:g(t.data,this.doctype)});case 4:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=y(regeneratorRuntime.mark(function e(n){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.fetchJSON("PUT",(0,f.uri)(u,this.doctype,n._id),n);case 2:return t=e.sent,e.abrupt("return",{data:g(t.data,this.doctype)});case 4:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"destroy",value:function(){var e=y(regeneratorRuntime.mark(function e(n){var t,a=n._id,o=n._rev,r=x(n,["_id","_rev"]);return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.fetchJSON("DELETE",(0,f.uri)(l,this.doctype,a,o));case 2:return t=e.sent,e.abrupt("return",{data:g(i({},r,{_id:a,_rev:t.rev,_deleted:!0}),this.doctype)});case 4:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"toMangoOptions",value:function(){var e=y(regeneratorRuntime.mark(function e(n){var t,a,o,r,s,c,u,p,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.getIndexFields(i({},l,{selector:n})),e.t0=l.indexId,e.t0){e.next=6;break}return e.next=5,this.getIndexId(t);case 5:e.t0=e.sent;case 6:return a=e.t0,o=l.fields,r=l.skip,s=void 0===r?0:r,c=l.limit,u=void 0===c?b:c,p=l.sort?t.map(function(e){return v({},e,l.sort[e]||"desc")}):void 0,e.abrupt("return",{selector:n,use_index:a,fields:o?[].concat(m(o),["_id","_type","class"]):void 0,limit:u,skip:s,sort:p});case 10:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"checkUniquenessOf",value:function(){var e=y(regeneratorRuntime.mark(function e(n,t){var a,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getUniqueIndexId(n);case 2:return a=e.sent,e.next=5,this.find(v({},n,t),{indexId:a,fields:["_id"]});case 5:return i=e.sent,e.abrupt("return",0===i.data.length);case 7:case"end":return e.stop()}},e,this)}));return function(n,t){return e.apply(this,arguments)}}()},{key:"getUniqueIndexId",value:function(e){return this.getIndexId([e],this.doctype+"/"+e)}},{key:"getIndexId",value:function(){var e=y(regeneratorRuntime.mark(function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getIndexNameFromFields(n);return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.indexes[t]){e.next=4;break}return e.next=3,this.createIndex(n);case 3:this.indexes[t]=e.sent;case 4:return e.abrupt("return",this.indexes[t].id);case 5:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"createIndex",value:function(){var e=y(regeneratorRuntime.mark(function e(n){var t,a,i,o,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={index:{fields:n}},e.next=3,this.client.fetchJSON("POST",(0,f.uri)(d,this.doctype),t);case 3:if(a=e.sent,i={id:a.id,fields:n},"exists"!==a.result){e.next=7;break}return e.abrupt("return",i);case 7:return o=v({},n[0],{$gt:null}),r={indexId:i.id},e.next=11,(0,f.attempt)(this.find(o,r));case 11:if(!e.sent){e.next=13;break}return e.abrupt("return",i);case 13:return e.next=15,sleep(1e3);case 15:return e.next=17,(0,f.attempt)(this.find(o,r));case 17:if(!e.sent){e.next=19;break}return e.abrupt("return",i);case 19:return e.next=21,sleep(500);case 21:return e.abrupt("return",i);case 22:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"getIndexNameFromFields",value:function(e){return"by_"+e.sort(function(e,n){return e.localeCompare(n)}).join("_and_")}},{key:"getIndexFields",value:function(e){var n=e.selector,t=e.sort,a=void 0===t?{}:t;return Array.from(new Set([].concat(m(Object.keys(n)),m(Object.keys(a)))))}}]),e}();n.default=w},function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.isDirectory=n.isFile=void 0;var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o=g(["/data/","/","/relationships/references?include=files&sort=datetime&page[limit]=","&page[skip]=",""],["/data/","/","/relationships/references?include=files&sort=datetime&page[limit]=","&page[skip]=",""]),s=g(["/data/","/","/relationships/references"],["/data/","/","/relationships/references"]),c=g(["/files/",""],["/files/",""]),u=g(["/files/","?Name=","&Type=file&Executable=",""],["/files/","?Name=","&Type=file&Executable=",""]),p=g(["/files/downloads?Id=",""],["/files/downloads?Id=",""]),l=g(["/files/downloads?Path=",""],["/files/downloads?Path=",""]),d=g(["/files/","?limit=","&skip=",""],["/files/","?limit=","&skip=",""]),f=g(["/files/metadata?Path=",""],["/files/metadata?Path=",""]),m=g(["/files/","?Name=","&Type=directory"],["/files/","?Name=","&Type=directory"]),v=b(t(12)),x=t(1),h=b(x),y=t(0);function b(e){return e&&e.__esModule?e:{default:e}}function g(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function w(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){return function a(i,o){try{var r=n[i](o),s=r.value}catch(e){return void t(e)}if(!r.done)return Promise.resolve(s).then(function(e){a("next",e)},function(e){a("throw",e)});e(s)}("next")})}}var k=function(e){return i({},(0,x.normalizeDoc)(e,"io.cozy.files"),e.attributes)},_=function(e){return e&&e.trim()},O=(n.isFile=function(e){var n=e._type,t=e.type;return"io.cozy.files"===n||"directory"===t||"file"===t},n.isDirectory=function(e){return"directory"===e.type},function(e){function n(e,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var a=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=(void 0===n?"undefined":r(n))&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,t));return a.extractResponseLinkRelated=function(e){var n=e.links&&e.links.related;if(!n)throw new Error("No related link in server response");return a.client.fullpath(n)},a.specialDirectories={},a}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+(void 0===n?"undefined":r(n)));e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,h.default),a(n,[{key:"get",value:function(e){return this.statById(e)}},{key:"find",value:function(){var e=w(regeneratorRuntime.mark(function e(n){var t,a,i,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.skip,a=void 0===t?0:t,e.t0=this.client,e.next=4,this.toMangoOptions(n,o);case 4:return e.t1=e.sent,e.next=7,e.t0.fetchJSON.call(e.t0,"POST","/files/_find",e.t1);case 7:return i=e.sent,e.abrupt("return",{data:i.data.map(function(e){return k(e)}),meta:i.meta,next:i.meta.count>a+x.FETCH_LIMIT,skip:a});case 9:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"findReferencedBy",value:function(){var e=w(regeneratorRuntime.mark(function e(n){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.skip,r=void 0===i?0:i,s=a.limit,c=void 0===s?x.FETCH_LIMIT:s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.fetchJSON("GET",(0,y.uri)(o,n._type,n._id,c,r));case 2:return t=e.sent,e.abrupt("return",{data:t.data.map(function(e){return k(e)}),included:t.included?t.included.map(function(e){return k(e)}):[],next:t.meta.count>r+x.FETCH_LIMIT,meta:t.meta,skip:r});case 4:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"addReferencesTo",value:function(e,n){var t=n.map(function(e){return{id:e._id,type:"io.cozy.files"}});return this.client.fetchJSON("POST",(0,y.uri)(s,e._type,e._id),{data:t})}},{key:"removeReferencesTo",value:function(e,n){var t=n.map(function(e){return{id:e._id,type:"io.cozy.files"}});return this.client.fetchJSON("DELETE",(0,y.uri)(s,e._type,e._id),{data:t})}},{key:"destroy",value:function(){var e=w(regeneratorRuntime.mark(function e(n){var t,a,i,o,r,s,u,p=n._id,l=n.relationships,d=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).ifMatch,f=void 0===d?"":d;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(l&&l.referenced_by&&Array.isArray(l.referenced_by.data))){e.next=27;break}t=!0,a=!1,i=void 0,e.prev=4,o=l.referenced_by.data[Symbol.iterator]();case 6:if(t=(r=o.next()).done){e.next=13;break}return s=r.value,e.next=10,this.removeReferencesTo({_id:s.id,_type:s.type},[{_id:p}]);case 10:t=!0,e.next=6;break;case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(4),a=!0,i=e.t0;case 19:e.prev=19,e.prev=20,!t&&o.return&&o.return();case 22:if(e.prev=22,!a){e.next=25;break}throw i;case 25:return e.finish(22);case 26:return e.finish(19);case 27:return e.next=29,this.client.fetchJSON("DELETE",(0,y.uri)(c,p),void 0,{headers:{"If-Match":f}});case 29:return u=e.sent,e.abrupt("return",{data:k(u.data)});case 31:case"end":return e.stop()}},e,this,[[4,15,19,27],[20,,22,26]])}));return function(n){return e.apply(this,arguments)}}()},{key:"upload",value:function(){var e=w(regeneratorRuntime.mark(function e(n,t){var a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.ensureDirectoryExists(t);case 2:return a=e.sent,e.abrupt("return",this.createFile(n,{dirId:a}));case 4:case"end":return e.stop()}},e,this)}));return function(n,t){return e.apply(this,arguments)}}()},{key:"createFile",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.name,a=n.dirId,i=void 0===a?"":a,o=n.executable,r=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(n,["name","dirId","executable"]);if(t||"string"!=typeof e.name||(t=e.name),"string"!=typeof(t=_(t))||""===t)throw new Error("missing name argument");void 0===o&&(o=!1);var s=(0,y.uri)(u,i,t,o);return this.doUpload(e,s,r)}},{key:"getDownloadLinkById",value:function(e){return this.client.fetchJSON("POST",(0,y.uri)(p,e)).then(this.extractResponseLinkRelated)}},{key:"getDownloadLinkByPath",value:function(e){return this.client.fetchJSON("POST",(0,y.uri)(l,e)).then(this.extractResponseLinkRelated)}},{key:"download",value:function(){var e=w(regeneratorRuntime.mark(function e(n){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getDownloadLinkById(n._id);case 2:t=e.sent,(0,y.forceFileDownload)(t,n.name);case 4:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"downloadArchive",value:function(){var e=w(regeneratorRuntime.mark(function e(n){var t,a,i,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"files";return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,y.slugify)(o),e.next=3,this.getArchiveLinkByIds(n,t);case 3:a=e.sent,i=this.client.fullpath(a),(0,y.forceFileDownload)(i,t+".zip");case 6:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"getArchiveLinkByIds",value:function(){var e=w(regeneratorRuntime.mark(function e(n){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"files";return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.fetchJSON("POST","/files/archive",{data:{type:"io.cozy.archives",attributes:{name:a,ids:n}}});case 2:return t=e.sent,e.abrupt("return",t.links.related);case 4:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"statById",value:function(){var e=w(regeneratorRuntime.mark(function e(n){var t,a,i,o,r,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.limit,a=void 0===t?x.FETCH_LIMIT:t,i=s.skip,o=void 0===i?0:i,e.next=3,this.client.fetchJSON("GET",(0,y.uri)(d,n,a,o));case 3:return r=e.sent,e.abrupt("return",{data:k(r.data),included:r.included&&r.included.map(function(e){return k(e)})});case 5:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"statByPath",value:function(){var e=w(regeneratorRuntime.mark(function e(n){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.fetchJSON("GET",(0,y.uri)(f,n));case 2:return t=e.sent,e.abrupt("return",{data:k(t.data),included:t.included&&t.included.map(function(e){return k(e)})});case 4:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"createDirectory",value:function(){var e=w(regeneratorRuntime.mark(function e(){var n,t,a,i,o,r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=s.name,t=s.dirId,a=s.lastModifiedDate,i=_(n),"string"==typeof n&&""!==i){e.next=4;break}throw new Error("missing name argument");case 4:return o=a&&("string"==typeof a?new Date(a):a),e.next=7,this.client.fetchJSON("POST",(0,y.uri)(m,t,i),void 0,{headers:{Date:o?o.toGMTString():""}});case 7:return r=e.sent,e.abrupt("return",{data:k(r.data)});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"ensureDirectoryExists",value:function(){var e=w(regeneratorRuntime.mark(function e(n){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.specialDirectories[n]){e.next=5;break}return e.next=3,this.createDirectoryByPath(n);case 3:t=e.sent,this.specialDirectories[n]=t.data._id;case 5:return e.abrupt("return",this.specialDirectories[n]);case 6:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"getDirectoryOrCreate",value:function(){var e=w(regeneratorRuntime.mark(function e(n,t){var a,i,o,r,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||t.attributes){e.next=2;break}throw new Error("Malformed parent directory");case 2:return a=_(n),i=("io.cozy.files.root-dir"===t._id?"":t.attributes.path)+"/"+a,e.prev=4,e.next=7,this.statByPath(i||"/");case 7:return o=e.sent,e.abrupt("return",o);case 11:if(e.prev=11,e.t0=e.catch(4),r=JSON.parse(e.t0.message),!(s=r.errors)||!s.length||"404"!==s[0].status){e.next=17;break}return e.abrupt("return",this.createDirectory({name:a,dirID:t&&t._id}));case 17:throw s;case 18:case"end":return e.stop()}},e,this,[[4,11]])}));return function(n,t){return e.apply(this,arguments)}}()},{key:"createDirectoryByPath",value:function(){var e=w(regeneratorRuntime.mark(function e(n){var t,a,i,o,r,s,c,u,p;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.split("/").filter(function(e){return""!==e}),e.next=3,this.statById("io.cozy.files.root-dir");case 3:if(a=e.sent,t.length){e.next=6;break}return e.abrupt("return",a);case 6:i=a,o=!0,r=!1,s=void 0,e.prev=10,c=t[Symbol.iterator]();case 12:if(o=(u=c.next()).done){e.next=20;break}return p=u.value,e.next=16,this.getDirectoryOrCreate(p,i.data);case 16:i=e.sent;case 17:o=!0,e.next=12;break;case 20:e.next=26;break;case 22:e.prev=22,e.t0=e.catch(10),r=!0,s=e.t0;case 26:e.prev=26,e.prev=27,!o&&c.return&&c.return();case 29:if(e.prev=29,!r){e.next=32;break}throw s;case 32:return e.finish(29);case 33:return e.finish(26);case 34:return e.abrupt("return",i);case 35:case"end":return e.stop()}},e,this,[[10,22,26,34],[27,,29,33]])}));return function(n){return e.apply(this,arguments)}}()},{key:"doUpload",value:function(){var e=w(regeneratorRuntime.mark(function e(n,t,a){var i,o,r,s,c,u,p,l,d,f,m,x;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}throw new Error("missing data argument");case 2:if(n.buffer&&n.buffer instanceof ArrayBuffer&&(n=n.buffer),i="undefined"!=typeof ArrayBuffer&&n instanceof ArrayBuffer,o="undefined"!=typeof File&&n instanceof File,r="undefined"!=typeof Blob&&n instanceof Blob,s=!0===n.readable&&"function"==typeof n.pipe,i||o||r||s||"string"==typeof n){e.next=10;break}throw new Error("invalid data type");case 10:return u=(c=a||{}).contentType,p=c.contentLength,l=c.checksum,d=c.lastModifiedDate,f=c.ifMatch,u||(i?u="application/octet-stream":o?(u=n.type||(h=n.name.toLowerCase(),v.default.lookup(h)||"application/octet-stream")||"application/octet-stream",d||(d=n.lastModifiedDate)):r?u=n.type||"application/octet-stream":s?u="application/octet-stream":"string"==typeof n&&(u="text/plain")),d&&"string"==typeof d&&(d=new Date(d)),m={"Content-Type":u},p&&(m["Content-Length"]=String(p)),l&&(m["Content-MD5"]=l),d&&(m.Date=d.toGMTString()),f&&(m["If-Match"]=f),e.next=20,this.client.fetchJSON("POST",t,n,{headers:m});case 20:return x=e.sent,e.abrupt("return",{data:k(x.data)});case 22:case"end":return e.stop()}var h},e,this)}));return function(n,t,a){return e.apply(this,arguments)}}()}]),n}());n.default=O},function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.FetchError=void 0;var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),i=t(14),o=d(i),s=d(t(13)),c=d(t(1)),u=d(t(2)),p=d(t(7)),l=d(t(6));function d(e){return e&&e.__esModule?e:{default:e}}function f(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){return function a(i,o){try{var r=n[i](o),s=r.value}catch(e){return void t(e)}if(!r.done)return Promise.resolve(s).then(function(e){a("next",e)},function(e){a("throw",e)});e(s)}("next")})}}function m(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var v=function(){function e(n){var t=n.token,a=n.uri,i=void 0===a?"":a;m(this,e),this.setUri(i),this.setCredentials(t)}var n;return a(e,[{key:"collection",value:function(e){if(!e)throw new Error("CozyStackClient.collection() called without a doctype");switch(e){case i.APPS_DOCTYPE:return new o.default(this);case"io.cozy.files":return new u.default(e,this);case"io.cozy.sharings":return new p.default(e,this);case"io.cozy.permissions":return new l.default(e,this);default:return new c.default(e,this)}}},{key:"fetch",value:function(e){function n(n,t,a){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((n=f(regeneratorRuntime.mark(function e(n,t,a){var i,o,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.method=n,i=r.headers=r.headers||{},"GET"!==n&&"HEAD"!==n&&void 0!==a&&i["Content-Type"]&&(r.body=a),(o=r.credentials||this.getCredentials())&&(i.Authorization=o,r.credentials="include"),e.abrupt("return",fetch(this.fullpath(t),r));case 6:case"end":return e.stop()}},e,this)})),function(e,t,a){return n.apply(this,arguments)}))},{key:"fetchJSON",value:function(){var e=f(regeneratorRuntime.mark(function e(n,t,a){var i,o,r,s,c,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(i=u.headers=u.headers||{}).Accept="application/json","GET"!==n&&"HEAD"!==n&&void 0!==a&&(i["Content-Type"]||(i["Content-Type"]="application/json",a=JSON.stringify(a))),e.next=5,this.fetch(n,t,a,u);case 5:return o=e.sent,r=o.headers.get("content-type"),s=r&&r.indexOf("json")>=0,e.next=10,s?o.json():o.text();case 10:if(c=e.sent,!o.ok){e.next=13;break}return e.abrupt("return",c);case 13:throw new x(o,c);case 14:case"end":return e.stop()}},e,this)}));return function(n,t,a){return e.apply(this,arguments)}}()},{key:"fullpath",value:function(e){return this.uri+e}},{key:"getCredentials",value:function(){return this.token?this.token.toAuthHeader():null}},{key:"setCredentials",value:function(e){this.token=e?new s.default(e):null}},{key:"setUri",value:function(e){this.uri=function(e){for(;"/"===e[e.length-1];)e=e.slice(0,-1);return e}(e)}}]),e}();n.default=v;var x=n.FetchError=function(e){function n(e,t){m(this,n);var a=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=(void 0===n?"undefined":r(n))&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return Error.captureStackTrace&&Error.captureStackTrace(a,a.constructor),a.name="FetchError",a.response=e,a.url=e.url,a.status=e.status,a.reason=t,Object.defineProperty(a,"message",{value:t.message||("string"==typeof t?t:JSON.stringify(t))}),a}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+(void 0===n?"undefined":r(n)));e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,Error),n}()},function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),i=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),"string"==typeof n&&(n=JSON.parse(n)),this.tokenType=n.token_type||n.tokenType,this.accessToken=n.access_token||n.accessToken,this.refreshToken=n.refresh_token||n.refreshToken,this.scope=n.scope}return a(e,[{key:"toAuthHeader",value:function(){return"Bearer "+this.accessToken}},{key:"toBasicAuth",value:function(){return"user:"+this.accessToken+"@"}},{key:"toJSON",value:function(){return{tokenType:this.tokenType,accessToken:this.accessToken,refreshToken:this.refreshToken,scope:this.scope}}},{key:"toString",value:function(){return JSON.stringify(this.toJSON())}}]),e}();n.default=i},function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),o=function e(n,t,a){null===n&&(n=Function.prototype);var i=Object.getOwnPropertyDescriptor(n,t);if(void 0===i){var o=Object.getPrototypeOf(n);return null===o?void 0:e(o,t,a)}if("value"in i)return i.value;var r=i.get;return void 0!==r?r.call(a):void 0},s=u(t(3)),c=u(t(4));function u(e){return e&&e.__esModule?e:{default:e}}function p(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){return function a(i,o){try{var r=n[i](o),s=r.value}catch(e){return void t(e)}if(!r.done)return Promise.resolve(s).then(function(e){a("next",e)},function(e){a("throw",e)});e(s)}("next")})}}function l(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function d(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=(void 0===n?"undefined":r(n))&&"function"!=typeof n?e:n}function f(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+(void 0===n?"undefined":r(n)));e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var m={clientID:"",clientName:"",clientKind:"",clientSecret:"",clientURI:"",registrationAccessToken:"",redirectURI:"",softwareID:"",softwareVersion:"",logoURI:"",policyURI:"",notificationPlatform:"",notificationDeviceToken:""},v=function(e){function n(e){var t=e.oauth,i=e.scope,o=void 0===i?[]:i,r=e.onTokenRefresh,s=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(e,["oauth","scope","onTokenRefresh"]);l(this,n);var c=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,s));return c.setOAuthOptions(a({},m,t)),c.scope=o,c.onTokenRefresh=r,c}return f(n,s.default),i(n,[{key:"isRegistered",value:function(){return""!==this.oauthOptions.clientID}},{key:"snakeCaseOAuthData",value:function(e){var n={softwareID:"software_id",softwareVersion:"software_version",clientID:"client_id",clientName:"client_name",clientKind:"client_kind",clientURI:"client_uri",logoURI:"logo_uri",policyURI:"policy_uri",notificationPlatform:"notification_platform",notificationDeviceToken:"notification_device_token",redirectURI:"redirect_uris"},t={};return Object.keys(e).forEach(function(a){var i=n[a]||a,o=e[a];t[i]=o}),t.redirect_uris&&t.redirect_uris instanceof Array==0&&(t.redirect_uris=[t.redirect_uris]),t}},{key:"camelCaseOAuthData",value:function(e){var n={client_id:"clientID",client_name:"clientName",client_secret:"clientSecret",registration_access_token:"registrationAccessToken",software_id:"softwareID"},t={};return Object.keys(e).forEach(function(a){var i=n[a]||a,o=e[a];t[i]=o}),t}},{key:"register",value:function(){var e=p(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isRegistered()){e.next=2;break}throw new Error("Client already registered");case 2:return e.next=4,this.fetchJSON("POST","/auth/register",this.snakeCaseOAuthData({redirectURI:this.oauthOptions.redirectURI,clientName:this.oauthOptions.clientName,softwareID:this.oauthOptions.softwareID,clientKind:this.oauthOptions.clientKind,clientURI:this.oauthOptions.clientURI,logoURI:this.oauthOptions.logoURI,policyURI:this.oauthOptions.policyURI,softwareVersion:this.oauthOptions.softwareVersion,notificationPlatform:this.oauthOptions.notificationPlatform,notificationDeviceToken:this.oauthOptions.notificationDeviceToken}));case 4:return n=e.sent,this.setOAuthOptions(a({},this.oauthOptions,{client_id:n.client_id,client_name:n.client_name,client_secret:n.client_secret,registration_access_token:n.registration_access_token,software_id:n.software_id})),e.abrupt("return",this.oauthOptions);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"unregister",value:function(){var e=p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isRegistered()){e.next=2;break}throw new x;case 2:return e.abrupt("return",this.fetchJSON("DELETE","/auth/register/"+this.oauthOptions.clientID,null,{credentials:this.registrationAccessTokenToAuthHeader()}));case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchInformation",value:function(){var e=p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isRegistered()){e.next=2;break}throw new x;case 2:return e.abrupt("return",this.fetchJSON("GET","/auth/register/"+this.oauthOptions.clientID,null,{credentials:this.registrationAccessTokenToAuthHeader()}));case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"updateInformation",value:function(){var e=p(regeneratorRuntime.mark(function e(n){var t,i,o,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isRegistered()){e.next=2;break}throw new x;case 2:return t={clientID:this.oauthOptions.clientID,clientName:this.oauthOptions.clientName,redirectURI:this.oauthOptions.redirectURI,softwareID:this.oauthOptions.softwareID},i=this.snakeCaseOAuthData(a({},t,n)),r&&(i.client_secret=this.oauthOptions.clientSecret),e.next=7,this.fetchJSON("PUT","/auth/register/"+this.oauthOptions.clientID,i,{credentials:this.registrationAccessTokenToAuthHeader()});case 7:return o=e.sent,this.setOAuthOptions(o),e.abrupt("return",this.oauthOptions);case 10:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"generateStateCode",value:function(){var e=void 0;if("undefined"!=typeof window&&void 0!==window.crypto&&"function"==typeof window.crypto.getRandomValues)e=new Uint8Array(16),window.crypto.getRandomValues(e);else{e=new Array(16);for(var n=0;n<e.length;n++)e[n]=Math.floor(255*Math.random())}return btoa(String.fromCharCode.apply(null,e)).replace(/=+$/,"").replace(/\//g,"_").replace(/\+/g,"-")}},{key:"getAuthCodeURL",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.scope;if(!this.isRegistered())throw new x;var t={client_id:this.oauthOptions.clientID,redirect_uri:this.oauthOptions.redirectURI,state:e,response_type:"code",scope:n.join(" ")};return this.uri+"/auth/authorize?"+this.dataToQueryString(t)}},{key:"dataToQueryString",value:function(e){return Object.keys(e).map(function(n){return n+"="+encodeURIComponent(e[n])}).join("&")}},{key:"getAccessCodeFromURL",value:function(e,n){if(!n)throw new Error("Missing state code");var t=new URL(e).searchParams,a=t.get("state"),i=t.get("access_code");if(n!==a)throw new Error("Given state does not match url query state");return i}},{key:"fetchAccessToken",value:function(){var e=p(regeneratorRuntime.mark(function e(n){var t,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isRegistered()){e.next=2;break}throw new x;case 2:return t={grant_type:"authorization_code",code:n,client_id:this.oauthOptions.clientID,client_secret:this.oauthOptions.clientSecret},e.next=5,this.fetchJSON("POST","/auth/access_token",this.dataToQueryString(t),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 5:return a=e.sent,e.abrupt("return",new c.default(a));case 7:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"refreshToken",value:function(){var e=p(regeneratorRuntime.mark(function e(){var t,i,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isRegistered()){e.next=2;break}throw new x;case 2:if(this.token){e.next=4;break}throw new Error("No token to refresh");case 4:return t={grant_type:"refresh_token",refresh_token:this.token.refreshToken,client_id:this.oauthOptions.clientID,client_secret:this.oauthOptions.clientSecret},e.next=7,o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"fetchJSON",this).call(this,"POST","/auth/access_token",this.dataToQueryString(t),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 7:return i=e.sent,r=new c.default(a({refresh_token:this.token.refreshToken},i)),this.onTokenRefresh&&"function"==typeof this.onTokenRefresh&&this.onTokenRefresh(r),e.abrupt("return",r);case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"setCredentials",value:function(e){this.token=e?e instanceof c.default?e:new c.default(e):null}},{key:"setOAuthOptions",value:function(e){this.oauthOptions=this.camelCaseOAuthData(e)}},{key:"resetClientId",value:function(){this.oauthOptions.clientID=""}},{key:"fetchJSON",value:function(){var e=p(regeneratorRuntime.mark(function e(t,a,i,r){var s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"fetchJSON",this).call(this,t,a,i,r);case 3:return e.abrupt("return",e.sent);case 6:if(e.prev=6,e.t0=e.catch(0),!/Expired token/.test(e.t0.message)){e.next=18;break}return e.next=11,this.refreshToken();case 11:return s=e.sent,this.setCredentials(s),e.next=15,o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"fetchJSON",this).call(this,t,a,i,r);case 15:return e.abrupt("return",e.sent);case 18:throw e.t0;case 19:case"end":return e.stop()}},e,this,[[0,6]])}));return function(n,t,a,i){return e.apply(this,arguments)}}()},{key:"registrationAccessTokenToAuthHeader",value:function(){return"Bearer "+this.oauthOptions.registrationAccessToken}}]),n}();n.default=v;var x=function(e){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Client not registered or missing OAuth information";l(this,n);var t=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.message=e,t.name="NotRegisteredException",t}return f(n,Error),n}()},function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var a,i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),s=m(["/permissions/",""],["/permissions/",""]),c=m(["/permissions/"],["/permissions/"]),u=m(["/permissions/doctype/","/shared-by-link"],["/permissions/doctype/","/shared-by-link"]),p=t(1),l=(a=p)&&a.__esModule?a:{default:a},d=t(2),f=t(0);function m(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function v(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){return function a(i,o){try{var r=n[i](o),s=r.value}catch(e){return void t(e)}if(!r.done)return Promise.resolve(s).then(function(e){a("next",e)},function(e){a("throw",e)});e(s)}("next")})}}var x=function(e){return(0,p.normalizeDoc)(e,"io.cozy.permissions")},h=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=(void 0===n?"undefined":r(n))&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+(void 0===n?"undefined":r(n)));e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,l.default),o(n,[{key:"get",value:function(){var e=v(regeneratorRuntime.mark(function e(n){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.fetchJSON("GET",(0,f.uri)(s,n));case 2:return t=e.sent,e.abrupt("return",{data:x(t.data)});case 4:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"create",value:function(){var e=v(regeneratorRuntime.mark(function e(n){n._id,n._type;var t,a=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(n,["_id","_type"]);return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.fetchJSON("POST",(0,f.uri)(c),{data:{type:"io.cozy.permissions",attributes:a}});case 2:return t=e.sent,e.abrupt("return",{data:x(t.data)});case 4:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"destroy",value:function(e){return this.client.fetchJSON("DELETE",(0,f.uri)(s,e.id))}},{key:"findLinksByDoctype",value:function(){var e=v(regeneratorRuntime.mark(function e(n){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.fetchJSON("GET",(0,f.uri)(u,n));case 2:return t=e.sent,e.abrupt("return",i({},t,{data:t.data.map(x)}));case 4:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"findApps",value:function(){var e=v(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.fetchJSON("GET","/apps/");case 2:return n=e.sent,e.abrupt("return",i({},n,{data:n.data.map(function(e){return i({_id:e.id},e)})}));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"createSharingLink",value:function(){var e=v(regeneratorRuntime.mark(function e(n){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.fetchJSON("POST","/permissions?codes=email",{data:{type:"io.cozy.permissions",attributes:{permissions:y(n,!0)}}});case 2:return t=e.sent,e.abrupt("return",{data:x(t.data)});case 4:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"revokeSharingLink",value:function(){var e=v(regeneratorRuntime.mark(function e(n){var t,a,i,o,r,s,c,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.findLinksByDoctype(n._type);case 2:t=e.sent,a=t.data.filter(function(e){return b(e,n)}),i=!0,o=!1,r=void 0,e.prev=7,s=a[Symbol.iterator]();case 9:if(i=(c=s.next()).done){e.next=16;break}return u=c.value,e.next=13,this.destroy(u);case 13:i=!0,e.next=9;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(7),o=!0,r=e.t0;case 22:e.prev=22,e.prev=23,!i&&s.return&&s.return();case 25:if(e.prev=25,!o){e.next=28;break}throw r;case 28:return e.finish(25);case 29:return e.finish(22);case 30:case"end":return e.stop()}},e,this,[[7,18,22,30],[23,,25,29]])}));return function(n){return e.apply(this,arguments)}}()}]),n}();n.default=h;var y=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=e._id,a=e._type,i=n?["GET"]:["ALL"];return(0,d.isFile)(e)?{files:{type:"io.cozy.files",verbs:i,values:[t]}}:{collection:{type:a,verbs:i,values:[t]},files:{type:"io.cozy.files",verbs:i,values:[a+"/"+t],selector:"referenced_by"}}},b=function(e,n){var t=n._id;return(0,d.isFile)(n)?-1!==e.attributes.permissions.files.values.indexOf(t):-1!==e.attributes.permissions.collection.values.indexOf(t)}},function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var a,i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),s=v(["/sharings/doctype/",""],["/sharings/doctype/",""]),c=v(["/sharings/","/recipients"],["/sharings/","/recipients"]),u=v(["/sharings/","/recipients/",""],["/sharings/","/recipients/",""]),p=v(["/sharings/","/recipients/self"],["/sharings/","/recipients/self"]),l=t(1),d=(a=l)&&a.__esModule?a:{default:a},f=t(2),m=t(0);function v(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function x(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){return function a(i,o){try{var r=n[i](o),s=r.value}catch(e){return void t(e)}if(!r.done)return Promise.resolve(s).then(function(e){a("next",e)},function(e){a("throw",e)});e(s)}("next")})}}var h=function(e){return(0,l.normalizeDoc)(e,"io.cozy.sharings")},y=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=(void 0===n?"undefined":r(n))&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+(void 0===n?"undefined":r(n)));e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,d.default),o(n,[{key:"findByDoctype",value:function(){var e=x(regeneratorRuntime.mark(function e(n){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.fetchJSON("GET",(0,m.uri)(s,n));case 2:return t=e.sent,e.abrupt("return",i({},t,{data:t.data.map(h)}));case 4:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"share",value:function(){var e=x(regeneratorRuntime.mark(function e(n,t,a,i){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.fetchJSON("POST","/sharings/",{data:{type:"io.cozy.sharings",attributes:{description:i,open_sharing:"two-way"===a,rules:b(n,a)},relationships:{recipients:{data:t.map(function(e){return{id:e._id,type:e._type}})}}}});case 2:return o=e.sent,e.abrupt("return",{data:h(o.data)});case 4:case"end":return e.stop()}},e,this)}));return function(n,t,a,i){return e.apply(this,arguments)}}()},{key:"addRecipients",value:function(){var e=x(regeneratorRuntime.mark(function e(n,t,a){var i,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i={data:t.map(function(e){return{id:e._id,type:e._type}})},e.next=3,this.client.fetchJSON("POST",(0,m.uri)(c,n._id),{data:{type:"io.cozy.sharings",id:n._id,relationships:"two-way"===a?{recipients:i}:{read_only_recipients:i}}});case 3:return o=e.sent,e.abrupt("return",{data:h(o.data)});case 5:case"end":return e.stop()}},e,this)}));return function(n,t,a){return e.apply(this,arguments)}}()},{key:"revokeRecipient",value:function(e,n){var t=e.attributes.members.findIndex(function(e){return e.email===n});return this.client.fetchJSON("DELETE",(0,m.uri)(u,e._id,t))}},{key:"revokeSelf",value:function(e){return this.client.fetchJSON("DELETE",(0,m.uri)(p,e._id))}}]),n}();n.default=y;var b=function(e,n){var t=e._id,a=e._type;return(0,f.isFile)(e)?[i({title:e.name,doctype:"io.cozy.files",values:[t]},g(e,n))]:[i({title:"collection",doctype:a,values:[t]},g(e,n)),i({title:"items",doctype:"io.cozy.files",values:[a+"/"+t],selector:"referenced_by"},"two-way"===n?{add:"sync",update:"sync",remove:"sync"}:{add:"push",update:"none",remove:"push"})]},g=function(e,n){return(0,f.isFile)(e)&&(0,f.isDirectory)(e)?"two-way"===n?{add:"sync",update:"sync",remove:"sync"}:{add:"push",update:"push",remove:"push"}:"two-way"===n?{update:"sync",remove:"revoke"}:{update:"push",remove:"revoke"}}},function(e,n){var t,a,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{a="function"==typeof clearTimeout?clearTimeout:r}catch(e){a=r}}();var c,u=[],p=!1,l=-1;function d(){p&&c&&(p=!1,c.length?u=c.concat(u):l=-1,u.length&&f())}function f(){if(!p){var e=s(d);p=!0;for(var n=u.length;n;){for(c=u,u=[];++l<n;)c&&c[l].run();l=-1,n=u.length}c=null,p=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===r||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(n){try{return a.call(null,e)}catch(n){return a.call(this,e)}}}(e)}}function m(e,n){this.fun=e,this.array=n}function v(){}i.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];u.push(new m(e,n)),1!==u.length||p||s(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,n,t){(function(e){function t(e,n){for(var t=0,a=e.length-1;a>=0;a--){var i=e[a];"."===i?e.splice(a,1):".."===i?(e.splice(a,1),t++):t&&(e.splice(a,1),t--)}if(n)for(;t--;t)e.unshift("..");return e}var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(e){return a.exec(e).slice(1)};function o(e,n){if(e.filter)return e.filter(n);for(var t=[],a=0;a<e.length;a++)n(e[a],a,e)&&t.push(e[a]);return t}n.resolve=function(){for(var n="",a=!1,i=arguments.length-1;i>=-1&&!a;i--){var r=i>=0?arguments[i]:e.cwd();if("string"!=typeof r)throw new TypeError("Arguments to path.resolve must be strings");r&&(n=r+"/"+n,a="/"===r.charAt(0))}return n=t(o(n.split("/"),function(e){return!!e}),!a).join("/"),(a?"/":"")+n||"."},n.normalize=function(e){var a=n.isAbsolute(e),i="/"===r(e,-1);return(e=t(o(e.split("/"),function(e){return!!e}),!a).join("/"))||a||(e="."),e&&i&&(e+="/"),(a?"/":"")+e},n.isAbsolute=function(e){return"/"===e.charAt(0)},n.join=function(){var e=Array.prototype.slice.call(arguments,0);return n.normalize(o(e,function(e,n){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},n.relative=function(e,t){function a(e){for(var n=0;n<e.length&&""===e[n];n++);for(var t=e.length-1;t>=0&&""===e[t];t--);return n>t?[]:e.slice(n,t-n+1)}e=n.resolve(e).substr(1),t=n.resolve(t).substr(1);for(var i=a(e.split("/")),o=a(t.split("/")),r=Math.min(i.length,o.length),s=r,c=0;c<r;c++)if(i[c]!==o[c]){s=c;break}var u=[];for(c=s;c<i.length;c++)u.push("..");return(u=u.concat(o.slice(s))).join("/")},n.sep="/",n.delimiter=":",n.dirname=function(e){var n=i(e),t=n[0],a=n[1];return t||a?(a&&(a=a.substr(0,a.length-1)),t+a):"."},n.basename=function(e,n){var t=i(e)[2];return n&&t.substr(-1*n.length)===n&&(t=t.substr(0,t.length-n.length)),t},n.extname=function(e){return i(e)[3]};var r="b"==="ab".substr(-1)?function(e,n,t){return e.substr(n,t)}:function(e,n,t){return n<0&&(n=e.length+n),e.substr(n,t)}}).call(this,t(8))},function(e){e.exports={"application/1d-interleaved-parityfec":{source:"iana"},"application/3gpdash-qoe-report+xml":{source:"iana"},"application/3gpp-ims+xml":{source:"iana"},"application/a2l":{source:"iana"},"application/activemessage":{source:"iana"},"application/alto-costmap+json":{source:"iana",compressible:!0},"application/alto-costmapfilter+json":{source:"iana",compressible:!0},"application/alto-directory+json":{source:"iana",compressible:!0},"application/alto-endpointcost+json":{source:"iana",compressible:!0},"application/alto-endpointcostparams+json":{source:"iana",compressible:!0},"application/alto-endpointprop+json":{source:"iana",compressible:!0},"application/alto-endpointpropparams+json":{source:"iana",compressible:!0},"application/alto-error+json":{source:"iana",compressible:!0},"application/alto-networkmap+json":{source:"iana",compressible:!0},"application/alto-networkmapfilter+json":{source:"iana",compressible:!0},"application/aml":{source:"iana"},"application/andrew-inset":{source:"iana",extensions:["ez"]},"application/applefile":{source:"iana"},"application/applixware":{source:"apache",extensions:["aw"]},"application/atf":{source:"iana"},"application/atfx":{source:"iana"},"application/atom+xml":{source:"iana",compressible:!0,extensions:["atom"]},"application/atomcat+xml":{source:"iana",extensions:["atomcat"]},"application/atomdeleted+xml":{source:"iana"},"application/atomicmail":{source:"iana"},"application/atomsvc+xml":{source:"iana",extensions:["atomsvc"]},"application/atxml":{source:"iana"},"application/auth-policy+xml":{source:"iana"},"application/bacnet-xdd+zip":{source:"iana"},"application/batch-smtp":{source:"iana"},"application/bdoc":{compressible:!1,extensions:["bdoc"]},"application/beep+xml":{source:"iana"},"application/calendar+json":{source:"iana",compressible:!0},"application/calendar+xml":{source:"iana"},"application/call-completion":{source:"iana"},"application/cals-1840":{source:"iana"},"application/cbor":{source:"iana"},"application/cccex":{source:"iana"},"application/ccmp+xml":{source:"iana"},"application/ccxml+xml":{source:"iana",extensions:["ccxml"]},"application/cdfx+xml":{source:"iana"},"application/cdmi-capability":{source:"iana",extensions:["cdmia"]},"application/cdmi-container":{source:"iana",extensions:["cdmic"]},"application/cdmi-domain":{source:"iana",extensions:["cdmid"]},"application/cdmi-object":{source:"iana",extensions:["cdmio"]},"application/cdmi-queue":{source:"iana",extensions:["cdmiq"]},"application/cdni":{source:"iana"},"application/cea":{source:"iana"},"application/cea-2018+xml":{source:"iana"},"application/cellml+xml":{source:"iana"},"application/cfw":{source:"iana"},"application/clue_info+xml":{source:"iana"},"application/cms":{source:"iana"},"application/cnrp+xml":{source:"iana"},"application/coap-group+json":{source:"iana",compressible:!0},"application/coap-payload":{source:"iana"},"application/commonground":{source:"iana"},"application/conference-info+xml":{source:"iana"},"application/cose":{source:"iana"},"application/cose-key":{source:"iana"},"application/cose-key-set":{source:"iana"},"application/cpl+xml":{source:"iana"},"application/csrattrs":{source:"iana"},"application/csta+xml":{source:"iana"},"application/cstadata+xml":{source:"iana"},"application/csvm+json":{source:"iana",compressible:!0},"application/cu-seeme":{source:"apache",extensions:["cu"]},"application/cybercash":{source:"iana"},"application/dart":{compressible:!0},"application/dash+xml":{source:"iana",extensions:["mpd"]},"application/dashdelta":{source:"iana"},"application/davmount+xml":{source:"iana",extensions:["davmount"]},"application/dca-rft":{source:"iana"},"application/dcd":{source:"iana"},"application/dec-dx":{source:"iana"},"application/dialog-info+xml":{source:"iana"},"application/dicom":{source:"iana"},"application/dicom+json":{source:"iana",compressible:!0},"application/dicom+xml":{source:"iana"},"application/dii":{source:"iana"},"application/dit":{source:"iana"},"application/dns":{source:"iana"},"application/docbook+xml":{source:"apache",extensions:["dbk"]},"application/dskpp+xml":{source:"iana"},"application/dssc+der":{source:"iana",extensions:["dssc"]},"application/dssc+xml":{source:"iana",extensions:["xdssc"]},"application/dvcs":{source:"iana"},"application/ecmascript":{source:"iana",compressible:!0,extensions:["ecma"]},"application/edi-consent":{source:"iana"},"application/edi-x12":{source:"iana",compressible:!1},"application/edifact":{source:"iana",compressible:!1},"application/efi":{source:"iana"},"application/emergencycalldata.comment+xml":{source:"iana"},"application/emergencycalldata.control+xml":{source:"iana"},"application/emergencycalldata.deviceinfo+xml":{source:"iana"},"application/emergencycalldata.ecall.msd":{source:"iana"},"application/emergencycalldata.providerinfo+xml":{source:"iana"},"application/emergencycalldata.serviceinfo+xml":{source:"iana"},"application/emergencycalldata.subscriberinfo+xml":{source:"iana"},"application/emergencycalldata.veds+xml":{source:"iana"},"application/emma+xml":{source:"iana",extensions:["emma"]},"application/emotionml+xml":{source:"iana"},"application/encaprtp":{source:"iana"},"application/epp+xml":{source:"iana"},"application/epub+zip":{source:"iana",extensions:["epub"]},"application/eshop":{source:"iana"},"application/exi":{source:"iana",extensions:["exi"]},"application/fastinfoset":{source:"iana"},"application/fastsoap":{source:"iana"},"application/fdt+xml":{source:"iana"},"application/fhir+xml":{source:"iana"},"application/fido.trusted-apps+json":{compressible:!0},"application/fits":{source:"iana"},"application/font-sfnt":{source:"iana"},"application/font-tdpfr":{source:"iana",extensions:["pfr"]},"application/font-woff":{source:"iana",compressible:!1,extensions:["woff"]},"application/framework-attributes+xml":{source:"iana"},"application/geo+json":{source:"iana",compressible:!0,extensions:["geojson"]},"application/geo+json-seq":{source:"iana"},"application/geoxacml+xml":{source:"iana"},"application/gml+xml":{source:"iana",extensions:["gml"]},"application/gpx+xml":{source:"apache",extensions:["gpx"]},"application/gxf":{source:"apache",extensions:["gxf"]},"application/gzip":{source:"iana",compressible:!1,extensions:["gz"]},"application/h224":{source:"iana"},"application/held+xml":{source:"iana"},"application/hjson":{extensions:["hjson"]},"application/http":{source:"iana"},"application/hyperstudio":{source:"iana",extensions:["stk"]},"application/ibe-key-request+xml":{source:"iana"},"application/ibe-pkg-reply+xml":{source:"iana"},"application/ibe-pp-data":{source:"iana"},"application/iges":{source:"iana"},"application/im-iscomposing+xml":{source:"iana"},"application/index":{source:"iana"},"application/index.cmd":{source:"iana"},"application/index.obj":{source:"iana"},"application/index.response":{source:"iana"},"application/index.vnd":{source:"iana"},"application/inkml+xml":{source:"iana",extensions:["ink","inkml"]},"application/iotp":{source:"iana"},"application/ipfix":{source:"iana",extensions:["ipfix"]},"application/ipp":{source:"iana"},"application/isup":{source:"iana"},"application/its+xml":{source:"iana"},"application/java-archive":{source:"apache",compressible:!1,extensions:["jar","war","ear"]},"application/java-serialized-object":{source:"apache",compressible:!1,extensions:["ser"]},"application/java-vm":{source:"apache",compressible:!1,extensions:["class"]},"application/javascript":{source:"iana",charset:"UTF-8",compressible:!0,extensions:["js","mjs"]},"application/jf2feed+json":{source:"iana",compressible:!0},"application/jose":{source:"iana"},"application/jose+json":{source:"iana",compressible:!0},"application/jrd+json":{source:"iana",compressible:!0},"application/json":{source:"iana",charset:"UTF-8",compressible:!0,extensions:["json","map"]},"application/json-patch+json":{source:"iana",compressible:!0},"application/json-seq":{source:"iana"},"application/json5":{extensions:["json5"]},"application/jsonml+json":{source:"apache",compressible:!0,extensions:["jsonml"]},"application/jwk+json":{source:"iana",compressible:!0},"application/jwk-set+json":{source:"iana",compressible:!0},"application/jwt":{source:"iana"},"application/kpml-request+xml":{source:"iana"},"application/kpml-response+xml":{source:"iana"},"application/ld+json":{source:"iana",compressible:!0,extensions:["jsonld"]},"application/lgr+xml":{source:"iana"},"application/link-format":{source:"iana"},"application/load-control+xml":{source:"iana"},"application/lost+xml":{source:"iana",extensions:["lostxml"]},"application/lostsync+xml":{source:"iana"},"application/lxf":{source:"iana"},"application/mac-binhex40":{source:"iana",extensions:["hqx"]},"application/mac-compactpro":{source:"apache",extensions:["cpt"]},"application/macwriteii":{source:"iana"},"application/mads+xml":{source:"iana",extensions:["mads"]},"application/manifest+json":{charset:"UTF-8",compressible:!0,extensions:["webmanifest"]},"application/marc":{source:"iana",extensions:["mrc"]},"application/marcxml+xml":{source:"iana",extensions:["mrcx"]},"application/mathematica":{source:"iana",extensions:["ma","nb","mb"]},"application/mathml+xml":{source:"iana",extensions:["mathml"]},"application/mathml-content+xml":{source:"iana"},"application/mathml-presentation+xml":{source:"iana"},"application/mbms-associated-procedure-description+xml":{source:"iana"},"application/mbms-deregister+xml":{source:"iana"},"application/mbms-envelope+xml":{source:"iana"},"application/mbms-msk+xml":{source:"iana"},"application/mbms-msk-response+xml":{source:"iana"},"application/mbms-protection-description+xml":{source:"iana"},"application/mbms-reception-report+xml":{source:"iana"},"application/mbms-register+xml":{source:"iana"},"application/mbms-register-response+xml":{source:"iana"},"application/mbms-schedule+xml":{source:"iana"},"application/mbms-user-service-description+xml":{source:"iana"},"application/mbox":{source:"iana",extensions:["mbox"]},"application/media-policy-dataset+xml":{source:"iana"},"application/media_control+xml":{source:"iana"},"application/mediaservercontrol+xml":{source:"iana",extensions:["mscml"]},"application/merge-patch+json":{source:"iana",compressible:!0},"application/metalink+xml":{source:"apache",extensions:["metalink"]},"application/metalink4+xml":{source:"iana",extensions:["meta4"]},"application/mets+xml":{source:"iana",extensions:["mets"]},"application/mf4":{source:"iana"},"application/mikey":{source:"iana"},"application/mmt-usd+xml":{source:"iana"},"application/mods+xml":{source:"iana",extensions:["mods"]},"application/moss-keys":{source:"iana"},"application/moss-signature":{source:"iana"},"application/mosskey-data":{source:"iana"},"application/mosskey-request":{source:"iana"},"application/mp21":{source:"iana",extensions:["m21","mp21"]},"application/mp4":{source:"iana",extensions:["mp4s","m4p"]},"application/mpeg4-generic":{source:"iana"},"application/mpeg4-iod":{source:"iana"},"application/mpeg4-iod-xmt":{source:"iana"},"application/mrb-consumer+xml":{source:"iana"},"application/mrb-publish+xml":{source:"iana"},"application/msc-ivr+xml":{source:"iana"},"application/msc-mixer+xml":{source:"iana"},"application/msword":{source:"iana",compressible:!1,extensions:["doc","dot"]},"application/mud+json":{source:"iana",compressible:!0},"application/mxf":{source:"iana",extensions:["mxf"]},"application/n-quads":{source:"iana"},"application/n-triples":{source:"iana"},"application/nasdata":{source:"iana"},"application/news-checkgroups":{source:"iana"},"application/news-groupinfo":{source:"iana"},"application/news-transmission":{source:"iana"},"application/nlsml+xml":{source:"iana"},"application/node":{source:"iana"},"application/nss":{source:"iana"},"application/ocsp-request":{source:"iana"},"application/ocsp-response":{source:"iana"},"application/octet-stream":{source:"iana",compressible:!1,extensions:["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"]},"application/oda":{source:"iana",extensions:["oda"]},"application/odx":{source:"iana"},"application/oebps-package+xml":{source:"iana",extensions:["opf"]},"application/ogg":{source:"iana",compressible:!1,extensions:["ogx"]},"application/omdoc+xml":{source:"apache",extensions:["omdoc"]},"application/onenote":{source:"apache",extensions:["onetoc","onetoc2","onetmp","onepkg"]},"application/oxps":{source:"iana",extensions:["oxps"]},"application/p2p-overlay+xml":{source:"iana"},"application/parityfec":{source:"iana"},"application/passport":{source:"iana"},"application/patch-ops-error+xml":{source:"iana",extensions:["xer"]},"application/pdf":{source:"iana",compressible:!1,extensions:["pdf"]},"application/pdx":{source:"iana"},"application/pgp-encrypted":{source:"iana",compressible:!1,extensions:["pgp"]},"application/pgp-keys":{source:"iana"},"application/pgp-signature":{source:"iana",extensions:["asc","sig"]},"application/pics-rules":{source:"apache",extensions:["prf"]},"application/pidf+xml":{source:"iana"},"application/pidf-diff+xml":{source:"iana"},"application/pkcs10":{source:"iana",extensions:["p10"]},"application/pkcs12":{source:"iana"},"application/pkcs7-mime":{source:"iana",extensions:["p7m","p7c"]},"application/pkcs7-signature":{source:"iana",extensions:["p7s"]},"application/pkcs8":{source:"iana",extensions:["p8"]},"application/pkcs8-encrypted":{source:"iana"},"application/pkix-attr-cert":{source:"iana",extensions:["ac"]},"application/pkix-cert":{source:"iana",extensions:["cer"]},"application/pkix-crl":{source:"iana",extensions:["crl"]},"application/pkix-pkipath":{source:"iana",extensions:["pkipath"]},"application/pkixcmp":{source:"iana",extensions:["pki"]},"application/pls+xml":{source:"iana",extensions:["pls"]},"application/poc-settings+xml":{source:"iana"},"application/postscript":{source:"iana",compressible:!0,extensions:["ai","eps","ps"]},"application/ppsp-tracker+json":{source:"iana",compressible:!0},"application/problem+json":{source:"iana",compressible:!0},"application/problem+xml":{source:"iana"},"application/provenance+xml":{source:"iana"},"application/prs.alvestrand.titrax-sheet":{source:"iana"},"application/prs.cww":{source:"iana",extensions:["cww"]},"application/prs.hpub+zip":{source:"iana"},"application/prs.nprend":{source:"iana"},"application/prs.plucker":{source:"iana"},"application/prs.rdf-xml-crypt":{source:"iana"},"application/prs.xsf+xml":{source:"iana"},"application/pskc+xml":{source:"iana",extensions:["pskcxml"]},"application/qsig":{source:"iana"},"application/raml+yaml":{compressible:!0,extensions:["raml"]},"application/raptorfec":{source:"iana"},"application/rdap+json":{source:"iana",compressible:!0},"application/rdf+xml":{source:"iana",compressible:!0,extensions:["rdf"]},"application/reginfo+xml":{source:"iana",extensions:["rif"]},"application/relax-ng-compact-syntax":{source:"iana",extensions:["rnc"]},"application/remote-printing":{source:"iana"},"application/reputon+json":{source:"iana",compressible:!0},"application/resource-lists+xml":{source:"iana",extensions:["rl"]},"application/resource-lists-diff+xml":{source:"iana",extensions:["rld"]},"application/rfc+xml":{source:"iana"},"application/riscos":{source:"iana"},"application/rlmi+xml":{source:"iana"},"application/rls-services+xml":{source:"iana",extensions:["rs"]},"application/route-apd+xml":{source:"iana"},"application/route-s-tsid+xml":{source:"iana"},"application/route-usd+xml":{source:"iana"},"application/rpki-ghostbusters":{source:"iana",extensions:["gbr"]},"application/rpki-manifest":{source:"iana",extensions:["mft"]},"application/rpki-publication":{source:"iana"},"application/rpki-roa":{source:"iana",extensions:["roa"]},"application/rpki-updown":{source:"iana"},"application/rsd+xml":{source:"apache",extensions:["rsd"]},"application/rss+xml":{source:"apache",compressible:!0,extensions:["rss"]},"application/rtf":{source:"iana",compressible:!0,extensions:["rtf"]},"application/rtploopback":{source:"iana"},"application/rtx":{source:"iana"},"application/samlassertion+xml":{source:"iana"},"application/samlmetadata+xml":{source:"iana"},"application/sbml+xml":{source:"iana",extensions:["sbml"]},"application/scaip+xml":{source:"iana"},"application/scim+json":{source:"iana",compressible:!0},"application/scvp-cv-request":{source:"iana",extensions:["scq"]},"application/scvp-cv-response":{source:"iana",extensions:["scs"]},"application/scvp-vp-request":{source:"iana",extensions:["spq"]},"application/scvp-vp-response":{source:"iana",extensions:["spp"]},"application/sdp":{source:"iana",extensions:["sdp"]},"application/sep+xml":{source:"iana"},"application/sep-exi":{source:"iana"},"application/session-info":{source:"iana"},"application/set-payment":{source:"iana"},"application/set-payment-initiation":{source:"iana",extensions:["setpay"]},"application/set-registration":{source:"iana"},"application/set-registration-initiation":{source:"iana",extensions:["setreg"]},"application/sgml":{source:"iana"},"application/sgml-open-catalog":{source:"iana"},"application/shf+xml":{source:"iana",extensions:["shf"]},"application/sieve":{source:"iana"},"application/simple-filter+xml":{source:"iana"},"application/simple-message-summary":{source:"iana"},"application/simplesymbolcontainer":{source:"iana"},"application/slate":{source:"iana"},"application/smil":{source:"iana"},"application/smil+xml":{source:"iana",extensions:["smi","smil"]},"application/smpte336m":{source:"iana"},"application/soap+fastinfoset":{source:"iana"},"application/soap+xml":{source:"iana",compressible:!0},"application/sparql-query":{source:"iana",extensions:["rq"]},"application/sparql-results+xml":{source:"iana",extensions:["srx"]},"application/spirits-event+xml":{source:"iana"},"application/sql":{source:"iana"},"application/srgs":{source:"iana",extensions:["gram"]},"application/srgs+xml":{source:"iana",extensions:["grxml"]},"application/sru+xml":{source:"iana",extensions:["sru"]},"application/ssdl+xml":{source:"apache",extensions:["ssdl"]},"application/ssml+xml":{source:"iana",extensions:["ssml"]},"application/tamp-apex-update":{source:"iana"},"application/tamp-apex-update-confirm":{source:"iana"},"application/tamp-community-update":{source:"iana"},"application/tamp-community-update-confirm":{source:"iana"},"application/tamp-error":{source:"iana"},"application/tamp-sequence-adjust":{source:"iana"},"application/tamp-sequence-adjust-confirm":{source:"iana"},"application/tamp-status-query":{source:"iana"},"application/tamp-status-response":{source:"iana"},"application/tamp-update":{source:"iana"},"application/tamp-update-confirm":{source:"iana"},"application/tar":{compressible:!0},"application/tei+xml":{source:"iana",extensions:["tei","teicorpus"]},"application/thraud+xml":{source:"iana",extensions:["tfi"]},"application/timestamp-query":{source:"iana"},"application/timestamp-reply":{source:"iana"},"application/timestamped-data":{source:"iana",extensions:["tsd"]},"application/tnauthlist":{source:"iana"},"application/trig":{source:"iana"},"application/ttml+xml":{source:"iana"},"application/tve-trigger":{source:"iana"},"application/ulpfec":{source:"iana"},"application/urc-grpsheet+xml":{source:"iana"},"application/urc-ressheet+xml":{source:"iana"},"application/urc-targetdesc+xml":{source:"iana"},"application/urc-uisocketdesc+xml":{source:"iana"},"application/vcard+json":{source:"iana",compressible:!0},"application/vcard+xml":{source:"iana"},"application/vemmi":{source:"iana"},"application/vividence.scriptfile":{source:"apache"},"application/vnd.1000minds.decision-model+xml":{source:"iana"},"application/vnd.3gpp-prose+xml":{source:"iana"},"application/vnd.3gpp-prose-pc3ch+xml":{source:"iana"},"application/vnd.3gpp-v2x-local-service-information":{source:"iana"},"application/vnd.3gpp.access-transfer-events+xml":{source:"iana"},"application/vnd.3gpp.bsf+xml":{source:"iana"},"application/vnd.3gpp.gmop+xml":{source:"iana"},"application/vnd.3gpp.mcptt-affiliation-command+xml":{source:"iana"},"application/vnd.3gpp.mcptt-floor-request+xml":{source:"iana"},"application/vnd.3gpp.mcptt-info+xml":{source:"iana"},"application/vnd.3gpp.mcptt-location-info+xml":{source:"iana"},"application/vnd.3gpp.mcptt-mbms-usage-info+xml":{source:"iana"},"application/vnd.3gpp.mcptt-signed+xml":{source:"iana"},"application/vnd.3gpp.mid-call+xml":{source:"iana"},"application/vnd.3gpp.pic-bw-large":{source:"iana",extensions:["plb"]},"application/vnd.3gpp.pic-bw-small":{source:"iana",extensions:["psb"]},"application/vnd.3gpp.pic-bw-var":{source:"iana",extensions:["pvb"]},"application/vnd.3gpp.sms":{source:"iana"},"application/vnd.3gpp.sms+xml":{source:"iana"},"application/vnd.3gpp.srvcc-ext+xml":{source:"iana"},"application/vnd.3gpp.srvcc-info+xml":{source:"iana"},"application/vnd.3gpp.state-and-event-info+xml":{source:"iana"},"application/vnd.3gpp.ussd+xml":{source:"iana"},"application/vnd.3gpp2.bcmcsinfo+xml":{source:"iana"},"application/vnd.3gpp2.sms":{source:"iana"},"application/vnd.3gpp2.tcap":{source:"iana",extensions:["tcap"]},"application/vnd.3lightssoftware.imagescal":{source:"iana"},"application/vnd.3m.post-it-notes":{source:"iana",extensions:["pwn"]},"application/vnd.accpac.simply.aso":{source:"iana",extensions:["aso"]},"application/vnd.accpac.simply.imp":{source:"iana",extensions:["imp"]},"application/vnd.acucobol":{source:"iana",extensions:["acu"]},"application/vnd.acucorp":{source:"iana",extensions:["atc","acutc"]},"application/vnd.adobe.air-application-installer-package+zip":{source:"apache",extensions:["air"]},"application/vnd.adobe.flash.movie":{source:"iana"},"application/vnd.adobe.formscentral.fcdt":{source:"iana",extensions:["fcdt"]},"application/vnd.adobe.fxp":{source:"iana",extensions:["fxp","fxpl"]},"application/vnd.adobe.partial-upload":{source:"iana"},"application/vnd.adobe.xdp+xml":{source:"iana",extensions:["xdp"]},"application/vnd.adobe.xfdf":{source:"iana",extensions:["xfdf"]},"application/vnd.aether.imp":{source:"iana"},"application/vnd.ah-barcode":{source:"iana"},"application/vnd.ahead.space":{source:"iana",extensions:["ahead"]},"application/vnd.airzip.filesecure.azf":{source:"iana",extensions:["azf"]},"application/vnd.airzip.filesecure.azs":{source:"iana",extensions:["azs"]},"application/vnd.amadeus+json":{source:"iana",compressible:!0},"application/vnd.amazon.ebook":{source:"apache",extensions:["azw"]},"application/vnd.amazon.mobi8-ebook":{source:"iana"},"application/vnd.americandynamics.acc":{source:"iana",extensions:["acc"]},"application/vnd.amiga.ami":{source:"iana",extensions:["ami"]},"application/vnd.amundsen.maze+xml":{source:"iana"},"application/vnd.android.package-archive":{source:"apache",compressible:!1,extensions:["apk"]},"application/vnd.anki":{source:"iana"},"application/vnd.anser-web-certificate-issue-initiation":{source:"iana",extensions:["cii"]},"application/vnd.anser-web-funds-transfer-initiation":{source:"apache",extensions:["fti"]},"application/vnd.antix.game-component":{source:"iana",extensions:["atx"]},"application/vnd.apache.thrift.binary":{source:"iana"},"application/vnd.apache.thrift.compact":{source:"iana"},"application/vnd.apache.thrift.json":{source:"iana"},"application/vnd.api+json":{source:"iana",compressible:!0},"application/vnd.apothekende.reservation+json":{source:"iana",compressible:!0},"application/vnd.apple.installer+xml":{source:"iana",extensions:["mpkg"]},"application/vnd.apple.mpegurl":{source:"iana",extensions:["m3u8"]},"application/vnd.apple.pkpass":{compressible:!1,extensions:["pkpass"]},"application/vnd.arastra.swi":{source:"iana"},"application/vnd.aristanetworks.swi":{source:"iana",extensions:["swi"]},"application/vnd.artsquare":{source:"iana"},"application/vnd.astraea-software.iota":{source:"iana",extensions:["iota"]},"application/vnd.audiograph":{source:"iana",extensions:["aep"]},"application/vnd.autopackage":{source:"iana"},"application/vnd.avalon+json":{source:"iana",compressible:!0},"application/vnd.avistar+xml":{source:"iana"},"application/vnd.balsamiq.bmml+xml":{source:"iana"},"application/vnd.balsamiq.bmpr":{source:"iana"},"application/vnd.bbf.usp.msg":{source:"iana"},"application/vnd.bbf.usp.msg+json":{source:"iana",compressible:!0},"application/vnd.bekitzur-stech+json":{source:"iana",compressible:!0},"application/vnd.bint.med-content":{source:"iana"},"application/vnd.biopax.rdf+xml":{source:"iana"},"application/vnd.blink-idb-value-wrapper":{source:"iana"},"application/vnd.blueice.multipass":{source:"iana",extensions:["mpm"]},"application/vnd.bluetooth.ep.oob":{source:"iana"},"application/vnd.bluetooth.le.oob":{source:"iana"},"application/vnd.bmi":{source:"iana",extensions:["bmi"]},"application/vnd.businessobjects":{source:"iana",extensions:["rep"]},"application/vnd.cab-jscript":{source:"iana"},"application/vnd.canon-cpdl":{source:"iana"},"application/vnd.canon-lips":{source:"iana"},"application/vnd.capasystems-pg+json":{source:"iana",compressible:!0},"application/vnd.cendio.thinlinc.clientconf":{source:"iana"},"application/vnd.century-systems.tcp_stream":{source:"iana"},"application/vnd.chemdraw+xml":{source:"iana",extensions:["cdxml"]},"application/vnd.chess-pgn":{source:"iana"},"application/vnd.chipnuts.karaoke-mmd":{source:"iana",extensions:["mmd"]},"application/vnd.cinderella":{source:"iana",extensions:["cdy"]},"application/vnd.cirpack.isdn-ext":{source:"iana"},"application/vnd.citationstyles.style+xml":{source:"iana"},"application/vnd.claymore":{source:"iana",extensions:["cla"]},"application/vnd.cloanto.rp9":{source:"iana",extensions:["rp9"]},"application/vnd.clonk.c4group":{source:"iana",extensions:["c4g","c4d","c4f","c4p","c4u"]},"application/vnd.cluetrust.cartomobile-config":{source:"iana",extensions:["c11amc"]},"application/vnd.cluetrust.cartomobile-config-pkg":{source:"iana",extensions:["c11amz"]},"application/vnd.coffeescript":{source:"iana"},"application/vnd.collabio.xodocuments.document":{source:"iana"},"application/vnd.collabio.xodocuments.document-template":{source:"iana"},"application/vnd.collabio.xodocuments.presentation":{source:"iana"},"application/vnd.collabio.xodocuments.presentation-template":{source:"iana"},"application/vnd.collabio.xodocuments.spreadsheet":{source:"iana"},"application/vnd.collabio.xodocuments.spreadsheet-template":{source:"iana"},"application/vnd.collection+json":{source:"iana",compressible:!0},"application/vnd.collection.doc+json":{source:"iana",compressible:!0},"application/vnd.collection.next+json":{source:"iana",compressible:!0},"application/vnd.comicbook+zip":{source:"iana"},"application/vnd.comicbook-rar":{source:"iana"},"application/vnd.commerce-battelle":{source:"iana"},"application/vnd.commonspace":{source:"iana",extensions:["csp"]},"application/vnd.contact.cmsg":{source:"iana",extensions:["cdbcmsg"]},"application/vnd.coreos.ignition+json":{source:"iana",compressible:!0},"application/vnd.cosmocaller":{source:"iana",extensions:["cmc"]},"application/vnd.crick.clicker":{source:"iana",extensions:["clkx"]},"application/vnd.crick.clicker.keyboard":{source:"iana",extensions:["clkk"]},"application/vnd.crick.clicker.palette":{source:"iana",extensions:["clkp"]},"application/vnd.crick.clicker.template":{source:"iana",extensions:["clkt"]},"application/vnd.crick.clicker.wordbank":{source:"iana",extensions:["clkw"]},"application/vnd.criticaltools.wbs+xml":{source:"iana",extensions:["wbs"]},"application/vnd.ctc-posml":{source:"iana",extensions:["pml"]},"application/vnd.ctct.ws+xml":{source:"iana"},"application/vnd.cups-pdf":{source:"iana"},"application/vnd.cups-postscript":{source:"iana"},"application/vnd.cups-ppd":{source:"iana",extensions:["ppd"]},"application/vnd.cups-raster":{source:"iana"},"application/vnd.cups-raw":{source:"iana"},"application/vnd.curl":{source:"iana"},"application/vnd.curl.car":{source:"apache",extensions:["car"]},"application/vnd.curl.pcurl":{source:"apache",extensions:["pcurl"]},"application/vnd.cyan.dean.root+xml":{source:"iana"},"application/vnd.cybank":{source:"iana"},"application/vnd.d2l.coursepackage1p0+zip":{source:"iana"},"application/vnd.dart":{source:"iana",compressible:!0,extensions:["dart"]},"application/vnd.data-vision.rdz":{source:"iana",extensions:["rdz"]},"application/vnd.datapackage+json":{source:"iana",compressible:!0},"application/vnd.dataresource+json":{source:"iana",compressible:!0},"application/vnd.debian.binary-package":{source:"iana"},"application/vnd.dece.data":{source:"iana",extensions:["uvf","uvvf","uvd","uvvd"]},"application/vnd.dece.ttml+xml":{source:"iana",extensions:["uvt","uvvt"]},"application/vnd.dece.unspecified":{source:"iana",extensions:["uvx","uvvx"]},"application/vnd.dece.zip":{source:"iana",extensions:["uvz","uvvz"]},"application/vnd.denovo.fcselayout-link":{source:"iana",extensions:["fe_launch"]},"application/vnd.desmume-movie":{source:"iana"},"application/vnd.desmume.movie":{source:"apache"},"application/vnd.dir-bi.plate-dl-nosuffix":{source:"iana"},"application/vnd.dm.delegation+xml":{source:"iana"},"application/vnd.dna":{source:"iana",extensions:["dna"]},"application/vnd.document+json":{source:"iana",compressible:!0},"application/vnd.dolby.mlp":{source:"apache",extensions:["mlp"]},"application/vnd.dolby.mobile.1":{source:"iana"},"application/vnd.dolby.mobile.2":{source:"iana"},"application/vnd.doremir.scorecloud-binary-document":{source:"iana"},"application/vnd.dpgraph":{source:"iana",extensions:["dpg"]},"application/vnd.dreamfactory":{source:"iana",extensions:["dfac"]},"application/vnd.drive+json":{source:"iana",compressible:!0},"application/vnd.ds-keypoint":{source:"apache",extensions:["kpxx"]},"application/vnd.dtg.local":{source:"iana"},"application/vnd.dtg.local.flash":{source:"iana"},"application/vnd.dtg.local.html":{source:"iana"},"application/vnd.dvb.ait":{source:"iana",extensions:["ait"]},"application/vnd.dvb.dvbj":{source:"iana"},"application/vnd.dvb.esgcontainer":{source:"iana"},"application/vnd.dvb.ipdcdftnotifaccess":{source:"iana"},"application/vnd.dvb.ipdcesgaccess":{source:"iana"},"application/vnd.dvb.ipdcesgaccess2":{source:"iana"},"application/vnd.dvb.ipdcesgpdd":{source:"iana"},"application/vnd.dvb.ipdcroaming":{source:"iana"},"application/vnd.dvb.iptv.alfec-base":{source:"iana"},"application/vnd.dvb.iptv.alfec-enhancement":{source:"iana"},"application/vnd.dvb.notif-aggregate-root+xml":{source:"iana"},"application/vnd.dvb.notif-container+xml":{source:"iana"},"application/vnd.dvb.notif-generic+xml":{source:"iana"},"application/vnd.dvb.notif-ia-msglist+xml":{source:"iana"},"application/vnd.dvb.notif-ia-registration-request+xml":{source:"iana"},"application/vnd.dvb.notif-ia-registration-response+xml":{source:"iana"},"application/vnd.dvb.notif-init+xml":{source:"iana"},"application/vnd.dvb.pfr":{source:"iana"},"application/vnd.dvb.service":{source:"iana",extensions:["svc"]},"application/vnd.dxr":{source:"iana"},"application/vnd.dynageo":{source:"iana",extensions:["geo"]},"application/vnd.dzr":{source:"iana"},"application/vnd.easykaraoke.cdgdownload":{source:"iana"},"application/vnd.ecdis-update":{source:"iana"},"application/vnd.ecip.rlp":{source:"iana"},"application/vnd.ecowin.chart":{source:"iana",extensions:["mag"]},"application/vnd.ecowin.filerequest":{source:"iana"},"application/vnd.ecowin.fileupdate":{source:"iana"},"application/vnd.ecowin.series":{source:"iana"},"application/vnd.ecowin.seriesrequest":{source:"iana"},"application/vnd.ecowin.seriesupdate":{source:"iana"},"application/vnd.efi.img":{source:"iana"},"application/vnd.efi.iso":{source:"iana"},"application/vnd.emclient.accessrequest+xml":{source:"iana"},"application/vnd.enliven":{source:"iana",extensions:["nml"]},"application/vnd.enphase.envoy":{source:"iana"},"application/vnd.eprints.data+xml":{source:"iana"},"application/vnd.epson.esf":{source:"iana",extensions:["esf"]},"application/vnd.epson.msf":{source:"iana",extensions:["msf"]},"application/vnd.epson.quickanime":{source:"iana",extensions:["qam"]},"application/vnd.epson.salt":{source:"iana",extensions:["slt"]},"application/vnd.epson.ssf":{source:"iana",extensions:["ssf"]},"application/vnd.ericsson.quickcall":{source:"iana"},"application/vnd.espass-espass+zip":{source:"iana"},"application/vnd.eszigno3+xml":{source:"iana",extensions:["es3","et3"]},"application/vnd.etsi.aoc+xml":{source:"iana"},"application/vnd.etsi.asic-e+zip":{source:"iana"},"application/vnd.etsi.asic-s+zip":{source:"iana"},"application/vnd.etsi.cug+xml":{source:"iana"},"application/vnd.etsi.iptvcommand+xml":{source:"iana"},"application/vnd.etsi.iptvdiscovery+xml":{source:"iana"},"application/vnd.etsi.iptvprofile+xml":{source:"iana"},"application/vnd.etsi.iptvsad-bc+xml":{source:"iana"},"application/vnd.etsi.iptvsad-cod+xml":{source:"iana"},"application/vnd.etsi.iptvsad-npvr+xml":{source:"iana"},"application/vnd.etsi.iptvservice+xml":{source:"iana"},"application/vnd.etsi.iptvsync+xml":{source:"iana"},"application/vnd.etsi.iptvueprofile+xml":{source:"iana"},"application/vnd.etsi.mcid+xml":{source:"iana"},"application/vnd.etsi.mheg5":{source:"iana"},"application/vnd.etsi.overload-control-policy-dataset+xml":{source:"iana"},"application/vnd.etsi.pstn+xml":{source:"iana"},"application/vnd.etsi.sci+xml":{source:"iana"},"application/vnd.etsi.simservs+xml":{source:"iana"},"application/vnd.etsi.timestamp-token":{source:"iana"},"application/vnd.etsi.tsl+xml":{source:"iana"},"application/vnd.etsi.tsl.der":{source:"iana"},"application/vnd.eudora.data":{source:"iana"},"application/vnd.evolv.ecig.profile":{source:"iana"},"application/vnd.evolv.ecig.settings":{source:"iana"},"application/vnd.evolv.ecig.theme":{source:"iana"},"application/vnd.ezpix-album":{source:"iana",extensions:["ez2"]},"application/vnd.ezpix-package":{source:"iana",extensions:["ez3"]},"application/vnd.f-secure.mobile":{source:"iana"},"application/vnd.fastcopy-disk-image":{source:"iana"},"application/vnd.fdf":{source:"iana",extensions:["fdf"]},"application/vnd.fdsn.mseed":{source:"iana",extensions:["mseed"]},"application/vnd.fdsn.seed":{source:"iana",extensions:["seed","dataless"]},"application/vnd.ffsns":{source:"iana"},"application/vnd.filmit.zfc":{source:"iana"},"application/vnd.fints":{source:"iana"},"application/vnd.firemonkeys.cloudcell":{source:"iana"},"application/vnd.flographit":{source:"iana",extensions:["gph"]},"application/vnd.fluxtime.clip":{source:"iana",extensions:["ftc"]},"application/vnd.font-fontforge-sfd":{source:"iana"},"application/vnd.framemaker":{source:"iana",extensions:["fm","frame","maker","book"]},"application/vnd.frogans.fnc":{source:"iana",extensions:["fnc"]},"application/vnd.frogans.ltf":{source:"iana",extensions:["ltf"]},"application/vnd.fsc.weblaunch":{source:"iana",extensions:["fsc"]},"application/vnd.fujitsu.oasys":{source:"iana",extensions:["oas"]},"application/vnd.fujitsu.oasys2":{source:"iana",extensions:["oa2"]},"application/vnd.fujitsu.oasys3":{source:"iana",extensions:["oa3"]},"application/vnd.fujitsu.oasysgp":{source:"iana",extensions:["fg5"]},"application/vnd.fujitsu.oasysprs":{source:"iana",extensions:["bh2"]},"application/vnd.fujixerox.art-ex":{source:"iana"},"application/vnd.fujixerox.art4":{source:"iana"},"application/vnd.fujixerox.ddd":{source:"iana",extensions:["ddd"]},"application/vnd.fujixerox.docuworks":{source:"iana",extensions:["xdw"]},"application/vnd.fujixerox.docuworks.binder":{source:"iana",extensions:["xbd"]},"application/vnd.fujixerox.docuworks.container":{source:"iana"},"application/vnd.fujixerox.hbpl":{source:"iana"},"application/vnd.fut-misnet":{source:"iana"},"application/vnd.fuzzysheet":{source:"iana",extensions:["fzs"]},"application/vnd.genomatix.tuxedo":{source:"iana",extensions:["txd"]},"application/vnd.geo+json":{source:"iana",compressible:!0},"application/vnd.geocube+xml":{source:"iana"},"application/vnd.geogebra.file":{source:"iana",extensions:["ggb"]},"application/vnd.geogebra.tool":{source:"iana",extensions:["ggt"]},"application/vnd.geometry-explorer":{source:"iana",extensions:["gex","gre"]},"application/vnd.geonext":{source:"iana",extensions:["gxt"]},"application/vnd.geoplan":{source:"iana",extensions:["g2w"]},"application/vnd.geospace":{source:"iana",extensions:["g3w"]},"application/vnd.gerber":{source:"iana"},"application/vnd.globalplatform.card-content-mgt":{source:"iana"},"application/vnd.globalplatform.card-content-mgt-response":{source:"iana"},"application/vnd.gmx":{source:"iana",extensions:["gmx"]},"application/vnd.google-apps.document":{compressible:!1,extensions:["gdoc"]},"application/vnd.google-apps.presentation":{compressible:!1,extensions:["gslides"]},"application/vnd.google-apps.spreadsheet":{compressible:!1,extensions:["gsheet"]},"application/vnd.google-earth.kml+xml":{source:"iana",compressible:!0,extensions:["kml"]},"application/vnd.google-earth.kmz":{source:"iana",compressible:!1,extensions:["kmz"]},"application/vnd.gov.sk.e-form+xml":{source:"iana"},"application/vnd.gov.sk.e-form+zip":{source:"iana"},"application/vnd.gov.sk.xmldatacontainer+xml":{source:"iana"},"application/vnd.grafeq":{source:"iana",extensions:["gqf","gqs"]},"application/vnd.gridmp":{source:"iana"},"application/vnd.groove-account":{source:"iana",extensions:["gac"]},"application/vnd.groove-help":{source:"iana",extensions:["ghf"]},"application/vnd.groove-identity-message":{source:"iana",extensions:["gim"]},"application/vnd.groove-injector":{source:"iana",extensions:["grv"]},"application/vnd.groove-tool-message":{source:"iana",extensions:["gtm"]},"application/vnd.groove-tool-template":{source:"iana",extensions:["tpl"]},"application/vnd.groove-vcard":{source:"iana",extensions:["vcg"]},"application/vnd.hal+json":{source:"iana",compressible:!0},"application/vnd.hal+xml":{source:"iana",extensions:["hal"]},"application/vnd.handheld-entertainment+xml":{source:"iana",extensions:["zmm"]},"application/vnd.hbci":{source:"iana",extensions:["hbci"]},"application/vnd.hc+json":{source:"iana",compressible:!0},"application/vnd.hcl-bireports":{source:"iana"},"application/vnd.hdt":{source:"iana"},"application/vnd.heroku+json":{source:"iana",compressible:!0},"application/vnd.hhe.lesson-player":{source:"iana",extensions:["les"]},"application/vnd.hp-hpgl":{source:"iana",extensions:["hpgl"]},"application/vnd.hp-hpid":{source:"iana",extensions:["hpid"]},"application/vnd.hp-hps":{source:"iana",extensions:["hps"]},"application/vnd.hp-jlyt":{source:"iana",extensions:["jlt"]},"application/vnd.hp-pcl":{source:"iana",extensions:["pcl"]},"application/vnd.hp-pclxl":{source:"iana",extensions:["pclxl"]},"application/vnd.httphone":{source:"iana"},"application/vnd.hydrostatix.sof-data":{source:"iana",extensions:["sfd-hdstx"]},"application/vnd.hyper-item+json":{source:"iana",compressible:!0},"application/vnd.hyperdrive+json":{source:"iana",compressible:!0},"application/vnd.hzn-3d-crossword":{source:"iana"},"application/vnd.ibm.afplinedata":{source:"iana"},"application/vnd.ibm.electronic-media":{source:"iana"},"application/vnd.ibm.minipay":{source:"iana",extensions:["mpy"]},"application/vnd.ibm.modcap":{source:"iana",extensions:["afp","listafp","list3820"]},"application/vnd.ibm.rights-management":{source:"iana",extensions:["irm"]},"application/vnd.ibm.secure-container":{source:"iana",extensions:["sc"]},"application/vnd.iccprofile":{source:"iana",extensions:["icc","icm"]},"application/vnd.ieee.1905":{source:"iana"},"application/vnd.igloader":{source:"iana",extensions:["igl"]},"application/vnd.imagemeter.folder+zip":{source:"iana"},"application/vnd.imagemeter.image+zip":{source:"iana"},"application/vnd.immervision-ivp":{source:"iana",extensions:["ivp"]},"application/vnd.immervision-ivu":{source:"iana",extensions:["ivu"]},"application/vnd.ims.imsccv1p1":{source:"iana"},"application/vnd.ims.imsccv1p2":{source:"iana"},"application/vnd.ims.imsccv1p3":{source:"iana"},"application/vnd.ims.lis.v2.result+json":{source:"iana",compressible:!0},"application/vnd.ims.lti.v2.toolconsumerprofile+json":{source:"iana",compressible:!0},"application/vnd.ims.lti.v2.toolproxy+json":{source:"iana",compressible:!0},"application/vnd.ims.lti.v2.toolproxy.id+json":{source:"iana",compressible:!0},"application/vnd.ims.lti.v2.toolsettings+json":{source:"iana",compressible:!0},"application/vnd.ims.lti.v2.toolsettings.simple+json":{source:"iana",compressible:!0},"application/vnd.informedcontrol.rms+xml":{source:"iana"},"application/vnd.informix-visionary":{source:"iana"},"application/vnd.infotech.project":{source:"iana"},"application/vnd.infotech.project+xml":{source:"iana"},"application/vnd.innopath.wamp.notification":{source:"iana"},"application/vnd.insors.igm":{source:"iana",extensions:["igm"]},"application/vnd.intercon.formnet":{source:"iana",extensions:["xpw","xpx"]},"application/vnd.intergeo":{source:"iana",extensions:["i2g"]},"application/vnd.intertrust.digibox":{source:"iana"},"application/vnd.intertrust.nncp":{source:"iana"},"application/vnd.intu.qbo":{source:"iana",extensions:["qbo"]},"application/vnd.intu.qfx":{source:"iana",extensions:["qfx"]},"application/vnd.iptc.g2.catalogitem+xml":{source:"iana"},"application/vnd.iptc.g2.conceptitem+xml":{source:"iana"},"application/vnd.iptc.g2.knowledgeitem+xml":{source:"iana"},"application/vnd.iptc.g2.newsitem+xml":{source:"iana"},"application/vnd.iptc.g2.newsmessage+xml":{source:"iana"},"application/vnd.iptc.g2.packageitem+xml":{source:"iana"},"application/vnd.iptc.g2.planningitem+xml":{source:"iana"},"application/vnd.ipunplugged.rcprofile":{source:"iana",extensions:["rcprofile"]},"application/vnd.irepository.package+xml":{source:"iana",extensions:["irp"]},"application/vnd.is-xpr":{source:"iana",extensions:["xpr"]},"application/vnd.isac.fcs":{source:"iana",extensions:["fcs"]},"application/vnd.jam":{source:"iana",extensions:["jam"]},"application/vnd.japannet-directory-service":{source:"iana"},"application/vnd.japannet-jpnstore-wakeup":{source:"iana"},"application/vnd.japannet-payment-wakeup":{source:"iana"},"application/vnd.japannet-registration":{source:"iana"},"application/vnd.japannet-registration-wakeup":{source:"iana"},"application/vnd.japannet-setstore-wakeup":{source:"iana"},"application/vnd.japannet-verification":{source:"iana"},"application/vnd.japannet-verification-wakeup":{source:"iana"},"application/vnd.jcp.javame.midlet-rms":{source:"iana",extensions:["rms"]},"application/vnd.jisp":{source:"iana",extensions:["jisp"]},"application/vnd.joost.joda-archive":{source:"iana",extensions:["joda"]},"application/vnd.jsk.isdn-ngn":{source:"iana"},"application/vnd.kahootz":{source:"iana",extensions:["ktz","ktr"]},"application/vnd.kde.karbon":{source:"iana",extensions:["karbon"]},"application/vnd.kde.kchart":{source:"iana",extensions:["chrt"]},"application/vnd.kde.kformula":{source:"iana",extensions:["kfo"]},"application/vnd.kde.kivio":{source:"iana",extensions:["flw"]},"application/vnd.kde.kontour":{source:"iana",extensions:["kon"]},"application/vnd.kde.kpresenter":{source:"iana",extensions:["kpr","kpt"]},"application/vnd.kde.kspread":{source:"iana",extensions:["ksp"]},"application/vnd.kde.kword":{source:"iana",extensions:["kwd","kwt"]},"application/vnd.kenameaapp":{source:"iana",extensions:["htke"]},"application/vnd.kidspiration":{source:"iana",extensions:["kia"]},"application/vnd.kinar":{source:"iana",extensions:["kne","knp"]},"application/vnd.koan":{source:"iana",extensions:["skp","skd","skt","skm"]},"application/vnd.kodak-descriptor":{source:"iana",extensions:["sse"]},"application/vnd.las.las+json":{source:"iana",compressible:!0},"application/vnd.las.las+xml":{source:"iana",extensions:["lasxml"]},"application/vnd.liberty-request+xml":{source:"iana"},"application/vnd.llamagraphics.life-balance.desktop":{source:"iana",extensions:["lbd"]},"application/vnd.llamagraphics.life-balance.exchange+xml":{source:"iana",extensions:["lbe"]},"application/vnd.lotus-1-2-3":{source:"iana",extensions:["123"]},"application/vnd.lotus-approach":{source:"iana",extensions:["apr"]},"application/vnd.lotus-freelance":{source:"iana",extensions:["pre"]},"application/vnd.lotus-notes":{source:"iana",extensions:["nsf"]},"application/vnd.lotus-organizer":{source:"iana",extensions:["org"]},"application/vnd.lotus-screencam":{source:"iana",extensions:["scm"]},"application/vnd.lotus-wordpro":{source:"iana",extensions:["lwp"]},"application/vnd.macports.portpkg":{source:"iana",extensions:["portpkg"]},"application/vnd.mapbox-vector-tile":{source:"iana"},"application/vnd.marlin.drm.actiontoken+xml":{source:"iana"},"application/vnd.marlin.drm.conftoken+xml":{source:"iana"},"application/vnd.marlin.drm.license+xml":{source:"iana"},"application/vnd.marlin.drm.mdcf":{source:"iana"},"application/vnd.mason+json":{source:"iana",compressible:!0},"application/vnd.maxmind.maxmind-db":{source:"iana"},"application/vnd.mcd":{source:"iana",extensions:["mcd"]},"application/vnd.medcalcdata":{source:"iana",extensions:["mc1"]},"application/vnd.mediastation.cdkey":{source:"iana",extensions:["cdkey"]},"application/vnd.meridian-slingshot":{source:"iana"},"application/vnd.mfer":{source:"iana",extensions:["mwf"]},"application/vnd.mfmp":{source:"iana",extensions:["mfm"]},"application/vnd.micro+json":{source:"iana",compressible:!0},"application/vnd.micrografx.flo":{source:"iana",extensions:["flo"]},"application/vnd.micrografx.igx":{source:"iana",extensions:["igx"]},"application/vnd.microsoft.portable-executable":{source:"iana"},"application/vnd.microsoft.windows.thumbnail-cache":{source:"iana"},"application/vnd.miele+json":{source:"iana",compressible:!0},"application/vnd.mif":{source:"iana",extensions:["mif"]},"application/vnd.minisoft-hp3000-save":{source:"iana"},"application/vnd.mitsubishi.misty-guard.trustweb":{source:"iana"},"application/vnd.mobius.daf":{source:"iana",extensions:["daf"]},"application/vnd.mobius.dis":{source:"iana",extensions:["dis"]},"application/vnd.mobius.mbk":{source:"iana",extensions:["mbk"]},"application/vnd.mobius.mqy":{source:"iana",extensions:["mqy"]},"application/vnd.mobius.msl":{source:"iana",extensions:["msl"]},"application/vnd.mobius.plc":{source:"iana",extensions:["plc"]},"application/vnd.mobius.txf":{source:"iana",extensions:["txf"]},"application/vnd.mophun.application":{source:"iana",extensions:["mpn"]},"application/vnd.mophun.certificate":{source:"iana",extensions:["mpc"]},"application/vnd.motorola.flexsuite":{source:"iana"},"application/vnd.motorola.flexsuite.adsi":{source:"iana"},"application/vnd.motorola.flexsuite.fis":{source:"iana"},"application/vnd.motorola.flexsuite.gotap":{source:"iana"},"application/vnd.motorola.flexsuite.kmr":{source:"iana"},"application/vnd.motorola.flexsuite.ttc":{source:"iana"},"application/vnd.motorola.flexsuite.wem":{source:"iana"},"application/vnd.motorola.iprm":{source:"iana"},"application/vnd.mozilla.xul+xml":{source:"iana",compressible:!0,extensions:["xul"]},"application/vnd.ms-3mfdocument":{source:"iana"},"application/vnd.ms-artgalry":{source:"iana",extensions:["cil"]},"application/vnd.ms-asf":{source:"iana"},"application/vnd.ms-cab-compressed":{source:"iana",extensions:["cab"]},"application/vnd.ms-color.iccprofile":{source:"apache"},"application/vnd.ms-excel":{source:"iana",compressible:!1,extensions:["xls","xlm","xla","xlc","xlt","xlw"]},"application/vnd.ms-excel.addin.macroenabled.12":{source:"iana",extensions:["xlam"]},"application/vnd.ms-excel.sheet.binary.macroenabled.12":{source:"iana",extensions:["xlsb"]},"application/vnd.ms-excel.sheet.macroenabled.12":{source:"iana",extensions:["xlsm"]},"application/vnd.ms-excel.template.macroenabled.12":{source:"iana",extensions:["xltm"]},"application/vnd.ms-fontobject":{source:"iana",compressible:!0,extensions:["eot"]},"application/vnd.ms-htmlhelp":{source:"iana",extensions:["chm"]},"application/vnd.ms-ims":{source:"iana",extensions:["ims"]},"application/vnd.ms-lrm":{source:"iana",extensions:["lrm"]},"application/vnd.ms-office.activex+xml":{source:"iana"},"application/vnd.ms-officetheme":{source:"iana",extensions:["thmx"]},"application/vnd.ms-opentype":{source:"apache",compressible:!0},"application/vnd.ms-outlook":{compressible:!1,extensions:["msg"]},"application/vnd.ms-package.obfuscated-opentype":{source:"apache"},"application/vnd.ms-pki.seccat":{source:"apache",extensions:["cat"]},"application/vnd.ms-pki.stl":{source:"apache",extensions:["stl"]},"application/vnd.ms-playready.initiator+xml":{source:"iana"},"application/vnd.ms-powerpoint":{source:"iana",compressible:!1,extensions:["ppt","pps","pot"]},"application/vnd.ms-powerpoint.addin.macroenabled.12":{source:"iana",extensions:["ppam"]},"application/vnd.ms-powerpoint.presentation.macroenabled.12":{source:"iana",extensions:["pptm"]},"application/vnd.ms-powerpoint.slide.macroenabled.12":{source:"iana",extensions:["sldm"]},"application/vnd.ms-powerpoint.slideshow.macroenabled.12":{source:"iana",extensions:["ppsm"]},"application/vnd.ms-powerpoint.template.macroenabled.12":{source:"iana",extensions:["potm"]},"application/vnd.ms-printdevicecapabilities+xml":{source:"iana"},"application/vnd.ms-printing.printticket+xml":{source:"apache"},"application/vnd.ms-printschematicket+xml":{source:"iana"},"application/vnd.ms-project":{source:"iana",extensions:["mpp","mpt"]},"application/vnd.ms-tnef":{source:"iana"},"application/vnd.ms-windows.devicepairing":{source:"iana"},"application/vnd.ms-windows.nwprinting.oob":{source:"iana"},"application/vnd.ms-windows.printerpairing":{source:"iana"},"application/vnd.ms-windows.wsd.oob":{source:"iana"},"application/vnd.ms-wmdrm.lic-chlg-req":{source:"iana"},"application/vnd.ms-wmdrm.lic-resp":{source:"iana"},"application/vnd.ms-wmdrm.meter-chlg-req":{source:"iana"},"application/vnd.ms-wmdrm.meter-resp":{source:"iana"},"application/vnd.ms-word.document.macroenabled.12":{source:"iana",extensions:["docm"]},"application/vnd.ms-word.template.macroenabled.12":{source:"iana",extensions:["dotm"]},"application/vnd.ms-works":{source:"iana",extensions:["wps","wks","wcm","wdb"]},"application/vnd.ms-wpl":{source:"iana",extensions:["wpl"]},"application/vnd.ms-xpsdocument":{source:"iana",compressible:!1,extensions:["xps"]},"application/vnd.msa-disk-image":{source:"iana"},"application/vnd.mseq":{source:"iana",extensions:["mseq"]},"application/vnd.msign":{source:"iana"},"application/vnd.multiad.creator":{source:"iana"},"application/vnd.multiad.creator.cif":{source:"iana"},"application/vnd.music-niff":{source:"iana"},"application/vnd.musician":{source:"iana",extensions:["mus"]},"application/vnd.muvee.style":{source:"iana",extensions:["msty"]},"application/vnd.mynfc":{source:"iana",extensions:["taglet"]},"application/vnd.ncd.control":{source:"iana"},"application/vnd.ncd.reference":{source:"iana"},"application/vnd.nearst.inv+json":{source:"iana",compressible:!0},"application/vnd.nervana":{source:"iana"},"application/vnd.netfpx":{source:"iana"},"application/vnd.neurolanguage.nlu":{source:"iana",extensions:["nlu"]},"application/vnd.nintendo.nitro.rom":{source:"iana"},"application/vnd.nintendo.snes.rom":{source:"iana"},"application/vnd.nitf":{source:"iana",extensions:["ntf","nitf"]},"application/vnd.noblenet-directory":{source:"iana",extensions:["nnd"]},"application/vnd.noblenet-sealer":{source:"iana",extensions:["nns"]},"application/vnd.noblenet-web":{source:"iana",extensions:["nnw"]},"application/vnd.nokia.catalogs":{source:"iana"},"application/vnd.nokia.conml+wbxml":{source:"iana"},"application/vnd.nokia.conml+xml":{source:"iana"},"application/vnd.nokia.iptv.config+xml":{source:"iana"},"application/vnd.nokia.isds-radio-presets":{source:"iana"},"application/vnd.nokia.landmark+wbxml":{source:"iana"},"application/vnd.nokia.landmark+xml":{source:"iana"},"application/vnd.nokia.landmarkcollection+xml":{source:"iana"},"application/vnd.nokia.n-gage.ac+xml":{source:"iana"},"application/vnd.nokia.n-gage.data":{source:"iana",extensions:["ngdat"]},"application/vnd.nokia.n-gage.symbian.install":{source:"iana",extensions:["n-gage"]},"application/vnd.nokia.ncd":{source:"iana"},"application/vnd.nokia.pcd+wbxml":{source:"iana"},"application/vnd.nokia.pcd+xml":{source:"iana"},"application/vnd.nokia.radio-preset":{source:"iana",extensions:["rpst"]},"application/vnd.nokia.radio-presets":{source:"iana",extensions:["rpss"]},"application/vnd.novadigm.edm":{source:"iana",extensions:["edm"]},"application/vnd.novadigm.edx":{source:"iana",extensions:["edx"]},"application/vnd.novadigm.ext":{source:"iana",extensions:["ext"]},"application/vnd.ntt-local.content-share":{source:"iana"},"application/vnd.ntt-local.file-transfer":{source:"iana"},"application/vnd.ntt-local.ogw_remote-access":{source:"iana"},"application/vnd.ntt-local.sip-ta_remote":{source:"iana"},"application/vnd.ntt-local.sip-ta_tcp_stream":{source:"iana"},"application/vnd.oasis.opendocument.chart":{source:"iana",extensions:["odc"]},"application/vnd.oasis.opendocument.chart-template":{source:"iana",extensions:["otc"]},"application/vnd.oasis.opendocument.database":{source:"iana",extensions:["odb"]},"application/vnd.oasis.opendocument.formula":{source:"iana",extensions:["odf"]},"application/vnd.oasis.opendocument.formula-template":{source:"iana",extensions:["odft"]},"application/vnd.oasis.opendocument.graphics":{source:"iana",compressible:!1,extensions:["odg"]},"application/vnd.oasis.opendocument.graphics-template":{source:"iana",extensions:["otg"]},"application/vnd.oasis.opendocument.image":{source:"iana",extensions:["odi"]},"application/vnd.oasis.opendocument.image-template":{source:"iana",extensions:["oti"]},"application/vnd.oasis.opendocument.presentation":{source:"iana",compressible:!1,extensions:["odp"]},"application/vnd.oasis.opendocument.presentation-template":{source:"iana",extensions:["otp"]},"application/vnd.oasis.opendocument.spreadsheet":{source:"iana",compressible:!1,extensions:["ods"]},"application/vnd.oasis.opendocument.spreadsheet-template":{source:"iana",extensions:["ots"]},"application/vnd.oasis.opendocument.text":{source:"iana",compressible:!1,extensions:["odt"]},"application/vnd.oasis.opendocument.text-master":{source:"iana",extensions:["odm"]},"application/vnd.oasis.opendocument.text-template":{source:"iana",extensions:["ott"]},"application/vnd.oasis.opendocument.text-web":{source:"iana",extensions:["oth"]},"application/vnd.obn":{source:"iana"},"application/vnd.ocf+cbor":{source:"iana"},"application/vnd.oftn.l10n+json":{source:"iana",compressible:!0},"application/vnd.oipf.contentaccessdownload+xml":{source:"iana"},"application/vnd.oipf.contentaccessstreaming+xml":{source:"iana"},"application/vnd.oipf.cspg-hexbinary":{source:"iana"},"application/vnd.oipf.dae.svg+xml":{source:"iana"},"application/vnd.oipf.dae.xhtml+xml":{source:"iana"},"application/vnd.oipf.mippvcontrolmessage+xml":{source:"iana"},"application/vnd.oipf.pae.gem":{source:"iana"},"application/vnd.oipf.spdiscovery+xml":{source:"iana"},"application/vnd.oipf.spdlist+xml":{source:"iana"},"application/vnd.oipf.ueprofile+xml":{source:"iana"},"application/vnd.oipf.userprofile+xml":{source:"iana"},"application/vnd.olpc-sugar":{source:"iana",extensions:["xo"]},"application/vnd.oma-scws-config":{source:"iana"},"application/vnd.oma-scws-http-request":{source:"iana"},"application/vnd.oma-scws-http-response":{source:"iana"},"application/vnd.oma.bcast.associated-procedure-parameter+xml":{source:"iana"},"application/vnd.oma.bcast.drm-trigger+xml":{source:"iana"},"application/vnd.oma.bcast.imd+xml":{source:"iana"},"application/vnd.oma.bcast.ltkm":{source:"iana"},"application/vnd.oma.bcast.notification+xml":{source:"iana"},"application/vnd.oma.bcast.provisioningtrigger":{source:"iana"},"application/vnd.oma.bcast.sgboot":{source:"iana"},"application/vnd.oma.bcast.sgdd+xml":{source:"iana"},"application/vnd.oma.bcast.sgdu":{source:"iana"},"application/vnd.oma.bcast.simple-symbol-container":{source:"iana"},"application/vnd.oma.bcast.smartcard-trigger+xml":{source:"iana"},"application/vnd.oma.bcast.sprov+xml":{source:"iana"},"application/vnd.oma.bcast.stkm":{source:"iana"},"application/vnd.oma.cab-address-book+xml":{source:"iana"},"application/vnd.oma.cab-feature-handler+xml":{source:"iana"},"application/vnd.oma.cab-pcc+xml":{source:"iana"},"application/vnd.oma.cab-subs-invite+xml":{source:"iana"},"application/vnd.oma.cab-user-prefs+xml":{source:"iana"},"application/vnd.oma.dcd":{source:"iana"},"application/vnd.oma.dcdc":{source:"iana"},"application/vnd.oma.dd2+xml":{source:"iana",extensions:["dd2"]},"application/vnd.oma.drm.risd+xml":{source:"iana"},"application/vnd.oma.group-usage-list+xml":{source:"iana"},"application/vnd.oma.lwm2m+json":{source:"iana",compressible:!0},"application/vnd.oma.lwm2m+tlv":{source:"iana"},"application/vnd.oma.pal+xml":{source:"iana"},"application/vnd.oma.poc.detailed-progress-report+xml":{source:"iana"},"application/vnd.oma.poc.final-report+xml":{source:"iana"},"application/vnd.oma.poc.groups+xml":{source:"iana"},"application/vnd.oma.poc.invocation-descriptor+xml":{source:"iana"},"application/vnd.oma.poc.optimized-progress-report+xml":{source:"iana"},"application/vnd.oma.push":{source:"iana"},"application/vnd.oma.scidm.messages+xml":{source:"iana"},"application/vnd.oma.xcap-directory+xml":{source:"iana"},"application/vnd.omads-email+xml":{source:"iana"},"application/vnd.omads-file+xml":{source:"iana"},"application/vnd.omads-folder+xml":{source:"iana"},"application/vnd.omaloc-supl-init":{source:"iana"},"application/vnd.onepager":{source:"iana"},"application/vnd.onepagertamp":{source:"iana"},"application/vnd.onepagertamx":{source:"iana"},"application/vnd.onepagertat":{source:"iana"},"application/vnd.onepagertatp":{source:"iana"},"application/vnd.onepagertatx":{source:"iana"},"application/vnd.openblox.game+xml":{source:"iana"},"application/vnd.openblox.game-binary":{source:"iana"},"application/vnd.openeye.oeb":{source:"iana"},"application/vnd.openofficeorg.extension":{source:"apache",extensions:["oxt"]},"application/vnd.openstreetmap.data+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.custom-properties+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.customxmlproperties+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.drawing+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.drawingml.chart+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.extended-properties+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.presentationml.comments+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.presentationml.presentation":{source:"iana",compressible:!1,extensions:["pptx"]},"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.presentationml.slide":{source:"iana",extensions:["sldx"]},"application/vnd.openxmlformats-officedocument.presentationml.slide+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.presentationml.slideshow":{source:"iana",extensions:["ppsx"]},"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.presentationml.tags+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.presentationml.template":{source:"iana",extensions:["potx"]},"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{source:"iana",compressible:!1,extensions:["xlsx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.template":{source:"iana",extensions:["xltx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.theme+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.themeoverride+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.vmldrawing":{source:"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{source:"iana",compressible:!1,extensions:["docx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.template":{source:"iana",extensions:["dotx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml":{source:"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml":{source:"iana"},"application/vnd.openxmlformats-package.core-properties+xml":{source:"iana"},"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml":{source:"iana"},"application/vnd.openxmlformats-package.relationships+xml":{source:"iana"},"application/vnd.oracle.resource+json":{source:"iana",compressible:!0},"application/vnd.orange.indata":{source:"iana"},"application/vnd.osa.netdeploy":{source:"iana"},"application/vnd.osgeo.mapguide.package":{source:"iana",extensions:["mgp"]},"application/vnd.osgi.bundle":{source:"iana"},"application/vnd.osgi.dp":{source:"iana",extensions:["dp"]},"application/vnd.osgi.subsystem":{source:"iana",extensions:["esa"]},"application/vnd.otps.ct-kip+xml":{source:"iana"},"application/vnd.oxli.countgraph":{source:"iana"},"application/vnd.pagerduty+json":{source:"iana",compressible:!0},"application/vnd.palm":{source:"iana",extensions:["pdb","pqa","oprc"]},"application/vnd.panoply":{source:"iana"},"application/vnd.paos+xml":{source:"iana"},"application/vnd.paos.xml":{source:"apache"},"application/vnd.patentdive":{source:"iana"},"application/vnd.pawaafile":{source:"iana",extensions:["paw"]},"application/vnd.pcos":{source:"iana"},"application/vnd.pg.format":{source:"iana",extensions:["str"]},"application/vnd.pg.osasli":{source:"iana",extensions:["ei6"]},"application/vnd.piaccess.application-licence":{source:"iana"},"application/vnd.picsel":{source:"iana",extensions:["efif"]},"application/vnd.pmi.widget":{source:"iana",extensions:["wg"]},"application/vnd.poc.group-advertisement+xml":{source:"iana"},"application/vnd.pocketlearn":{source:"iana",extensions:["plf"]},"application/vnd.powerbuilder6":{source:"iana",extensions:["pbd"]},"application/vnd.powerbuilder6-s":{source:"iana"},"application/vnd.powerbuilder7":{source:"iana"},"application/vnd.powerbuilder7-s":{source:"iana"},"application/vnd.powerbuilder75":{source:"iana"},"application/vnd.powerbuilder75-s":{source:"iana"},"application/vnd.preminet":{source:"iana"},"application/vnd.previewsystems.box":{source:"iana",extensions:["box"]},"application/vnd.proteus.magazine":{source:"iana",extensions:["mgz"]},"application/vnd.publishare-delta-tree":{source:"iana",extensions:["qps"]},"application/vnd.pvi.ptid1":{source:"iana",extensions:["ptid"]},"application/vnd.pwg-multiplexed":{source:"iana"},"application/vnd.pwg-xhtml-print+xml":{source:"iana"},"application/vnd.qualcomm.brew-app-res":{source:"iana"},"application/vnd.quarantainenet":{source:"iana"},"application/vnd.quark.quarkxpress":{source:"iana",extensions:["qxd","qxt","qwd","qwt","qxl","qxb"]},"application/vnd.quobject-quoxdocument":{source:"iana"},"application/vnd.radisys.moml+xml":{source:"iana"},"application/vnd.radisys.msml+xml":{source:"iana"},"application/vnd.radisys.msml-audit+xml":{source:"iana"},"application/vnd.radisys.msml-audit-conf+xml":{source:"iana"},"application/vnd.radisys.msml-audit-conn+xml":{source:"iana"},"application/vnd.radisys.msml-audit-dialog+xml":{source:"iana"},"application/vnd.radisys.msml-audit-stream+xml":{source:"iana"},"application/vnd.radisys.msml-conf+xml":{source:"iana"},"application/vnd.radisys.msml-dialog+xml":{source:"iana"},"application/vnd.radisys.msml-dialog-base+xml":{source:"iana"},"application/vnd.radisys.msml-dialog-fax-detect+xml":{source:"iana"},"application/vnd.radisys.msml-dialog-fax-sendrecv+xml":{source:"iana"},"application/vnd.radisys.msml-dialog-group+xml":{source:"iana"},"application/vnd.radisys.msml-dialog-speech+xml":{source:"iana"},"application/vnd.radisys.msml-dialog-transform+xml":{source:"iana"},"application/vnd.rainstor.data":{source:"iana"},"application/vnd.rapid":{source:"iana"},"application/vnd.rar":{source:"iana"},"application/vnd.realvnc.bed":{source:"iana",extensions:["bed"]},"application/vnd.recordare.musicxml":{source:"iana",extensions:["mxl"]},"application/vnd.recordare.musicxml+xml":{source:"iana",extensions:["musicxml"]},"application/vnd.renlearn.rlprint":{source:"iana"},"application/vnd.restful+json":{source:"iana",compressible:!0},"application/vnd.rig.cryptonote":{source:"iana",extensions:["cryptonote"]},"application/vnd.rim.cod":{source:"apache",extensions:["cod"]},"application/vnd.rn-realmedia":{source:"apache",extensions:["rm"]},"application/vnd.rn-realmedia-vbr":{source:"apache",extensions:["rmvb"]},"application/vnd.route66.link66+xml":{source:"iana",extensions:["link66"]},"application/vnd.rs-274x":{source:"iana"},"application/vnd.ruckus.download":{source:"iana"},"application/vnd.s3sms":{source:"iana"},"application/vnd.sailingtracker.track":{source:"iana",extensions:["st"]},"application/vnd.sbm.cid":{source:"iana"},"application/vnd.sbm.mid2":{source:"iana"},"application/vnd.scribus":{source:"iana"},"application/vnd.sealed.3df":{source:"iana"},"application/vnd.sealed.csf":{source:"iana"},"application/vnd.sealed.doc":{source:"iana"},"application/vnd.sealed.eml":{source:"iana"},"application/vnd.sealed.mht":{source:"iana"},"application/vnd.sealed.net":{source:"iana"},"application/vnd.sealed.ppt":{source:"iana"},"application/vnd.sealed.tiff":{source:"iana"},"application/vnd.sealed.xls":{source:"iana"},"application/vnd.sealedmedia.softseal.html":{source:"iana"},"application/vnd.sealedmedia.softseal.pdf":{source:"iana"},"application/vnd.seemail":{source:"iana",extensions:["see"]},"application/vnd.sema":{source:"iana",extensions:["sema"]},"application/vnd.semd":{source:"iana",extensions:["semd"]},"application/vnd.semf":{source:"iana",extensions:["semf"]},"application/vnd.shana.informed.formdata":{source:"iana",extensions:["ifm"]},"application/vnd.shana.informed.formtemplate":{source:"iana",extensions:["itp"]},"application/vnd.shana.informed.interchange":{source:"iana",extensions:["iif"]},"application/vnd.shana.informed.package":{source:"iana",extensions:["ipk"]},"application/vnd.sigrok.session":{source:"iana"},"application/vnd.simtech-mindmapper":{source:"iana",extensions:["twd","twds"]},"application/vnd.siren+json":{source:"iana",compressible:!0},"application/vnd.smaf":{source:"iana",extensions:["mmf"]},"application/vnd.smart.notebook":{source:"iana"},"application/vnd.smart.teacher":{source:"iana",extensions:["teacher"]},"application/vnd.software602.filler.form+xml":{source:"iana"},"application/vnd.software602.filler.form-xml-zip":{source:"iana"},"application/vnd.solent.sdkm+xml":{source:"iana",extensions:["sdkm","sdkd"]},"application/vnd.spotfire.dxp":{source:"iana",extensions:["dxp"]},"application/vnd.spotfire.sfs":{source:"iana",extensions:["sfs"]},"application/vnd.sqlite3":{source:"iana"},"application/vnd.sss-cod":{source:"iana"},"application/vnd.sss-dtf":{source:"iana"},"application/vnd.sss-ntf":{source:"iana"},"application/vnd.stardivision.calc":{source:"apache",extensions:["sdc"]},"application/vnd.stardivision.draw":{source:"apache",extensions:["sda"]},"application/vnd.stardivision.impress":{source:"apache",extensions:["sdd"]},"application/vnd.stardivision.math":{source:"apache",extensions:["smf"]},"application/vnd.stardivision.writer":{source:"apache",extensions:["sdw","vor"]},"application/vnd.stardivision.writer-global":{source:"apache",extensions:["sgl"]},"application/vnd.stepmania.package":{source:"iana",extensions:["smzip"]},"application/vnd.stepmania.stepchart":{source:"iana",extensions:["sm"]},"application/vnd.street-stream":{source:"iana"},"application/vnd.sun.wadl+xml":{source:"iana",compressible:!0,extensions:["wadl"]},"application/vnd.sun.xml.calc":{source:"apache",extensions:["sxc"]},"application/vnd.sun.xml.calc.template":{source:"apache",extensions:["stc"]},"application/vnd.sun.xml.draw":{source:"apache",extensions:["sxd"]},"application/vnd.sun.xml.draw.template":{source:"apache",extensions:["std"]},"application/vnd.sun.xml.impress":{source:"apache",extensions:["sxi"]},"application/vnd.sun.xml.impress.template":{source:"apache",extensions:["sti"]},"application/vnd.sun.xml.math":{source:"apache",extensions:["sxm"]},"application/vnd.sun.xml.writer":{source:"apache",extensions:["sxw"]},"application/vnd.sun.xml.writer.global":{source:"apache",extensions:["sxg"]},"application/vnd.sun.xml.writer.template":{source:"apache",extensions:["stw"]},"application/vnd.sus-calendar":{source:"iana",extensions:["sus","susp"]},"application/vnd.svd":{source:"iana",extensions:["svd"]},"application/vnd.swiftview-ics":{source:"iana"},"application/vnd.symbian.install":{source:"apache",extensions:["sis","sisx"]},"application/vnd.syncml+xml":{source:"iana",extensions:["xsm"]},"application/vnd.syncml.dm+wbxml":{source:"iana",extensions:["bdm"]},"application/vnd.syncml.dm+xml":{source:"iana",extensions:["xdm"]},"application/vnd.syncml.dm.notification":{source:"iana"},"application/vnd.syncml.dmddf+wbxml":{source:"iana"},"application/vnd.syncml.dmddf+xml":{source:"iana"},"application/vnd.syncml.dmtnds+wbxml":{source:"iana"},"application/vnd.syncml.dmtnds+xml":{source:"iana"},"application/vnd.syncml.ds.notification":{source:"iana"},"application/vnd.tableschema+json":{source:"iana",compressible:!0},"application/vnd.tao.intent-module-archive":{source:"iana",extensions:["tao"]},"application/vnd.tcpdump.pcap":{source:"iana",extensions:["pcap","cap","dmp"]},"application/vnd.tmd.mediaflex.api+xml":{source:"iana"},"application/vnd.tml":{source:"iana"},"application/vnd.tmobile-livetv":{source:"iana",extensions:["tmo"]},"application/vnd.tri.onesource":{source:"iana"},"application/vnd.trid.tpt":{source:"iana",extensions:["tpt"]},"application/vnd.triscape.mxs":{source:"iana",extensions:["mxs"]},"application/vnd.trueapp":{source:"iana",extensions:["tra"]},"application/vnd.truedoc":{source:"iana"},"application/vnd.ubisoft.webplayer":{source:"iana"},"application/vnd.ufdl":{source:"iana",extensions:["ufd","ufdl"]},"application/vnd.uiq.theme":{source:"iana",extensions:["utz"]},"application/vnd.umajin":{source:"iana",extensions:["umj"]},"application/vnd.unity":{source:"iana",extensions:["unityweb"]},"application/vnd.uoml+xml":{source:"iana",extensions:["uoml"]},"application/vnd.uplanet.alert":{source:"iana"},"application/vnd.uplanet.alert-wbxml":{source:"iana"},"application/vnd.uplanet.bearer-choice":{source:"iana"},"application/vnd.uplanet.bearer-choice-wbxml":{source:"iana"},"application/vnd.uplanet.cacheop":{source:"iana"},"application/vnd.uplanet.cacheop-wbxml":{source:"iana"},"application/vnd.uplanet.channel":{source:"iana"},"application/vnd.uplanet.channel-wbxml":{source:"iana"},"application/vnd.uplanet.list":{source:"iana"},"application/vnd.uplanet.list-wbxml":{source:"iana"},"application/vnd.uplanet.listcmd":{source:"iana"},"application/vnd.uplanet.listcmd-wbxml":{source:"iana"},"application/vnd.uplanet.signal":{source:"iana"},"application/vnd.uri-map":{source:"iana"},"application/vnd.valve.source.material":{source:"iana"},"application/vnd.vcx":{source:"iana",extensions:["vcx"]},"application/vnd.vd-study":{source:"iana"},"application/vnd.vectorworks":{source:"iana"},"application/vnd.vel+json":{source:"iana",compressible:!0},"application/vnd.verimatrix.vcas":{source:"iana"},"application/vnd.vidsoft.vidconference":{source:"iana"},"application/vnd.visio":{source:"iana",extensions:["vsd","vst","vss","vsw"]},"application/vnd.visionary":{source:"iana",extensions:["vis"]},"application/vnd.vividence.scriptfile":{source:"iana"},"application/vnd.vsf":{source:"iana",extensions:["vsf"]},"application/vnd.wap.sic":{source:"iana"},"application/vnd.wap.slc":{source:"iana"},"application/vnd.wap.wbxml":{source:"iana",extensions:["wbxml"]},"application/vnd.wap.wmlc":{source:"iana",extensions:["wmlc"]},"application/vnd.wap.wmlscriptc":{source:"iana",extensions:["wmlsc"]},"application/vnd.webturbo":{source:"iana",extensions:["wtb"]},"application/vnd.wfa.p2p":{source:"iana"},"application/vnd.wfa.wsc":{source:"iana"},"application/vnd.windows.devicepairing":{source:"iana"},"application/vnd.wmc":{source:"iana"},"application/vnd.wmf.bootstrap":{source:"iana"},"application/vnd.wolfram.mathematica":{source:"iana"},"application/vnd.wolfram.mathematica.package":{source:"iana"},"application/vnd.wolfram.player":{source:"iana",extensions:["nbp"]},"application/vnd.wordperfect":{source:"iana",extensions:["wpd"]},"application/vnd.wqd":{source:"iana",extensions:["wqd"]},"application/vnd.wrq-hp3000-labelled":{source:"iana"},"application/vnd.wt.stf":{source:"iana",extensions:["stf"]},"application/vnd.wv.csp+wbxml":{source:"iana"},"application/vnd.wv.csp+xml":{source:"iana"},"application/vnd.wv.ssp+xml":{source:"iana"},"application/vnd.xacml+json":{source:"iana",compressible:!0},"application/vnd.xara":{source:"iana",extensions:["xar"]},"application/vnd.xfdl":{source:"iana",extensions:["xfdl"]},"application/vnd.xfdl.webform":{source:"iana"},"application/vnd.xmi+xml":{source:"iana"},"application/vnd.xmpie.cpkg":{source:"iana"},"application/vnd.xmpie.dpkg":{source:"iana"},"application/vnd.xmpie.plan":{source:"iana"},"application/vnd.xmpie.ppkg":{source:"iana"},"application/vnd.xmpie.xlim":{source:"iana"},"application/vnd.yamaha.hv-dic":{source:"iana",extensions:["hvd"]},"application/vnd.yamaha.hv-script":{source:"iana",extensions:["hvs"]},"application/vnd.yamaha.hv-voice":{source:"iana",extensions:["hvp"]},"application/vnd.yamaha.openscoreformat":{source:"iana",extensions:["osf"]},"application/vnd.yamaha.openscoreformat.osfpvg+xml":{source:"iana",extensions:["osfpvg"]},"application/vnd.yamaha.remote-setup":{source:"iana"},"application/vnd.yamaha.smaf-audio":{source:"iana",extensions:["saf"]},"application/vnd.yamaha.smaf-phrase":{source:"iana",extensions:["spf"]},"application/vnd.yamaha.through-ngn":{source:"iana"},"application/vnd.yamaha.tunnel-udpencap":{source:"iana"},"application/vnd.yaoweme":{source:"iana"},"application/vnd.yellowriver-custom-menu":{source:"iana",extensions:["cmp"]},"application/vnd.youtube.yt":{source:"iana"},"application/vnd.zul":{source:"iana",extensions:["zir","zirz"]},"application/vnd.zzazz.deck+xml":{source:"iana",extensions:["zaz"]},"application/voicexml+xml":{source:"iana",extensions:["vxml"]},"application/voucher-cms+json":{source:"iana",compressible:!0},"application/vq-rtcpxr":{source:"iana"},"application/wasm":{compressible:!0,extensions:["wasm"]},"application/watcherinfo+xml":{source:"iana"},"application/webpush-options+json":{source:"iana",compressible:!0},"application/whoispp-query":{source:"iana"},"application/whoispp-response":{source:"iana"},"application/widget":{source:"iana",extensions:["wgt"]},"application/winhlp":{source:"apache",extensions:["hlp"]},"application/wita":{source:"iana"},"application/wordperfect5.1":{source:"iana"},"application/wsdl+xml":{source:"iana",extensions:["wsdl"]},"application/wspolicy+xml":{source:"iana",extensions:["wspolicy"]},"application/x-7z-compressed":{source:"apache",compressible:!1,extensions:["7z"]},"application/x-abiword":{source:"apache",extensions:["abw"]},"application/x-ace-compressed":{source:"apache",extensions:["ace"]},"application/x-amf":{source:"apache"},"application/x-apple-diskimage":{source:"apache",extensions:["dmg"]},"application/x-arj":{compressible:!1,extensions:["arj"]},"application/x-authorware-bin":{source:"apache",extensions:["aab","x32","u32","vox"]},"application/x-authorware-map":{source:"apache",extensions:["aam"]},"application/x-authorware-seg":{source:"apache",extensions:["aas"]},"application/x-bcpio":{source:"apache",extensions:["bcpio"]},"application/x-bdoc":{compressible:!1,extensions:["bdoc"]},"application/x-bittorrent":{source:"apache",extensions:["torrent"]},"application/x-blorb":{source:"apache",extensions:["blb","blorb"]},"application/x-bzip":{source:"apache",compressible:!1,extensions:["bz"]},"application/x-bzip2":{source:"apache",compressible:!1,extensions:["bz2","boz"]},"application/x-cbr":{source:"apache",extensions:["cbr","cba","cbt","cbz","cb7"]},"application/x-cdlink":{source:"apache",extensions:["vcd"]},"application/x-cfs-compressed":{source:"apache",extensions:["cfs"]},"application/x-chat":{source:"apache",extensions:["chat"]},"application/x-chess-pgn":{source:"apache",extensions:["pgn"]},"application/x-chrome-extension":{extensions:["crx"]},"application/x-cocoa":{source:"nginx",extensions:["cco"]},"application/x-compress":{source:"apache"},"application/x-conference":{source:"apache",extensions:["nsc"]},"application/x-cpio":{source:"apache",extensions:["cpio"]},"application/x-csh":{source:"apache",extensions:["csh"]},"application/x-deb":{compressible:!1},"application/x-debian-package":{source:"apache",extensions:["deb","udeb"]},"application/x-dgc-compressed":{source:"apache",extensions:["dgc"]},"application/x-director":{source:"apache",extensions:["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"]},"application/x-doom":{source:"apache",extensions:["wad"]},"application/x-dtbncx+xml":{source:"apache",extensions:["ncx"]},"application/x-dtbook+xml":{source:"apache",extensions:["dtb"]},"application/x-dtbresource+xml":{source:"apache",extensions:["res"]},"application/x-dvi":{source:"apache",compressible:!1,extensions:["dvi"]},"application/x-envoy":{source:"apache",extensions:["evy"]},"application/x-eva":{source:"apache",extensions:["eva"]},"application/x-font-bdf":{source:"apache",extensions:["bdf"]},"application/x-font-dos":{source:"apache"},"application/x-font-framemaker":{source:"apache"},"application/x-font-ghostscript":{source:"apache",extensions:["gsf"]},"application/x-font-libgrx":{source:"apache"},"application/x-font-linux-psf":{source:"apache",extensions:["psf"]},"application/x-font-pcf":{source:"apache",extensions:["pcf"]},"application/x-font-snf":{source:"apache",extensions:["snf"]},"application/x-font-speedo":{source:"apache"},"application/x-font-sunos-news":{source:"apache"},"application/x-font-type1":{source:"apache",extensions:["pfa","pfb","pfm","afm"]},"application/x-font-vfont":{source:"apache"},"application/x-freearc":{source:"apache",extensions:["arc"]},"application/x-futuresplash":{source:"apache",extensions:["spl"]},"application/x-gca-compressed":{source:"apache",extensions:["gca"]},"application/x-glulx":{source:"apache",extensions:["ulx"]},"application/x-gnumeric":{source:"apache",extensions:["gnumeric"]},"application/x-gramps-xml":{source:"apache",extensions:["gramps"]},"application/x-gtar":{source:"apache",extensions:["gtar"]},"application/x-gzip":{source:"apache"},"application/x-hdf":{source:"apache",extensions:["hdf"]},"application/x-httpd-php":{compressible:!0,extensions:["php"]},"application/x-install-instructions":{source:"apache",extensions:["install"]},"application/x-iso9660-image":{source:"apache",extensions:["iso"]},"application/x-java-archive-diff":{source:"nginx",extensions:["jardiff"]},"application/x-java-jnlp-file":{source:"apache",compressible:!1,extensions:["jnlp"]},"application/x-javascript":{compressible:!0},"application/x-latex":{source:"apache",compressible:!1,extensions:["latex"]},"application/x-lua-bytecode":{extensions:["luac"]},"application/x-lzh-compressed":{source:"apache",extensions:["lzh","lha"]},"application/x-makeself":{source:"nginx",extensions:["run"]},"application/x-mie":{source:"apache",extensions:["mie"]},"application/x-mobipocket-ebook":{source:"apache",extensions:["prc","mobi"]},"application/x-mpegurl":{compressible:!1},"application/x-ms-application":{source:"apache",extensions:["application"]},"application/x-ms-shortcut":{source:"apache",extensions:["lnk"]},"application/x-ms-wmd":{source:"apache",extensions:["wmd"]},"application/x-ms-wmz":{source:"apache",extensions:["wmz"]},"application/x-ms-xbap":{source:"apache",extensions:["xbap"]},"application/x-msaccess":{source:"apache",extensions:["mdb"]},"application/x-msbinder":{source:"apache",extensions:["obd"]},"application/x-mscardfile":{source:"apache",extensions:["crd"]},"application/x-msclip":{source:"apache",extensions:["clp"]},"application/x-msdos-program":{extensions:["exe"]},"application/x-msdownload":{source:"apache",extensions:["exe","dll","com","bat","msi"]},"application/x-msmediaview":{source:"apache",extensions:["mvb","m13","m14"]},"application/x-msmetafile":{source:"apache",extensions:["wmf","wmz","emf","emz"]},"application/x-msmoney":{source:"apache",extensions:["mny"]},"application/x-mspublisher":{source:"apache",extensions:["pub"]},"application/x-msschedule":{source:"apache",extensions:["scd"]},"application/x-msterminal":{source:"apache",extensions:["trm"]},"application/x-mswrite":{source:"apache",extensions:["wri"]},"application/x-netcdf":{source:"apache",extensions:["nc","cdf"]},"application/x-ns-proxy-autoconfig":{compressible:!0,extensions:["pac"]},"application/x-nzb":{source:"apache",extensions:["nzb"]},"application/x-perl":{source:"nginx",extensions:["pl","pm"]},"application/x-pilot":{source:"nginx",extensions:["prc","pdb"]},"application/x-pkcs12":{source:"apache",compressible:!1,extensions:["p12","pfx"]},"application/x-pkcs7-certificates":{source:"apache",extensions:["p7b","spc"]},"application/x-pkcs7-certreqresp":{source:"apache",extensions:["p7r"]},"application/x-rar-compressed":{source:"apache",compressible:!1,extensions:["rar"]},"application/x-redhat-package-manager":{source:"nginx",extensions:["rpm"]},"application/x-research-info-systems":{source:"apache",extensions:["ris"]},"application/x-sea":{source:"nginx",extensions:["sea"]},"application/x-sh":{source:"apache",compressible:!0,extensions:["sh"]},"application/x-shar":{source:"apache",extensions:["shar"]},"application/x-shockwave-flash":{source:"apache",compressible:!1,extensions:["swf"]},"application/x-silverlight-app":{source:"apache",extensions:["xap"]},"application/x-sql":{source:"apache",extensions:["sql"]},"application/x-stuffit":{source:"apache",compressible:!1,extensions:["sit"]},"application/x-stuffitx":{source:"apache",extensions:["sitx"]},"application/x-subrip":{source:"apache",extensions:["srt"]},"application/x-sv4cpio":{source:"apache",extensions:["sv4cpio"]},"application/x-sv4crc":{source:"apache",extensions:["sv4crc"]},"application/x-t3vm-image":{source:"apache",extensions:["t3"]},"application/x-tads":{source:"apache",extensions:["gam"]},"application/x-tar":{source:"apache",compressible:!0,extensions:["tar"]},"application/x-tcl":{source:"apache",extensions:["tcl","tk"]},"application/x-tex":{source:"apache",extensions:["tex"]},"application/x-tex-tfm":{source:"apache",extensions:["tfm"]},"application/x-texinfo":{source:"apache",extensions:["texinfo","texi"]},"application/x-tgif":{source:"apache",extensions:["obj"]},"application/x-ustar":{source:"apache",extensions:["ustar"]},"application/x-virtualbox-hdd":{compressible:!0,extensions:["hdd"]},"application/x-virtualbox-ova":{compressible:!0,extensions:["ova"]},"application/x-virtualbox-ovf":{compressible:!0,extensions:["ovf"]},"application/x-virtualbox-vbox":{compressible:!0,extensions:["vbox"]},"application/x-virtualbox-vbox-extpack":{compressible:!1,extensions:["vbox-extpack"]},"application/x-virtualbox-vdi":{compressible:!0,extensions:["vdi"]},"application/x-virtualbox-vhd":{compressible:!0,extensions:["vhd"]},"application/x-virtualbox-vmdk":{compressible:!0,extensions:["vmdk"]},"application/x-wais-source":{source:"apache",extensions:["src"]},"application/x-web-app-manifest+json":{compressible:!0,extensions:["webapp"]},"application/x-www-form-urlencoded":{source:"iana",compressible:!0},"application/x-x509-ca-cert":{source:"apache",extensions:["der","crt","pem"]},"application/x-xfig":{source:"apache",extensions:["fig"]},"application/x-xliff+xml":{source:"apache",extensions:["xlf"]},"application/x-xpinstall":{source:"apache",compressible:!1,extensions:["xpi"]},"application/x-xz":{source:"apache",extensions:["xz"]},"application/x-zmachine":{source:"apache",extensions:["z1","z2","z3","z4","z5","z6","z7","z8"]},"application/x400-bp":{source:"iana"},"application/xacml+xml":{source:"iana"},"application/xaml+xml":{source:"apache",extensions:["xaml"]},"application/xcap-att+xml":{source:"iana"},"application/xcap-caps+xml":{source:"iana"},"application/xcap-diff+xml":{source:"iana",extensions:["xdf"]},"application/xcap-el+xml":{source:"iana"},"application/xcap-error+xml":{source:"iana"},"application/xcap-ns+xml":{source:"iana"},"application/xcon-conference-info+xml":{source:"iana"},"application/xcon-conference-info-diff+xml":{source:"iana"},"application/xenc+xml":{source:"iana",extensions:["xenc"]},"application/xhtml+xml":{source:"iana",compressible:!0,extensions:["xhtml","xht"]},"application/xhtml-voice+xml":{source:"apache"},"application/xml":{source:"iana",compressible:!0,extensions:["xml","xsl","xsd","rng"]},"application/xml-dtd":{source:"iana",compressible:!0,extensions:["dtd"]},"application/xml-external-parsed-entity":{source:"iana"},"application/xml-patch+xml":{source:"iana"},"application/xmpp+xml":{source:"iana"},"application/xop+xml":{source:"iana",compressible:!0,extensions:["xop"]},"application/xproc+xml":{source:"apache",extensions:["xpl"]},"application/xslt+xml":{source:"iana",extensions:["xslt"]},"application/xspf+xml":{source:"apache",extensions:["xspf"]},"application/xv+xml":{source:"iana",extensions:["mxml","xhvml","xvml","xvm"]},"application/yang":{source:"iana",extensions:["yang"]},"application/yang-data+json":{source:"iana",compressible:!0},"application/yang-data+xml":{source:"iana"},"application/yang-patch+json":{source:"iana",compressible:!0},"application/yang-patch+xml":{source:"iana"},"application/yin+xml":{source:"iana",extensions:["yin"]},"application/zip":{source:"iana",compressible:!1,extensions:["zip"]},"application/zlib":{source:"iana"},"audio/1d-interleaved-parityfec":{source:"iana"},"audio/32kadpcm":{source:"iana"},"audio/3gpp":{source:"iana",compressible:!1,extensions:["3gpp"]},"audio/3gpp2":{source:"iana"},"audio/ac3":{source:"iana"},"audio/adpcm":{source:"apache",extensions:["adp"]},"audio/amr":{source:"iana"},"audio/amr-wb":{source:"iana"},"audio/amr-wb+":{source:"iana"},"audio/aptx":{source:"iana"},"audio/asc":{source:"iana"},"audio/atrac-advanced-lossless":{source:"iana"},"audio/atrac-x":{source:"iana"},"audio/atrac3":{source:"iana"},"audio/basic":{source:"iana",compressible:!1,extensions:["au","snd"]},"audio/bv16":{source:"iana"},"audio/bv32":{source:"iana"},"audio/clearmode":{source:"iana"},"audio/cn":{source:"iana"},"audio/dat12":{source:"iana"},"audio/dls":{source:"iana"},"audio/dsr-es201108":{source:"iana"},"audio/dsr-es202050":{source:"iana"},"audio/dsr-es202211":{source:"iana"},"audio/dsr-es202212":{source:"iana"},"audio/dv":{source:"iana"},"audio/dvi4":{source:"iana"},"audio/eac3":{source:"iana"},"audio/encaprtp":{source:"iana"},"audio/evrc":{source:"iana"},"audio/evrc-qcp":{source:"iana"},"audio/evrc0":{source:"iana"},"audio/evrc1":{source:"iana"},"audio/evrcb":{source:"iana"},"audio/evrcb0":{source:"iana"},"audio/evrcb1":{source:"iana"},"audio/evrcnw":{source:"iana"},"audio/evrcnw0":{source:"iana"},"audio/evrcnw1":{source:"iana"},"audio/evrcwb":{source:"iana"},"audio/evrcwb0":{source:"iana"},"audio/evrcwb1":{source:"iana"},"audio/evs":{source:"iana"},"audio/fwdred":{source:"iana"},"audio/g711-0":{source:"iana"},"audio/g719":{source:"iana"},"audio/g722":{source:"iana"},"audio/g7221":{source:"iana"},"audio/g723":{source:"iana"},"audio/g726-16":{source:"iana"},"audio/g726-24":{source:"iana"},"audio/g726-32":{source:"iana"},"audio/g726-40":{source:"iana"},"audio/g728":{source:"iana"},"audio/g729":{source:"iana"},"audio/g7291":{source:"iana"},"audio/g729d":{source:"iana"},"audio/g729e":{source:"iana"},"audio/gsm":{source:"iana"},"audio/gsm-efr":{source:"iana"},"audio/gsm-hr-08":{source:"iana"},"audio/ilbc":{source:"iana"},"audio/ip-mr_v2.5":{source:"iana"},"audio/isac":{source:"apache"},"audio/l16":{source:"iana"},"audio/l20":{source:"iana"},"audio/l24":{source:"iana",compressible:!1},"audio/l8":{source:"iana"},"audio/lpc":{source:"iana"},"audio/melp":{source:"iana"},"audio/melp1200":{source:"iana"},"audio/melp2400":{source:"iana"},"audio/melp600":{source:"iana"},"audio/midi":{source:"apache",extensions:["mid","midi","kar","rmi"]},"audio/mobile-xmf":{source:"iana"},"audio/mp3":{compressible:!1,extensions:["mp3"]},"audio/mp4":{source:"iana",compressible:!1,extensions:["m4a","mp4a"]},"audio/mp4a-latm":{source:"iana"},"audio/mpa":{source:"iana"},"audio/mpa-robust":{source:"iana"},"audio/mpeg":{source:"iana",compressible:!1,extensions:["mpga","mp2","mp2a","mp3","m2a","m3a"]},"audio/mpeg4-generic":{source:"iana"},"audio/musepack":{source:"apache"},"audio/ogg":{source:"iana",compressible:!1,extensions:["oga","ogg","spx"]},"audio/opus":{source:"iana"},"audio/parityfec":{source:"iana"},"audio/pcma":{source:"iana"},"audio/pcma-wb":{source:"iana"},"audio/pcmu":{source:"iana"},"audio/pcmu-wb":{source:"iana"},"audio/prs.sid":{source:"iana"},"audio/qcelp":{source:"iana"},"audio/raptorfec":{source:"iana"},"audio/red":{source:"iana"},"audio/rtp-enc-aescm128":{source:"iana"},"audio/rtp-midi":{source:"iana"},"audio/rtploopback":{source:"iana"},"audio/rtx":{source:"iana"},"audio/s3m":{source:"apache",extensions:["s3m"]},"audio/silk":{source:"apache",extensions:["sil"]},"audio/smv":{source:"iana"},"audio/smv-qcp":{source:"iana"},"audio/smv0":{source:"iana"},"audio/sp-midi":{source:"iana"},"audio/speex":{source:"iana"},"audio/t140c":{source:"iana"},"audio/t38":{source:"iana"},"audio/telephone-event":{source:"iana"},"audio/tone":{source:"iana"},"audio/uemclip":{source:"iana"},"audio/ulpfec":{source:"iana"},"audio/vdvi":{source:"iana"},"audio/vmr-wb":{source:"iana"},"audio/vnd.3gpp.iufp":{source:"iana"},"audio/vnd.4sb":{source:"iana"},"audio/vnd.audiokoz":{source:"iana"},"audio/vnd.celp":{source:"iana"},"audio/vnd.cisco.nse":{source:"iana"},"audio/vnd.cmles.radio-events":{source:"iana"},"audio/vnd.cns.anp1":{source:"iana"},"audio/vnd.cns.inf1":{source:"iana"},"audio/vnd.dece.audio":{source:"iana",extensions:["uva","uvva"]},"audio/vnd.digital-winds":{source:"iana",extensions:["eol"]},"audio/vnd.dlna.adts":{source:"iana"},"audio/vnd.dolby.heaac.1":{source:"iana"},"audio/vnd.dolby.heaac.2":{source:"iana"},"audio/vnd.dolby.mlp":{source:"iana"},"audio/vnd.dolby.mps":{source:"iana"},"audio/vnd.dolby.pl2":{source:"iana"},"audio/vnd.dolby.pl2x":{source:"iana"},"audio/vnd.dolby.pl2z":{source:"iana"},"audio/vnd.dolby.pulse.1":{source:"iana"},"audio/vnd.dra":{source:"iana",extensions:["dra"]},"audio/vnd.dts":{source:"iana",extensions:["dts"]},"audio/vnd.dts.hd":{source:"iana",extensions:["dtshd"]},"audio/vnd.dvb.file":{source:"iana"},"audio/vnd.everad.plj":{source:"iana"},"audio/vnd.hns.audio":{source:"iana"},"audio/vnd.lucent.voice":{source:"iana",extensions:["lvp"]},"audio/vnd.ms-playready.media.pya":{source:"iana",extensions:["pya"]},"audio/vnd.nokia.mobile-xmf":{source:"iana"},"audio/vnd.nortel.vbk":{source:"iana"},"audio/vnd.nuera.ecelp4800":{source:"iana",extensions:["ecelp4800"]},"audio/vnd.nuera.ecelp7470":{source:"iana",extensions:["ecelp7470"]},"audio/vnd.nuera.ecelp9600":{source:"iana",extensions:["ecelp9600"]},"audio/vnd.octel.sbc":{source:"iana"},"audio/vnd.presonus.multitrack":{source:"iana"},"audio/vnd.qcelp":{source:"iana"},"audio/vnd.rhetorex.32kadpcm":{source:"iana"},"audio/vnd.rip":{source:"iana",extensions:["rip"]},"audio/vnd.rn-realaudio":{compressible:!1},"audio/vnd.sealedmedia.softseal.mpeg":{source:"iana"},"audio/vnd.vmx.cvsd":{source:"iana"},"audio/vnd.wave":{compressible:!1},"audio/vorbis":{source:"iana",compressible:!1},"audio/vorbis-config":{source:"iana"},"audio/wav":{compressible:!1,extensions:["wav"]},"audio/wave":{compressible:!1,extensions:["wav"]},"audio/webm":{source:"apache",compressible:!1,extensions:["weba"]},"audio/x-aac":{source:"apache",compressible:!1,extensions:["aac"]},"audio/x-aiff":{source:"apache",extensions:["aif","aiff","aifc"]},"audio/x-caf":{source:"apache",compressible:!1,extensions:["caf"]},"audio/x-flac":{source:"apache",extensions:["flac"]},"audio/x-m4a":{source:"nginx",extensions:["m4a"]},"audio/x-matroska":{source:"apache",extensions:["mka"]},"audio/x-mpegurl":{source:"apache",extensions:["m3u"]},"audio/x-ms-wax":{source:"apache",extensions:["wax"]},"audio/x-ms-wma":{source:"apache",extensions:["wma"]},"audio/x-pn-realaudio":{source:"apache",extensions:["ram","ra"]},"audio/x-pn-realaudio-plugin":{source:"apache",extensions:["rmp"]},"audio/x-realaudio":{source:"nginx",extensions:["ra"]},"audio/x-tta":{source:"apache"},"audio/x-wav":{source:"apache",extensions:["wav"]},"audio/xm":{source:"apache",extensions:["xm"]},"chemical/x-cdx":{source:"apache",extensions:["cdx"]},"chemical/x-cif":{source:"apache",extensions:["cif"]},"chemical/x-cmdf":{source:"apache",extensions:["cmdf"]},"chemical/x-cml":{source:"apache",extensions:["cml"]},"chemical/x-csml":{source:"apache",extensions:["csml"]},"chemical/x-pdb":{source:"apache"},"chemical/x-xyz":{source:"apache",extensions:["xyz"]},"font/collection":{source:"iana",extensions:["ttc"]},"font/otf":{source:"iana",compressible:!0,extensions:["otf"]},"font/sfnt":{source:"iana"},"font/ttf":{source:"iana",extensions:["ttf"]},"font/woff":{source:"iana",extensions:["woff"]},"font/woff2":{source:"iana",extensions:["woff2"]},"image/aces":{source:"iana"},"image/apng":{compressible:!1,extensions:["apng"]},"image/bmp":{source:"iana",compressible:!0,extensions:["bmp"]},"image/cgm":{source:"iana",extensions:["cgm"]},"image/dicom-rle":{source:"iana"},"image/emf":{source:"iana"},"image/fits":{source:"iana"},"image/g3fax":{source:"iana",extensions:["g3"]},"image/gif":{source:"iana",compressible:!1,extensions:["gif"]},"image/ief":{source:"iana",extensions:["ief"]},"image/jls":{source:"iana"},"image/jp2":{source:"iana",compressible:!1,extensions:["jp2","jpg2"]},"image/jpeg":{source:"iana",compressible:!1,extensions:["jpeg","jpg","jpe"]},"image/jpm":{source:"iana",compressible:!1,extensions:["jpm"]},"image/jpx":{source:"iana",compressible:!1,extensions:["jpx","jpf"]},"image/ktx":{source:"iana",extensions:["ktx"]},"image/naplps":{source:"iana"},"image/pjpeg":{compressible:!1},"image/png":{source:"iana",compressible:!1,extensions:["png"]},"image/prs.btif":{source:"iana",extensions:["btif"]},"image/prs.pti":{source:"iana"},"image/pwg-raster":{source:"iana"},"image/sgi":{source:"apache",extensions:["sgi"]},"image/svg+xml":{source:"iana",compressible:!0,extensions:["svg","svgz"]},"image/t38":{source:"iana"},"image/tiff":{source:"iana",compressible:!1,extensions:["tiff","tif"]},"image/tiff-fx":{source:"iana"},"image/vnd.adobe.photoshop":{source:"iana",compressible:!0,extensions:["psd"]},"image/vnd.airzip.accelerator.azv":{source:"iana"},"image/vnd.cns.inf2":{source:"iana"},"image/vnd.dece.graphic":{source:"iana",extensions:["uvi","uvvi","uvg","uvvg"]},"image/vnd.djvu":{source:"iana",extensions:["djvu","djv"]},"image/vnd.dvb.subtitle":{source:"iana",extensions:["sub"]},"image/vnd.dwg":{source:"iana",extensions:["dwg"]},"image/vnd.dxf":{source:"iana",extensions:["dxf"]},"image/vnd.fastbidsheet":{source:"iana",extensions:["fbs"]},"image/vnd.fpx":{source:"iana",extensions:["fpx"]},"image/vnd.fst":{source:"iana",extensions:["fst"]},"image/vnd.fujixerox.edmics-mmr":{source:"iana",extensions:["mmr"]},"image/vnd.fujixerox.edmics-rlc":{source:"iana",extensions:["rlc"]},"image/vnd.globalgraphics.pgb":{source:"iana"},"image/vnd.microsoft.icon":{source:"iana"},"image/vnd.mix":{source:"iana"},"image/vnd.mozilla.apng":{source:"iana"},"image/vnd.ms-modi":{source:"iana",extensions:["mdi"]},"image/vnd.ms-photo":{source:"apache",extensions:["wdp"]},"image/vnd.net-fpx":{source:"iana",extensions:["npx"]},"image/vnd.radiance":{source:"iana"},"image/vnd.sealed.png":{source:"iana"},"image/vnd.sealedmedia.softseal.gif":{source:"iana"},"image/vnd.sealedmedia.softseal.jpg":{source:"iana"},"image/vnd.svf":{source:"iana"},"image/vnd.tencent.tap":{source:"iana"},"image/vnd.valve.source.texture":{source:"iana"},"image/vnd.wap.wbmp":{source:"iana",extensions:["wbmp"]},"image/vnd.xiff":{source:"iana",extensions:["xif"]},"image/vnd.zbrush.pcx":{source:"iana"},"image/webp":{source:"apache",extensions:["webp"]},"image/wmf":{source:"iana"},"image/x-3ds":{source:"apache",extensions:["3ds"]},"image/x-cmu-raster":{source:"apache",extensions:["ras"]},"image/x-cmx":{source:"apache",extensions:["cmx"]},"image/x-freehand":{source:"apache",extensions:["fh","fhc","fh4","fh5","fh7"]},"image/x-icon":{source:"apache",compressible:!0,extensions:["ico"]},"image/x-jng":{source:"nginx",extensions:["jng"]},"image/x-mrsid-image":{source:"apache",extensions:["sid"]},"image/x-ms-bmp":{source:"nginx",compressible:!0,extensions:["bmp"]},"image/x-pcx":{source:"apache",extensions:["pcx"]},"image/x-pict":{source:"apache",extensions:["pic","pct"]},"image/x-portable-anymap":{source:"apache",extensions:["pnm"]},"image/x-portable-bitmap":{source:"apache",extensions:["pbm"]},"image/x-portable-graymap":{source:"apache",extensions:["pgm"]},"image/x-portable-pixmap":{source:"apache",extensions:["ppm"]},"image/x-rgb":{source:"apache",extensions:["rgb"]},"image/x-tga":{source:"apache",extensions:["tga"]},"image/x-xbitmap":{source:"apache",extensions:["xbm"]},"image/x-xcf":{compressible:!1},"image/x-xpixmap":{source:"apache",extensions:["xpm"]},"image/x-xwindowdump":{source:"apache",extensions:["xwd"]},"message/cpim":{source:"iana"},"message/delivery-status":{source:"iana"},"message/disposition-notification":{source:"iana",extensions:["disposition-notification"]},"message/external-body":{source:"iana"},"message/feedback-report":{source:"iana"},"message/global":{source:"iana",extensions:["u8msg"]},"message/global-delivery-status":{source:"iana",extensions:["u8dsn"]},"message/global-disposition-notification":{source:"iana",extensions:["u8mdn"]},"message/global-headers":{source:"iana",extensions:["u8hdr"]},"message/http":{source:"iana",compressible:!1},"message/imdn+xml":{source:"iana",compressible:!0},"message/news":{source:"iana"},"message/partial":{source:"iana",compressible:!1},"message/rfc822":{source:"iana",compressible:!0,extensions:["eml","mime"]},"message/s-http":{source:"iana"},"message/sip":{source:"iana"},"message/sipfrag":{source:"iana"},"message/tracking-status":{source:"iana"},"message/vnd.si.simp":{source:"iana"},"message/vnd.wfa.wsc":{source:"iana",extensions:["wsc"]},"model/3mf":{source:"iana"},"model/gltf+json":{source:"iana",compressible:!0,extensions:["gltf"]},"model/gltf-binary":{source:"iana",compressible:!0,extensions:["glb"]},"model/iges":{source:"iana",compressible:!1,extensions:["igs","iges"]},"model/mesh":{source:"iana",compressible:!1,extensions:["msh","mesh","silo"]},"model/vnd.collada+xml":{source:"iana",extensions:["dae"]},"model/vnd.dwf":{source:"iana",extensions:["dwf"]},"model/vnd.flatland.3dml":{source:"iana"},"model/vnd.gdl":{source:"iana",extensions:["gdl"]},"model/vnd.gs-gdl":{source:"apache"},"model/vnd.gs.gdl":{source:"iana"},"model/vnd.gtw":{source:"iana",extensions:["gtw"]},"model/vnd.moml+xml":{source:"iana"},"model/vnd.mts":{source:"iana",extensions:["mts"]},"model/vnd.opengex":{source:"iana"},"model/vnd.parasolid.transmit.binary":{source:"iana"},"model/vnd.parasolid.transmit.text":{source:"iana"},"model/vnd.rosette.annotated-data-model":{source:"iana"},"model/vnd.valve.source.compiled-map":{source:"iana"},"model/vnd.vtu":{source:"iana",extensions:["vtu"]},"model/vrml":{source:"iana",compressible:!1,extensions:["wrl","vrml"]},"model/x3d+binary":{source:"apache",compressible:!1,extensions:["x3db","x3dbz"]},"model/x3d+fastinfoset":{source:"iana"},"model/x3d+vrml":{source:"apache",compressible:!1,extensions:["x3dv","x3dvz"]},"model/x3d+xml":{source:"iana",compressible:!0,extensions:["x3d","x3dz"]},"model/x3d-vrml":{source:"iana"},"multipart/alternative":{source:"iana",compressible:!1},"multipart/appledouble":{source:"iana"},"multipart/byteranges":{source:"iana"},"multipart/digest":{source:"iana"},"multipart/encrypted":{source:"iana",compressible:!1},"multipart/form-data":{source:"iana",compressible:!1},"multipart/header-set":{source:"iana"},"multipart/mixed":{source:"iana",compressible:!1},"multipart/multilingual":{source:"iana"},"multipart/parallel":{source:"iana"},"multipart/related":{source:"iana",compressible:!1},"multipart/report":{source:"iana"},"multipart/signed":{source:"iana",compressible:!1},"multipart/vnd.bint.med-plus":{source:"iana"},"multipart/voice-message":{source:"iana"},"multipart/x-mixed-replace":{source:"iana"},"text/1d-interleaved-parityfec":{source:"iana"},"text/cache-manifest":{source:"iana",compressible:!0,extensions:["appcache","manifest"]},"text/calendar":{source:"iana",extensions:["ics","ifb"]},"text/calender":{compressible:!0},"text/cmd":{compressible:!0},"text/coffeescript":{extensions:["coffee","litcoffee"]},"text/css":{source:"iana",charset:"UTF-8",compressible:!0,extensions:["css"]},"text/csv":{source:"iana",compressible:!0,extensions:["csv"]},"text/csv-schema":{source:"iana"},"text/directory":{source:"iana"},"text/dns":{source:"iana"},"text/ecmascript":{source:"iana"},"text/encaprtp":{source:"iana"},"text/enriched":{source:"iana"},"text/fwdred":{source:"iana"},"text/grammar-ref-list":{source:"iana"},"text/html":{source:"iana",compressible:!0,extensions:["html","htm","shtml"]},"text/jade":{extensions:["jade"]},"text/javascript":{source:"iana",compressible:!0},"text/jcr-cnd":{source:"iana"},"text/jsx":{compressible:!0,extensions:["jsx"]},"text/less":{extensions:["less"]},"text/markdown":{source:"iana",compressible:!0,extensions:["markdown","md"]},"text/mathml":{source:"nginx",extensions:["mml"]},"text/mizar":{source:"iana"},"text/n3":{source:"iana",compressible:!0,extensions:["n3"]},"text/parameters":{source:"iana"},"text/parityfec":{source:"iana"},"text/plain":{source:"iana",compressible:!0,extensions:["txt","text","conf","def","list","log","in","ini"]},"text/provenance-notation":{source:"iana"},"text/prs.fallenstein.rst":{source:"iana"},"text/prs.lines.tag":{source:"iana",extensions:["dsc"]},"text/prs.prop.logic":{source:"iana"},"text/raptorfec":{source:"iana"},"text/red":{source:"iana"},"text/rfc822-headers":{source:"iana"},"text/richtext":{source:"iana",compressible:!0,extensions:["rtx"]},"text/rtf":{source:"iana",compressible:!0,extensions:["rtf"]},"text/rtp-enc-aescm128":{source:"iana"},"text/rtploopback":{source:"iana"},"text/rtx":{source:"iana"},"text/sgml":{source:"iana",extensions:["sgml","sgm"]},"text/shex":{extensions:["shex"]},"text/slim":{extensions:["slim","slm"]},"text/strings":{source:"iana"},"text/stylus":{extensions:["stylus","styl"]},"text/t140":{source:"iana"},"text/tab-separated-values":{source:"iana",compressible:!0,extensions:["tsv"]},"text/troff":{source:"iana",extensions:["t","tr","roff","man","me","ms"]},"text/turtle":{source:"iana",extensions:["ttl"]},"text/ulpfec":{source:"iana"},"text/uri-list":{source:"iana",compressible:!0,extensions:["uri","uris","urls"]},"text/vcard":{source:"iana",compressible:!0,extensions:["vcard"]},"text/vnd.a":{source:"iana"},"text/vnd.abc":{source:"iana"},"text/vnd.ascii-art":{source:"iana"},"text/vnd.curl":{source:"iana",extensions:["curl"]},"text/vnd.curl.dcurl":{source:"apache",extensions:["dcurl"]},"text/vnd.curl.mcurl":{source:"apache",extensions:["mcurl"]},"text/vnd.curl.scurl":{source:"apache",extensions:["scurl"]},"text/vnd.debian.copyright":{source:"iana"},"text/vnd.dmclientscript":{source:"iana"},"text/vnd.dvb.subtitle":{source:"iana",extensions:["sub"]},"text/vnd.esmertec.theme-descriptor":{source:"iana"},"text/vnd.fly":{source:"iana",extensions:["fly"]},"text/vnd.fmi.flexstor":{source:"iana",extensions:["flx"]},"text/vnd.graphviz":{source:"iana",extensions:["gv"]},"text/vnd.in3d.3dml":{source:"iana",extensions:["3dml"]},"text/vnd.in3d.spot":{source:"iana",extensions:["spot"]},"text/vnd.iptc.newsml":{source:"iana"},"text/vnd.iptc.nitf":{source:"iana"},"text/vnd.latex-z":{source:"iana"},"text/vnd.motorola.reflex":{source:"iana"},"text/vnd.ms-mediapackage":{source:"iana"},"text/vnd.net2phone.commcenter.command":{source:"iana"},"text/vnd.radisys.msml-basic-layout":{source:"iana"},"text/vnd.si.uricatalogue":{source:"iana"},"text/vnd.sun.j2me.app-descriptor":{source:"iana",extensions:["jad"]},"text/vnd.trolltech.linguist":{source:"iana"},"text/vnd.wap.si":{source:"iana"},"text/vnd.wap.sl":{source:"iana"},"text/vnd.wap.wml":{source:"iana",extensions:["wml"]},"text/vnd.wap.wmlscript":{source:"iana",extensions:["wmls"]},"text/vtt":{charset:"UTF-8",compressible:!0,extensions:["vtt"]},"text/x-asm":{source:"apache",extensions:["s","asm"]},"text/x-c":{source:"apache",extensions:["c","cc","cxx","cpp","h","hh","dic"]},"text/x-component":{source:"nginx",extensions:["htc"]},"text/x-fortran":{source:"apache",extensions:["f","for","f77","f90"]},"text/x-gwt-rpc":{compressible:!0},"text/x-handlebars-template":{extensions:["hbs"]},"text/x-java-source":{source:"apache",extensions:["java"]},"text/x-jquery-tmpl":{compressible:!0},"text/x-lua":{extensions:["lua"]},"text/x-markdown":{compressible:!0,extensions:["mkd"]},"text/x-nfo":{source:"apache",extensions:["nfo"]},"text/x-opml":{source:"apache",extensions:["opml"]},"text/x-org":{compressible:!0,extensions:["org"]},"text/x-pascal":{source:"apache",extensions:["p","pas"]},"text/x-processing":{compressible:!0,extensions:["pde"]},"text/x-sass":{extensions:["sass"]},"text/x-scss":{extensions:["scss"]},"text/x-setext":{source:"apache",extensions:["etx"]},"text/x-sfv":{source:"apache",extensions:["sfv"]},"text/x-suse-ymp":{compressible:!0,extensions:["ymp"]},"text/x-uuencode":{source:"apache",extensions:["uu"]},"text/x-vcalendar":{source:"apache",extensions:["vcs"]},"text/x-vcard":{source:"apache",extensions:["vcf"]},"text/xml":{source:"iana",compressible:!0,extensions:["xml"]},"text/xml-external-parsed-entity":{source:"iana"},"text/yaml":{extensions:["yaml","yml"]},"video/1d-interleaved-parityfec":{source:"iana"},"video/3gpp":{source:"iana",extensions:["3gp","3gpp"]},"video/3gpp-tt":{source:"iana"},"video/3gpp2":{source:"iana",extensions:["3g2"]},"video/bmpeg":{source:"iana"},"video/bt656":{source:"iana"},"video/celb":{source:"iana"},"video/dv":{source:"iana"},"video/encaprtp":{source:"iana"},"video/h261":{source:"iana",extensions:["h261"]},"video/h263":{source:"iana",extensions:["h263"]},"video/h263-1998":{source:"iana"},"video/h263-2000":{source:"iana"},"video/h264":{source:"iana",extensions:["h264"]},"video/h264-rcdo":{source:"iana"},"video/h264-svc":{source:"iana"},"video/h265":{source:"iana"},"video/iso.segment":{source:"iana"},"video/jpeg":{source:"iana",extensions:["jpgv"]},"video/jpeg2000":{source:"iana"},"video/jpm":{source:"apache",extensions:["jpm","jpgm"]},"video/mj2":{source:"iana",extensions:["mj2","mjp2"]},"video/mp1s":{source:"iana"},"video/mp2p":{source:"iana"},"video/mp2t":{source:"iana",extensions:["ts"]},"video/mp4":{source:"iana",compressible:!1,extensions:["mp4","mp4v","mpg4"]},"video/mp4v-es":{source:"iana"},"video/mpeg":{source:"iana",compressible:!1,extensions:["mpeg","mpg","mpe","m1v","m2v"]},"video/mpeg4-generic":{source:"iana"},"video/mpv":{source:"iana"},"video/nv":{source:"iana"},"video/ogg":{source:"iana",compressible:!1,extensions:["ogv"]},"video/parityfec":{source:"iana"},"video/pointer":{source:"iana"},"video/quicktime":{source:"iana",compressible:!1,extensions:["qt","mov"]},"video/raptorfec":{source:"iana"},"video/raw":{source:"iana"},"video/rtp-enc-aescm128":{source:"iana"},"video/rtploopback":{source:"iana"},"video/rtx":{source:"iana"},"video/smpte291":{source:"iana"},"video/smpte292m":{source:"iana"},"video/ulpfec":{source:"iana"},"video/vc1":{source:"iana"},"video/vnd.cctv":{source:"iana"},"video/vnd.dece.hd":{source:"iana",extensions:["uvh","uvvh"]},"video/vnd.dece.mobile":{source:"iana",extensions:["uvm","uvvm"]},"video/vnd.dece.mp4":{source:"iana"},"video/vnd.dece.pd":{source:"iana",extensions:["uvp","uvvp"]},"video/vnd.dece.sd":{source:"iana",extensions:["uvs","uvvs"]},"video/vnd.dece.video":{source:"iana",extensions:["uvv","uvvv"]},"video/vnd.directv.mpeg":{source:"iana"},"video/vnd.directv.mpeg-tts":{source:"iana"},"video/vnd.dlna.mpeg-tts":{source:"iana"},"video/vnd.dvb.file":{source:"iana",extensions:["dvb"]},"video/vnd.fvt":{source:"iana",extensions:["fvt"]},"video/vnd.hns.video":{source:"iana"},"video/vnd.iptvforum.1dparityfec-1010":{source:"iana"},"video/vnd.iptvforum.1dparityfec-2005":{source:"iana"},"video/vnd.iptvforum.2dparityfec-1010":{source:"iana"},"video/vnd.iptvforum.2dparityfec-2005":{source:"iana"},"video/vnd.iptvforum.ttsavc":{source:"iana"},"video/vnd.iptvforum.ttsmpeg2":{source:"iana"},"video/vnd.motorola.video":{source:"iana"},"video/vnd.motorola.videop":{source:"iana"},"video/vnd.mpegurl":{source:"iana",extensions:["mxu","m4u"]},"video/vnd.ms-playready.media.pyv":{source:"iana",extensions:["pyv"]},"video/vnd.nokia.interleaved-multimedia":{source:"iana"},"video/vnd.nokia.mp4vr":{source:"iana"},"video/vnd.nokia.videovoip":{source:"iana"},"video/vnd.objectvideo":{source:"iana"},"video/vnd.radgamettools.bink":{source:"iana"},"video/vnd.radgamettools.smacker":{source:"iana"},"video/vnd.sealed.mpeg1":{source:"iana"},"video/vnd.sealed.mpeg4":{source:"iana"},"video/vnd.sealed.swf":{source:"iana"},"video/vnd.sealedmedia.softseal.mov":{source:"iana"},"video/vnd.uvvu.mp4":{source:"iana",extensions:["uvu","uvvu"]},"video/vnd.vivo":{source:"iana",extensions:["viv"]},"video/vp8":{source:"iana"},"video/webm":{source:"apache",compressible:!1,extensions:["webm"]},"video/x-f4v":{source:"apache",extensions:["f4v"]},"video/x-fli":{source:"apache",extensions:["fli"]},"video/x-flv":{source:"apache",compressible:!1,extensions:["flv"]},"video/x-m4v":{source:"apache",extensions:["m4v"]},"video/x-matroska":{source:"apache",compressible:!1,extensions:["mkv","mk3d","mks"]},"video/x-mng":{source:"apache",extensions:["mng"]},"video/x-ms-asf":{source:"apache",extensions:["asf","asx"]},"video/x-ms-vob":{source:"apache",extensions:["vob"]},"video/x-ms-wm":{source:"apache",extensions:["wm"]},"video/x-ms-wmv":{source:"apache",compressible:!1,extensions:["wmv"]},"video/x-ms-wmx":{source:"apache",extensions:["wmx"]},"video/x-ms-wvx":{source:"apache",extensions:["wvx"]},"video/x-msvideo":{source:"apache",extensions:["avi"]},"video/x-sgi-movie":{source:"apache",extensions:["movie"]},"video/x-smv":{source:"apache",extensions:["smv"]},"x-conference/x-cooltalk":{source:"apache",extensions:["ice"]},"x-shader/x-fragment":{compressible:!0},"x-shader/x-vertex":{compressible:!0}}},function(e,n,t){
/*!
     * mime-db
     * Copyright(c) 2014 Jonathan Ong
     * MIT Licensed
     */
e.exports=t(10)},function(e,n,t){
/*!
     * mime-types
     * Copyright(c) 2014 Jonathan Ong
     * Copyright(c) 2015 Douglas Christopher Wilson
     * MIT Licensed
     */
var a,i,o,r=t(11),s=t(9).extname,c=/^\s*([^;\s]*)(?:;|\s|$)/,u=/^text\//i;function p(e){if(!e||"string"!=typeof e)return!1;var n=c.exec(e),t=n&&r[n[1].toLowerCase()];return t&&t.charset?t.charset:!(!n||!u.test(n[1]))&&"UTF-8"}n.charset=p,n.charsets={lookup:p},n.contentType=function(e){if(!e||"string"!=typeof e)return!1;var t=-1===e.indexOf("/")?n.lookup(e):e;if(!t)return!1;if(-1===t.indexOf("charset")){var a=n.charset(t);a&&(t+="; charset="+a.toLowerCase())}return t},n.extension=function(e){if(!e||"string"!=typeof e)return!1;var t=c.exec(e),a=t&&n.extensions[t[1].toLowerCase()];return!(!a||!a.length)&&a[0]},n.extensions=Object.create(null),n.lookup=function(e){if(!e||"string"!=typeof e)return!1;var t=s("x."+e).toLowerCase().substr(1);return t&&n.types[t]||!1},n.types=Object.create(null),a=n.extensions,i=n.types,o=["nginx","apache",void 0,"iana"],Object.keys(r).forEach(function(e){var n=r[e],t=n.extensions;if(t&&t.length){a[e]=t;for(var s=0;s<t.length;s++){var c=t[s];if(i[c]){var u=o.indexOf(r[i[c]].source),p=o.indexOf(n.source);if("application/octet-stream"!==i[c]&&(u>p||u===p&&"application/"===i[c].substr(0,12)))continue}i[c]=e}}})},function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),i=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.token=n||""}return a(e,[{key:"toAuthHeader",value:function(){return"Bearer "+this.token}},{key:"toBasicAuth",value:function(){return"user:"+this.token+"@"}}]),e}();n.default=i},function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.normalizeApp=n.APPS_DOCTYPE=void 0;var a,i,o=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s=(a=["/apps/"],i=["/apps/"],Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(i)}}))),c=t(1),u=t(0);function p(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){return function a(i,o){try{var r=n[i](o),s=r.value}catch(e){return void t(e)}if(!r.done)return Promise.resolve(s).then(function(e){a("next",e)},function(e){a("throw",e)});e(s)}("next")})}}var l=n.APPS_DOCTYPE="io.cozy.apps",d=n.normalizeApp=function(e){return r({},e,(0,c.normalizeDoc)(e,l),e.attributes)},f=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.client=n}return o(e,[{key:"all",value:function(){var e=p(regeneratorRuntime.mark(function e(){var n,t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,u.uri)(s),e.next=3,this.client.fetchJSON("GET",n);case 3:return t=e.sent,e.abrupt("return",{data:t.data.map(function(e){return d(e)}),meta:{count:t.meta.count},skip:0,next:!1});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"find",value:function(){var e=p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:throw new Error("find() method is not yet implemented");case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"get",value:function(){var e=p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:throw new Error("get() method is not yet implemented");case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"create",value:function(){var e=p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:throw new Error("create() method is not available for applications");case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:throw new Error("update() method is not available for applications");case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"destroy",value:function(){var e=p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:throw new Error("destroy() method is not available for applications");case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}();n.default=f},function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var a=t(3);Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o(a).default}});var i=t(5);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"OAuthClient",{enumerable:!0,get:function(){return o(i).default}})}])},"object"==r(n)&&"object"==r(e)?e.exports=o():(a=[],void 0===(i="function"==typeof(t=o)?t.apply(n,a):t)||(e.exports=i))}).call(this,t(28)(e))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,i=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),o=t(29),r=(a=o)&&a.__esModule?a:{default:a};var s=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r.default),i(n,[{key:"getRelationship",value:function(){var e=this;return{data:this.getProperty().map(function(n){return{_id:n,_type:e.doctype}}),next:!1,meta:{count:this.getProperty().length}}}},{key:"addById",value:function(e){if(-1===this.getProperty().indexOf(e))return this.setProperty([].concat(function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}(this.getProperty()),[e]))}},{key:"removeById",value:function(e){return this.setProperty(this.getProperty().filter(function(n){return n!==e}))}},{key:"getProperty",value:function(){return Array.isArray(this.target[this.name])?this.target[this.name]:[]}},{key:"setProperty",value:function(e){return this.target[this.name]=e,this.save(this.target)}}]),n}();n.default=s},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,i=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),o=t(29),r=(a=o)&&a.__esModule?a:{default:a},s=t(8);function c(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}var u=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r.default),i(n,[{key:"fetchMore",value:function(){var e=this,n=this.getRelationship().data.length,t=new s.QueryDefinition({doctype:"io.cozy.files"});return this.query(t.referencedBy(this.target).offset(n),{update:function(n,t){t.included.forEach(function(e){return n.writeDocument(e)}),e.updateTargetRelationship(n,function(e){return{data:[].concat(c(e.data),c(t.data)),next:t.next}})}})}},{key:"add",value:function(){var e,n=(e=regeneratorRuntime.mark(function e(n){var t,a,i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getRelationship().data.map(function(e){return e._id}),a=n.filter(function(e){var n=e._id;return-1===t.indexOf(n)}),e.next=4,this.mutate(this.insertDocuments(a),{update:function(e){a.forEach(function(n){return e.writeDocument(n)}),i.updateTargetRelationship(e,function(e){return{data:[].concat(c(e.data),c(a.map(function(e){return{_id:e._id,_type:e._type}}))),meta:{count:e.meta.count+a.length}}})}});case 4:return e.abrupt("return",a);case 5:case"end":return e.stop()}},e,this)}),function(){var n=e.apply(this,arguments);return new Promise(function(e,t){return function a(i,o){try{var r=n[i](o),s=r.value}catch(e){return void t(e)}if(!r.done)return Promise.resolve(s).then(function(e){a("next",e)},function(e){a("throw",e)});e(s)}("next")})});return function(e){return n.apply(this,arguments)}}()},{key:"remove",value:function(e){var n=this;return this.mutate(this.removeDocuments(e),{update:function(t){var a=e.map(function(e){return e._id});n.updateTargetRelationship(t,function(n){return{data:n.data.filter(function(e){var n=e._id;return-1===a.indexOf(n)}),meta:{count:n.meta.count-e.length}}})}})}},{key:"insertDocuments",value:function(e){return s.Mutations.addReferencesTo(this.target,e)}},{key:"removeDocuments",value:function(e){return s.Mutations.removeReferencesTo(this.target,e)}}]),n}();n.default=u},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=r(t(29)),i=r(t(177)),o=r(t(176));function r(e){return e&&e.__esModule?e:{default:e}}var s=function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)};s.create=function(e,n,t){var r=n.name,s=n.type,c=n.doctype,u={get:t.get,query:t.query,mutate:t.mutate,save:t.save};switch(s){case"has-many":return"io.cozy.files"===c?new i.default(e,r,c,u):new a.default(e,r,c,u);case"has-many-UNSAFE":return new o.default(e,r,c,u);default:throw new Error("Can't handle "+s+" associations")}},n.default=s},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(178);Object.defineProperty(n,"default",{enumerable:!0,get:function(){return(e=a,e&&e.__esModule?e:{default:e}).default;var e}})},function(e,n){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},function(e,n,t){var a=t(7),i=Object.prototype,o=i.hasOwnProperty,r=i.toString,s=a?a.toStringTag:void 0;e.exports=function(e){var n=o.call(e,s),t=e[s];try{e[s]=void 0;var a=!0}catch(e){}var i=r.call(e);return a&&(n?e[s]=t:delete e[s]),i}},function(e,n,t){var a=t(6),i=t(1),o=t(5),r="[object String]";e.exports=function(e){return"string"==typeof e||!i(e)&&o(e)&&a(e)==r}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),o=v(t(58)),r=v(t(179)),s=t(8),c=t(175),u=v(c),p=t(174),l=t(15),d=v(l),f=t(30),m=v(t(90));function v(e){return e&&e.__esModule?e:{default:e}}function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function y(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){return function a(i,o){try{var r=n[i](o),s=r.value}catch(e){return void t(e)}if(!r.done)return Promise.resolve(s).then(function(e){a("next",e)},function(e){a("throw",e)});e(s)}("next")})}}function b(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}var g=function(){function e(n){var t=n.link,a=n.schema,i=void 0===a?{}:a,r=b(n,["link","schema"]);!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=r,this.idCounter=1,this.link=t||new o.default({client:this.getOrCreateStackClient()}),Array.isArray(this.link)&&(this.link=(0,f.chain)(this.link)),this.schema=i}return i(e,[{key:"collection",value:function(e){return this.getOrCreateStackClient().collection(e)}},{key:"fetch",value:function(e,n,t){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.getOrCreateStackClient().fetch(e,n,t,a)}},{key:"all",value:function(e){return new s.QueryDefinition({doctype:e})}},{key:"find",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return new s.QueryDefinition({doctype:e,selector:n})}},{key:"get",value:function(e,n){return new s.QueryDefinition({doctype:e,id:n})}},{key:"create",value:function(){var e=y(regeneratorRuntime.mark(function e(n,t,i){t._type;var o,r=b(t,["_type"]),s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=a({_type:n},r),e.next=3,this.validate(o);case 3:if(!0===e.sent){e.next=6;break}throw new Error("Validation failed");case 6:return e.abrupt("return",this.mutate(this.getDocumentSavePlan(o,i),s));case 7:case"end":return e.stop()}},e,this)}));return function(n,t,a){return e.apply(this,arguments)}}()},{key:"save",value:function(){var e=y(regeneratorRuntime.mark(function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.validate(n);case 2:if(!0===e.sent){e.next=5;break}throw new Error("Validation failed");case 5:return e.abrupt("return",this.mutate(this.getDocumentSavePlan(n),t));case 6:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"validate",value:function(){var e=y(regeneratorRuntime.mark(function e(n){var t,a,i,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t={},this.doctypeModelExists(n._type)){e.next=3;break}return e.abrupt("return",!0);case 3:if((a=this.getDoctypeModel(n._type)).attributes){e.next=6;break}return e.abrupt("return",!0);case 6:e.t0=regeneratorRuntime.keys(a.attributes);case 7:if((e.t1=e.t0()).done){e.next=15;break}return i=e.t1.value,e.next=11,this.validateAttribute(n,i,a.attributes[i]);case 11:!0!==(o=e.sent)&&(t[i]=o),e.next=7;break;case 15:if(0!==Object.keys(t).length){e.next=17;break}return e.abrupt("return",!0);case 17:return e.abrupt("return",t);case 18:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"validateAttribute",value:function(){var e=y(regeneratorRuntime.mark(function e(n,t,a){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.unique){e.next=6;break}return e.next=3,this.collection(n._type).checkUniquenessOf(t,n[t]);case 3:if(!0===e.sent){e.next=6;break}return e.abrupt("return","must be unique");case 6:return e.abrupt("return",!0);case 7:case"end":return e.stop()}},e,this)}));return function(n,t,a){return e.apply(this,arguments)}}()},{key:"getDocumentSavePlan",value:function(e,n){var t=this,a=!e._id,i=a?s.Mutations.createDocument(e):s.Mutations.updateDocument(e);if(!n)return i;if(n&&!a)throw new Error("Unable to save relationships on a not-new document");return[i,function(e){var a=t.hydrateDocument(e.data);return Object.keys(n).map(function(e){var t=n[e];return Array.isArray(t)?a[e].insertDocuments(t):a[e].setDocument(t)})}]}},{key:"triggerHook",value:function(n,t){if(e.hooks){var a=(e.hooks[t._type]||{})[n]||[],i=!0,o=!1,r=void 0;try{for(var s,c=a[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){(0,s.value)(this,t)}}catch(e){o=!0,r=e}finally{try{!i&&c.return&&c.return()}finally{if(o)throw r}}}}},{key:"destroy",value:function(){var e=y(regeneratorRuntime.mark(function e(n){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.triggerHook("before:destroy",n);case 2:return e.next=4,this.mutate(s.Mutations.deleteDocument(n),a);case 4:return t=e.sent,e.next=7,this.triggerHook("after:destroy",n);case 7:return e.abrupt("return",t);case 8:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"upload",value:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.mutate(s.Mutations.uploadFile(e,n),t)}},{key:"query",value:function(){var e=y(regeneratorRuntime.mark(function e(n){var t,a,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=i.update,r=i.contextQueryId,s=b(i,["update","contextQueryId"]);return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.getOrCreateStore(),t=s.as||this.generateId(),"loaded"===(0,l.getQueryFromStore)(this.store.getState(),t).fetchStatus&&n.skip||this.dispatch((0,l.initQuery)(t,n)),e.prev=4,e.next=7,this.requestQuery(n);case 7:return a=e.sent,this.dispatch((0,l.receiveQueryResult)(t,a,{update:o,contextQueryId:r})),e.abrupt("return",a);case 12:throw e.prev=12,e.t0=e.catch(4),this.dispatch((0,l.receiveQueryError)(t,e.t0)),e.t0;case 16:case"end":return e.stop()}},e,this,[[4,12]])}));return function(n){return e.apply(this,arguments)}}()},{key:"watchQuery",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.as||this.generateId();return this.query(e,a({},n,{as:t})),new m.default(t,e,this)}},{key:"mutate",value:function(){var e=y(regeneratorRuntime.mark(function e(n){var t,a,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=i.update,r=i.updateQueries,s=i.contextQueryId,c=b(i,["update","updateQueries","contextQueryId"]);return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.getOrCreateStore(),t=c.as||this.generateId(),this.dispatch((0,l.initMutation)(t,n)),e.prev=3,e.next=6,this.requestMutation(n);case 6:return a=e.sent,this.dispatch((0,l.receiveMutationResult)(t,a,{update:o,updateQueries:r,contextQueryId:s})),e.abrupt("return",a);case 11:throw e.prev=11,e.t0=e.catch(3),this.dispatch((0,l.receiveMutationError)(t,e.t0)),e.t0;case 15:case"end":return e.stop()}},e,this,[[3,11]])}));return function(n){return e.apply(this,arguments)}}()},{key:"requestQuery",value:function(){var e=y(regeneratorRuntime.mark(function e(n){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.link.request(n);case 2:if(t=e.sent,n.includes){e.next=5;break}return e.abrupt("return",t);case 5:return e.abrupt("return",this.fetchIncludes(t,this.getIncludesAssociations(n)));case 6:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"fetchIncludes",value:function(){var e=y(regeneratorRuntime.mark(function e(n,t){var i,o,r,s,c,u=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((i=!Array.isArray(n.data))||0!==n.data.length){e.next=3;break}return e.abrupt("return",n);case 3:return o=i?[n.data]:n.data,e.next=6,Promise.all(o.map(function(e){return u.fetchDocumentAssociations(e,t)}));case 6:return r=e.sent,s=r.map(function(e){return e.data}),c=r.map(function(e){return e.included}).reduce(function(e,n){return[].concat(h(e),h(n))},[]),e.abrupt("return",a({},n,{data:i?s[0]:s,included:c}));case 10:case"end":return e.stop()}},e,this)}));return function(n,t){return e.apply(this,arguments)}}()},{key:"fetchDocumentAssociations",value:function(){var e=y(regeneratorRuntime.mark(function e(n,t){var i,o,r,s,c=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.map(function(e){return c.fetchDocumentAssociation(n,e)}),e.next=3,Promise.all(i.map(function(e){return c.link.request(e)}));case 3:return o=e.sent,r=t.map(function(e,n){return x({},e.name,{data:o[n].data.map(function(e){return{_id:e._id,_type:e._type}}),meta:o[n].meta,next:o[n].next,skip:o[n].skip})}).reduce(function(e,n){return a({},e,n)},{}),s=o.map(function(e){return e.included}).reduce(function(e,n){return[].concat(h(e),h(n))},[]),e.abrupt("return",{data:a({},n,{relationships:r}),included:s});case 7:case"end":return e.stop()}},e,this)}));return function(n,t){return e.apply(this,arguments)}}()},{key:"fetchDocumentAssociation",value:function(e,n){var t=n.type,a=n.doctype;switch(t){case"has-many":return this.find(a).referencedBy(e);default:throw new Error("Can't handle '"+t+"' associations")}}},{key:"requestMutation",value:function(){var e=y(regeneratorRuntime.mark(function e(n){var t,a,i,o,r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!Array.isArray(n)){e.next=8;break}return s=n,t=Array.isArray(s)?s:Array.from(s),a=t[0],i=t.slice(1),e.next=4,this.requestMutation(a);case 4:return o=e.sent,e.next=7,Promise.all(i.map(function(e){return"function"==typeof e?r.requestMutation(e(o)):r.requestMutation(e)}));case 7:return e.abrupt("return",o);case 8:return e.abrupt("return",this.link.request(n));case 9:case"end":return e.stop()}var s},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"getIncludesAssociations",value:function(e){var n=this;return e.includes?e.includes.map(function(t){return n.getModelAssociation(e.doctype,t)}):[]}},{key:"hydrateDocuments",value:function(e,n,t){var i=this;if(!1===this.options.autoHydrate)return n;try{var o=this.getDoctypeModel(e).associations;return n.map(function(e){return a({},e,i.hydrateRelationships(e,o,t))})}catch(e){return n}}},{key:"hydrateDocument",value:function(e){try{var n=this.getDoctypeModel(e._type);return a({},e,this.hydrateRelationships(e,n.associations))}catch(n){return e}}},{key:"hydrateRelationships",value:function(e,n,t){var i=this.getAssociationStoreAccessors(t);return n.reduce(function(n,t){return a({},n,x({},t.name,r.default.create(e,t,i)))},{})}},{key:"getAssociation",value:function(e,n,t){return r.default.create(e,this.getModelAssociation(e._type,n),this.getAssociationStoreAccessors(t))}},{key:"getAssociationStoreAccessors",value:function(e){var n=this;return{get:this.getDocumentFromStore.bind(this),save:function(t,i){return n.save.call(n,t,a({contextQueryId:e},i))},query:function(t,i){return n.query.call(n,t,e?a({contextQueryId:e},i):i)},mutate:function(t,i){return n.mutate.call(n,t,e?a({contextQueryId:e},i):i)}}}},{key:"getModelAssociation",value:function(e,n){var t=this.getDoctypeModel(e).associations.find(function(e){return e.name===n});if(!t)throw new Error("No association '"+n+"' found for '"+e+"' doctype");return t}},{key:"getDoctypeModel",value:function(e){var n=this;if(!this.schema)throw new Error("No schema defined");var t=Object.keys(this.schema).map(function(e){return n.schema[e]}).find(function(n){return n.doctype===e});if(!t)throw new Error("No schema found for '"+e+"' doctype");var i=t.relationships?Object.keys(t.relationships).map(function(e){var n=t.relationships[e];return{name:e,type:n.type,doctype:n.doctype}}):[];return a({},t,{associations:i})}},{key:"doctypeModelExists",value:function(e){var n=this;return!!this.schema&&void 0!==Object.keys(this.schema).map(function(e){return n.schema[e]}).find(function(n){return n.doctype===e})}},{key:"getDocumentFromStore",value:function(e,n){return(0,l.getDocumentFromStore)(this.store.getState(),e,n)}},{key:"register",value:function(e){return this.getOrCreateStackClient().setUri(e),this.startOAuthFlow(p.authenticateWithCordova)}},{key:"startOAuthFlow",value:function(){var e=y(regeneratorRuntime.mark(function e(n){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getOrCreateStackClient(),e.next=3,t.register();case 3:return e.abrupt("return",this.authorize(n));case 4:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"authorize",value:function(){var e=y(regeneratorRuntime.mark(function e(n){var t,a,i,o,r,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getOrCreateStackClient(),a=t.generateStateCode(),i=t.getAuthCodeURL(a),e.next=5,n(i);case 5:return o=e.sent,r=t.getAccessCodeFromURL(o,a),e.next=9,t.fetchAccessToken(r);case 9:return s=e.sent,t.setCredentials(s),e.abrupt("return",{token:s,infos:t.oauthOptions,client:t.oauthOptions});case 12:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"renewAuthorization",value:function(){return this.authorize(p.authenticateWithCordova)}},{key:"setStore",value:function(e){this.store=e}},{key:"getOrCreateStore",value:function(){return this.store||this.setStore((0,l.createStore)()),this.store}},{key:"getOrCreateStackClient",value:function(){return this.client||(this.options.client?this.client=this.options.client:this.client=this.options.oauth?new c.OAuthClient(this.options):new u.default(this.options)),this.client}},{key:"reducer",value:function(){return d.default}},{key:"dispatch",value:function(e){return this.store.dispatch(e)}},{key:"generateId",value:function(){var e=this.idCounter;return this.idCounter++,e}}],[{key:"registerHook",value:function(n,t,a){e.hooks=e.hooks||{};var i=e.hooks[n]=e.hooks[n]||{};i[t]=i[t]||[],i[t].push(a)}}]),e}();n.default=g},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(183);Object.defineProperty(n,"default",{enumerable:!0,get:function(){return f(a).default}});var i=t(89);Object.defineProperty(n,"CozyProvider",{enumerable:!0,get:function(){return f(i).default}});var o=t(30);Object.defineProperty(n,"CozyLink",{enumerable:!0,get:function(){return f(o).default}});var r=t(58);Object.defineProperty(n,"StackLink",{enumerable:!0,get:function(){return f(r).default}});var s=t(84);Object.defineProperty(n,"connect",{enumerable:!0,get:function(){return f(s).default}});var c=t(83);Object.defineProperty(n,"withMutation",{enumerable:!0,get:function(){return f(c).default}});var u=t(82);Object.defineProperty(n,"withMutations",{enumerable:!0,get:function(){return f(u).default}});var p=t(81);Object.defineProperty(n,"Query",{enumerable:!0,get:function(){return f(p).default}});var l=t(80);Object.defineProperty(n,"compose",{enumerable:!0,get:function(){return f(l).default}});var d=t(8);function f(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MutationTypes",{enumerable:!0,get:function(){return d.MutationTypes}}),Object.defineProperty(n,"getDoctypeFromOperation",{enumerable:!0,get:function(){return d.getDoctypeFromOperation}})},function(e,n,t){"use strict";(function(e){var t="object"==typeof e&&e&&e.Object===Object&&e;n.a=t}).call(this,t(31))}])});
//# sourceMappingURL=cozy-client.js.map

/***/ }),

/***/ "./node_modules/cozy-ui/assets/icons/ui/icon-cube.svg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__("./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__("./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "icon-cube",
  "use": "icon-cube-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol viewBox=\"0 0 16 16\" id=\"icon-cube\">\n    <defs>\n        <path d=\"M1,11.0086308 L1,5.50051502 C1,4.95127159 1.3905874,4.72776572 1.87240137,5.00308799 L7.12759863,8.00605786 C7.60359323,8.27805477 8,8.95047139 8,9.50051502 L8,15.0086308 C8,15.5578743 7.6094126,15.7813801 7.12759863,15.5060579 L1.87240137,12.503088 C1.39640677,12.2310911 1,11.5586745 1,11.0086308 Z M16,11.0086308 C16,11.5586745 15.6035932,12.2310911 15.1275986,12.503088 L9.87240137,15.5060579 C9.3905874,15.7813801 9,15.5578743 9,15.0086308 L9,9.50051502 C9,8.95047139 9.39640677,8.27805477 9.87240137,8.00605786 L15.1275986,5.00308799 C15.6094126,4.72776572 16,4.95127159 16,5.50051502 L16,11.0086308 Z M9.34976149,6.98164278 C8.88045118,7.27044912 8.11286116,7.26633364 7.65023851,6.98164278 L2.84976149,4.02750307 C2.38045118,3.73869673 2.38713884,3.29611355 2.87661892,3.03254735 L7.62338108,0.476598498 C8.10752434,0.215905973 8.88713884,0.213032303 9.37661892,0.476598498 L14.1233811,3.03254735 C14.6075243,3.29323988 14.6128612,3.74281221 14.1502385,4.02750307 L9.34976149,6.98164278 Z\" id=\"icon-cube_path-1\" />\n    </defs>\n    <g id=\"icon-cube_icons/16/icon-cube\" stroke=\"none\" stroke-width=\"1\" fill-rule=\"evenodd\">\n        <mask id=\"icon-cube_mask-2\">\n            <use xlink:href=\"#icon-cube_path-1\" />\n        </mask>\n        <use id=\"icon-cube_Mask\" xlink:href=\"#icon-cube_path-1\" />\n    </g>\n</symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./node_modules/cozy-ui/react/AppIcon/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppIcon = undefined;

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = __webpack_require__("./node_modules/cozy-ui/react/AppIcon/styles.styl");

var _styles2 = _interopRequireDefault(_styles);

var _Icon = __webpack_require__("./node_modules/cozy-ui/react/Icon/index.jsx");

var _Icon2 = _interopRequireDefault(_Icon);

var _iconCube = __webpack_require__("./node_modules/cozy-ui/assets/icons/ui/icon-cube.svg");

var _iconCube2 = _interopRequireDefault(_iconCube);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppIcon = exports.AppIcon = function (_Component) {
  _inherits(AppIcon, _Component);

  function AppIcon(props, context) {
    _classCallCheck(this, AppIcon);

    var _this = _possibleConstructorReturn(this, (AppIcon.__proto__ || Object.getPrototypeOf(AppIcon)).call(this, props, context));

    _this.state = {
      status: 'idle'
    };
    return _this;
  }

  _createClass(AppIcon, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.fetchIcon();

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'fetchIcon',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var _props, app, fetchIcon, icon;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _props = this.props, app = _props.app, fetchIcon = _props.fetchIcon;

                if (!(typeof fetchIcon !== 'function')) {
                  _context2.next = 3;
                  break;
                }

                throw new Error('fetchIcon prop is required');

              case 3:

                this.setState({ status: 'fetching' });

                _context2.prev = 4;
                _context2.next = 7;
                return fetchIcon(app.links.icon);

              case 7:
                icon = _context2.sent;

                this.setState({ icon: icon, status: 'done' });
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2['catch'](4);

                this.setState({ error: _context2.t0, status: 'failed' });

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 11]]);
      }));

      function fetchIcon() {
        return _ref2.apply(this, arguments);
      }

      return fetchIcon;
    }()
  }, {
    key: 'render',
    value: function render() {
      var alt = this.props.alt;
      var _state = this.state,
          icon = _state.icon,
          status = _state.status;

      switch (status) {
        case 'idle':
        case 'fetching':
          return _react2.default.createElement('div', {
            className: (0, _classnames2.default)(_styles2.default['c-loading-placeholder'], _styles2.default['c-app-icon'])
          });
        case 'done':
          return _react2.default.createElement('img', { className: _styles2.default['c-app-icon'], src: icon, alt: alt });
        case 'failed':
        default:
          return _react2.default.createElement(_Icon2.default, {
            className: (_styles2.default['c-app-icon'], _styles2.default['c-app-icon-default']),
            height: '100%',
            icon: _iconCube2.default,
            width: '100%'
          });
      }
    }
  }]);

  return AppIcon;
}(_react.Component);

AppIcon.propTypes = {
  fetchIcon: _propTypes2.default.func.isRequired
};

exports.default = AppIcon;

/***/ }),

/***/ "./node_modules/cozy-ui/react/AppIcon/styles.styl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"c-loading-placeholder":"c-loading-placeholder--2Rwk_","placeHolderShimmer":"placeHolderShimmer--1-EPe","c-app-icon":"c-app-icon--2oXuL","c-app-icon-default":"c-app-icon-default--2KHl2"};

/***/ }),

/***/ "./node_modules/cozy-ui/react/helpers/withBreakpoints.jsx":
false,

/***/ "./node_modules/lodash/_LazyWrapper.js":
false,

/***/ "./node_modules/lodash/_LodashWrapper.js":
false,

/***/ "./node_modules/lodash/_assignValue.js":
false,

/***/ "./node_modules/lodash/_baseAssignValue.js":
false,

/***/ "./node_modules/lodash/_baseCreate.js":
false,

/***/ "./node_modules/lodash/_baseLodash.js":
false,

/***/ "./node_modules/lodash/_basePick.js":
false,

/***/ "./node_modules/lodash/_basePickBy.js":
false,

/***/ "./node_modules/lodash/_baseSet.js":
false,

/***/ "./node_modules/lodash/_copyArray.js":
false,

/***/ "./node_modules/lodash/_createFlow.js":
false,

/***/ "./node_modules/lodash/_flatRest.js":
false,

/***/ "./node_modules/lodash/_getData.js":
false,

/***/ "./node_modules/lodash/_getFuncName.js":
false,

/***/ "./node_modules/lodash/_isLaziable.js":
false,

/***/ "./node_modules/lodash/_metaMap.js":
false,

/***/ "./node_modules/lodash/_realNames.js":
false,

/***/ "./node_modules/lodash/_wrapperClone.js":
false,

/***/ "./node_modules/lodash/debounce.js":
false,

/***/ "./node_modules/lodash/flatten.js":
false,

/***/ "./node_modules/lodash/flowRight.js":
false,

/***/ "./node_modules/lodash/mapValues.js":
false,

/***/ "./node_modules/lodash/noop.js":
false,

/***/ "./node_modules/lodash/now.js":
false,

/***/ "./node_modules/lodash/pick.js":
false,

/***/ "./node_modules/lodash/throttle.js":
false,

/***/ "./node_modules/lodash/toNumber.js":
false,

/***/ "./node_modules/lodash/wrapperLodash.js":
false,

/***/ "./node_modules/moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
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
webpackContext.id = "./node_modules/moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/moment/locale/af.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var af = moment.defineLocale('af', {
        months : 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
        monthsShort : 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
        weekdays : 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
        weekdaysShort : 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
        weekdaysMin : 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
        meridiemParse: /vm|nm/i,
        isPM : function (input) {
            return /^nm$/i.test(input);
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 12) {
                return isLower ? 'vm' : 'VM';
            } else {
                return isLower ? 'nm' : 'NM';
            }
        },
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Vandag om] LT',
            nextDay : '[Môre om] LT',
            nextWeek : 'dddd [om] LT',
            lastDay : '[Gister om] LT',
            lastWeek : '[Laas] dddd [om] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'oor %s',
            past : '%s gelede',
            s : '\'n paar sekondes',
            ss : '%d sekondes',
            m : '\'n minuut',
            mm : '%d minute',
            h : '\'n uur',
            hh : '%d ure',
            d : '\'n dag',
            dd : '%d dae',
            M : '\'n maand',
            MM : '%d maande',
            y : '\'n jaar',
            yy : '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal : function (number) {
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
        },
        week : {
            dow : 1, // Maandag is die eerste dag van die week.
            doy : 4  // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
        }
    });

    return af;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ar-dz.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var arDz = moment.defineLocale('ar-dz', {
        months : 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort : 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'أح_إث_ثلا_أر_خم_جم_سب'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'في %s',
            past : 'منذ %s',
            s : 'ثوان',
            ss : '%d ثانية',
            m : 'دقيقة',
            mm : '%d دقائق',
            h : 'ساعة',
            hh : '%d ساعات',
            d : 'يوم',
            dd : '%d أيام',
            M : 'شهر',
            MM : '%d أشهر',
            y : 'سنة',
            yy : '%d سنوات'
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 4  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return arDz;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ar-kw.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var arKw = moment.defineLocale('ar-kw', {
        months : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        monthsShort : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        weekdays : 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'في %s',
            past : 'منذ %s',
            s : 'ثوان',
            ss : '%d ثانية',
            m : 'دقيقة',
            mm : '%d دقائق',
            h : 'ساعة',
            hh : '%d ساعات',
            d : 'يوم',
            dd : '%d أيام',
            M : 'شهر',
            MM : '%d أشهر',
            y : 'سنة',
            yy : '%d سنوات'
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 12  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return arKw;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ar-ly.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '0': '0'
    }, pluralForm = function (n) {
        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
    }, plurals = {
        s : ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
        m : ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
        h : ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
        d : ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
        M : ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
        y : ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
    }, pluralize = function (u) {
        return function (number, withoutSuffix, string, isFuture) {
            var f = pluralForm(number),
                str = plurals[u][pluralForm(number)];
            if (f === 2) {
                str = str[withoutSuffix ? 0 : 1];
            }
            return str.replace(/%d/i, number);
        };
    }, months = [
        'يناير',
        'فبراير',
        'مارس',
        'أبريل',
        'مايو',
        'يونيو',
        'يوليو',
        'أغسطس',
        'سبتمبر',
        'أكتوبر',
        'نوفمبر',
        'ديسمبر'
    ];

    var arLy = moment.defineLocale('ar-ly', {
        months : months,
        monthsShort : months,
        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'D/\u200FM/\u200FYYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM : function (input) {
            return 'م' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ص';
            } else {
                return 'م';
            }
        },
        calendar : {
            sameDay: '[اليوم عند الساعة] LT',
            nextDay: '[غدًا عند الساعة] LT',
            nextWeek: 'dddd [عند الساعة] LT',
            lastDay: '[أمس عند الساعة] LT',
            lastWeek: 'dddd [عند الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'بعد %s',
            past : 'منذ %s',
            s : pluralize('s'),
            ss : pluralize('s'),
            m : pluralize('m'),
            mm : pluralize('m'),
            h : pluralize('h'),
            hh : pluralize('h'),
            d : pluralize('d'),
            dd : pluralize('d'),
            M : pluralize('M'),
            MM : pluralize('M'),
            y : pluralize('y'),
            yy : pluralize('y')
        },
        preparse: function (string) {
            return string.replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            }).replace(/,/g, '،');
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return arLy;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ar-ma.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var arMa = moment.defineLocale('ar-ma', {
        months : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        monthsShort : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        weekdays : 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'في %s',
            past : 'منذ %s',
            s : 'ثوان',
            ss : '%d ثانية',
            m : 'دقيقة',
            mm : '%d دقائق',
            h : 'ساعة',
            hh : '%d ساعات',
            d : 'يوم',
            dd : '%d أيام',
            M : 'شهر',
            MM : '%d أشهر',
            y : 'سنة',
            yy : '%d سنوات'
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return arMa;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ar-sa.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩',
        '0': '٠'
    }, numberMap = {
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',
        '٠': '0'
    };

    var arSa = moment.defineLocale('ar-sa', {
        months : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM : function (input) {
            return 'م' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ص';
            } else {
                return 'م';
            }
        },
        calendar : {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'في %s',
            past : 'منذ %s',
            s : 'ثوان',
            ss : '%d ثانية',
            m : 'دقيقة',
            mm : '%d دقائق',
            h : 'ساعة',
            hh : '%d ساعات',
            d : 'يوم',
            dd : '%d أيام',
            M : 'شهر',
            MM : '%d أشهر',
            y : 'سنة',
            yy : '%d سنوات'
        },
        preparse: function (string) {
            return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
                return numberMap[match];
            }).replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            }).replace(/,/g, '،');
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return arSa;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ar-tn.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var arTn = moment.defineLocale('ar-tn', {
        months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact : true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'في %s',
            past: 'منذ %s',
            s: 'ثوان',
            ss : '%d ثانية',
            m: 'دقيقة',
            mm: '%d دقائق',
            h: 'ساعة',
            hh: '%d ساعات',
            d: 'يوم',
            dd: '%d أيام',
            M: 'شهر',
            MM: '%d أشهر',
            y: 'سنة',
            yy: '%d سنوات'
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    });

    return arTn;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ar.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩',
        '0': '٠'
    }, numberMap = {
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',
        '٠': '0'
    }, pluralForm = function (n) {
        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
    }, plurals = {
        s : ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
        m : ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
        h : ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
        d : ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
        M : ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
        y : ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
    }, pluralize = function (u) {
        return function (number, withoutSuffix, string, isFuture) {
            var f = pluralForm(number),
                str = plurals[u][pluralForm(number)];
            if (f === 2) {
                str = str[withoutSuffix ? 0 : 1];
            }
            return str.replace(/%d/i, number);
        };
    }, months = [
        'يناير',
        'فبراير',
        'مارس',
        'أبريل',
        'مايو',
        'يونيو',
        'يوليو',
        'أغسطس',
        'سبتمبر',
        'أكتوبر',
        'نوفمبر',
        'ديسمبر'
    ];

    var ar = moment.defineLocale('ar', {
        months : months,
        monthsShort : months,
        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'D/\u200FM/\u200FYYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM : function (input) {
            return 'م' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ص';
            } else {
                return 'م';
            }
        },
        calendar : {
            sameDay: '[اليوم عند الساعة] LT',
            nextDay: '[غدًا عند الساعة] LT',
            nextWeek: 'dddd [عند الساعة] LT',
            lastDay: '[أمس عند الساعة] LT',
            lastWeek: 'dddd [عند الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'بعد %s',
            past : 'منذ %s',
            s : pluralize('s'),
            ss : pluralize('s'),
            m : pluralize('m'),
            mm : pluralize('m'),
            h : pluralize('h'),
            hh : pluralize('h'),
            d : pluralize('d'),
            dd : pluralize('d'),
            M : pluralize('M'),
            MM : pluralize('M'),
            y : pluralize('y'),
            yy : pluralize('y')
        },
        preparse: function (string) {
            return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
                return numberMap[match];
            }).replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            }).replace(/,/g, '،');
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return ar;

})));


/***/ }),

/***/ "./node_modules/moment/locale/az.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var suffixes = {
        1: '-inci',
        5: '-inci',
        8: '-inci',
        70: '-inci',
        80: '-inci',
        2: '-nci',
        7: '-nci',
        20: '-nci',
        50: '-nci',
        3: '-üncü',
        4: '-üncü',
        100: '-üncü',
        6: '-ncı',
        9: '-uncu',
        10: '-uncu',
        30: '-uncu',
        60: '-ıncı',
        90: '-ıncı'
    };

    var az = moment.defineLocale('az', {
        months : 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
        monthsShort : 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
        weekdays : 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
        weekdaysShort : 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
        weekdaysMin : 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[bugün saat] LT',
            nextDay : '[sabah saat] LT',
            nextWeek : '[gələn həftə] dddd [saat] LT',
            lastDay : '[dünən] LT',
            lastWeek : '[keçən həftə] dddd [saat] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s sonra',
            past : '%s əvvəl',
            s : 'birneçə saniyə',
            ss : '%d saniyə',
            m : 'bir dəqiqə',
            mm : '%d dəqiqə',
            h : 'bir saat',
            hh : '%d saat',
            d : 'bir gün',
            dd : '%d gün',
            M : 'bir ay',
            MM : '%d ay',
            y : 'bir il',
            yy : '%d il'
        },
        meridiemParse: /gecə|səhər|gündüz|axşam/,
        isPM : function (input) {
            return /^(gündüz|axşam)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'gecə';
            } else if (hour < 12) {
                return 'səhər';
            } else if (hour < 17) {
                return 'gündüz';
            } else {
                return 'axşam';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
        ordinal : function (number) {
            if (number === 0) {  // special case for zero
                return number + '-ıncı';
            }
            var a = number % 10,
                b = number % 100 - a,
                c = number >= 100 ? 100 : null;
            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return az;

})));


/***/ }),

/***/ "./node_modules/moment/locale/be.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }
    function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
            'ss': withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
            'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
            'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
            'dd': 'дзень_дні_дзён',
            'MM': 'месяц_месяцы_месяцаў',
            'yy': 'год_гады_гадоў'
        };
        if (key === 'm') {
            return withoutSuffix ? 'хвіліна' : 'хвіліну';
        }
        else if (key === 'h') {
            return withoutSuffix ? 'гадзіна' : 'гадзіну';
        }
        else {
            return number + ' ' + plural(format[key], +number);
        }
    }

    var be = moment.defineLocale('be', {
        months : {
            format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'),
            standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_')
        },
        monthsShort : 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
        weekdays : {
            format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
            standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
            isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
        },
        weekdaysShort : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        weekdaysMin : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY г.',
            LLL : 'D MMMM YYYY г., HH:mm',
            LLLL : 'dddd, D MMMM YYYY г., HH:mm'
        },
        calendar : {
            sameDay: '[Сёння ў] LT',
            nextDay: '[Заўтра ў] LT',
            lastDay: '[Учора ў] LT',
            nextWeek: function () {
                return '[У] dddd [ў] LT';
            },
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return '[У мінулую] dddd [ў] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[У мінулы] dddd [ў] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'праз %s',
            past : '%s таму',
            s : 'некалькі секунд',
            m : relativeTimeWithPlural,
            mm : relativeTimeWithPlural,
            h : relativeTimeWithPlural,
            hh : relativeTimeWithPlural,
            d : 'дзень',
            dd : relativeTimeWithPlural,
            M : 'месяц',
            MM : relativeTimeWithPlural,
            y : 'год',
            yy : relativeTimeWithPlural
        },
        meridiemParse: /ночы|раніцы|дня|вечара/,
        isPM : function (input) {
            return /^(дня|вечара)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'ночы';
            } else if (hour < 12) {
                return 'раніцы';
            } else if (hour < 17) {
                return 'дня';
            } else {
                return 'вечара';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'M':
                case 'd':
                case 'DDD':
                case 'w':
                case 'W':
                    return (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? number + '-і' : number + '-ы';
                case 'D':
                    return number + '-га';
                default:
                    return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return be;

})));


/***/ }),

/***/ "./node_modules/moment/locale/bg.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var bg = moment.defineLocale('bg', {
        months : 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
        monthsShort : 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
        weekdays : 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
        weekdaysShort : 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
        weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'D.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY H:mm',
            LLLL : 'dddd, D MMMM YYYY H:mm'
        },
        calendar : {
            sameDay : '[Днес в] LT',
            nextDay : '[Утре в] LT',
            nextWeek : 'dddd [в] LT',
            lastDay : '[Вчера в] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return '[В изминалата] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[В изминалия] dddd [в] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'след %s',
            past : 'преди %s',
            s : 'няколко секунди',
            ss : '%d секунди',
            m : 'минута',
            mm : '%d минути',
            h : 'час',
            hh : '%d часа',
            d : 'ден',
            dd : '%d дни',
            M : 'месец',
            MM : '%d месеца',
            y : 'година',
            yy : '%d години'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal : function (number) {
            var lastDigit = number % 10,
                last2Digits = number % 100;
            if (number === 0) {
                return number + '-ев';
            } else if (last2Digits === 0) {
                return number + '-ен';
            } else if (last2Digits > 10 && last2Digits < 20) {
                return number + '-ти';
            } else if (lastDigit === 1) {
                return number + '-ви';
            } else if (lastDigit === 2) {
                return number + '-ри';
            } else if (lastDigit === 7 || lastDigit === 8) {
                return number + '-ми';
            } else {
                return number + '-ти';
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return bg;

})));


/***/ }),

/***/ "./node_modules/moment/locale/bm.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var bm = moment.defineLocale('bm', {
        months : 'Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo'.split('_'),
        monthsShort : 'Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des'.split('_'),
        weekdays : 'Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri'.split('_'),
        weekdaysShort : 'Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib'.split('_'),
        weekdaysMin : 'Ka_Nt_Ta_Ar_Al_Ju_Si'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'MMMM [tile] D [san] YYYY',
            LLL : 'MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm',
            LLLL : 'dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm'
        },
        calendar : {
            sameDay : '[Bi lɛrɛ] LT',
            nextDay : '[Sini lɛrɛ] LT',
            nextWeek : 'dddd [don lɛrɛ] LT',
            lastDay : '[Kunu lɛrɛ] LT',
            lastWeek : 'dddd [tɛmɛnen lɛrɛ] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s kɔnɔ',
            past : 'a bɛ %s bɔ',
            s : 'sanga dama dama',
            ss : 'sekondi %d',
            m : 'miniti kelen',
            mm : 'miniti %d',
            h : 'lɛrɛ kelen',
            hh : 'lɛrɛ %d',
            d : 'tile kelen',
            dd : 'tile %d',
            M : 'kalo kelen',
            MM : 'kalo %d',
            y : 'san kelen',
            yy : 'san %d'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return bm;

})));


/***/ }),

/***/ "./node_modules/moment/locale/bn.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '১',
        '2': '২',
        '3': '৩',
        '4': '৪',
        '5': '৫',
        '6': '৬',
        '7': '৭',
        '8': '৮',
        '9': '৯',
        '0': '০'
    },
    numberMap = {
        '১': '1',
        '২': '2',
        '৩': '3',
        '৪': '4',
        '৫': '5',
        '৬': '6',
        '৭': '7',
        '৮': '8',
        '৯': '9',
        '০': '0'
    };

    var bn = moment.defineLocale('bn', {
        months : 'জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
        monthsShort : 'জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে'.split('_'),
        weekdays : 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split('_'),
        weekdaysShort : 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
        weekdaysMin : 'রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি'.split('_'),
        longDateFormat : {
            LT : 'A h:mm সময়',
            LTS : 'A h:mm:ss সময়',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm সময়',
            LLLL : 'dddd, D MMMM YYYY, A h:mm সময়'
        },
        calendar : {
            sameDay : '[আজ] LT',
            nextDay : '[আগামীকাল] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[গতকাল] LT',
            lastWeek : '[গত] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s পরে',
            past : '%s আগে',
            s : 'কয়েক সেকেন্ড',
            ss : '%d সেকেন্ড',
            m : 'এক মিনিট',
            mm : '%d মিনিট',
            h : 'এক ঘন্টা',
            hh : '%d ঘন্টা',
            d : 'এক দিন',
            dd : '%d দিন',
            M : 'এক মাস',
            MM : '%d মাস',
            y : 'এক বছর',
            yy : '%d বছর'
        },
        preparse: function (string) {
            return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if ((meridiem === 'রাত' && hour >= 4) ||
                    (meridiem === 'দুপুর' && hour < 5) ||
                    meridiem === 'বিকাল') {
                return hour + 12;
            } else {
                return hour;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'রাত';
            } else if (hour < 10) {
                return 'সকাল';
            } else if (hour < 17) {
                return 'দুপুর';
            } else if (hour < 20) {
                return 'বিকাল';
            } else {
                return 'রাত';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return bn;

})));


/***/ }),

/***/ "./node_modules/moment/locale/bo.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '༡',
        '2': '༢',
        '3': '༣',
        '4': '༤',
        '5': '༥',
        '6': '༦',
        '7': '༧',
        '8': '༨',
        '9': '༩',
        '0': '༠'
    },
    numberMap = {
        '༡': '1',
        '༢': '2',
        '༣': '3',
        '༤': '4',
        '༥': '5',
        '༦': '6',
        '༧': '7',
        '༨': '8',
        '༩': '9',
        '༠': '0'
    };

    var bo = moment.defineLocale('bo', {
        months : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
        monthsShort : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
        weekdays : 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
        weekdaysShort : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
        weekdaysMin : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
        longDateFormat : {
            LT : 'A h:mm',
            LTS : 'A h:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm',
            LLLL : 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar : {
            sameDay : '[དི་རིང] LT',
            nextDay : '[སང་ཉིན] LT',
            nextWeek : '[བདུན་ཕྲག་རྗེས་མ], LT',
            lastDay : '[ཁ་སང] LT',
            lastWeek : '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ལ་',
            past : '%s སྔན་ལ',
            s : 'ལམ་སང',
            ss : '%d སྐར་ཆ།',
            m : 'སྐར་མ་གཅིག',
            mm : '%d སྐར་མ',
            h : 'ཆུ་ཚོད་གཅིག',
            hh : '%d ཆུ་ཚོད',
            d : 'ཉིན་གཅིག',
            dd : '%d ཉིན་',
            M : 'ཟླ་བ་གཅིག',
            MM : '%d ཟླ་བ',
            y : 'ལོ་གཅིག',
            yy : '%d ལོ'
        },
        preparse: function (string) {
            return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if ((meridiem === 'མཚན་མོ' && hour >= 4) ||
                    (meridiem === 'ཉིན་གུང' && hour < 5) ||
                    meridiem === 'དགོང་དག') {
                return hour + 12;
            } else {
                return hour;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'མཚན་མོ';
            } else if (hour < 10) {
                return 'ཞོགས་ཀས';
            } else if (hour < 17) {
                return 'ཉིན་གུང';
            } else if (hour < 20) {
                return 'དགོང་དག';
            } else {
                return 'མཚན་མོ';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return bo;

})));


/***/ }),

/***/ "./node_modules/moment/locale/br.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function relativeTimeWithMutation(number, withoutSuffix, key) {
        var format = {
            'mm': 'munutenn',
            'MM': 'miz',
            'dd': 'devezh'
        };
        return number + ' ' + mutation(format[key], number);
    }
    function specialMutationForYears(number) {
        switch (lastNumber(number)) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 9:
                return number + ' bloaz';
            default:
                return number + ' vloaz';
        }
    }
    function lastNumber(number) {
        if (number > 9) {
            return lastNumber(number % 10);
        }
        return number;
    }
    function mutation(text, number) {
        if (number === 2) {
            return softMutation(text);
        }
        return text;
    }
    function softMutation(text) {
        var mutationTable = {
            'm': 'v',
            'b': 'v',
            'd': 'z'
        };
        if (mutationTable[text.charAt(0)] === undefined) {
            return text;
        }
        return mutationTable[text.charAt(0)] + text.substring(1);
    }

    var br = moment.defineLocale('br', {
        months : 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
        monthsShort : 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
        weekdays : 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
        weekdaysShort : 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
        weekdaysMin : 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'h[e]mm A',
            LTS : 'h[e]mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D [a viz] MMMM YYYY',
            LLL : 'D [a viz] MMMM YYYY h[e]mm A',
            LLLL : 'dddd, D [a viz] MMMM YYYY h[e]mm A'
        },
        calendar : {
            sameDay : '[Hiziv da] LT',
            nextDay : '[Warc\'hoazh da] LT',
            nextWeek : 'dddd [da] LT',
            lastDay : '[Dec\'h da] LT',
            lastWeek : 'dddd [paset da] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'a-benn %s',
            past : '%s \'zo',
            s : 'un nebeud segondennoù',
            ss : '%d eilenn',
            m : 'ur vunutenn',
            mm : relativeTimeWithMutation,
            h : 'un eur',
            hh : '%d eur',
            d : 'un devezh',
            dd : relativeTimeWithMutation,
            M : 'ur miz',
            MM : relativeTimeWithMutation,
            y : 'ur bloaz',
            yy : specialMutationForYears
        },
        dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
        ordinal : function (number) {
            var output = (number === 1) ? 'añ' : 'vet';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return br;

})));


/***/ }),

/***/ "./node_modules/moment/locale/bs.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function translate(number, withoutSuffix, key) {
        var result = number + ' ';
        switch (key) {
            case 'ss':
                if (number === 1) {
                    result += 'sekunda';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'sekunde';
                } else {
                    result += 'sekundi';
                }
                return result;
            case 'm':
                return withoutSuffix ? 'jedna minuta' : 'jedne minute';
            case 'mm':
                if (number === 1) {
                    result += 'minuta';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'minute';
                } else {
                    result += 'minuta';
                }
                return result;
            case 'h':
                return withoutSuffix ? 'jedan sat' : 'jednog sata';
            case 'hh':
                if (number === 1) {
                    result += 'sat';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'sata';
                } else {
                    result += 'sati';
                }
                return result;
            case 'dd':
                if (number === 1) {
                    result += 'dan';
                } else {
                    result += 'dana';
                }
                return result;
            case 'MM':
                if (number === 1) {
                    result += 'mjesec';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'mjeseca';
                } else {
                    result += 'mjeseci';
                }
                return result;
            case 'yy':
                if (number === 1) {
                    result += 'godina';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'godine';
                } else {
                    result += 'godina';
                }
                return result;
        }
    }

    var bs = moment.defineLocale('bs', {
        months : 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort : 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd, D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay  : '[danas u] LT',
            nextDay  : '[sutra u] LT',
            nextWeek : function () {
                switch (this.day()) {
                    case 0:
                        return '[u] [nedjelju] [u] LT';
                    case 3:
                        return '[u] [srijedu] [u] LT';
                    case 6:
                        return '[u] [subotu] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[u] dddd [u] LT';
                }
            },
            lastDay  : '[jučer u] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                        return '[prošlu] dddd [u] LT';
                    case 6:
                        return '[prošle] [subote] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[prošli] dddd [u] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'za %s',
            past   : 'prije %s',
            s      : 'par sekundi',
            ss     : translate,
            m      : translate,
            mm     : translate,
            h      : translate,
            hh     : translate,
            d      : 'dan',
            dd     : translate,
            M      : 'mjesec',
            MM     : translate,
            y      : 'godinu',
            yy     : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return bs;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ca.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var ca = moment.defineLocale('ca', {
        months : {
            standalone: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
            format: 'de gener_de febrer_de març_d\'abril_de maig_de juny_de juliol_d\'agost_de setembre_d\'octubre_de novembre_de desembre'.split('_'),
            isFormat: /D[oD]?(\s)+MMMM/
        },
        monthsShort : 'gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.'.split('_'),
        monthsParseExact : true,
        weekdays : 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
        weekdaysShort : 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
        weekdaysMin : 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM [de] YYYY',
            ll : 'D MMM YYYY',
            LLL : 'D MMMM [de] YYYY [a les] H:mm',
            lll : 'D MMM YYYY, H:mm',
            LLLL : 'dddd D MMMM [de] YYYY [a les] H:mm',
            llll : 'ddd D MMM YYYY, H:mm'
        },
        calendar : {
            sameDay : function () {
                return '[avui a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            nextDay : function () {
                return '[demà a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            lastDay : function () {
                return '[ahir a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            lastWeek : function () {
                return '[el] dddd [passat a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'd\'aquí %s',
            past : 'fa %s',
            s : 'uns segons',
            ss : '%d segons',
            m : 'un minut',
            mm : '%d minuts',
            h : 'una hora',
            hh : '%d hores',
            d : 'un dia',
            dd : '%d dies',
            M : 'un mes',
            MM : '%d mesos',
            y : 'un any',
            yy : '%d anys'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal : function (number, period) {
            var output = (number === 1) ? 'r' :
                (number === 2) ? 'n' :
                (number === 3) ? 'r' :
                (number === 4) ? 't' : 'è';
            if (period === 'w' || period === 'W') {
                output = 'a';
            }
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return ca;

})));


/***/ }),

/***/ "./node_modules/moment/locale/cs.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
        monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
    function plural(n) {
        return (n > 1) && (n < 5) && (~~(n / 10) !== 1);
    }
    function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
            case 's':  // a few seconds / in a few seconds / a few seconds ago
                return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
            case 'ss': // 9 seconds / in 9 seconds / 9 seconds ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'sekundy' : 'sekund');
                } else {
                    return result + 'sekundami';
                }
                break;
            case 'm':  // a minute / in a minute / a minute ago
                return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
            case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'minuty' : 'minut');
                } else {
                    return result + 'minutami';
                }
                break;
            case 'h':  // an hour / in an hour / an hour ago
                return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
            case 'hh': // 9 hours / in 9 hours / 9 hours ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'hodiny' : 'hodin');
                } else {
                    return result + 'hodinami';
                }
                break;
            case 'd':  // a day / in a day / a day ago
                return (withoutSuffix || isFuture) ? 'den' : 'dnem';
            case 'dd': // 9 days / in 9 days / 9 days ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'dny' : 'dní');
                } else {
                    return result + 'dny';
                }
                break;
            case 'M':  // a month / in a month / a month ago
                return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
            case 'MM': // 9 months / in 9 months / 9 months ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'měsíce' : 'měsíců');
                } else {
                    return result + 'měsíci';
                }
                break;
            case 'y':  // a year / in a year / a year ago
                return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
            case 'yy': // 9 years / in 9 years / 9 years ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'roky' : 'let');
                } else {
                    return result + 'lety';
                }
                break;
        }
    }

    var cs = moment.defineLocale('cs', {
        months : months,
        monthsShort : monthsShort,
        monthsParse : (function (months, monthsShort) {
            var i, _monthsParse = [];
            for (i = 0; i < 12; i++) {
                // use custom parser to solve problem with July (červenec)
                _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
            }
            return _monthsParse;
        }(months, monthsShort)),
        shortMonthsParse : (function (monthsShort) {
            var i, _shortMonthsParse = [];
            for (i = 0; i < 12; i++) {
                _shortMonthsParse[i] = new RegExp('^' + monthsShort[i] + '$', 'i');
            }
            return _shortMonthsParse;
        }(monthsShort)),
        longMonthsParse : (function (months) {
            var i, _longMonthsParse = [];
            for (i = 0; i < 12; i++) {
                _longMonthsParse[i] = new RegExp('^' + months[i] + '$', 'i');
            }
            return _longMonthsParse;
        }(months)),
        weekdays : 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
        weekdaysShort : 'ne_po_út_st_čt_pá_so'.split('_'),
        weekdaysMin : 'ne_po_út_st_čt_pá_so'.split('_'),
        longDateFormat : {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd D. MMMM YYYY H:mm',
            l : 'D. M. YYYY'
        },
        calendar : {
            sameDay: '[dnes v] LT',
            nextDay: '[zítra v] LT',
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[v neděli v] LT';
                    case 1:
                    case 2:
                        return '[v] dddd [v] LT';
                    case 3:
                        return '[ve středu v] LT';
                    case 4:
                        return '[ve čtvrtek v] LT';
                    case 5:
                        return '[v pátek v] LT';
                    case 6:
                        return '[v sobotu v] LT';
                }
            },
            lastDay: '[včera v] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[minulou neděli v] LT';
                    case 1:
                    case 2:
                        return '[minulé] dddd [v] LT';
                    case 3:
                        return '[minulou středu v] LT';
                    case 4:
                    case 5:
                        return '[minulý] dddd [v] LT';
                    case 6:
                        return '[minulou sobotu v] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'za %s',
            past : 'před %s',
            s : translate,
            ss : translate,
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : translate,
            dd : translate,
            M : translate,
            MM : translate,
            y : translate,
            yy : translate
        },
        dayOfMonthOrdinalParse : /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return cs;

})));


/***/ }),

/***/ "./node_modules/moment/locale/cv.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var cv = moment.defineLocale('cv', {
        months : 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
        monthsShort : 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
        weekdays : 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
        weekdaysShort : 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
        weekdaysMin : 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD-MM-YYYY',
            LL : 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
            LLL : 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
            LLLL : 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm'
        },
        calendar : {
            sameDay: '[Паян] LT [сехетре]',
            nextDay: '[Ыран] LT [сехетре]',
            lastDay: '[Ӗнер] LT [сехетре]',
            nextWeek: '[Ҫитес] dddd LT [сехетре]',
            lastWeek: '[Иртнӗ] dddd LT [сехетре]',
            sameElse: 'L'
        },
        relativeTime : {
            future : function (output) {
                var affix = /сехет$/i.exec(output) ? 'рен' : /ҫул$/i.exec(output) ? 'тан' : 'ран';
                return output + affix;
            },
            past : '%s каялла',
            s : 'пӗр-ик ҫеккунт',
            ss : '%d ҫеккунт',
            m : 'пӗр минут',
            mm : '%d минут',
            h : 'пӗр сехет',
            hh : '%d сехет',
            d : 'пӗр кун',
            dd : '%d кун',
            M : 'пӗр уйӑх',
            MM : '%d уйӑх',
            y : 'пӗр ҫул',
            yy : '%d ҫул'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
        ordinal : '%d-мӗш',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return cv;

})));


/***/ }),

/***/ "./node_modules/moment/locale/cy.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var cy = moment.defineLocale('cy', {
        months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
        monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
        weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
        weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
        weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
        weekdaysParseExact : true,
        // time formats are the same as en-gb
        longDateFormat: {
            LT: 'HH:mm',
            LTS : 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Heddiw am] LT',
            nextDay: '[Yfory am] LT',
            nextWeek: 'dddd [am] LT',
            lastDay: '[Ddoe am] LT',
            lastWeek: 'dddd [diwethaf am] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'mewn %s',
            past: '%s yn ôl',
            s: 'ychydig eiliadau',
            ss: '%d eiliad',
            m: 'munud',
            mm: '%d munud',
            h: 'awr',
            hh: '%d awr',
            d: 'diwrnod',
            dd: '%d diwrnod',
            M: 'mis',
            MM: '%d mis',
            y: 'blwyddyn',
            yy: '%d flynedd'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
        ordinal: function (number) {
            var b = number,
                output = '',
                lookup = [
                    '', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed
                    'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
                ];
            if (b > 20) {
                if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
                    output = 'fed'; // not 30ain, 70ain or 90ain
                } else {
                    output = 'ain';
                }
            } else if (b > 0) {
                output = lookup[b];
            }
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return cy;

})));


/***/ }),

/***/ "./node_modules/moment/locale/da.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var da = moment.defineLocale('da', {
        months : 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort : 'søn_man_tir_ons_tor_fre_lør'.split('_'),
        weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY HH:mm',
            LLLL : 'dddd [d.] D. MMMM YYYY [kl.] HH:mm'
        },
        calendar : {
            sameDay : '[i dag kl.] LT',
            nextDay : '[i morgen kl.] LT',
            nextWeek : 'på dddd [kl.] LT',
            lastDay : '[i går kl.] LT',
            lastWeek : '[i] dddd[s kl.] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : '%s siden',
            s : 'få sekunder',
            ss : '%d sekunder',
            m : 'et minut',
            mm : '%d minutter',
            h : 'en time',
            hh : '%d timer',
            d : 'en dag',
            dd : '%d dage',
            M : 'en måned',
            MM : '%d måneder',
            y : 'et år',
            yy : '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return da;

})));


/***/ }),

/***/ "./node_modules/moment/locale/de-at.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            'm': ['eine Minute', 'einer Minute'],
            'h': ['eine Stunde', 'einer Stunde'],
            'd': ['ein Tag', 'einem Tag'],
            'dd': [number + ' Tage', number + ' Tagen'],
            'M': ['ein Monat', 'einem Monat'],
            'MM': [number + ' Monate', number + ' Monaten'],
            'y': ['ein Jahr', 'einem Jahr'],
            'yy': [number + ' Jahre', number + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }

    var deAt = moment.defineLocale('de-at', {
        months : 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort : 'Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact : true,
        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY HH:mm',
            LLLL : 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime : {
            future : 'in %s',
            past : 'vor %s',
            s : 'ein paar Sekunden',
            ss : '%d Sekunden',
            m : processRelativeTime,
            mm : '%d Minuten',
            h : processRelativeTime,
            hh : '%d Stunden',
            d : processRelativeTime,
            dd : processRelativeTime,
            M : processRelativeTime,
            MM : processRelativeTime,
            y : processRelativeTime,
            yy : processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return deAt;

})));


/***/ }),

/***/ "./node_modules/moment/locale/de-ch.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            'm': ['eine Minute', 'einer Minute'],
            'h': ['eine Stunde', 'einer Stunde'],
            'd': ['ein Tag', 'einem Tag'],
            'dd': [number + ' Tage', number + ' Tagen'],
            'M': ['ein Monat', 'einem Monat'],
            'MM': [number + ' Monate', number + ' Monaten'],
            'y': ['ein Jahr', 'einem Jahr'],
            'yy': [number + ' Jahre', number + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }

    var deCh = moment.defineLocale('de-ch', {
        months : 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort : 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact : true,
        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY HH:mm',
            LLLL : 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime : {
            future : 'in %s',
            past : 'vor %s',
            s : 'ein paar Sekunden',
            ss : '%d Sekunden',
            m : processRelativeTime,
            mm : '%d Minuten',
            h : processRelativeTime,
            hh : '%d Stunden',
            d : processRelativeTime,
            dd : processRelativeTime,
            M : processRelativeTime,
            MM : processRelativeTime,
            y : processRelativeTime,
            yy : processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return deCh;

})));


/***/ }),

/***/ "./node_modules/moment/locale/de.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            'm': ['eine Minute', 'einer Minute'],
            'h': ['eine Stunde', 'einer Stunde'],
            'd': ['ein Tag', 'einem Tag'],
            'dd': [number + ' Tage', number + ' Tagen'],
            'M': ['ein Monat', 'einem Monat'],
            'MM': [number + ' Monate', number + ' Monaten'],
            'y': ['ein Jahr', 'einem Jahr'],
            'yy': [number + ' Jahre', number + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }

    var de = moment.defineLocale('de', {
        months : 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort : 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact : true,
        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY HH:mm',
            LLLL : 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime : {
            future : 'in %s',
            past : 'vor %s',
            s : 'ein paar Sekunden',
            ss : '%d Sekunden',
            m : processRelativeTime,
            mm : '%d Minuten',
            h : processRelativeTime,
            hh : '%d Stunden',
            d : processRelativeTime,
            dd : processRelativeTime,
            M : processRelativeTime,
            MM : processRelativeTime,
            y : processRelativeTime,
            yy : processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return de;

})));


/***/ }),

/***/ "./node_modules/moment/locale/dv.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var months = [
        'ޖެނުއަރީ',
        'ފެބްރުއަރީ',
        'މާރިޗު',
        'އޭޕްރީލު',
        'މޭ',
        'ޖޫން',
        'ޖުލައި',
        'އޯގަސްޓު',
        'ސެޕްޓެމްބަރު',
        'އޮކްޓޯބަރު',
        'ނޮވެމްބަރު',
        'ޑިސެމްބަރު'
    ], weekdays = [
        'އާދިއްތަ',
        'ހޯމަ',
        'އަންގާރަ',
        'ބުދަ',
        'ބުރާސްފަތި',
        'ހުކުރު',
        'ހޮނިހިރު'
    ];

    var dv = moment.defineLocale('dv', {
        months : months,
        monthsShort : months,
        weekdays : weekdays,
        weekdaysShort : weekdays,
        weekdaysMin : 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
        longDateFormat : {

            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'D/M/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /މކ|މފ/,
        isPM : function (input) {
            return 'މފ' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'މކ';
            } else {
                return 'މފ';
            }
        },
        calendar : {
            sameDay : '[މިއަދު] LT',
            nextDay : '[މާދަމާ] LT',
            nextWeek : 'dddd LT',
            lastDay : '[އިއްޔެ] LT',
            lastWeek : '[ފާއިތުވި] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'ތެރޭގައި %s',
            past : 'ކުރިން %s',
            s : 'ސިކުންތުކޮޅެއް',
            ss : 'd% ސިކުންތު',
            m : 'މިނިޓެއް',
            mm : 'މިނިޓު %d',
            h : 'ގަޑިއިރެއް',
            hh : 'ގަޑިއިރު %d',
            d : 'ދުވަހެއް',
            dd : 'ދުވަސް %d',
            M : 'މަހެއް',
            MM : 'މަސް %d',
            y : 'އަހަރެއް',
            yy : 'އަހަރު %d'
        },
        preparse: function (string) {
            return string.replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/,/g, '،');
        },
        week : {
            dow : 7,  // Sunday is the first day of the week.
            doy : 12  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return dv;

})));


/***/ }),

/***/ "./node_modules/moment/locale/el.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }


    var el = moment.defineLocale('el', {
        monthsNominativeEl : 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
        monthsGenitiveEl : 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
        months : function (momentToFormat, format) {
            if (!momentToFormat) {
                return this._monthsNominativeEl;
            } else if (typeof format === 'string' && /D/.test(format.substring(0, format.indexOf('MMMM')))) { // if there is a day number before 'MMMM'
                return this._monthsGenitiveEl[momentToFormat.month()];
            } else {
                return this._monthsNominativeEl[momentToFormat.month()];
            }
        },
        monthsShort : 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
        weekdays : 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
        weekdaysShort : 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
        weekdaysMin : 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'μμ' : 'ΜΜ';
            } else {
                return isLower ? 'πμ' : 'ΠΜ';
            }
        },
        isPM : function (input) {
            return ((input + '').toLowerCase()[0] === 'μ');
        },
        meridiemParse : /[ΠΜ]\.?Μ?\.?/i,
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendarEl : {
            sameDay : '[Σήμερα {}] LT',
            nextDay : '[Αύριο {}] LT',
            nextWeek : 'dddd [{}] LT',
            lastDay : '[Χθες {}] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 6:
                        return '[το προηγούμενο] dddd [{}] LT';
                    default:
                        return '[την προηγούμενη] dddd [{}] LT';
                }
            },
            sameElse : 'L'
        },
        calendar : function (key, mom) {
            var output = this._calendarEl[key],
                hours = mom && mom.hours();
            if (isFunction(output)) {
                output = output.apply(mom);
            }
            return output.replace('{}', (hours % 12 === 1 ? 'στη' : 'στις'));
        },
        relativeTime : {
            future : 'σε %s',
            past : '%s πριν',
            s : 'λίγα δευτερόλεπτα',
            ss : '%d δευτερόλεπτα',
            m : 'ένα λεπτό',
            mm : '%d λεπτά',
            h : 'μία ώρα',
            hh : '%d ώρες',
            d : 'μία μέρα',
            dd : '%d μέρες',
            M : 'ένας μήνας',
            MM : '%d μήνες',
            y : 'ένας χρόνος',
            yy : '%d χρόνια'
        },
        dayOfMonthOrdinalParse: /\d{1,2}η/,
        ordinal: '%dη',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4st is the first week of the year.
        }
    });

    return el;

})));


/***/ }),

/***/ "./node_modules/moment/locale/en-au.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var enAu = moment.defineLocale('en-au', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            ss : '%d seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return enAu;

})));


/***/ }),

/***/ "./node_modules/moment/locale/en-ca.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var enCa = moment.defineLocale('en-ca', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'YYYY-MM-DD',
            LL : 'MMMM D, YYYY',
            LLL : 'MMMM D, YYYY h:mm A',
            LLLL : 'dddd, MMMM D, YYYY h:mm A'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            ss : '%d seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    return enCa;

})));


/***/ }),

/***/ "./node_modules/moment/locale/en-gb.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var enGb = moment.defineLocale('en-gb', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            ss : '%d seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return enGb;

})));


/***/ }),

/***/ "./node_modules/moment/locale/en-ie.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var enIe = moment.defineLocale('en-ie', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD-MM-YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            ss : '%d seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return enIe;

})));


/***/ }),

/***/ "./node_modules/moment/locale/en-il.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var enIl = moment.defineLocale('en-il', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    return enIl;

})));


/***/ }),

/***/ "./node_modules/moment/locale/en-nz.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var enNz = moment.defineLocale('en-nz', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            ss : '%d seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return enNz;

})));


/***/ }),

/***/ "./node_modules/moment/locale/eo.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var eo = moment.defineLocale('eo', {
        months : 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
        weekdays : 'dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato'.split('_'),
        weekdaysShort : 'dim_lun_mard_merk_ĵaŭ_ven_sab'.split('_'),
        weekdaysMin : 'di_lu_ma_me_ĵa_ve_sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'D[-a de] MMMM, YYYY',
            LLL : 'D[-a de] MMMM, YYYY HH:mm',
            LLLL : 'dddd, [la] D[-a de] MMMM, YYYY HH:mm'
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function (input) {
            return input.charAt(0).toLowerCase() === 'p';
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'p.t.m.' : 'P.T.M.';
            } else {
                return isLower ? 'a.t.m.' : 'A.T.M.';
            }
        },
        calendar : {
            sameDay : '[Hodiaŭ je] LT',
            nextDay : '[Morgaŭ je] LT',
            nextWeek : 'dddd [je] LT',
            lastDay : '[Hieraŭ je] LT',
            lastWeek : '[pasinta] dddd [je] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'post %s',
            past : 'antaŭ %s',
            s : 'sekundoj',
            ss : '%d sekundoj',
            m : 'minuto',
            mm : '%d minutoj',
            h : 'horo',
            hh : '%d horoj',
            d : 'tago',//ne 'diurno', ĉar estas uzita por proksimumo
            dd : '%d tagoj',
            M : 'monato',
            MM : '%d monatoj',
            y : 'jaro',
            yy : '%d jaroj'
        },
        dayOfMonthOrdinalParse: /\d{1,2}a/,
        ordinal : '%da',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return eo;

})));


/***/ }),

/***/ "./node_modules/moment/locale/es-do.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
        monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

    var monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
    var monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

    var esDo = moment.defineLocale('es-do', {
        months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort : function (m, format) {
            if (!m) {
                return monthsShortDot;
            } else if (/-MMM-/.test(format)) {
                return monthsShort[m.month()];
            } else {
                return monthsShortDot[m.month()];
            }
        },
        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY h:mm A',
            LLLL : 'dddd, D [de] MMMM [de] YYYY h:mm A'
        },
        calendar : {
            sameDay : function () {
                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextDay : function () {
                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastDay : function () {
                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastWeek : function () {
                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'en %s',
            past : 'hace %s',
            s : 'unos segundos',
            ss : '%d segundos',
            m : 'un minuto',
            mm : '%d minutos',
            h : 'una hora',
            hh : '%d horas',
            d : 'un día',
            dd : '%d días',
            M : 'un mes',
            MM : '%d meses',
            y : 'un año',
            yy : '%d años'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal : '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return esDo;

})));


/***/ }),

/***/ "./node_modules/moment/locale/es-us.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
        monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

    var esUs = moment.defineLocale('es-us', {
        months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort : function (m, format) {
            if (!m) {
                return monthsShortDot;
            } else if (/-MMM-/.test(format)) {
                return monthsShort[m.month()];
            } else {
                return monthsShortDot[m.month()];
            }
        },
        monthsParseExact : true,
        weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'MM/DD/YYYY',
            LL : 'MMMM [de] D [de] YYYY',
            LLL : 'MMMM [de] D [de] YYYY h:mm A',
            LLLL : 'dddd, MMMM [de] D [de] YYYY h:mm A'
        },
        calendar : {
            sameDay : function () {
                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextDay : function () {
                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastDay : function () {
                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastWeek : function () {
                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'en %s',
            past : 'hace %s',
            s : 'unos segundos',
            ss : '%d segundos',
            m : 'un minuto',
            mm : '%d minutos',
            h : 'una hora',
            hh : '%d horas',
            d : 'un día',
            dd : '%d días',
            M : 'un mes',
            MM : '%d meses',
            y : 'un año',
            yy : '%d años'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal : '%dº',
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return esUs;

})));


/***/ }),

/***/ "./node_modules/moment/locale/es.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
        monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

    var monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
    var monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

    var es = moment.defineLocale('es', {
        months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort : function (m, format) {
            if (!m) {
                return monthsShortDot;
            } else if (/-MMM-/.test(format)) {
                return monthsShort[m.month()];
            } else {
                return monthsShortDot[m.month()];
            }
        },
        monthsRegex : monthsRegex,
        monthsShortRegex : monthsRegex,
        monthsStrictRegex : /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex : /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse : monthsParse,
        longMonthsParse : monthsParse,
        shortMonthsParse : monthsParse,
        weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY H:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        calendar : {
            sameDay : function () {
                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextDay : function () {
                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastDay : function () {
                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastWeek : function () {
                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'en %s',
            past : 'hace %s',
            s : 'unos segundos',
            ss : '%d segundos',
            m : 'un minuto',
            mm : '%d minutos',
            h : 'una hora',
            hh : '%d horas',
            d : 'un día',
            dd : '%d días',
            M : 'un mes',
            MM : '%d meses',
            y : 'un año',
            yy : '%d años'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal : '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return es;

})));


/***/ }),

/***/ "./node_modules/moment/locale/et.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            's' : ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
            'ss': [number + 'sekundi', number + 'sekundit'],
            'm' : ['ühe minuti', 'üks minut'],
            'mm': [number + ' minuti', number + ' minutit'],
            'h' : ['ühe tunni', 'tund aega', 'üks tund'],
            'hh': [number + ' tunni', number + ' tundi'],
            'd' : ['ühe päeva', 'üks päev'],
            'M' : ['kuu aja', 'kuu aega', 'üks kuu'],
            'MM': [number + ' kuu', number + ' kuud'],
            'y' : ['ühe aasta', 'aasta', 'üks aasta'],
            'yy': [number + ' aasta', number + ' aastat']
        };
        if (withoutSuffix) {
            return format[key][2] ? format[key][2] : format[key][1];
        }
        return isFuture ? format[key][0] : format[key][1];
    }

    var et = moment.defineLocale('et', {
        months        : 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
        monthsShort   : 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
        weekdays      : 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
        weekdaysShort : 'P_E_T_K_N_R_L'.split('_'),
        weekdaysMin   : 'P_E_T_K_N_R_L'.split('_'),
        longDateFormat : {
            LT   : 'H:mm',
            LTS : 'H:mm:ss',
            L    : 'DD.MM.YYYY',
            LL   : 'D. MMMM YYYY',
            LLL  : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd, D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay  : '[Täna,] LT',
            nextDay  : '[Homme,] LT',
            nextWeek : '[Järgmine] dddd LT',
            lastDay  : '[Eile,] LT',
            lastWeek : '[Eelmine] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s pärast',
            past   : '%s tagasi',
            s      : processRelativeTime,
            ss     : processRelativeTime,
            m      : processRelativeTime,
            mm     : processRelativeTime,
            h      : processRelativeTime,
            hh     : processRelativeTime,
            d      : processRelativeTime,
            dd     : '%d päeva',
            M      : processRelativeTime,
            MM     : processRelativeTime,
            y      : processRelativeTime,
            yy     : processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return et;

})));


/***/ }),

/***/ "./node_modules/moment/locale/eu.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var eu = moment.defineLocale('eu', {
        months : 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
        monthsShort : 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
        monthsParseExact : true,
        weekdays : 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
        weekdaysShort : 'ig._al._ar._az._og._ol._lr.'.split('_'),
        weekdaysMin : 'ig_al_ar_az_og_ol_lr'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'YYYY[ko] MMMM[ren] D[a]',
            LLL : 'YYYY[ko] MMMM[ren] D[a] HH:mm',
            LLLL : 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
            l : 'YYYY-M-D',
            ll : 'YYYY[ko] MMM D[a]',
            lll : 'YYYY[ko] MMM D[a] HH:mm',
            llll : 'ddd, YYYY[ko] MMM D[a] HH:mm'
        },
        calendar : {
            sameDay : '[gaur] LT[etan]',
            nextDay : '[bihar] LT[etan]',
            nextWeek : 'dddd LT[etan]',
            lastDay : '[atzo] LT[etan]',
            lastWeek : '[aurreko] dddd LT[etan]',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s barru',
            past : 'duela %s',
            s : 'segundo batzuk',
            ss : '%d segundo',
            m : 'minutu bat',
            mm : '%d minutu',
            h : 'ordu bat',
            hh : '%d ordu',
            d : 'egun bat',
            dd : '%d egun',
            M : 'hilabete bat',
            MM : '%d hilabete',
            y : 'urte bat',
            yy : '%d urte'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return eu;

})));


/***/ }),

/***/ "./node_modules/moment/locale/fa.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '۱',
        '2': '۲',
        '3': '۳',
        '4': '۴',
        '5': '۵',
        '6': '۶',
        '7': '۷',
        '8': '۸',
        '9': '۹',
        '0': '۰'
    }, numberMap = {
        '۱': '1',
        '۲': '2',
        '۳': '3',
        '۴': '4',
        '۵': '5',
        '۶': '6',
        '۷': '7',
        '۸': '8',
        '۹': '9',
        '۰': '0'
    };

    var fa = moment.defineLocale('fa', {
        months : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        monthsShort : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        weekdays : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
        weekdaysShort : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
        weekdaysMin : 'ی_د_س_چ_پ_ج_ش'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /قبل از ظهر|بعد از ظهر/,
        isPM: function (input) {
            return /بعد از ظهر/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'قبل از ظهر';
            } else {
                return 'بعد از ظهر';
            }
        },
        calendar : {
            sameDay : '[امروز ساعت] LT',
            nextDay : '[فردا ساعت] LT',
            nextWeek : 'dddd [ساعت] LT',
            lastDay : '[دیروز ساعت] LT',
            lastWeek : 'dddd [پیش] [ساعت] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'در %s',
            past : '%s پیش',
            s : 'چند ثانیه',
            ss : 'ثانیه d%',
            m : 'یک دقیقه',
            mm : '%d دقیقه',
            h : 'یک ساعت',
            hh : '%d ساعت',
            d : 'یک روز',
            dd : '%d روز',
            M : 'یک ماه',
            MM : '%d ماه',
            y : 'یک سال',
            yy : '%d سال'
        },
        preparse: function (string) {
            return string.replace(/[۰-۹]/g, function (match) {
                return numberMap[match];
            }).replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            }).replace(/,/g, '،');
        },
        dayOfMonthOrdinalParse: /\d{1,2}م/,
        ordinal : '%dم',
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12 // The week that contains Jan 1st is the first week of the year.
        }
    });

    return fa;

})));


/***/ }),

/***/ "./node_modules/moment/locale/fi.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
        numbersFuture = [
            'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
            numbersPast[7], numbersPast[8], numbersPast[9]
        ];
    function translate(number, withoutSuffix, key, isFuture) {
        var result = '';
        switch (key) {
            case 's':
                return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
            case 'ss':
                return isFuture ? 'sekunnin' : 'sekuntia';
            case 'm':
                return isFuture ? 'minuutin' : 'minuutti';
            case 'mm':
                result = isFuture ? 'minuutin' : 'minuuttia';
                break;
            case 'h':
                return isFuture ? 'tunnin' : 'tunti';
            case 'hh':
                result = isFuture ? 'tunnin' : 'tuntia';
                break;
            case 'd':
                return isFuture ? 'päivän' : 'päivä';
            case 'dd':
                result = isFuture ? 'päivän' : 'päivää';
                break;
            case 'M':
                return isFuture ? 'kuukauden' : 'kuukausi';
            case 'MM':
                result = isFuture ? 'kuukauden' : 'kuukautta';
                break;
            case 'y':
                return isFuture ? 'vuoden' : 'vuosi';
            case 'yy':
                result = isFuture ? 'vuoden' : 'vuotta';
                break;
        }
        result = verbalNumber(number, isFuture) + ' ' + result;
        return result;
    }
    function verbalNumber(number, isFuture) {
        return number < 10 ? (isFuture ? numbersFuture[number] : numbersPast[number]) : number;
    }

    var fi = moment.defineLocale('fi', {
        months : 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
        monthsShort : 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
        weekdays : 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
        weekdaysShort : 'su_ma_ti_ke_to_pe_la'.split('_'),
        weekdaysMin : 'su_ma_ti_ke_to_pe_la'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD.MM.YYYY',
            LL : 'Do MMMM[ta] YYYY',
            LLL : 'Do MMMM[ta] YYYY, [klo] HH.mm',
            LLLL : 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
            l : 'D.M.YYYY',
            ll : 'Do MMM YYYY',
            lll : 'Do MMM YYYY, [klo] HH.mm',
            llll : 'ddd, Do MMM YYYY, [klo] HH.mm'
        },
        calendar : {
            sameDay : '[tänään] [klo] LT',
            nextDay : '[huomenna] [klo] LT',
            nextWeek : 'dddd [klo] LT',
            lastDay : '[eilen] [klo] LT',
            lastWeek : '[viime] dddd[na] [klo] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s päästä',
            past : '%s sitten',
            s : translate,
            ss : translate,
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : translate,
            dd : translate,
            M : translate,
            MM : translate,
            y : translate,
            yy : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return fi;

})));


/***/ }),

/***/ "./node_modules/moment/locale/fo.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var fo = moment.defineLocale('fo', {
        months : 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays : 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
        weekdaysShort : 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
        weekdaysMin : 'su_má_tý_mi_hó_fr_le'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D. MMMM, YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Í dag kl.] LT',
            nextDay : '[Í morgin kl.] LT',
            nextWeek : 'dddd [kl.] LT',
            lastDay : '[Í gjár kl.] LT',
            lastWeek : '[síðstu] dddd [kl] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'um %s',
            past : '%s síðani',
            s : 'fá sekund',
            ss : '%d sekundir',
            m : 'ein minutt',
            mm : '%d minuttir',
            h : 'ein tími',
            hh : '%d tímar',
            d : 'ein dagur',
            dd : '%d dagar',
            M : 'ein mánaði',
            MM : '%d mánaðir',
            y : 'eitt ár',
            yy : '%d ár'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return fo;

})));


/***/ }),

/***/ "./node_modules/moment/locale/fr-ca.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var frCa = moment.defineLocale('fr-ca', {
        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact : true,
        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin : 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Aujourd’hui à] LT',
            nextDay : '[Demain à] LT',
            nextWeek : 'dddd [à] LT',
            lastDay : '[Hier à] LT',
            lastWeek : 'dddd [dernier à] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dans %s',
            past : 'il y a %s',
            s : 'quelques secondes',
            ss : '%d secondes',
            m : 'une minute',
            mm : '%d minutes',
            h : 'une heure',
            hh : '%d heures',
            d : 'un jour',
            dd : '%d jours',
            M : 'un mois',
            MM : '%d mois',
            y : 'un an',
            yy : '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal : function (number, period) {
            switch (period) {
                // Words with masculine grammatical gender: mois, trimestre, jour
                default:
                case 'M':
                case 'Q':
                case 'D':
                case 'DDD':
                case 'd':
                    return number + (number === 1 ? 'er' : 'e');

                // Words with feminine grammatical gender: semaine
                case 'w':
                case 'W':
                    return number + (number === 1 ? 're' : 'e');
            }
        }
    });

    return frCa;

})));


/***/ }),

/***/ "./node_modules/moment/locale/fr-ch.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var frCh = moment.defineLocale('fr-ch', {
        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact : true,
        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin : 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Aujourd’hui à] LT',
            nextDay : '[Demain à] LT',
            nextWeek : 'dddd [à] LT',
            lastDay : '[Hier à] LT',
            lastWeek : 'dddd [dernier à] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dans %s',
            past : 'il y a %s',
            s : 'quelques secondes',
            ss : '%d secondes',
            m : 'une minute',
            mm : '%d minutes',
            h : 'une heure',
            hh : '%d heures',
            d : 'un jour',
            dd : '%d jours',
            M : 'un mois',
            MM : '%d mois',
            y : 'un an',
            yy : '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal : function (number, period) {
            switch (period) {
                // Words with masculine grammatical gender: mois, trimestre, jour
                default:
                case 'M':
                case 'Q':
                case 'D':
                case 'DDD':
                case 'd':
                    return number + (number === 1 ? 'er' : 'e');

                // Words with feminine grammatical gender: semaine
                case 'w':
                case 'W':
                    return number + (number === 1 ? 're' : 'e');
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return frCh;

})));


/***/ }),

/***/ "./node_modules/moment/locale/fr.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var fr = moment.defineLocale('fr', {
        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact : true,
        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin : 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Aujourd’hui à] LT',
            nextDay : '[Demain à] LT',
            nextWeek : 'dddd [à] LT',
            lastDay : '[Hier à] LT',
            lastWeek : 'dddd [dernier à] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dans %s',
            past : 'il y a %s',
            s : 'quelques secondes',
            ss : '%d secondes',
            m : 'une minute',
            mm : '%d minutes',
            h : 'une heure',
            hh : '%d heures',
            d : 'un jour',
            dd : '%d jours',
            M : 'un mois',
            MM : '%d mois',
            y : 'un an',
            yy : '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal : function (number, period) {
            switch (period) {
                // TODO: Return 'e' when day of month > 1. Move this case inside
                // block for masculine words below.
                // See https://github.com/moment/moment/issues/3375
                case 'D':
                    return number + (number === 1 ? 'er' : '');

                // Words with masculine grammatical gender: mois, trimestre, jour
                default:
                case 'M':
                case 'Q':
                case 'DDD':
                case 'd':
                    return number + (number === 1 ? 'er' : 'e');

                // Words with feminine grammatical gender: semaine
                case 'w':
                case 'W':
                    return number + (number === 1 ? 're' : 'e');
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return fr;

})));


/***/ }),

/***/ "./node_modules/moment/locale/fy.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
        monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');

    var fy = moment.defineLocale('fy', {
        months : 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
        monthsShort : function (m, format) {
            if (!m) {
                return monthsShortWithDots;
            } else if (/-MMM-/.test(format)) {
                return monthsShortWithoutDots[m.month()];
            } else {
                return monthsShortWithDots[m.month()];
            }
        },
        monthsParseExact : true,
        weekdays : 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
        weekdaysShort : 'si._mo._ti._wo._to._fr._so.'.split('_'),
        weekdaysMin : 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD-MM-YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[hjoed om] LT',
            nextDay: '[moarn om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[juster om] LT',
            lastWeek: '[ôfrûne] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'oer %s',
            past : '%s lyn',
            s : 'in pear sekonden',
            ss : '%d sekonden',
            m : 'ien minút',
            mm : '%d minuten',
            h : 'ien oere',
            hh : '%d oeren',
            d : 'ien dei',
            dd : '%d dagen',
            M : 'ien moanne',
            MM : '%d moannen',
            y : 'ien jier',
            yy : '%d jierren'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal : function (number) {
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return fy;

})));


/***/ }),

/***/ "./node_modules/moment/locale/gd.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var months = [
        'Am Faoilleach', 'An Gearran', 'Am Màrt', 'An Giblean', 'An Cèitean', 'An t-Ògmhios', 'An t-Iuchar', 'An Lùnastal', 'An t-Sultain', 'An Dàmhair', 'An t-Samhain', 'An Dùbhlachd'
    ];

    var monthsShort = ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh'];

    var weekdays = ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne'];

    var weekdaysShort = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'];

    var weekdaysMin = ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'];

    var gd = moment.defineLocale('gd', {
        months : months,
        monthsShort : monthsShort,
        monthsParseExact : true,
        weekdays : weekdays,
        weekdaysShort : weekdaysShort,
        weekdaysMin : weekdaysMin,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[An-diugh aig] LT',
            nextDay : '[A-màireach aig] LT',
            nextWeek : 'dddd [aig] LT',
            lastDay : '[An-dè aig] LT',
            lastWeek : 'dddd [seo chaidh] [aig] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'ann an %s',
            past : 'bho chionn %s',
            s : 'beagan diogan',
            ss : '%d diogan',
            m : 'mionaid',
            mm : '%d mionaidean',
            h : 'uair',
            hh : '%d uairean',
            d : 'latha',
            dd : '%d latha',
            M : 'mìos',
            MM : '%d mìosan',
            y : 'bliadhna',
            yy : '%d bliadhna'
        },
        dayOfMonthOrdinalParse : /\d{1,2}(d|na|mh)/,
        ordinal : function (number) {
            var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return gd;

})));


/***/ }),

/***/ "./node_modules/moment/locale/gl.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var gl = moment.defineLocale('gl', {
        months : 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
        monthsShort : 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays : 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
        weekdaysShort : 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
        weekdaysMin : 'do_lu_ma_mé_xo_ve_sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY H:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        calendar : {
            sameDay : function () {
                return '[hoxe ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
            },
            nextDay : function () {
                return '[mañá ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
            },
            lastDay : function () {
                return '[onte ' + ((this.hours() !== 1) ? 'á' : 'a') + '] LT';
            },
            lastWeek : function () {
                return '[o] dddd [pasado ' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : function (str) {
                if (str.indexOf('un') === 0) {
                    return 'n' + str;
                }
                return 'en ' + str;
            },
            past : 'hai %s',
            s : 'uns segundos',
            ss : '%d segundos',
            m : 'un minuto',
            mm : '%d minutos',
            h : 'unha hora',
            hh : '%d horas',
            d : 'un día',
            dd : '%d días',
            M : 'un mes',
            MM : '%d meses',
            y : 'un ano',
            yy : '%d anos'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal : '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return gl;

})));


/***/ }),

/***/ "./node_modules/moment/locale/gom-latn.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            's': ['thodde secondanim', 'thodde second'],
            'ss': [number + ' secondanim', number + ' second'],
            'm': ['eka mintan', 'ek minute'],
            'mm': [number + ' mintanim', number + ' mintam'],
            'h': ['eka horan', 'ek hor'],
            'hh': [number + ' horanim', number + ' horam'],
            'd': ['eka disan', 'ek dis'],
            'dd': [number + ' disanim', number + ' dis'],
            'M': ['eka mhoinean', 'ek mhoino'],
            'MM': [number + ' mhoineanim', number + ' mhoine'],
            'y': ['eka vorsan', 'ek voros'],
            'yy': [number + ' vorsanim', number + ' vorsam']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }

    var gomLatn = moment.defineLocale('gom-latn', {
        months : 'Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr'.split('_'),
        monthsShort : 'Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.'.split('_'),
        monthsParseExact : true,
        weekdays : 'Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son\'var'.split('_'),
        weekdaysShort : 'Ait._Som._Mon._Bud._Bre._Suk._Son.'.split('_'),
        weekdaysMin : 'Ai_Sm_Mo_Bu_Br_Su_Sn'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'A h:mm [vazta]',
            LTS : 'A h:mm:ss [vazta]',
            L : 'DD-MM-YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY A h:mm [vazta]',
            LLLL : 'dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]',
            llll: 'ddd, D MMM YYYY, A h:mm [vazta]'
        },
        calendar : {
            sameDay: '[Aiz] LT',
            nextDay: '[Faleam] LT',
            nextWeek: '[Ieta to] dddd[,] LT',
            lastDay: '[Kal] LT',
            lastWeek: '[Fatlo] dddd[,] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : '%s',
            past : '%s adim',
            s : processRelativeTime,
            ss : processRelativeTime,
            m : processRelativeTime,
            mm : processRelativeTime,
            h : processRelativeTime,
            hh : processRelativeTime,
            d : processRelativeTime,
            dd : processRelativeTime,
            M : processRelativeTime,
            MM : processRelativeTime,
            y : processRelativeTime,
            yy : processRelativeTime
        },
        dayOfMonthOrdinalParse : /\d{1,2}(er)/,
        ordinal : function (number, period) {
            switch (period) {
                // the ordinal 'er' only applies to day of the month
                case 'D':
                    return number + 'er';
                default:
                case 'M':
                case 'Q':
                case 'DDD':
                case 'd':
                case 'w':
                case 'W':
                    return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        },
        meridiemParse: /rati|sokalli|donparam|sanje/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'rati') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'sokalli') {
                return hour;
            } else if (meridiem === 'donparam') {
                return hour > 12 ? hour : hour + 12;
            } else if (meridiem === 'sanje') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'rati';
            } else if (hour < 12) {
                return 'sokalli';
            } else if (hour < 16) {
                return 'donparam';
            } else if (hour < 20) {
                return 'sanje';
            } else {
                return 'rati';
            }
        }
    });

    return gomLatn;

})));


/***/ }),

/***/ "./node_modules/moment/locale/gu.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
            '1': '૧',
            '2': '૨',
            '3': '૩',
            '4': '૪',
            '5': '૫',
            '6': '૬',
            '7': '૭',
            '8': '૮',
            '9': '૯',
            '0': '૦'
        },
        numberMap = {
            '૧': '1',
            '૨': '2',
            '૩': '3',
            '૪': '4',
            '૫': '5',
            '૬': '6',
            '૭': '7',
            '૮': '8',
            '૯': '9',
            '૦': '0'
        };

    var gu = moment.defineLocale('gu', {
        months: 'જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર'.split('_'),
        monthsShort: 'જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.'.split('_'),
        monthsParseExact: true,
        weekdays: 'રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર'.split('_'),
        weekdaysShort: 'રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ'.split('_'),
        weekdaysMin: 'ર_સો_મં_બુ_ગુ_શુ_શ'.split('_'),
        longDateFormat: {
            LT: 'A h:mm વાગ્યે',
            LTS: 'A h:mm:ss વાગ્યે',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm વાગ્યે',
            LLLL: 'dddd, D MMMM YYYY, A h:mm વાગ્યે'
        },
        calendar: {
            sameDay: '[આજ] LT',
            nextDay: '[કાલે] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[ગઇકાલે] LT',
            lastWeek: '[પાછલા] dddd, LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s મા',
            past: '%s પેહલા',
            s: 'અમુક પળો',
            ss: '%d સેકંડ',
            m: 'એક મિનિટ',
            mm: '%d મિનિટ',
            h: 'એક કલાક',
            hh: '%d કલાક',
            d: 'એક દિવસ',
            dd: '%d દિવસ',
            M: 'એક મહિનો',
            MM: '%d મહિનો',
            y: 'એક વર્ષ',
            yy: '%d વર્ષ'
        },
        preparse: function (string) {
            return string.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        // Gujarati notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Gujarati.
        meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'રાત') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'સવાર') {
                return hour;
            } else if (meridiem === 'બપોર') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'સાંજ') {
                return hour + 12;
            }
        },
        meridiem: function (hour, minute, isLower) {
            if (hour < 4) {
                return 'રાત';
            } else if (hour < 10) {
                return 'સવાર';
            } else if (hour < 17) {
                return 'બપોર';
            } else if (hour < 20) {
                return 'સાંજ';
            } else {
                return 'રાત';
            }
        },
        week: {
            dow: 0, // Sunday is the first day of the week.
            doy: 6 // The week that contains Jan 1st is the first week of the year.
        }
    });

    return gu;

})));


/***/ }),

/***/ "./node_modules/moment/locale/he.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var he = moment.defineLocale('he', {
        months : 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
        monthsShort : 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
        weekdays : 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
        weekdaysShort : 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
        weekdaysMin : 'א_ב_ג_ד_ה_ו_ש'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [ב]MMMM YYYY',
            LLL : 'D [ב]MMMM YYYY HH:mm',
            LLLL : 'dddd, D [ב]MMMM YYYY HH:mm',
            l : 'D/M/YYYY',
            ll : 'D MMM YYYY',
            lll : 'D MMM YYYY HH:mm',
            llll : 'ddd, D MMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[היום ב־]LT',
            nextDay : '[מחר ב־]LT',
            nextWeek : 'dddd [בשעה] LT',
            lastDay : '[אתמול ב־]LT',
            lastWeek : '[ביום] dddd [האחרון בשעה] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'בעוד %s',
            past : 'לפני %s',
            s : 'מספר שניות',
            ss : '%d שניות',
            m : 'דקה',
            mm : '%d דקות',
            h : 'שעה',
            hh : function (number) {
                if (number === 2) {
                    return 'שעתיים';
                }
                return number + ' שעות';
            },
            d : 'יום',
            dd : function (number) {
                if (number === 2) {
                    return 'יומיים';
                }
                return number + ' ימים';
            },
            M : 'חודש',
            MM : function (number) {
                if (number === 2) {
                    return 'חודשיים';
                }
                return number + ' חודשים';
            },
            y : 'שנה',
            yy : function (number) {
                if (number === 2) {
                    return 'שנתיים';
                } else if (number % 10 === 0 && number !== 10) {
                    return number + ' שנה';
                }
                return number + ' שנים';
            }
        },
        meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
        isPM : function (input) {
            return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 5) {
                return 'לפנות בוקר';
            } else if (hour < 10) {
                return 'בבוקר';
            } else if (hour < 12) {
                return isLower ? 'לפנה"צ' : 'לפני הצהריים';
            } else if (hour < 18) {
                return isLower ? 'אחה"צ' : 'אחרי הצהריים';
            } else {
                return 'בערב';
            }
        }
    });

    return he;

})));


/***/ }),

/***/ "./node_modules/moment/locale/hi.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        '0': '०'
    },
    numberMap = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
    };

    var hi = moment.defineLocale('hi', {
        months : 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
        monthsShort : 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
        monthsParseExact: true,
        weekdays : 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort : 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat : {
            LT : 'A h:mm बजे',
            LTS : 'A h:mm:ss बजे',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm बजे',
            LLLL : 'dddd, D MMMM YYYY, A h:mm बजे'
        },
        calendar : {
            sameDay : '[आज] LT',
            nextDay : '[कल] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[कल] LT',
            lastWeek : '[पिछले] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s में',
            past : '%s पहले',
            s : 'कुछ ही क्षण',
            ss : '%d सेकंड',
            m : 'एक मिनट',
            mm : '%d मिनट',
            h : 'एक घंटा',
            hh : '%d घंटे',
            d : 'एक दिन',
            dd : '%d दिन',
            M : 'एक महीने',
            MM : '%d महीने',
            y : 'एक वर्ष',
            yy : '%d वर्ष'
        },
        preparse: function (string) {
            return string.replace(/[१२३४५६७८९०]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        // Hindi notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'रात') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'सुबह') {
                return hour;
            } else if (meridiem === 'दोपहर') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'शाम') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'रात';
            } else if (hour < 10) {
                return 'सुबह';
            } else if (hour < 17) {
                return 'दोपहर';
            } else if (hour < 20) {
                return 'शाम';
            } else {
                return 'रात';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return hi;

})));


/***/ }),

/***/ "./node_modules/moment/locale/hr.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function translate(number, withoutSuffix, key) {
        var result = number + ' ';
        switch (key) {
            case 'ss':
                if (number === 1) {
                    result += 'sekunda';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'sekunde';
                } else {
                    result += 'sekundi';
                }
                return result;
            case 'm':
                return withoutSuffix ? 'jedna minuta' : 'jedne minute';
            case 'mm':
                if (number === 1) {
                    result += 'minuta';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'minute';
                } else {
                    result += 'minuta';
                }
                return result;
            case 'h':
                return withoutSuffix ? 'jedan sat' : 'jednog sata';
            case 'hh':
                if (number === 1) {
                    result += 'sat';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'sata';
                } else {
                    result += 'sati';
                }
                return result;
            case 'dd':
                if (number === 1) {
                    result += 'dan';
                } else {
                    result += 'dana';
                }
                return result;
            case 'MM':
                if (number === 1) {
                    result += 'mjesec';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'mjeseca';
                } else {
                    result += 'mjeseci';
                }
                return result;
            case 'yy':
                if (number === 1) {
                    result += 'godina';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'godine';
                } else {
                    result += 'godina';
                }
                return result;
        }
    }

    var hr = moment.defineLocale('hr', {
        months : {
            format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'),
            standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_')
        },
        monthsShort : 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
        monthsParseExact: true,
        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd, D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay  : '[danas u] LT',
            nextDay  : '[sutra u] LT',
            nextWeek : function () {
                switch (this.day()) {
                    case 0:
                        return '[u] [nedjelju] [u] LT';
                    case 3:
                        return '[u] [srijedu] [u] LT';
                    case 6:
                        return '[u] [subotu] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[u] dddd [u] LT';
                }
            },
            lastDay  : '[jučer u] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                        return '[prošlu] dddd [u] LT';
                    case 6:
                        return '[prošle] [subote] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[prošli] dddd [u] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'za %s',
            past   : 'prije %s',
            s      : 'par sekundi',
            ss     : translate,
            m      : translate,
            mm     : translate,
            h      : translate,
            hh     : translate,
            d      : 'dan',
            dd     : translate,
            M      : 'mjesec',
            MM     : translate,
            y      : 'godinu',
            yy     : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return hr;

})));


/***/ }),

/***/ "./node_modules/moment/locale/hu.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
    function translate(number, withoutSuffix, key, isFuture) {
        var num = number;
        switch (key) {
            case 's':
                return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
            case 'ss':
                return num + (isFuture || withoutSuffix) ? ' másodperc' : ' másodperce';
            case 'm':
                return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
            case 'mm':
                return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
            case 'h':
                return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
            case 'hh':
                return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
            case 'd':
                return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
            case 'dd':
                return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
            case 'M':
                return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
            case 'MM':
                return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
            case 'y':
                return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
            case 'yy':
                return num + (isFuture || withoutSuffix ? ' év' : ' éve');
        }
        return '';
    }
    function week(isFuture) {
        return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
    }

    var hu = moment.defineLocale('hu', {
        months : 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
        monthsShort : 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
        weekdays : 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
        weekdaysShort : 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
        weekdaysMin : 'v_h_k_sze_cs_p_szo'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'YYYY.MM.DD.',
            LL : 'YYYY. MMMM D.',
            LLL : 'YYYY. MMMM D. H:mm',
            LLLL : 'YYYY. MMMM D., dddd H:mm'
        },
        meridiemParse: /de|du/i,
        isPM: function (input) {
            return input.charAt(1).toLowerCase() === 'u';
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 12) {
                return isLower === true ? 'de' : 'DE';
            } else {
                return isLower === true ? 'du' : 'DU';
            }
        },
        calendar : {
            sameDay : '[ma] LT[-kor]',
            nextDay : '[holnap] LT[-kor]',
            nextWeek : function () {
                return week.call(this, true);
            },
            lastDay : '[tegnap] LT[-kor]',
            lastWeek : function () {
                return week.call(this, false);
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s múlva',
            past : '%s',
            s : translate,
            ss : translate,
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : translate,
            dd : translate,
            M : translate,
            MM : translate,
            y : translate,
            yy : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return hu;

})));


/***/ }),

/***/ "./node_modules/moment/locale/hy-am.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var hyAm = moment.defineLocale('hy-am', {
        months : {
            format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_'),
            standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_')
        },
        monthsShort : 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
        weekdays : 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
        weekdaysShort : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
        weekdaysMin : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY թ.',
            LLL : 'D MMMM YYYY թ., HH:mm',
            LLLL : 'dddd, D MMMM YYYY թ., HH:mm'
        },
        calendar : {
            sameDay: '[այսօր] LT',
            nextDay: '[վաղը] LT',
            lastDay: '[երեկ] LT',
            nextWeek: function () {
                return 'dddd [օրը ժամը] LT';
            },
            lastWeek: function () {
                return '[անցած] dddd [օրը ժամը] LT';
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : '%s հետո',
            past : '%s առաջ',
            s : 'մի քանի վայրկյան',
            ss : '%d վայրկյան',
            m : 'րոպե',
            mm : '%d րոպե',
            h : 'ժամ',
            hh : '%d ժամ',
            d : 'օր',
            dd : '%d օր',
            M : 'ամիս',
            MM : '%d ամիս',
            y : 'տարի',
            yy : '%d տարի'
        },
        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
        isPM: function (input) {
            return /^(ցերեկվա|երեկոյան)$/.test(input);
        },
        meridiem : function (hour) {
            if (hour < 4) {
                return 'գիշերվա';
            } else if (hour < 12) {
                return 'առավոտվա';
            } else if (hour < 17) {
                return 'ցերեկվա';
            } else {
                return 'երեկոյան';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'DDD':
                case 'w':
                case 'W':
                case 'DDDo':
                    if (number === 1) {
                        return number + '-ին';
                    }
                    return number + '-րդ';
                default:
                    return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return hyAm;

})));


/***/ }),

/***/ "./node_modules/moment/locale/id.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var id = moment.defineLocale('id', {
        months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des'.split('_'),
        weekdays : 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
        weekdaysShort : 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
        weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [pukul] HH.mm',
            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'pagi') {
                return hour;
            } else if (meridiem === 'siang') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'sore' || meridiem === 'malam') {
                return hour + 12;
            }
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'pagi';
            } else if (hours < 15) {
                return 'siang';
            } else if (hours < 19) {
                return 'sore';
            } else {
                return 'malam';
            }
        },
        calendar : {
            sameDay : '[Hari ini pukul] LT',
            nextDay : '[Besok pukul] LT',
            nextWeek : 'dddd [pukul] LT',
            lastDay : '[Kemarin pukul] LT',
            lastWeek : 'dddd [lalu pukul] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dalam %s',
            past : '%s yang lalu',
            s : 'beberapa detik',
            ss : '%d detik',
            m : 'semenit',
            mm : '%d menit',
            h : 'sejam',
            hh : '%d jam',
            d : 'sehari',
            dd : '%d hari',
            M : 'sebulan',
            MM : '%d bulan',
            y : 'setahun',
            yy : '%d tahun'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return id;

})));


/***/ }),

/***/ "./node_modules/moment/locale/is.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function plural(n) {
        if (n % 100 === 11) {
            return true;
        } else if (n % 10 === 1) {
            return false;
        }
        return true;
    }
    function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
            case 's':
                return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
            case 'ss':
                if (plural(number)) {
                    return result + (withoutSuffix || isFuture ? 'sekúndur' : 'sekúndum');
                }
                return result + 'sekúnda';
            case 'm':
                return withoutSuffix ? 'mínúta' : 'mínútu';
            case 'mm':
                if (plural(number)) {
                    return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
                } else if (withoutSuffix) {
                    return result + 'mínúta';
                }
                return result + 'mínútu';
            case 'hh':
                if (plural(number)) {
                    return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
                }
                return result + 'klukkustund';
            case 'd':
                if (withoutSuffix) {
                    return 'dagur';
                }
                return isFuture ? 'dag' : 'degi';
            case 'dd':
                if (plural(number)) {
                    if (withoutSuffix) {
                        return result + 'dagar';
                    }
                    return result + (isFuture ? 'daga' : 'dögum');
                } else if (withoutSuffix) {
                    return result + 'dagur';
                }
                return result + (isFuture ? 'dag' : 'degi');
            case 'M':
                if (withoutSuffix) {
                    return 'mánuður';
                }
                return isFuture ? 'mánuð' : 'mánuði';
            case 'MM':
                if (plural(number)) {
                    if (withoutSuffix) {
                        return result + 'mánuðir';
                    }
                    return result + (isFuture ? 'mánuði' : 'mánuðum');
                } else if (withoutSuffix) {
                    return result + 'mánuður';
                }
                return result + (isFuture ? 'mánuð' : 'mánuði');
            case 'y':
                return withoutSuffix || isFuture ? 'ár' : 'ári';
            case 'yy':
                if (plural(number)) {
                    return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
                }
                return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
        }
    }

    var is = moment.defineLocale('is', {
        months : 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
        weekdays : 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
        weekdaysShort : 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
        weekdaysMin : 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY [kl.] H:mm',
            LLLL : 'dddd, D. MMMM YYYY [kl.] H:mm'
        },
        calendar : {
            sameDay : '[í dag kl.] LT',
            nextDay : '[á morgun kl.] LT',
            nextWeek : 'dddd [kl.] LT',
            lastDay : '[í gær kl.] LT',
            lastWeek : '[síðasta] dddd [kl.] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'eftir %s',
            past : 'fyrir %s síðan',
            s : translate,
            ss : translate,
            m : translate,
            mm : translate,
            h : 'klukkustund',
            hh : translate,
            d : translate,
            dd : translate,
            M : translate,
            MM : translate,
            y : translate,
            yy : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return is;

})));


/***/ }),

/***/ "./node_modules/moment/locale/it.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var it = moment.defineLocale('it', {
        months : 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort : 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays : 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
        weekdaysShort : 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
        weekdaysMin : 'do_lu_ma_me_gi_ve_sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Oggi alle] LT',
            nextDay: '[Domani alle] LT',
            nextWeek: 'dddd [alle] LT',
            lastDay: '[Ieri alle] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[la scorsa] dddd [alle] LT';
                    default:
                        return '[lo scorso] dddd [alle] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : function (s) {
                return ((/^[0-9].+$/).test(s) ? 'tra' : 'in') + ' ' + s;
            },
            past : '%s fa',
            s : 'alcuni secondi',
            ss : '%d secondi',
            m : 'un minuto',
            mm : '%d minuti',
            h : 'un\'ora',
            hh : '%d ore',
            d : 'un giorno',
            dd : '%d giorni',
            M : 'un mese',
            MM : '%d mesi',
            y : 'un anno',
            yy : '%d anni'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal: '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return it;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ja.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var ja = moment.defineLocale('ja', {
        months : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays : '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
        weekdaysShort : '日_月_火_水_木_金_土'.split('_'),
        weekdaysMin : '日_月_火_水_木_金_土'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY/MM/DD',
            LL : 'YYYY年M月D日',
            LLL : 'YYYY年M月D日 HH:mm',
            LLLL : 'YYYY年M月D日 dddd HH:mm',
            l : 'YYYY/MM/DD',
            ll : 'YYYY年M月D日',
            lll : 'YYYY年M月D日 HH:mm',
            llll : 'YYYY年M月D日(ddd) HH:mm'
        },
        meridiemParse: /午前|午後/i,
        isPM : function (input) {
            return input === '午後';
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return '午前';
            } else {
                return '午後';
            }
        },
        calendar : {
            sameDay : '[今日] LT',
            nextDay : '[明日] LT',
            nextWeek : function (now) {
                if (now.week() < this.week()) {
                    return '[来週]dddd LT';
                } else {
                    return 'dddd LT';
                }
            },
            lastDay : '[昨日] LT',
            lastWeek : function (now) {
                if (this.week() < now.week()) {
                    return '[先週]dddd LT';
                } else {
                    return 'dddd LT';
                }
            },
            sameElse : 'L'
        },
        dayOfMonthOrdinalParse : /\d{1,2}日/,
        ordinal : function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return number + '日';
                default:
                    return number;
            }
        },
        relativeTime : {
            future : '%s後',
            past : '%s前',
            s : '数秒',
            ss : '%d秒',
            m : '1分',
            mm : '%d分',
            h : '1時間',
            hh : '%d時間',
            d : '1日',
            dd : '%d日',
            M : '1ヶ月',
            MM : '%dヶ月',
            y : '1年',
            yy : '%d年'
        }
    });

    return ja;

})));


/***/ }),

/***/ "./node_modules/moment/locale/jv.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var jv = moment.defineLocale('jv', {
        months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
        weekdays : 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
        weekdaysShort : 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
        weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [pukul] HH.mm',
            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'enjing') {
                return hour;
            } else if (meridiem === 'siyang') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'sonten' || meridiem === 'ndalu') {
                return hour + 12;
            }
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'enjing';
            } else if (hours < 15) {
                return 'siyang';
            } else if (hours < 19) {
                return 'sonten';
            } else {
                return 'ndalu';
            }
        },
        calendar : {
            sameDay : '[Dinten puniko pukul] LT',
            nextDay : '[Mbenjang pukul] LT',
            nextWeek : 'dddd [pukul] LT',
            lastDay : '[Kala wingi pukul] LT',
            lastWeek : 'dddd [kepengker pukul] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'wonten ing %s',
            past : '%s ingkang kepengker',
            s : 'sawetawis detik',
            ss : '%d detik',
            m : 'setunggal menit',
            mm : '%d menit',
            h : 'setunggal jam',
            hh : '%d jam',
            d : 'sedinten',
            dd : '%d dinten',
            M : 'sewulan',
            MM : '%d wulan',
            y : 'setaun',
            yy : '%d taun'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return jv;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ka.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var ka = moment.defineLocale('ka', {
        months : {
            standalone: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
            format: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
        },
        monthsShort : 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
        weekdays : {
            standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
            format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
            isFormat: /(წინა|შემდეგ)/
        },
        weekdaysShort : 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
        weekdaysMin : 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendar : {
            sameDay : '[დღეს] LT[-ზე]',
            nextDay : '[ხვალ] LT[-ზე]',
            lastDay : '[გუშინ] LT[-ზე]',
            nextWeek : '[შემდეგ] dddd LT[-ზე]',
            lastWeek : '[წინა] dddd LT-ზე',
            sameElse : 'L'
        },
        relativeTime : {
            future : function (s) {
                return (/(წამი|წუთი|საათი|წელი)/).test(s) ?
                    s.replace(/ი$/, 'ში') :
                    s + 'ში';
            },
            past : function (s) {
                if ((/(წამი|წუთი|საათი|დღე|თვე)/).test(s)) {
                    return s.replace(/(ი|ე)$/, 'ის წინ');
                }
                if ((/წელი/).test(s)) {
                    return s.replace(/წელი$/, 'წლის წინ');
                }
            },
            s : 'რამდენიმე წამი',
            ss : '%d წამი',
            m : 'წუთი',
            mm : '%d წუთი',
            h : 'საათი',
            hh : '%d საათი',
            d : 'დღე',
            dd : '%d დღე',
            M : 'თვე',
            MM : '%d თვე',
            y : 'წელი',
            yy : '%d წელი'
        },
        dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
        ordinal : function (number) {
            if (number === 0) {
                return number;
            }
            if (number === 1) {
                return number + '-ლი';
            }
            if ((number < 20) || (number <= 100 && (number % 20 === 0)) || (number % 100 === 0)) {
                return 'მე-' + number;
            }
            return number + '-ე';
        },
        week : {
            dow : 1,
            doy : 7
        }
    });

    return ka;

})));


/***/ }),

/***/ "./node_modules/moment/locale/kk.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var suffixes = {
        0: '-ші',
        1: '-ші',
        2: '-ші',
        3: '-ші',
        4: '-ші',
        5: '-ші',
        6: '-шы',
        7: '-ші',
        8: '-ші',
        9: '-шы',
        10: '-шы',
        20: '-шы',
        30: '-шы',
        40: '-шы',
        50: '-ші',
        60: '-шы',
        70: '-ші',
        80: '-ші',
        90: '-шы',
        100: '-ші'
    };

    var kk = moment.defineLocale('kk', {
        months : 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
        monthsShort : 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
        weekdays : 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
        weekdaysShort : 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
        weekdaysMin : 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Бүгін сағат] LT',
            nextDay : '[Ертең сағат] LT',
            nextWeek : 'dddd [сағат] LT',
            lastDay : '[Кеше сағат] LT',
            lastWeek : '[Өткен аптаның] dddd [сағат] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ішінде',
            past : '%s бұрын',
            s : 'бірнеше секунд',
            ss : '%d секунд',
            m : 'бір минут',
            mm : '%d минут',
            h : 'бір сағат',
            hh : '%d сағат',
            d : 'бір күн',
            dd : '%d күн',
            M : 'бір ай',
            MM : '%d ай',
            y : 'бір жыл',
            yy : '%d жыл'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
        ordinal : function (number) {
            var a = number % 10,
                b = number >= 100 ? 100 : null;
            return number + (suffixes[number] || suffixes[a] || suffixes[b]);
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return kk;

})));


/***/ }),

/***/ "./node_modules/moment/locale/km.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '១',
        '2': '២',
        '3': '៣',
        '4': '៤',
        '5': '៥',
        '6': '៦',
        '7': '៧',
        '8': '៨',
        '9': '៩',
        '0': '០'
    }, numberMap = {
        '១': '1',
        '២': '2',
        '៣': '3',
        '៤': '4',
        '៥': '5',
        '៦': '6',
        '៧': '7',
        '៨': '8',
        '៩': '9',
        '០': '0'
    };

    var km = moment.defineLocale('km', {
        months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split(
            '_'
        ),
        monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split(
            '_'
        ),
        weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
        weekdaysShort: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
        weekdaysMin: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /ព្រឹក|ល្ងាច/,
        isPM: function (input) {
            return input === 'ល្ងាច';
        },
        meridiem: function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ព្រឹក';
            } else {
                return 'ល្ងាច';
            }
        },
        calendar: {
            sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
            nextDay: '[ស្អែក ម៉ោង] LT',
            nextWeek: 'dddd [ម៉ោង] LT',
            lastDay: '[ម្សិលមិញ ម៉ោង] LT',
            lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%sទៀត',
            past: '%sមុន',
            s: 'ប៉ុន្មានវិនាទី',
            ss: '%d វិនាទី',
            m: 'មួយនាទី',
            mm: '%d នាទី',
            h: 'មួយម៉ោង',
            hh: '%d ម៉ោង',
            d: 'មួយថ្ងៃ',
            dd: '%d ថ្ងៃ',
            M: 'មួយខែ',
            MM: '%d ខែ',
            y: 'មួយឆ្នាំ',
            yy: '%d ឆ្នាំ'
        },
        dayOfMonthOrdinalParse : /ទី\d{1,2}/,
        ordinal : 'ទី%d',
        preparse: function (string) {
            return string.replace(/[១២៣៤៥៦៧៨៩០]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    });

    return km;

})));


/***/ }),

/***/ "./node_modules/moment/locale/kn.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '೧',
        '2': '೨',
        '3': '೩',
        '4': '೪',
        '5': '೫',
        '6': '೬',
        '7': '೭',
        '8': '೮',
        '9': '೯',
        '0': '೦'
    },
    numberMap = {
        '೧': '1',
        '೨': '2',
        '೩': '3',
        '೪': '4',
        '೫': '5',
        '೬': '6',
        '೭': '7',
        '೮': '8',
        '೯': '9',
        '೦': '0'
    };

    var kn = moment.defineLocale('kn', {
        months : 'ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್'.split('_'),
        monthsShort : 'ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ'.split('_'),
        monthsParseExact: true,
        weekdays : 'ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ'.split('_'),
        weekdaysShort : 'ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ'.split('_'),
        weekdaysMin : 'ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ'.split('_'),
        longDateFormat : {
            LT : 'A h:mm',
            LTS : 'A h:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm',
            LLLL : 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar : {
            sameDay : '[ಇಂದು] LT',
            nextDay : '[ನಾಳೆ] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[ನಿನ್ನೆ] LT',
            lastWeek : '[ಕೊನೆಯ] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ನಂತರ',
            past : '%s ಹಿಂದೆ',
            s : 'ಕೆಲವು ಕ್ಷಣಗಳು',
            ss : '%d ಸೆಕೆಂಡುಗಳು',
            m : 'ಒಂದು ನಿಮಿಷ',
            mm : '%d ನಿಮಿಷ',
            h : 'ಒಂದು ಗಂಟೆ',
            hh : '%d ಗಂಟೆ',
            d : 'ಒಂದು ದಿನ',
            dd : '%d ದಿನ',
            M : 'ಒಂದು ತಿಂಗಳು',
            MM : '%d ತಿಂಗಳು',
            y : 'ಒಂದು ವರ್ಷ',
            yy : '%d ವರ್ಷ'
        },
        preparse: function (string) {
            return string.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'ರಾತ್ರಿ') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'ಬೆಳಿಗ್ಗೆ') {
                return hour;
            } else if (meridiem === 'ಮಧ್ಯಾಹ್ನ') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'ಸಂಜೆ') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'ರಾತ್ರಿ';
            } else if (hour < 10) {
                return 'ಬೆಳಿಗ್ಗೆ';
            } else if (hour < 17) {
                return 'ಮಧ್ಯಾಹ್ನ';
            } else if (hour < 20) {
                return 'ಸಂಜೆ';
            } else {
                return 'ರಾತ್ರಿ';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
        ordinal : function (number) {
            return number + 'ನೇ';
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return kn;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ko.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var ko = moment.defineLocale('ko', {
        months : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        monthsShort : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        weekdays : '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
        weekdaysShort : '일_월_화_수_목_금_토'.split('_'),
        weekdaysMin : '일_월_화_수_목_금_토'.split('_'),
        longDateFormat : {
            LT : 'A h:mm',
            LTS : 'A h:mm:ss',
            L : 'YYYY.MM.DD.',
            LL : 'YYYY년 MMMM D일',
            LLL : 'YYYY년 MMMM D일 A h:mm',
            LLLL : 'YYYY년 MMMM D일 dddd A h:mm',
            l : 'YYYY.MM.DD.',
            ll : 'YYYY년 MMMM D일',
            lll : 'YYYY년 MMMM D일 A h:mm',
            llll : 'YYYY년 MMMM D일 dddd A h:mm'
        },
        calendar : {
            sameDay : '오늘 LT',
            nextDay : '내일 LT',
            nextWeek : 'dddd LT',
            lastDay : '어제 LT',
            lastWeek : '지난주 dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s 후',
            past : '%s 전',
            s : '몇 초',
            ss : '%d초',
            m : '1분',
            mm : '%d분',
            h : '한 시간',
            hh : '%d시간',
            d : '하루',
            dd : '%d일',
            M : '한 달',
            MM : '%d달',
            y : '일 년',
            yy : '%d년'
        },
        dayOfMonthOrdinalParse : /\d{1,2}(일|월|주)/,
        ordinal : function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return number + '일';
                case 'M':
                    return number + '월';
                case 'w':
                case 'W':
                    return number + '주';
                default:
                    return number;
            }
        },
        meridiemParse : /오전|오후/,
        isPM : function (token) {
            return token === '오후';
        },
        meridiem : function (hour, minute, isUpper) {
            return hour < 12 ? '오전' : '오후';
        }
    });

    return ko;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ky.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var suffixes = {
        0: '-чү',
        1: '-чи',
        2: '-чи',
        3: '-чү',
        4: '-чү',
        5: '-чи',
        6: '-чы',
        7: '-чи',
        8: '-чи',
        9: '-чу',
        10: '-чу',
        20: '-чы',
        30: '-чу',
        40: '-чы',
        50: '-чү',
        60: '-чы',
        70: '-чи',
        80: '-чи',
        90: '-чу',
        100: '-чү'
    };

    var ky = moment.defineLocale('ky', {
        months : 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
        monthsShort : 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
        weekdays : 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
        weekdaysShort : 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
        weekdaysMin : 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Бүгүн саат] LT',
            nextDay : '[Эртең саат] LT',
            nextWeek : 'dddd [саат] LT',
            lastDay : '[Кече саат] LT',
            lastWeek : '[Өткен аптанын] dddd [күнү] [саат] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ичинде',
            past : '%s мурун',
            s : 'бирнече секунд',
            ss : '%d секунд',
            m : 'бир мүнөт',
            mm : '%d мүнөт',
            h : 'бир саат',
            hh : '%d саат',
            d : 'бир күн',
            dd : '%d күн',
            M : 'бир ай',
            MM : '%d ай',
            y : 'бир жыл',
            yy : '%d жыл'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
        ordinal : function (number) {
            var a = number % 10,
                b = number >= 100 ? 100 : null;
            return number + (suffixes[number] || suffixes[a] || suffixes[b]);
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return ky;

})));


/***/ }),

/***/ "./node_modules/moment/locale/lb.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            'm': ['eng Minutt', 'enger Minutt'],
            'h': ['eng Stonn', 'enger Stonn'],
            'd': ['een Dag', 'engem Dag'],
            'M': ['ee Mount', 'engem Mount'],
            'y': ['ee Joer', 'engem Joer']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }
    function processFutureTime(string) {
        var number = string.substr(0, string.indexOf(' '));
        if (eifelerRegelAppliesToNumber(number)) {
            return 'a ' + string;
        }
        return 'an ' + string;
    }
    function processPastTime(string) {
        var number = string.substr(0, string.indexOf(' '));
        if (eifelerRegelAppliesToNumber(number)) {
            return 'viru ' + string;
        }
        return 'virun ' + string;
    }
    /**
     * Returns true if the word before the given number loses the '-n' ending.
     * e.g. 'an 10 Deeg' but 'a 5 Deeg'
     *
     * @param number {integer}
     * @returns {boolean}
     */
    function eifelerRegelAppliesToNumber(number) {
        number = parseInt(number, 10);
        if (isNaN(number)) {
            return false;
        }
        if (number < 0) {
            // Negative Number --> always true
            return true;
        } else if (number < 10) {
            // Only 1 digit
            if (4 <= number && number <= 7) {
                return true;
            }
            return false;
        } else if (number < 100) {
            // 2 digits
            var lastDigit = number % 10, firstDigit = number / 10;
            if (lastDigit === 0) {
                return eifelerRegelAppliesToNumber(firstDigit);
            }
            return eifelerRegelAppliesToNumber(lastDigit);
        } else if (number < 10000) {
            // 3 or 4 digits --> recursively check first digit
            while (number >= 10) {
                number = number / 10;
            }
            return eifelerRegelAppliesToNumber(number);
        } else {
            // Anything larger than 4 digits: recursively check first n-3 digits
            number = number / 1000;
            return eifelerRegelAppliesToNumber(number);
        }
    }

    var lb = moment.defineLocale('lb', {
        months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
        monthsParseExact : true,
        weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
        weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat: {
            LT: 'H:mm [Auer]',
            LTS: 'H:mm:ss [Auer]',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm [Auer]',
            LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
        },
        calendar: {
            sameDay: '[Haut um] LT',
            sameElse: 'L',
            nextDay: '[Muer um] LT',
            nextWeek: 'dddd [um] LT',
            lastDay: '[Gëschter um] LT',
            lastWeek: function () {
                // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
                switch (this.day()) {
                    case 2:
                    case 4:
                        return '[Leschten] dddd [um] LT';
                    default:
                        return '[Leschte] dddd [um] LT';
                }
            }
        },
        relativeTime : {
            future : processFutureTime,
            past : processPastTime,
            s : 'e puer Sekonnen',
            ss : '%d Sekonnen',
            m : processRelativeTime,
            mm : '%d Minutten',
            h : processRelativeTime,
            hh : '%d Stonnen',
            d : processRelativeTime,
            dd : '%d Deeg',
            M : processRelativeTime,
            MM : '%d Méint',
            y : processRelativeTime,
            yy : '%d Joer'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return lb;

})));


/***/ }),

/***/ "./node_modules/moment/locale/lo.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var lo = moment.defineLocale('lo', {
        months : 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
        monthsShort : 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
        weekdays : 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
        weekdaysShort : 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
        weekdaysMin : 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'ວັນdddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
        isPM: function (input) {
            return input === 'ຕອນແລງ';
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ຕອນເຊົ້າ';
            } else {
                return 'ຕອນແລງ';
            }
        },
        calendar : {
            sameDay : '[ມື້ນີ້ເວລາ] LT',
            nextDay : '[ມື້ອື່ນເວລາ] LT',
            nextWeek : '[ວັນ]dddd[ໜ້າເວລາ] LT',
            lastDay : '[ມື້ວານນີ້ເວລາ] LT',
            lastWeek : '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'ອີກ %s',
            past : '%sຜ່ານມາ',
            s : 'ບໍ່ເທົ່າໃດວິນາທີ',
            ss : '%d ວິນາທີ' ,
            m : '1 ນາທີ',
            mm : '%d ນາທີ',
            h : '1 ຊົ່ວໂມງ',
            hh : '%d ຊົ່ວໂມງ',
            d : '1 ມື້',
            dd : '%d ມື້',
            M : '1 ເດືອນ',
            MM : '%d ເດືອນ',
            y : '1 ປີ',
            yy : '%d ປີ'
        },
        dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
        ordinal : function (number) {
            return 'ທີ່' + number;
        }
    });

    return lo;

})));


/***/ }),

/***/ "./node_modules/moment/locale/lt.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var units = {
        'ss' : 'sekundė_sekundžių_sekundes',
        'm' : 'minutė_minutės_minutę',
        'mm': 'minutės_minučių_minutes',
        'h' : 'valanda_valandos_valandą',
        'hh': 'valandos_valandų_valandas',
        'd' : 'diena_dienos_dieną',
        'dd': 'dienos_dienų_dienas',
        'M' : 'mėnuo_mėnesio_mėnesį',
        'MM': 'mėnesiai_mėnesių_mėnesius',
        'y' : 'metai_metų_metus',
        'yy': 'metai_metų_metus'
    };
    function translateSeconds(number, withoutSuffix, key, isFuture) {
        if (withoutSuffix) {
            return 'kelios sekundės';
        } else {
            return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
        }
    }
    function translateSingular(number, withoutSuffix, key, isFuture) {
        return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
    }
    function special(number) {
        return number % 10 === 0 || (number > 10 && number < 20);
    }
    function forms(key) {
        return units[key].split('_');
    }
    function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        if (number === 1) {
            return result + translateSingular(number, withoutSuffix, key[0], isFuture);
        } else if (withoutSuffix) {
            return result + (special(number) ? forms(key)[1] : forms(key)[0]);
        } else {
            if (isFuture) {
                return result + forms(key)[1];
            } else {
                return result + (special(number) ? forms(key)[1] : forms(key)[2]);
            }
        }
    }
    var lt = moment.defineLocale('lt', {
        months : {
            format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
            standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
            isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
        },
        monthsShort : 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
        weekdays : {
            format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
            standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
            isFormat: /dddd HH:mm/
        },
        weekdaysShort : 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
        weekdaysMin : 'S_P_A_T_K_Pn_Š'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'YYYY [m.] MMMM D [d.]',
            LLL : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            LLLL : 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
            l : 'YYYY-MM-DD',
            ll : 'YYYY [m.] MMMM D [d.]',
            lll : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            llll : 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
        },
        calendar : {
            sameDay : '[Šiandien] LT',
            nextDay : '[Rytoj] LT',
            nextWeek : 'dddd LT',
            lastDay : '[Vakar] LT',
            lastWeek : '[Praėjusį] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'po %s',
            past : 'prieš %s',
            s : translateSeconds,
            ss : translate,
            m : translateSingular,
            mm : translate,
            h : translateSingular,
            hh : translate,
            d : translateSingular,
            dd : translate,
            M : translateSingular,
            MM : translate,
            y : translateSingular,
            yy : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}-oji/,
        ordinal : function (number) {
            return number + '-oji';
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return lt;

})));


/***/ }),

/***/ "./node_modules/moment/locale/lv.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var units = {
        'ss': 'sekundes_sekundēm_sekunde_sekundes'.split('_'),
        'm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
        'mm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
        'h': 'stundas_stundām_stunda_stundas'.split('_'),
        'hh': 'stundas_stundām_stunda_stundas'.split('_'),
        'd': 'dienas_dienām_diena_dienas'.split('_'),
        'dd': 'dienas_dienām_diena_dienas'.split('_'),
        'M': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
        'MM': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
        'y': 'gada_gadiem_gads_gadi'.split('_'),
        'yy': 'gada_gadiem_gads_gadi'.split('_')
    };
    /**
     * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
     */
    function format(forms, number, withoutSuffix) {
        if (withoutSuffix) {
            // E.g. "21 minūte", "3 minūtes".
            return number % 10 === 1 && number % 100 !== 11 ? forms[2] : forms[3];
        } else {
            // E.g. "21 minūtes" as in "pēc 21 minūtes".
            // E.g. "3 minūtēm" as in "pēc 3 minūtēm".
            return number % 10 === 1 && number % 100 !== 11 ? forms[0] : forms[1];
        }
    }
    function relativeTimeWithPlural(number, withoutSuffix, key) {
        return number + ' ' + format(units[key], number, withoutSuffix);
    }
    function relativeTimeWithSingular(number, withoutSuffix, key) {
        return format(units[key], number, withoutSuffix);
    }
    function relativeSeconds(number, withoutSuffix) {
        return withoutSuffix ? 'dažas sekundes' : 'dažām sekundēm';
    }

    var lv = moment.defineLocale('lv', {
        months : 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
        weekdays : 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
        weekdaysShort : 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysMin : 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY.',
            LL : 'YYYY. [gada] D. MMMM',
            LLL : 'YYYY. [gada] D. MMMM, HH:mm',
            LLLL : 'YYYY. [gada] D. MMMM, dddd, HH:mm'
        },
        calendar : {
            sameDay : '[Šodien pulksten] LT',
            nextDay : '[Rīt pulksten] LT',
            nextWeek : 'dddd [pulksten] LT',
            lastDay : '[Vakar pulksten] LT',
            lastWeek : '[Pagājušā] dddd [pulksten] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'pēc %s',
            past : 'pirms %s',
            s : relativeSeconds,
            ss : relativeTimeWithPlural,
            m : relativeTimeWithSingular,
            mm : relativeTimeWithPlural,
            h : relativeTimeWithSingular,
            hh : relativeTimeWithPlural,
            d : relativeTimeWithSingular,
            dd : relativeTimeWithPlural,
            M : relativeTimeWithSingular,
            MM : relativeTimeWithPlural,
            y : relativeTimeWithSingular,
            yy : relativeTimeWithPlural
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return lv;

})));


/***/ }),

/***/ "./node_modules/moment/locale/me.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var translator = {
        words: { //Different grammatical cases
            ss: ['sekund', 'sekunda', 'sekundi'],
            m: ['jedan minut', 'jednog minuta'],
            mm: ['minut', 'minuta', 'minuta'],
            h: ['jedan sat', 'jednog sata'],
            hh: ['sat', 'sata', 'sati'],
            dd: ['dan', 'dana', 'dana'],
            MM: ['mjesec', 'mjeseca', 'mjeseci'],
            yy: ['godina', 'godine', 'godina']
        },
        correctGrammaticalCase: function (number, wordKey) {
            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
        },
        translate: function (number, withoutSuffix, key) {
            var wordKey = translator.words[key];
            if (key.length === 1) {
                return withoutSuffix ? wordKey[0] : wordKey[1];
            } else {
                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
            }
        }
    };

    var me = moment.defineLocale('me', {
        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact : true,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact : true,
        longDateFormat: {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sjutra u] LT',

            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[u] [nedjelju] [u] LT';
                    case 3:
                        return '[u] [srijedu] [u] LT';
                    case 6:
                        return '[u] [subotu] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[u] dddd [u] LT';
                }
            },
            lastDay  : '[juče u] LT',
            lastWeek : function () {
                var lastWeekDays = [
                    '[prošle] [nedjelje] [u] LT',
                    '[prošlog] [ponedjeljka] [u] LT',
                    '[prošlog] [utorka] [u] LT',
                    '[prošle] [srijede] [u] LT',
                    '[prošlog] [četvrtka] [u] LT',
                    '[prošlog] [petka] [u] LT',
                    '[prošle] [subote] [u] LT'
                ];
                return lastWeekDays[this.day()];
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'za %s',
            past   : 'prije %s',
            s      : 'nekoliko sekundi',
            ss     : translator.translate,
            m      : translator.translate,
            mm     : translator.translate,
            h      : translator.translate,
            hh     : translator.translate,
            d      : 'dan',
            dd     : translator.translate,
            M      : 'mjesec',
            MM     : translator.translate,
            y      : 'godinu',
            yy     : translator.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return me;

})));


/***/ }),

/***/ "./node_modules/moment/locale/mi.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var mi = moment.defineLocale('mi', {
        months: 'Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea'.split('_'),
        monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split('_'),
        monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
        weekdays: 'Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei'.split('_'),
        weekdaysShort: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
        weekdaysMin: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [i] HH:mm',
            LLLL: 'dddd, D MMMM YYYY [i] HH:mm'
        },
        calendar: {
            sameDay: '[i teie mahana, i] LT',
            nextDay: '[apopo i] LT',
            nextWeek: 'dddd [i] LT',
            lastDay: '[inanahi i] LT',
            lastWeek: 'dddd [whakamutunga i] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'i roto i %s',
            past: '%s i mua',
            s: 'te hēkona ruarua',
            ss: '%d hēkona',
            m: 'he meneti',
            mm: '%d meneti',
            h: 'te haora',
            hh: '%d haora',
            d: 'he ra',
            dd: '%d ra',
            M: 'he marama',
            MM: '%d marama',
            y: 'he tau',
            yy: '%d tau'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return mi;

})));


/***/ }),

/***/ "./node_modules/moment/locale/mk.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var mk = moment.defineLocale('mk', {
        months : 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
        monthsShort : 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
        weekdays : 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
        weekdaysShort : 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
        weekdaysMin : 'нe_пo_вт_ср_че_пе_сa'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'D.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY H:mm',
            LLLL : 'dddd, D MMMM YYYY H:mm'
        },
        calendar : {
            sameDay : '[Денес во] LT',
            nextDay : '[Утре во] LT',
            nextWeek : '[Во] dddd [во] LT',
            lastDay : '[Вчера во] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return '[Изминатата] dddd [во] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[Изминатиот] dddd [во] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'после %s',
            past : 'пред %s',
            s : 'неколку секунди',
            ss : '%d секунди',
            m : 'минута',
            mm : '%d минути',
            h : 'час',
            hh : '%d часа',
            d : 'ден',
            dd : '%d дена',
            M : 'месец',
            MM : '%d месеци',
            y : 'година',
            yy : '%d години'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal : function (number) {
            var lastDigit = number % 10,
                last2Digits = number % 100;
            if (number === 0) {
                return number + '-ев';
            } else if (last2Digits === 0) {
                return number + '-ен';
            } else if (last2Digits > 10 && last2Digits < 20) {
                return number + '-ти';
            } else if (lastDigit === 1) {
                return number + '-ви';
            } else if (lastDigit === 2) {
                return number + '-ри';
            } else if (lastDigit === 7 || lastDigit === 8) {
                return number + '-ми';
            } else {
                return number + '-ти';
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return mk;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ml.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var ml = moment.defineLocale('ml', {
        months : 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
        monthsShort : 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
        monthsParseExact : true,
        weekdays : 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
        weekdaysShort : 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
        weekdaysMin : 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
        longDateFormat : {
            LT : 'A h:mm -നു',
            LTS : 'A h:mm:ss -നു',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm -നു',
            LLLL : 'dddd, D MMMM YYYY, A h:mm -നു'
        },
        calendar : {
            sameDay : '[ഇന്ന്] LT',
            nextDay : '[നാളെ] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[ഇന്നലെ] LT',
            lastWeek : '[കഴിഞ്ഞ] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s കഴിഞ്ഞ്',
            past : '%s മുൻപ്',
            s : 'അൽപ നിമിഷങ്ങൾ',
            ss : '%d സെക്കൻഡ്',
            m : 'ഒരു മിനിറ്റ്',
            mm : '%d മിനിറ്റ്',
            h : 'ഒരു മണിക്കൂർ',
            hh : '%d മണിക്കൂർ',
            d : 'ഒരു ദിവസം',
            dd : '%d ദിവസം',
            M : 'ഒരു മാസം',
            MM : '%d മാസം',
            y : 'ഒരു വർഷം',
            yy : '%d വർഷം'
        },
        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if ((meridiem === 'രാത്രി' && hour >= 4) ||
                    meridiem === 'ഉച്ച കഴിഞ്ഞ്' ||
                    meridiem === 'വൈകുന്നേരം') {
                return hour + 12;
            } else {
                return hour;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'രാത്രി';
            } else if (hour < 12) {
                return 'രാവിലെ';
            } else if (hour < 17) {
                return 'ഉച്ച കഴിഞ്ഞ്';
            } else if (hour < 20) {
                return 'വൈകുന്നേരം';
            } else {
                return 'രാത്രി';
            }
        }
    });

    return ml;

})));


/***/ }),

/***/ "./node_modules/moment/locale/mn.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function translate(number, withoutSuffix, key, isFuture) {
        switch (key) {
            case 's':
                return withoutSuffix ? 'хэдхэн секунд' : 'хэдхэн секундын';
            case 'ss':
                return number + (withoutSuffix ? ' секунд' : ' секундын');
            case 'm':
            case 'mm':
                return number + (withoutSuffix ? ' минут' : ' минутын');
            case 'h':
            case 'hh':
                return number + (withoutSuffix ? ' цаг' : ' цагийн');
            case 'd':
            case 'dd':
                return number + (withoutSuffix ? ' өдөр' : ' өдрийн');
            case 'M':
            case 'MM':
                return number + (withoutSuffix ? ' сар' : ' сарын');
            case 'y':
            case 'yy':
                return number + (withoutSuffix ? ' жил' : ' жилийн');
            default:
                return number;
        }
    }

    var mn = moment.defineLocale('mn', {
        months : 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split('_'),
        monthsShort : '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split('_'),
        monthsParseExact : true,
        weekdays : 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
        weekdaysShort : 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
        weekdaysMin : 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'YYYY оны MMMMын D',
            LLL : 'YYYY оны MMMMын D HH:mm',
            LLLL : 'dddd, YYYY оны MMMMын D HH:mm'
        },
        meridiemParse: /ҮӨ|ҮХ/i,
        isPM : function (input) {
            return input === 'ҮХ';
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ҮӨ';
            } else {
                return 'ҮХ';
            }
        },
        calendar : {
            sameDay : '[Өнөөдөр] LT',
            nextDay : '[Маргааш] LT',
            nextWeek : '[Ирэх] dddd LT',
            lastDay : '[Өчигдөр] LT',
            lastWeek : '[Өнгөрсөн] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s дараа',
            past : '%s өмнө',
            s : translate,
            ss : translate,
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : translate,
            dd : translate,
            M : translate,
            MM : translate,
            y : translate,
            yy : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
        ordinal : function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return number + ' өдөр';
                default:
                    return number;
            }
        }
    });

    return mn;

})));


/***/ }),

/***/ "./node_modules/moment/locale/mr.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        '0': '०'
    },
    numberMap = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
    };

    function relativeTimeMr(number, withoutSuffix, string, isFuture)
    {
        var output = '';
        if (withoutSuffix) {
            switch (string) {
                case 's': output = 'काही सेकंद'; break;
                case 'ss': output = '%d सेकंद'; break;
                case 'm': output = 'एक मिनिट'; break;
                case 'mm': output = '%d मिनिटे'; break;
                case 'h': output = 'एक तास'; break;
                case 'hh': output = '%d तास'; break;
                case 'd': output = 'एक दिवस'; break;
                case 'dd': output = '%d दिवस'; break;
                case 'M': output = 'एक महिना'; break;
                case 'MM': output = '%d महिने'; break;
                case 'y': output = 'एक वर्ष'; break;
                case 'yy': output = '%d वर्षे'; break;
            }
        }
        else {
            switch (string) {
                case 's': output = 'काही सेकंदां'; break;
                case 'ss': output = '%d सेकंदां'; break;
                case 'm': output = 'एका मिनिटा'; break;
                case 'mm': output = '%d मिनिटां'; break;
                case 'h': output = 'एका तासा'; break;
                case 'hh': output = '%d तासां'; break;
                case 'd': output = 'एका दिवसा'; break;
                case 'dd': output = '%d दिवसां'; break;
                case 'M': output = 'एका महिन्या'; break;
                case 'MM': output = '%d महिन्यां'; break;
                case 'y': output = 'एका वर्षा'; break;
                case 'yy': output = '%d वर्षां'; break;
            }
        }
        return output.replace(/%d/i, number);
    }

    var mr = moment.defineLocale('mr', {
        months : 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
        monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
        monthsParseExact : true,
        weekdays : 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort : 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat : {
            LT : 'A h:mm वाजता',
            LTS : 'A h:mm:ss वाजता',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm वाजता',
            LLLL : 'dddd, D MMMM YYYY, A h:mm वाजता'
        },
        calendar : {
            sameDay : '[आज] LT',
            nextDay : '[उद्या] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[काल] LT',
            lastWeek: '[मागील] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future: '%sमध्ये',
            past: '%sपूर्वी',
            s: relativeTimeMr,
            ss: relativeTimeMr,
            m: relativeTimeMr,
            mm: relativeTimeMr,
            h: relativeTimeMr,
            hh: relativeTimeMr,
            d: relativeTimeMr,
            dd: relativeTimeMr,
            M: relativeTimeMr,
            MM: relativeTimeMr,
            y: relativeTimeMr,
            yy: relativeTimeMr
        },
        preparse: function (string) {
            return string.replace(/[१२३४५६७८९०]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'रात्री') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'सकाळी') {
                return hour;
            } else if (meridiem === 'दुपारी') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'सायंकाळी') {
                return hour + 12;
            }
        },
        meridiem: function (hour, minute, isLower) {
            if (hour < 4) {
                return 'रात्री';
            } else if (hour < 10) {
                return 'सकाळी';
            } else if (hour < 17) {
                return 'दुपारी';
            } else if (hour < 20) {
                return 'सायंकाळी';
            } else {
                return 'रात्री';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return mr;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ms-my.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var msMy = moment.defineLocale('ms-my', {
        months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [pukul] HH.mm',
            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'pagi') {
                return hour;
            } else if (meridiem === 'tengahari') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'petang' || meridiem === 'malam') {
                return hour + 12;
            }
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'pagi';
            } else if (hours < 15) {
                return 'tengahari';
            } else if (hours < 19) {
                return 'petang';
            } else {
                return 'malam';
            }
        },
        calendar : {
            sameDay : '[Hari ini pukul] LT',
            nextDay : '[Esok pukul] LT',
            nextWeek : 'dddd [pukul] LT',
            lastDay : '[Kelmarin pukul] LT',
            lastWeek : 'dddd [lepas pukul] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dalam %s',
            past : '%s yang lepas',
            s : 'beberapa saat',
            ss : '%d saat',
            m : 'seminit',
            mm : '%d minit',
            h : 'sejam',
            hh : '%d jam',
            d : 'sehari',
            dd : '%d hari',
            M : 'sebulan',
            MM : '%d bulan',
            y : 'setahun',
            yy : '%d tahun'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return msMy;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ms.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var ms = moment.defineLocale('ms', {
        months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [pukul] HH.mm',
            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'pagi') {
                return hour;
            } else if (meridiem === 'tengahari') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'petang' || meridiem === 'malam') {
                return hour + 12;
            }
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'pagi';
            } else if (hours < 15) {
                return 'tengahari';
            } else if (hours < 19) {
                return 'petang';
            } else {
                return 'malam';
            }
        },
        calendar : {
            sameDay : '[Hari ini pukul] LT',
            nextDay : '[Esok pukul] LT',
            nextWeek : 'dddd [pukul] LT',
            lastDay : '[Kelmarin pukul] LT',
            lastWeek : 'dddd [lepas pukul] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dalam %s',
            past : '%s yang lepas',
            s : 'beberapa saat',
            ss : '%d saat',
            m : 'seminit',
            mm : '%d minit',
            h : 'sejam',
            hh : '%d jam',
            d : 'sehari',
            dd : '%d hari',
            M : 'sebulan',
            MM : '%d bulan',
            y : 'setahun',
            yy : '%d tahun'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return ms;

})));


/***/ }),

/***/ "./node_modules/moment/locale/mt.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var mt = moment.defineLocale('mt', {
        months : 'Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru'.split('_'),
        monthsShort : 'Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ'.split('_'),
        weekdays : 'Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt'.split('_'),
        weekdaysShort : 'Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib'.split('_'),
        weekdaysMin : 'Ħa_Tn_Tl_Er_Ħa_Ġi_Si'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Illum fil-]LT',
            nextDay : '[Għada fil-]LT',
            nextWeek : 'dddd [fil-]LT',
            lastDay : '[Il-bieraħ fil-]LT',
            lastWeek : 'dddd [li għadda] [fil-]LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'f’ %s',
            past : '%s ilu',
            s : 'ftit sekondi',
            ss : '%d sekondi',
            m : 'minuta',
            mm : '%d minuti',
            h : 'siegħa',
            hh : '%d siegħat',
            d : 'ġurnata',
            dd : '%d ġranet',
            M : 'xahar',
            MM : '%d xhur',
            y : 'sena',
            yy : '%d sni'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal: '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return mt;

})));


/***/ }),

/***/ "./node_modules/moment/locale/my.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '၁',
        '2': '၂',
        '3': '၃',
        '4': '၄',
        '5': '၅',
        '6': '၆',
        '7': '၇',
        '8': '၈',
        '9': '၉',
        '0': '၀'
    }, numberMap = {
        '၁': '1',
        '၂': '2',
        '၃': '3',
        '၄': '4',
        '၅': '5',
        '၆': '6',
        '၇': '7',
        '၈': '8',
        '၉': '9',
        '၀': '0'
    };

    var my = moment.defineLocale('my', {
        months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
        monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
        weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
        weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
        weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),

        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[ယနေ.] LT [မှာ]',
            nextDay: '[မနက်ဖြန်] LT [မှာ]',
            nextWeek: 'dddd LT [မှာ]',
            lastDay: '[မနေ.က] LT [မှာ]',
            lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'လာမည့် %s မှာ',
            past: 'လွန်ခဲ့သော %s က',
            s: 'စက္ကန်.အနည်းငယ်',
            ss : '%d စက္ကန့်',
            m: 'တစ်မိနစ်',
            mm: '%d မိနစ်',
            h: 'တစ်နာရီ',
            hh: '%d နာရီ',
            d: 'တစ်ရက်',
            dd: '%d ရက်',
            M: 'တစ်လ',
            MM: '%d လ',
            y: 'တစ်နှစ်',
            yy: '%d နှစ်'
        },
        preparse: function (string) {
            return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 1st is the first week of the year.
        }
    });

    return my;

})));


/***/ }),

/***/ "./node_modules/moment/locale/nb.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var nb = moment.defineLocale('nb', {
        months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort : 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
        monthsParseExact : true,
        weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort : 'sø._ma._ti._on._to._fr._lø.'.split('_'),
        weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY [kl.] HH:mm',
            LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
        },
        calendar : {
            sameDay: '[i dag kl.] LT',
            nextDay: '[i morgen kl.] LT',
            nextWeek: 'dddd [kl.] LT',
            lastDay: '[i går kl.] LT',
            lastWeek: '[forrige] dddd [kl.] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : '%s siden',
            s : 'noen sekunder',
            ss : '%d sekunder',
            m : 'ett minutt',
            mm : '%d minutter',
            h : 'en time',
            hh : '%d timer',
            d : 'en dag',
            dd : '%d dager',
            M : 'en måned',
            MM : '%d måneder',
            y : 'ett år',
            yy : '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return nb;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ne.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        '0': '०'
    },
    numberMap = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
    };

    var ne = moment.defineLocale('ne', {
        months : 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
        monthsShort : 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
        monthsParseExact : true,
        weekdays : 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
        weekdaysShort : 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
        weekdaysMin : 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'Aको h:mm बजे',
            LTS : 'Aको h:mm:ss बजे',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, Aको h:mm बजे',
            LLLL : 'dddd, D MMMM YYYY, Aको h:mm बजे'
        },
        preparse: function (string) {
            return string.replace(/[१२३४५६७८९०]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'राति') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'बिहान') {
                return hour;
            } else if (meridiem === 'दिउँसो') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'साँझ') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 3) {
                return 'राति';
            } else if (hour < 12) {
                return 'बिहान';
            } else if (hour < 16) {
                return 'दिउँसो';
            } else if (hour < 20) {
                return 'साँझ';
            } else {
                return 'राति';
            }
        },
        calendar : {
            sameDay : '[आज] LT',
            nextDay : '[भोलि] LT',
            nextWeek : '[आउँदो] dddd[,] LT',
            lastDay : '[हिजो] LT',
            lastWeek : '[गएको] dddd[,] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%sमा',
            past : '%s अगाडि',
            s : 'केही क्षण',
            ss : '%d सेकेण्ड',
            m : 'एक मिनेट',
            mm : '%d मिनेट',
            h : 'एक घण्टा',
            hh : '%d घण्टा',
            d : 'एक दिन',
            dd : '%d दिन',
            M : 'एक महिना',
            MM : '%d महिना',
            y : 'एक बर्ष',
            yy : '%d बर्ष'
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return ne;

})));


/***/ }),

/***/ "./node_modules/moment/locale/nl-be.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

    var monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
    var monthsRegex = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;

    var nlBe = moment.defineLocale('nl-be', {
        months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort : function (m, format) {
            if (!m) {
                return monthsShortWithDots;
            } else if (/-MMM-/.test(format)) {
                return monthsShortWithoutDots[m.month()];
            } else {
                return monthsShortWithDots[m.month()];
            }
        },

        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,

        monthsParse : monthsParse,
        longMonthsParse : monthsParse,
        shortMonthsParse : monthsParse,

        weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin : 'zo_ma_di_wo_do_vr_za'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[vandaag om] LT',
            nextDay: '[morgen om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[gisteren om] LT',
            lastWeek: '[afgelopen] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'over %s',
            past : '%s geleden',
            s : 'een paar seconden',
            ss : '%d seconden',
            m : 'één minuut',
            mm : '%d minuten',
            h : 'één uur',
            hh : '%d uur',
            d : 'één dag',
            dd : '%d dagen',
            M : 'één maand',
            MM : '%d maanden',
            y : 'één jaar',
            yy : '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal : function (number) {
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return nlBe;

})));


/***/ }),

/***/ "./node_modules/moment/locale/nl.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

    var monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
    var monthsRegex = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;

    var nl = moment.defineLocale('nl', {
        months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort : function (m, format) {
            if (!m) {
                return monthsShortWithDots;
            } else if (/-MMM-/.test(format)) {
                return monthsShortWithoutDots[m.month()];
            } else {
                return monthsShortWithDots[m.month()];
            }
        },

        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,

        monthsParse : monthsParse,
        longMonthsParse : monthsParse,
        shortMonthsParse : monthsParse,

        weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin : 'zo_ma_di_wo_do_vr_za'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD-MM-YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[vandaag om] LT',
            nextDay: '[morgen om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[gisteren om] LT',
            lastWeek: '[afgelopen] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'over %s',
            past : '%s geleden',
            s : 'een paar seconden',
            ss : '%d seconden',
            m : 'één minuut',
            mm : '%d minuten',
            h : 'één uur',
            hh : '%d uur',
            d : 'één dag',
            dd : '%d dagen',
            M : 'één maand',
            MM : '%d maanden',
            y : 'één jaar',
            yy : '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal : function (number) {
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return nl;

})));


/***/ }),

/***/ "./node_modules/moment/locale/nn.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var nn = moment.defineLocale('nn', {
        months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays : 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
        weekdaysShort : 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
        weekdaysMin : 'su_må_ty_on_to_fr_lø'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY [kl.] H:mm',
            LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
        },
        calendar : {
            sameDay: '[I dag klokka] LT',
            nextDay: '[I morgon klokka] LT',
            nextWeek: 'dddd [klokka] LT',
            lastDay: '[I går klokka] LT',
            lastWeek: '[Føregåande] dddd [klokka] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : '%s sidan',
            s : 'nokre sekund',
            ss : '%d sekund',
            m : 'eit minutt',
            mm : '%d minutt',
            h : 'ein time',
            hh : '%d timar',
            d : 'ein dag',
            dd : '%d dagar',
            M : 'ein månad',
            MM : '%d månader',
            y : 'eit år',
            yy : '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return nn;

})));


/***/ }),

/***/ "./node_modules/moment/locale/pa-in.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '੧',
        '2': '੨',
        '3': '੩',
        '4': '੪',
        '5': '੫',
        '6': '੬',
        '7': '੭',
        '8': '੮',
        '9': '੯',
        '0': '੦'
    },
    numberMap = {
        '੧': '1',
        '੨': '2',
        '੩': '3',
        '੪': '4',
        '੫': '5',
        '੬': '6',
        '੭': '7',
        '੮': '8',
        '੯': '9',
        '੦': '0'
    };

    var paIn = moment.defineLocale('pa-in', {
        // There are months name as per Nanakshahi Calender but they are not used as rigidly in modern Punjabi.
        months : 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
        monthsShort : 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
        weekdays : 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split('_'),
        weekdaysShort : 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
        weekdaysMin : 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
        longDateFormat : {
            LT : 'A h:mm ਵਜੇ',
            LTS : 'A h:mm:ss ਵਜੇ',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm ਵਜੇ',
            LLLL : 'dddd, D MMMM YYYY, A h:mm ਵਜੇ'
        },
        calendar : {
            sameDay : '[ਅਜ] LT',
            nextDay : '[ਕਲ] LT',
            nextWeek : '[ਅਗਲਾ] dddd, LT',
            lastDay : '[ਕਲ] LT',
            lastWeek : '[ਪਿਛਲੇ] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ਵਿੱਚ',
            past : '%s ਪਿਛਲੇ',
            s : 'ਕੁਝ ਸਕਿੰਟ',
            ss : '%d ਸਕਿੰਟ',
            m : 'ਇਕ ਮਿੰਟ',
            mm : '%d ਮਿੰਟ',
            h : 'ਇੱਕ ਘੰਟਾ',
            hh : '%d ਘੰਟੇ',
            d : 'ਇੱਕ ਦਿਨ',
            dd : '%d ਦਿਨ',
            M : 'ਇੱਕ ਮਹੀਨਾ',
            MM : '%d ਮਹੀਨੇ',
            y : 'ਇੱਕ ਸਾਲ',
            yy : '%d ਸਾਲ'
        },
        preparse: function (string) {
            return string.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        // Punjabi notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Punjabi.
        meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'ਰਾਤ') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'ਸਵੇਰ') {
                return hour;
            } else if (meridiem === 'ਦੁਪਹਿਰ') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'ਸ਼ਾਮ') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'ਰਾਤ';
            } else if (hour < 10) {
                return 'ਸਵੇਰ';
            } else if (hour < 17) {
                return 'ਦੁਪਹਿਰ';
            } else if (hour < 20) {
                return 'ਸ਼ਾਮ';
            } else {
                return 'ਰਾਤ';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return paIn;

})));


/***/ }),

/***/ "./node_modules/moment/locale/pl.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
        monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
    function plural(n) {
        return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);
    }
    function translate(number, withoutSuffix, key) {
        var result = number + ' ';
        switch (key) {
            case 'ss':
                return result + (plural(number) ? 'sekundy' : 'sekund');
            case 'm':
                return withoutSuffix ? 'minuta' : 'minutę';
            case 'mm':
                return result + (plural(number) ? 'minuty' : 'minut');
            case 'h':
                return withoutSuffix  ? 'godzina'  : 'godzinę';
            case 'hh':
                return result + (plural(number) ? 'godziny' : 'godzin');
            case 'MM':
                return result + (plural(number) ? 'miesiące' : 'miesięcy');
            case 'yy':
                return result + (plural(number) ? 'lata' : 'lat');
        }
    }

    var pl = moment.defineLocale('pl', {
        months : function (momentToFormat, format) {
            if (!momentToFormat) {
                return monthsNominative;
            } else if (format === '') {
                // Hack: if format empty we know this is used to generate
                // RegExp by moment. Give then back both valid forms of months
                // in RegExp ready format.
                return '(' + monthsSubjective[momentToFormat.month()] + '|' + monthsNominative[momentToFormat.month()] + ')';
            } else if (/D MMMM/.test(format)) {
                return monthsSubjective[momentToFormat.month()];
            } else {
                return monthsNominative[momentToFormat.month()];
            }
        },
        monthsShort : 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
        weekdays : 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
        weekdaysShort : 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
        weekdaysMin : 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Dziś o] LT',
            nextDay: '[Jutro o] LT',
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[W niedzielę o] LT';

                    case 2:
                        return '[We wtorek o] LT';

                    case 3:
                        return '[W środę o] LT';

                    case 6:
                        return '[W sobotę o] LT';

                    default:
                        return '[W] dddd [o] LT';
                }
            },
            lastDay: '[Wczoraj o] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[W zeszłą niedzielę o] LT';
                    case 3:
                        return '[W zeszłą środę o] LT';
                    case 6:
                        return '[W zeszłą sobotę o] LT';
                    default:
                        return '[W zeszły] dddd [o] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'za %s',
            past : '%s temu',
            s : 'kilka sekund',
            ss : translate,
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : '1 dzień',
            dd : '%d dni',
            M : 'miesiąc',
            MM : translate,
            y : 'rok',
            yy : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return pl;

})));


/***/ }),

/***/ "./node_modules/moment/locale/pt-br.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var ptBr = moment.defineLocale('pt-br', {
        months : 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
        monthsShort : 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
        weekdays : 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
        weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        weekdaysMin : 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY [às] HH:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
        },
        calendar : {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: function () {
                return (this.day() === 0 || this.day() === 6) ?
                    '[Último] dddd [às] LT' : // Saturday + Sunday
                    '[Última] dddd [às] LT'; // Monday - Friday
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'em %s',
            past : 'há %s',
            s : 'poucos segundos',
            ss : '%d segundos',
            m : 'um minuto',
            mm : '%d minutos',
            h : 'uma hora',
            hh : '%d horas',
            d : 'um dia',
            dd : '%d dias',
            M : 'um mês',
            MM : '%d meses',
            y : 'um ano',
            yy : '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal : '%dº'
    });

    return ptBr;

})));


/***/ }),

/***/ "./node_modules/moment/locale/pt.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var pt = moment.defineLocale('pt', {
        months : 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
        monthsShort : 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
        weekdays : 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
        weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        weekdaysMin : 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY HH:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: function () {
                return (this.day() === 0 || this.day() === 6) ?
                    '[Último] dddd [às] LT' : // Saturday + Sunday
                    '[Última] dddd [às] LT'; // Monday - Friday
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'em %s',
            past : 'há %s',
            s : 'segundos',
            ss : '%d segundos',
            m : 'um minuto',
            mm : '%d minutos',
            h : 'uma hora',
            hh : '%d horas',
            d : 'um dia',
            dd : '%d dias',
            M : 'um mês',
            MM : '%d meses',
            y : 'um ano',
            yy : '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal : '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return pt;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ro.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
                'ss': 'secunde',
                'mm': 'minute',
                'hh': 'ore',
                'dd': 'zile',
                'MM': 'luni',
                'yy': 'ani'
            },
            separator = ' ';
        if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {
            separator = ' de ';
        }
        return number + separator + format[key];
    }

    var ro = moment.defineLocale('ro', {
        months : 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
        monthsShort : 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays : 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
        weekdaysShort : 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
        weekdaysMin : 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY H:mm',
            LLLL : 'dddd, D MMMM YYYY H:mm'
        },
        calendar : {
            sameDay: '[azi la] LT',
            nextDay: '[mâine la] LT',
            nextWeek: 'dddd [la] LT',
            lastDay: '[ieri la] LT',
            lastWeek: '[fosta] dddd [la] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'peste %s',
            past : '%s în urmă',
            s : 'câteva secunde',
            ss : relativeTimeWithPlural,
            m : 'un minut',
            mm : relativeTimeWithPlural,
            h : 'o oră',
            hh : relativeTimeWithPlural,
            d : 'o zi',
            dd : relativeTimeWithPlural,
            M : 'o lună',
            MM : relativeTimeWithPlural,
            y : 'un an',
            yy : relativeTimeWithPlural
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return ro;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ru.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }
    function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
            'ss': withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
            'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
            'hh': 'час_часа_часов',
            'dd': 'день_дня_дней',
            'MM': 'месяц_месяца_месяцев',
            'yy': 'год_года_лет'
        };
        if (key === 'm') {
            return withoutSuffix ? 'минута' : 'минуту';
        }
        else {
            return number + ' ' + plural(format[key], +number);
        }
    }
    var monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];

    // http://new.gramota.ru/spravka/rules/139-prop : § 103
    // Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
    // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
    var ru = moment.defineLocale('ru', {
        months : {
            format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
            standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
        },
        monthsShort : {
            // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
            format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
            standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
        },
        weekdays : {
            standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
            format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
        },
        weekdaysShort : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        monthsParse : monthsParse,
        longMonthsParse : monthsParse,
        shortMonthsParse : monthsParse,

        // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,

        // копия предыдущего
        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,

        // полные названия с падежами
        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,

        // Выражение, которое соотвествует только сокращённым формам
        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY г.',
            LLL : 'D MMMM YYYY г., H:mm',
            LLLL : 'dddd, D MMMM YYYY г., H:mm'
        },
        calendar : {
            sameDay: '[Сегодня, в] LT',
            nextDay: '[Завтра, в] LT',
            lastDay: '[Вчера, в] LT',
            nextWeek: function (now) {
                if (now.week() !== this.week()) {
                    switch (this.day()) {
                        case 0:
                            return '[В следующее] dddd, [в] LT';
                        case 1:
                        case 2:
                        case 4:
                            return '[В следующий] dddd, [в] LT';
                        case 3:
                        case 5:
                        case 6:
                            return '[В следующую] dddd, [в] LT';
                    }
                } else {
                    if (this.day() === 2) {
                        return '[Во] dddd, [в] LT';
                    } else {
                        return '[В] dddd, [в] LT';
                    }
                }
            },
            lastWeek: function (now) {
                if (now.week() !== this.week()) {
                    switch (this.day()) {
                        case 0:
                            return '[В прошлое] dddd, [в] LT';
                        case 1:
                        case 2:
                        case 4:
                            return '[В прошлый] dddd, [в] LT';
                        case 3:
                        case 5:
                        case 6:
                            return '[В прошлую] dddd, [в] LT';
                    }
                } else {
                    if (this.day() === 2) {
                        return '[Во] dddd, [в] LT';
                    } else {
                        return '[В] dddd, [в] LT';
                    }
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'через %s',
            past : '%s назад',
            s : 'несколько секунд',
            ss : relativeTimeWithPlural,
            m : relativeTimeWithPlural,
            mm : relativeTimeWithPlural,
            h : 'час',
            hh : relativeTimeWithPlural,
            d : 'день',
            dd : relativeTimeWithPlural,
            M : 'месяц',
            MM : relativeTimeWithPlural,
            y : 'год',
            yy : relativeTimeWithPlural
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM : function (input) {
            return /^(дня|вечера)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'ночи';
            } else if (hour < 12) {
                return 'утра';
            } else if (hour < 17) {
                return 'дня';
            } else {
                return 'вечера';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'M':
                case 'd':
                case 'DDD':
                    return number + '-й';
                case 'D':
                    return number + '-го';
                case 'w':
                case 'W':
                    return number + '-я';
                default:
                    return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return ru;

})));


/***/ }),

/***/ "./node_modules/moment/locale/sd.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var months = [
        'جنوري',
        'فيبروري',
        'مارچ',
        'اپريل',
        'مئي',
        'جون',
        'جولاءِ',
        'آگسٽ',
        'سيپٽمبر',
        'آڪٽوبر',
        'نومبر',
        'ڊسمبر'
    ];
    var days = [
        'آچر',
        'سومر',
        'اڱارو',
        'اربع',
        'خميس',
        'جمع',
        'ڇنڇر'
    ];

    var sd = moment.defineLocale('sd', {
        months : months,
        monthsShort : months,
        weekdays : days,
        weekdaysShort : days,
        weekdaysMin : days,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd، D MMMM YYYY HH:mm'
        },
        meridiemParse: /صبح|شام/,
        isPM : function (input) {
            return 'شام' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'صبح';
            }
            return 'شام';
        },
        calendar : {
            sameDay : '[اڄ] LT',
            nextDay : '[سڀاڻي] LT',
            nextWeek : 'dddd [اڳين هفتي تي] LT',
            lastDay : '[ڪالهه] LT',
            lastWeek : '[گزريل هفتي] dddd [تي] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s پوء',
            past : '%s اڳ',
            s : 'چند سيڪنڊ',
            ss : '%d سيڪنڊ',
            m : 'هڪ منٽ',
            mm : '%d منٽ',
            h : 'هڪ ڪلاڪ',
            hh : '%d ڪلاڪ',
            d : 'هڪ ڏينهن',
            dd : '%d ڏينهن',
            M : 'هڪ مهينو',
            MM : '%d مهينا',
            y : 'هڪ سال',
            yy : '%d سال'
        },
        preparse: function (string) {
            return string.replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/,/g, '،');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return sd;

})));


/***/ }),

/***/ "./node_modules/moment/locale/se.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var se = moment.defineLocale('se', {
        months : 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
        monthsShort : 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
        weekdays : 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
        weekdaysShort : 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
        weekdaysMin : 's_v_m_g_d_b_L'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'MMMM D. [b.] YYYY',
            LLL : 'MMMM D. [b.] YYYY [ti.] HH:mm',
            LLLL : 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm'
        },
        calendar : {
            sameDay: '[otne ti] LT',
            nextDay: '[ihttin ti] LT',
            nextWeek: 'dddd [ti] LT',
            lastDay: '[ikte ti] LT',
            lastWeek: '[ovddit] dddd [ti] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : '%s geažes',
            past : 'maŋit %s',
            s : 'moadde sekunddat',
            ss: '%d sekunddat',
            m : 'okta minuhta',
            mm : '%d minuhtat',
            h : 'okta diimmu',
            hh : '%d diimmut',
            d : 'okta beaivi',
            dd : '%d beaivvit',
            M : 'okta mánnu',
            MM : '%d mánut',
            y : 'okta jahki',
            yy : '%d jagit'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return se;

})));


/***/ }),

/***/ "./node_modules/moment/locale/si.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    /*jshint -W100*/
    var si = moment.defineLocale('si', {
        months : 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
        monthsShort : 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
        weekdays : 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
        weekdaysShort : 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
        weekdaysMin : 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'a h:mm',
            LTS : 'a h:mm:ss',
            L : 'YYYY/MM/DD',
            LL : 'YYYY MMMM D',
            LLL : 'YYYY MMMM D, a h:mm',
            LLLL : 'YYYY MMMM D [වැනි] dddd, a h:mm:ss'
        },
        calendar : {
            sameDay : '[අද] LT[ට]',
            nextDay : '[හෙට] LT[ට]',
            nextWeek : 'dddd LT[ට]',
            lastDay : '[ඊයේ] LT[ට]',
            lastWeek : '[පසුගිය] dddd LT[ට]',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%sකින්',
            past : '%sකට පෙර',
            s : 'තත්පර කිහිපය',
            ss : 'තත්පර %d',
            m : 'මිනිත්තුව',
            mm : 'මිනිත්තු %d',
            h : 'පැය',
            hh : 'පැය %d',
            d : 'දිනය',
            dd : 'දින %d',
            M : 'මාසය',
            MM : 'මාස %d',
            y : 'වසර',
            yy : 'වසර %d'
        },
        dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
        ordinal : function (number) {
            return number + ' වැනි';
        },
        meridiemParse : /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
        isPM : function (input) {
            return input === 'ප.ව.' || input === 'පස් වරු';
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'ප.ව.' : 'පස් වරු';
            } else {
                return isLower ? 'පෙ.ව.' : 'පෙර වරු';
            }
        }
    });

    return si;

})));


/***/ }),

/***/ "./node_modules/moment/locale/sk.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
        monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
    function plural(n) {
        return (n > 1) && (n < 5);
    }
    function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
            case 's':  // a few seconds / in a few seconds / a few seconds ago
                return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';
            case 'ss': // 9 seconds / in 9 seconds / 9 seconds ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'sekundy' : 'sekúnd');
                } else {
                    return result + 'sekundami';
                }
                break;
            case 'm':  // a minute / in a minute / a minute ago
                return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');
            case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'minúty' : 'minút');
                } else {
                    return result + 'minútami';
                }
                break;
            case 'h':  // an hour / in an hour / an hour ago
                return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
            case 'hh': // 9 hours / in 9 hours / 9 hours ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'hodiny' : 'hodín');
                } else {
                    return result + 'hodinami';
                }
                break;
            case 'd':  // a day / in a day / a day ago
                return (withoutSuffix || isFuture) ? 'deň' : 'dňom';
            case 'dd': // 9 days / in 9 days / 9 days ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'dni' : 'dní');
                } else {
                    return result + 'dňami';
                }
                break;
            case 'M':  // a month / in a month / a month ago
                return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
            case 'MM': // 9 months / in 9 months / 9 months ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'mesiace' : 'mesiacov');
                } else {
                    return result + 'mesiacmi';
                }
                break;
            case 'y':  // a year / in a year / a year ago
                return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
            case 'yy': // 9 years / in 9 years / 9 years ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'roky' : 'rokov');
                } else {
                    return result + 'rokmi';
                }
                break;
        }
    }

    var sk = moment.defineLocale('sk', {
        months : months,
        monthsShort : monthsShort,
        weekdays : 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
        weekdaysShort : 'ne_po_ut_st_št_pi_so'.split('_'),
        weekdaysMin : 'ne_po_ut_st_št_pi_so'.split('_'),
        longDateFormat : {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay: '[dnes o] LT',
            nextDay: '[zajtra o] LT',
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[v nedeľu o] LT';
                    case 1:
                    case 2:
                        return '[v] dddd [o] LT';
                    case 3:
                        return '[v stredu o] LT';
                    case 4:
                        return '[vo štvrtok o] LT';
                    case 5:
                        return '[v piatok o] LT';
                    case 6:
                        return '[v sobotu o] LT';
                }
            },
            lastDay: '[včera o] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[minulú nedeľu o] LT';
                    case 1:
                    case 2:
                        return '[minulý] dddd [o] LT';
                    case 3:
                        return '[minulú stredu o] LT';
                    case 4:
                    case 5:
                        return '[minulý] dddd [o] LT';
                    case 6:
                        return '[minulú sobotu o] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'za %s',
            past : 'pred %s',
            s : translate,
            ss : translate,
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : translate,
            dd : translate,
            M : translate,
            MM : translate,
            y : translate,
            yy : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return sk;

})));


/***/ }),

/***/ "./node_modules/moment/locale/sl.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
            case 's':
                return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
            case 'ss':
                if (number === 1) {
                    result += withoutSuffix ? 'sekundo' : 'sekundi';
                } else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'sekundi' : 'sekundah';
                } else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'sekunde' : 'sekundah';
                } else {
                    result += withoutSuffix || isFuture ? 'sekund' : 'sekund';
                }
                return result;
            case 'm':
                return withoutSuffix ? 'ena minuta' : 'eno minuto';
            case 'mm':
                if (number === 1) {
                    result += withoutSuffix ? 'minuta' : 'minuto';
                } else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
                } else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'minute' : 'minutami';
                } else {
                    result += withoutSuffix || isFuture ? 'minut' : 'minutami';
                }
                return result;
            case 'h':
                return withoutSuffix ? 'ena ura' : 'eno uro';
            case 'hh':
                if (number === 1) {
                    result += withoutSuffix ? 'ura' : 'uro';
                } else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'uri' : 'urama';
                } else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'ure' : 'urami';
                } else {
                    result += withoutSuffix || isFuture ? 'ur' : 'urami';
                }
                return result;
            case 'd':
                return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
            case 'dd':
                if (number === 1) {
                    result += withoutSuffix || isFuture ? 'dan' : 'dnem';
                } else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
                } else {
                    result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
                }
                return result;
            case 'M':
                return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
            case 'MM':
                if (number === 1) {
                    result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
                } else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
                } else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
                } else {
                    result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
                }
                return result;
            case 'y':
                return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
            case 'yy':
                if (number === 1) {
                    result += withoutSuffix || isFuture ? 'leto' : 'letom';
                } else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'leti' : 'letoma';
                } else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'leta' : 'leti';
                } else {
                    result += withoutSuffix || isFuture ? 'let' : 'leti';
                }
                return result;
        }
    }

    var sl = moment.defineLocale('sl', {
        months : 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
        monthsShort : 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays : 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
        weekdaysShort : 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
        weekdaysMin : 'ne_po_to_sr_če_pe_so'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd, D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay  : '[danes ob] LT',
            nextDay  : '[jutri ob] LT',

            nextWeek : function () {
                switch (this.day()) {
                    case 0:
                        return '[v] [nedeljo] [ob] LT';
                    case 3:
                        return '[v] [sredo] [ob] LT';
                    case 6:
                        return '[v] [soboto] [ob] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[v] dddd [ob] LT';
                }
            },
            lastDay  : '[včeraj ob] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 0:
                        return '[prejšnjo] [nedeljo] [ob] LT';
                    case 3:
                        return '[prejšnjo] [sredo] [ob] LT';
                    case 6:
                        return '[prejšnjo] [soboto] [ob] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[prejšnji] dddd [ob] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'čez %s',
            past   : 'pred %s',
            s      : processRelativeTime,
            ss     : processRelativeTime,
            m      : processRelativeTime,
            mm     : processRelativeTime,
            h      : processRelativeTime,
            hh     : processRelativeTime,
            d      : processRelativeTime,
            dd     : processRelativeTime,
            M      : processRelativeTime,
            MM     : processRelativeTime,
            y      : processRelativeTime,
            yy     : processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return sl;

})));


/***/ }),

/***/ "./node_modules/moment/locale/sq.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var sq = moment.defineLocale('sq', {
        months : 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
        monthsShort : 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
        weekdays : 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
        weekdaysShort : 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
        weekdaysMin : 'D_H_Ma_Më_E_P_Sh'.split('_'),
        weekdaysParseExact : true,
        meridiemParse: /PD|MD/,
        isPM: function (input) {
            return input.charAt(0) === 'M';
        },
        meridiem : function (hours, minutes, isLower) {
            return hours < 12 ? 'PD' : 'MD';
        },
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Sot në] LT',
            nextDay : '[Nesër në] LT',
            nextWeek : 'dddd [në] LT',
            lastDay : '[Dje në] LT',
            lastWeek : 'dddd [e kaluar në] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'në %s',
            past : '%s më parë',
            s : 'disa sekonda',
            ss : '%d sekonda',
            m : 'një minutë',
            mm : '%d minuta',
            h : 'një orë',
            hh : '%d orë',
            d : 'një ditë',
            dd : '%d ditë',
            M : 'një muaj',
            MM : '%d muaj',
            y : 'një vit',
            yy : '%d vite'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return sq;

})));


/***/ }),

/***/ "./node_modules/moment/locale/sr-cyrl.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var translator = {
        words: { //Different grammatical cases
            ss: ['секунда', 'секунде', 'секунди'],
            m: ['један минут', 'једне минуте'],
            mm: ['минут', 'минуте', 'минута'],
            h: ['један сат', 'једног сата'],
            hh: ['сат', 'сата', 'сати'],
            dd: ['дан', 'дана', 'дана'],
            MM: ['месец', 'месеца', 'месеци'],
            yy: ['година', 'године', 'година']
        },
        correctGrammaticalCase: function (number, wordKey) {
            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
        },
        translate: function (number, withoutSuffix, key) {
            var wordKey = translator.words[key];
            if (key.length === 1) {
                return withoutSuffix ? wordKey[0] : wordKey[1];
            } else {
                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
            }
        }
    };

    var srCyrl = moment.defineLocale('sr-cyrl', {
        months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split('_'),
        monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split('_'),
        monthsParseExact: true,
        weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split('_'),
        weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
        weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
        weekdaysParseExact : true,
        longDateFormat: {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[данас у] LT',
            nextDay: '[сутра у] LT',
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[у] [недељу] [у] LT';
                    case 3:
                        return '[у] [среду] [у] LT';
                    case 6:
                        return '[у] [суботу] [у] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[у] dddd [у] LT';
                }
            },
            lastDay  : '[јуче у] LT',
            lastWeek : function () {
                var lastWeekDays = [
                    '[прошле] [недеље] [у] LT',
                    '[прошлог] [понедељка] [у] LT',
                    '[прошлог] [уторка] [у] LT',
                    '[прошле] [среде] [у] LT',
                    '[прошлог] [четвртка] [у] LT',
                    '[прошлог] [петка] [у] LT',
                    '[прошле] [суботе] [у] LT'
                ];
                return lastWeekDays[this.day()];
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'за %s',
            past   : 'пре %s',
            s      : 'неколико секунди',
            ss     : translator.translate,
            m      : translator.translate,
            mm     : translator.translate,
            h      : translator.translate,
            hh     : translator.translate,
            d      : 'дан',
            dd     : translator.translate,
            M      : 'месец',
            MM     : translator.translate,
            y      : 'годину',
            yy     : translator.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return srCyrl;

})));


/***/ }),

/***/ "./node_modules/moment/locale/sr.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var translator = {
        words: { //Different grammatical cases
            ss: ['sekunda', 'sekunde', 'sekundi'],
            m: ['jedan minut', 'jedne minute'],
            mm: ['minut', 'minute', 'minuta'],
            h: ['jedan sat', 'jednog sata'],
            hh: ['sat', 'sata', 'sati'],
            dd: ['dan', 'dana', 'dana'],
            MM: ['mesec', 'meseca', 'meseci'],
            yy: ['godina', 'godine', 'godina']
        },
        correctGrammaticalCase: function (number, wordKey) {
            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
        },
        translate: function (number, withoutSuffix, key) {
            var wordKey = translator.words[key];
            if (key.length === 1) {
                return withoutSuffix ? wordKey[0] : wordKey[1];
            } else {
                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
            }
        }
    };

    var sr = moment.defineLocale('sr', {
        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact : true,
        longDateFormat: {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sutra u] LT',
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[u] [nedelju] [u] LT';
                    case 3:
                        return '[u] [sredu] [u] LT';
                    case 6:
                        return '[u] [subotu] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[u] dddd [u] LT';
                }
            },
            lastDay  : '[juče u] LT',
            lastWeek : function () {
                var lastWeekDays = [
                    '[prošle] [nedelje] [u] LT',
                    '[prošlog] [ponedeljka] [u] LT',
                    '[prošlog] [utorka] [u] LT',
                    '[prošle] [srede] [u] LT',
                    '[prošlog] [četvrtka] [u] LT',
                    '[prošlog] [petka] [u] LT',
                    '[prošle] [subote] [u] LT'
                ];
                return lastWeekDays[this.day()];
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'za %s',
            past   : 'pre %s',
            s      : 'nekoliko sekundi',
            ss     : translator.translate,
            m      : translator.translate,
            mm     : translator.translate,
            h      : translator.translate,
            hh     : translator.translate,
            d      : 'dan',
            dd     : translator.translate,
            M      : 'mesec',
            MM     : translator.translate,
            y      : 'godinu',
            yy     : translator.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return sr;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ss.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var ss = moment.defineLocale('ss', {
        months : "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split('_'),
        monthsShort : 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
        weekdays : 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
        weekdaysShort : 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
        weekdaysMin : 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendar : {
            sameDay : '[Namuhla nga] LT',
            nextDay : '[Kusasa nga] LT',
            nextWeek : 'dddd [nga] LT',
            lastDay : '[Itolo nga] LT',
            lastWeek : 'dddd [leliphelile] [nga] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'nga %s',
            past : 'wenteka nga %s',
            s : 'emizuzwana lomcane',
            ss : '%d mzuzwana',
            m : 'umzuzu',
            mm : '%d emizuzu',
            h : 'lihora',
            hh : '%d emahora',
            d : 'lilanga',
            dd : '%d emalanga',
            M : 'inyanga',
            MM : '%d tinyanga',
            y : 'umnyaka',
            yy : '%d iminyaka'
        },
        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'ekuseni';
            } else if (hours < 15) {
                return 'emini';
            } else if (hours < 19) {
                return 'entsambama';
            } else {
                return 'ebusuku';
            }
        },
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'ekuseni') {
                return hour;
            } else if (meridiem === 'emini') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'entsambama' || meridiem === 'ebusuku') {
                if (hour === 0) {
                    return 0;
                }
                return hour + 12;
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal : '%d',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return ss;

})));


/***/ }),

/***/ "./node_modules/moment/locale/sv.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var sv = moment.defineLocale('sv', {
        months : 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays : 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
        weekdaysShort : 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
        weekdaysMin : 'sö_må_ti_on_to_fr_lö'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [kl.] HH:mm',
            LLLL : 'dddd D MMMM YYYY [kl.] HH:mm',
            lll : 'D MMM YYYY HH:mm',
            llll : 'ddd D MMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Idag] LT',
            nextDay: '[Imorgon] LT',
            lastDay: '[Igår] LT',
            nextWeek: '[På] dddd LT',
            lastWeek: '[I] dddd[s] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : 'för %s sedan',
            s : 'några sekunder',
            ss : '%d sekunder',
            m : 'en minut',
            mm : '%d minuter',
            h : 'en timme',
            hh : '%d timmar',
            d : 'en dag',
            dd : '%d dagar',
            M : 'en månad',
            MM : '%d månader',
            y : 'ett år',
            yy : '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'e' :
                (b === 1) ? 'a' :
                (b === 2) ? 'a' :
                (b === 3) ? 'e' : 'e';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return sv;

})));


/***/ }),

/***/ "./node_modules/moment/locale/sw.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var sw = moment.defineLocale('sw', {
        months : 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
        weekdays : 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
        weekdaysShort : 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
        weekdaysMin : 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[leo saa] LT',
            nextDay : '[kesho saa] LT',
            nextWeek : '[wiki ijayo] dddd [saat] LT',
            lastDay : '[jana] LT',
            lastWeek : '[wiki iliyopita] dddd [saat] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s baadaye',
            past : 'tokea %s',
            s : 'hivi punde',
            ss : 'sekunde %d',
            m : 'dakika moja',
            mm : 'dakika %d',
            h : 'saa limoja',
            hh : 'masaa %d',
            d : 'siku moja',
            dd : 'masiku %d',
            M : 'mwezi mmoja',
            MM : 'miezi %d',
            y : 'mwaka mmoja',
            yy : 'miaka %d'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return sw;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ta.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '௧',
        '2': '௨',
        '3': '௩',
        '4': '௪',
        '5': '௫',
        '6': '௬',
        '7': '௭',
        '8': '௮',
        '9': '௯',
        '0': '௦'
    }, numberMap = {
        '௧': '1',
        '௨': '2',
        '௩': '3',
        '௪': '4',
        '௫': '5',
        '௬': '6',
        '௭': '7',
        '௮': '8',
        '௯': '9',
        '௦': '0'
    };

    var ta = moment.defineLocale('ta', {
        months : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
        monthsShort : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
        weekdays : 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
        weekdaysShort : 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
        weekdaysMin : 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, HH:mm',
            LLLL : 'dddd, D MMMM YYYY, HH:mm'
        },
        calendar : {
            sameDay : '[இன்று] LT',
            nextDay : '[நாளை] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[நேற்று] LT',
            lastWeek : '[கடந்த வாரம்] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s இல்',
            past : '%s முன்',
            s : 'ஒரு சில விநாடிகள்',
            ss : '%d விநாடிகள்',
            m : 'ஒரு நிமிடம்',
            mm : '%d நிமிடங்கள்',
            h : 'ஒரு மணி நேரம்',
            hh : '%d மணி நேரம்',
            d : 'ஒரு நாள்',
            dd : '%d நாட்கள்',
            M : 'ஒரு மாதம்',
            MM : '%d மாதங்கள்',
            y : 'ஒரு வருடம்',
            yy : '%d ஆண்டுகள்'
        },
        dayOfMonthOrdinalParse: /\d{1,2}வது/,
        ordinal : function (number) {
            return number + 'வது';
        },
        preparse: function (string) {
            return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        // refer http://ta.wikipedia.org/s/1er1
        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
        meridiem : function (hour, minute, isLower) {
            if (hour < 2) {
                return ' யாமம்';
            } else if (hour < 6) {
                return ' வைகறை';  // வைகறை
            } else if (hour < 10) {
                return ' காலை'; // காலை
            } else if (hour < 14) {
                return ' நண்பகல்'; // நண்பகல்
            } else if (hour < 18) {
                return ' எற்பாடு'; // எற்பாடு
            } else if (hour < 22) {
                return ' மாலை'; // மாலை
            } else {
                return ' யாமம்';
            }
        },
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'யாமம்') {
                return hour < 2 ? hour : hour + 12;
            } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
                return hour;
            } else if (meridiem === 'நண்பகல்') {
                return hour >= 10 ? hour : hour + 12;
            } else {
                return hour + 12;
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return ta;

})));


/***/ }),

/***/ "./node_modules/moment/locale/te.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var te = moment.defineLocale('te', {
        months : 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split('_'),
        monthsShort : 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split('_'),
        monthsParseExact : true,
        weekdays : 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),
        weekdaysShort : 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
        weekdaysMin : 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
        longDateFormat : {
            LT : 'A h:mm',
            LTS : 'A h:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm',
            LLLL : 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar : {
            sameDay : '[నేడు] LT',
            nextDay : '[రేపు] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[నిన్న] LT',
            lastWeek : '[గత] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s లో',
            past : '%s క్రితం',
            s : 'కొన్ని క్షణాలు',
            ss : '%d సెకన్లు',
            m : 'ఒక నిమిషం',
            mm : '%d నిమిషాలు',
            h : 'ఒక గంట',
            hh : '%d గంటలు',
            d : 'ఒక రోజు',
            dd : '%d రోజులు',
            M : 'ఒక నెల',
            MM : '%d నెలలు',
            y : 'ఒక సంవత్సరం',
            yy : '%d సంవత్సరాలు'
        },
        dayOfMonthOrdinalParse : /\d{1,2}వ/,
        ordinal : '%dవ',
        meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'రాత్రి') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'ఉదయం') {
                return hour;
            } else if (meridiem === 'మధ్యాహ్నం') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'సాయంత్రం') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'రాత్రి';
            } else if (hour < 10) {
                return 'ఉదయం';
            } else if (hour < 17) {
                return 'మధ్యాహ్నం';
            } else if (hour < 20) {
                return 'సాయంత్రం';
            } else {
                return 'రాత్రి';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return te;

})));


/***/ }),

/***/ "./node_modules/moment/locale/tet.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var tet = moment.defineLocale('tet', {
        months : 'Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru'.split('_'),
        monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays : 'Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu'.split('_'),
        weekdaysShort : 'Dom_Seg_Ters_Kua_Kint_Sest_Sab'.split('_'),
        weekdaysMin : 'Do_Seg_Te_Ku_Ki_Ses_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Ohin iha] LT',
            nextDay: '[Aban iha] LT',
            nextWeek: 'dddd [iha] LT',
            lastDay: '[Horiseik iha] LT',
            lastWeek: 'dddd [semana kotuk] [iha] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'iha %s',
            past : '%s liuba',
            s : 'minutu balun',
            ss : 'minutu %d',
            m : 'minutu ida',
            mm : 'minutu %d',
            h : 'oras ida',
            hh : 'oras %d',
            d : 'loron ida',
            dd : 'loron %d',
            M : 'fulan ida',
            MM : 'fulan %d',
            y : 'tinan ida',
            yy : 'tinan %d'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return tet;

})));


/***/ }),

/***/ "./node_modules/moment/locale/tg.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var suffixes = {
        0: '-ум',
        1: '-ум',
        2: '-юм',
        3: '-юм',
        4: '-ум',
        5: '-ум',
        6: '-ум',
        7: '-ум',
        8: '-ум',
        9: '-ум',
        10: '-ум',
        12: '-ум',
        13: '-ум',
        20: '-ум',
        30: '-юм',
        40: '-ум',
        50: '-ум',
        60: '-ум',
        70: '-ум',
        80: '-ум',
        90: '-ум',
        100: '-ум'
    };

    var tg = moment.defineLocale('tg', {
        months : 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
        monthsShort : 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
        weekdays : 'якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе'.split('_'),
        weekdaysShort : 'яшб_дшб_сшб_чшб_пшб_ҷум_шнб'.split('_'),
        weekdaysMin : 'яш_дш_сш_чш_пш_ҷм_шб'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Имрӯз соати] LT',
            nextDay : '[Пагоҳ соати] LT',
            lastDay : '[Дирӯз соати] LT',
            nextWeek : 'dddd[и] [ҳафтаи оянда соати] LT',
            lastWeek : 'dddd[и] [ҳафтаи гузашта соати] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'баъди %s',
            past : '%s пеш',
            s : 'якчанд сония',
            m : 'як дақиқа',
            mm : '%d дақиқа',
            h : 'як соат',
            hh : '%d соат',
            d : 'як рӯз',
            dd : '%d рӯз',
            M : 'як моҳ',
            MM : '%d моҳ',
            y : 'як сол',
            yy : '%d сол'
        },
        meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'шаб') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'субҳ') {
                return hour;
            } else if (meridiem === 'рӯз') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'бегоҳ') {
                return hour + 12;
            }
        },
        meridiem: function (hour, minute, isLower) {
            if (hour < 4) {
                return 'шаб';
            } else if (hour < 11) {
                return 'субҳ';
            } else if (hour < 16) {
                return 'рӯз';
            } else if (hour < 19) {
                return 'бегоҳ';
            } else {
                return 'шаб';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
        ordinal: function (number) {
            var a = number % 10,
                b = number >= 100 ? 100 : null;
            return number + (suffixes[number] || suffixes[a] || suffixes[b]);
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1th is the first week of the year.
        }
    });

    return tg;

})));


/***/ }),

/***/ "./node_modules/moment/locale/th.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var th = moment.defineLocale('th', {
        months : 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
        monthsShort : 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
        monthsParseExact: true,
        weekdays : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
        weekdaysShort : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'), // yes, three characters difference
        weekdaysMin : 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY เวลา H:mm',
            LLLL : 'วันddddที่ D MMMM YYYY เวลา H:mm'
        },
        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
        isPM: function (input) {
            return input === 'หลังเที่ยง';
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ก่อนเที่ยง';
            } else {
                return 'หลังเที่ยง';
            }
        },
        calendar : {
            sameDay : '[วันนี้ เวลา] LT',
            nextDay : '[พรุ่งนี้ เวลา] LT',
            nextWeek : 'dddd[หน้า เวลา] LT',
            lastDay : '[เมื่อวานนี้ เวลา] LT',
            lastWeek : '[วัน]dddd[ที่แล้ว เวลา] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'อีก %s',
            past : '%sที่แล้ว',
            s : 'ไม่กี่วินาที',
            ss : '%d วินาที',
            m : '1 นาที',
            mm : '%d นาที',
            h : '1 ชั่วโมง',
            hh : '%d ชั่วโมง',
            d : '1 วัน',
            dd : '%d วัน',
            M : '1 เดือน',
            MM : '%d เดือน',
            y : '1 ปี',
            yy : '%d ปี'
        }
    });

    return th;

})));


/***/ }),

/***/ "./node_modules/moment/locale/tl-ph.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var tlPh = moment.defineLocale('tl-ph', {
        months : 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
        monthsShort : 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
        weekdays : 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
        weekdaysShort : 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
        weekdaysMin : 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'MM/D/YYYY',
            LL : 'MMMM D, YYYY',
            LLL : 'MMMM D, YYYY HH:mm',
            LLLL : 'dddd, MMMM DD, YYYY HH:mm'
        },
        calendar : {
            sameDay: 'LT [ngayong araw]',
            nextDay: '[Bukas ng] LT',
            nextWeek: 'LT [sa susunod na] dddd',
            lastDay: 'LT [kahapon]',
            lastWeek: 'LT [noong nakaraang] dddd',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'sa loob ng %s',
            past : '%s ang nakalipas',
            s : 'ilang segundo',
            ss : '%d segundo',
            m : 'isang minuto',
            mm : '%d minuto',
            h : 'isang oras',
            hh : '%d oras',
            d : 'isang araw',
            dd : '%d araw',
            M : 'isang buwan',
            MM : '%d buwan',
            y : 'isang taon',
            yy : '%d taon'
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal : function (number) {
            return number;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return tlPh;

})));


/***/ }),

/***/ "./node_modules/moment/locale/tlh.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var numbersNouns = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');

    function translateFuture(output) {
        var time = output;
        time = (output.indexOf('jaj') !== -1) ?
        time.slice(0, -3) + 'leS' :
        (output.indexOf('jar') !== -1) ?
        time.slice(0, -3) + 'waQ' :
        (output.indexOf('DIS') !== -1) ?
        time.slice(0, -3) + 'nem' :
        time + ' pIq';
        return time;
    }

    function translatePast(output) {
        var time = output;
        time = (output.indexOf('jaj') !== -1) ?
        time.slice(0, -3) + 'Hu’' :
        (output.indexOf('jar') !== -1) ?
        time.slice(0, -3) + 'wen' :
        (output.indexOf('DIS') !== -1) ?
        time.slice(0, -3) + 'ben' :
        time + ' ret';
        return time;
    }

    function translate(number, withoutSuffix, string, isFuture) {
        var numberNoun = numberAsNoun(number);
        switch (string) {
            case 'ss':
                return numberNoun + ' lup';
            case 'mm':
                return numberNoun + ' tup';
            case 'hh':
                return numberNoun + ' rep';
            case 'dd':
                return numberNoun + ' jaj';
            case 'MM':
                return numberNoun + ' jar';
            case 'yy':
                return numberNoun + ' DIS';
        }
    }

    function numberAsNoun(number) {
        var hundred = Math.floor((number % 1000) / 100),
        ten = Math.floor((number % 100) / 10),
        one = number % 10,
        word = '';
        if (hundred > 0) {
            word += numbersNouns[hundred] + 'vatlh';
        }
        if (ten > 0) {
            word += ((word !== '') ? ' ' : '') + numbersNouns[ten] + 'maH';
        }
        if (one > 0) {
            word += ((word !== '') ? ' ' : '') + numbersNouns[one];
        }
        return (word === '') ? 'pagh' : word;
    }

    var tlh = moment.defineLocale('tlh', {
        months : 'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split('_'),
        monthsShort : 'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split('_'),
        monthsParseExact : true,
        weekdays : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        weekdaysShort : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        weekdaysMin : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[DaHjaj] LT',
            nextDay: '[wa’leS] LT',
            nextWeek: 'LLL',
            lastDay: '[wa’Hu’] LT',
            lastWeek: 'LLL',
            sameElse: 'L'
        },
        relativeTime : {
            future : translateFuture,
            past : translatePast,
            s : 'puS lup',
            ss : translate,
            m : 'wa’ tup',
            mm : translate,
            h : 'wa’ rep',
            hh : translate,
            d : 'wa’ jaj',
            dd : translate,
            M : 'wa’ jar',
            MM : translate,
            y : 'wa’ DIS',
            yy : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return tlh;

})));


/***/ }),

/***/ "./node_modules/moment/locale/tr.js":
/***/ (function(module, exports, __webpack_require__) {


;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';

    var suffixes = {
        1: '\'inci',
        5: '\'inci',
        8: '\'inci',
        70: '\'inci',
        80: '\'inci',
        2: '\'nci',
        7: '\'nci',
        20: '\'nci',
        50: '\'nci',
        3: '\'üncü',
        4: '\'üncü',
        100: '\'üncü',
        6: '\'ncı',
        9: '\'uncu',
        10: '\'uncu',
        30: '\'uncu',
        60: '\'ıncı',
        90: '\'ıncı'
    };

    var tr = moment.defineLocale('tr', {
        months : 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
        monthsShort : 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
        weekdays : 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
        weekdaysShort : 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
        weekdaysMin : 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[bugün saat] LT',
            nextDay : '[yarın saat] LT',
            nextWeek : '[gelecek] dddd [saat] LT',
            lastDay : '[dün] LT',
            lastWeek : '[geçen] dddd [saat] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s sonra',
            past : '%s önce',
            s : 'birkaç saniye',
            ss : '%d saniye',
            m : 'bir dakika',
            mm : '%d dakika',
            h : 'bir saat',
            hh : '%d saat',
            d : 'bir gün',
            dd : '%d gün',
            M : 'bir ay',
            MM : '%d ay',
            y : 'bir yıl',
            yy : '%d yıl'
        },
        ordinal: function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'Do':
                case 'DD':
                    return number;
                default:
                    if (number === 0) {  // special case for zero
                        return number + '\'ıncı';
                    }
                    var a = number % 10,
                        b = number % 100 - a,
                        c = number >= 100 ? 100 : null;
                    return number + (suffixes[a] || suffixes[b] || suffixes[c]);
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return tr;

})));


/***/ }),

/***/ "./node_modules/moment/locale/tzl.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    // After the year there should be a slash and the amount of years since December 26, 1979 in Roman numerals.
    // This is currently too difficult (maybe even impossible) to add.
    var tzl = moment.defineLocale('tzl', {
        months : 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
        monthsShort : 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
        weekdays : 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
        weekdaysShort : 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
        weekdaysMin : 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM [dallas] YYYY',
            LLL : 'D. MMMM [dallas] YYYY HH.mm',
            LLLL : 'dddd, [li] D. MMMM [dallas] YYYY HH.mm'
        },
        meridiemParse: /d\'o|d\'a/i,
        isPM : function (input) {
            return 'd\'o' === input.toLowerCase();
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'd\'o' : 'D\'O';
            } else {
                return isLower ? 'd\'a' : 'D\'A';
            }
        },
        calendar : {
            sameDay : '[oxhi à] LT',
            nextDay : '[demà à] LT',
            nextWeek : 'dddd [à] LT',
            lastDay : '[ieiri à] LT',
            lastWeek : '[sür el] dddd [lasteu à] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'osprei %s',
            past : 'ja%s',
            s : processRelativeTime,
            ss : processRelativeTime,
            m : processRelativeTime,
            mm : processRelativeTime,
            h : processRelativeTime,
            hh : processRelativeTime,
            d : processRelativeTime,
            dd : processRelativeTime,
            M : processRelativeTime,
            MM : processRelativeTime,
            y : processRelativeTime,
            yy : processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            's': ['viensas secunds', '\'iensas secunds'],
            'ss': [number + ' secunds', '' + number + ' secunds'],
            'm': ['\'n míut', '\'iens míut'],
            'mm': [number + ' míuts', '' + number + ' míuts'],
            'h': ['\'n þora', '\'iensa þora'],
            'hh': [number + ' þoras', '' + number + ' þoras'],
            'd': ['\'n ziua', '\'iensa ziua'],
            'dd': [number + ' ziuas', '' + number + ' ziuas'],
            'M': ['\'n mes', '\'iens mes'],
            'MM': [number + ' mesen', '' + number + ' mesen'],
            'y': ['\'n ar', '\'iens ar'],
            'yy': [number + ' ars', '' + number + ' ars']
        };
        return isFuture ? format[key][0] : (withoutSuffix ? format[key][0] : format[key][1]);
    }

    return tzl;

})));


/***/ }),

/***/ "./node_modules/moment/locale/tzm-latn.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var tzmLatn = moment.defineLocale('tzm-latn', {
        months : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
        monthsShort : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
        weekdays : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        weekdaysShort : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        weekdaysMin : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[asdkh g] LT',
            nextDay: '[aska g] LT',
            nextWeek: 'dddd [g] LT',
            lastDay: '[assant g] LT',
            lastWeek: 'dddd [g] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'dadkh s yan %s',
            past : 'yan %s',
            s : 'imik',
            ss : '%d imik',
            m : 'minuḍ',
            mm : '%d minuḍ',
            h : 'saɛa',
            hh : '%d tassaɛin',
            d : 'ass',
            dd : '%d ossan',
            M : 'ayowr',
            MM : '%d iyyirn',
            y : 'asgas',
            yy : '%d isgasn'
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return tzmLatn;

})));


/***/ }),

/***/ "./node_modules/moment/locale/tzm.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var tzm = moment.defineLocale('tzm', {
        months : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
        monthsShort : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
        weekdays : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        weekdaysShort : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        weekdaysMin : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS: 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
            nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
            nextWeek: 'dddd [ⴴ] LT',
            lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
            lastWeek: 'dddd [ⴴ] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
            past : 'ⵢⴰⵏ %s',
            s : 'ⵉⵎⵉⴽ',
            ss : '%d ⵉⵎⵉⴽ',
            m : 'ⵎⵉⵏⵓⴺ',
            mm : '%d ⵎⵉⵏⵓⴺ',
            h : 'ⵙⴰⵄⴰ',
            hh : '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
            d : 'ⴰⵙⵙ',
            dd : '%d oⵙⵙⴰⵏ',
            M : 'ⴰⵢoⵓⵔ',
            MM : '%d ⵉⵢⵢⵉⵔⵏ',
            y : 'ⴰⵙⴳⴰⵙ',
            yy : '%d ⵉⵙⴳⴰⵙⵏ'
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return tzm;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ug-cn.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js language configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var ugCn = moment.defineLocale('ug-cn', {
        months: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split(
            '_'
        ),
        monthsShort: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split(
            '_'
        ),
        weekdays: 'يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە'.split(
            '_'
        ),
        weekdaysShort: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
        weekdaysMin: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY-يىلىM-ئاينىڭD-كۈنى',
            LLL: 'YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm',
            LLLL: 'dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm'
        },
        meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (
                meridiem === 'يېرىم كېچە' ||
                meridiem === 'سەھەر' ||
                meridiem === 'چۈشتىن بۇرۇن'
            ) {
                return hour;
            } else if (meridiem === 'چۈشتىن كېيىن' || meridiem === 'كەچ') {
                return hour + 12;
            } else {
                return hour >= 11 ? hour : hour + 12;
            }
        },
        meridiem: function (hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 600) {
                return 'يېرىم كېچە';
            } else if (hm < 900) {
                return 'سەھەر';
            } else if (hm < 1130) {
                return 'چۈشتىن بۇرۇن';
            } else if (hm < 1230) {
                return 'چۈش';
            } else if (hm < 1800) {
                return 'چۈشتىن كېيىن';
            } else {
                return 'كەچ';
            }
        },
        calendar: {
            sameDay: '[بۈگۈن سائەت] LT',
            nextDay: '[ئەتە سائەت] LT',
            nextWeek: '[كېلەركى] dddd [سائەت] LT',
            lastDay: '[تۆنۈگۈن] LT',
            lastWeek: '[ئالدىنقى] dddd [سائەت] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s كېيىن',
            past: '%s بۇرۇن',
            s: 'نەچچە سېكونت',
            ss: '%d سېكونت',
            m: 'بىر مىنۇت',
            mm: '%d مىنۇت',
            h: 'بىر سائەت',
            hh: '%d سائەت',
            d: 'بىر كۈن',
            dd: '%d كۈن',
            M: 'بىر ئاي',
            MM: '%d ئاي',
            y: 'بىر يىل',
            yy: '%d يىل'
        },

        dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return number + '-كۈنى';
                case 'w':
                case 'W':
                    return number + '-ھەپتە';
                default:
                    return number;
            }
        },
        preparse: function (string) {
            return string.replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/,/g, '،');
        },
        week: {
            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
            dow: 1, // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        }
    });

    return ugCn;

})));


/***/ }),

/***/ "./node_modules/moment/locale/uk.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    function plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }
    function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
            'ss': withoutSuffix ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд',
            'mm': withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
            'hh': withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
            'dd': 'день_дні_днів',
            'MM': 'місяць_місяці_місяців',
            'yy': 'рік_роки_років'
        };
        if (key === 'm') {
            return withoutSuffix ? 'хвилина' : 'хвилину';
        }
        else if (key === 'h') {
            return withoutSuffix ? 'година' : 'годину';
        }
        else {
            return number + ' ' + plural(format[key], +number);
        }
    }
    function weekdaysCaseReplace(m, format) {
        var weekdays = {
            'nominative': 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
            'accusative': 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
            'genitive': 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
        };

        if (!m) {
            return weekdays['nominative'];
        }

        var nounCase = (/(\[[ВвУу]\]) ?dddd/).test(format) ?
            'accusative' :
            ((/\[?(?:минулої|наступної)? ?\] ?dddd/).test(format) ?
                'genitive' :
                'nominative');
        return weekdays[nounCase][m.day()];
    }
    function processHoursFunction(str) {
        return function () {
            return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
        };
    }

    var uk = moment.defineLocale('uk', {
        months : {
            'format': 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
            'standalone': 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_')
        },
        monthsShort : 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
        weekdays : weekdaysCaseReplace,
        weekdaysShort : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY р.',
            LLL : 'D MMMM YYYY р., HH:mm',
            LLLL : 'dddd, D MMMM YYYY р., HH:mm'
        },
        calendar : {
            sameDay: processHoursFunction('[Сьогодні '),
            nextDay: processHoursFunction('[Завтра '),
            lastDay: processHoursFunction('[Вчора '),
            nextWeek: processHoursFunction('[У] dddd ['),
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return processHoursFunction('[Минулої] dddd [').call(this);
                    case 1:
                    case 2:
                    case 4:
                        return processHoursFunction('[Минулого] dddd [').call(this);
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'за %s',
            past : '%s тому',
            s : 'декілька секунд',
            ss : relativeTimeWithPlural,
            m : relativeTimeWithPlural,
            mm : relativeTimeWithPlural,
            h : 'годину',
            hh : relativeTimeWithPlural,
            d : 'день',
            dd : relativeTimeWithPlural,
            M : 'місяць',
            MM : relativeTimeWithPlural,
            y : 'рік',
            yy : relativeTimeWithPlural
        },
        // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
        meridiemParse: /ночі|ранку|дня|вечора/,
        isPM: function (input) {
            return /^(дня|вечора)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'ночі';
            } else if (hour < 12) {
                return 'ранку';
            } else if (hour < 17) {
                return 'дня';
            } else {
                return 'вечора';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'M':
                case 'd':
                case 'DDD':
                case 'w':
                case 'W':
                    return number + '-й';
                case 'D':
                    return number + '-го';
                default:
                    return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return uk;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ur.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var months = [
        'جنوری',
        'فروری',
        'مارچ',
        'اپریل',
        'مئی',
        'جون',
        'جولائی',
        'اگست',
        'ستمبر',
        'اکتوبر',
        'نومبر',
        'دسمبر'
    ];
    var days = [
        'اتوار',
        'پیر',
        'منگل',
        'بدھ',
        'جمعرات',
        'جمعہ',
        'ہفتہ'
    ];

    var ur = moment.defineLocale('ur', {
        months : months,
        monthsShort : months,
        weekdays : days,
        weekdaysShort : days,
        weekdaysMin : days,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd، D MMMM YYYY HH:mm'
        },
        meridiemParse: /صبح|شام/,
        isPM : function (input) {
            return 'شام' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'صبح';
            }
            return 'شام';
        },
        calendar : {
            sameDay : '[آج بوقت] LT',
            nextDay : '[کل بوقت] LT',
            nextWeek : 'dddd [بوقت] LT',
            lastDay : '[گذشتہ روز بوقت] LT',
            lastWeek : '[گذشتہ] dddd [بوقت] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s بعد',
            past : '%s قبل',
            s : 'چند سیکنڈ',
            ss : '%d سیکنڈ',
            m : 'ایک منٹ',
            mm : '%d منٹ',
            h : 'ایک گھنٹہ',
            hh : '%d گھنٹے',
            d : 'ایک دن',
            dd : '%d دن',
            M : 'ایک ماہ',
            MM : '%d ماہ',
            y : 'ایک سال',
            yy : '%d سال'
        },
        preparse: function (string) {
            return string.replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/,/g, '،');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return ur;

})));


/***/ }),

/***/ "./node_modules/moment/locale/uz-latn.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var uzLatn = moment.defineLocale('uz-latn', {
        months : 'Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr'.split('_'),
        monthsShort : 'Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek'.split('_'),
        weekdays : 'Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba'.split('_'),
        weekdaysShort : 'Yak_Dush_Sesh_Chor_Pay_Jum_Shan'.split('_'),
        weekdaysMin : 'Ya_Du_Se_Cho_Pa_Ju_Sha'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'D MMMM YYYY, dddd HH:mm'
        },
        calendar : {
            sameDay : '[Bugun soat] LT [da]',
            nextDay : '[Ertaga] LT [da]',
            nextWeek : 'dddd [kuni soat] LT [da]',
            lastDay : '[Kecha soat] LT [da]',
            lastWeek : '[O\'tgan] dddd [kuni soat] LT [da]',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'Yaqin %s ichida',
            past : 'Bir necha %s oldin',
            s : 'soniya',
            ss : '%d soniya',
            m : 'bir daqiqa',
            mm : '%d daqiqa',
            h : 'bir soat',
            hh : '%d soat',
            d : 'bir kun',
            dd : '%d kun',
            M : 'bir oy',
            MM : '%d oy',
            y : 'bir yil',
            yy : '%d yil'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return uzLatn;

})));


/***/ }),

/***/ "./node_modules/moment/locale/uz.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var uz = moment.defineLocale('uz', {
        months : 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
        monthsShort : 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
        weekdays : 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
        weekdaysShort : 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
        weekdaysMin : 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'D MMMM YYYY, dddd HH:mm'
        },
        calendar : {
            sameDay : '[Бугун соат] LT [да]',
            nextDay : '[Эртага] LT [да]',
            nextWeek : 'dddd [куни соат] LT [да]',
            lastDay : '[Кеча соат] LT [да]',
            lastWeek : '[Утган] dddd [куни соат] LT [да]',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'Якин %s ичида',
            past : 'Бир неча %s олдин',
            s : 'фурсат',
            ss : '%d фурсат',
            m : 'бир дакика',
            mm : '%d дакика',
            h : 'бир соат',
            hh : '%d соат',
            d : 'бир кун',
            dd : '%d кун',
            M : 'бир ой',
            MM : '%d ой',
            y : 'бир йил',
            yy : '%d йил'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return uz;

})));


/***/ }),

/***/ "./node_modules/moment/locale/vi.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var vi = moment.defineLocale('vi', {
        months : 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
        monthsShort : 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
        monthsParseExact : true,
        weekdays : 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
        weekdaysShort : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        weekdaysMin : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        weekdaysParseExact : true,
        meridiemParse: /sa|ch/i,
        isPM : function (input) {
            return /^ch$/i.test(input);
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 12) {
                return isLower ? 'sa' : 'SA';
            } else {
                return isLower ? 'ch' : 'CH';
            }
        },
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM [năm] YYYY',
            LLL : 'D MMMM [năm] YYYY HH:mm',
            LLLL : 'dddd, D MMMM [năm] YYYY HH:mm',
            l : 'DD/M/YYYY',
            ll : 'D MMM YYYY',
            lll : 'D MMM YYYY HH:mm',
            llll : 'ddd, D MMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Hôm nay lúc] LT',
            nextDay: '[Ngày mai lúc] LT',
            nextWeek: 'dddd [tuần tới lúc] LT',
            lastDay: '[Hôm qua lúc] LT',
            lastWeek: 'dddd [tuần rồi lúc] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : '%s tới',
            past : '%s trước',
            s : 'vài giây',
            ss : '%d giây' ,
            m : 'một phút',
            mm : '%d phút',
            h : 'một giờ',
            hh : '%d giờ',
            d : 'một ngày',
            dd : '%d ngày',
            M : 'một tháng',
            MM : '%d tháng',
            y : 'một năm',
            yy : '%d năm'
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal : function (number) {
            return number;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return vi;

})));


/***/ }),

/***/ "./node_modules/moment/locale/x-pseudo.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var xPseudo = moment.defineLocale('x-pseudo', {
        months : 'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split('_'),
        monthsShort : 'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split('_'),
        monthsParseExact : true,
        weekdays : 'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split('_'),
        weekdaysShort : 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
        weekdaysMin : 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[T~ódá~ý át] LT',
            nextDay : '[T~ómó~rró~w át] LT',
            nextWeek : 'dddd [át] LT',
            lastDay : '[Ý~ést~érdá~ý át] LT',
            lastWeek : '[L~ást] dddd [át] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'í~ñ %s',
            past : '%s á~gó',
            s : 'á ~féw ~sécó~ñds',
            ss : '%d s~écóñ~ds',
            m : 'á ~míñ~úté',
            mm : '%d m~íñú~tés',
            h : 'á~ñ hó~úr',
            hh : '%d h~óúrs',
            d : 'á ~dáý',
            dd : '%d d~áýs',
            M : 'á ~móñ~th',
            MM : '%d m~óñt~hs',
            y : 'á ~ýéár',
            yy : '%d ý~éárs'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return xPseudo;

})));


/***/ }),

/***/ "./node_modules/moment/locale/yo.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var yo = moment.defineLocale('yo', {
        months : 'Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀'.split('_'),
        monthsShort : 'Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀'.split('_'),
        weekdays : 'Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta'.split('_'),
        weekdaysShort : 'Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá'.split('_'),
        weekdaysMin : 'Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendar : {
            sameDay : '[Ònì ni] LT',
            nextDay : '[Ọ̀la ni] LT',
            nextWeek : 'dddd [Ọsẹ̀ tón\'bọ] [ni] LT',
            lastDay : '[Àna ni] LT',
            lastWeek : 'dddd [Ọsẹ̀ tólọ́] [ni] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'ní %s',
            past : '%s kọjá',
            s : 'ìsẹjú aayá die',
            ss :'aayá %d',
            m : 'ìsẹjú kan',
            mm : 'ìsẹjú %d',
            h : 'wákati kan',
            hh : 'wákati %d',
            d : 'ọjọ́ kan',
            dd : 'ọjọ́ %d',
            M : 'osù kan',
            MM : 'osù %d',
            y : 'ọdún kan',
            yy : 'ọdún %d'
        },
        dayOfMonthOrdinalParse : /ọjọ́\s\d{1,2}/,
        ordinal : 'ọjọ́ %d',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4 // The week that contains Jan 4th is the first week of the year.
        }
    });

    return yo;

})));


/***/ }),

/***/ "./node_modules/moment/locale/zh-cn.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var zhCn = moment.defineLocale('zh-cn', {
        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort : '周日_周一_周二_周三_周四_周五_周六'.split('_'),
        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY/MM/DD',
            LL : 'YYYY年M月D日',
            LLL : 'YYYY年M月D日Ah点mm分',
            LLLL : 'YYYY年M月D日ddddAh点mm分',
            l : 'YYYY/M/D',
            ll : 'YYYY年M月D日',
            lll : 'YYYY年M月D日 HH:mm',
            llll : 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '凌晨' || meridiem === '早上' ||
                    meridiem === '上午') {
                return hour;
            } else if (meridiem === '下午' || meridiem === '晚上') {
                return hour + 12;
            } else {
                // '中午'
                return hour >= 11 ? hour : hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 600) {
                return '凌晨';
            } else if (hm < 900) {
                return '早上';
            } else if (hm < 1130) {
                return '上午';
            } else if (hm < 1230) {
                return '中午';
            } else if (hm < 1800) {
                return '下午';
            } else {
                return '晚上';
            }
        },
        calendar : {
            sameDay : '[今天]LT',
            nextDay : '[明天]LT',
            nextWeek : '[下]ddddLT',
            lastDay : '[昨天]LT',
            lastWeek : '[上]ddddLT',
            sameElse : 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
        ordinal : function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return number + '日';
                case 'M':
                    return number + '月';
                case 'w':
                case 'W':
                    return number + '周';
                default:
                    return number;
            }
        },
        relativeTime : {
            future : '%s内',
            past : '%s前',
            s : '几秒',
            ss : '%d 秒',
            m : '1 分钟',
            mm : '%d 分钟',
            h : '1 小时',
            hh : '%d 小时',
            d : '1 天',
            dd : '%d 天',
            M : '1 个月',
            MM : '%d 个月',
            y : '1 年',
            yy : '%d 年'
        },
        week : {
            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return zhCn;

})));


/***/ }),

/***/ "./node_modules/moment/locale/zh-hk.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var zhHk = moment.defineLocale('zh-hk', {
        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort : '週日_週一_週二_週三_週四_週五_週六'.split('_'),
        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY/MM/DD',
            LL : 'YYYY年M月D日',
            LLL : 'YYYY年M月D日 HH:mm',
            LLLL : 'YYYY年M月D日dddd HH:mm',
            l : 'YYYY/M/D',
            ll : 'YYYY年M月D日',
            lll : 'YYYY年M月D日 HH:mm',
            llll : 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
                return hour;
            } else if (meridiem === '中午') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === '下午' || meridiem === '晚上') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 600) {
                return '凌晨';
            } else if (hm < 900) {
                return '早上';
            } else if (hm < 1130) {
                return '上午';
            } else if (hm < 1230) {
                return '中午';
            } else if (hm < 1800) {
                return '下午';
            } else {
                return '晚上';
            }
        },
        calendar : {
            sameDay : '[今天]LT',
            nextDay : '[明天]LT',
            nextWeek : '[下]ddddLT',
            lastDay : '[昨天]LT',
            lastWeek : '[上]ddddLT',
            sameElse : 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal : function (number, period) {
            switch (period) {
                case 'd' :
                case 'D' :
                case 'DDD' :
                    return number + '日';
                case 'M' :
                    return number + '月';
                case 'w' :
                case 'W' :
                    return number + '週';
                default :
                    return number;
            }
        },
        relativeTime : {
            future : '%s內',
            past : '%s前',
            s : '幾秒',
            ss : '%d 秒',
            m : '1 分鐘',
            mm : '%d 分鐘',
            h : '1 小時',
            hh : '%d 小時',
            d : '1 天',
            dd : '%d 天',
            M : '1 個月',
            MM : '%d 個月',
            y : '1 年',
            yy : '%d 年'
        }
    });

    return zhHk;

})));


/***/ }),

/***/ "./node_modules/moment/locale/zh-tw.js":
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__("./node_modules/moment/moment.js")) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


    var zhTw = moment.defineLocale('zh-tw', {
        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort : '週日_週一_週二_週三_週四_週五_週六'.split('_'),
        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY/MM/DD',
            LL : 'YYYY年M月D日',
            LLL : 'YYYY年M月D日 HH:mm',
            LLLL : 'YYYY年M月D日dddd HH:mm',
            l : 'YYYY/M/D',
            ll : 'YYYY年M月D日',
            lll : 'YYYY年M月D日 HH:mm',
            llll : 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
                return hour;
            } else if (meridiem === '中午') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === '下午' || meridiem === '晚上') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 600) {
                return '凌晨';
            } else if (hm < 900) {
                return '早上';
            } else if (hm < 1130) {
                return '上午';
            } else if (hm < 1230) {
                return '中午';
            } else if (hm < 1800) {
                return '下午';
            } else {
                return '晚上';
            }
        },
        calendar : {
            sameDay : '[今天] LT',
            nextDay : '[明天] LT',
            nextWeek : '[下]dddd LT',
            lastDay : '[昨天] LT',
            lastWeek : '[上]dddd LT',
            sameElse : 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal : function (number, period) {
            switch (period) {
                case 'd' :
                case 'D' :
                case 'DDD' :
                    return number + '日';
                case 'M' :
                    return number + '月';
                case 'w' :
                case 'W' :
                    return number + '週';
                default :
                    return number;
            }
        },
        relativeTime : {
            future : '%s內',
            past : '%s前',
            s : '幾秒',
            ss : '%d 秒',
            m : '1 分鐘',
            mm : '%d 分鐘',
            h : '1 小時',
            hh : '%d 小時',
            d : '1 天',
            dd : '%d 天',
            M : '1 個月',
            MM : '%d 個月',
            y : '1 年',
            yy : '%d 年'
        }
    });

    return zhTw;

})));


/***/ }),

/***/ "./node_modules/moment/moment.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var require;//! moment.js

;(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

    var hookCallback;

    function hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false,
            parsedDateParts : [],
            meridiem        : null,
            rfc2822         : false,
            weekdayMismatch : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid (flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false &&
                (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' + (/\d{1,2}/).source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) &&
                    !hasOwnProp(childConfig, prop) &&
                    isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function calendar (key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        ss : '%d seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({unit: u, priority: priorities[u]});
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1 (mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            }
            else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet (units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }


    function stringSet (units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        if (!m) {
            return isArray(this._months) ? this._months :
                this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] :
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort :
                this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate (y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date = new Date(y, m, d, h, M, s, ms);

        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
            date.setFullYear(y);
        }
        return date;
    }

    function createUTCDate (y) {
        var date = new Date(Date.UTC.apply(null, arguments));

        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd',   function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd',   function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        if (!m) {
            return isArray(this._weekdays) ? this._weekdays :
                this._weekdays['standalone'];
        }
        return isArray(this._weekdays) ? this._weekdays[m.day()] :
            this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }


    function computeWeekdaysParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('k',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

    // internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && (typeof module !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = require;
                __webpack_require__("./node_modules/moment/locale recursive ^\\.\\/.*$")("./" + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {}
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
            else {
                if ((typeof console !==  'undefined') && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn('Locale ' + key +  ' not found. Did you forget to load it?');
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride',
                        'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);


            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            var curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        }  else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if ((isObject(input) && isObjectEmpty(input)) ||
                (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function absRound (number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ?
          0 :
          parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            }
            else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])                         * sign,
                h  : toInt(match[HOUR])                         * sign,
                m  : toInt(match[MINUTE])                       * sign,
                s  : toInt(match[SECOND])                       * sign,
                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                w : parseIso(match[4], sign),
                d : parseIso(match[5], sign),
                h : parseIso(match[6], sign),
                m : parseIso(match[7], sign),
                s : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add      = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1 (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween (from, to, units, inclusivity) {
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units || 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input,units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input,units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year': output = monthDiff(this, that) / 12; break;
            case 'month': output = monthDiff(this, that); break;
            case 'quarter': output = monthDiff(this, that) / 3; break;
            case 'second': output = (this - that) / 1e3; break; // 1000
            case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
            case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
            case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
            case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default: output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect () {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format (inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    function startOf (units) {
        units = normalizeUnits(units);
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (units) {
            case 'year':
                this.month(0);
                /* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
                /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
            case 'date':
                this.hours(0);
                /* falls through */
            case 'hour':
                this.minutes(0);
                /* falls through */
            case 'minute':
                this.seconds(0);
                /* falls through */
            case 'second':
                this.milliseconds(0);
        }

        // weeks are a special case
        if (units === 'week') {
            this.weekday(0);
        }
        if (units === 'isoWeek') {
            this.isoWeekday(1);
        }

        // quarters are also special
        if (units === 'quarter') {
            this.month(Math.floor(this.month() / 3) * 3);
        }

        return this;
    }

    function endOf (units) {
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond') {
            return this;
        }

        // 'date' is an alias for 'day', so it should be considered as such.
        if (units === 'date') {
            units = 'day';
        }

        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
    }

    function valueOf () {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate () {
        return new Date(this.valueOf());
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2 () {
        return isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);


    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ?
          (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
          locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add               = add;
    proto.calendar          = calendar$1;
    proto.clone             = clone;
    proto.diff              = diff;
    proto.endOf             = endOf;
    proto.format            = format;
    proto.from              = from;
    proto.fromNow           = fromNow;
    proto.to                = to;
    proto.toNow             = toNow;
    proto.get               = stringGet;
    proto.invalidAt         = invalidAt;
    proto.isAfter           = isAfter;
    proto.isBefore          = isBefore;
    proto.isBetween         = isBetween;
    proto.isSame            = isSame;
    proto.isSameOrAfter     = isSameOrAfter;
    proto.isSameOrBefore    = isSameOrBefore;
    proto.isValid           = isValid$2;
    proto.lang              = lang;
    proto.locale            = locale;
    proto.localeData        = localeData;
    proto.max               = prototypeMax;
    proto.min               = prototypeMin;
    proto.parsingFlags      = parsingFlags;
    proto.set               = stringSet;
    proto.startOf           = startOf;
    proto.subtract          = subtract;
    proto.toArray           = toArray;
    proto.toObject          = toObject;
    proto.toDate            = toDate;
    proto.toISOString       = toISOString;
    proto.inspect           = inspect;
    proto.toJSON            = toJSON;
    proto.toString          = toString;
    proto.unix              = unix;
    proto.valueOf           = valueOf;
    proto.creationData      = creationData;
    proto.year       = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear    = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month       = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week           = proto.weeks        = getSetWeek;
    proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
    proto.weeksInYear    = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date       = getSetDayOfMonth;
    proto.day        = proto.days             = getSetDayOfWeek;
    proto.weekday    = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear  = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset            = getSetOffset;
    proto.utc                  = setOffsetToUTC;
    proto.local                = setOffsetToLocal;
    proto.parseZone            = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST                = isDaylightSavingTime;
    proto.isLocal              = isLocal;
    proto.isUtcOffset          = isUtcOffset;
    proto.isUtc                = isUtc;
    proto.isUTC                = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix (input) {
        return createLocal(input * 1000);
    }

    function createInZone () {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat (string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar        = calendar;
    proto$1.longDateFormat  = longDateFormat;
    proto$1.invalidDate     = invalidDate;
    proto$1.ordinal         = ordinal;
    proto$1.preparse        = preParsePostFormat;
    proto$1.postformat      = preParsePostFormat;
    proto$1.relativeTime    = relativeTime;
    proto$1.pastFuture      = pastFuture;
    proto$1.set             = set;

    proto$1.months            =        localeMonths;
    proto$1.monthsShort       =        localeMonthsShort;
    proto$1.monthsParse       =        localeMonthsParse;
    proto$1.monthsRegex       = monthsRegex;
    proto$1.monthsShortRegex  = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays       =        localeWeekdays;
    proto$1.weekdaysMin    =        localeWeekdaysMin;
    proto$1.weekdaysShort  =        localeWeekdaysShort;
    proto$1.weekdaysParse  =        localeWeekdaysParse;

    proto$1.weekdaysRegex       =        weekdaysRegex;
    proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
    proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1 (format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl (format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl (localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths (format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort (format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports

    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

    var mathAbs = Math.abs;

    function abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function addSubtract$1 (duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1 (input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1 (input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'year') {
            days   = this._days   + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1 () {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asYears        = makeAs('y');

    function clone$1 () {
        return createDuration(this);
    }

    function get$2 (units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        ss: 44,         // a few seconds to seconds
        s : 45,         // seconds to minute
        m : 45,         // minutes to hour
        h : 22,         // hours to day
        d : 26,         // days to month
        M : 11          // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds <= thresholds.ss && ['s', seconds]  ||
                seconds < thresholds.s   && ['ss', seconds] ||
                minutes <= 1             && ['m']           ||
                minutes < thresholds.m   && ['mm', minutes] ||
                hours   <= 1             && ['h']           ||
                hours   < thresholds.h   && ['hh', hours]   ||
                days    <= 1             && ['d']           ||
                days    < thresholds.d   && ['dd', days]    ||
                months  <= 1             && ['M']           ||
                months  < thresholds.M   && ['MM', months]  ||
                years   <= 1             && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding (roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof(roundingFunction) === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize (withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return ((x > 0) - (x < 0)) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days         = abs$1(this._days);
        var months       = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return totalSign + 'P' +
            (Y ? ymSign + Y + 'Y' : '') +
            (M ? ymSign + M + 'M' : '') +
            (D ? daysSign + D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? hmsSign + h + 'H' : '') +
            (m ? hmsSign + m + 'M' : '') +
            (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid        = isValid$1;
    proto$2.abs            = abs;
    proto$2.add            = add$1;
    proto$2.subtract       = subtract$1;
    proto$2.as             = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds      = asSeconds;
    proto$2.asMinutes      = asMinutes;
    proto$2.asHours        = asHours;
    proto$2.asDays         = asDays;
    proto$2.asWeeks        = asWeeks;
    proto$2.asMonths       = asMonths;
    proto$2.asYears        = asYears;
    proto$2.valueOf        = valueOf$1;
    proto$2._bubble        = bubble;
    proto$2.clone          = clone$1;
    proto$2.get            = get$2;
    proto$2.milliseconds   = milliseconds;
    proto$2.seconds        = seconds;
    proto$2.minutes        = minutes;
    proto$2.hours          = hours;
    proto$2.days           = days;
    proto$2.weeks          = weeks;
    proto$2.months         = months;
    proto$2.years          = years;
    proto$2.humanize       = humanize;
    proto$2.toISOString    = toISOString$1;
    proto$2.toString       = toISOString$1;
    proto$2.toJSON         = toISOString$1;
    proto$2.locale         = locale;
    proto$2.localeData     = localeData;

    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    hooks.version = '2.22.2';

    setHookCallback(createLocal);

    hooks.fn                    = proto;
    hooks.min                   = min;
    hooks.max                   = max;
    hooks.now                   = now;
    hooks.utc                   = createUTC;
    hooks.unix                  = createUnix;
    hooks.months                = listMonths;
    hooks.isDate                = isDate;
    hooks.locale                = getSetGlobalLocale;
    hooks.invalid               = createInvalid;
    hooks.duration              = createDuration;
    hooks.isMoment              = isMoment;
    hooks.weekdays              = listWeekdays;
    hooks.parseZone             = createInZone;
    hooks.localeData            = getLocale;
    hooks.isDuration            = isDuration;
    hooks.monthsShort           = listMonthsShort;
    hooks.weekdaysMin           = listWeekdaysMin;
    hooks.defineLocale          = defineLocale;
    hooks.updateLocale          = updateLocale;
    hooks.locales               = listLocales;
    hooks.weekdaysShort         = listWeekdaysShort;
    hooks.normalizeUnits        = normalizeUnits;
    hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat        = getCalendarFormat;
    hooks.prototype             = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD',                             // <input type="date" />
        TIME: 'HH:mm',                                  // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
        WEEK: 'YYYY-[W]WW',                             // <input type="week" />
        MONTH: 'YYYY-MM'                                // <input type="month" />
    };

    return hooks;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/cozy-scripts/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/cozy-scripts/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/assets/images/icon-add-from-store.svg":
false,

/***/ "./src/assets/images/icon-add-service.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/icon-add-service.svg";

/***/ }),

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

/***/ "./src/assets/sprites/icon-sync.svg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__("./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__("./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "icon-sync",
  "use": "icon-sync-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol viewBox=\"0 0 16 16\" id=\"icon-sync\">\n<title>icons/16/sync</title>\n<desc>Created with Sketch.</desc>\n<g>\n\t<path d=\"M16,7.2c0-0.1,0-0.1,0-0.2V3c0-0.6-0.4-1-1-1c-0.5,0-0.8,0.3-0.9,0.7C12.6,1,10.4,0,8,0C4.9,0,2,1.8,0.7,4.6\n\t\tc-0.2,0.5,0,1.1,0.5,1.3s1.1,0,1.3-0.5C3.5,3.4,5.6,2,8,2c1.5,0,3,0.6,4,1.5c-0.3,0-0.6,0.1-0.8,0.3c-0.4,0.4-0.3,1.1,0.1,1.4\n\t\tl3,2.5c0,0,0,0,0,0c0,0,0,0,0.1,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0.1,0,0.1,0c0.1,0,0.2,0,0.3,0c0,0,0,0,0,0c0,0,0,0,0,0\n\t\tc0.1,0,0.2-0.1,0.3-0.1c0,0,0,0,0.1,0c0.1-0.1,0.2-0.1,0.2-0.2c0,0,0,0,0,0C15.9,7.5,15.9,7.4,16,7.2C16,7.3,16,7.2,16,7.2z\" />\n\t<path d=\"M14.8,10.1c-0.5-0.2-1.1,0-1.3,0.5c-1,2.1-3.1,3.4-5.5,3.4c-1.5,0-2.9-0.6-4-1.5c0.3,0,0.5-0.1,0.7-0.4\n\t\tc0.4-0.4,0.3-1.1-0.1-1.4l-3-2.5c0,0,0,0,0,0c0,0-0.1,0-0.1,0C1.4,8.1,1.4,8.1,1.3,8c0,0-0.1,0-0.1,0C1,8,0.7,8,0.5,8.1\n\t\tc0,0-0.1,0-0.1,0C0.3,8.2,0.3,8.3,0.2,8.4c0,0,0,0,0,0C0.1,8.5,0.1,8.6,0,8.7c0,0,0,0.1,0,0.1C0,8.9,0,8.9,0,9v4c0,0.6,0.4,1,1,1\n\t\tc0.5,0,0.9-0.3,1-0.8C3.5,14.9,5.6,16,8,16c3.1,0,5.9-1.8,7.3-4.5C15.5,11,15.3,10.4,14.8,10.1z\" />\n</g>\n</symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

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

var _Button = __webpack_require__("./node_modules/cozy-ui/react/Button/index.jsx");

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
        { className: 'item-wrapper --add-service', onClick: this.toggleRedirect },
        _react2.default.createElement(
          'header',
          { className: 'item-header' },
          _react2.default.createElement('img', {
            className: 'item-icon',
            src: __webpack_require__("./src/assets/images/icon-add-service.svg")
          })
        ),
        _react2.default.createElement(
          _Button.Button,
          {
            busy: redirecting,
            disabled: redirecting,
            className: 'item-add-service-button',
            subtle: true
          },
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

/***/ }),

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
          { className: 'col-content' },
          _react2.default.createElement(_Applications2.default, null),
          _react2.default.createElement(_Services2.default, null)
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

/***/ "./src/components/KonnectorTile.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _moment = __webpack_require__("./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _I18n = __webpack_require__("./node_modules/cozy-ui/react/I18n/index.jsx");

var _Icon = __webpack_require__("./node_modules/cozy-ui/react/Icon/index.jsx");

var _Icon2 = _interopRequireDefault(_Icon);

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/es/index.js");

var _icons = __webpack_require__("./src/lib/icons.js");

var _konnectors = __webpack_require__("./src/lib/konnectors.js");

var _connections = __webpack_require__("./src/ducks/connections/index.js");

var _iconForbidden = __webpack_require__("./src/assets/sprites/icon-forbidden.svg");

var _iconForbidden2 = _interopRequireDefault(_iconForbidden);

var _iconKonnector = __webpack_require__("./src/assets/icons/icon-konnector.svg");

var _iconKonnector2 = _interopRequireDefault(_iconKonnector);

var _iconSync = __webpack_require__("./src/assets/sprites/icon-sync.svg");

var _iconSync2 = _interopRequireDefault(_iconSync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var validCategoriesSet = new Set(__webpack_require__("./src/config/categories.json"));

var KonnectorTileFooter = function KonnectorTileFooter(_ref) {
  var lastSyncDate = _ref.lastSyncDate,
      error = _ref.error,
      userError = _ref.userError,
      t = _ref.t;

  if (userError) {
    return _react2.default.createElement(
      'span',
      { className: 'item-subtitle-user-error' },
      _react2.default.createElement(_Icon2.default, { icon: 'warning', className: 'icon' }),
      (0, _konnectors.getErrorTitle)(t, userError, function (key) {
        return 'connection.error.' + key + '.title';
      })
    );
  }

  if (error) {
    return _react2.default.createElement(
      'span',
      { className: 'item-subtitle-error' },
      _react2.default.createElement(_Icon2.default, { icon: _iconForbidden2.default, className: 'icon' }),
      (0, _konnectors.getErrorTitle)(t, error, function (key) {
        return 'connection.error.' + key + '.title';
      })
    );
  }

  if (lastSyncDate) {
    return _react2.default.createElement(
      'span',
      { className: 'item-subtitle-last-sync' },
      _react2.default.createElement(_Icon2.default, { icon: _iconSync2.default, className: 'icon' }),
      _moment2.default.utc(lastSyncDate).format(t('tile.konnector.lastSyncDate.format'))
    );
  }

  return null;
};

var KonnectorTile = function KonnectorTile(_ref2) {
  var firstError = _ref2.firstError,
      firstUserError = _ref2.firstUserError,
      konnector = _ref2.konnector,
      lastSyncDate = _ref2.lastSyncDate,
      route = _ref2.route,
      t = _ref2.t;

  var categoriesSet = konnector.categories ? konnector.categories.map(function (c) {
    return validCategoriesSet.has(c) ? c : 'other';
  }).reduce(function (acc, c) {
    return acc.add(c);
  }, new Set()) : new Set();
  var subtitle = categoriesSet && [].concat(_toConsumableArray(categoriesSet)).map(function (c) {
    return t('category.' + c);
  }).join(', ');

  return _react2.default.createElement(
    _reactRouterDom.NavLink,
    { className: 'item-wrapper', to: route },
    _react2.default.createElement(
      'header',
      { className: 'item-header' },
      _react2.default.createElement(
        'div',
        { className: 'item-layered-item-icon' },
        _react2.default.createElement('img', {
          className: 'item-icon',
          alt: t('connector.logo.alt', { name: konnector.name }),
          src: (0, _icons.getKonnectorIcon)(konnector)
        }),
        _iconKonnector2.default && _react2.default.createElement(_Icon2.default, { icon: _iconKonnector2.default, className: 'item-layer-icon' })
      )
    ),
    _react2.default.createElement(
      'h3',
      { className: 'item-title' },
      konnector.name
    ),
    _react2.default.createElement(KonnectorTileFooter, {
      error: firstError,
      userError: firstUserError,
      lastSyncDate: lastSyncDate,
      subtitle: subtitle,
      t: t
    })
  );
};

var mapStateToProps = function mapStateToProps(state, props) {
  var konnector = props.konnector;

  return {
    firstError: (0, _connections.getFirstError)(state.connections, konnector.slug),
    firstUserError: (0, _connections.getFirstUserError)(state.connections, konnector.slug),
    lastSyncDate: (0, _connections.getLastSyncDate)(state.connections, konnector.slug)
  };
};

exports.default = (0, _I18n.translate)()((0, _reactRedux.connect)(mapStateToProps)((0, _reactRouterDom.withRouter)(KonnectorTile)));

/***/ }),

/***/ "./src/components/LoadingPlaceholder.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingPlaceholder = undefined;

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _placeholder = __webpack_require__("./src/styles/placeholder.styl");

var _placeholder2 = _interopRequireDefault(_placeholder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingPlaceholder = exports.LoadingPlaceholder = function LoadingPlaceholder() {
  return _react2.default.createElement('span', { className: _placeholder2.default['coz-loading-placeholder'] });
};

exports.default = LoadingPlaceholder;

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
          installedKonnectors.map(function (konnector) {
            return _react2.default.createElement(_KonnectorTile2.default, {
              konnector: konnector,
              route: 'connected/' + konnector.slug
            });
          }),
          _react2.default.createElement(_AddServiceTile2.default, { label: t('add_service') })
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

exports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _I18n.translate)()(Services));

/***/ }),

/***/ "./src/components/StoreTile.jsx":
false,

/***/ "./src/containers/App.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/es/index.js");

var _appEntryPoint = __webpack_require__("./src/components/appEntryPoint.jsx");

var _appEntryPoint2 = _interopRequireDefault(_appEntryPoint);

var _Notifier = __webpack_require__("./src/components/Notifier.jsx");

var _Notifier2 = _interopRequireDefault(_Notifier);

var _Loading = __webpack_require__("./src/components/Loading.jsx");

var _Loading2 = _interopRequireDefault(_Loading);

var _Failure = __webpack_require__("./src/components/Failure.jsx");

var _Failure2 = _interopRequireDefault(_Failure);

var _index = __webpack_require__("./src/ducks/connections/components/queue/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _Home = __webpack_require__("./src/components/Home.jsx");

var _Home2 = _interopRequireDefault(_Home);

var _IntentRedirect = __webpack_require__("./src/components/IntentRedirect.jsx");

var _IntentRedirect2 = _interopRequireDefault(_IntentRedirect);

var _StoreRedirection = __webpack_require__("./src/components/StoreRedirection.jsx");

var _StoreRedirection2 = _interopRequireDefault(_StoreRedirection);

var _Layout = __webpack_require__("./node_modules/cozy-ui/react/Layout/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props, context) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props, context));

    _this.store = _this.context.store;
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          accounts = _props.accounts,
          konnectors = _props.konnectors,
          triggers = _props.triggers;

      var isFetching = [accounts, konnectors, triggers].find(function (collection) {
        return ['pending', 'loading'].includes(collection.fetchStatus);
      });

      var hasError = [accounts, konnectors, triggers].find(function (collection) {
        return collection.fetchStatus === 'failed';
      });

      var isReady = !hasError && !isFetching;

      return _react2.default.createElement(
        _Layout.Layout,
        {
          monoColumn: true,
          ref: isReady && function (div) {
            _this2.contentWrapper = div;
          }
        },
        _react2.default.createElement('div', { className: 'ho-background' }),
        hasError || isFetching && _react2.default.createElement(
          _Layout.Main,
          null,
          _react2.default.createElement(
            _Layout.Content,
            {
              className: hasError ? 'col-initial-error' : 'col-initial-loading'
            },
            hasError && _react2.default.createElement(_Failure2.default, { errorType: 'initial' }),
            isFetching && _react2.default.createElement(_Loading2.default, { loadingType: 'initial' })
          )
        ),
        isReady && _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Route, { path: '/redirect', component: _IntentRedirect2.default }),
          _react2.default.createElement(_reactRouterDom.Route, {
            path: '/connected',
            render: function render(props) {
              return _react2.default.createElement(_Home2.default, { base: '/connected', wrapper: _this2.contentWrapper });
            }
          }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/providers', component: _StoreRedirection2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/providers/:category', component: _StoreRedirection2.default }),
          _react2.default.createElement(_reactRouterDom.Redirect, { exact: true, from: '/', to: '/connected' }),
          _react2.default.createElement(_reactRouterDom.Redirect, { from: '*', to: '/connected' })
        ),
        _react2.default.createElement(_Notifier2.default, null),
        _react2.default.createElement(_index2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

/*
withRouter is necessary here to deal with redux
https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
*/


exports.default = (0, _reactRouterDom.withRouter)((0, _appEntryPoint2.default)(App));

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

/***/ }),

/***/ "./src/styles/index.styl":
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: ParseError: illegal unary \"==\", missing left-hand operand\n    at Parser.error (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/parser.js:259:11)\n    at Parser.equality (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/parser.js:1905:23)\n    at Parser.typecheck (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/parser.js:1886:21)\n    at Parser.logical (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/parser.js:1873:21)\n    at Parser.ternary (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/parser.js:1857:21)\n    at Parser.negation (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/parser.js:1849:17)\n    at Parser.expression (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/parser.js:1828:24)\n    at Parser.stmt (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/parser.js:818:25)\n    at Parser.statement (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/parser.js:685:21)\n    at Parser.parse (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/parser.js:236:25)\n    at CachedPathEvaluator.importFile (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus-loader/lib/evaluator.js:73:20)\n    at CachedPathEvaluator.visitImport (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus-loader/lib/evaluator.js:162:27)\n    at CachedPathEvaluator.Visitor.visit (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/visitor/index.js:28:40)\n    at CachedPathEvaluator.Evaluator.visit (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/visitor/evaluator.js:160:18)\n    at CachedPathEvaluator.Evaluator.visitBlock (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/visitor/evaluator.js:720:39)\n    at CachedPathEvaluator.Visitor.visit (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/visitor/index.js:28:40)\n    at CachedPathEvaluator.Evaluator.visit (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/visitor/evaluator.js:160:18)\n    at CachedPathEvaluator.Evaluator.visitGroup (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/visitor/evaluator.js:261:22)\n    at CachedPathEvaluator.Visitor.visit (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/visitor/index.js:28:40)\n    at CachedPathEvaluator.Evaluator.visit (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/visitor/evaluator.js:160:18)\n    at CachedPathEvaluator.Evaluator.visitRoot (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/visitor/evaluator.js:707:27)\n    at CachedPathEvaluator.Visitor.visit (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/visitor/index.js:28:40)\n    at CachedPathEvaluator.Evaluator.visit (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/visitor/evaluator.js:160:18)\n    at CachedPathEvaluator.Evaluator.evaluate (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/visitor/evaluator.js:247:15)\n    at Renderer.render (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/renderer.js:86:26)\n    at /Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus-loader/index.js:167:12\n    at tryCatchReject (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/when/lib/makePromise.js:840:30)\n    at runContinuation1 (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/when/lib/makePromise.js:799:4)\n    at Fulfilled.when (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/when/lib/makePromise.js:590:4)\n    at Pending.run (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/when/lib/makePromise.js:481:13)\n    at Scheduler._drain (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/when/lib/Scheduler.js:62:19)\n    at Scheduler.drain (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/when/lib/Scheduler.js:27:9)\n    at runLoaders (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/cozy-scripts/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at /Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus-loader/index.js:169:11\n    at Renderer.render (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus/lib/renderer.js:107:12)\n    at /Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/stylus-loader/index.js:167:12\n    at tryCatchReject (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/when/lib/makePromise.js:840:30)\n    at runContinuation1 (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/when/lib/makePromise.js:799:4)\n    at Fulfilled.when (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/when/lib/makePromise.js:590:4)\n    at Pending.run (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/when/lib/makePromise.js:481:13)\n    at Scheduler._drain (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/when/lib/Scheduler.js:62:19)\n    at Scheduler.drain (/Users/gregory/Dev/cozy/apps/cozy-collect/node_modules/when/lib/Scheduler.js:27:9)\n    at _combinedTickCallback (internal/process/next_tick.js:95:7)\n    at process._tickCallback (internal/process/next_tick.js:161:9)");

/***/ }),

/***/ "./src/styles/placeholder.styl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"coz-loading-placeholder":"coz-loading-placeholder--NhdVl","placeHolderShimmer":"placeHolderShimmer--1RPaI"};

/***/ }),

/***/ "./src/targets/browser/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_cozy_dot_bar) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* global cozy */


__webpack_require__("./node_modules/babel-polyfill/lib/index.js");

__webpack_require__("./node_modules/url-search-params-polyfill/index.js");

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");

var _reduxCozyClient = __webpack_require__("./src/lib/redux-cozy-client/index.js");

var _cozyClient = __webpack_require__("./node_modules/cozy-client/dist/cozy-client.js");

var _cozyClient2 = _interopRequireDefault(_cozyClient);

var _I18n = __webpack_require__("./node_modules/cozy-ui/react/I18n/index.jsx");

var _I18n2 = _interopRequireDefault(_I18n);

var _PiwikHashRouter = __webpack_require__("./src/lib/PiwikHashRouter.js");

var _PiwikHashRouter2 = _interopRequireDefault(_PiwikHashRouter);

var _collect = __webpack_require__("./src/config/collect.json");

var _collect2 = _interopRequireDefault(_collect);

var _configureStore = __webpack_require__("./src/store/configureStore.js");

var _configureStore2 = _interopRequireDefault(_configureStore);

__webpack_require__("./node_modules/intro.js/minified/introjs.min.css");

__webpack_require__("./src/styles/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lang = document.documentElement.getAttribute('lang') || 'en';
var context = window.context || 'cozy';

var handleOAuthResponse = function handleOAuthResponse() {
  /* global URLSearchParams */
  var queryParams = new URLSearchParams(window.location.search);
  if (queryParams.get('account')) {
    var opener = window.opener;
    var accountKey = queryParams.get('account');
    var targetOrigin = window.location.origin || window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    opener.postMessage({
      key: accountKey,
      origin: window.name
    }, targetOrigin);
    window.close();
  }
};

document.addEventListener('DOMContentLoaded', function () {
  handleOAuthResponse();

  var root = document.querySelector('[role=application]');
  var data = root.dataset;

  var client = new _reduxCozyClient.CozyClient({
    cozyURL: '//' + data.cozyDomain,
    token: data.cozyToken
  });

  // New improvements must be done with CozyClient
  var cozyClient = new _cozyClient2.default({
    uri: '//' + data.cozyDomain,
    token: data.cozyToken
  });

  __webpack_provided_cozy_dot_bar.init({
    appEditor: data.cozyAppEditor,
    appName: data.cozyAppName,
    iconPath: data.cozyIconPath,
    lang: data.cozyLocale,
    replaceTitleOnMobile: true
  });

  // store
  var store = (0, _configureStore2.default)(client, context, _extends({
    lang: lang
  }, _collect2.default));

  var dictRequire = function dictRequire(lang) {
    return __webpack_require__("./src/locales recursive ^\\.\\/.*$")("./" + lang);
  };
  var App = __webpack_require__("./src/containers/App.jsx").default;

  (0, _reactDom.render)(_react2.default.createElement(
    _cozyClient.CozyProvider,
    { client: cozyClient },
    _react2.default.createElement(
      _reduxCozyClient.CozyProvider,
      { store: store, client: cozyClient },
      _react2.default.createElement(
        _I18n2.default,
        { lang: lang, dictRequire: dictRequire, context: context },
        _react2.default.createElement(
          _PiwikHashRouter2.default,
          null,
          _react2.default.createElement(App, _collect2.default)
        )
      )
    )
  ), document.querySelector('[role=application]'));
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/cozy-bar/dist/cozy-bar.js")))

/***/ })

})
//# sourceMappingURL=0.505080c251b0aab936c7.hot-update.js.map