(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/color-control/style.css":
/*!**************************************!*\
  !*** ./util/color-control/style.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/dimensions-control/style.scss":
/*!********************************************!*\
  !*** ./util/dimensions-control/style.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/image-avatar/style.scss":
/*!**************************************!*\
  !*** ./util/image-avatar/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/unit-control/style.scss":
/*!**************************************!*\
  !*** ./util/unit-control/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * 
 * React FontIconPicker
 * 
 * React Component to show a picker element to pick font-icons & svg
 * 
 * @author Swashata Ghosh <swashata@wpquark.com>
 * @version 1.2.0
 * @link https://github.com/fontIconPicker/react-fonticonpicker
 * @license MIT
 * 
 * Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 * 
 */
!function(e,t){ true?module.exports=t(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),__webpack_require__(/*! react */ "react"),__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"),__webpack_require__(/*! react-dom */ "react-dom"),__webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js")):undefined}(window,function(e,t,r,n,a){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=15)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.flattenPossiblyCategorizedSource=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Array.isArray(e))return o(e);if(null!==t)return void 0!==e[t]?o(e[t]):[];var r=[],n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){a(e,t,r[t])})}return e}({},e);return Object.keys(n).forEach(function(e){r=o(r).concat(o(n[e]))}),r},t.getPossibleCategories=function(e){return Array.isArray(e)?null:Object.keys(e)},t.convertToHex=function(e){return String.fromCodePoint(parseInt(e,10))},t.isArrayEqual=function(e,t){if(!Array.isArray(e)||!Array.isArray(t))return!1;var r=o(e);r.sort();var n=o(t);return n.sort(),JSON.stringify(r)===JSON.stringify(n)},t.getOffset=function(e){var t=e.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+r}},t.getSourceType=function(e){return null===e?"null":"object"!==n(e)||Array.isArray(e)?Array.isArray(e)?"array":n(e):"object"},t.InvalidSourceException=function(e,t){this.givenType=e,this.requiredType=t,this.message="Expected of type: ".concat(this.requiredType,", found: ").concat(this.givenType),this.toString=function(){return"Invalid Source Exception: ".concat(this.message)}},t.fuzzySearch=function(e,t){e=e.toLowerCase();var r=(t=t.toLowerCase()).length,n=e.length;if(n>r)return!1;if(n===r)return e===t;e:for(var a=0,o=0;a<n;a++){for(var l=e.codePointAt(a);o<r;)if(t.codePointAt(o++)===l)continue e;return!1}return!0},t.debounce=void 0,t.debounce=function(e,t){var r;return function(){var n=this,a=arguments;clearTimeout(r),r=setTimeout(function(){return e.apply(n,a)},t)}}},function(e,t){e.exports=r},,,function(e,t){e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(1)),a=r(6),o=u(r(0)),l=u(r(3)),i=r(2);function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==c(n)&&"function"!=typeof n?d(this):n,Object.defineProperty(d(r),"syncPortalPosition",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.resetPortalPosition(),r.fixWindowOverflow()}}),Object.defineProperty(d(r),"fixWindowOverflow",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=r.props.domRef.current.offsetWidth,t=r.props.domRef.current.offsetHeight,n=window,a=n.innerWidth,o=n.pageYOffset,l=document.documentElement.clientHeight,u=(0,i.getOffset)(r.props.domRef.current),c=u.left,s=u.top,f="self"===r.state.appendRoot?r.props.domRef.current:r.state.appendRoot,d=(0,i.getOffset)(f),p=r.props.btnRef.current,h=r.props.domRef.current,y=(0,i.getOffset)(p),b=getComputedStyle(p),g=(parseInt(b.borderTop,10)||0)+(parseInt(b.borderBottom,10)||0);if(c+e>a-20){var m=y.left+r.props.btnRef.current.offsetWidth-(e+d.left);m+d.left<0&&(m=10-d.left),h.style.left="".concat(m,"px")}t+s-o>l&&y.top-t>0&&("self"===r.state.appendRoot?h.style.top="-".concat(t-g,"px"):h.style.top="".concat(y.top+g-t,"px"))}}),r.state={},r.debouncedSyncPortalPosition=(0,i.debounce)(r.syncPortalPosition,250),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),f(t,null,[{key:"getDerivedStateFromProps",value:function(e){var r=t.calculateAppendAndClass(e.appendRoot);return{appendRoot:r.appendRoot,portalClasses:r.portalClasses}}},{key:"calculateAppendAndClass",value:function(e){var t="self",r=(0,l.default)({"rfipdropdown--portal":!1!==e});return!1!==e&&(t=document.querySelector(e)),{portalClasses:r,appendRoot:t}}}]),f(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.debouncedSyncPortalPosition),window.addEventListener("scroll",this.debouncedSyncPortalPosition),this.syncPortalPosition()}},{key:"componentDidUpdate",value:function(){this.syncPortalPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.debouncedSyncPortalPosition),window.removeEventListener("scroll",this.debouncedSyncPortalPosition)}},{key:"positionPortal",value:function(){var e=this.props.domRef.current.style.display;this.props.domRef.current.style.display="none";var t=this.props.btnRef.current,r=(0,i.getOffset)(t),n=(0,i.getOffset)(this.state.appendRoot),a=t.offsetHeight;this.props.domRef.current.style.left="".concat(r.left-n.left,"px"),this.props.domRef.current.style.top="".concat(r.top+a,"px"),this.props.domRef.current.style.display=e}},{key:"resetPortalPosition",value:function(){var e=this.props.domRef.current;"self"===this.state.appendRoot?e.style.top="":this.positionPortal()}},{key:"render",value:function(){var e=(0,l.default)(this.props.className,this.state.portalClasses),t=n.default.createElement("div",{className:e,ref:this.props.domRef},this.props.children);return"self"===this.state.appendRoot?t:(0,a.createPortal)(t,this.state.appendRoot)}}]),t}();Object.defineProperty(p,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{appendRoot:o.default.oneOfType([o.default.bool,o.default.string]),children:o.default.node.isRequired,domRef:o.default.object.isRequired,btnRef:o.default.object.isRequired,className:o.default.string.isRequired}}),Object.defineProperty(p,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{appendRoot:!1}});var h=p;t.default=h},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(1)),a=i(r(0)),o=i(r(3)),l=r(2);function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==u(n)&&"function"!=typeof n?d(this):n,Object.defineProperty(d(r),"handleChangePage",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=r.props.currentPage,o=r.state.totalPage;null!==n?"next"===n?a+=1:a-=1:a=parseInt(e.target.value,10)-1,a<0&&(a=0),a>o-1&&(a=o-1),t=a+1,null===n&&Number.isNaN(a)&&(a=0,t=""),r.setState({viewPage:t}),r.props.handleChangePage(a)}}),Object.defineProperty(d(r),"handlePageKeyBoard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){13!==e.keyCode&&32!==e.keyCode||r.handleChangePage({},t)}}),Object.defineProperty(d(r),"handleChangeValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.props.handleChangeValue(e)}}),Object.defineProperty(d(r),"handleValueKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){13!==e.keyCode&&32!==e.keyCode||r.handleChangeValue(t)}}),r.state={viewPage:r.props.currentPage+1},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),f(t,null,[{key:"getDerivedStateFromProps",value:function(e,r){var n=t.getCategoryFilteredState(e.currentCategory,e.categories,e.icons),a=t.getCategoryFilteredState(e.currentCategory,e.categories,null===e.search?e.icons:e.search),o=t.getActiveIcons(n,a,e.currentSearch),l=o.activeIcons,i=o.activeTitles,u=e.currentPage,c=e.iconsPerPage,s={iconView:t.getCurrentViewIcons(l,c,u),titleView:t.getCurrentViewIcons(i,c,u),totalPage:Math.ceil(l.length/c)};return""!==r.viewPage&&(s.viewPage=e.currentPage+1),s}},{key:"getActiveIcons",value:function(e,t,r){var n=c(e),a=c(t);if(""===r||null===r)return{activeIcons:n,activeTitles:a};var o=[],i=[];return n.forEach(function(e,n){(0,l.fuzzySearch)(r,t[n])&&(o.push(e),i.push(t[n]))}),{activeIcons:o,activeTitles:i}}},{key:"getCategoryFilteredState",value:function(e,t,r){var n=null,a=(0,l.getSourceType)(r);if(Array.isArray(t)){if("object"!==a)throw new l.InvalidSourceException(a,"object")}else if("array"!==a)throw new l.InvalidSourceException(a,"array");return 0!==e&&Array.isArray(t)&&(n=t[e]||null),(0,l.flattenPossiblyCategorizedSource)(r,n)}},{key:"getCurrentViewIcons",value:function(e,t,r){var n=r*t,a=(r+1)*t;return e.slice(n,a)}}]),f(t,[{key:"renderPager",value:function(){var e=this;if(this.state.totalPage<1)return null;var t=this.props.currentPage>0?n.default.createElement("span",{className:"rfipicons__left",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"prev")},onClick:function(t){return e.handleChangePage(t,"prev")}},n.default.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Left"},n.default.createElement("i",{className:"fipicon-angle-left"}))):null,r=this.props.currentPage<this.state.totalPage-1?n.default.createElement("span",{className:"rfipicons__right",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"next")},onClick:function(t){return e.handleChangePage(t,"next")}},n.default.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Right"},n.default.createElement("i",{className:"fipicon-angle-right"}))):null;return n.default.createElement("div",{className:"rfipicons__pager"},n.default.createElement("div",{className:"rfipicons__num"},n.default.createElement("input",{value:this.state.viewPage,onChange:this.handleChangePage,className:"rfipicons__cp",type:"tel",min:1}),n.default.createElement("span",{className:"rfipicons__sp"},"/"),n.default.createElement("span",{className:"rfipicons__tp"},this.state.totalPage)),n.default.createElement("div",{className:"rfipicons__arrow"},t,r))}},{key:"renderIconView",value:function(){var e=this;return this.state.totalPage>0?this.state.iconView.map(function(t,r){var a=(0,o.default)("rfipicons__icon",{"rfipicons__icon--selected":e.props.value===t||Array.isArray(e.props.value)&&e.props.value.includes(t)});return n.default.createElement("span",{className:a,key:t,title:e.state.titleView[r]},n.default.createElement("span",{className:"rfipicons__ibox",tabIndex:0,role:"button",onClick:function(){return e.handleChangeValue(t)},onKeyDown:function(r){return e.handleValueKeyboard(r,t)}},e.props.renderIcon(t)))}):n.default.createElement("span",{className:"rfipicons__icon--error"},n.default.createElement("span",{className:"rfipicons__ibox--error"},this.props.noIconPlaceholder))}},{key:"render",value:function(){return n.default.createElement("div",{className:"rfipicons"},this.renderPager(),n.default.createElement("div",{className:"rfipicons__selector"},this.renderIconView()))}}]),t}();Object.defineProperty(p,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{categories:a.default.arrayOf(a.default.string),currentCategory:a.default.number,isMulti:a.default.bool.isRequired,icons:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.objectOf(a.default.arrayOf(a.default.string)),a.default.arrayOf(a.default.string)]),value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.oneOfType([a.default.number,a.default.string]))]).isRequired,currentSearch:a.default.string.isRequired,handleChangeValue:a.default.func.isRequired,currentPage:a.default.number.isRequired,iconsPerPage:a.default.number.isRequired,handleChangePage:a.default.func.isRequired,renderIcon:a.default.func.isRequired,noIconPlaceholder:a.default.string.isRequired}}),Object.defineProperty(p,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{categories:null,currentCategory:null,search:null}});var h=p;t.default=h},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(1)),a=o(r(0));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){return n.default.createElement("div",{className:"rfipsearch"},n.default.createElement("input",{type:"text",className:"rfipsearch__input",value:e.value,onChange:e.handleSearch,placeholder:e.placeholder}))};l.propTypes={handleSearch:a.default.func.isRequired,value:a.default.string.isRequired,placeholder:a.default.string.isRequired};var i=l;t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(1)),a=o(r(0));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),r=t,(a=[{key:"render",value:function(){return n.default.createElement("div",{className:"rfipcategory"},n.default.createElement("select",{className:"rfipcategory__select",onChange:this.props.handleCategory,value:this.props.value},this.props.categories.map(function(e,t){return n.default.createElement("option",{className:"rfipcategory__select__option",key:e,value:t},e)})),n.default.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"}))}}])&&i(r.prototype,a),t}();Object.defineProperty(u,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{handleCategory:a.default.func.isRequired,value:a.default.number.isRequired,categories:a.default.arrayOf(a.default.string).isRequired}});var c=u;t.default=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(1)),a=c(r(0)),o=c(r(10)),l=c(r(9)),i=c(r(8)),u=r(2);function c(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==s(n)&&"function"!=typeof n?p(this):n,Object.defineProperty(p(r),"handleCategory",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=parseInt(e.target.value,10);Number.isNaN(t)&&(t=0),r.props.handleChangeCategory(t),r.props.handleChangePage(0)}}),Object.defineProperty(p(r),"handleSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.target.value;r.props.handleChangeSearch(t)}}),r.state={},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),d(t,null,[{key:"getDerivedStateFromProps",value:function(e){var t=(0,u.getPossibleCategories)(e.icons);return null!==t&&(t=[e.allCatPlaceholder].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(t))),{categories:t,searchString:e.currentSearch}}}]),d(t,[{key:"render",value:function(){return n.default.createElement("div",{className:"rfipdropdown__selector"},this.props.showSearch?n.default.createElement(l.default,{handleSearch:this.handleSearch,value:this.state.searchString,placeholder:this.props.searchPlaceholder}):null,this.props.showCategory&&this.state.categories&&this.state.categories.length?n.default.createElement(o.default,{handleCategory:this.handleCategory,value:this.props.currentCategory,categories:this.state.categories}):null,n.default.createElement(i.default,{categories:this.state.categories,currentCategory:this.props.currentCategory,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,value:this.props.value,currentSearch:this.props.currentSearch,handleChangeValue:this.props.handleChangeValue,currentPage:this.props.currentPage,iconsPerPage:this.props.iconsPerPage,handleChangePage:this.props.handleChangePage,renderIcon:this.props.renderIcon,noIconPlaceholder:this.props.noIconPlaceholder}))}}]),t}();Object.defineProperty(h,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{isMulti:a.default.bool.isRequired,value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.any)]).isRequired,currentCategory:a.default.number.isRequired,currentPage:a.default.number.isRequired,currentSearch:a.default.string.isRequired,icons:a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.object,a.default.arrayOf(a.default.string)]),showCategory:a.default.bool.isRequired,showSearch:a.default.bool.isRequired,iconsPerPage:a.default.number.isRequired,allCatPlaceholder:a.default.string.isRequired,searchPlaceholder:a.default.string.isRequired,noIconPlaceholder:a.default.string.isRequired,renderIcon:a.default.func.isRequired,handleChangeValue:a.default.func.isRequired,handleChangeCategory:a.default.func.isRequired,handleChangePage:a.default.func.isRequired,handleChangeSearch:a.default.func.isRequired}}),Object.defineProperty(h,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{search:null}});var y=h;t.default=y},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(1)),a=l(r(0)),o=l(r(3));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){function t(){var e,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,l=new Array(o),i=0;i<o;i++)l[i]=arguments[i];return s(a,(r=a=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),Object.defineProperty(f(a),"handleClick",{configurable:!0,enumerable:!0,writable:!0,value:function(){a.props.onClick()}}),Object.defineProperty(f(a),"handleKeyDown",{configurable:!0,enumerable:!0,writable:!0,value:function(e){32!==e.keyCode&&13!==e.keyCode||a.props.onClick()}}),Object.defineProperty(f(a),"handleDelete",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){e.stopPropagation(),a.props.handleDeleteValue(t)}}),Object.defineProperty(f(a),"handleDeleteKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){32!==e.keyCode&&13!==e.keyCode||a.props.handleDeleteValue(t)}}),Object.defineProperty(f(a),"renderEmptyIcon",{configurable:!0,enumerable:!0,writable:!0,value:function(){return n.default.createElement("span",{className:"rfipbtn__icon--empty"},a.props.noSelectedPlaceholder)}}),r))}var r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),r=t,(a=[{key:"renderIcon",value:function(e){var t=this;return""===e||null===e||void 0===e?this.renderEmptyIcon():n.default.createElement("span",{className:"rfipbtn__icon",key:e},n.default.createElement("span",{className:"rfipbtn__elm"},this.props.renderIcon(e)),n.default.createElement("span",{className:"rfipbtn__del",onClick:function(r){return t.handleDelete(r,e)},onKeyDown:function(r){return t.handleDeleteKeyboard(r,e)},tabIndex:0,role:"button"},"×"))}},{key:"renderCurrentIcons",value:function(){var e=this;return this.props.isMulti?this.props.value.length?this.props.value.map(function(t){return e.renderIcon(t)}):this.renderEmptyIcon():this.renderIcon(this.props.value)}},{key:"render",value:function(){var e={onClick:this.handleClick,onKeyDown:this.handleKeyDown,onFocus:this.handleFocus,onBlur:this.handleBlur,tabIndex:0},t=(0,o.default)("rfipbtn__button","rfipbtn__button--".concat(this.props.isOpen?"open":"close")),r=(0,o.default)(this.props.className);return n.default.createElement("div",u({className:r,ref:this.props.domRef},e),n.default.createElement("div",{className:"rfipbtn__current"},this.renderCurrentIcons()),n.default.createElement("div",{className:t},n.default.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"})))}}])&&c(r.prototype,a),t}();Object.defineProperty(d,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{className:a.default.string.isRequired,isOpen:a.default.bool.isRequired,onClick:a.default.func.isRequired,domRef:a.default.object.isRequired,isMulti:a.default.bool.isRequired,value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.oneOfType([a.default.number,a.default.string]))]).isRequired,renderIcon:a.default.func.isRequired,handleDeleteValue:a.default.func.isRequired,noSelectedPlaceholder:a.default.string.isRequired}});var p=d;t.default=p},function(e,t){e.exports=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(r(1)),a=f(r(0)),o=f(r(3)),l=r(13),i=f(r(12)),u=f(r(11)),c=f(r(7)),s=r(2);function f(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t,r){return t&&y(e.prototype,t),r&&y(e,r),e}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=[],v="",P=function(e){function t(e){var r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,a=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!a||"object"!==d(a)&&"function"!=typeof a?g(this):a,Object.defineProperty(g(r),"handleOuterClick",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.target;r.isClickWithin(t)||r.closeDropdown()}}),Object.defineProperty(g(r),"handleEscapeKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e){27===e.keyCode&&r.closeDropdown()}}),Object.defineProperty(g(r),"isClickWithin",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return r.fipButtonRef.current.contains(e)||r.fipDropDownRef.current&&r.fipDropDownRef.current.contains(e)}}),Object.defineProperty(g(r),"handleToggle",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.setState(function(e){return r.handleDropDown(!e.isOpen,!1)})}}),Object.defineProperty(g(r),"closeDropdown",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.handleDropDown(!1)}}),Object.defineProperty(g(r),"handleDropDown",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a={isOpen:e};return a.elemClass=t.getDerivedClassName("rfip",r.props.theme,r.props.isMulti,e),a.btnClass=t.getDerivedClassName("rfipbtn",r.props.theme,r.props.isMulti,e),a.ddClass=t.getDerivedClassName("rfipdropdown",r.props.theme,r.props.isMulti,e),n&&r.setState(a),a}}),Object.defineProperty(g(r),"handleChangeValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t;r.props.isMulti?(t=p(r.state.value)).includes(e)?(t=t.filter(function(t){return t!==e})).length||(t=m):t.push(e):t=e===r.state.value?v:e,r.setState({value:t,isOpen:!r.props.closeOnSelect}),r.props.onChange(t)}}),Object.defineProperty(g(r),"handleDeleteValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var n;n=r.props.isMulti?r.state.value.filter(function(t){return t!==e}):t.getDerivedValue(n,r.props.isMulti),r.setState({value:n}),r.props.onChange(n)}}),Object.defineProperty(g(r),"handleChangePage",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentPage:e})}}),Object.defineProperty(g(r),"handleChangeCategory",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentCategory:e,currentPage:0})}}),Object.defineProperty(g(r),"handleChangeSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentSearch:e,currentPage:0})}}),Object.defineProperty(g(r),"resetPortalStyle",{configurable:!0,enumerable:!0,writable:!0,value:function(e){["maxHeight","paddingTop","paddingBottom"].forEach(function(t){e.style[t]=null})}}),Object.defineProperty(g(r),"handlePortalEnter",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t);var n=getComputedStyle(t);r.fipPortalComputedStyle={height:n.height,paddingTop:n.paddingTop,paddingBottom:n.paddingBottom},["maxHeight","paddingTop","paddingBottom"].forEach(function(e){t.style[e]="0px"})}}),Object.defineProperty(g(r),"handlePortalEntering",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];t.style.maxHeight=r.fipPortalComputedStyle.height,t.style.paddingTop=r.fipPortalComputedStyle.paddingTop,t.style.paddingBottom=r.fipPortalComputedStyle.paddingBottom}}),Object.defineProperty(g(r),"handlePortalEntered",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t),r.props.showSearch&&void 0===window.orientation&&-1===navigator.userAgent.indexOf("IEMobile")&&t.querySelector(".rfipsearch__input").focus()}}),Object.defineProperty(g(r),"handlePortalExit",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t);var n=getComputedStyle(t).height;t.style.maxHeight=n}}),Object.defineProperty(g(r),"handlePortalExiting",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];t.style.maxHeight="0px",t.style.paddingTop="0px",t.style.paddingBottom="0px"}}),Object.defineProperty(g(r),"renderIcon",{configurable:!0,enumerable:!0,writable:!0,value:function(e){if("function"==typeof r.props.renderFunc)return r.props.renderFunc(e);if("class"===r.props.renderUsing)return n.default.createElement("i",{className:e});var t=h({},r.props.renderUsing,r.props.convertHex?(0,s.convertToHex)(e):e);return n.default.createElement("i",t)}}),r.fipButtonRef=n.default.createRef(),r.fipDropDownRef=n.default.createRef(),r.state={currentCategory:0,currentPage:0,isOpen:!1,currentSearch:""},r.fipPortalComputedStyle=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),b(t,null,[{key:"getDerivedStateFromProps",value:function(e,r){var n={};return n.elemClass=t.getDerivedClassName("rfip",e.theme,e.isMulti,r.isOpen),n.btnClass=t.getDerivedClassName("rfipbtn",e.theme,e.isMulti,r.isOpen),n.ddClass=t.getDerivedClassName("rfipdropdown",e.theme,e.isMulti,r.isOpen),n.value=t.getDerivedValue(e.value,e.isMulti),e.showCategory||(n.currentCategory=0,n.currentPage=0),e.showSearch||(n.currentSearch="",n.currentPage=0),n}},{key:"getDerivedClassName",value:function(e,t,r,n){return(0,o.default)(e,"".concat(e,"--").concat(t),h({},"".concat(e,"--multi"),r),"".concat(e,"--").concat(n?"open":"close"))}},{key:"getDerivedValue",value:function(e,t){var r=e;return t?r=Array.isArray(e)?p(e):m:"number"!=typeof e&&"string"!=typeof e&&(r=v),r}}]),b(t,[{key:"componentDidMount",value:function(){var e=this;["click"].forEach(function(t){document.addEventListener(t,e.handleOuterClick,!1)}),document.addEventListener("keydown",this.handleEscapeKeyboard,!1),this.props.onChange(this.state.value)}},{key:"componentWillUnmount",value:function(){var e=this;["click"].forEach(function(t){document.removeEventListener(t,e.handleOuterClick,!1)}),document.removeEventListener("keydown",this.handleEscapeKeyboard,!1)}},{key:"render",value:function(){var e={currentCategory:this.state.currentCategory,currentPage:this.state.currentPage,currentSearch:this.state.currentSearch,value:this.state.value,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,showCategory:this.props.showCategory,showSearch:this.props.showSearch,iconsPerPage:this.props.iconsPerPage,allCatPlaceholder:this.props.allCatPlaceholder,searchPlaceholder:this.props.searchPlaceholder,noIconPlaceholder:this.props.noIconPlaceholder,renderIcon:this.renderIcon,handleChangeValue:this.handleChangeValue,handleChangeCategory:this.handleChangeCategory,handleChangePage:this.handleChangePage,handleChangeSearch:this.handleChangeSearch};return n.default.createElement("div",{className:this.state.elemClass,ref:this.fipRef},n.default.createElement(i.default,{className:this.state.btnClass,isOpen:this.state.isOpen,onClick:this.handleToggle,domRef:this.fipButtonRef,isMulti:this.props.isMulti,value:this.state.value,renderIcon:this.renderIcon,handleDeleteValue:this.handleDeleteValue,noSelectedPlaceholder:this.props.noSelectedPlaceholder}),n.default.createElement(l.CSSTransition,{classNames:"fipappear",timeout:300,in:this.state.isOpen,unmountOnExit:!0,onEnter:this.handlePortalEnter,onEntering:this.handlePortalEntering,onEntered:this.handlePortalEntered,onExit:this.handlePortalExit,onExiting:this.handlePortalExiting},n.default.createElement(c.default,{appendRoot:this.props.appendTo,domRef:this.fipDropDownRef,btnRef:this.fipButtonRef,className:this.state.ddClass},n.default.createElement(u.default,e))))}}]),t}();Object.defineProperty(P,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{icons:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.objectOf(a.default.arrayOf(a.default.string)),a.default.arrayOf(a.default.string)]),iconsPerPage:a.default.number,theme:a.default.string,onChange:a.default.func.isRequired,showCategory:a.default.bool,showSearch:a.default.bool,value:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.number,a.default.string]),isMulti:a.default.bool,renderUsing:a.default.string,convertHex:a.default.bool,renderFunc:a.default.func,appendTo:a.default.oneOfType([a.default.bool,a.default.string]),allCatPlaceholder:a.default.string,searchPlaceholder:a.default.string,noIconPlaceholder:a.default.string,noSelectedPlaceholder:a.default.string,closeOnSelect:a.default.bool}}),Object.defineProperty(P,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{search:null,iconsPerPage:20,theme:"default",showCategory:!0,showSearch:!0,value:null,isMulti:!1,renderUsing:"class",convertHex:!0,renderFunc:null,appendTo:!1,allCatPlaceholder:"Show from all",searchPlaceholder:"Search Icons",noIconPlaceholder:"No icons found",noSelectedPlaceholder:"Select icon",closeOnSelect:!1}}),Object.defineProperty(P,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"FontIconPicker"});var O=P;t.default=O},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(14))&&n.__esModule?n:{default:n}).default;t.default=a}]).default});
//# sourceMappingURL=fonticonpicker.react.js.map

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/dom-helpers/esm/addClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/addClass.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addClass; });
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/esm/hasClass.js");

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!Object(_hasClass__WEBPACK_IMPORTED_MODULE_0__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hasClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hasClass.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hasClass; });
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/removeClass.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/removeClass.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeClass; });
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    ;
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/CSSTransition.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/addClass */ "./node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/removeClass */ "./node_modules/dom-helpers/esm/removeClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__["default"])(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__["default"])(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["classNames"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Transition__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Transition__WEBPACK_IMPORTED_MODULE_7__["default"].propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__["classNamesShape"],

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
}) : undefined;
/* harmony default export */ __webpack_exports__["default"] = (CSSTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/ReplaceTransition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/ReplaceTransition.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");






/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;
    var child = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);

    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in"]);

    var _React$Children$toArr = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroup__WEBPACK_IMPORTED_MODULE_5__["default"], props, inProp ? react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

ReplaceTransition.propTypes =  true ? {
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  children: function children(props, propName) {
    if (react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (ReplaceTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/SwitchTransition.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/SwitchTransition.js ***!
  \*********************************************************************/
/*! exports provided: modes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modes", function() { return modes; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");


var _leaveRenders, _enterRenders;






function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(oldChildren) && react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }

  return true;
}
/**
 * Enum of modes for SwitchTransition component
 * @enum { string }
 */


var modes = {
  out: 'out-in',
  in: 'in-out'
};

var callHook = function callHook(element, name, cb) {
  return function () {
    var _element$props;

    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};

var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
  var current = _ref.current,
      changeState = _ref.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"], null);
    })
  });
}, _leaveRenders[modes.in] = function (_ref2) {
  var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
  return [current, react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
  var children = _ref3.children,
      changeState = _ref3.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function (_ref4) {
  var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
  return [react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true
  })];
}, _enterRenders);
/**
 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
 * You can use it when you want to control the render between state transitions.
 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
 *
 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child.
 *
 * **Note**: If you want the animation to happen simultaneously
 * (that is, to have the old child removed and a new child inserted **at the same time**),
 * you should use
 * [`TransitionGroup`](https://reactcommunity.org/react-transition-group/transition-group)
 * instead.
 *
 * ```jsx
 * function App() {
 *  const [state, setState] = useState(false);
 *  return (
 *    <SwitchTransition>
 *      <CSSTransition
 *        key={state ? "Goodbye, world!" : "Hello, world!"}
 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
 *        classNames='fade'
 *      >
 *        <button onClick={() => setState(state => !state)}>
 *          {state ? "Goodbye, world!" : "Hello, world!"}
 *        </button>
 *      </CSSTransition>
 *    </SwitchTransition>
 *  );
 * }
 * ```
 *
 * ```css
 * .fade-enter{
 *    opacity: 0;
 * }
 * .fade-exit{
 *    opacity: 1;
 * }
 * .fade-enter-active{
 *    opacity: 1;
 * }
 * .fade-exit-active{
 *    opacity: 0;
 * }
 * .fade-enter-active,
 * .fade-exit-active{
 *    transition: opacity 500ms;
 * }
 * ```
 */

var SwitchTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"],
      current: null
    };
    _this.appeared = false;

    _this.changeState = function (status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }

      _this.setState({
        status: status,
        current: current
      });
    };

    return _this;
  }

  var _proto = SwitchTransition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }

    if (state.status === _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"] && props.mode === modes.in) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]
      };
    }

    return {
      current: react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(props.children, {
        in: true
      })
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        mode = _this$props.mode,
        _this$state = this.state,
        status = _this$state.status,
        current = _this$state.current;
    var data = {
      children: children,
      current: current,
      changeState: this.changeState,
      status: status
    };
    var component;

    switch (status) {
      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]:
        component = enterRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]:
        component = leaveRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"]:
        component = current;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };

  return SwitchTransition;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

SwitchTransition.propTypes =  true ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out`: New element transitions in first, then when complete, the current element transitions out.
   *
   * @type {'out-in'|'in-out'}
   */
  mode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([modes.in, modes.out]),

  /**
   * Any `Transition` or `CSSTransition` component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired])
} : undefined;
SwitchTransition.defaultProps = {
  mode: modes.out
};
/* harmony default export */ __webpack_exports__["default"] = (SwitchTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/Transition.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/Transition.js ***!
  \***************************************************************/
/*! exports provided: UNMOUNTED, EXITED, ENTERING, ENTERED, EXITING, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNMOUNTED", function() { return UNMOUNTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITED", function() { return EXITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERING", function() { return ENTERING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERED", function() { return ENTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITING", function() { return EXITING; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.only(children), childProps))
    );
  };

  return Transition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"];
Transition.propTypes =  true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    current: typeof Element === 'undefined' ? prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any : prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(Element)
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__["timeoutsShape"];
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
} : undefined; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ __webpack_exports__["default"] = (Transition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroup.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroup.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
/* harmony import */ var _utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/esm/utils/ChildMapping.js");









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getInitialChildMapping"])(nextProps, handleExited) : Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getNextChildMapping"])(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getChildMapping"])(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
      value: contextValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
} : undefined;
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (TransitionGroup);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "./node_modules/react-transition-group/esm/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/config.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  disabled: false
});

/***/ }),

/***/ "./node_modules/react-transition-group/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/index.js ***!
  \**********************************************************/
/*! exports provided: CSSTransition, ReplaceTransition, SwitchTransition, TransitionGroup, Transition, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSSTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSTransition", function() { return _CSSTransition__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/esm/ReplaceTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaceTransition", function() { return _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchTransition */ "./node_modules/react-transition-group/esm/SwitchTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchTransition", function() { return _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionGroup", function() { return _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return _Transition__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _config__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/ChildMapping.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/ChildMapping.js ***!
  \***********************************************************************/
/*! exports provided: getChildMapping, mergeChildMappings, getInitialChildMapping, getNextChildMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildMapping", function() { return getChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeChildMappings", function() { return mergeChildMappings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialChildMapping", function() { return getInitialChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextChildMapping", function() { return getNextChildMapping; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        in: false
      });
    } else if (hasNext && hasPrev && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/PropTypes.js ***!
  \********************************************************************/
/*! exports provided: timeoutsShape, classNamesShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeoutsShape", function() { return timeoutsShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNamesShape", function() { return classNamesShape; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  appear: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
}).isRequired]) : undefined;
var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  active: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
})]) : undefined;

/***/ }),

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var attributes = {
  flipboxStyle: {
    type: "string",
    "default": "default"
  },
  boxHeight: {
    type: "number"
  },
  boxWidth: {
    type: "number"
  },
  isHover: {
    type: "boolean",
    "default": false
  },
  flipType: {
    type: "string",
    source: "attribute",
    selector: ".flip-container",
    attribute: "data-flip-type",
    "default": "flip-left"
  },
  selectedSide: {
    type: "string",
    "default": "front"
  },
  frontIconOrImage: {
    type: "string",
    "default": "icon"
  },
  frontIcon: {
    type: "attribute",
    selector: "flipbox-icon-wrapper-front",
    attribute: "data-icon",
    "default": "fab fa-rev"
  },
  frontImageUrl: {
    type: "attribute",
    selector: "front-image-container img",
    attribute: "src"
  },
  frontImageId: {
    type: "string",
    "default": null
  },
  backIconOrImage: {
    type: "string",
    "default": "icon"
  },
  backIcon: {
    type: "attribute",
    selector: "flipbox-icon-wrapper-back",
    attribute: "data-icon",
    "default": "fab fa-rev"
  },
  backImageUrl: {
    type: "attribute",
    selector: "back-image-container img",
    attribute: "src"
  },
  backImageId: {
    type: "string",
    "default": null
  },
  frontTitle: {
    type: "string",
    selector: "front-title",
    "default": "Front Title Here"
  },
  frontContent: {
    type: "string",
    selector: "front-content",
    "default": "Front Content Here"
  },
  backTitle: {
    type: "string",
    selector: "back-title",
    "default": "Back Title Here"
  },
  backContent: {
    type: "string",
    selector: "back-content",
    "default": "Back Content Here"
  },
  frontImageSize: {
    type: "number",
    "default": 100
  },
  backImageSize: {
    type: "number",
    "default": 100
  },
  frontBackground: {
    type: "string"
  },
  backBackground: {
    type: "string"
  },
  borderStyle: {
    type: "string",
    "default": "solid"
  },
  borderColor: {
    type: "string"
  },
  borderWidth: {
    type: "number"
  },
  borderRadius: {
    type: "number"
  },
  addLink: {
    type: "boolean",
    "default": false
  },
  linkType: {
    type: "string",
    "default": "box"
  },
  buttonText: {
    type: "string",
    "default": "Click Here"
  },
  buttonIcon: {
    type: "string"
  },
  buttonIconPos: {
    type: "string",
    "default": "before"
  },
  link: {
    type: "string"
  },
  frontTitleColor: {
    type: "string"
  },
  backTitleColor: {
    type: "string"
  },
  frontContentColor: {
    type: "string"
  },
  backContentColor: {
    type: "string"
  },
  frontImageRadius: {
    type: "number"
  },
  backImageRadius: {
    type: "number"
  },
  frontIconSize: {
    type: "number"
  },
  backIconSize: {
    type: "number"
  },
  frontIconColor: {
    type: "string"
  },
  backIconColor: {
    type: "string"
  },
  boxShadowColor: {
    type: "string"
  },
  shadowVOffset: {
    type: "number"
  },
  shadowHOffset: {
    type: "number"
  },
  shadowBlur: {
    type: "number"
  },
  shadowSpread: {
    type: "number"
  },
  buttonStyle: {
    type: "string",
    defautl: "styleOne"
  },
  buttonClasses: {
    type: "string",
    "default": ""
  },
  buttonBackground: {
    type: "string"
  },
  buttonColor: {
    type: "string"
  },
  buttonSize: {
    type: "number"
  },
  buttonBorderSize: {
    type: "number"
  },
  buttonBorderColor: {
    type: "string"
  },
  buttonBorderType: {
    type: "string",
    "default": "solid"
  },
  buttonBorderRadius: {
    type: "number"
  },
  linkedButtonPadding: {
    type: "boolean",
    "default": true
  },
  buttonPaddingTop: {
    type: "number",
    "default": 0
  },
  buttonPaddingRight: {
    type: "number",
    "default": 0
  },
  buttonPaddingBottom: {
    type: "number",
    "default": 0
  },
  buttonPaddingLeft: {
    type: "number",
    "default": 0
  },
  btnShadowColor: {
    type: "string"
  },
  btnShadowVOffset: {
    type: "number"
  },
  btnShadowHOffset: {
    type: "number"
  },
  btnShadowBlur: {
    type: "number"
  },
  btnShadowSpread: {
    type: "number"
  },
  frontIconBackground: {
    type: "string"
  },
  frontIconPadding: {
    type: "number"
  },
  frontIconBorderRadius: {
    type: "number"
  },
  frontIconTopMargin: {
    type: "number"
  },
  frontIconBorderSize: {
    type: "number"
  },
  frontIconBorderType: {
    type: "string",
    "default": "solid"
  },
  frontIconBorderColor: {
    type: "string"
  },
  displayFrontIconBorder: {
    type: "boolean",
    "default": false
  },
  backIconBackground: {
    type: "string"
  },
  backIconPadding: {
    type: "number"
  },
  backIconBorderRadius: {
    type: "number"
  },
  backIconTopMargin: {
    type: "number"
  },
  backIconBorderSize: {
    type: "number"
  },
  backIconBorderType: {
    type: "string",
    "default": "solid"
  },
  backIconBorderColor: {
    type: "string"
  },
  displayBackIconBorder: {
    type: "boolean",
    "default": false
  },
  frontBackgroundType: {
    type: "string",
    "default": "fill"
  },
  frontBackgroundGradient: {
    type: "string",
    "default": "linear-gradient(45deg, #11998e, #38ef7d)"
  },
  backBackgroundType: {
    type: "string",
    "default": "fill"
  },
  backBackgroundGradient: {
    type: "string",
    "default": "linear-gradient(45deg, #f12711, #f5af19)"
  },
  transitionSpeed: {
    type: "number"
  },
  frontBackgroundImageID: {
    type: "number"
  },
  frontBackgroundImageURL: {
    type: "string"
  },
  frontBackgroundPosition: {
    type: "string"
  },
  frontBackgroundPosX: {
    type: "number",
    "default": 0
  },
  frontBackgroundPosXUnit: {
    type: "string",
    "default": "px"
  },
  frontBackgroundPosY: {
    type: "number",
    "default": 0
  },
  frontBackgroundPosYUnit: {
    type: "string",
    "default": "px"
  },
  frontBackgroundSize: {
    type: "string",
    "default": "auto"
  },
  frontBackgroundWidth: {
    type: "number"
  },
  frontBackgroundWidthUnit: {
    type: "string",
    "default": "px"
  },
  frontBackgroundRepeat: {
    type: "string"
  },
  backBackgroundImageID: {
    type: "number"
  },
  backBackgroundImageURL: {
    type: "string"
  },
  backBackgroundPosition: {
    type: "string"
  },
  backBackgroundPosX: {
    type: "number",
    "default": 0
  },
  backBackgroundPosXUnit: {
    type: "string",
    "default": "px"
  },
  backBackgroundPosY: {
    type: "number",
    "default": 0
  },
  backBackgroundPosYUnit: {
    type: "string",
    "default": "px"
  },
  backBackgroundWidth: {
    type: "number"
  },
  backBackgroundWidthUnit: {
    type: "string",
    "default": "px"
  },
  backBackgroundRepeat: {
    type: "string"
  },
  backBackgroundSize: {
    type: "string",
    "default": "auto"
  },
  displayButtonIcon: {
    type: "boolean",
    "default": false
  },
  titleFontSize: {
    type: "number"
  },
  titleFontSizeUnit: {
    type: "string",
    "default": "px"
  },
  contentFontSize: {
    type: "number"
  },
  contentFontSizeUnit: {
    type: "string",
    "default": "px"
  },
  linkedContainerMargin: {
    type: "boolean",
    "default": true
  },
  containerMarginTop: {
    type: "number",
    "default": 0
  },
  containerMarginRight: {
    type: "number",
    "default": 0
  },
  containerMarginBottom: {
    type: "number",
    "default": 0
  },
  containerMarginLeft: {
    type: "number",
    "default": 0
  },
  linkedContainerPadding: {
    type: "boolean",
    "default": true
  },
  containerPaddingTop: {
    type: "number",
    "default": 0
  },
  containerPaddingRight: {
    type: "number",
    "default": 0
  },
  containerPaddingBottom: {
    type: "number",
    "default": 0
  },
  containerPaddingLeft: {
    type: "number",
    "default": 0
  },
  align: {
    type: "string",
    "default": "center"
  },
  marginUnit: {
    type: "string",
    "default": "px"
  },
  paddingUnit: {
    type: "string",
    "default": "px"
  },
  radiusUnit: {
    type: "string",
    "default": "px"
  },
  buttonPaddingUnit: {
    type: "string",
    "default": "px"
  },
  buttonSizeUnit: {
    type: "string",
    "default": "px"
  },
  heightUnit: {
    type: "string",
    "default": "px"
  },
  widthUnit: {
    type: "string",
    "default": "px"
  },
  titleFontFamily: {
    type: "string"
  },
  titleFontWeight: {
    type: "string",
    "default": "normal"
  },
  titleTextTransform: {
    type: "string"
  },
  titleTextDecoration: {
    type: "string"
  },
  titleLetterSpacing: {
    type: "number"
  },
  titleLetterSpacingUnit: {
    type: "string",
    "default": "px"
  },
  titleLineHeight: {
    type: "number"
  },
  titleLineHeightUnit: {
    type: "string",
    "default": "px"
  },
  contentFontFamily: {
    type: "string"
  },
  contentFontWeight: {
    type: "string",
    "default": "normal"
  },
  contentTextTransform: {
    type: "string"
  },
  contentTextDecoration: {
    type: "string"
  },
  contentLetterSpacing: {
    type: "number"
  },
  contentLetterSpacingUnit: {
    type: "string",
    "default": "px"
  },
  contentLineHeight: {
    type: "number"
  },
  contentLineHeightUnit: {
    type: "string",
    "default": "px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: DEFAULT_ICON_SIZE, DEFAULT_FRONT_BACKGROUND, DEFAULT_BACK_BACKGROUND, FLIPBOX_SIDES, FLIPBOX_TYPE, BORDER_STYLES, ICON_TYPE, LINK_TYPE, ICON_POSITIONS, BUTTON_STYLES, BACKGROUND_TYPE, BACKGROUND_SIZE, BACKGROUND_REPEAT, BACKGROUND_POSITION, BACKGROUND_ATTACHMENT, FLIPBOX_STYLES, FONT_SIZES, TEXT_TRANSFORM, FONT_WEIGHTS, TEXT_DECORATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ICON_SIZE", function() { return DEFAULT_ICON_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_FRONT_BACKGROUND", function() { return DEFAULT_FRONT_BACKGROUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_BACK_BACKGROUND", function() { return DEFAULT_BACK_BACKGROUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLIPBOX_SIDES", function() { return FLIPBOX_SIDES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLIPBOX_TYPE", function() { return FLIPBOX_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORDER_STYLES", function() { return BORDER_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_TYPE", function() { return ICON_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINK_TYPE", function() { return LINK_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_POSITIONS", function() { return ICON_POSITIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_STYLES", function() { return BUTTON_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_TYPE", function() { return BACKGROUND_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_SIZE", function() { return BACKGROUND_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_REPEAT", function() { return BACKGROUND_REPEAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_POSITION", function() { return BACKGROUND_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_ATTACHMENT", function() { return BACKGROUND_ATTACHMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLIPBOX_STYLES", function() { return FLIPBOX_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_SIZES", function() { return FONT_SIZES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_TRANSFORM", function() { return TEXT_TRANSFORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_WEIGHTS", function() { return FONT_WEIGHTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_DECORATION", function() { return TEXT_DECORATION; });
var __ = wp.i18n.__;
var DEFAULT_ICON_SIZE = "100";
var DEFAULT_FRONT_BACKGROUND = "#7967ff";
var DEFAULT_BACK_BACKGROUND = "#4a5059";
var FLIPBOX_SIDES = [{
  label: __("Front"),
  value: "front"
}, {
  label: __("Back"),
  value: "back"
}];
var FLIPBOX_TYPE = [{
  label: __("Flip Left"),
  value: "flip-left"
}, {
  label: __("Flip Right"),
  value: "flip-right"
}, {
  label: __("Flip Up"),
  value: "flip-up"
}, {
  label: __("Flip Bottom"),
  value: "flip-bottom"
}, {
  label: __("Zoom In"),
  value: "zoom-in"
}, {
  label: __("Zoom Out"),
  value: "zoom-out"
}];
var BORDER_STYLES = [{
  label: __("Dashed"),
  value: "dashed"
}, {
  label: __("Solid"),
  value: "solid"
}, {
  label: __("Dotted"),
  value: "dotted"
}, {
  label: __("Double"),
  value: "double"
}, {
  label: __("Groove"),
  value: "groove"
}, {
  label: __("Inset"),
  value: "inset"
}, {
  label: __("Outset"),
  value: "outset"
}, {
  label: __("Ridge"),
  value: "ridge"
}];
var ICON_TYPE = [{
  label: __("None"),
  value: "none"
}, {
  label: __("Icon"),
  value: "icon"
}, {
  label: __("Image"),
  value: "image"
}];
var LINK_TYPE = [{
  label: __("Box"),
  value: "box"
}, {
  label: __("Title"),
  value: "title"
}, {
  label: __("Button"),
  value: "button"
}];
var ICON_POSITIONS = [{
  label: __("Before"),
  value: "before"
}, {
  label: __("After"),
  value: "after"
}];
var BUTTON_STYLES = [{
  label: __("Style 1"),
  value: "styleOne"
}, {
  label: __("Style 2"),
  value: "styleTwo"
}, {
  label: __("Style 3"),
  value: "styleThree"
}, {
  label: __("Custom"),
  value: "custom"
}];
var BACKGROUND_TYPE = [{
  label: __("Fill"),
  value: "fill"
}, {
  label: __("Gradient"),
  value: "gradient"
}, {
  label: __("Image"),
  value: "image"
}];
var BACKGROUND_SIZE = [{
  label: __("Auto"),
  value: "auto"
}, {
  label: __("Cover"),
  value: "cover"
}, {
  label: __("Contain"),
  value: "contain"
}, {
  label: __("Custom"),
  value: "custom"
}];
var BACKGROUND_REPEAT = [{
  label: __("Default"),
  value: ""
}, {
  label: __("No-repeat"),
  value: "no-repeat"
}, {
  label: __("Repeat"),
  value: "repeat"
}, {
  label: __("Repeat-x"),
  value: "repeat-x"
}, {
  label: __("Repeat-y"),
  value: "repeat-y"
}];
var BACKGROUND_POSITION = [{
  label: __("Default"),
  value: ""
}, {
  label: __("Center Center"),
  value: "center center"
}, {
  label: __("Center Left"),
  value: "center left"
}, {
  label: __("Center Right"),
  value: "center right"
}, {
  label: __("Top Center"),
  value: "top center"
}, {
  label: __("Top Left"),
  value: "top left"
}, {
  label: __("Top Right"),
  value: "top right"
}, {
  label: __("Bottom Center"),
  value: "bottom center"
}, {
  label: __("Bottom Left"),
  value: "bottom left"
}, {
  label: __("Bottom Right"),
  value: "bottom right"
}, {
  label: __("Custom"),
  value: "custom"
}];
var BACKGROUND_ATTACHMENT = [{
  label: __("Default"),
  value: ""
}, {
  label: __("Fixed"),
  value: "fixed"
}, {
  label: __("Scroll"),
  value: "scroll"
}];
var FLIPBOX_STYLES = [{
  label: __("Default"),
  value: "default"
}, {
  label: __("Mint"),
  value: "mint"
}, {
  label: __("Tangelo"),
  value: "tangelo"
}, {
  label: __("Royal"),
  value: "royal"
}];
var FONT_SIZES = [{
  name: __("Small"),
  size: 12,
  slug: "s"
}, {
  name: __("Medium"),
  size: 16,
  slug: "m"
}, {
  name: __("Large"),
  size: 24,
  slug: "l"
}, {
  name: __("Extra Large"),
  size: 36,
  slug: "xl"
}];
var TEXT_TRANSFORM = [{
  label: __("None"),
  value: "none"
}, {
  label: __("Lowercase"),
  value: "lowercase"
}, {
  label: __("Capitalize"),
  value: "capitalize"
}, {
  label: __("Uppercase"),
  value: "uppercase"
}];
var FONT_WEIGHTS = [{
  label: __("Lighter"),
  value: "lighter"
}, {
  label: __("Normal"),
  value: "normal"
}, {
  label: __("Bold"),
  value: "bold"
}, {
  label: __("Bolder"),
  value: "bolder"
}];
var TEXT_DECORATION = [{
  label: __("Initial"),
  value: "initial"
}, {
  label: __("Overline"),
  value: "overline"
}, {
  label: __("Line Through"),
  value: "line-through"
}, {
  label: __("Underline"),
  value: "underline"
}, {
  label: __("Underline Oveline"),
  value: "underline overline"
}];

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flipbox_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flipbox-button */ "./src/flipbox-button.js");
/* harmony import */ var _flipbox_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flipbox-content */ "./src/flipbox-content.js");
/* harmony import */ var _flipbox_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flipbox-wrapper */ "./src/flipbox-wrapper.js");
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/helper */ "./util/helper.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * WordPress dependencits
 */
var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp$components = wp.components,
    Toolbar = _wp$components.Toolbar,
    ToolbarButton = _wp$components.ToolbarButton;
var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar;
/*
 * Internal dependencies
 */








var Edit = /*#__PURE__*/function (_Component) {
  _inherits(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit() {
    var _this;

    _classCallCheck(this, Edit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "getImageAlign", function (align) {
      switch (align) {
        case "left":
          return "flex-start";

        case "right":
          return "flex-end";

        default:
          return "center";
      }
    });

    return _this;
  }

  _createClass(Edit, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isSelected = _this$props.isSelected,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var flipboxStyle = attributes.flipboxStyle,
          boxHeight = attributes.boxHeight,
          boxWidth = attributes.boxWidth,
          isHover = attributes.isHover,
          flipType = attributes.flipType,
          selectedSide = attributes.selectedSide,
          frontIconOrImage = attributes.frontIconOrImage,
          frontIcon = attributes.frontIcon,
          frontImageUrl = attributes.frontImageUrl,
          frontImageId = attributes.frontImageId,
          backIconOrImage = attributes.backIconOrImage,
          backIcon = attributes.backIcon,
          backImageUrl = attributes.backImageUrl,
          backImageId = attributes.backImageId,
          frontTitle = attributes.frontTitle,
          frontContent = attributes.frontContent,
          backTitle = attributes.backTitle,
          backContent = attributes.backContent,
          frontImageSize = attributes.frontImageSize,
          backImageSize = attributes.backImageSize,
          frontBackground = attributes.frontBackground,
          backBackground = attributes.backBackground,
          borderStyle = attributes.borderStyle,
          borderColor = attributes.borderColor,
          borderWidth = attributes.borderWidth,
          borderRadius = attributes.borderRadius,
          addLink = attributes.addLink,
          linkType = attributes.linkType,
          buttonText = attributes.buttonText,
          buttonIcon = attributes.buttonIcon,
          buttonIconPos = attributes.buttonIconPos,
          link = attributes.link,
          frontTitleColor = attributes.frontTitleColor,
          backTitleColor = attributes.backTitleColor,
          frontContentColor = attributes.frontContentColor,
          backContentColor = attributes.backContentColor,
          frontImageRadius = attributes.frontImageRadius,
          backImageRadius = attributes.backImageRadius,
          frontIconSize = attributes.frontIconSize,
          backIconSize = attributes.backIconSize,
          frontIconColor = attributes.frontIconColor,
          backIconColor = attributes.backIconColor,
          boxShadowColor = attributes.boxShadowColor,
          shadowVOffset = attributes.shadowVOffset,
          shadowHOffset = attributes.shadowHOffset,
          shadowSpread = attributes.shadowSpread,
          shadowBlur = attributes.shadowBlur,
          buttonStyle = attributes.buttonStyle,
          buttonClasses = attributes.buttonClasses,
          buttonBackground = attributes.buttonBackground,
          buttonColor = attributes.buttonColor,
          buttonSize = attributes.buttonSize,
          buttonBorderSize = attributes.buttonBorderSize,
          buttonBorderColor = attributes.buttonBorderColor,
          buttonBorderType = attributes.buttonBorderType,
          buttonBorderRadius = attributes.buttonBorderRadius,
          buttonPaddingTop = attributes.buttonPaddingTop,
          buttonPaddingRight = attributes.buttonPaddingRight,
          buttonPaddingBottom = attributes.buttonPaddingBottom,
          buttonPaddingLeft = attributes.buttonPaddingLeft,
          btnShadowColor = attributes.btnShadowColor,
          btnShadowVOffset = attributes.btnShadowVOffset,
          btnShadowHOffset = attributes.btnShadowHOffset,
          btnShadowBlur = attributes.btnShadowBlur,
          btnShadowSpread = attributes.btnShadowSpread,
          frontIconBackground = attributes.frontIconBackground,
          frontIconPadding = attributes.frontIconPadding,
          frontIconBorderRadius = attributes.frontIconBorderRadius,
          frontIconTopMargin = attributes.frontIconTopMargin,
          frontIconBorderSize = attributes.frontIconBorderSize,
          frontIconBorderType = attributes.frontIconBorderType,
          frontIconBorderColor = attributes.frontIconBorderColor,
          backIconBackground = attributes.backIconBackground,
          backIconPadding = attributes.backIconPadding,
          backIconBorderRadius = attributes.backIconBorderRadius,
          backIconTopMargin = attributes.backIconTopMargin,
          backIconBorderSize = attributes.backIconBorderSize,
          backIconBorderType = attributes.backIconBorderType,
          backIconBorderColor = attributes.backIconBorderColor,
          frontBackgroundType = attributes.frontBackgroundType,
          frontBackgroundGradient = attributes.frontBackgroundGradient,
          backBackgroundType = attributes.backBackgroundType,
          backBackgroundGradient = attributes.backBackgroundGradient,
          transitionSpeed = attributes.transitionSpeed,
          frontBackgroundImageID = attributes.frontBackgroundImageID,
          frontBackgroundImageURL = attributes.frontBackgroundImageURL,
          frontBackgroundPosition = attributes.frontBackgroundPosition,
          frontBackgroundPosX = attributes.frontBackgroundPosX,
          frontBackgroundPosXUnit = attributes.frontBackgroundPosXUnit,
          frontBackgroundPosY = attributes.frontBackgroundPosY,
          frontBackgroundPosYUnit = attributes.frontBackgroundPosYUnit,
          frontBackgroundSize = attributes.frontBackgroundSize,
          frontBackgroundWidth = attributes.frontBackgroundWidth,
          frontBackgroundWidthUnit = attributes.frontBackgroundWidthUnit,
          frontBackgroundRepeat = attributes.frontBackgroundRepeat,
          backBackgroundImageID = attributes.backBackgroundImageID,
          backBackgroundImageURL = attributes.backBackgroundImageURL,
          backBackgroundPosition = attributes.backBackgroundPosition,
          backBackgroundPosX = attributes.backBackgroundPosX,
          backBackgroundPosXUnit = attributes.backBackgroundPosXUnit,
          backBackgroundPosY = attributes.backBackgroundPosY,
          backBackgroundPosYUnit = attributes.backBackgroundPosYUnit,
          backBackgroundSize = attributes.backBackgroundSize,
          backBackgroundWidth = attributes.backBackgroundWidth,
          backBackgroundWidthUnit = attributes.backBackgroundWidthUnit,
          backBackgroundRepeat = attributes.backBackgroundRepeat,
          displayButtonIcon = attributes.displayButtonIcon,
          titleFontSize = attributes.titleFontSize,
          titleFontSizeUnit = attributes.titleFontSizeUnit,
          contentFontSize = attributes.contentFontSize,
          contentFontSizeUnit = attributes.contentFontSizeUnit,
          containerMarginTop = attributes.containerMarginTop,
          containerMarginRight = attributes.containerMarginRight,
          containerMarginBottom = attributes.containerMarginBottom,
          containerMarginLeft = attributes.containerMarginLeft,
          containerPaddingTop = attributes.containerPaddingTop,
          containerPaddingRight = attributes.containerPaddingRight,
          containerPaddingBottom = attributes.containerPaddingBottom,
          containerPaddingLeft = attributes.containerPaddingLeft,
          align = attributes.align,
          marginUnit = attributes.marginUnit,
          paddingUnit = attributes.paddingUnit,
          radiusUnit = attributes.radiusUnit,
          buttonSizeUnit = attributes.buttonSizeUnit,
          buttonPaddingUnit = attributes.buttonPaddingUnit,
          heightUnit = attributes.heightUnit,
          widthUnit = attributes.widthUnit,
          titleFontFamily = attributes.titleFontFamily,
          titleFontWeight = attributes.titleFontWeight,
          titleTextTransform = attributes.titleTextTransform,
          titleTextDecoration = attributes.titleTextDecoration,
          titleLetterSpacing = attributes.titleLetterSpacing,
          titleLetterSpacingUnit = attributes.titleLetterSpacingUnit,
          titleLineHeight = attributes.titleLineHeight,
          titleLineHeightUnit = attributes.titleLineHeightUnit,
          contentFontFamily = attributes.contentFontFamily,
          contentFontWeight = attributes.contentFontWeight,
          contentTextTransform = attributes.contentTextTransform,
          contentTextDecoration = attributes.contentTextDecoration,
          contentLetterSpacing = attributes.contentLetterSpacing,
          contentLetterSpacingUnit = attributes.contentLetterSpacingUnit,
          contentLineHeight = attributes.contentLineHeight,
          contentLineHeightUnit = attributes.contentLineHeightUnit; // Default colors

      var defaultFrontBackground = "#7967ff";
      var deafultFrontTitleColor = "#ffffff";
      var defaultFrontContentColor = "#ffffff";
      var defautlBackContentColor = "#ffffff";
      var defaultBackBackground = "#3074ff";
      var defaultBackTitleColor = "#ffffff";
      var defaultBorderColor = "#000000";
      var defaultBoxShadowColor = "#abb8c3";
      var defaultButtonBorderColor = "#eeeeee";
      var deafultBtnShadowColor = "#abb8c3";
      var defaultFrontIconBackground = "transparent";
      var defaultFrontIconBorderColor = "#000000";
      var defaultBackIconBackground = "transparent";
      var defaultBackIconBorderColor = "#000000";
      var flipContainerStyle = {
        height: "".concat(boxHeight || 310).concat(heightUnit),
        maxWidth: "".concat(boxWidth || 600).concat(widthUnit),
        width: "100%",
        margin: "".concat(containerMarginTop).concat(marginUnit, " ").concat(containerMarginRight).concat(marginUnit, " ").concat(containerMarginBottom).concat(marginUnit, " ").concat(containerMarginLeft).concat(marginUnit),
        padding: "".concat(containerPaddingTop).concat(paddingUnit, " ").concat(containerPaddingRight).concat(paddingUnit, " ").concat(containerPaddingBottom).concat(paddingUnit, " ").concat(containerPaddingLeft).concat(paddingUnit)
      };
      var flipperStyle = {
        transform: isHover || selectedSide === "back" ? Object(_util_helper__WEBPACK_IMPORTED_MODULE_3__["getFlipTransform"])(flipType) : "none",
        transition: "".concat(transitionSpeed ? transitionSpeed / 10 : 0.6, "s")
      };
      var frontStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "".concat(boxHeight || 310).concat(heightUnit),
        maxWidth: "".concat(boxWidth || 600).concat(widthUnit),
        height: "auto",
        width: "100%",
        backgroundImage: Object(_util_helper__WEBPACK_IMPORTED_MODULE_3__["getBackgroundImage"])(frontBackgroundType, frontBackgroundGradient, frontBackgroundImageURL),
        backgroundSize: frontBackgroundSize === "custom" ? "".concat(frontBackgroundWidth).concat(frontBackgroundWidthUnit) : frontBackgroundSize,
        backgroundPosition: frontBackgroundPosition === "custom" ? "".concat(frontBackgroundPosX).concat(frontBackgroundPosXUnit, " ").concat(frontBackgroundPosY).concat(frontBackgroundPosYUnit) : frontBackgroundPosition,
        backgroundRepeat: frontBackgroundRepeat,
        backgroundColor: frontBackgroundType === "fill" && frontBackground ? frontBackground : defaultFrontBackground,
        borderStyle: borderStyle,
        borderColor: borderColor || defaultBorderColor,
        borderWidth: "".concat(borderWidth || 0, "px"),
        borderRadius: "".concat(borderRadius || 0).concat(radiusUnit),
        boxShadow: "".concat(shadowVOffset || 0, "px ").concat(shadowHOffset || 0, "px ").concat(shadowBlur || 0, "px ").concat(shadowSpread || 0, "px ").concat(boxShadowColor || defaultBoxShadowColor)
      };
      var frontImageStyle = {
        wrapper: {
          alignSelf: this.getImageAlign(align),
          display: frontIconOrImage === "image" && frontImageUrl ? "block" : "none"
        },
        image: {
          height: "".concat(frontImageSize || 100, "px"),
          width: "".concat(frontImageSize || 100, "px"),
          borderRadius: "".concat(frontImageRadius || 0, "%")
        }
      };
      var frontIconStyle = {
        fontSize: "".concat(frontIconSize || _constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_ICON_SIZE"], "px"),
        color: frontIconColor || "#ffffff",
        borderRadius: "".concat(frontIconBorderRadius || 0, "px"),
        background: frontIconBackground || defaultFrontIconBackground,
        padding: "".concat(frontIconPadding || 0, "px"),
        marginTop: "".concat(frontIconTopMargin || 0, "px"),
        borderStyle: frontIconBorderType,
        borderColor: frontIconBorderColor || defaultFrontIconBorderColor,
        borderWidth: "".concat(frontIconBorderSize || 0, "px"),
        width: "100%",
        textAlign: align
      };
      var frontTitleStyle = {
        fontFamily: titleFontFamily,
        fontSize: titleFontSize ? "".concat(titleFontSize).concat(titleFontSizeUnit) : undefined,
        fontWeight: titleFontWeight,
        textDecoration: titleTextDecoration,
        textTransform: titleTextTransform,
        lineHeight: titleLineHeight ? "".concat(titleLineHeight).concat(titleLineHeightUnit) : undefined,
        letterSpacing: titleLetterSpacing ? "".concat(titleLetterSpacing).concat(titleLetterSpacingUnit) : undefined,
        color: frontTitleColor || deafultFrontTitleColor,
        width: "100%",
        textAlign: align
      };
      var frontContentStyle = {
        fontFamily: contentFontFamily,
        fontSize: contentFontSize ? "".concat(contentFontSize).concat(contentFontSizeUnit) : undefined,
        fontWeight: contentFontWeight,
        textDecoration: contentTextDecoration,
        textTransform: contentTextTransform,
        lineHeight: contentLineHeight ? "".concat(contentLineHeight).concat(contentLineHeightUnit) : undefined,
        letterSpacing: contentLetterSpacing ? "".concat(contentLetterSpacing).concat(contentLetterSpacingUnit) : undefined,
        color: frontContentColor || defaultFrontContentColor,
        width: "100%",
        textAlign: align
      };
      var backStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "".concat(boxHeight || 310).concat(heightUnit),
        maxWidth: "".concat(boxWidth || 600).concat(widthUnit),
        height: "auto",
        width: "100%",
        backgroundImage: Object(_util_helper__WEBPACK_IMPORTED_MODULE_3__["getBackgroundImage"])(backBackgroundType, backBackgroundGradient, backBackgroundImageURL),
        backgroundSize: backBackgroundSize === "custom" ? "".concat(backBackgroundWidth).concat(backBackgroundWidthUnit) : backBackgroundSize,
        backgroundPosition: backBackgroundPosition === "custom" ? "".concat(backBackgroundPosX).concat(backBackgroundPosXUnit, " ").concat(backBackgroundPosY).concat(backBackgroundPosYUnit) : backBackgroundPosition,
        backgroundRepeat: backBackgroundRepeat,
        backgroundColor: backBackgroundType === "fill" && backBackground ? backBackground : defaultBackBackground,
        borderStyle: borderStyle,
        bordercolor: borderColor || defaultBorderColor,
        borderWidth: "".concat(borderWidth || 0, "px"),
        borderRadius: "".concat(borderRadius || 0).concat(radiusUnit),
        //  ? move it to helper file
        transform: flipType === "flip-up" && "rotateX(-180deg)" || flipType === "flip-bottom" && "rotateX(180deg)" || (flipType === "zoom-in" || flipType === "zoom-out") && "none",
        zIndex: isHover && (flipType === "zoom-in" || flipType === "zoom-out" ? 5 : 0),
        boxShadow: "".concat(shadowVOffset || 0, "px ").concat(shadowHOffset || 0, "px ").concat(shadowBlur || 0, "px ").concat(shadowSpread || 0, "px ").concat(boxShadowColor || defaultBoxShadowColor),
        cursor: linkType === "box" && link ? "pointer" : "default"
      };
      var backImageStyle = {
        wrapper: {
          alignSelf: this.getImageAlign(align),
          display: backIconOrImage === "image" && backImageUrl ? "block" : "none"
        },
        image: {
          height: "".concat(backImageSize || 100, "px"),
          width: "".concat(backImageSize || 100, "px"),
          borderRadius: "".concat(backImageRadius || 0, "%")
        }
      };
      var backIconStyle = {
        fontSize: "".concat(backIconSize || _constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_ICON_SIZE"], "px"),
        color: backIconColor || "#ffffff",
        borderRadius: "".concat(backIconBorderRadius || 0, "%"),
        background: backIconBackground || defaultBackIconBackground,
        padding: "".concat(backIconPadding || 0, "px"),
        marginTop: "".concat(backIconTopMargin || 0, "px"),
        borderStyle: backIconBorderType,
        borderColor: backIconBorderColor || defaultBackIconBorderColor,
        borderWidth: "".concat(backIconBorderSize || 0, "px"),
        width: "100%",
        textAlign: align
      };
      var backTitleStyle = {
        fontFamily: titleFontFamily,
        fontSize: titleFontSize ? "".concat(titleFontSize).concat(titleFontSizeUnit) : undefined,
        fontWeight: titleFontWeight,
        textDecoration: titleTextDecoration,
        textTransform: titleTextTransform,
        lineHeight: titleLineHeight ? "".concat(titleLineHeight).concat(titleLineHeightUnit) : undefined,
        letterSpacing: titleLetterSpacing ? "".concat(titleLetterSpacing).concat(titleLetterSpacingUnit) : undefined,
        color: backTitleColor || defaultBackTitleColor,
        width: "100%",
        textAlign: align
      };
      var backContentStyle = {
        fontFamily: contentFontFamily,
        fontSize: contentFontSize ? "".concat(contentFontSize).concat(contentFontSizeUnit) : undefined,
        fontWeight: contentFontWeight,
        textDecoration: contentTextDecoration,
        textTransform: contentTextTransform,
        lineHeight: contentLineHeight ? "".concat(contentLineHeight).concat(contentLineHeightUnit) : undefined,
        letterSpacing: contentLetterSpacing ? "".concat(contentLetterSpacing).concat(contentLetterSpacingUnit) : undefined,
        color: backContentColor || defautlBackContentColor,
        width: "100%",
        textAlign: align
      }; // Empty button object for custom styling

      var backButtonStyle = buttonStyle === "custom" ? {
        background: buttonBackground,
        color: buttonColor,
        width: "".concat(buttonSize || 18).concat(buttonSizeUnit),
        border: "".concat(buttonBorderSize || 0, "px ").concat(buttonBorderType, " ").concat(buttonBorderColor || defaultButtonBorderColor),
        borderRadius: "".concat(buttonBorderRadius || 0, "px"),
        padding: "".concat(buttonPaddingTop).concat(buttonPaddingUnit, " ").concat(buttonPaddingRight).concat(buttonPaddingUnit, " ").concat(buttonPaddingBottom).concat(buttonPaddingUnit, " ").concat(buttonPaddingLeft).concat(buttonPaddingUnit),
        boxShadow: "".concat(btnShadowVOffset || 0, "px ").concat(btnShadowHOffset || 0, "px ").concat(btnShadowBlur || 0, "px ").concat(btnShadowSpread || 0, "px ").concat(btnShadowColor || deafultBtnShadowColor),
        textDecoration: "none"
      } : {};
      return [isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_5__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      }), /*#__PURE__*/React.createElement(BlockControls, null, /*#__PURE__*/React.createElement(Toolbar, null, /*#__PURE__*/React.createElement(ToolbarButton, {
        title: "Front",
        icon: "arrow-right-alt2",
        isActive: selectedSide === "front",
        onClick: function onClick() {
          return setAttributes({
            selectedSide: "front"
          });
        }
      }), /*#__PURE__*/React.createElement(ToolbarButton, {
        title: "Back",
        icon: "arrow-left-alt2",
        isActive: selectedSide === "back",
        onClick: function onClick() {
          return setAttributes({
            selectedSide: "back"
          });
        }
      })), /*#__PURE__*/React.createElement(AlignmentToolbar, {
        value: align,
        onChange: function onChange(align) {
          return setAttributes({
            align: align
          });
        }
      })),
      /*#__PURE__*/
      // Edit view here
      React.createElement("div", {
        className: "flip-container",
        onMouseEnter: function onMouseEnter() {
          return setAttributes({
            isHover: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return setAttributes({
            isHover: false
          });
        },
        style: flipContainerStyle
      }, /*#__PURE__*/React.createElement("div", {
        className: "flipper",
        style: flipperStyle
      }, /*#__PURE__*/React.createElement(_flipbox_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "front",
        style: frontStyle
      }, /*#__PURE__*/React.createElement(_flipbox_content__WEBPACK_IMPORTED_MODULE_1__["default"], {
        selectedSide: selectedSide,
        iconOrImage: frontIconOrImage,
        imageUrl: frontImageUrl,
        imageStyle: frontImageStyle,
        icon: frontIcon,
        iconStyle: frontIconStyle,
        linkType: linkType,
        title: frontTitle,
        titleStyle: frontTitleStyle,
        content: frontContent,
        contentStyle: frontContentStyle
      })), /*#__PURE__*/React.createElement("div", {
        className: "back",
        style: backStyle
      }, /*#__PURE__*/React.createElement(_flipbox_content__WEBPACK_IMPORTED_MODULE_1__["default"], {
        selectedSide: selectedSide,
        iconOrImage: backIconOrImage,
        imageUrl: backImageUrl,
        imageStyle: backImageStyle,
        icon: backIcon,
        iconStyle: backIconStyle,
        linkType: linkType,
        title: backTitle,
        titleStyle: backTitleStyle,
        content: backContent,
        contentStyle: backContentStyle
      }), /*#__PURE__*/React.createElement(_flipbox_button__WEBPACK_IMPORTED_MODULE_0__["FlipboxButton"], {
        link: link,
        classNames: buttonClasses,
        style: _objectSpread(_objectSpread({}, backButtonStyle), {}, {
          display: linkType === "button" ? "block" : "none"
        }),
        displayButtonIcon: displayButtonIcon,
        buttonText: buttonText,
        buttonIcon: buttonIcon,
        buttonIconPos: buttonIconPos
      }))))];
    }
  }]);

  return Edit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/example.js":
/*!************************!*\
  !*** ./src/example.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var example = {
  attributes: {
    selectedSide: "front",
    frontIconOrImage: "icon",
    frontIcon: "fab fa-rev",
    frontTitle: "Front Title Here",
    frontContent: "Front Content Here"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (example);

/***/ }),

/***/ "./src/flipbox-button.js":
/*!*******************************!*\
  !*** ./src/flipbox-button.js ***!
  \*******************************/
/*! exports provided: FlipboxButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipboxButton", function() { return FlipboxButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var FlipboxButton = function FlipboxButton(_ref) {
  var link = _ref.link,
      classNames = _ref.classNames,
      style = _ref.style,
      buttonIconPos = _ref.buttonIconPos,
      buttonText = _ref.buttonText,
      buttonIcon = _ref.buttonIcon,
      displayButtonIcon = _ref.displayButtonIcon;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flipbox-button-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "".concat(classNames, "  flipbox-button-link"),
    href: link ? link : "#",
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      flexDirection: buttonIconPos === "after" ? "row" : "row-reverse",
      justifyContent: "space-around"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, buttonText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fa fa-".concat(buttonIcon, " flipbox-button-icon"),
    style: {
      display: displayButtonIcon ? "block" : "none"
    }
  }))));
};

/***/ }),

/***/ "./src/flipbox-content.js":
/*!********************************!*\
  !*** ./src/flipbox-content.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _flipbox_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flipbox-icon */ "./src/flipbox-icon.js");
/* harmony import */ var _flipbox_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flipbox-image */ "./src/flipbox-image.js");
/* harmony import */ var _flipbox_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flipbox-title */ "./src/flipbox-title.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var FlipboxContent = function FlipboxContent(_ref) {
  var selectedSide = _ref.selectedSide,
      iconOrImage = _ref.iconOrImage,
      imageUrl = _ref.imageUrl,
      icon = _ref.icon,
      title = _ref.title,
      content = _ref.content,
      linkType = _ref.linkType,
      link = _ref.link,
      imageStyle = _ref.imageStyle,
      iconStyle = _ref.iconStyle,
      titleStyle = _ref.titleStyle,
      contentStyle = _ref.contentStyle;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flipbox-items-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_flipbox_image__WEBPACK_IMPORTED_MODULE_3__["FlipboxImage"], {
    selectedSide: selectedSide,
    url: imageUrl,
    style: imageStyle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_flipbox_icon__WEBPACK_IMPORTED_MODULE_2__["FlipboxIcon"], {
    selectedSide: selectedSide,
    icon: icon,
    style: _objectSpread(_objectSpread({}, iconStyle), {}, {
      display: iconOrImage === "icon" && icon ? "block" : "none"
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_flipbox_title__WEBPACK_IMPORTED_MODULE_4__["FlipboxTitle"], {
    selectedSide: selectedSide,
    linkType: linkType,
    link: link,
    title: title,
    titleStyle: titleStyle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "".concat(selectedSide, "-content"),
    style: contentStyle
  }, content));
};

FlipboxContent.propTypes = {
  selectedSide: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  iconOrImage: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  imageStyle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  iconStyle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  linkType: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  content: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  contentStyle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (FlipboxContent);

/***/ }),

/***/ "./src/flipbox-icon.js":
/*!*****************************!*\
  !*** ./src/flipbox-icon.js ***!
  \*****************************/
/*! exports provided: FlipboxIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipboxIcon", function() { return FlipboxIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var FlipboxIcon = function FlipboxIcon(_ref) {
  var selectedSide = _ref.selectedSide,
      icon = _ref.icon,
      style = _ref.style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flipbox-icon-wrapper-".concat(selectedSide),
    style: style,
    "data-icon": icon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: icon
  }));
};

/***/ }),

/***/ "./src/flipbox-image.js":
/*!******************************!*\
  !*** ./src/flipbox-image.js ***!
  \******************************/
/*! exports provided: FlipboxImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipboxImage", function() { return FlipboxImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var FlipboxImage = function FlipboxImage(_ref) {
  var selectedSide = _ref.selectedSide,
      url = _ref.url,
      style = _ref.style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(selectedSide, "-image-container"),
    style: style.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: url,
    style: style.image
  }));
};

/***/ }),

/***/ "./src/flipbox-title.js":
/*!******************************!*\
  !*** ./src/flipbox-title.js ***!
  \******************************/
/*! exports provided: FlipboxTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipboxTitle", function() { return FlipboxTitle; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var FlipboxTitle = function FlipboxTitle(_ref) {
  var selectedSide = _ref.selectedSide,
      linkType = _ref.linkType,
      link = _ref.link,
      title = _ref.title,
      titleStyle = _ref.titleStyle;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: link ? link : "#",
    className: "title-link",
    style: {
      display: linkType === "title" ? "block" : "none"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "".concat(selectedSide, "-title"),
    style: titleStyle
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "".concat(selectedSide, "-title"),
    style: _objectSpread(_objectSpread({}, titleStyle), {}, {
      display: linkType !== "title" ? "block" : "none"
    })
  }, title));
};
FlipboxTitle.propTypes = {
  selectedSide: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  linkType: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  link: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
};

/***/ }),

/***/ "./src/flipbox-wrapper.js":
/*!********************************!*\
  !*** ./src/flipbox-wrapper.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var FlipboxWrapper = function FlipboxWrapper(_ref) {
  var style = _ref.style,
      className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    style: style
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (FlipboxWrapper);

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/React.createElement("svg", {
    width: "600",
    height: "672",
    viewBox: "0 0 600 672",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "50%",
    y1: "-.962%",
    x2: "50%",
    y2: "102.035%",
    id: "linearGradient-1"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#1A6DFF",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C822FF",
    offset: "100%"
  }))), /*#__PURE__*/React.createElement("g", {
    id: "Page-1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Artboard",
    fill: "url(#linearGradient-1)",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("g", {
    id: "eb-flipbox"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M410,0 L393.55469,13.82812 L301.36719,91.48437 L0,91.48437 L0,671.48437 L308.63281,671.48437 L410,586.13281 L410,0 Z M390,42.96875 L390,576.83593 L301.36719,651.48437 L20,651.48437 L20,111.48437 L308.63281,111.48437 L390,42.96875 Z M430,91.48437 C424.49219,91.48437 420,95.97656 420,101.48437 C420,106.99218 424.49219,111.48437 430,111.48437 C435.50781,111.48437 440,106.99218 440,101.48437 C440,95.97656 435.50781,91.48437 430,91.48437 Z M470,91.48437 C464.49219,91.48437 460,95.97656 460,101.48437 C460,106.99218 464.49219,111.48437 470,111.48437 C475.50781,111.48437 480,106.99218 480,101.48437 C480,95.97656 475.50781,91.48437 470,91.48437 Z M510,91.48437 C504.49219,91.48437 500,95.97656 500,101.48437 C500,106.99218 504.49219,111.48437 510,111.48437 C515.50781,111.48437 520,106.99218 520,101.48437 C520,95.97656 515.50781,91.48437 510,91.48437 Z M550,91.48437 C544.49219,91.48437 540,95.97656 540,101.48437 C540,106.99218 544.49219,111.48437 550,111.48437 C555.50781,111.48437 560,106.99218 560,101.48437 C560,95.97656 555.50781,91.48437 550,91.48437 Z M590,91.48437 C584.49219,91.48437 580,95.97656 580,101.48437 C580,106.99218 584.49219,111.48437 590,111.48437 C595.50781,111.48437 600,106.99218 600,101.48437 C600,95.97656 595.50781,91.48437 590,91.48437 Z M300,131.48437 C294.49219,131.48437 290,135.97656 290,141.48437 C290,146.99218 294.49219,151.48437 300,151.48437 C305.50781,151.48437 310,146.99218 310,141.48437 C310,135.97656 305.50781,131.48437 300,131.48437 Z M590,131.48437 C584.49219,131.48437 580,135.97656 580,141.48437 C580,146.99218 584.49219,151.48437 590,151.48437 C595.50781,151.48437 600,146.99218 600,141.48437 C600,135.97656 595.50781,131.48437 590,131.48437 Z M300,171.48437 C294.49219,171.48437 290,175.97656 290,181.48437 C290,186.99218 294.49219,191.48437 300,191.48437 C305.50781,191.48437 310,186.99218 310,181.48437 C310,175.97656 305.50781,171.48437 300,171.48437 Z M590,171.48437 C584.49219,171.48437 580,175.97656 580,181.48437 C580,186.99218 584.49219,191.48437 590,191.48437 C595.50781,191.48437 600,186.99218 600,181.48437 C600,175.97656 595.50781,171.48437 590,171.48437 Z M300,211.48437 C294.49219,211.48437 290,215.97656 290,221.48437 C290,226.99218 294.49219,231.48437 300,231.48437 C305.50781,231.48437 310,226.99218 310,221.48437 C310,215.97656 305.50781,211.48437 300,211.48437 Z M590,211.48437 C584.49219,211.48437 580,215.97656 580,221.48437 C580,226.99218 584.49219,231.48437 590,231.48437 C595.50781,231.48437 600,226.99218 600,221.48437 C600,215.97656 595.50781,211.48437 590,211.48437 Z M300,251.48437 C294.49219,251.48437 290,255.97656 290,261.48437 C290,266.99218 294.49219,271.48437 300,271.48437 C305.50781,271.48437 310,266.99218 310,261.48437 C310,255.97656 305.50781,251.48437 300,251.48437 Z M590,251.48437 C584.49219,251.48437 580,255.97656 580,261.48437 C580,266.99218 584.49219,271.48437 590,271.48437 C595.50781,271.48437 600,266.99218 600,261.48437 C600,255.97656 595.50781,251.48437 590,251.48437 Z M270,291.48437 L270,331.48437 L220,331.48437 C181.44531,331.48437 150,362.92968 150,401.48437 L150,491.48437 L170,491.48437 L170,401.48437 C170,373.75 192.26563,351.48437 220,351.48437 L270,351.48437 L270,391.48437 L330,341.48437 L270,291.48437 Z M590,291.48437 C584.49219,291.48437 580,295.97656 580,301.48437 C580,306.99218 584.49219,311.48437 590,311.48437 C595.50781,311.48437 600,306.99218 600,301.48437 C600,295.97656 595.50781,291.48437 590,291.48437 Z M590,331.48437 C584.49219,331.48437 580,335.97656 580,341.48437 C580,346.99218 584.49219,351.48437 590,351.48437 C595.50781,351.48437 600,346.99218 600,341.48437 C600,335.97656 595.50781,331.48437 590,331.48437 Z M590,371.48437 C584.49219,371.48437 580,375.97656 580,381.48437 C580,386.99218 584.49219,391.48437 590,391.48437 C595.50781,391.48437 600,386.99218 600,381.48437 C600,375.97656 595.50781,371.48437 590,371.48437 Z M300,411.48437 C294.49219,411.48437 290,415.97656 290,421.48437 C290,426.99218 294.49219,431.48437 300,431.48437 C305.50781,431.48437 310,426.99218 310,421.48437 C310,415.97656 305.50781,411.48437 300,411.48437 Z M590,411.48437 C584.49219,411.48437 580,415.97656 580,421.48437 C580,426.99218 584.49219,431.48437 590,431.48437 C595.50781,431.48437 600,426.99218 600,421.48437 C600,415.97656 595.50781,411.48437 590,411.48437 Z M300,451.48437 C294.49219,451.48437 290,455.97656 290,461.48437 C290,466.99218 294.49219,471.48437 300,471.48437 C305.50781,471.48437 310,466.99218 310,461.48437 C310,455.97656 305.50781,451.48437 300,451.48437 Z M590,451.48437 C584.49219,451.48437 580,455.97656 580,461.48437 C580,466.99218 584.49219,471.48437 590,471.48437 C595.50781,471.48437 600,466.99218 600,461.48437 C600,455.97656 595.50781,451.48437 590,451.48437 Z M300,491.48437 C294.49219,491.48437 290,495.97656 290,501.48437 C290,506.99218 294.49219,511.48437 300,511.48437 C305.50781,511.48437 310,506.99218 310,501.48437 C310,495.97656 305.50781,491.48437 300,491.48437 Z M590,491.48437 C584.49219,491.48437 580,495.97656 580,501.48437 C580,506.99218 584.49219,511.48437 590,511.48437 C595.50781,511.48437 600,506.99218 600,501.48437 C600,495.97656 595.50781,491.48437 590,491.48437 Z M300,531.48437 C294.49219,531.48437 290,535.97656 290,541.48437 C290,546.99218 294.49219,551.48437 300,551.48437 C305.50781,551.48437 310,546.99218 310,541.48437 C310,535.97656 305.50781,531.48437 300,531.48437 Z M590,531.48437 C584.49219,531.48437 580,535.97656 580,541.48437 C580,546.99218 584.49219,551.48437 590,551.48437 C595.50781,551.48437 600,546.99218 600,541.48437 C600,535.97656 595.50781,531.48437 590,531.48437 Z M300,571.48437 C294.49219,571.48437 290,575.97656 290,581.48437 C290,586.99218 294.49219,591.48437 300,591.48437 C305.50781,591.48437 310,586.99218 310,581.48437 C310,575.97656 305.50781,571.48437 300,571.48437 Z M590,571.48437 C584.49219,571.48437 580,575.97656 580,581.48437 C580,586.99218 584.49219,591.48437 590,591.48437 C595.50781,591.48437 600,586.99218 600,581.48437 C600,575.97656 595.50781,571.48437 590,571.48437 Z M300,611.48437 C294.49219,611.48437 290,615.97656 290,621.48437 C290,626.99218 294.49219,631.48437 300,631.48437 C305.50781,631.48437 310,626.99218 310,621.48437 C310,615.97656 305.50781,611.48437 300,611.48437 Z M590,611.48437 C584.49219,611.48437 580,615.97656 580,621.48437 C580,626.99218 584.49219,631.48437 590,631.48437 C595.50781,631.48437 600,626.99218 600,621.48437 C600,615.97656 595.50781,611.48437 590,611.48437 Z M350,651.48437 C344.49219,651.48437 340,655.97656 340,661.48437 C340,666.99218 344.49219,671.48437 350,671.48437 C355.50781,671.48437 360,666.99218 360,661.48437 C360,655.97656 355.50781,651.48437 350,651.48437 Z M390,651.48437 C384.49219,651.48437 380,655.97656 380,661.48437 C380,666.99218 384.49219,671.48437 390,671.48437 C395.50781,671.48437 400,666.99218 400,661.48437 C400,655.97656 395.50781,651.48437 390,651.48437 Z M430,651.48437 C424.49219,651.48437 420,655.97656 420,661.48437 C420,666.99218 424.49219,671.48437 430,671.48437 C435.50781,671.48437 440,666.99218 440,661.48437 C440,655.97656 435.50781,651.48437 430,651.48437 Z M470,651.48437 C464.49219,651.48437 460,655.97656 460,661.48437 C460,666.99218 464.49219,671.48437 470,671.48437 C475.50781,671.48437 480,666.99218 480,661.48437 C480,655.97656 475.50781,651.48437 470,651.48437 Z M510,651.48437 C504.49219,651.48437 500,655.97656 500,661.48437 C500,666.99218 504.49219,671.48437 510,671.48437 C515.50781,671.48437 520,666.99218 520,661.48437 C520,655.97656 515.50781,651.48437 510,651.48437 Z M550,651.48437 C544.49219,651.48437 540,655.97656 540,661.48437 C540,666.99218 544.49219,671.48437 550,671.48437 C555.50781,671.48437 560,666.99218 560,661.48437 C560,655.97656 555.50781,651.48437 550,651.48437 Z M590,651.48437 C584.49219,651.48437 580,655.97656 580,661.48437 C580,666.99218 584.49219,671.48437 590,671.48437 C595.50781,671.48437 600,666.99218 600,661.48437 C600,655.97656 595.50781,651.48437 590,651.48437 Z",
    id: "Shape"
  })))));
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./example */ "./src/example.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon */ "./src/icon.js");








Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])("essential-blocks/flipbox", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Flipbox", "essential-blocks"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("", "essential-blocks"),
  category: "widgets",
  icon: _icon__WEBPACK_IMPORTED_MODULE_7__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"],
  example: _example__WEBPACK_IMPORTED_MODULE_6__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_faIcons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/faIcons */ "./util/faIcons.js");
/* harmony import */ var _util_gradient_color_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/gradient-color-controller */ "./util/gradient-color-controller/index.js");
/* harmony import */ var _util_image_avatar_ImageAvater__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/image-avatar/ImageAvater */ "./util/image-avatar/ImageAvater.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/helper */ "./util/helper.js");
/* harmony import */ var _util_dimensions_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/dimensions-control */ "./util/dimensions-control/index.js");
/* harmony import */ var _util_unit_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/unit-control */ "./util/unit-control/index.js");
/* harmony import */ var _util_typography_control_FontPicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/typography-control/FontPicker */ "./util/typography-control/FontPicker.js");
/* harmony import */ var _util_color_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/color-control */ "./util/color-control/index.js");
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    RangeControl = _wp$components.RangeControl,
    ToggleControl = _wp$components.ToggleControl,
    ButtonGroup = _wp$components.ButtonGroup,
    BaseControl = _wp$components.BaseControl,
    Dropdown = _wp$components.Dropdown;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    MediaUpload = _wp$blockEditor.MediaUpload;
/*
 * Internal dependencies
 */












var Inspector = function Inspector(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var flipboxStyle = attributes.flipboxStyle,
      boxHeight = attributes.boxHeight,
      boxWidth = attributes.boxWidth,
      isHover = attributes.isHover,
      flipType = attributes.flipType,
      selectedSide = attributes.selectedSide,
      frontIconOrImage = attributes.frontIconOrImage,
      frontIcon = attributes.frontIcon,
      frontImageUrl = attributes.frontImageUrl,
      frontImageId = attributes.frontImageId,
      backIconOrImage = attributes.backIconOrImage,
      backIcon = attributes.backIcon,
      backImageUrl = attributes.backImageUrl,
      backImageId = attributes.backImageId,
      frontTitle = attributes.frontTitle,
      frontContent = attributes.frontContent,
      backTitle = attributes.backTitle,
      backContent = attributes.backContent,
      frontImageSize = attributes.frontImageSize,
      backImageSize = attributes.backImageSize,
      frontBackground = attributes.frontBackground,
      backBackground = attributes.backBackground,
      borderStyle = attributes.borderStyle,
      borderColor = attributes.borderColor,
      borderWidth = attributes.borderWidth,
      borderRadius = attributes.borderRadius,
      addLink = attributes.addLink,
      linkType = attributes.linkType,
      buttonText = attributes.buttonText,
      buttonIcon = attributes.buttonIcon,
      buttonIconPos = attributes.buttonIconPos,
      link = attributes.link,
      frontTitleColor = attributes.frontTitleColor,
      backTitleColor = attributes.backTitleColor,
      frontContentColor = attributes.frontContentColor,
      backContentColor = attributes.backContentColor,
      frontImageRadius = attributes.frontImageRadius,
      backImageRadius = attributes.backImageRadius,
      frontIconSize = attributes.frontIconSize,
      backIconSize = attributes.backIconSize,
      frontIconColor = attributes.frontIconColor,
      backIconColor = attributes.backIconColor,
      boxShadowColor = attributes.boxShadowColor,
      shadowVOffset = attributes.shadowVOffset,
      shadowHOffset = attributes.shadowHOffset,
      shadowSpread = attributes.shadowSpread,
      shadowBlur = attributes.shadowBlur,
      buttonStyle = attributes.buttonStyle,
      buttonClasses = attributes.buttonClasses,
      buttonBackground = attributes.buttonBackground,
      buttonColor = attributes.buttonColor,
      buttonSize = attributes.buttonSize,
      buttonBorderSize = attributes.buttonBorderSize,
      buttonBorderColor = attributes.buttonBorderColor,
      buttonBorderType = attributes.buttonBorderType,
      buttonBorderRadius = attributes.buttonBorderRadius,
      buttonPaddingTop = attributes.buttonPaddingTop,
      buttonPaddingRight = attributes.buttonPaddingRight,
      buttonPaddingBottom = attributes.buttonPaddingBottom,
      buttonPaddingLeft = attributes.buttonPaddingLeft,
      btnShadowColor = attributes.btnShadowColor,
      btnShadowVOffset = attributes.btnShadowVOffset,
      btnShadowHOffset = attributes.btnShadowHOffset,
      btnShadowBlur = attributes.btnShadowBlur,
      btnShadowSpread = attributes.btnShadowSpread,
      frontIconBackground = attributes.frontIconBackground,
      frontIconPadding = attributes.frontIconPadding,
      frontIconBorderRadius = attributes.frontIconBorderRadius,
      frontIconTopMargin = attributes.frontIconTopMargin,
      frontIconBorderSize = attributes.frontIconBorderSize,
      frontIconBorderType = attributes.frontIconBorderType,
      frontIconBorderColor = attributes.frontIconBorderColor,
      displayFrontIconBorder = attributes.displayFrontIconBorder,
      backIconBackground = attributes.backIconBackground,
      backIconPadding = attributes.backIconPadding,
      backIconBorderRadius = attributes.backIconBorderRadius,
      backIconTopMargin = attributes.backIconTopMargin,
      backIconBorderSize = attributes.backIconBorderSize,
      backIconBorderType = attributes.backIconBorderType,
      backIconBorderColor = attributes.backIconBorderColor,
      displayBackIconBorder = attributes.displayBackIconBorder,
      frontBackgroundType = attributes.frontBackgroundType,
      frontBackgroundGradient = attributes.frontBackgroundGradient,
      backBackgroundType = attributes.backBackgroundType,
      backBackgroundGradient = attributes.backBackgroundGradient,
      transitionSpeed = attributes.transitionSpeed,
      frontBackgroundImageID = attributes.frontBackgroundImageID,
      frontBackgroundImageURL = attributes.frontBackgroundImageURL,
      frontBackgroundPosition = attributes.frontBackgroundPosition,
      frontBackgroundPosX = attributes.frontBackgroundPosX,
      frontBackgroundPosXUnit = attributes.frontBackgroundPosXUnit,
      frontBackgroundPosY = attributes.frontBackgroundPosY,
      frontBackgroundPosYUnit = attributes.frontBackgroundPosYUnit,
      frontBackgroundSize = attributes.frontBackgroundSize,
      frontBackgroundWidth = attributes.frontBackgroundWidth,
      frontBackgroundWidthUnit = attributes.frontBackgroundWidthUnit,
      frontBackgroundRepeat = attributes.frontBackgroundRepeat,
      backBackgroundImageID = attributes.backBackgroundImageID,
      backBackgroundImageURL = attributes.backBackgroundImageURL,
      backBackgroundPosition = attributes.backBackgroundPosition,
      backBackgroundPosX = attributes.backBackgroundPosX,
      backBackgroundPosXUnit = attributes.backBackgroundPosXUnit,
      backBackgroundPosY = attributes.backBackgroundPosY,
      backBackgroundPosYUnit = attributes.backBackgroundPosYUnit,
      backBackgroundSize = attributes.backBackgroundSize,
      backBackgroundWidth = attributes.backBackgroundWidth,
      backBackgroundWidthUnit = attributes.backBackgroundWidthUnit,
      backBackgroundRepeat = attributes.backBackgroundRepeat,
      displayButtonIcon = attributes.displayButtonIcon,
      linkedButtonPadding = attributes.linkedButtonPadding,
      titleFontSize = attributes.titleFontSize,
      titleFontSizeUnit = attributes.titleFontSizeUnit,
      contentFontSize = attributes.contentFontSize,
      contentFontSizeUnit = attributes.contentFontSizeUnit,
      linkedContainerMargin = attributes.linkedContainerMargin,
      containerMarginTop = attributes.containerMarginTop,
      containerMarginRight = attributes.containerMarginRight,
      containerMarginBottom = attributes.containerMarginBottom,
      containerMarginLeft = attributes.containerMarginLeft,
      linkedContainerPadding = attributes.linkedContainerPadding,
      containerPaddingTop = attributes.containerPaddingTop,
      containerPaddingRight = attributes.containerPaddingRight,
      containerPaddingBottom = attributes.containerPaddingBottom,
      containerPaddingLeft = attributes.containerPaddingLeft,
      marginUnit = attributes.marginUnit,
      paddingUnit = attributes.paddingUnit,
      radiusUnit = attributes.radiusUnit,
      buttonSizeUnit = attributes.buttonSizeUnit,
      buttonPaddingUnit = attributes.buttonPaddingUnit,
      heightUnit = attributes.heightUnit,
      widthUnit = attributes.widthUnit,
      titleFontFamily = attributes.titleFontFamily,
      titleFontWeight = attributes.titleFontWeight,
      titleTextTransform = attributes.titleTextTransform,
      titleTextDecoration = attributes.titleTextDecoration,
      titleLetterSpacing = attributes.titleLetterSpacing,
      titleLetterSpacingUnit = attributes.titleLetterSpacingUnit,
      titleLineHeight = attributes.titleLineHeight,
      titleLineHeightUnit = attributes.titleLineHeightUnit,
      contentFontFamily = attributes.contentFontFamily,
      contentFontWeight = attributes.contentFontWeight,
      contentTextTransform = attributes.contentTextTransform,
      contentTextDecoration = attributes.contentTextDecoration,
      contentLetterSpacing = attributes.contentLetterSpacing,
      contentLetterSpacingUnit = attributes.contentLetterSpacingUnit,
      contentLineHeight = attributes.contentLineHeight,
      contentLineHeightUnit = attributes.contentLineHeightUnit; // Genereate different button styles

  var handleButtonStyle = function handleButtonStyle(newStyle) {
    var buttonStyle = newStyle;
    var buttonClasses = Object(_util_helper__WEBPACK_IMPORTED_MODULE_5__["getButtonClasses"])(newStyle);
    setAttributes({
      buttonStyle: buttonStyle,
      buttonClasses: buttonClasses
    });
  };

  var TITLE_SIZE_STEP = titleFontSizeUnit === "em" ? 0.1 : 1;
  var TITLE_SIZE_MAX = titleFontSizeUnit === "em" ? 10 : 100;
  var TITLE_LINE_HEIGHT_STEP = titleLineHeightUnit === "em" ? 0.1 : 1;
  var TITLE_LINE_HEIGHT_MAX = titleLineHeightUnit === "em" ? 10 : 100;
  var TITLE_SPACING_STEP = titleLetterSpacingUnit === "em" ? 0.1 : 1;
  var TITLE_SPACING_MAX = titleLetterSpacingUnit === "em" ? 10 : 100;
  var CONTENT_SIZE_STEP = contentFontSizeUnit === "em" ? 0.1 : 1;
  var CONTENT_SIZE_MAX = contentFontSizeUnit === "em" ? 10 : 100;
  var CONTENT_LINE_HEIGHT_STEP = contentLineHeightUnit === "em" ? 0.1 : 1;
  var CONTENT_LINE_HEIGHT_MAX = contentLineHeightUnit === "em" ? 10 : 100;
  var CONTENT_SPACING_STEP = contentLetterSpacingUnit === "em" ? 0.1 : 1;
  var CONTENT_SPACING_MAX = contentLetterSpacingUnit === "em" ? 10 : 100;
  return /*#__PURE__*/React.createElement(InspectorControls, {
    keys: "controls"
  }, /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Flipbox setting")
  }, /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: heightUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(heightUnit) {
      return setAttributes({
        heightUnit: heightUnit
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Box Height"),
    value: boxHeight,
    allowReset: true,
    onChange: function onChange(newSize) {
      return setAttributes({
        boxHeight: newSize
      });
    },
    min: 0,
    max: 600
  }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: widthUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(widthUnit) {
      return setAttributes({
        widthUnit: widthUnit
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Box Width"),
    value: boxWidth,
    allowReset: true,
    onChange: function onChange(newSize) {
      return setAttributes({
        boxWidth: newSize
      });
    },
    min: 0,
    max: 600
  }), /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Flipbox Type"),
    value: flipType,
    options: _constants__WEBPACK_IMPORTED_MODULE_4__["FLIPBOX_TYPE"],
    onChange: function onChange(newStyle) {
      return setAttributes({
        flipType: newStyle
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Transition Speed"),
    value: transitionSpeed,
    onChange: function onChange(newValue) {
      var transitionSpeed = newValue;
      setAttributes({
        transitionSpeed: transitionSpeed
      });
    },
    min: 0,
    max: 20
  }), /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Selected Side")
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_4__["FLIPBOX_SIDES"].map(function (option) {
    return /*#__PURE__*/React.createElement(Button, {
      isLarge: true,
      isPrimary: selectedSide === option.value,
      isSecondary: selectedSide !== option.value,
      onClick: function onClick() {
        return setAttributes({
          selectedSide: option.value
        });
      }
    }, option.label);
  }))), selectedSide === "front" && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Icon Type"),
    id: "eb-flipbox-icon-type"
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    id: "eb-flipbox-icon-type"
  }, _constants__WEBPACK_IMPORTED_MODULE_4__["ICON_TYPE"].map(function (item) {
    return /*#__PURE__*/React.createElement(Button, {
      isLarge: true,
      isPrimary: frontIconOrImage === item.value,
      isSecondary: frontIconOrImage !== item.value,
      onClick: function onClick() {
        return setAttributes({
          frontIconOrImage: item.value
        });
      }
    }, item.label);
  })))), selectedSide === "back" && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Icon Type"),
    id: "eb-flipbox-icon-type"
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    id: "eb-flipbox-icon-type"
  }, _constants__WEBPACK_IMPORTED_MODULE_4__["ICON_TYPE"].map(function (item) {
    return /*#__PURE__*/React.createElement(Button, {
      isLarge: true,
      isPrimary: backIconOrImage === item.value,
      isSecondary: backIconOrImage !== item.value,
      onClick: function onClick() {
        return setAttributes({
          backIconOrImage: item.value
        });
      }
    }, item.label);
  }))))), selectedSide === "front" && frontIconOrImage === "icon" && /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Front Icon Settings")
  }, /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Select Front Icon")
  }, /*#__PURE__*/React.createElement(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_3___default.a, {
    icons: _util_faIcons__WEBPACK_IMPORTED_MODULE_0__["default"],
    value: frontIcon,
    onChange: function onChange(frontIcon) {
      return setAttributes({
        frontIcon: frontIcon
      });
    },
    appendTo: "body",
    closeOnSelect: true
  })), frontIcon && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Icon Color"),
    color: frontIconColor,
    onChange: function onChange(frontIconColor) {
      return setAttributes({
        frontIconColor: frontIconColor
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Icon Background"),
    color: frontIconBackground,
    onChange: function onChange(frontIconBackground) {
      return setAttributes({
        frontIconBackground: frontIconBackground
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Icon Size"),
    value: frontIconSize || _constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_ICON_SIZE"],
    allowReset: true,
    onChange: function onChange(newSize) {
      return setAttributes({
        frontIconSize: newSize
      });
    },
    min: 8,
    max: 100
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Icon Padding"),
    value: frontIconPadding,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        frontIconPadding: newValue
      });
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Top Margin"),
    value: frontIconTopMargin,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        frontIconTopMargin: newValue
      });
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Border Settings"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Border Size"),
    value: frontIconBorderSize,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        frontIconBorderSize: newValue
      });
    },
    min: 0,
    max: 30
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Border Radius"),
    value: frontIconBorderRadius,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        frontIconBorderRadius: newValue
      });
    },
    min: 0,
    max: 50
  }), /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Border Type"),
    value: frontIconBorderType,
    options: _constants__WEBPACK_IMPORTED_MODULE_4__["BORDER_STYLES"],
    onChange: function onChange(newValue) {
      return setAttributes({
        frontIconBorderType: newValue
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Border Color"),
    color: frontIconBorderColor,
    onChange: function onChange(frontIconBorderColor) {
      return setAttributes({
        frontIconBorderColor: frontIconBorderColor
      });
    }
  }))))), selectedSide === "front" && frontIconOrImage === "image" && /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Front Image Settings")
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Flipbox Image"),
    id: "eb-flipbox-front-image"
  }, frontImageUrl ? /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(_util_image_avatar_ImageAvater__WEBPACK_IMPORTED_MODULE_2__["default"], {
    imageUrl: frontImageUrl,
    onDeleteImage: function onDeleteImage() {
      return setAttributes({
        frontImageUrl: null
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Image Size"),
    value: frontImageSize,
    onChange: function onChange(newSize) {
      return setAttributes({
        frontImageSize: newSize
      });
    },
    min: 0,
    max: 300
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Border Radius"),
    value: frontImageRadius,
    onChange: function onChange(newValue) {
      return setAttributes({
        frontImageRadius: newValue
      });
    },
    min: 0,
    max: 50
  })) : /*#__PURE__*/React.createElement(MediaUpload, {
    onSelect: function onSelect(media) {
      return setAttributes({
        frontImageId: media.id,
        frontImageUrl: media.url
      });
    },
    type: "image",
    value: frontImageId,
    render: function render(_ref2) {
      var open = _ref2.open;
      return !frontImageUrl && /*#__PURE__*/React.createElement(Button, {
        className: "eb-flipbox-upload-button",
        label: __("Upload Image"),
        icon: "format-image",
        onClick: open
      });
    }
  }))), selectedSide === "back" && backIconOrImage === "icon" && /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Back Icon Settings")
  }, /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Select Back Icon"),
    id: "eb-flipbox-back-icon"
  }, /*#__PURE__*/React.createElement(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_3___default.a, {
    icons: _util_faIcons__WEBPACK_IMPORTED_MODULE_0__["default"],
    value: backIcon,
    onChange: function onChange(backIcon) {
      return setAttributes({
        backIcon: backIcon
      });
    },
    appendTo: "body",
    closeOnSelect: true
  })), backIcon && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Icon Color"),
    color: backIconColor,
    onChange: function onChange(backIconColor) {
      return setAttributes({
        backIconColor: backIconColor
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Icon Background"),
    color: backIconBackground,
    onChange: function onChange(backIconBackground) {
      return setAttributes({
        backIconBackground: backIconBackground
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Icon Size"),
    value: backIconSize || _constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_ICON_SIZE"],
    allowReset: true,
    onChange: function onChange(newSize) {
      return setAttributes({
        backIconSize: newSize
      });
    },
    min: 8,
    max: 64
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Padding"),
    value: backIconPadding,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        backIconPadding: newValue
      });
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Top Margin"),
    value: backIconTopMargin,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        backIconTopMargin: newValue
      });
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Back Icon Border Settings"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Border Size"),
    value: backIconBorderSize,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        backIconBorderSize: newValue
      });
    },
    min: 0,
    max: 30
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Border Radius"),
    value: backIconBorderRadius,
    onChange: function onChange(newValue) {
      return setAttributes({
        backIconBorderRadius: newValue
      });
    },
    min: 0,
    max: 50
  }), /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Border Type"),
    value: backIconBorderType,
    options: _constants__WEBPACK_IMPORTED_MODULE_4__["BORDER_STYLES"],
    onChange: function onChange(newValue) {
      return setAttributes({
        backIconBorderType: newValue
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Border Color"),
    color: backIconBorderColor,
    onChange: function onChange(backIconBorderColor) {
      return setAttributes({
        backIconBorderColor: backIconBorderColor
      });
    }
  }))))), selectedSide === "back" && backIconOrImage === "image" && /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Back Image Settings")
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Flipbox Image")
  }, backImageUrl ? /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(_util_image_avatar_ImageAvater__WEBPACK_IMPORTED_MODULE_2__["default"], {
    imageUrl: backImageUrl,
    onDeleteImage: function onDeleteImage() {
      return setAttributes({
        backImageUrl: null
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Image Size"),
    value: backImageSize,
    onChange: function onChange(newSize) {
      return setAttributes({
        backImageSize: newSize
      });
    },
    min: 0,
    max: 300
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Border Radius"),
    value: backImageRadius,
    onChange: function onChange(newValue) {
      return setAttributes({
        backImageRadius: newValue
      });
    },
    min: 0,
    max: 50
  })) : /*#__PURE__*/React.createElement(MediaUpload, {
    onSelect: function onSelect(media) {
      return setAttributes({
        backImageId: media.id,
        backImageUrl: media.url
      });
    },
    type: "image",
    value: backImageId,
    render: function render(_ref3) {
      var open = _ref3.open;
      return !backImageUrl && /*#__PURE__*/React.createElement(Button, {
        className: "eb-flipbox-upload-button",
        label: __("Upload Image"),
        icon: "format-image",
        onClick: open
      });
    }
  }))), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Flipbox Content"),
    initialOpen: false
  }, selectedSide === "front" && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(TextControl, {
    label: __("Front Title"),
    value: frontTitle,
    onChange: function onChange(newText) {
      return setAttributes({
        frontTitle: newText
      });
    }
  }), /*#__PURE__*/React.createElement(TextareaControl, {
    label: __("Front Content"),
    value: frontContent,
    onChange: function onChange(newText) {
      return setAttributes({
        frontContent: newText
      });
    }
  })), selectedSide === "back" && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(TextControl, {
    label: __("Back Title"),
    value: backTitle,
    onChange: function onChange(newText) {
      return setAttributes({
        backTitle: newText
      });
    }
  }), /*#__PURE__*/React.createElement(TextareaControl, {
    label: __("Back Content"),
    value: backContent,
    onChange: function onChange(newText) {
      return setAttributes({
        backContent: newText
      });
    }
  }))), /*#__PURE__*/React.createElement(PanelBody, {
    title: __(),
    initialOpen: false
  }), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Flipbox Style"),
    initialOpen: false
  }, selectedSide === "front" && /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Front Background Type"),
    id: "eb-flipbox-front-background-type"
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    id: "eb-flipbox-front-background-type"
  }, _constants__WEBPACK_IMPORTED_MODULE_4__["BACKGROUND_TYPE"].map(function (item) {
    return /*#__PURE__*/React.createElement(Button, {
      isLarge: true,
      isPrimary: frontBackgroundType === item.value,
      isSecondary: frontBackgroundType !== item.value,
      onClick: function onClick() {
        return setAttributes({
          frontBackgroundType: item.value
        });
      }
    }, item.label);
  }))), selectedSide === "front" && frontBackgroundType === "fill" && /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Front Background"),
    color: frontBackground,
    onChange: function onChange(frontBackground) {
      return setAttributes({
        frontBackground: frontBackground
      });
    }
  }), selectedSide === "front" && frontBackgroundType === "gradient" && /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Background Gradient Colors")
  }, /*#__PURE__*/React.createElement(_util_gradient_color_controller__WEBPACK_IMPORTED_MODULE_1__["default"], {
    colorOne: "#11998e",
    colorTwo: "#38ef7d",
    angle: 45,
    onChange: function onChange(frontBackgroundGradient) {
      return setAttributes({
        frontBackgroundGradient: frontBackgroundGradient
      });
    }
  })), selectedSide === "front" && frontBackgroundType === "image" && /*#__PURE__*/React.createElement(MediaUpload, {
    onSelect: function onSelect(media) {
      setAttributes({
        frontBackgroundImageID: media.id,
        frontBackgroundImageURL: media.url
      });
    },
    type: "image",
    value: frontBackgroundImageID,
    render: function render(_ref4) {
      var open = _ref4.open;
      return !frontBackgroundImageID && /*#__PURE__*/React.createElement(Button, {
        isSecondary: true,
        onClick: open,
        className: "eb-flipbox-upload-button",
        label: __("Upload Image"),
        icon: "format-image"
      });
    }
  }), selectedSide === "front" && frontBackgroundType === "image" && frontBackgroundImageID && /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Background Image")
  }, /*#__PURE__*/React.createElement(_util_image_avatar_ImageAvater__WEBPACK_IMPORTED_MODULE_2__["default"], {
    imageUrl: frontBackgroundImageURL,
    onDeleteImage: function onDeleteImage() {
      return setAttributes({
        frontBackgroundImageID: null,
        frontBackgroundImageURL: null
      });
    }
  }), /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Background Position"),
    value: frontBackgroundPosition,
    options: _constants__WEBPACK_IMPORTED_MODULE_4__["BACKGROUND_POSITION"],
    onChange: function onChange(frontBackgroundPosition) {
      return setAttributes({
        frontBackgroundPosition: frontBackgroundPosition
      });
    }
  }), frontBackgroundPosition === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: frontBackgroundPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(frontBackgroundPosXUnit) {
      return setAttributes({
        frontBackgroundPosXUnit: frontBackgroundPosXUnit
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("X Position"),
    value: frontBackgroundPosX,
    onChange: function onChange(frontBackgroundPosX) {
      return setAttributes({
        frontBackgroundPosX: frontBackgroundPosX
      });
    }
  }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: frontBackgroundPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(frontBackgroundPosYUnit) {
      return setAttributes({
        frontBackgroundPosYUnit: frontBackgroundPosYUnit
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Y Position"),
    value: frontBackgroundPosY,
    onChange: function onChange(frontBackgroundPosY) {
      return setAttributes({
        frontBackgroundPosY: frontBackgroundPosY
      });
    }
  })), /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Background Size"),
    value: frontBackgroundSize,
    options: _constants__WEBPACK_IMPORTED_MODULE_4__["BACKGROUND_SIZE"],
    onChange: function onChange(frontBackgroundSize) {
      return setAttributes({
        frontBackgroundSize: frontBackgroundSize
      });
    }
  }), frontBackgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: frontBackgroundWidthUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(frontBackgroundWidthUnit) {
      return setAttributes({
        frontBackgroundWidthUnit: frontBackgroundWidthUnit
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Width"),
    value: frontBackgroundWidth,
    onChange: function onChange(frontBackgroundWidth) {
      return setAttributes({
        frontBackgroundWidth: frontBackgroundWidth
      });
    }
  })), /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Background Repeat"),
    value: frontBackgroundRepeat,
    options: _constants__WEBPACK_IMPORTED_MODULE_4__["BACKGROUND_REPEAT"],
    onChange: function onChange(frontBackgroundRepeat) {
      return setAttributes({
        frontBackgroundRepeat: frontBackgroundRepeat
      });
    }
  })), selectedSide === "front" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Front Title"),
    color: frontTitleColor,
    onChange: function onChange(frontTitleColor) {
      return setAttributes({
        frontTitleColor: frontTitleColor
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Front Content"),
    color: frontContentColor,
    onChange: function onChange(frontContentColor) {
      return setAttributes({
        frontContentColor: frontContentColor
      });
    }
  })), selectedSide === "back" && /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Back Background Type"),
    id: "eb-flipbox-back-background-type"
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    id: "eb-flipbox-back-background-type"
  }, _constants__WEBPACK_IMPORTED_MODULE_4__["BACKGROUND_TYPE"].map(function (item) {
    return /*#__PURE__*/React.createElement(Button, {
      isLarge: true,
      isPrimary: backBackgroundType === item.value,
      isSecondary: backBackgroundType !== item.value,
      onClick: function onClick() {
        return setAttributes({
          backBackgroundType: item.value
        });
      }
    }, item.label);
  }))), selectedSide === "back" && backBackgroundType === "fill" && /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Back Background"),
    color: backBackground,
    onChange: function onChange(backBackground) {
      return setAttributes({
        backBackground: backBackground
      });
    }
  }), backBackgroundType === "gradient" && /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Background Gradient Colors")
  }, /*#__PURE__*/React.createElement(_util_gradient_color_controller__WEBPACK_IMPORTED_MODULE_1__["default"], {
    colorOne: "#f12711",
    colorTwo: "#f5af19",
    angle: 45,
    onChange: function onChange(newValue) {
      return setAttributes({
        backBackgroundGradient: newValue
      });
    }
  })), backBackgroundType === "image" && /*#__PURE__*/React.createElement(MediaUpload, {
    onSelect: function onSelect(media) {
      setAttributes({
        backBackgroundImageID: media.id,
        backBackgroundImageURL: media.url
      });
    },
    allowedTypes: ["image"],
    value: backBackgroundImageID,
    render: function render(_ref5) {
      var open = _ref5.open;
      return !backBackgroundImageID && /*#__PURE__*/React.createElement(Button, {
        className: "eb-flipbox-upload-button",
        label: __("Upload Image"),
        icon: "format-image",
        onClick: open
      });
    }
  }), selectedSide === "back" && backBackgroundType === "image" && backBackgroundImageID && /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Background Image")
  }, /*#__PURE__*/React.createElement(_util_image_avatar_ImageAvater__WEBPACK_IMPORTED_MODULE_2__["default"], {
    imageUrl: backBackgroundImageURL,
    onDeleteImage: function onDeleteImage() {
      return setAttributes({
        backBackgroundImageID: null,
        backBackgroundImageURL: null
      });
    }
  }), /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Background Position"),
    value: backBackgroundPosition,
    options: _constants__WEBPACK_IMPORTED_MODULE_4__["BACKGROUND_POSITION"],
    onChange: function onChange(backBackgroundPosition) {
      return setAttributes({
        backBackgroundPosition: backBackgroundPosition
      });
    }
  }), backBackgroundPosition === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: backBackgroundPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(backBackgroundPosXUnit) {
      return setAttributes({
        backBackgroundPosXUnit: backBackgroundPosXUnit
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("X Position"),
    value: backBackgroundPosX,
    onChange: function onChange(backBackgroundPosX) {
      return setAttributes({
        backBackgroundPosX: backBackgroundPosX
      });
    }
  }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: backBackgroundPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(backBackgroundPosYUnit) {
      return setAttributes({
        backBackgroundPosYUnit: backBackgroundPosYUnit
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Y Position"),
    value: backBackgroundPosY,
    onChange: function onChange(backBackgroundPosY) {
      return setAttributes({
        backBackgroundPosY: backBackgroundPosY
      });
    }
  })), /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Background Size"),
    value: backBackgroundSize,
    options: _constants__WEBPACK_IMPORTED_MODULE_4__["BACKGROUND_SIZE"],
    onChange: function onChange(backBackgroundSize) {
      return setAttributes({
        backBackgroundSize: backBackgroundSize
      });
    }
  }), backBackgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: backBackgroundWidthUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(backBackgroundWidthUnit) {
      return setAttributes({
        backBackgroundWidthUnit: backBackgroundWidthUnit
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Width"),
    value: backBackgroundWidth,
    onChange: function onChange(backBackgroundWidth) {
      return setAttributes({
        backBackgroundWidth: backBackgroundWidth
      });
    }
  })), /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Background Repeat"),
    value: backBackgroundRepeat,
    options: _constants__WEBPACK_IMPORTED_MODULE_4__["BACKGROUND_REPEAT"],
    onChange: function onChange(backBackgroundRepeat) {
      return setAttributes({
        backBackgroundRepeat: backBackgroundRepeat
      });
    }
  })), selectedSide === "back" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Back Title Color"),
    color: backTitleColor,
    onChange: function onChange(backTitleColor) {
      return setAttributes({
        backTitleColor: backTitleColor
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Back Content Color"),
    color: backContentColor,
    onChange: function onChange(backContentColor) {
      return setAttributes({
        backContentColor: backContentColor
      });
    }
  })), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Margin & Padding"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: marginUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(marginUnit) {
      return setAttributes({
        marginUnit: marginUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: __("Margin"),
    top: containerMarginTop,
    right: containerMarginRight,
    bottom: containerMarginBottom,
    left: containerMarginLeft,
    onChange: function onChange(_ref6) {
      var top = _ref6.top,
          right = _ref6.right,
          bottom = _ref6.bottom,
          left = _ref6.left;
      return setAttributes({
        containerMarginTop: top,
        containerMarginRight: right,
        containerMarginBottom: bottom,
        containerMarginLeft: left
      });
    }
  }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: paddingUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(paddingUnit) {
      return setAttributes({
        paddingUnit: paddingUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: __("Padding"),
    top: containerPaddingTop,
    right: containerPaddingRight,
    bottom: containerPaddingBottom,
    left: containerPaddingLeft,
    onChange: function onChange(_ref7) {
      var top = _ref7.top,
          right = _ref7.right,
          bottom = _ref7.bottom,
          left = _ref7.left;
      return setAttributes({
        containerPaddingTop: top,
        containerPaddingRight: right,
        containerPaddingBottom: bottom,
        containerPaddingLeft: left
      });
    }
  })), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Border Settings"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Border Style"),
    value: borderStyle,
    options: _constants__WEBPACK_IMPORTED_MODULE_4__["BORDER_STYLES"],
    onChange: function onChange(newStyle) {
      return setAttributes({
        borderStyle: newStyle
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Bordr Color"),
    color: borderColor,
    onChange: function onChange(borderColor) {
      return setAttributes({
        borderColor: borderColor
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Border Width"),
    value: borderWidth,
    onChange: function onChange(newSize) {
      return setAttributes({
        borderWidth: newSize
      });
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: radiusUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(radiusUnit) {
      return setAttributes({
        radiusUnit: radiusUnit
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Border Radius"),
    value: borderRadius,
    onChange: function onChange(newSize) {
      return setAttributes({
        borderRadius: newSize
      });
    },
    min: 0,
    max: 100
  })), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Shadow Settings"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Shadow Color"),
    color: boxShadowColor,
    onChange: function onChange(boxShadowColor) {
      return setAttributes({
        boxShadowColor: boxShadowColor
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Vertical Offset"),
    value: shadowVOffset,
    onChange: function onChange(newValue) {
      return setAttributes({
        shadowVOffset: newValue
      });
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Horizontal Offset"),
    value: shadowHOffset,
    onChange: function onChange(newValue) {
      return setAttributes({
        shadowHOffset: newValue
      });
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Blur"),
    value: shadowBlur,
    onChange: function onChange(newValue) {
      return setAttributes({
        shadowBlur: newValue
      });
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Spread"),
    value: shadowSpread,
    onChange: function onChange(newValue) {
      return setAttributes({
        shadowSpread: newValue
      });
    },
    min: 0,
    max: 100
  }))), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Typography"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Title"),
    className: "eb-typography-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref8) {
      var isOpen = _ref8.isOpen,
          onToggle = _ref8.onToggle;
      return /*#__PURE__*/React.createElement(Button, {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen,
        icon: "edit"
      });
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: "1rem"
        }
      }, /*#__PURE__*/React.createElement(_util_typography_control_FontPicker__WEBPACK_IMPORTED_MODULE_8__["default"], {
        label: __("Font Family"),
        value: titleFontFamily,
        onChange: function onChange(titleFontFamily) {
          return setAttributes({
            titleFontFamily: titleFontFamily
          });
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
        selectedUnit: titleFontSizeUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "%",
          value: "%"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(titleFontSizeUnit) {
          return setAttributes({
            titleFontSizeUnit: titleFontSizeUnit
          });
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Font Size"),
        value: titleFontSize,
        onChange: function onChange(titleFontSize) {
          return setAttributes({
            titleFontSize: titleFontSize
          });
        },
        step: TITLE_SIZE_STEP,
        min: 0,
        max: TITLE_SIZE_MAX
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Font Weight"),
        value: titleFontWeight,
        options: _constants__WEBPACK_IMPORTED_MODULE_4__["FONT_WEIGHTS"],
        onChange: function onChange(titleFontWeight) {
          return setAttributes({
            titleFontWeight: titleFontWeight
          });
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Text Transform"),
        value: titleTextTransform,
        options: _constants__WEBPACK_IMPORTED_MODULE_4__["TEXT_TRANSFORM"],
        onChange: function onChange(titleTextTransform) {
          return setAttributes({
            titleTextTransform: titleTextTransform
          });
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Text Decoration"),
        value: titleTextDecoration,
        options: _constants__WEBPACK_IMPORTED_MODULE_4__["TEXT_DECORATION"],
        onChange: function onChange(titleTextDecoration) {
          return setAttributes({
            titleTextDecoration: titleTextDecoration
          });
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
        selectedUnit: titleLetterSpacingUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(titleLetterSpacingUnit) {
          return setAttributes({
            titleLetterSpacingUnit: titleLetterSpacingUnit
          });
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Letter Spacing"),
        value: titleLetterSpacing,
        onChange: function onChange(titleLetterSpacing) {
          return setAttributes({
            titleLetterSpacing: titleLetterSpacing
          });
        },
        min: 0,
        max: TITLE_SPACING_MAX,
        step: TITLE_SPACING_STEP
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
        selectedUnit: titleLineHeightUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(titleLineHeightUnit) {
          return setAttributes({
            titleLineHeightUnit: titleLineHeightUnit
          });
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Line Height"),
        value: titleLineHeight,
        onChange: function onChange(titleLineHeight) {
          return setAttributes({
            titleLineHeight: titleLineHeight
          });
        },
        min: 0,
        max: TITLE_LINE_HEIGHT_MAX,
        step: TITLE_LINE_HEIGHT_STEP
      }));
    }
  })), /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Content"),
    className: "eb-typography-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref9) {
      var isOpen = _ref9.isOpen,
          onToggle = _ref9.onToggle;
      return /*#__PURE__*/React.createElement(Button, {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen,
        icon: "edit"
      });
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: "1rem"
        }
      }, /*#__PURE__*/React.createElement(_util_typography_control_FontPicker__WEBPACK_IMPORTED_MODULE_8__["default"], {
        label: __("Font Family"),
        value: contentFontFamily,
        onChange: function onChange(contentFontFamily) {
          return setAttributes({
            contentFontFamily: contentFontFamily
          });
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
        selectedUnit: contentFontSizeUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "%",
          value: "%"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(contentFontSizeUnit) {
          return setAttributes({
            contentFontSizeUnit: contentFontSizeUnit
          });
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Font Size"),
        value: contentFontSize,
        onChange: function onChange(contentFontSize) {
          return setAttributes({
            contentFontSize: contentFontSize
          });
        },
        step: CONTENT_SIZE_STEP,
        min: 0,
        max: CONTENT_SIZE_MAX
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Font Weight"),
        value: contentFontWeight,
        options: _constants__WEBPACK_IMPORTED_MODULE_4__["FONT_WEIGHTS"],
        onChange: function onChange(contentFontWeight) {
          return setAttributes({
            contentFontWeight: contentFontWeight
          });
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Text Transform"),
        value: contentTextTransform,
        options: _constants__WEBPACK_IMPORTED_MODULE_4__["TEXT_TRANSFORM"],
        onChange: function onChange(contentTextTransform) {
          return setAttributes({
            contentTextTransform: contentTextTransform
          });
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Text Decoration"),
        value: contentTextDecoration,
        options: _constants__WEBPACK_IMPORTED_MODULE_4__["TEXT_DECORATION"],
        onChange: function onChange(contentTextDecoration) {
          return setAttributes({
            contentTextDecoration: contentTextDecoration
          });
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
        selectedUnit: contentLetterSpacingUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(contentLetterSpacingUnit) {
          return setAttributes({
            contentLetterSpacingUnit: contentLetterSpacingUnit
          });
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Letter Spacing"),
        value: contentLetterSpacing,
        onChange: function onChange(contentLetterSpacing) {
          return setAttributes({
            contentLetterSpacing: contentLetterSpacing
          });
        },
        min: 0,
        max: CONTENT_SPACING_MAX,
        step: CONTENT_SPACING_STEP
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
        selectedUnit: contentLineHeightUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(contentLineHeightUnit) {
          return setAttributes({
            contentLineHeightUnit: contentLineHeightUnit
          });
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Line Height"),
        value: contentLineHeight,
        onChange: function onChange(contentLineHeight) {
          return setAttributes({
            contentLineHeight: contentLineHeight
          });
        },
        min: 0,
        max: CONTENT_LINE_HEIGHT_MAX,
        step: CONTENT_LINE_HEIGHT_STEP
      }));
    }
  }))), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Font Sizes"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Title Font Size"),
    value: titleFontSize,
    allowReset: true,
    onChange: function onChange(titleFontSize) {
      return setAttributes({
        titleFontSize: titleFontSize
      });
    },
    min: 0,
    max: 64
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Content Font Size"),
    value: contentFontSize,
    allowReset: true,
    onChange: function onChange(contentFontSize) {
      return setAttributes({
        contentFontSize: contentFontSize
      });
    },
    min: 0,
    max: 64
  })), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Link Settings"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Link Type"),
    id: "eb-flipbox-link-type"
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    id: "eb-flipbox-link-type"
  }, _constants__WEBPACK_IMPORTED_MODULE_4__["LINK_TYPE"].map(function (item) {
    return /*#__PURE__*/React.createElement(Button, {
      isLarge: true,
      isPrimary: linkType === item.value,
      isSecondary: linkType !== item.value,
      onClick: function onClick() {
        return setAttributes({
          linkType: item.value
        });
      }
    }, item.label);
  }))), /*#__PURE__*/React.createElement(TextControl, {
    label: __("Link"),
    value: link,
    placeholder: "https://your-link.com",
    onChange: function onChange(newLink) {
      return setAttributes({
        link: newLink
      });
    }
  }), linkType === "button" && /*#__PURE__*/React.createElement(TextControl, {
    label: __("Button Text"),
    value: buttonText,
    onChange: function onChange(newText) {
      return setAttributes({
        buttonText: newText
      });
    }
  }), linkType === "button" && /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Button Settings")
  }, /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Button Style"),
    value: buttonStyle,
    options: _constants__WEBPACK_IMPORTED_MODULE_4__["BUTTON_STYLES"],
    onChange: function onChange(newStyle) {
      return handleButtonStyle(newStyle);
    }
  }), buttonStyle === "custom" && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Background "),
    color: buttonBackground,
    onChange: function onChange(buttonBackground) {
      return setAttributes({
        buttonBackground: buttonBackground
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Color"),
    color: buttonColor,
    onChange: function onChange(buttonColor) {
      return setAttributes({
        buttonColor: buttonColor
      });
    }
  }), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Button Size"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: buttonSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(buttonSizeUnit) {
      return setAttributes({
        buttonSizeUnit: buttonSizeUnit
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Button Size"),
    value: buttonSize,
    allowReset: true,
    onChange: function onChange(newSize) {
      return setAttributes({
        buttonSize: newSize
      });
    },
    min: 20,
    max: 600
  })), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Button Padding"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: buttonPaddingUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(buttonPaddingUnit) {
      return setAttributes({
        buttonPaddingUnit: buttonPaddingUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: __("Padding"),
    top: buttonPaddingTop,
    right: buttonPaddingRight,
    bottom: buttonPaddingBottom,
    left: buttonPaddingLeft,
    onChange: function onChange(_ref10) {
      var top = _ref10.top,
          right = _ref10.right,
          bottom = _ref10.bottom,
          left = _ref10.left;
      return setAttributes({
        buttonPaddingTop: top,
        buttonPaddingRight: right,
        buttonPaddingBottom: bottom,
        buttonPaddingLeft: left
      });
    }
  })), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Button Border"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Border Color"),
    color: buttonBorderColor,
    onChange: function onChange(buttonBorderColor) {
      return setAttributes({
        buttonBorderColor: buttonBorderColor
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Border Size"),
    value: buttonBorderSize,
    onChange: function onChange(newSize) {
      return setAttributes({
        buttonBorderSize: newSize
      });
    },
    min: 0,
    max: 10
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Border Radius"),
    value: buttonBorderRadius,
    onChange: function onChange(newSize) {
      return setAttributes({
        buttonBorderRadius: newSize
      });
    },
    min: 0,
    max: 50
  }), /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Border Type"),
    value: buttonBorderType,
    options: _constants__WEBPACK_IMPORTED_MODULE_4__["BORDER_STYLES"],
    onChange: function onChange(newType) {
      return setAttributes({
        buttonBorderType: newType
      });
    }
  })), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Button Shadow"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Shadow Color"),
    color: btnShadowColor,
    onChange: function onChange(btnShadowColor) {
      return setAttributes({
        btnShadowColor: btnShadowColor
      });
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Vertical Offset"),
    value: btnShadowVOffset,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        btnShadowVOffset: newValue
      });
    },
    min: 0,
    max: 30
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Horizontal Offset"),
    value: btnShadowHOffset,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        btnShadowHOffset: newValue
      });
    },
    min: 0,
    max: 30
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Blur"),
    value: btnShadowBlur,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        btnShadowBlur: newValue
      });
    },
    min: 0,
    max: 30
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Spread"),
    value: btnShadowSpread,
    allowReset: true,
    onChange: function onChange(newValue) {
      return setAttributes({
        btnShadowSpread: newValue
      });
    },
    min: 0,
    max: 30
  })), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Button Icon"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Display Button Icon"),
    checked: displayButtonIcon,
    onChange: function onChange() {
      return setAttributes({
        displayButtonIcon: !displayButtonIcon
      });
    }
  }), displayButtonIcon && /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Select Icon"),
    id: "eb-flipbox-link-icon",
    help: "Add icon with button (optional)"
  }, /*#__PURE__*/React.createElement(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_3___default.a, {
    icons: _util_faIcons__WEBPACK_IMPORTED_MODULE_0__["default"],
    value: buttonIcon,
    onChange: function onChange(buttonIcon) {
      return setAttributes({
        buttonIcon: buttonIcon
      });
    },
    appendTo: "body",
    closeOnSelect: true
  })), displayButtonIcon && buttonIcon && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Icon Position"),
    id: "eb-flipbox-icon-pos"
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    id: "eb-flipbox-icon-pos"
  }, _constants__WEBPACK_IMPORTED_MODULE_4__["ICON_POSITIONS"].map(function (item) {
    return /*#__PURE__*/React.createElement(Button, {
      style: {
        zIndex: 0
      } // ? Add this style to fix icon list and primary button issue
      ,
      isLarge: true,
      isSecondary: buttonIconPos !== item.value,
      isPrimary: buttonIconPos === item.value,
      onClick: function onClick() {
        return setAttributes({
          buttonIconPos: item.value
        });
      }
    }, item.label);
  })))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flipbox_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flipbox-button */ "./src/flipbox-button.js");
/* harmony import */ var _flipbox_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flipbox-content */ "./src/flipbox-content.js");
/* harmony import */ var _flipbox_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flipbox-wrapper */ "./src/flipbox-wrapper.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Internal dependencies
 */





var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var boxHeight = attributes.boxHeight,
      boxWidth = attributes.boxWidth,
      flipType = attributes.flipType,
      selectedSide = attributes.selectedSide,
      frontBackground = attributes.frontBackground,
      frontIconOrImage = attributes.frontIconOrImage,
      frontImageUrl = attributes.frontImageUrl,
      frontImageSize = attributes.frontImageSize,
      frontIcon = attributes.frontIcon,
      frontTitle = attributes.frontTitle,
      frontContent = attributes.frontContent,
      backBackground = attributes.backBackground,
      backIconOrImage = attributes.backIconOrImage,
      backImageUrl = attributes.backImageUrl,
      backImageSize = attributes.backImageSize,
      backIcon = attributes.backIcon,
      backTitle = attributes.backTitle,
      backContent = attributes.backContent,
      borderStyle = attributes.borderStyle,
      borderColor = attributes.borderColor,
      borderWidth = attributes.borderWidth,
      borderRadius = attributes.borderRadius,
      link = attributes.link,
      linkType = attributes.linkType,
      buttonText = attributes.buttonText,
      buttonIcon = attributes.buttonIcon,
      buttonIconPos = attributes.buttonIconPos,
      frontTitleColor = attributes.frontTitleColor,
      frontContentColor = attributes.frontContentColor,
      backTitleColor = attributes.backTitleColor,
      backContentColor = attributes.backContentColor,
      frontImageRadius = attributes.frontImageRadius,
      backImageRadius = attributes.backImageRadius,
      frontIconSize = attributes.frontIconSize,
      backIconSize = attributes.backIconSize,
      frontIconColor = attributes.frontIconColor,
      backIconColor = attributes.backIconColor,
      boxShadowColor = attributes.boxShadowColor,
      shadowVOffset = attributes.shadowVOffset,
      shadowHOffset = attributes.shadowHOffset,
      shadowSpread = attributes.shadowSpread,
      shadowBlur = attributes.shadowBlur,
      buttonStyle = attributes.buttonStyle,
      buttonClasses = attributes.buttonClasses,
      buttonBackground = attributes.buttonBackground,
      buttonColor = attributes.buttonColor,
      buttonSize = attributes.buttonSize,
      buttonBorderSize = attributes.buttonBorderSize,
      buttonBorderColor = attributes.buttonBorderColor,
      buttonBorderType = attributes.buttonBorderType,
      buttonBorderRadius = attributes.buttonBorderRadius,
      buttonPaddingTop = attributes.buttonPaddingTop,
      buttonPaddingRight = attributes.buttonPaddingRight,
      buttonPaddingBottom = attributes.buttonPaddingBottom,
      buttonPaddingLeft = attributes.buttonPaddingLeft,
      btnShadowColor = attributes.btnShadowColor,
      btnShadowVOffset = attributes.btnShadowVOffset,
      btnShadowHOffset = attributes.btnShadowHOffset,
      btnShadowBlur = attributes.btnShadowBlur,
      btnShadowSpread = attributes.btnShadowSpread,
      frontIconBackground = attributes.frontIconBackground,
      frontIconPadding = attributes.frontIconPadding,
      frontIconBorderRadius = attributes.frontIconBorderRadius,
      frontIconTopMargin = attributes.frontIconTopMargin,
      frontIconBorderSize = attributes.frontIconBorderSize,
      frontIconBorderType = attributes.frontIconBorderType,
      frontIconBorderColor = attributes.frontIconBorderColor,
      backIconBackground = attributes.backIconBackground,
      backIconPadding = attributes.backIconPadding,
      backIconBorderRadius = attributes.backIconBorderRadius,
      backIconTopMargin = attributes.backIconTopMargin,
      backIconBorderSize = attributes.backIconBorderSize,
      backIconBorderType = attributes.backIconBorderType,
      backIconBorderColor = attributes.backIconBorderColor,
      frontBackgroundType = attributes.frontBackgroundType,
      frontBackgroundGradient = attributes.frontBackgroundGradient,
      backBackgroundType = attributes.backBackgroundType,
      backBackgroundGradient = attributes.backBackgroundGradient,
      transitionSpeed = attributes.transitionSpeed,
      frontBackgroundImageURL = attributes.frontBackgroundImageURL,
      frontBackgroundPosition = attributes.frontBackgroundPosition,
      frontBackgroundPosX = attributes.frontBackgroundPosX,
      frontBackgroundPosXUnit = attributes.frontBackgroundPosXUnit,
      frontBackgroundPosY = attributes.frontBackgroundPosY,
      frontBackgroundPosYUnit = attributes.frontBackgroundPosYUnit,
      frontBackgroundSize = attributes.frontBackgroundSize,
      frontBackgroundWidth = attributes.frontBackgroundWidth,
      frontBackgroundWidthUnit = attributes.frontBackgroundWidthUnit,
      frontBackgroundRepeat = attributes.frontBackgroundRepeat,
      backBackgroundImageURL = attributes.backBackgroundImageURL,
      backBackgroundPosition = attributes.backBackgroundPosition,
      backBackgroundPosX = attributes.backBackgroundPosX,
      backBackgroundPosXUnit = attributes.backBackgroundPosXUnit,
      backBackgroundPosY = attributes.backBackgroundPosY,
      backBackgroundPosYUnit = attributes.backBackgroundPosYUnit,
      backBackgroundSize = attributes.backBackgroundSize,
      backBackgroundWidth = attributes.backBackgroundWidth,
      backBackgroundWidthUnit = attributes.backBackgroundWidthUnit,
      backBackgroundRepeat = attributes.backBackgroundRepeat,
      displayButtonIcon = attributes.displayButtonIcon,
      titleFontSize = attributes.titleFontSize,
      titleFontSizeUnit = attributes.titleFontSizeUnit,
      contentFontSize = attributes.contentFontSize,
      contentFontSizeUnit = attributes.contentFontSizeUnit,
      containerMarginTop = attributes.containerMarginTop,
      containerMarginRight = attributes.containerMarginRight,
      containerMarginBottom = attributes.containerMarginBottom,
      containerMarginLeft = attributes.containerMarginLeft,
      containerPaddingTop = attributes.containerPaddingTop,
      containerPaddingRight = attributes.containerPaddingRight,
      containerPaddingBottom = attributes.containerPaddingBottom,
      containerPaddingLeft = attributes.containerPaddingLeft,
      align = attributes.align,
      marginUnit = attributes.marginUnit,
      paddingUnit = attributes.paddingUnit,
      radiusUnit = attributes.radiusUnit,
      buttonPaddingUnit = attributes.buttonPaddingUnit,
      buttonSizeUnit = attributes.buttonSizeUnit,
      heightUnit = attributes.heightUnit,
      widthUnit = attributes.widthUnit,
      titleFontFamily = attributes.titleFontFamily,
      titleFontWeight = attributes.titleFontWeight,
      titleTextTransform = attributes.titleTextTransform,
      titleTextDecoration = attributes.titleTextDecoration,
      titleLetterSpacing = attributes.titleLetterSpacing,
      titleLetterSpacingUnit = attributes.titleLetterSpacingUnit,
      titleLineHeight = attributes.titleLineHeight,
      titleLineHeightUnit = attributes.titleLineHeightUnit,
      contentFontFamily = attributes.contentFontFamily,
      contentFontWeight = attributes.contentFontWeight,
      contentTextTransform = attributes.contentTextTransform,
      contentTextDecoration = attributes.contentTextDecoration,
      contentLetterSpacing = attributes.contentLetterSpacing,
      contentLetterSpacingUnit = attributes.contentLetterSpacingUnit,
      contentLineHeight = attributes.contentLineHeight,
      contentLineHeightUnit = attributes.contentLineHeightUnit; // Default colors

  var defaultFrontBackground = "#7967ff";
  var deafultFrontTitleColor = "#ffffff";
  var defaultFrontContentColor = "#ffffff";
  var defautlBackContentColor = "#ffffff";
  var defaultBackBackground = "#3074ff";
  var defaultBackTitleColor = "#ffffff";
  var defaultBorderColor = "#000000";
  var defaultBoxShadowColor = "#abb8c3";
  var defaultButtonBorderColor = "#eeeeee";
  var deafultBtnShadowColor = "#abb8c3";
  var defaultFrontIconBackground = "transparent";
  var defaultFrontIconBorderColor = "#000000";
  var defaultBackIconBackground = "transparent";
  var defaultBackIconBorderColor = "#000000";
  var flipContainerStyle = {
    height: "".concat(boxHeight || 310).concat(heightUnit),
    maxWidth: "".concat(boxWidth || 600).concat(widthUnit),
    width: "100%",
    margin: "".concat(containerMarginTop).concat(marginUnit, " ").concat(containerMarginRight).concat(marginUnit, " ").concat(containerMarginBottom).concat(marginUnit, " ").concat(containerMarginLeft).concat(marginUnit),
    padding: "".concat(containerPaddingTop).concat(paddingUnit, " ").concat(containerPaddingRight).concat(paddingUnit, " ").concat(containerPaddingBottom).concat(paddingUnit, " ").concat(containerPaddingLeft).concat(paddingUnit)
  };
  var flipperStyle = {
    transition: "".concat(transitionSpeed ? transitionSpeed / 10 : 0.6, "s")
  };
  var frontStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "".concat(boxHeight || 310).concat(heightUnit),
    maxWidth: "".concat(boxWidth || 600).concat(widthUnit),
    height: "auto",
    width: "100%",
    backgroundImage: frontBackgroundType === "gradient" && frontBackgroundGradient || frontBackgroundType === "image" && frontBackgroundImageURL && "url(".concat(frontBackgroundImageURL, ")") || "none",
    backgroundSize: frontBackgroundSize === "custom" ? "".concat(frontBackgroundWidth).concat(frontBackgroundWidthUnit) : frontBackgroundSize,
    backgroundPosition: frontBackgroundPosition === "custom" ? "".concat(frontBackgroundPosX).concat(frontBackgroundPosXUnit, " ").concat(frontBackgroundPosY).concat(frontBackgroundPosYUnit) : frontBackgroundPosition,
    backgroundRepeat: frontBackgroundRepeat,
    backgroundColor: frontBackgroundType === "fill" && frontBackground ? frontBackground : defaultFrontBackground,
    borderStyle: borderStyle,
    borderColor: borderColor || defaultBorderColor,
    borderWidth: "".concat(borderWidth || 0, "px"),
    borderRadius: "".concat(borderRadius || 0).concat(radiusUnit),
    boxShadow: "".concat(shadowVOffset || 0, "px ").concat(shadowHOffset || 0, "px ").concat(shadowBlur || 0, "px ").concat(shadowSpread || 0, "px ").concat(boxShadowColor || defaultBoxShadowColor)
  };
  var frontIconStyle = {
    fontSize: "".concat(frontIconSize || _constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_ICON_SIZE"], "px"),
    color: frontIconColor || "#ffffff",
    borderRadius: "".concat(frontIconBorderRadius || 0, "px"),
    background: frontIconBackground || defaultFrontIconBackground,
    padding: "".concat(frontIconPadding || 0, "px"),
    marginTop: "".concat(frontIconTopMargin || 0, "px"),
    borderStyle: frontIconBorderType,
    borderColor: frontIconBorderColor || defaultFrontIconBorderColor,
    borderWidth: "".concat(frontIconBorderSize || 0, "px"),
    textAlign: align,
    width: "100%"
  };
  var frontImageStyle = {
    wrapper: {
      display: frontIconOrImage === "image" && frontImageUrl ? "block" : "none",
      alignSelf: align === "left" && "flex-start" || align === "right" && "flex-end" || "center"
    },
    image: {
      height: "".concat(frontImageSize || 100, "px"),
      width: "".concat(frontImageSize || 100, "px"),
      borderRadius: "".concat(frontImageRadius || 0, "%")
    }
  };
  var frontTitleStyle = {
    fontFamily: titleFontFamily,
    fontSize: titleFontSize ? "".concat(titleFontSize).concat(titleFontSizeUnit) : undefined,
    fontWeight: titleFontWeight,
    textDecoration: titleTextDecoration,
    textTransform: titleTextTransform,
    lineHeight: titleLineHeight ? "".concat(titleLineHeight).concat(titleLineHeightUnit) : undefined,
    letterSpacing: titleLetterSpacing ? "".concat(titleLetterSpacing).concat(titleLetterSpacingUnit) : undefined,
    color: frontTitleColor || deafultFrontTitleColor,
    width: "100%",
    textAlign: align
  };
  var frontContentStyle = {
    fontFamily: contentFontFamily,
    fontSize: contentFontSize ? "".concat(contentFontSize).concat(contentFontSizeUnit) : undefined,
    fontWeight: contentFontWeight,
    textDecoration: contentTextDecoration,
    textTransform: contentTextTransform,
    lineHeight: contentLineHeight ? "".concat(contentLineHeight).concat(contentLineHeightUnit) : undefined,
    letterSpacing: contentLetterSpacing ? "".concat(contentLetterSpacing).concat(contentLetterSpacingUnit) : undefined,
    color: frontContentColor || defaultFrontContentColor,
    width: "100%",
    textAlign: align
  };
  var backStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "".concat(boxHeight || 310).concat(heightUnit),
    maxWidth: "".concat(boxWidth || 600).concat(widthUnit),
    height: "auto",
    width: "100%",
    backgroundImage: backBackgroundType === "gradient" && backBackgroundGradient || backBackgroundType === "image" && backBackgroundImageURL && "url(".concat(backBackgroundImageURL, ")") || "none",
    backgroundSize: backBackgroundSize === "custom" ? "".concat(backBackgroundWidth).concat(backBackgroundWidthUnit) : backBackgroundSize,
    backgroundPosition: backBackgroundPosition === "custom" ? "".concat(backBackgroundPosX).concat(backBackgroundPosXUnit, " ").concat(backBackgroundPosY).concat(backBackgroundPosYUnit) : backBackgroundPosition,
    backgroundRepeat: backBackgroundRepeat,
    backgroundColor: backBackgroundType === "fill" && backBackground ? backBackground : defaultBackBackground,
    borderStyle: borderStyle,
    bordercolor: borderColor || defaultBorderColor,
    borderWidth: "".concat(borderWidth || 0, "px"),
    borderRadius: "".concat(borderRadius || 0).concat(radiusUnit),
    transform: flipType === "flip-up" && "rotateX(180deg)" || flipType === "flip-bottom" && "rotateX(-180deg)",
    boxShadow: "".concat(shadowVOffset || 0, "px ").concat(shadowHOffset || 0, "px ").concat(shadowBlur || 0, "px ").concat(shadowSpread || 0, "px ").concat(boxShadowColor || defaultBoxShadowColor),
    cursor: linkType === "box" && link ? "pointer" : "default"
  };
  var backImageStyle = {
    wrapper: {
      display: backIconOrImage === "image" && backImageUrl ? "block" : "none",
      alignSelf: align === "left" && "flex-start" || align === "right" && "flex-end" || "center"
    },
    image: {
      height: "".concat(backImageSize || 100, "px"),
      width: "".concat(backImageSize || 100, "px"),
      borderRadius: "".concat(backImageRadius || 0, "%")
    }
  };
  var backIconStyle = {
    fontSize: "".concat(backIconSize || _constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_ICON_SIZE"], "px"),
    color: backIconColor || "#ffffff",
    borderRadius: "".concat(backIconBorderRadius || 0, "%"),
    background: backIconBackground || defaultBackIconBackground,
    padding: "".concat(backIconPadding || 0, "px"),
    marginTop: "".concat(backIconTopMargin || 0, "px"),
    borderStyle: backIconBorderType,
    borderColor: backIconBorderColor || defaultBackIconBorderColor,
    borderWidth: "".concat(backIconBorderSize || 0, "px"),
    display: backIconOrImage === "icon" ? "block" : "none",
    width: "100%",
    textAlign: align
  };
  var backTitleStyle = {
    fontFamily: titleFontFamily,
    fontSize: titleFontSize ? "".concat(titleFontSize).concat(titleFontSizeUnit) : undefined,
    fontWeight: titleFontWeight,
    textDecoration: titleTextDecoration,
    textTransform: titleTextTransform,
    lineHeight: titleLineHeight ? "".concat(titleLineHeight).concat(titleLineHeightUnit) : undefined,
    letterSpacing: titleLetterSpacing ? "".concat(titleLetterSpacing).concat(titleLetterSpacingUnit) : undefined,
    color: backTitleColor || defaultBackTitleColor,
    cursor: linkType === "title" && link ? "pointer" : "default",
    width: "100%",
    textAlign: align
  };
  var backContentStyle = {
    fontFamily: contentFontFamily,
    fontSize: contentFontSize ? "".concat(contentFontSize).concat(contentFontSizeUnit) : undefined,
    fontWeight: contentFontWeight,
    textDecoration: contentTextDecoration,
    textTransform: contentTextTransform,
    lineHeight: contentLineHeight ? "".concat(contentLineHeight).concat(contentLineHeightUnit) : undefined,
    letterSpacing: contentLetterSpacing ? "".concat(contentLetterSpacing).concat(contentLetterSpacingUnit) : undefined,
    color: backContentColor || defautlBackContentColor,
    width: "100%",
    textAlign: align
  };
  var backButtonStyle = buttonStyle === "custom" ? {
    background: buttonBackground,
    color: buttonColor,
    width: "".concat(buttonSize || 18).concat(buttonSizeUnit),
    border: "".concat(buttonBorderSize || 0, "px ").concat(buttonBorderType, " ").concat(buttonBorderColor || defaultButtonBorderColor),
    borderRadius: "".concat(buttonBorderRadius || 0, "px"),
    padding: "".concat(buttonPaddingTop).concat(buttonPaddingUnit, " ").concat(buttonPaddingRight).concat(buttonPaddingUnit, " ").concat(buttonPaddingBottom).concat(buttonPaddingUnit, " ").concat(buttonPaddingLeft).concat(buttonPaddingUnit),
    boxShadow: "".concat(btnShadowVOffset || 0, "px ").concat(btnShadowHOffset || 0, "px ").concat(btnShadowBlur || 0, "px ").concat(btnShadowSpread || 0, "px ").concat(btnShadowColor || deafultBtnShadowColor),
    textDecoration: "none"
  } : {};
  return /*#__PURE__*/React.createElement("div", {
    className: "flip-container",
    style: flipContainerStyle,
    "data-flip-type": flipType
  }, /*#__PURE__*/React.createElement("div", {
    className: "flipper ".concat(flipType),
    style: flipperStyle
  }, /*#__PURE__*/React.createElement(_flipbox_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "front",
    style: frontStyle
  }, /*#__PURE__*/React.createElement(_flipbox_content__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedSide: selectedSide,
    iconOrImage: frontIconOrImage,
    imageUrl: frontImageUrl,
    imageStyle: frontImageStyle,
    icon: frontIcon,
    iconStyle: frontIconStyle,
    linkType: linkType,
    title: frontTitle,
    titleStyle: frontTitleStyle,
    content: frontContent,
    contentStyle: frontContentStyle
  })), /*#__PURE__*/React.createElement("div", {
    className: "back",
    style: backStyle,
    onClick: linkType === "box" && link ? "window.location='".concat(link, "'") : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "flipbox-items-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "back-image-container",
    style: backImageStyle.wrapper
  }, /*#__PURE__*/React.createElement("img", {
    src: backImageUrl,
    style: backImageStyle.image
  })), /*#__PURE__*/React.createElement("div", {
    className: "flipbox-icon-wrapper-back",
    style: backIconStyle,
    "data-icon": backIcon
  }, /*#__PURE__*/React.createElement("span", {
    className: "".concat(backIcon, " flipbox-icon")
  })), /*#__PURE__*/React.createElement("h3", {
    className: "back-title",
    style: backTitleStyle,
    onClick: linkType === "title" && link ? "window.location='".concat(link, "'") : undefined
  }, backTitle), /*#__PURE__*/React.createElement("p", {
    className: "back-content",
    style: backContentStyle
  }, backContent)), /*#__PURE__*/React.createElement(_flipbox_button__WEBPACK_IMPORTED_MODULE_0__["FlipboxButton"], {
    classNames: buttonClasses,
    style: _objectSpread(_objectSpread({}, backButtonStyle), {}, {
      display: linkType === "button" ? "block" : "none"
    }),
    link: link,
    buttonText: buttonText,
    buttonIcon: buttonIcon,
    displayButtonIcon: displayButtonIcon,
    buttonIconPos: buttonIconPos
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./util/color-control/index.js":
/*!*************************************!*\
  !*** ./util/color-control/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./util/color-control/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var ColorControl = function ColorControl(_ref) {
  var label = _ref.label,
      color = _ref.color,
      onChange = _ref.onChange;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(color),
      _useState2 = _slicedToArray(_useState, 2),
      bgColor = _useState2[0],
      setBgColor = _useState2[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setBgColor(color);
  }, [color]);

  var _onChangeComplete = function onChangeComplete(_ref2) {
    var rgb = _ref2.rgb,
        hex = _ref2.hex;
    var color = rgb ? "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")") : hex;
    onChange(color);
  };

  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
    label: label || "",
    className: "eb-color-base"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    renderToggle: function renderToggle(_ref3) {
      var isOpen = _ref3.isOpen,
          onToggle = _ref3.onToggle;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
        text: color || "default"
      }, /*#__PURE__*/React.createElement("div", {
        className: "eb-color-ball"
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          height: 32,
          width: 32,
          borderRadius: "50%",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
          backgroundColor: bgColor
        },
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": color || "default"
      })));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ColorPicker"], {
        color: color,
        onChangeComplete: function onChangeComplete(color) {
          return _onChangeComplete(color);
        }
      });
    }
  }), bgColor && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    isSmall: true,
    className: "eb-color-undo",
    icon: "image-rotate",
    onClick: function onClick() {
      return onChange(undefined);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorControl);

/***/ }),

/***/ "./util/dimensions-control/index.js":
/*!******************************************!*\
  !*** ./util/dimensions-control/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./util/dimensions-control/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var DimensionsControl = /*#__PURE__*/function (_Component) {
  _inherits(DimensionsControl, _Component);

  var _super = _createSuper(DimensionsControl);

  function DimensionsControl() {
    var _this;

    _classCallCheck(this, DimensionsControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      top: _this.props.top || 0,
      right: _this.props.right || 0,
      bottom: _this.props.bottom || 0,
      left: _this.props.left || 0,
      isLinked: false
    });

    _defineProperty(_assertThisInitialized(_this), "onButtonClick", function () {
      return _this.setState({
        isLinked: !_this.state.isLinked
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onInputChange", function (event) {
      var _this$state = _this.state,
          top = _this$state.top,
          right = _this$state.right,
          bottom = _this$state.bottom,
          left = _this$state.left,
          isLinked = _this$state.isLinked;
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      if (isLinked) {
        top = right = bottom = left = parseInt(value) || 0;

        _this.setState({
          top: top,
          right: right,
          bottom: bottom,
          left: left
        }, function () {
          var _this$state2 = _this.state,
              top = _this$state2.top,
              right = _this$state2.right,
              bottom = _this$state2.bottom,
              left = _this$state2.left;

          _this.props.onChange({
            top: top,
            right: right,
            bottom: bottom,
            left: left
          });
        });
      } else {
        _this.setState(_defineProperty({}, name, parseInt(value) || 0), function () {
          var _this$state3 = _this.state,
              top = _this$state3.top,
              right = _this$state3.right,
              bottom = _this$state3.bottom,
              left = _this$state3.left;

          _this.props.onChange({
            top: top,
            right: right,
            bottom: bottom,
            left: left
          });
        });
      }
    });

    return _this;
  }

  _createClass(DimensionsControl, [{
    key: "render",
    value: function render() {
      var _this$state4 = this.state,
          top = _this$state4.top,
          right = _this$state4.right,
          bottom = _this$state4.bottom,
          left = _this$state4.left,
          isLinked = _this$state4.isLinked;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dimention-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dimention-label"
      }, this.props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "top",
        value: top || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Top")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "right",
        value: right || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Right")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "bottom",
        value: bottom || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Bottom")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "left",
        value: left || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Left")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "linked-btn components-button is-button dashicons dashicons-".concat(isLinked ? "admin-links is-primary" : "editor-unlink is-default"),
        onClick: this.onButtonClick
      }))));
    }
  }]);

  return DimensionsControl;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

DimensionsControl.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  right: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DimensionsControl);

/***/ }),

/***/ "./util/faIcons.js":
/*!*************************!*\
  !*** ./util/faIcons.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var faIcons = ["fab fa-500px", "fab fa-accessible-icon", "fab fa-accusoft", "fas fa-address-book", "far fa-address-book", "fas fa-address-card", "far fa-address-card", "fas fa-adjust", "fab fa-adn", "fab fa-adversal", "fab fa-affiliatetheme", "fab fa-algolia", "fas fa-align-center", "fas fa-align-justify", "fas fa-align-left", "fas fa-align-right", "fab fa-amazon", "fas fa-ambulance", "fas fa-american-sign-language-interpreting", "fab fa-amilia", "fas fa-anchor", "fab fa-android", "fab fa-angellist", "fas fa-angle-double-down", "fas fa-angle-double-left", "fas fa-angle-double-right", "fas fa-angle-double-up", "fas fa-angle-down", "fas fa-angle-left", "fas fa-angle-right", "fas fa-angle-up", "fab fa-angrycreative", "fab fa-angular", "fab fa-app-store", "fab fa-app-store-ios", "fab fa-apper", "fab fa-apple", "fab fa-apple-pay", "fas fa-archive", "fas fa-arrow-alt-circle-down", "far fa-arrow-alt-circle-down", "fas fa-arrow-alt-circle-left", "far fa-arrow-alt-circle-left", "fas fa-arrow-alt-circle-right", "far fa-arrow-alt-circle-right", "fas fa-arrow-alt-circle-up", "far fa-arrow-alt-circle-up", "fas fa-arrow-circle-down", "fas fa-arrow-circle-left", "fas fa-arrow-circle-right", "fas fa-arrow-circle-up", "fas fa-arrow-down", "fas fa-arrow-left", "fas fa-arrow-right", "fas fa-arrow-up", "fas fa-arrows-alt", "fas fa-arrows-alt-h", "fas fa-arrows-alt-v", "fas fa-assistive-listening-systems", "fas fa-asterisk", "fab fa-asymmetrik", "fas fa-at", "fab fa-audible", "fas fa-audio-description", "fab fa-autoprefixer", "fab fa-avianex", "fab fa-aviato", "fab fa-aws", "fas fa-backward", "fas fa-balance-scale", "fas fa-ban", "fab fa-bandcamp", "fas fa-barcode", "fas fa-bars", "fas fa-bath", "fas fa-battery-empty", "fas fa-battery-full", "fas fa-battery-half", "fas fa-battery-quarter", "fas fa-battery-three-quarters", "fas fa-bed", "fas fa-beer", "fab fa-behance", "fab fa-behance-square", "fas fa-bell", "far fa-bell", "fas fa-bell-slash", "far fa-bell-slash", "fas fa-bicycle", "fab fa-bimobject", "fas fa-binoculars", "fas fa-birthday-cake", "fab fa-bitbucket", "fab fa-bitcoin", "fab fa-bity", "fab fa-black-tie", "fab fa-blackberry", "fas fa-blind", "fab fa-blogger", "fab fa-blogger-b", "fab fa-bluetooth", "fab fa-bluetooth-b", "fas fa-bold", "fas fa-bolt", "fas fa-bomb", "fas fa-book", "fas fa-bookmark", "far fa-bookmark", "fas fa-braille", "fas fa-briefcase", "fab fa-btc", "fas fa-bug", "fas fa-building", "far fa-building", "fas fa-bullhorn", "fas fa-bullseye", "fab fa-buromobelexperte", "fas fa-bus", "fab fa-buysellads", "fas fa-calculator", "fas fa-calendar", "far fa-calendar", "fas fa-calendar-alt", "far fa-calendar-alt", "fas fa-calendar-check", "far fa-calendar-check", "fas fa-calendar-minus", "far fa-calendar-minus", "fas fa-calendar-plus", "far fa-calendar-plus", "fas fa-calendar-times", "far fa-calendar-times", "fas fa-camera", "fas fa-camera-retro", "fas fa-car", "fas fa-caret-down", "fas fa-caret-left", "fas fa-caret-right", "fas fa-caret-square-down", "far fa-caret-square-down", "fas fa-caret-square-left", "far fa-caret-square-left", "fas fa-caret-square-right", "far fa-caret-square-right", "fas fa-caret-square-up", "far fa-caret-square-up", "fas fa-caret-up", "fas fa-cart-arrow-down", "fas fa-cart-plus", "fab fa-cc-amex", "fab fa-cc-apple-pay", "fab fa-cc-diners-club", "fab fa-cc-discover", "fab fa-cc-jcb", "fab fa-cc-mastercard", "fab fa-cc-paypal", "fab fa-cc-stripe", "fab fa-cc-visa", "fab fa-centercode", "fas fa-certificate", "fas fa-chart-area", "fas fa-chart-bar", "far fa-chart-bar", "fas fa-chart-line", "fas fa-chart-pie", "fas fa-check", "fas fa-check-circle", "far fa-check-circle", "fas fa-check-square", "far fa-check-square", "fas fa-chevron-circle-down", "fas fa-chevron-circle-left", "fas fa-chevron-circle-right", "fas fa-chevron-circle-up", "fas fa-chevron-down", "fas fa-chevron-left", "fas fa-chevron-right", "fas fa-chevron-up", "fas fa-child", "fab fa-chrome", "fas fa-circle", "far fa-circle", "fas fa-circle-notch", "fas fa-clipboard", "far fa-clipboard", "fas fa-clock", "far fa-clock", "fas fa-clone", "far fa-clone", "fas fa-closed-captioning", "far fa-closed-captioning", "fas fa-cloud", "fas fa-cloud-download-alt", "fas fa-cloud-upload-alt", "fab fa-cloudscale", "fab fa-cloudsmith", "fab fa-cloudversify", "fas fa-code", "fas fa-code-branch", "fab fa-codepen", "fab fa-codiepie", "fas fa-coffee", "fas fa-cog", "fas fa-cogs", "fas fa-columns", "fas fa-comment", "far fa-comment", "fas fa-comment-alt", "far fa-comment-alt", "fas fa-comments", "far fa-comments", "fas fa-compass", "far fa-compass", "fas fa-compress", "fab fa-connectdevelop", "fab fa-contao", "fas fa-copy", "far fa-copy", "fas fa-copyright", "far fa-copyright", "fab fa-cpanel", "fab fa-creative-commons", "fas fa-credit-card", "far fa-credit-card", "fas fa-crop", "fas fa-crosshairs", "fab fa-css3", "fab fa-css3-alt", "fas fa-cube", "fas fa-cubes", "fas fa-cut", "fab fa-cuttlefish", "fab fa-d-and-d", "fab fa-dashcube", "fas fa-database", "fas fa-deaf", "fab fa-delicious", "fab fa-deploydog", "fab fa-deskpro", "fas fa-desktop", "fab fa-deviantart", "fab fa-digg", "fab fa-digital-ocean", "fab fa-discord", "fab fa-discourse", "fab fa-dochub", "fab fa-docker", "fas fa-dollar-sign", "fas fa-dot-circle", "far fa-dot-circle", "fas fa-download", "fab fa-draft2digital", "fab fa-dribbble", "fab fa-dribbble-square", "fab fa-dropbox", "fab fa-drupal", "fab fa-dyalog", "fab fa-earlybirds", "fab fa-edge", "fas fa-edit", "far fa-edit", "fas fa-eject", "fas fa-ellipsis-h", "fas fa-ellipsis-v", "fab fa-ember", "fab fa-empire", "fas fa-envelope", "far fa-envelope", "fas fa-envelope-open", "far fa-envelope-open", "fas fa-envelope-square", "fab fa-envira", "fas fa-eraser", "fab fa-erlang", "fab fa-etsy", "fas fa-euro-sign", "fas fa-exchange-alt", "fas fa-exclamation", "fas fa-exclamation-circle", "fas fa-exclamation-triangle", "fas fa-expand", "fas fa-expand-arrows-alt", "fab fa-expeditedssl", "fas fa-external-link-alt", "fas fa-external-link-square-alt", "fas fa-eye", "fas fa-eye-dropper", "fas fa-eye-slash", "far fa-eye-slash", "fab fa-facebook", "fab fa-facebook-f", "fab fa-facebook-messenger", "fab fa-facebook-square", "fas fa-fast-backward", "fas fa-fast-forward", "fas fa-fax", "fas fa-female", "fas fa-fighter-jet", "fas fa-file", "far fa-file", "fas fa-file-alt", "far fa-file-alt", "fas fa-file-archive", "far fa-file-archive", "fas fa-file-audio", "far fa-file-audio", "fas fa-file-code", "far fa-file-code", "fas fa-file-excel", "far fa-file-excel", "fas fa-file-image", "far fa-file-image", "fas fa-file-pdf", "far fa-file-pdf", "fas fa-file-powerpoint", "far fa-file-powerpoint", "fas fa-file-video", "far fa-file-video", "fas fa-file-word", "far fa-file-word", "fas fa-film", "fas fa-filter", "fas fa-fire", "fas fa-fire-extinguisher", "fab fa-firefox", "fab fa-first-order", "fab fa-firstdraft", "fas fa-flag", "far fa-flag", "fas fa-flag-checkered", "fas fa-flask", "fab fa-flickr", "fab fa-fly", "fas fa-folder", "far fa-folder", "fas fa-folder-open", "far fa-folder-open", "fas fa-font", "fab fa-font-awesome", "fab fa-font-awesome-alt", "fab fa-font-awesome-flag", "fab fa-fonticons", "fab fa-fonticons-fi", "fab fa-fort-awesome", "fab fa-fort-awesome-alt", "fab fa-forumbee", "fas fa-forward", "fab fa-foursquare", "fab fa-free-code-camp", "fab fa-freebsd", "fas fa-frown", "far fa-frown", "fas fa-futbol", "far fa-futbol", "fas fa-gamepad", "fas fa-gavel", "fas fa-gem", "far fa-gem", "fas fa-genderless", "fab fa-get-pocket", "fab fa-gg", "fab fa-gg-circle", "fas fa-gift", "fab fa-git", "fab fa-git-square", "fab fa-github", "fab fa-github-alt", "fab fa-github-square", "fab fa-gitkraken", "fab fa-gitlab", "fab fa-gitter", "fas fa-glass-martini", "fab fa-glide", "fab fa-glide-g", "fas fa-globe", "fab fa-gofore", "fab fa-goodreads", "fab fa-goodreads-g", "fab fa-google", "fab fa-google-drive", "fab fa-google-play", "fab fa-google-plus", "fab fa-google-plus-g", "fab fa-google-plus-square", "fab fa-google-wallet", "fas fa-graduation-cap", "fab fa-gratipay", "fab fa-grav", "fab fa-gripfire", "fab fa-grunt", "fab fa-gulp", "fas fa-h-square", "fab fa-hacker-news", "fab fa-hacker-news-square", "fas fa-hand-lizard", "far fa-hand-lizard", "fas fa-hand-paper", "far fa-hand-paper", "fas fa-hand-peace", "far fa-hand-peace", "fas fa-hand-point-down", "far fa-hand-point-down", "fas fa-hand-point-left", "far fa-hand-point-left", "fas fa-hand-point-right", "far fa-hand-point-right", "fas fa-hand-point-up", "far fa-hand-point-up", "fas fa-hand-pointer", "far fa-hand-pointer", "fas fa-hand-rock", "far fa-hand-rock", "fas fa-hand-scissors", "far fa-hand-scissors", "fas fa-hand-spock", "far fa-hand-spock", "fas fa-handshake", "far fa-handshake", "fas fa-hashtag", "fas fa-hdd", "far fa-hdd", "fas fa-heading", "fas fa-headphones", "fas fa-heart", "far fa-heart", "fas fa-heartbeat", "fab fa-hire-a-helper", "fas fa-history", "fas fa-home", "fab fa-hooli", "fas fa-hospital", "far fa-hospital", "fab fa-hotjar", "fas fa-hourglass", "far fa-hourglass", "fas fa-hourglass-end", "fas fa-hourglass-half", "fas fa-hourglass-start", "fab fa-houzz", "fab fa-html5", "fab fa-hubspot", "fas fa-i-cursor", "fas fa-id-badge", "far fa-id-badge", "fas fa-id-card", "far fa-id-card", "fas fa-image", "far fa-image", "fas fa-images", "far fa-images", "fab fa-imdb", "fas fa-inbox", "fas fa-indent", "fas fa-industry", "fas fa-info", "fas fa-info-circle", "fab fa-instagram", "fab fa-internet-explorer", "fab fa-ioxhost", "fas fa-italic", "fab fa-itunes", "fab fa-itunes-note", "fab fa-jenkins", "fab fa-joget", "fab fa-joomla", "fab fa-js", "fab fa-js-square", "fab fa-jsfiddle", "fas fa-key", "fas fa-keyboard", "far fa-keyboard", "fab fa-keycdn", "fab fa-kickstarter", "fab fa-kickstarter-k", "fas fa-language", "fas fa-laptop", "fab fa-laravel", "fab fa-lastfm", "fab fa-lastfm-square", "fas fa-leaf", "fab fa-leanpub", "fas fa-lemon", "far fa-lemon", "fab fa-less", "fas fa-level-down-alt", "fas fa-level-up-alt", "fas fa-life-ring", "far fa-life-ring", "fas fa-lightbulb", "far fa-lightbulb", "fab fa-line", "fas fa-link", "fab fa-linkedin", "fab fa-linkedin-in", "fab fa-linode", "fab fa-linux", "fas fa-lira-sign", "fas fa-list", "fas fa-list-alt", "far fa-list-alt", "fas fa-list-ol", "fas fa-list-ul", "fas fa-location-arrow", "fas fa-lock", "fas fa-lock-open", "fas fa-long-arrow-alt-down", "fas fa-long-arrow-alt-left", "fas fa-long-arrow-alt-right", "fas fa-long-arrow-alt-up", "fas fa-low-vision", "fab fa-lyft", "fab fa-magento", "fas fa-magic", "fas fa-magnet", "fas fa-male", "fas fa-map", "far fa-map", "fas fa-map-marker", "fas fa-map-marker-alt", "fas fa-map-pin", "fas fa-map-signs", "fas fa-mars", "fas fa-mars-double", "fas fa-mars-stroke", "fas fa-mars-stroke-h", "fas fa-mars-stroke-v", "fab fa-maxcdn", "fab fa-medapps", "fab fa-medium", "fab fa-medium-m", "fas fa-medkit", "fab fa-medrt", "fab fa-meetup", "fas fa-meh", "far fa-meh", "fas fa-mercury", "fas fa-microchip", "fas fa-microphone", "fas fa-microphone-slash", "fab fa-microsoft", "fas fa-minus", "fas fa-minus-circle", "fas fa-minus-square", "far fa-minus-square", "fab fa-mix", "fab fa-mixcloud", "fab fa-mizuni", "fas fa-mobile", "fas fa-mobile-alt", "fab fa-modx", "fab fa-monero", "fas fa-money-bill-alt", "far fa-money-bill-alt", "fas fa-moon", "far fa-moon", "fas fa-motorcycle", "fas fa-mouse-pointer", "fas fa-music", "fab fa-napster", "fas fa-neuter", "fas fa-newspaper", "far fa-newspaper", "fab fa-nintendo-switch", "fab fa-node", "fab fa-node-js", "fab fa-npm", "fab fa-ns8", "fab fa-nutritionix", "fas fa-object-group", "far fa-object-group", "fas fa-object-ungroup", "far fa-object-ungroup", "fab fa-odnoklassniki", "fab fa-odnoklassniki-square", "fab fa-opencart", "fab fa-openid", "fab fa-opera", "fab fa-optin-monster", "fab fa-osi", "fas fa-outdent", "fab fa-page4", "fab fa-pagelines", "fas fa-paint-brush", "fab fa-palfed", "fas fa-paper-plane", "far fa-paper-plane", "fas fa-paperclip", "fas fa-paragraph", "fas fa-paste", "fab fa-patreon", "fas fa-pause", "fas fa-pause-circle", "far fa-pause-circle", "fas fa-paw", "fab fa-paypal", "fas fa-pen-square", "fas fa-pencil-alt", "fas fa-percent", "fab fa-periscope", "fab fa-phabricator", "fab fa-phoenix-framework", "fas fa-phone", "fas fa-phone-square", "fas fa-phone-volume", "fab fa-pied-piper", "fab fa-pied-piper-alt", "fab fa-pied-piper-pp", "fab fa-pinterest", "fab fa-pinterest-p", "fab fa-pinterest-square", "fas fa-plane", "fas fa-play", "fas fa-play-circle", "far fa-play-circle", "fab fa-playstation", "fas fa-plug", "fas fa-plus", "fas fa-plus-circle", "fas fa-plus-square", "far fa-plus-square", "fas fa-podcast", "fas fa-pound-sign", "fas fa-power-off", "fas fa-print", "fab fa-product-hunt", "fab fa-pushed", "fas fa-puzzle-piece", "fab fa-python", "fab fa-qq", "fas fa-qrcode", "fas fa-question", "fas fa-question-circle", "far fa-question-circle", "fab fa-quora", "fas fa-quote-left", "fas fa-quote-right", "fas fa-random", "fab fa-ravelry", "fab fa-react", "fab fa-rebel", "fas fa-recycle", "fab fa-red-river", "fab fa-reddit", "fab fa-reddit-alien", "fab fa-reddit-square", "fas fa-redo", "fas fa-redo-alt", "fas fa-registered", "far fa-registered", "fab fa-rendact", "fab fa-renren", "fas fa-reply", "fas fa-reply-all", "fab fa-replyd", "fab fa-resolving", "fas fa-retweet", "fas fa-road", "fas fa-rocket", "fab fa-rocketchat", "fab fa-rockrms", "fas fa-rss", "fas fa-rss-square", "fas fa-ruble-sign", "fas fa-rupee-sign", "fab fa-safari", "fab fa-sass", "fas fa-save", "far fa-save", "fab fa-schlix", "fab fa-scribd", "fas fa-search", "fas fa-search-minus", "fas fa-search-plus", "fab fa-searchengin", "fab fa-sellcast", "fab fa-sellsy", "fas fa-server", "fab fa-servicestack", "fas fa-share", "fas fa-share-alt", "fas fa-share-alt-square", "fas fa-share-square", "far fa-share-square", "fas fa-shekel-sign", "fas fa-shield-alt", "fas fa-ship", "fab fa-shirtsinbulk", "fas fa-shopping-bag", "fas fa-shopping-basket", "fas fa-shopping-cart", "fas fa-shower", "fas fa-sign-in-alt", "fas fa-sign-language", "fas fa-sign-out-alt", "fas fa-signal", "fab fa-simplybuilt", "fab fa-sistrix", "fas fa-sitemap", "fab fa-skyatlas", "fab fa-skype", "fab fa-slack", "fab fa-slack-hash", "fas fa-sliders-h", "fab fa-slideshare", "fas fa-smile", "far fa-smile", "fab fa-snapchat", "fab fa-snapchat-ghost", "fab fa-snapchat-square", "fas fa-snowflake", "far fa-snowflake", "fas fa-sort", "fas fa-sort-alpha-down", "fas fa-sort-alpha-up", "fas fa-sort-amount-down", "fas fa-sort-amount-up", "fas fa-sort-down", "fas fa-sort-numeric-down", "fas fa-sort-numeric-up", "fas fa-sort-up", "fab fa-soundcloud", "fas fa-space-shuttle", "fab fa-speakap", "fas fa-spinner", "fab fa-spotify", "fas fa-square", "far fa-square", "fab fa-stack-exchange", "fab fa-stack-overflow", "fas fa-star", "far fa-star", "fas fa-star-half", "far fa-star-half", "fab fa-staylinked", "fab fa-steam", "fab fa-steam-square", "fab fa-steam-symbol", "fas fa-step-backward", "fas fa-step-forward", "fas fa-stethoscope", "fab fa-sticker-mule", "fas fa-sticky-note", "far fa-sticky-note", "fas fa-stop", "fas fa-stop-circle", "far fa-stop-circle", "fab fa-strava", "fas fa-street-view", "fas fa-strikethrough", "fab fa-stripe", "fab fa-stripe-s", "fab fa-studiovinari", "fab fa-stumbleupon", "fab fa-stumbleupon-circle", "fas fa-subscript", "fas fa-subway", "fas fa-suitcase", "fas fa-sun", "far fa-sun", "fab fa-superpowers", "fas fa-superscript", "fab fa-supple", "fas fa-sync", "fas fa-sync-alt", "fas fa-table", "fas fa-tablet", "fas fa-tablet-alt", "fas fa-tachometer-alt", "fas fa-tag", "fas fa-tags", "fas fa-tasks", "fas fa-taxi", "fab fa-telegram", "fab fa-telegram-plane", "fab fa-tencent-weibo", "fas fa-terminal", "fas fa-text-height", "fas fa-text-width", "fas fa-th", "fas fa-th-large", "fas fa-th-list", "fab fa-themeisle", "fas fa-thermometer-empty", "fas fa-thermometer-full", "fas fa-thermometer-half", "fas fa-thermometer-quarter", "fas fa-thermometer-three-quarters", "fas fa-thumbs-down", "far fa-thumbs-down", "fas fa-thumbs-up", "far fa-thumbs-up", "fas fa-thumbtack", "fas fa-ticket-alt", "fas fa-times", "fas fa-times-circle", "far fa-times-circle", "fas fa-tint", "fas fa-toggle-off", "fas fa-toggle-on", "fas fa-trademark", "fas fa-train", "fas fa-transgender", "fas fa-transgender-alt", "fas fa-trash", "fas fa-trash-alt", "far fa-trash-alt", "fas fa-tree", "fab fa-trello", "fab fa-tripadvisor", "fas fa-trophy", "fas fa-truck", "fas fa-tty", "fab fa-tumblr", "fab fa-tumblr-square", "fas fa-tv", "fab fa-twitch", "fab fa-twitter", "fab fa-twitter-square", "fab fa-typo3", "fab fa-uber", "fab fa-uikit", "fas fa-umbrella", "fas fa-underline", "fas fa-undo", "fas fa-undo-alt", "fab fa-uniregistry", "fas fa-universal-access", "fas fa-university", "fas fa-unlink", "fas fa-unlock", "fas fa-unlock-alt", "fab fa-untappd", "fas fa-upload", "fab fa-usb", "fas fa-user", "far fa-user", "fas fa-user-circle", "far fa-user-circle", "fas fa-user-md", "fas fa-user-plus", "fas fa-user-secret", "fas fa-user-times", "fas fa-users", "fab fa-ussunnah", "fas fa-utensil-spoon", "fas fa-utensils", "fab fa-vaadin", "fas fa-venus", "fas fa-venus-double", "fas fa-venus-mars", "fab fa-viacoin", "fab fa-viadeo", "fab fa-viadeo-square", "fab fa-viber", "fas fa-video", "fab fa-vimeo", "fab fa-vimeo-square", "fab fa-vimeo-v", "fab fa-vine", "fab fa-vk", "fab fa-vnv", "fas fa-volume-down", "fas fa-volume-off", "fas fa-volume-up", "fab fa-vuejs", "fab fa-weibo", "fab fa-weixin", "fab fa-whatsapp", "fab fa-whatsapp-square", "fas fa-wheelchair", "fab fa-whmcs", "fas fa-wifi", "fab fa-wikipedia-w", "fas fa-window-close", "far fa-window-close", "fas fa-window-maximize", "far fa-window-maximize", "fas fa-window-minimize", "fas fa-window-restore", "far fa-window-restore", "fab fa-windows", "fas fa-won-sign", "fab fa-wordpress", "fab fa-wordpress-simple", "fab fa-wpbeginner", "fab fa-wpexplorer", "fab fa-wpforms", "fas fa-wrench", "fab fa-xbox", "fab fa-xing", "fab fa-xing-square", "fab fa-y-combinator", "fab fa-yahoo", "fab fa-yandex", "fab fa-yandex-international", "fab fa-yelp", "fas fa-yen-sign", "fab fa-yoast", "fab fa-youtube"];
/* harmony default export */ __webpack_exports__["default"] = (faIcons);

/***/ }),

/***/ "./util/gradient-color-controller/constants.js":
/*!*****************************************************!*\
  !*** ./util/gradient-color-controller/constants.js ***!
  \*****************************************************/
/*! exports provided: GRADIENT_TYPE, RADIAL_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRADIENT_TYPE", function() { return GRADIENT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RADIAL_TYPES", function() { return RADIAL_TYPES; });
var GRADIENT_TYPE = [{
  label: "Linear",
  value: "linear"
}, {
  label: "Radial",
  value: "radial"
}];
var RADIAL_TYPES = [{
  label: "Ellipse",
  value: "ellipse"
}, {
  label: "Circle",
  value: "circle"
}];

/***/ }),

/***/ "./util/gradient-color-controller/index.js":
/*!*************************************************!*\
  !*** ./util/gradient-color-controller/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./util/gradient-color-controller/constants.js");
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../color-control */ "./util/color-control/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */






var GradientColorControl = /*#__PURE__*/function (_Component) {
  _inherits(GradientColorControl, _Component);

  var _super = _createSuper(GradientColorControl);

  function GradientColorControl() {
    var _this;

    _classCallCheck(this, GradientColorControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      gradientType: "linear",
      colorOne: _this.props.colorOne || "transparent",
      colorOnePosition: 0,
      colorTwo: _this.props.colorTwo || "transparent",
      colorTwoPosition: 100,
      angle: _this.props.angle || 0,
      radialShape: "ellipse",
      radialX: 50,
      radialY: 50
    });

    _defineProperty(_assertThisInitialized(_this), "getColorString", function () {
      var _this$state = _this.state,
          colorOne = _this$state.colorOne,
          colorOnePosition = _this$state.colorOnePosition,
          colorTwo = _this$state.colorTwo,
          colorTwoPosition = _this$state.colorTwoPosition;
      return "".concat(colorOne, " ").concat(colorOnePosition, "% , ").concat(colorTwo, " ").concat(colorTwoPosition, "%");
    });

    _defineProperty(_assertThisInitialized(_this), "getRadialGradient", function () {
      var _this$state2 = _this.state,
          radialShape = _this$state2.radialShape,
          radialX = _this$state2.radialX,
          radialY = _this$state2.radialY;
      return "radial-gradient(".concat(radialShape, " at ").concat(radialX, "% ").concat(radialY, "%, ").concat(_this.getColorString(), ")");
    });

    _defineProperty(_assertThisInitialized(_this), "getLinearGradient", function () {
      return "linear-gradient(".concat(_this.state.angle, "deg, ").concat(_this.getColorString(), ")");
    });

    _defineProperty(_assertThisInitialized(_this), "generateString", function () {
      // Send linear or radial gradiant string to parent
      _this.props.onChange(_this.state.gradientType === "linear" ? _this.getLinearGradient() : _this.getRadialGradient());
    });

    _defineProperty(_assertThisInitialized(_this), "onGradientChange", function (attributeName, value) {
      _this.setState(_defineProperty({}, attributeName, value), function () {
        return _this.generateString();
      });
    });

    return _this;
  }

  _createClass(GradientColorControl, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state3 = this.state,
          gradientType = _this$state3.gradientType,
          colorOne = _this$state3.colorOne,
          colorOnePosition = _this$state3.colorOnePosition,
          colorTwo = _this$state3.colorTwo,
          colorTwoPosition = _this$state3.colorTwoPosition,
          angle = _this$state3.angle,
          radialShape = _this$state3.radialShape,
          radialX = _this$state3.radialX,
          radialY = _this$state3.radialY;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Gradient Type")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], null, _constants__WEBPACK_IMPORTED_MODULE_5__["GRADIENT_TYPE"].map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          isSmall: true,
          isPrimary: gradientType === item.value,
          isSecondary: gradientType !== item.value,
          onClick: function onClick() {
            return _this2.onGradientChange("gradientType", item.value);
          }
        }, item.label);
      }))), gradientType === "radial" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Radial Type")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], null, _constants__WEBPACK_IMPORTED_MODULE_5__["RADIAL_TYPES"].map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          isSmall: true,
          isPrimary: radialShape === item.value,
          isSecondary: radialShape !== item.value,
          onClick: function onClick() {
            return _this2.onGradientChange("radialShape", item.value);
          }
        }, item.label);
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_color_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("First Color"),
        color: colorOne,
        onChange: function onChange(newColor) {
          return _this2.onGradientChange("colorOne", newColor);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_color_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Second Color"),
        color: colorTwo,
        onChange: function onChange(newColor) {
          return _this2.onGradientChange("colorTwo", newColor);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("First Color Position"),
        value: colorOnePosition,
        onChange: function onChange(newValue) {
          return _this2.onGradientChange("colorOnePosition", newValue);
        },
        min: 0,
        max: 100
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Second Color Position"),
        value: colorTwoPosition,
        onChange: function onChange(newValue) {
          return _this2.onGradientChange("colorTwoPosition", newValue);
        },
        min: 0,
        max: 100
      }), gradientType === "linear" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Angle"),
        value: angle,
        onChange: function onChange(newValue) {
          return _this2.onGradientChange("angle", newValue);
        },
        min: 0,
        max: 360
      }), gradientType === "radial" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Center X position"),
        value: radialX,
        onChange: function onChange(newValue) {
          return _this2.onGradientChange("radialX", newValue);
        },
        min: 0,
        max: 100
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Center Y position"),
        value: radialY,
        onChange: function onChange(newValue) {
          return _this2.onGradientChange("radialY", newValue);
        },
        min: 0,
        max: 100
      })));
    }
  }]);

  return GradientColorControl;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

GradientColorControl.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  colorOne: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  colorTwo: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  angle: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (GradientColorControl);

/***/ }),

/***/ "./util/helper.js":
/*!************************!*\
  !*** ./util/helper.js ***!
  \************************/
/*! exports provided: getFlipTransform, getButtonClasses, getBackgroundImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlipTransform", function() { return getFlipTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getButtonClasses", function() { return getButtonClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBackgroundImage", function() { return getBackgroundImage; });
// Return flilp value based on type
var getFlipTransform = function getFlipTransform(flipType) {
  switch (flipType) {
    case "flip-left":
      return "rotateY(-180deg)";

    case "flip-right":
      return "rotateY(180deg)";

    case "flip-up":
      return "rotateX(180deg)";

    case "flip-bottom":
      return "rotateX(-180deg)";

    case "zoom-in":
      return "scale(1.1)";

    case "zoom-out":
      return "scale(0.8)";
  }
}; // Return css class names based on button style name

var getButtonClasses = function getButtonClasses(buttonStyle) {
  switch (buttonStyle) {
    case "styleOne":
      return "btn-gradient blue";

    case "styleTwo":
      return "btn-gradient purple";

    case "styleThree":
      return "btn-gradient orange";

    case "custom":
      return "";
  }
};
var getBackgroundImage = function getBackgroundImage(type, gradientValue, imageURL) {
  switch (type) {
    case "fill":
      return "none";

    case "gradient":
      return gradientValue;

    case "image":
      if (imageURL) {
        return "url(".concat(imageURL, ")");
      }

      return "none";
  }
};

/***/ }),

/***/ "./util/image-avatar/ImageAvater.js":
/*!******************************************!*\
  !*** ./util/image-avatar/ImageAvater.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./util/image-avatar/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);


var Button = wp.components.Button;

var ImageAvater = function ImageAvater(_ref) {
  var imageUrl = _ref.imageUrl,
      onDeleteImage = _ref.onDeleteImage;
  return /*#__PURE__*/React.createElement("div", {
    className: "image-avatar",
    style: {
      backgroundImage: "url(".concat(imageUrl, ")")
    }
  }, /*#__PURE__*/React.createElement(Button, {
    className: "button",
    onClick: function onClick() {
      return onDeleteImage();
    }
  }, "Delete"));
};

ImageAvater.propTypes = {
  imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  onDeleteImage: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImageAvater);

/***/ }),

/***/ "./util/typography-control/FontPicker.js":
/*!***********************************************!*\
  !*** ./util/typography-control/FontPicker.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./util/typography-control/constants.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var withInstanceId = wp.compose.withInstanceId;
var BaseControl = wp.components.BaseControl;

function FontFamilyPicker(_ref) {
  var label = _ref.label,
      value = _ref.value,
      help = _ref.help,
      instanceId = _ref.instanceId,
      onChange = _ref.onChange,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["label", "value", "help", "instanceId", "onChange", "className"]);

  var id = "inspector-eb-font-family-".concat(instanceId);
  var fonts = [{
    value: "",
    label: __("Default")
  }, {
    value: "Arial",
    label: "Arial"
  }, {
    value: "Helvetica",
    label: "Helvetica"
  }, {
    value: "Times New Roman",
    label: "Times New Roman"
  }, {
    value: "Georgia",
    label: "Georgia"
  }]; //Add Google Fonts

  Object.keys(_constants__WEBPACK_IMPORTED_MODULE_0__["FONTS"]).map(function (k) {
    fonts.push({
      value: k,
      label: k
    });
  });

  var onChangeValue = function onChangeValue(event) {
    var meta = wp.data.select("core/editor").getEditedPostAttribute("meta");
    var ba = "";
    var googleFontsAttr = ":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic";
    var link = document.createElement("link");
    link.rel = "stylesheet";

    if (typeof meta !== "undefined" && typeof meta._eb_attr !== "undefined") {
      ba = meta._eb_attr;
    }

    if (ba.length > 0) {
      //Load fonts on the header
      if (!ba.includes(event.target.value)) {
        link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
        document.head.appendChild(link);
      }

      ba = ba.replace("," + event.target.value, "");
      ba = ba + "," + event.target.value;
    } else {
      link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
      document.head.appendChild(link);
      ba = event.target.value;
    } //Save values to metadata


    wp.data.dispatch("core/editor").editPost({
      meta: {
        _eb_attr: ba
      }
    });
    onChange(event.target.value);
  };

  return /*#__PURE__*/React.createElement(BaseControl, {
    label: label,
    id: id,
    help: help,
    className: className
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    className: "components-select-control__input",
    onChange: onChangeValue,
    "aria-describedby": !!help ? "".concat(id, "__help") : undefined
  }, props), fonts.map(function (option, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: "".concat(option.label, "-").concat(option.value, "-").concat(index),
      value: option.value,
      selected: value === option.value ? "selected" : ""
    }, option.label);
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (withInstanceId(FontFamilyPicker));

/***/ }),

/***/ "./util/typography-control/constants.js":
/*!**********************************************!*\
  !*** ./util/typography-control/constants.js ***!
  \**********************************************/
/*! exports provided: FONTS, WEIGHTS, TRANSFORMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONTS", function() { return FONTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEIGHTS", function() { return WEIGHTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSFORMS", function() { return TRANSFORMS; });
var __ = wp.i18n.__;
var FONTS = {
  "Abril Fatface": {
    weight: ["400"]
  },
  Anton: {
    weight: ["400"]
  },
  Arvo: {
    weight: ["400", "700"]
  },
  Asap: {
    weight: ["400", "500", "600", "700"]
  },
  "Barlow Condensed": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  Barlow: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "Cormorant Garamond": {
    weight: ["300", "400", "500", "600", "700"]
  },
  Faustina: {
    weight: ["400", "500", "600", "700"]
  },
  "Fira Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "IBM Plex Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700"]
  },
  Inconsolata: {
    weight: ["400", "700"]
  },
  Heebo: {
    weight: ["100", "300", "400", "500", "700", "800", "900"]
  },
  Karla: {
    weight: ["400", "700"]
  },
  Lato: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  Lora: {
    weight: ["400", "700"]
  },
  Merriweather: {
    weight: ["300", "400", "500", "600", "700", "800", "900"]
  },
  Montserrat: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "Noto Sans": {
    weight: ["400", "700"]
  },
  "Noto Serif": {
    weight: ["400", "700"]
  },
  "Open Sans": {
    weight: ["300", "400", "500", "600", "700", "800"]
  },
  Oswald: {
    weight: ["200", "300", "400", "500", "600", "700"]
  },
  "Playfair Display": {
    weight: ["400", "700", "900"]
  },
  "PT Serif": {
    weight: ["400", "700"]
  },
  Roboto: {
    weight: ["100", "300", "400", "500", "700", "900"]
  },
  Rubik: {
    weight: ["300", "400", "500", "700", "900"]
  },
  Tajawal: {
    weight: ["200", "300", "400", "500", "700", "800", "900"]
  },
  Ubuntu: {
    weight: ["300", "400", "500", "700"]
  },
  Yrsa: {
    weight: ["300", "400", "500", "600", "700"]
  }
};
var WEIGHTS = [{
  label: __("Default"),
  value: ""
}, {
  label: __("Normal"),
  value: "normal"
}, {
  label: __("Bold"),
  value: "bold"
}];
var TRANSFORMS = [{
  label: __("None"),
  value: ""
}, {
  label: __("AA"),
  value: "uppercase"
}, {
  label: __("aa"),
  value: "lowercase"
}, {
  label: __("Aa"),
  value: "capitalize"
}];


/***/ }),

/***/ "./util/unit-control/index.js":
/*!************************************!*\
  !*** ./util/unit-control/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./util/unit-control/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);



/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$components = wp.components,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button;

var UnitControl = function UnitControl(_ref) {
  var selectedUnit = _ref.selectedUnit,
      unitTypes = _ref.unitTypes,
      _onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonGroup, {
    className: "eb-unit-control-btn-group"
  }, unitTypes.map(function (unit) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
      className: "eb-unit-control-btn ".concat(unit.value === selectedUnit && "eb-unit-active"),
      isSmall: true,
      isPrimary: unit.value === selectedUnit,
      onClick: function onClick() {
        return _onClick(unit.value);
      }
    }, unit.label);
  }));
};

UnitControl.propTypes = {
  selectedUnit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  unitTypes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (UnitControl);

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "react-dom":
/*!************************************!*\
  !*** external {"this":"ReactDOM"} ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map