(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
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
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/dimensionsNames */ "./src/constants/dimensionsNames.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/helpers */ "./util/helpers/index.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var attributes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
  // responsive control attributes ⬇
  resOption: {
    type: "string",
    "default": "Desktop"
  },
  // uniqueIdNumber attribute for making unique className
  uniqueIdNumber: {
    type: "number"
  },
  blockId: {
    type: "string"
  },
  blockRoot: {
    type: "string",
    "default": "essential_block"
  },
  blockMeta: {
    type: "object"
  },
  flipboxStyle: {
    type: "string",
    "default": "default"
  },
  isHover: {
    type: "boolean",
    "default": false
  },
  flipType: {
    type: "string",
    source: "attribute",
    selector: ".eb-flipbox-container",
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
    selector: "eb-flipbox-icon-wrapper-front",
    attribute: "data-icon",
    "default": "fab fa-rev"
  },
  frontImageUrl: {
    type: "attribute",
    selector: "eb-flipbox-front-image-container img",
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
  showFrontTitle: {
    type: "boolean",
    "default": true
  },
  frontTitle: {
    type: "string",
    selector: "eb-flipbox-front-title",
    "default": "Front Title Here"
  },
  showFrontContent: {
    type: "boolean",
    "default": true
  },
  frontContent: {
    type: "string",
    selector: "eb-flipbox-front-content",
    "default": "Front Content Here"
  },
  showBackTitle: {
    type: "boolean",
    "default": true
  },
  backTitle: {
    type: "string",
    selector: "eb-flipbox-back-title",
    "default": "Back Title Here"
  },
  showBackContent: {
    type: "boolean",
    "default": true
  },
  backContent: {
    type: "string",
    selector: "eb-flipbox-back-content",
    "default": "Back Content Here"
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
  frontIconColor: {
    type: "string"
  },
  backIconColor: {
    type: "string"
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
  frontIconBackground: {
    type: "string"
  },
  backIconBackground: {
    type: "string"
  },
  transitionSpeed: {
    type: "number"
  },
  displayButtonIcon: {
    type: "boolean",
    "default": false
  },
  align: {
    type: "string",
    "default": "center"
  }
}, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateTypographyAttributes"])(Object.values(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__))), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateDimensionsAttributes"])(_constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__["dimensionsMargin"])), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateDimensionsAttributes"])(_constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__["dimensionsPadding"])), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateDimensionsAttributes"])(_constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__["buttonPadding"])), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateDimensionsAttributes"])(_constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__["frontIconMargin"])), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateDimensionsAttributes"])(_constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__["frontIconPadding"])), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateDimensionsAttributes"])(_constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__["backIconMargin"])), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateDimensionsAttributes"])(_constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__["backIconPadding"])), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateResponsiveRangeAttributes"])(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_2__["boxHeightAttr"], {
  defaultRange: 310
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateResponsiveRangeAttributes"])(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_2__["boxWidthAttr"], {
  defaultRange: 600
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateResponsiveRangeAttributes"])(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_2__["boxFrontIconSizeAttr"], {
  defaultRange: 50
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateResponsiveRangeAttributes"])(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_2__["boxBackIconSizeAttr"], {
  defaultRange: 50
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateResponsiveRangeAttributes"])(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_2__["buttonIconSizeAttr"], {
  defaultRange: 100
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateResponsiveRangeAttributes"])(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_2__["frontImgSizeAttr"], {
  defaultRange: 100
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateResponsiveRangeAttributes"])(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_2__["backImgSizeAttr"], {
  defaultRange: 100
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateResponsiveRangeAttributes"])(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_2__["frontImgRadiusAttr"])), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateResponsiveRangeAttributes"])(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_2__["backImgRadiusAttr"])), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateBorderShadowAttributes"])(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__["borderShadow"])), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateBorderShadowAttributes"])(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__["borderShadowBtn"])), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateBorderShadowAttributes"])(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__["borderShadowFrontIcon"], {
  noShadow: true
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateBorderShadowAttributes"])(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__["borderShadowBackIcon"], {
  noShadow: true
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateBackgroundAttributes"])(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_5__["flipboxFrontWrapper"], {
  defaultFillColor: "#7967ff",
  defaultBgGradient: "linear-gradient(45deg,#3347CA,#8593F2)"
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateBackgroundAttributes"])(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_5__["flipboxBackWrapper"], {
  defaultFillColor: "#3074ff",
  defaultBgGradient: "linear-gradient(45deg,#8593F2,#3347CA)"
}));

/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/constants/backgroundsConstants.js":
/*!***********************************************!*\
  !*** ./src/constants/backgroundsConstants.js ***!
  \***********************************************/
/*! exports provided: flipboxFrontWrapper, flipboxBackWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipboxFrontWrapper", function() { return flipboxFrontWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipboxBackWrapper", function() { return flipboxBackWrapper; });
// each and every const here has to be totally unique from one another
var flipboxFrontWrapper = "front_wrapper_";
var flipboxBackWrapper = "back_wrapper_";

/***/ }),

/***/ "./src/constants/borderShadowConstants.js":
/*!************************************************!*\
  !*** ./src/constants/borderShadowConstants.js ***!
  \************************************************/
/*! exports provided: borderShadow, borderShadowBtn, borderShadowFrontIcon, borderShadowBackIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderShadow", function() { return borderShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderShadowBtn", function() { return borderShadowBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderShadowFrontIcon", function() { return borderShadowFrontIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderShadowBackIcon", function() { return borderShadowBackIcon; });
var borderShadow = "front_";
var borderShadowBtn = "btn_";
var borderShadowFrontIcon = "front_icon_";
var borderShadowBackIcon = "back_icon_";

/***/ }),

/***/ "./src/constants/dimensionsNames.js":
/*!******************************************!*\
  !*** ./src/constants/dimensionsNames.js ***!
  \******************************************/
/*! exports provided: dimensionsMargin, dimensionsPadding, buttonPadding, frontIconMargin, frontIconPadding, backIconMargin, backIconPadding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dimensionsMargin", function() { return dimensionsMargin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dimensionsPadding", function() { return dimensionsPadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonPadding", function() { return buttonPadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontIconMargin", function() { return frontIconMargin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontIconPadding", function() { return frontIconPadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backIconMargin", function() { return backIconMargin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backIconPadding", function() { return backIconPadding; });
// the consts defined here should be unique from one another
var dimensionsMargin = "margin";
var dimensionsPadding = "padding";
var buttonPadding = "btn_padding";
var frontIconMargin = "front_icon_margin";
var frontIconPadding = "front_icon_padding";
var backIconMargin = "back_icon_margin";
var backIconPadding = "back_icon_padding";

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: DEFAULT_ICON_SIZE, DEFAULT_FRONT_BACKGROUND, DEFAULT_BACK_BACKGROUND, FLIPBOX_SIDES, FLIPBOX_TYPE, BORDER_STYLES, ICON_TYPE, LINK_TYPE, ICON_POSITIONS, BUTTON_STYLES, BACKGROUND_TYPE, BACKGROUND_SIZE, BACKGROUND_REPEAT, BACKGROUND_POSITION, BACKGROUND_ATTACHMENT, FLIPBOX_STYLES, FONT_SIZES, TEXT_TRANSFORM, FONT_WEIGHTS, TEXT_DECORATION, UNIT_TYPES, BOX_HEIGHT_UNIT, FRONT_IMAGE_UNITS */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIT_TYPES", function() { return UNIT_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOX_HEIGHT_UNIT", function() { return BOX_HEIGHT_UNIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRONT_IMAGE_UNITS", function() { return FRONT_IMAGE_UNITS; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

var DEFAULT_ICON_SIZE = "50";
var DEFAULT_FRONT_BACKGROUND = "#7967ff";
var DEFAULT_BACK_BACKGROUND = "#4a5059";
var FLIPBOX_SIDES = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Front"),
  value: "front"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Back"),
  value: "back"
}];
var FLIPBOX_TYPE = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Flip Left"),
  value: "flip-left"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Flip Right"),
  value: "flip-right"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Flip Up"),
  value: "flip-up"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Flip Bottom"),
  value: "flip-bottom"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Zoom In"),
  value: "zoom-in"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Zoom Out"),
  value: "zoom-out"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Fade"),
  value: "fade"
}];
var BORDER_STYLES = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Dashed"),
  value: "dashed"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Solid"),
  value: "solid"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Dotted"),
  value: "dotted"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Double"),
  value: "double"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Groove"),
  value: "groove"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Inset"),
  value: "inset"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Outset"),
  value: "outset"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Ridge"),
  value: "ridge"
}];
var ICON_TYPE = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("None"),
  value: "none"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Icon"),
  value: "icon"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Image"),
  value: "image"
}];
var LINK_TYPE = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Box"),
  value: "box"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Title"),
  value: "title"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Button"),
  value: "button"
}];
var ICON_POSITIONS = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Before"),
  value: "before"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("After"),
  value: "after"
}];
var BUTTON_STYLES = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Style 1"),
  value: "styleOne"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Style 2"),
  value: "styleTwo"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Style 3"),
  value: "styleThree"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Custom"),
  value: "custom"
}];
var BACKGROUND_TYPE = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Fill"),
  value: "fill"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Gradient"),
  value: "gradient"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Image"),
  value: "image"
}];
var BACKGROUND_SIZE = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Auto"),
  value: "auto"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Cover"),
  value: "cover"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Contain"),
  value: "contain"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Custom"),
  value: "custom"
}];
var BACKGROUND_REPEAT = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Default"),
  value: ""
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("No-repeat"),
  value: "no-repeat"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Repeat"),
  value: "repeat"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Repeat-x"),
  value: "repeat-x"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Repeat-y"),
  value: "repeat-y"
}];
var BACKGROUND_POSITION = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Default"),
  value: ""
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Center Center"),
  value: "center center"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Center Left"),
  value: "center left"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Center Right"),
  value: "center right"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Top Center"),
  value: "top center"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Top Left"),
  value: "top left"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Top Right"),
  value: "top right"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Bottom Center"),
  value: "bottom center"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Bottom Left"),
  value: "bottom left"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Bottom Right"),
  value: "bottom right"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Custom"),
  value: "custom"
}];
var BACKGROUND_ATTACHMENT = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Default"),
  value: ""
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Fixed"),
  value: "fixed"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Scroll"),
  value: "scroll"
}];
var FLIPBOX_STYLES = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Default"),
  value: "default"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Mint"),
  value: "mint"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Tangelo"),
  value: "tangelo"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Royal"),
  value: "royal"
}];
var FONT_SIZES = [{
  name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Small"),
  size: 12,
  slug: "s"
}, {
  name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Medium"),
  size: 16,
  slug: "m"
}, {
  name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Large"),
  size: 24,
  slug: "l"
}, {
  name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Extra Large"),
  size: 36,
  slug: "xl"
}];
var TEXT_TRANSFORM = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("None"),
  value: "none"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Lowercase"),
  value: "lowercase"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Capitalize"),
  value: "capitalize"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Uppercase"),
  value: "uppercase"
}];
var FONT_WEIGHTS = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Lighter"),
  value: "lighter"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Normal"),
  value: "normal"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Bold"),
  value: "bold"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Bolder"),
  value: "bolder"
}];
var TEXT_DECORATION = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Initial"),
  value: "initial"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Overline"),
  value: "overline"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Line Through"),
  value: "line-through"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Underline"),
  value: "underline"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Underline Oveline"),
  value: "underline overline"
}];
var UNIT_TYPES = [{
  label: "px",
  value: "px"
}, {
  label: "%",
  value: "%"
}, {
  label: "em",
  value: "em"
}];
var BOX_HEIGHT_UNIT = [{
  label: "px",
  value: "px"
}, {
  label: "%",
  value: "%"
}];
var FRONT_IMAGE_UNITS = [{
  label: "px",
  value: "px"
}, {
  label: "%",
  value: "%"
}];

/***/ }),

/***/ "./src/constants/rangeNames.js":
/*!*************************************!*\
  !*** ./src/constants/rangeNames.js ***!
  \*************************************/
/*! exports provided: boxHeightAttr, boxWidthAttr, boxFrontIconSizeAttr, boxBackIconSizeAttr, buttonIconSizeAttr, frontImgSizeAttr, backImgSizeAttr, frontImgRadiusAttr, backImgRadiusAttr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxHeightAttr", function() { return boxHeightAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxWidthAttr", function() { return boxWidthAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxFrontIconSizeAttr", function() { return boxFrontIconSizeAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxBackIconSizeAttr", function() { return boxBackIconSizeAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonIconSizeAttr", function() { return buttonIconSizeAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontImgSizeAttr", function() { return frontImgSizeAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backImgSizeAttr", function() { return backImgSizeAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontImgRadiusAttr", function() { return frontImgRadiusAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backImgRadiusAttr", function() { return backImgRadiusAttr; });
// the consts defined here should be unique from one another
var boxHeightAttr = "boxHeight";
var boxWidthAttr = "boxWidth";
var boxFrontIconSizeAttr = "frontIconSize";
var boxBackIconSizeAttr = "backIconSize";
var buttonIconSizeAttr = "btnIconSize";
var frontImgSizeAttr = "frontImgSize";
var backImgSizeAttr = "backImgSize";
var frontImgRadiusAttr = "frontImgRadius";
var backImgRadiusAttr = "backImgRadius";

/***/ }),

/***/ "./src/constants/typographyPrefixConstants.js":
/*!****************************************************!*\
  !*** ./src/constants/typographyPrefixConstants.js ***!
  \****************************************************/
/*! exports provided: typoPrefix_title, typoPrefix_content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typoPrefix_title", function() { return typoPrefix_title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typoPrefix_content", function() { return typoPrefix_content; });
var typoPrefix_title = "title";
var typoPrefix_content = "content";

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/dimensionsNames */ "./src/constants/dimensionsNames.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/helpers */ "./util/helpers/index.js");
/**
 * WordPress dependencits
 */
var __ = wp.i18n.__;
var _wp$components = wp.components,
    Toolbar = _wp$components.Toolbar,
    ToolbarButton = _wp$components.ToolbarButton;
var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    useBlockProps = _wp$blockEditor.useBlockProps;
var useEffect = wp.element.useEffect;
var select = wp.data.select;
/**
 * Editor CSS
 */


/*
 * Internal dependencies
 */









function Edit(props) {
  var getFlexAlign = function getFlexAlign(align) {
    switch (align) {
      case "left":
        return "flex-start";

      case "right":
        return "flex-end";

      default:
        return "center";
    }
  };

  var isSelected = props.isSelected,
      attributes = props.attributes,
      setAttributes = props.setAttributes,
      clientId = props.clientId;
  var blockId = attributes.blockId,
      blockMeta = attributes.blockMeta,
      resOption = attributes.resOption,
      isHover = attributes.isHover,
      flipType = attributes.flipType,
      selectedSide = attributes.selectedSide,
      frontIconOrImage = attributes.frontIconOrImage,
      frontIcon = attributes.frontIcon,
      frontImageUrl = attributes.frontImageUrl,
      backIconOrImage = attributes.backIconOrImage,
      backIcon = attributes.backIcon,
      backImageUrl = attributes.backImageUrl,
      showFrontTitle = attributes.showFrontTitle,
      frontTitle = attributes.frontTitle,
      showFrontContent = attributes.showFrontContent,
      frontContent = attributes.frontContent,
      showBackTitle = attributes.showBackTitle,
      backTitle = attributes.backTitle,
      showBackContent = attributes.showBackContent,
      backContent = attributes.backContent,
      linkType = attributes.linkType,
      buttonText = attributes.buttonText,
      buttonIcon = attributes.buttonIcon,
      buttonIconPos = attributes.buttonIconPos,
      link = attributes.link,
      frontTitleColor = attributes.frontTitleColor,
      backTitleColor = attributes.backTitleColor,
      frontContentColor = attributes.frontContentColor,
      backContentColor = attributes.backContentColor,
      frontIconColor = attributes.frontIconColor,
      backIconColor = attributes.backIconColor,
      buttonStyle = attributes.buttonStyle,
      buttonClasses = attributes.buttonClasses,
      buttonBackground = attributes.buttonBackground,
      buttonColor = attributes.buttonColor,
      frontIconBackground = attributes.frontIconBackground,
      backIconBackground = attributes.backIconBackground,
      transitionSpeed = attributes.transitionSpeed,
      displayButtonIcon = attributes.displayButtonIcon,
      align = attributes.align; // Default colors

  var deafultFrontTitleColor = "#ffffff";
  var defaultFrontContentColor = "#ffffff";
  var defautlBackContentColor = "#ffffff";
  var defaultBackTitleColor = "#ffffff";
  var defaultFrontIconBackground = "transparent";
  var defaultBackIconBackground = "transparent"; // wrapper styles css in strings ⬇

  var _generateDimensionsCo = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateDimensionsControlStyles"])({
    controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_2__["dimensionsMargin"],
    styleFor: "margin",
    attributes: attributes
  }),
      wrapperMarginStylesDesktop = _generateDimensionsCo.dimensionStylesDesktop,
      wrapperMarginStylesTab = _generateDimensionsCo.dimensionStylesTab,
      wrapperMarginStylesMobile = _generateDimensionsCo.dimensionStylesMobile;

  var _generateDimensionsCo2 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateDimensionsControlStyles"])({
    controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_2__["dimensionsPadding"],
    styleFor: "padding",
    attributes: attributes
  }),
      wrapperPaddingStylesDesktop = _generateDimensionsCo2.dimensionStylesDesktop,
      wrapperPaddingStylesTab = _generateDimensionsCo2.dimensionStylesTab,
      wrapperPaddingStylesMobile = _generateDimensionsCo2.dimensionStylesMobile; // wrapper border & shadow settings


  var _generateBorderShadow = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateBorderShadowStyles"])({
    controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_6__["borderShadow"],
    attributes: attributes
  }),
      bdShadowStyesDesktop = _generateBorderShadow.styesDesktop,
      bdShadowStyesTab = _generateBorderShadow.styesTab,
      bdShadowStyesMobile = _generateBorderShadow.styesMobile,
      bdShadowStylesHoverDesktop = _generateBorderShadow.stylesHoverDesktop,
      bdShadowStylesHoverTab = _generateBorderShadow.stylesHoverTab,
      bdShadowStylesHoverMobile = _generateBorderShadow.stylesHoverMobile; // responsive range controller


  var _generateResponsiveRa = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateResponsiveRangeStyles"])({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_5__["boxHeightAttr"],
    property: "height",
    attributes: attributes,
    customUnit: "px"
  }),
      wrapperHeightStylesDesktop = _generateResponsiveRa.rangeStylesDesktop,
      wrapperHeightStylesTab = _generateResponsiveRa.rangeStylesTab,
      wrapperHeightStylesMobile = _generateResponsiveRa.rangeStylesMobile;

  var _generateResponsiveRa2 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateResponsiveRangeStyles"])({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_5__["boxHeightAttr"],
    property: "min-height",
    attributes: attributes,
    customUnit: "px"
  }),
      wrapperMinHeightStylesDesktop = _generateResponsiveRa2.rangeStylesDesktop,
      wrapperMinHeightStylesTab = _generateResponsiveRa2.rangeStylesTab,
      wrapperMinHeightStylesMobile = _generateResponsiveRa2.rangeStylesMobile;

  var _generateResponsiveRa3 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateResponsiveRangeStyles"])({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_5__["boxWidthAttr"],
    property: "max-width",
    attributes: attributes
  }),
      wrapperWidthStylesDesktop = _generateResponsiveRa3.rangeStylesDesktop,
      wrapperWidthStylesTab = _generateResponsiveRa3.rangeStylesTab,
      wrapperWidthStylesMobile = _generateResponsiveRa3.rangeStylesMobile;

  var _generateResponsiveRa4 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateResponsiveRangeStyles"])({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_5__["boxFrontIconSizeAttr"],
    property: "font-size",
    attributes: attributes
  }),
      frontFontSizeDesktop = _generateResponsiveRa4.rangeStylesDesktop,
      frontFontSizeTab = _generateResponsiveRa4.rangeStylesTab,
      frontFontSizeMobile = _generateResponsiveRa4.rangeStylesMobile;

  var _generateResponsiveRa5 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateResponsiveRangeStyles"])({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_5__["boxBackIconSizeAttr"],
    property: "font-size",
    attributes: attributes
  }),
      backFontSizeDesktop = _generateResponsiveRa5.rangeStylesDesktop,
      backFontSizeTab = _generateResponsiveRa5.rangeStylesTab,
      backFontSizeMobile = _generateResponsiveRa5.rangeStylesMobile; // front background controller


  var _generateBackgroundCo = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateBackgroundControlStyles"])({
    attributes: attributes,
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_4__["flipboxFrontWrapper"]
  }),
      frontBackgroundStylesDesktop = _generateBackgroundCo.backgroundStylesDesktop,
      frontHoverBackgroundStylesDesktop = _generateBackgroundCo.hoverBackgroundStylesDesktop,
      frontBackgroundStylesTab = _generateBackgroundCo.backgroundStylesTab,
      frontHoverBackgroundStylesTab = _generateBackgroundCo.hoverBackgroundStylesTab,
      frontBackgroundStylesMobile = _generateBackgroundCo.backgroundStylesMobile,
      frontHoverBackgroundStylesMobile = _generateBackgroundCo.hoverBackgroundStylesMobile,
      frontOverlayStylesDesktop = _generateBackgroundCo.overlayStylesDesktop,
      frontHoverOverlayStylesDesktop = _generateBackgroundCo.hoverOverlayStylesDesktop,
      frontOverlayStylesTab = _generateBackgroundCo.overlayStylesTab,
      frontHoverOverlayStylesTab = _generateBackgroundCo.hoverOverlayStylesTab,
      frontOverlayStylesMobile = _generateBackgroundCo.overlayStylesMobile,
      frontHoverOverlayStylesMobile = _generateBackgroundCo.hoverOverlayStylesMobile; // front Icon Margin & Padding


  var _generateDimensionsCo3 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateDimensionsControlStyles"])({
    controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_2__["frontIconMargin"],
    styleFor: "margin",
    attributes: attributes
  }),
      frontIconMarginStylesDesktop = _generateDimensionsCo3.dimensionStylesDesktop,
      frontIconMarginStylesTab = _generateDimensionsCo3.dimensionStylesTab,
      frontIconMarginStylesMobile = _generateDimensionsCo3.dimensionStylesMobile;

  var _generateDimensionsCo4 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateDimensionsControlStyles"])({
    controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_2__["frontIconPadding"],
    styleFor: "padding",
    attributes: attributes
  }),
      frontIconPaddingStylesDesktop = _generateDimensionsCo4.dimensionStylesDesktop,
      frontIconPaddingStylesTab = _generateDimensionsCo4.dimensionStylesTab,
      frontIconPaddingStylesMobile = _generateDimensionsCo4.dimensionStylesMobile; // front icon border


  var _generateBorderShadow2 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateBorderShadowStyles"])({
    controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_6__["borderShadowFrontIcon"],
    attributes: attributes,
    noShadow: true
  }),
      frontIconBorderDesktop = _generateBorderShadow2.styesDesktop,
      frontIconBorderTab = _generateBorderShadow2.styesTab,
      frontIconBorderMobile = _generateBorderShadow2.styesMobile,
      frontIconBorderHoverDesktop = _generateBorderShadow2.stylesHoverDesktop,
      frontIconBorderHoverTab = _generateBorderShadow2.stylesHoverTab,
      frontIconBorderHoverMobile = _generateBorderShadow2.stylesHoverMobile; // front image


  var _generateResponsiveRa6 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateResponsiveRangeStyles"])({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_5__["frontImgSizeAttr"],
    property: "height",
    attributes: attributes
  }),
      frontImgHeightDesktop = _generateResponsiveRa6.rangeStylesDesktop,
      frontImgHeightTab = _generateResponsiveRa6.rangeStylesTab,
      frontImgHeightMobile = _generateResponsiveRa6.rangeStylesMobile;

  var _generateResponsiveRa7 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateResponsiveRangeStyles"])({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_5__["frontImgSizeAttr"],
    property: "width",
    attributes: attributes
  }),
      frontImgWidthDesktop = _generateResponsiveRa7.rangeStylesDesktop,
      frontImgWidthTab = _generateResponsiveRa7.rangeStylesTab,
      frontImgWidthMobile = _generateResponsiveRa7.rangeStylesMobile;

  var _generateResponsiveRa8 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateResponsiveRangeStyles"])({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_5__["frontImgRadiusAttr"],
    property: "border-radius",
    attributes: attributes
  }),
      frontImgRadiusDesktop = _generateResponsiveRa8.rangeStylesDesktop,
      frontImgRadiusTab = _generateResponsiveRa8.rangeStylesTab,
      frontImgRadiusMobile = _generateResponsiveRa8.rangeStylesMobile; // back background controller


  var _generateBackgroundCo2 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateBackgroundControlStyles"])({
    attributes: attributes,
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_4__["flipboxBackWrapper"]
  }),
      backBackgroundStylesDesktop = _generateBackgroundCo2.backgroundStylesDesktop,
      backHoverBackgroundStylesDesktop = _generateBackgroundCo2.hoverBackgroundStylesDesktop,
      backBackgroundStylesTab = _generateBackgroundCo2.backgroundStylesTab,
      backHoverBackgroundStylesTab = _generateBackgroundCo2.hoverBackgroundStylesTab,
      backBackgroundStylesMobile = _generateBackgroundCo2.backgroundStylesMobile,
      backHoverBackgroundStylesMobile = _generateBackgroundCo2.hoverBackgroundStylesMobile,
      backOverlayStylesDesktop = _generateBackgroundCo2.overlayStylesDesktop,
      backHoverOverlayStylesDesktop = _generateBackgroundCo2.hoverOverlayStylesDesktop,
      backOverlayStylesTab = _generateBackgroundCo2.overlayStylesTab,
      backHoverOverlayStylesTab = _generateBackgroundCo2.hoverOverlayStylesTab,
      backOverlayStylesMobile = _generateBackgroundCo2.overlayStylesMobile,
      backHoverOverlayStylesMobile = _generateBackgroundCo2.hoverOverlayStylesMobile;

  var _generateTypographySt = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateTypographyStyles"])({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_3__["typoPrefix_title"]
  }),
      titleTypoStylesDesktop = _generateTypographySt.typoStylesDesktop,
      titleTypoStylesTab = _generateTypographySt.typoStylesTab,
      titleTypoStylesMobile = _generateTypographySt.typoStylesMobile;

  var _generateTypographySt2 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateTypographyStyles"])({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_3__["typoPrefix_content"]
  }),
      contentTypoStylesDesktop = _generateTypographySt2.typoStylesDesktop,
      contentTypoStylesTab = _generateTypographySt2.typoStylesTab,
      contentTypoStylesMobile = _generateTypographySt2.typoStylesMobile; // back Icon Margin & Padding


  var _generateDimensionsCo5 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateDimensionsControlStyles"])({
    controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_2__["backIconMargin"],
    styleFor: "margin",
    attributes: attributes
  }),
      backIconMarginStylesDesktop = _generateDimensionsCo5.dimensionStylesDesktop,
      backIconMarginStylesTab = _generateDimensionsCo5.dimensionStylesTab,
      backIconMarginStylesMobile = _generateDimensionsCo5.dimensionStylesMobile;

  var _generateDimensionsCo6 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateDimensionsControlStyles"])({
    controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_2__["backIconPadding"],
    styleFor: "padding",
    attributes: attributes
  }),
      backIconPaddingStylesDesktop = _generateDimensionsCo6.dimensionStylesDesktop,
      backIconPaddingStylesTab = _generateDimensionsCo6.dimensionStylesTab,
      backIconPaddingStylesMobile = _generateDimensionsCo6.dimensionStylesMobile; // back icon border


  var _generateBorderShadow3 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateBorderShadowStyles"])({
    controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_6__["borderShadowBackIcon"],
    attributes: attributes,
    noShadow: true
  }),
      backIconBorderDesktop = _generateBorderShadow3.styesDesktop,
      backIconBorderTab = _generateBorderShadow3.styesTab,
      backIconBorderMobile = _generateBorderShadow3.styesMobile,
      backIconBorderHoverDesktop = _generateBorderShadow3.stylesHoverDesktop,
      backIconBorderHoverTab = _generateBorderShadow3.stylesHoverTab,
      backIconBorderHoverMobile = _generateBorderShadow3.stylesHoverMobile; // back image


  var _generateResponsiveRa9 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateResponsiveRangeStyles"])({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_5__["backImgSizeAttr"],
    property: "height",
    attributes: attributes
  }),
      backImgHeightDesktop = _generateResponsiveRa9.rangeStylesDesktop,
      backImgHeightTab = _generateResponsiveRa9.rangeStylesTab,
      backImgHeightMobile = _generateResponsiveRa9.rangeStylesMobile;

  var _generateResponsiveRa10 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateResponsiveRangeStyles"])({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_5__["backImgSizeAttr"],
    property: "width",
    attributes: attributes
  }),
      backImgWidthDesktop = _generateResponsiveRa10.rangeStylesDesktop,
      backImgWidthTab = _generateResponsiveRa10.rangeStylesTab,
      backImgWidthMobile = _generateResponsiveRa10.rangeStylesMobile;

  var _generateResponsiveRa11 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateResponsiveRangeStyles"])({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_5__["backImgRadiusAttr"],
    property: "border-radius",
    attributes: attributes
  }),
      backImgRadiusDesktop = _generateResponsiveRa11.rangeStylesDesktop,
      backImgRadiusTab = _generateResponsiveRa11.rangeStylesTab,
      backImgRadiusMobile = _generateResponsiveRa11.rangeStylesMobile;

  var flipContainerStyleDesktop = "\n\t .eb-flipbox-container.".concat(blockId, "{\n\t\t ").concat(wrapperMarginStylesDesktop, "\n\t\t ").concat(wrapperPaddingStylesDesktop, "\n\t\t ").concat(wrapperHeightStylesDesktop, "\n\t\t ").concat(wrapperWidthStylesDesktop, "\n\t\t width: 100%;\n\t }\n\t ");
  var flipContainerStyleTab = "\n\t .eb-flipbox-container.".concat(blockId, "{\n\t\t ").concat(wrapperMarginStylesTab, "\n\t\t ").concat(wrapperPaddingStylesTab, "\n\t\t ").concat(wrapperHeightStylesTab, "\n\t\t ").concat(wrapperWidthStylesTab, "\n\t }\n\t ");
  var flipContainerStyleMobile = "\n\t .eb-flipbox-container.".concat(blockId, "{\n\t\t ").concat(wrapperMarginStylesMobile, "\n\t\t ").concat(wrapperPaddingStylesMobile, "\n\t\t ").concat(wrapperHeightStylesMobile, "\n\t\t ").concat(wrapperWidthStylesMobile, "\n\t }\n\t ");
  var itemsContainerStyle = "\n\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-items-container {\n\t\talign-items: ").concat(getFlexAlign(align), ";\n\t }\n\t"); // prefix title styles css in strings ⬇

  var titleStylesDesktop = "\n\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-front-title, .eb-flipbox-container.").concat(blockId, " .eb-flipbox-back-title {\n\t\t ").concat(titleTypoStylesDesktop, "\n\t\t width: 100%;\n\t\t text-align: ").concat(align, ";\n\t }\n \n\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-front-title {\n\t\t color: ").concat(frontTitleColor || deafultFrontTitleColor, ";\n\t }\n \n\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-back-title {\n\t\t color: ").concat(backTitleColor || defaultBackTitleColor, ";\n\t }\n\t ");
  var titleStylesTab = "\n\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-front-title, .eb-flipbox-container.").concat(blockId, " .eb-flipbox-back-title {\n\t\t ").concat(titleTypoStylesTab, "\n\t }\n\t ");
  var titleStylesMobile = "\n\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-front-title, .eb-flipbox-container.").concat(blockId, " .eb-flipbox-back-title {\n\t\t ").concat(titleTypoStylesMobile, "\n\t }\n\t "); // prefix content styles css in strings ⬇

  var contentStylesDesktop = "\n\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-front-content, .eb-flipbox-container.").concat(blockId, " .eb-flipbox-back-content {\n\t\t ").concat(contentTypoStylesDesktop, "\n\t\t width: 100%;\n\t\t text-align: ").concat(align, ";\n\t\t margin: 10px 0;\n\t }\n \n\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-front-content {\n\t\t color: ").concat(frontContentColor || defaultFrontContentColor, ";\n\t }\n \n\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-back-content {\n\t\t color: ").concat(backContentColor || defautlBackContentColor, ";\n\t }\n\t ");
  var contentStylesTab = "\n\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-front-content, .eb-flipbox-container.").concat(blockId, " .eb-flipbox-back-content {\n\t\t ").concat(contentTypoStylesTab, "\n\t }\n\t ");
  var contentStylesMobile = "\n\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-front-content, .eb-flipbox-container.").concat(blockId, " .eb-flipbox-back-content {\n\t\t ").concat(contentTypoStylesMobile, "\n\t }\n\t "); // flipper style

  var flipperStyle = "\n\t .eb-flipbox-container.".concat(blockId, " .eb-flipper {\n\t\t transition: ").concat(transitionSpeed ? transitionSpeed / 1000 : 0.6, "s\n\t }\n\t .eb-flipbox-container.").concat(blockId, " .eb-flipper.back-is-selected {\n\t\t transform:\n\t\t\t  ").concat(isHover || selectedSide === "back" ? Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["getFlipTransform"])(flipType) : "none", ";\n\t }\n\t ");
  var frontStyleDesktop = "\n\t\t.eb-flipbox-container.".concat(blockId, " .eb-flipper .eb-flipbox-front {\n\t\t\t").concat(frontBackgroundStylesDesktop, "\n\t\t\t").concat(wrapperMinHeightStylesDesktop, "\n\t\t\t").concat(wrapperWidthStylesDesktop, "\n\t\t\t").concat(bdShadowStyesDesktop, "\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\theight: auto;\n\t\t\twidth: 100%;\n\t\t\tz-index: 1;\n\t\t\ttransition: ").concat(flipType === "fade" && "opacity 0.6s", ";\n\t\t}\n\t\t\n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-front:hover {\n\t\t\t").concat(frontHoverBackgroundStylesDesktop, "\n\t\t\t").concat(bdShadowStylesHoverDesktop, "\n\t\t}\n\n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-front:before{\n\t\t\t").concat(frontOverlayStylesDesktop, "\n\t\t}\n\n\t\t\n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-front:hover:before{\n\t\t\t").concat(frontHoverOverlayStylesDesktop, "\n\t\t}\n\n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper.back-is-selected .eb-flipbox-front {\n\t\t\topacity: ").concat((isHover || selectedSide === "front") && flipType === "fade" && 0, ";\n\t\t}\n\t ");
  var frontStyleTab = "\n\t\t .eb-flipbox-container.".concat(blockId, " .eb-flipper .eb-flipbox-front {\n\t\t\t").concat(wrapperMinHeightStylesTab, "\n\t\t\t").concat(wrapperWidthStylesTab, "\n\t\t\t").concat(frontBackgroundStylesTab, "\n\t\t\t").concat(bdShadowStyesTab, "\n\t\t }\n\n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-front:hover {\n\t\t\t").concat(frontHoverBackgroundStylesTab, "\n\t\t\t").concat(bdShadowStylesHoverTab, "\n\t\t}\n\n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-front:before{\n\t\t\t").concat(frontOverlayStylesTab, "\n\t\t}\n\t\t\t\t\n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-front:hover:before{\n\t\t\t").concat(frontHoverOverlayStylesTab, "\n\t\t}\n\n\t ");
  var frontStyleMobile = "\n\t\t .eb-flipbox-container.".concat(blockId, " .eb-flipper .eb-flipbox-front {\n\t\t\t ").concat(wrapperMinHeightStylesMobile, "\n\t\t\t ").concat(wrapperWidthStylesMobile, "\n\t\t\t").concat(frontBackgroundStylesMobile, "\n\t\t\t").concat(bdShadowStyesMobile, "\n\t\t }\n\t\t \n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-front:hover {\n\t\t\t").concat(frontHoverBackgroundStylesMobile, "\n\t\t\t").concat(bdShadowStylesHoverMobile, "\n\t\t}\n\n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-front:before{\n\t\t\t").concat(frontOverlayStylesMobile, "\n\t\t}\n\n\t\t\n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-front:hover:before{\n\t\t\t").concat(frontHoverOverlayStylesMobile, "\n\t\t}\n\t ");
  var frontImageStyleDesktop = "\n\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-front .eb-flipbox-front-image-container {\n\t\t display: ").concat(frontIconOrImage === "image" && frontImageUrl ? "flex" : "none", ";\n\t\t justify-content: center;\n\t }\n \n\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-front .eb-flipbox-front-image-container img {\n\t\t ").concat(frontImgHeightDesktop, "\n\t\t ").concat(frontImgWidthDesktop, "\n\t\t ").concat(frontImgRadiusDesktop, "\n\t }\n\t ");
  var frontImageStyleTab = "\n\t.eb-flipbox-container.".concat(blockId, " .eb-flipbox-front .eb-flipbox-front-image-container img {\n\t\t").concat(frontImgHeightTab, "\n\t\t ").concat(frontImgWidthTab, "\n\t\t ").concat(frontImgRadiusTab, "\n\t}\n\t");
  var frontImageStyleMobile = "\n\t.eb-flipbox-container.".concat(blockId, " .eb-flipbox-front .eb-flipbox-front-image-container img {\n\t\t").concat(frontImgHeightMobile, "\n\t\t ").concat(frontImgWidthMobile, "\n\t\t ").concat(frontImgRadiusMobile, "\n\t}\n\t");
  var frontIconStyleDesktop = "\n\t\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-icon-front {\n\t\t\t ").concat(frontFontSizeDesktop, "\n\t\t\t ").concat(frontIconMarginStylesDesktop, "\n\t\t\t ").concat(frontIconPaddingStylesDesktop, "\n\t\t\t ").concat(frontIconBorderDesktop, "\n\t\t\t color: ").concat(frontIconColor || "#ffffff", ";\n\t\t\t background: ").concat(frontIconBackground || defaultFrontIconBackground, ";\n\t\t\t width: 100%;\n\t\t\t text-align:").concat(align, ";\n\t\t\t display: ").concat(frontIconOrImage === "icon" && frontIcon ? "block" : "none", ";\n\t\t }\n\n\t\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-icon-front:hover {\n\t\t\t ").concat(frontIconBorderHoverDesktop, "\n\t\t }\n\t ");
  var frontIconStyleTab = "\n\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-icon-front {\n\t\t").concat(frontFontSizeTab, "\n\t\t").concat(frontIconMarginStylesTab, "\n\t\t").concat(frontIconPaddingStylesTab, "\n\t\t").concat(frontIconBorderTab, "\n\t }\n\n\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-icon-front:hover {\n\t\t").concat(frontIconBorderHoverTab, "\n\t}\n\t ");
  var frontIconStyleMobile = "\n\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-icon-front {\n\t\t").concat(frontFontSizeMobile, "\n\t\t").concat(frontIconMarginStylesMobile, "\n\t\t").concat(frontIconPaddingStylesMobile, "\n\t\t").concat(frontIconBorderMobile, "\n\t }\n\n\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-icon-front:hover {\n\t\t").concat(frontIconBorderHoverMobile, "\n\t}\n\t ");
  var backStyleDesktop = "\n\n\t .eb-flipbox-container.".concat(blockId, " .eb-flipper .eb-flipbox-back {\t\n\t\t").concat(backBackgroundStylesDesktop, "\n\t\t").concat(wrapperMinHeightStylesDesktop, "\n\t\t").concat(wrapperWidthStylesDesktop, "\n\t\t").concat(bdShadowStyesDesktop, "\n\t\t display: flex;\n\t\t flex-direction: column;\n\t\t justify-content: center;\n\t\t align-items: center;\n\t\t height: auto;\n\t\t width: 100%;\n\t\t transform:  ").concat(flipType === "flip-up" && "rotateX(-180deg)" || flipType === "flip-bottom" && "rotateX(180deg)" || (flipType === "zoom-in" || flipType === "zoom-out" || flipType === "fade") && "none", ";\n\t\ttransition: ").concat(flipType === "fade" && "opacity 0.6s", ";\n\t\t cursor: ").concat(linkType === "box" && link ? "pointer" : "default", ";\n\t\t ").concat(isHover && (flipType === "zoom-in" || flipType === "zoom-out") ? "z-index: 5;" : "", "\n\t }\n\n\t .eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-back:hover {\n\t\t").concat(backHoverBackgroundStylesDesktop, "\n\t\t").concat(bdShadowStylesHoverDesktop, "\n\t }\n\n\t \n\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-back:before{\n\t\t").concat(backOverlayStylesDesktop, "\n\t}\n\t\n\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-back:hover:before{\n\t\t").concat(backHoverOverlayStylesDesktop, "\n\t}\n\n\n\t .eb-flipbox-container.").concat(blockId, " .eb-flipper.back-is-selected .eb-flipbox-back {\n\t\topacity: ").concat((isHover || selectedSide === "back") && flipType === "fade" && 1, ";\n\t }\n\t \n\t .eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-front,\n\t .eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-back{\n\t\tposition: absolute;\n\t }\n\n\n\t ");
  var backStyleTab = "\n\t\t .eb-flipbox-container.".concat(blockId, " .eb-flipper .eb-flipbox-back {\n\t\t\t ").concat(wrapperMinHeightStylesTab, "\n\t\t\t ").concat(wrapperWidthStylesTab, "\n\t\t\t ").concat(backBackgroundStylesTab, "\n\t\t\t ").concat(bdShadowStyesTab, "\n\t\t }\n\n\t\t .eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-back:hover {\n\t\t\t").concat(backHoverBackgroundStylesTab, "\n\t\t\t").concat(bdShadowStylesHoverTab, "\n\t\t }\t\n\t\t \n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-back:before{\n\t\t\t").concat(backOverlayStylesTab, "\n\t\t}\n\t\t\n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-back:hover:before{\n\t\t\t").concat(backHoverOverlayStylesTab, "\n\t\t}\n\t\n\t ");
  var backStyleMobile = "\n\t\t .eb-flipbox-container.".concat(blockId, " .eb-flipper .eb-flipbox-back {\n\t\t\t ").concat(wrapperMinHeightStylesMobile, "\n\t\t\t ").concat(wrapperWidthStylesMobile, "\n\t\t\t ").concat(backBackgroundStylesMobile, "\n\t\t\t ").concat(bdShadowStyesMobile, "\n\t\t\t ").concat(bdShadowStylesHoverMobile, "\n\t\t }\n\n\t\t .eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-back:hover {\n\t\t\t").concat(backHoverBackgroundStylesMobile, "\n\t\t\t").concat(bdShadowStylesHoverMobile, "\n\t\t }\n\t\t \n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-back:before{\n\t\t\t").concat(backOverlayStylesMobile, "\n\t\t}\n\t\t\n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-back:hover:before{\n\t\t\t").concat(backHoverOverlayStylesMobile, "\n\t\t}\n\t ");
  var backImageStyleDesktop = "\n\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-back .eb-flipbox-back-image-container {\n\t\t display: ").concat(backIconOrImage === "image" && backImageUrl ? "flex" : "none", ";\n\t\t justify-content: center;\n\t }\n \n\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-back .eb-flipbox-back-image-container img {\n\t\t ").concat(backImgHeightDesktop, "\n\t\t ").concat(backImgWidthDesktop, "\n\t\t ").concat(backImgRadiusDesktop, "\n\t }\n\t ");
  var backImageStyleTab = "\n \n\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-back .eb-flipbox-back-image-container img {\n\t\t ").concat(backImgHeightTab, "\n\t\t ").concat(backImgWidthTab, "\n\t\t ").concat(backImgRadiusTab, "\n\t }\n\t ");
  var backImageStyleMobile = "\n \n\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-back .eb-flipbox-back-image-container img {\n\t\t ").concat(backImgHeightMobile, "\n\t\t ").concat(backImgWidthMobile, "\n\t\t ").concat(backImgRadiusMobile, "\n\t }\n\t ");
  var backIconStyleDesktop = "\n\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-icon-back {\n\t\t ").concat(backFontSizeDesktop, "\n\t\t ").concat(backIconMarginStylesDesktop, "\n\t\t ").concat(backIconPaddingStylesDesktop, "\n\t\t ").concat(backIconBorderDesktop, "\n\t\t color: ").concat(backIconColor || "#ffffff", ";\n\t\t background: ").concat(backIconBackground || defaultBackIconBackground, ";\n\t\t width: 100%;\n\t\t text-align: ").concat(align, ";\n\t\t display: ").concat(backIconOrImage === "icon" && backIcon ? "block" : "none", ";\n\t }\n\n\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-icon-back:hover {\n\t\t ").concat(backIconBorderHoverDesktop, "\n\t }\n\t ");
  var backIconStyleTab = "\n\t.eb-flipbox-container.".concat(blockId, " .eb-flipbox-icon-back {\n\t\t").concat(backFontSizeTab, "\n\t\t").concat(backIconMarginStylesTab, "\n\t\t").concat(backIconPaddingStylesTab, "\n\t\t").concat(backIconBorderTab, "\n\t}\n\n\t.eb-flipbox-container.").concat(blockId, " .eb-flipbox-icon-back:hover {\n\t\t").concat(backIconBorderHoverTab, "\n\t}\n\t");
  var backIconStyleMobile = "\n\t.eb-flipbox-container.".concat(blockId, " .eb-flipbox-icon-back {\n\t\t").concat(backFontSizeMobile, "\n\t\t").concat(backIconMarginStylesMobile, "\n\t\t").concat(backIconPaddingStylesMobile, "\n\t\t").concat(backIconBorderMobile, "\n\t}\n\n\t.eb-flipbox-container.").concat(blockId, " .eb-flipbox-icon-back:hover {\n\t\t").concat(backIconBorderHoverMobile, "\n\t}\n\t");
  var backButtonStyleDesktop,
      backButtonStyleTab,
      backButtonStyleMobile = "";

  if (buttonStyle === "custom") {
    var _generateDimensionsCo7 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateDimensionsControlStyles"])({
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_2__["buttonPadding"],
      styleFor: "padding",
      attributes: attributes
    }),
        buttonPaddingStylesDesktop = _generateDimensionsCo7.dimensionStylesDesktop,
        buttonPaddingStylesTab = _generateDimensionsCo7.dimensionStylesTab,
        buttonPaddingStylesMobile = _generateDimensionsCo7.dimensionStylesMobile; // border & shadow controller


    var _generateBorderShadow4 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateBorderShadowStyles"])({
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_6__["borderShadowBtn"],
      attributes: attributes
    }),
        btnBdShadowStyesDesktop = _generateBorderShadow4.styesDesktop,
        btnBdShadowStyesTab = _generateBorderShadow4.styesTab,
        btnBdShadowStyesMobile = _generateBorderShadow4.styesMobile,
        btnBdShadowStylesHoverDesktop = _generateBorderShadow4.stylesHoverDesktop,
        btnBdShadowStylesHoverTab = _generateBorderShadow4.stylesHoverTab,
        btnBdShadowStylesHoverMobile = _generateBorderShadow4.stylesHoverMobile; // button size


    var _generateResponsiveRa12 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["generateResponsiveRangeStyles"])({
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_5__["buttonIconSizeAttr"],
      property: "width",
      attributes: attributes
    }),
        buttonSizeDesktop = _generateResponsiveRa12.rangeStylesDesktop,
        buttonSizeTab = _generateResponsiveRa12.rangeStylesTab,
        buttonSizeMobile = _generateResponsiveRa12.rangeStylesMobile;

    backButtonStyleDesktop = "\n\t\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-button-container .eb-flipbox-button-link {\n\t\t\t ").concat(buttonPaddingStylesDesktop, "\n\t\t\t ").concat(btnBdShadowStyesDesktop, "\n\t\t\t ").concat(buttonSizeDesktop, "\n\t\t\t background: ").concat(buttonBackground, ";\n\t\t\t color: ").concat(buttonColor, ";\n\t\t }\n\n\t\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-button-container .eb-flipbox-button-link:hover {\n\t\t\t ").concat(btnBdShadowStylesHoverDesktop, "\n\t\t }\n \n\t\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-button-container .eb-flipbox-button-content {\n\t\t\t display: flex;\n\t\t\t flex-direction: ").concat(buttonIconPos === "after" ? "row" : "row-reverse", ";\n\t\t\t justify-content: space-around;\n\t\t\t align-items: center;\n\t\t }\n \n\t\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-button-container .eb-flipbox-button-content .eb-flipbox-button-icon {\n\t\t\t display: ").concat(displayButtonIcon ? "block" : "none", ";\n\t\t }\n\t\t ");
    backButtonStyleTab = "\n\t\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-button-container .eb-flipbox-button-link {\n\t\t\t ").concat(buttonPaddingStylesTab, "\n\t\t\t ").concat(btnBdShadowStyesTab, "\n\t\t\t ").concat(buttonSizeTab, "\n\t\t }\n\n\t\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-button-container .eb-flipbox-button-link:hover {\n\t\t\t").concat(buttonPaddingStylesTab, "\n\t\t\t").concat(btnBdShadowStylesHoverTab, "\n\t\t}\n\t\t ");
    backButtonStyleMobile = "\n\t\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-button-container .eb-flipbox-button-link {\n\t\t\t ").concat(buttonPaddingStylesMobile, "\n\t\t\t ").concat(btnBdShadowStyesMobile, "\n\t\t\t ").concat(buttonSizeMobile, "\n\t\t }\n\n\t\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-button-container .eb-flipbox-button-link:hover {\n\t\t\t ").concat(btnBdShadowStylesHoverMobile, "\n\t\t }\n\t\t ");
  } // all css styles for large screen width (desktop/laptop) in strings ⬇


  var desktopAllStyles = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["softMinifyCssStrings"])("\n\t\t ".concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(itemsContainerStyle) ? itemsContainerStyle : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(flipContainerStyleDesktop) ? flipContainerStyleDesktop : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(titleStylesDesktop) ? titleStylesDesktop : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(contentStylesDesktop) ? contentStylesDesktop : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(flipperStyle) ? flipperStyle : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(frontStyleDesktop) ? frontStyleDesktop : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(frontImageStyleDesktop) ? frontImageStyleDesktop : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(frontIconStyleDesktop) ? frontIconStyleDesktop : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(backIconStyleDesktop) ? backIconStyleDesktop : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(backStyleDesktop) ? backStyleDesktop : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(backImageStyleDesktop) ? backImageStyleDesktop : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(backButtonStyleDesktop) ? backButtonStyleDesktop : " ", "\n\t ")); // all css styles for Tab in strings ⬇

  var tabAllStyles = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["softMinifyCssStrings"])("\n\t\t ".concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(flipContainerStyleTab) ? flipContainerStyleTab : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(titleStylesTab) ? titleStylesTab : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(contentStylesTab) ? contentStylesTab : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(backButtonStyleTab) ? backButtonStyleTab : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(frontStyleTab) ? frontStyleTab : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(backStyleTab) ? backStyleTab : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(frontIconStyleTab) ? frontIconStyleTab : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(backIconStyleTab) ? backIconStyleTab : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(frontImageStyleTab) ? frontImageStyleTab : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(backImageStyleTab) ? backImageStyleTab : " ", "\n\t ")); // all css styles for Mobile in strings ⬇

  var mobileAllStyles = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["softMinifyCssStrings"])("\n\t\t ".concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(flipContainerStyleMobile) ? flipContainerStyleMobile : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(titleStylesMobile) ? titleStylesMobile : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(contentStylesMobile) ? contentStylesMobile : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(backButtonStyleMobile) ? backButtonStyleMobile : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(frontStyleMobile) ? frontStyleMobile : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(backStyleMobile) ? backStyleMobile : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(frontIconStyleMobile) ? frontIconStyleMobile : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(backIconStyleMobile) ? backIconStyleMobile : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(frontImageStyleMobile) ? frontImageStyleMobile : " ", "\n\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["isCssExists"])(backImageStyleMobile) ? backImageStyleMobile : " ", "\n\t ")); // Set All Style in "blockMeta" Attribute

  useEffect(function () {
    var styleObject = {
      desktop: desktopAllStyles,
      tab: tabAllStyles,
      mobile: mobileAllStyles
    };

    if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
      setAttributes({
        blockMeta: styleObject
      });
    }
  }, [attributes]); // this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class

  useEffect(function () {
    setAttributes({
      resOption: select("core/edit-post").__experimentalGetPreviewDeviceType()
    });
  }, []); // this useEffect is for creating an unique id for each block's unique className by a random unique number

  useEffect(function () {
    var BLOCK_PREFIX = "eb-flipbox";
    Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["duplicateBlockIdFix"])({
      BLOCK_PREFIX: BLOCK_PREFIX,
      blockId: blockId,
      setAttributes: setAttributes,
      select: select,
      clientId: clientId
    });
  }, []); // this useEffect is for mimmiking css when responsive options clicked from wordpress's 'preview' button

  useEffect(function () {
    Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["mimmikCssForPreviewBtnClick"])({
      domObj: document,
      select: select
    });
  }, []);
  var blockProps = useBlockProps({
    className: "eb-guten-block-main-parent-wrapper"
  });
  return [isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
  React.createElement("div", blockProps, /*#__PURE__*/React.createElement("style", null, "\n\t\t\t\t ".concat(desktopAllStyles, "\n \n\t\t\t\t /* mimmikcssStart */\n \n\t\t\t\t ").concat(resOption === "Tablet" ? tabAllStyles : " ", "\n\t\t\t\t ").concat(resOption === "Mobile" ? tabAllStyles + mobileAllStyles : " ", "\n \n\t\t\t\t /* mimmikcssEnd */\n \n\t\t\t\t @media all and (max-width: 1024px) {\t\n \n\t\t\t\t\t /* tabcssStart */\t\t\t\n\t\t\t\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["softMinifyCssStrings"])(tabAllStyles), "\n\t\t\t\t\t /* tabcssEnd */\t\t\t\n\t\t\t\t \n\t\t\t\t }\n\t\t\t\t \n\t\t\t\t @media all and (max-width: 767px) {\n\t\t\t\t\t \n\t\t\t\t\t /* mobcssStart */\t\t\t\n\t\t\t\t\t ").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["softMinifyCssStrings"])(mobileAllStyles), "\n\t\t\t\t\t /* mobcssEnd */\t\t\t\n\t\t\t\t \n\t\t\t\t }\n\t\t\t\t ")), /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-container ".concat(blockId),
    "data-id": blockId,
    onMouseEnter: function onMouseEnter() {
      return setAttributes({
        isHover: true
      });
    },
    onMouseLeave: function onMouseLeave() {
      return setAttributes({
        isHover: false
      });
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-flipper".concat(isHover || selectedSide === "back" ? " back-is-selected" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-front"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-items-container"
  }, frontIconOrImage !== "none" && /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-icon-wrapper"
  }, frontIconOrImage === "image" && frontImageUrl && /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-front-image-container"
  }, /*#__PURE__*/React.createElement("img", {
    src: frontImageUrl
  })), frontIconOrImage === "icon" && frontIcon && /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-icon-front",
    "data-icon": frontIcon
  }, /*#__PURE__*/React.createElement("span", {
    className: frontIcon
  }))), showFrontTitle && /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-front-title-wrapper"
  }, linkType === "title" && link ? /*#__PURE__*/React.createElement("a", {
    href: link ? link : "#",
    className: "title-link"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "eb-flipbox-front-title"
  }, frontTitle)) : /*#__PURE__*/React.createElement("h3", {
    className: "eb-flipbox-front-title"
  }, frontTitle)), showFrontContent && /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-front-content-wrapper"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eb-flipbox-front-content"
  }, frontContent)))), /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-back"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-items-container"
  }, backIconOrImage !== "none" && /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-icon-wrapper"
  }, backIconOrImage === "image" && backImageUrl && /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-back-image-container"
  }, /*#__PURE__*/React.createElement("img", {
    src: backImageUrl
  })), backIconOrImage === "icon" && backIcon && /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-icon-back",
    "data-icon": backIcon
  }, /*#__PURE__*/React.createElement("span", {
    className: backIcon
  }))), showBackTitle && /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-back-title-wrapper"
  }, linkType === "title" && link ? /*#__PURE__*/React.createElement("a", {
    href: link ? link : "#",
    className: "title-link"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "eb-flipbox-back-title"
  }, backTitle)) : /*#__PURE__*/React.createElement("h3", {
    className: "eb-flipbox-back-title"
  }, backTitle)), showBackContent && /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-back-content-wrapper"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eb-flipbox-back-content"
  }, backContent)), linkType === "button" && /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-button-container"
  }, /*#__PURE__*/React.createElement("a", {
    className: "eb-flipbox-button-link ".concat(buttonClasses),
    href: link ? link : "#"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-button-content"
  }, /*#__PURE__*/React.createElement("span", null, buttonText), buttonIcon && /*#__PURE__*/React.createElement("i", {
    className: "".concat(buttonIcon, " eb-flipbox-button-icon")
  })))))))))];
}

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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








Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])("flipbox/flipbox-block", {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Flipbox"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Deliver Your Content Beautifully To Grab Attention"),
  category: "widgets",
  keywords: ["flipbox", "flip", "box"],
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
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _util_faIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/faIcons */ "./util/faIcons.js");
/* harmony import */ var _util_image_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/image-avatar */ "./util/image-avatar/index.js");
/* harmony import */ var _util_border_shadow_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/border-shadow-control */ "./util/border-shadow-control/index.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/helpers */ "./util/helpers/index.js");
/* harmony import */ var _util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/dimensions-control-v2 */ "./util/dimensions-control-v2/index.js");
/* harmony import */ var _util_responsive_range_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/responsive-range-control */ "./util/responsive-range-control/index.js");
/* harmony import */ var _util_typography_control_v2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/typography-control-v2 */ "./util/typography-control-v2/index.js");
/* harmony import */ var _util_color_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/color-control */ "./util/color-control/index.js");
/* harmony import */ var _util_background_control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/background-control */ "./util/background-control/index.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./constants/dimensionsNames */ "./src/constants/dimensionsNames.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var useEffect = wp.element.useEffect;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    RangeControl = _wp$components.RangeControl,
    ToggleControl = _wp$components.ToggleControl,
    ButtonGroup = _wp$components.ButtonGroup,
    BaseControl = _wp$components.BaseControl,
    TabPanel = _wp$components.TabPanel;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    MediaUpload = _wp$blockEditor.MediaUpload;
var select = wp.data.select;

/*
 * Internal dependencies
 */


















var Inspector = function Inspector(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var resOption = attributes.resOption,
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
      showFrontTitle = attributes.showFrontTitle,
      frontTitle = attributes.frontTitle,
      showFrontContent = attributes.showFrontContent,
      frontContent = attributes.frontContent,
      showBackTitle = attributes.showBackTitle,
      backTitle = attributes.backTitle,
      showBackContent = attributes.showBackContent,
      backContent = attributes.backContent,
      linkType = attributes.linkType,
      buttonText = attributes.buttonText,
      buttonIcon = attributes.buttonIcon,
      buttonIconPos = attributes.buttonIconPos,
      link = attributes.link,
      frontTitleColor = attributes.frontTitleColor,
      backTitleColor = attributes.backTitleColor,
      frontContentColor = attributes.frontContentColor,
      backContentColor = attributes.backContentColor,
      frontIconColor = attributes.frontIconColor,
      backIconColor = attributes.backIconColor,
      buttonStyle = attributes.buttonStyle,
      buttonBackground = attributes.buttonBackground,
      buttonColor = attributes.buttonColor,
      frontIconBackground = attributes.frontIconBackground,
      backIconBackground = attributes.backIconBackground,
      transitionSpeed = attributes.transitionSpeed,
      displayButtonIcon = attributes.displayButtonIcon; // Genereate different button styles

  var handleButtonStyle = function handleButtonStyle(newStyle) {
    var buttonStyle = newStyle;
    var buttonClasses = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["getButtonClasses"])(newStyle);
    setAttributes({
      buttonStyle: buttonStyle,
      buttonClasses: buttonClasses
    });
  }; // this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once


  useEffect(function () {
    setAttributes({
      resOption: select("core/edit-post").__experimentalGetPreviewDeviceType()
    });
  }, []); // this useEffect is for mimmiking css for all the eb blocks on resOption changing

  useEffect(function () {
    Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["mimmikCssForResBtns"])({
      domObj: document,
      resOption: resOption
    });
  }, [resOption]); // this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM

  useEffect(function () {
    var cleanUp = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__["mimmikCssOnPreviewBtnClickWhileBlockSelected"])({
      domObj: document,
      select: select,
      setAttributes: setAttributes
    });
    return function () {
      cleanUp();
    };
  }, []);
  var resRequiredProps = {
    setAttributes: setAttributes,
    resOption: resOption,
    attributes: attributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"]
  };
  return /*#__PURE__*/React.createElement(InspectorControls, {
    keys: "controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-panel-control"
  }, /*#__PURE__*/React.createElement(TabPanel, {
    className: "eb-parent-tab-panel",
    activeClass: "active-tab",
    tabs: [{
      name: "general",
      title: "General",
      className: "eb-tab general"
    }, {
      name: "styles",
      title: "Styles",
      className: "eb-tab styles"
    }]
  }, function (tab) {
    return /*#__PURE__*/React.createElement("div", {
      className: "eb-tab-controls" + tab.name
    }, tab.name === "general" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PanelBody, null, /*#__PURE__*/React.createElement(BaseControl, {
      label: __("Selected Side")
    }, /*#__PURE__*/React.createElement(ButtonGroup, {
      id: "eb-flipbox-sides"
    }, _constants__WEBPACK_IMPORTED_MODULE_5__["FLIPBOX_SIDES"].map(function (item) {
      return /*#__PURE__*/React.createElement(Button, {
        isLarge: true,
        isPrimary: selectedSide === item.value,
        isSecondary: selectedSide !== item.value,
        onClick: function onClick() {
          return setAttributes({
            selectedSide: item.value
          });
        }
      }, item.label);
    })))), /*#__PURE__*/React.createElement(PanelBody, {
      title: __("Flipbox Settings"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_util_responsive_range_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      baseLabel: __("Box Height", "flipbox"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_16__["boxHeightAttr"],
      resRequiredProps: resRequiredProps,
      min: 310,
      max: 600,
      step: 1,
      noUnits: true
    }), /*#__PURE__*/React.createElement(_util_responsive_range_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      baseLabel: __("Box Width", "flipbox"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_16__["boxWidthAttr"],
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 600,
      step: 1,
      noUnits: true
    }), /*#__PURE__*/React.createElement(SelectControl, {
      label: __("Flipbox Type"),
      value: flipType,
      options: _constants__WEBPACK_IMPORTED_MODULE_5__["FLIPBOX_TYPE"],
      onChange: function onChange(newStyle) {
        return setAttributes({
          flipType: newStyle
        });
      }
    }), /*#__PURE__*/React.createElement(RangeControl, {
      label: __("Transition Speed(millisecond)"),
      value: transitionSpeed,
      onChange: function onChange(newValue) {
        var transitionSpeed = newValue;
        setAttributes({
          transitionSpeed: transitionSpeed
        });
      },
      min: 0,
      max: 5000,
      step: 500
    }), selectedSide === "front" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
      label: __("Icon Type"),
      id: "eb-flipbox-icon-type"
    }, /*#__PURE__*/React.createElement(ButtonGroup, {
      id: "eb-flipbox-icon-type"
    }, _constants__WEBPACK_IMPORTED_MODULE_5__["ICON_TYPE"].map(function (item) {
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
    })))), selectedSide === "back" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
      label: __("Icon Type"),
      id: "eb-flipbox-icon-type"
    }, /*#__PURE__*/React.createElement(ButtonGroup, {
      id: "eb-flipbox-icon-type"
    }, _constants__WEBPACK_IMPORTED_MODULE_5__["ICON_TYPE"].map(function (item) {
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
      title: __("Front Icon Settings"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
      label: __("Select Front Icon")
    }, /*#__PURE__*/React.createElement(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_4___default.a, {
      icons: _util_faIcons__WEBPACK_IMPORTED_MODULE_1__["default"],
      value: frontIcon,
      onChange: function onChange(frontIcon) {
        return setAttributes({
          frontIcon: frontIcon
        });
      },
      appendTo: "body",
      closeOnSelect: true
    })), frontIcon && /*#__PURE__*/React.createElement(_util_responsive_range_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      baseLabel: __("Icon Size", "flipbox"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_16__["boxFrontIconSizeAttr"],
      resRequiredProps: resRequiredProps,
      min: 8,
      max: 100
    }))), selectedSide === "front" && frontIconOrImage === "image" && /*#__PURE__*/React.createElement(PanelBody, {
      title: __("Front Image Settings"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(BaseControl, {
      label: __("Flipbox Image"),
      id: "eb-flipbox-front-image"
    }, frontImageUrl ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_image_avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      imageUrl: frontImageUrl,
      onDeleteImage: function onDeleteImage() {
        return setAttributes({
          frontImageUrl: null
        });
      }
    }), /*#__PURE__*/React.createElement(_util_responsive_range_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      baseLabel: __("Image Size", "flipbox"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_16__["frontImgSizeAttr"],
      resRequiredProps: resRequiredProps,
      units: _constants__WEBPACK_IMPORTED_MODULE_5__["FRONT_IMAGE_UNITS"],
      min: 0,
      max: 300,
      step: 1
    }), /*#__PURE__*/React.createElement(_util_responsive_range_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      baseLabel: __("Image Radius", "flipbox"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_16__["frontImgRadiusAttr"],
      resRequiredProps: resRequiredProps,
      units: _constants__WEBPACK_IMPORTED_MODULE_5__["FRONT_IMAGE_UNITS"],
      min: 0,
      max: 100
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
      title: __("Back Icon Settings"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
      label: __("Select Back Icon"),
      id: "eb-flipbox-back-icon"
    }, /*#__PURE__*/React.createElement(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_4___default.a, {
      icons: _util_faIcons__WEBPACK_IMPORTED_MODULE_1__["default"],
      value: backIcon,
      onChange: function onChange(backIcon) {
        return setAttributes({
          backIcon: backIcon
        });
      },
      appendTo: "body",
      closeOnSelect: true
    })), backIcon && /*#__PURE__*/React.createElement(_util_responsive_range_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      baseLabel: __("Icon Size", "flipbox"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_16__["boxBackIconSizeAttr"],
      resRequiredProps: resRequiredProps,
      min: 8,
      max: 100
    }))), selectedSide === "back" && backIconOrImage === "image" && /*#__PURE__*/React.createElement(PanelBody, {
      title: __("Back Image Settings"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(BaseControl, {
      label: __("Flipbox Image")
    }, backImageUrl ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_image_avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      imageUrl: backImageUrl,
      onDeleteImage: function onDeleteImage() {
        return setAttributes({
          backImageUrl: null
        });
      }
    }), /*#__PURE__*/React.createElement(_util_responsive_range_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      baseLabel: __("Image Size", "flipbox"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_16__["backImgSizeAttr"],
      resRequiredProps: resRequiredProps,
      units: _constants__WEBPACK_IMPORTED_MODULE_5__["FRONT_IMAGE_UNITS"],
      min: 0,
      max: 300
    }), /*#__PURE__*/React.createElement(_util_responsive_range_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      baseLabel: __("Image Radius", "flipbox"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_16__["backImgRadiusAttr"],
      resRequiredProps: resRequiredProps,
      units: _constants__WEBPACK_IMPORTED_MODULE_5__["FRONT_IMAGE_UNITS"],
      min: 0,
      max: 100
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
    }, selectedSide === "front" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ToggleControl, {
      label: __("Show Title?"),
      checked: showFrontTitle,
      onChange: function onChange() {
        setAttributes({
          showFrontTitle: !showFrontTitle
        });
      }
    }), showFrontTitle && /*#__PURE__*/React.createElement(TextControl, {
      label: __("Front Title"),
      value: frontTitle,
      onChange: function onChange(newText) {
        return setAttributes({
          frontTitle: newText
        });
      }
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      label: __("Show Content?"),
      checked: showFrontContent,
      onChange: function onChange() {
        setAttributes({
          showFrontContent: !showFrontContent
        });
      }
    }), showFrontContent && /*#__PURE__*/React.createElement(TextareaControl, {
      label: __("Front Content"),
      value: frontContent,
      onChange: function onChange(newText) {
        return setAttributes({
          frontContent: newText
        });
      }
    })), selectedSide === "back" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ToggleControl, {
      label: __("Show Title?"),
      checked: showBackTitle,
      onChange: function onChange() {
        setAttributes({
          showBackTitle: !showBackTitle
        });
      }
    }), showBackTitle && /*#__PURE__*/React.createElement(TextControl, {
      label: __("Back Title"),
      value: backTitle,
      onChange: function onChange(newText) {
        return setAttributes({
          backTitle: newText
        });
      }
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      label: __("Show Content?"),
      checked: showBackContent,
      onChange: function onChange() {
        setAttributes({
          showBackContent: !showBackContent
        });
      }
    }), showBackContent && /*#__PURE__*/React.createElement(TextareaControl, {
      label: __("Back Content"),
      value: backContent,
      onChange: function onChange(newText) {
        return setAttributes({
          backContent: newText
        });
      }
    }))), /*#__PURE__*/React.createElement(PanelBody, {
      title: __("Link Settings"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement("em", null, __("Note: Link settings will only work on back side."))), /*#__PURE__*/React.createElement(BaseControl, {
      label: __("Link Type"),
      id: "eb-flipbox-link-type"
    }, /*#__PURE__*/React.createElement(ButtonGroup, {
      id: "eb-flipbox-link-type"
    }, _constants__WEBPACK_IMPORTED_MODULE_5__["LINK_TYPE"].map(function (item) {
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
    }), /*#__PURE__*/React.createElement(SelectControl, {
      label: __("Button Style"),
      value: buttonStyle,
      options: _constants__WEBPACK_IMPORTED_MODULE_5__["BUTTON_STYLES"],
      onChange: function onChange(newStyle) {
        return handleButtonStyle(newStyle);
      }
    }))), tab.name === "styles" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PanelBody, null, /*#__PURE__*/React.createElement(BaseControl, {
      label: __("Selected Side")
    }, /*#__PURE__*/React.createElement(ButtonGroup, {
      id: "eb-flipbox-sides"
    }, _constants__WEBPACK_IMPORTED_MODULE_5__["FLIPBOX_SIDES"].map(function (item) {
      return /*#__PURE__*/React.createElement(Button, {
        isLarge: true,
        isPrimary: selectedSide === item.value,
        isSecondary: selectedSide !== item.value,
        onClick: function onClick() {
          return setAttributes({
            selectedSide: item.value
          });
        }
      }, item.label);
    })))), /*#__PURE__*/React.createElement(PanelBody, {
      title: __("Flipbox Style"),
      initialOpen: false
    }, selectedSide === "front" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: __("Front Title"),
      color: frontTitleColor,
      onChange: function onChange(frontTitleColor) {
        return setAttributes({
          frontTitleColor: frontTitleColor
        });
      }
    }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: __("Front Content"),
      color: frontContentColor,
      onChange: function onChange(frontContentColor) {
        return setAttributes({
          frontContentColor: frontContentColor
        });
      }
    }), /*#__PURE__*/React.createElement(BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, __("Front Side Background"))), /*#__PURE__*/React.createElement(_util_background_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
      controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_12__["flipboxFrontWrapper"],
      resRequiredProps: resRequiredProps
    })), selectedSide === "back" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: __("Back Title Color"),
      color: backTitleColor,
      onChange: function onChange(backTitleColor) {
        return setAttributes({
          backTitleColor: backTitleColor
        });
      }
    }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: __("Back Content Color"),
      color: backContentColor,
      onChange: function onChange(backContentColor) {
        return setAttributes({
          backContentColor: backContentColor
        });
      }
    }), /*#__PURE__*/React.createElement(BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, __("Back Side Background"))), /*#__PURE__*/React.createElement(_util_background_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
      controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_12__["flipboxBackWrapper"],
      resRequiredProps: resRequiredProps
    })), /*#__PURE__*/React.createElement(BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, __("Margin & Padding"))), /*#__PURE__*/React.createElement(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_7__["default"], {
      resRequiredProps: resRequiredProps,
      className: "forWrapperMargin",
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_13__["dimensionsMargin"],
      baseLabel: "Margin"
    }), /*#__PURE__*/React.createElement(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_7__["default"], {
      resRequiredProps: resRequiredProps,
      className: "forWrapperPadding",
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_13__["dimensionsPadding"],
      baseLabel: "Padding"
    }), /*#__PURE__*/React.createElement(BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, __("Border & Shadow"))), /*#__PURE__*/React.createElement(_util_border_shadow_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_14__["borderShadow"],
      resRequiredProps: resRequiredProps
    })), selectedSide === "front" && frontIconOrImage === "icon" && /*#__PURE__*/React.createElement(PanelBody, {
      title: __("Front Icon Style"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(React.Fragment, null, frontIcon && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: __("Icon Color"),
      color: frontIconColor,
      onChange: function onChange(frontIconColor) {
        return setAttributes({
          frontIconColor: frontIconColor
        });
      }
    }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: __("Icon Background"),
      color: frontIconBackground,
      onChange: function onChange(frontIconBackground) {
        return setAttributes({
          frontIconBackground: frontIconBackground
        });
      }
    }), /*#__PURE__*/React.createElement(BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, __("Margin & Padding"))), /*#__PURE__*/React.createElement(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_7__["default"], {
      resRequiredProps: resRequiredProps,
      className: "frontIconMargin",
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_13__["frontIconMargin"],
      baseLabel: "Margin"
    }), /*#__PURE__*/React.createElement(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_7__["default"], {
      resRequiredProps: resRequiredProps,
      className: "frontIconPadding",
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_13__["frontIconPadding"],
      baseLabel: "Padding"
    }), /*#__PURE__*/React.createElement(BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, __("Border"))), /*#__PURE__*/React.createElement(_util_border_shadow_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_14__["borderShadowFrontIcon"],
      resRequiredProps: resRequiredProps,
      noShadow: true
    })))), selectedSide === "back" && backIconOrImage === "icon" && /*#__PURE__*/React.createElement(PanelBody, {
      title: __("Back Icon Style"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(React.Fragment, null, backIcon && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: __("Icon Color"),
      color: backIconColor,
      onChange: function onChange(backIconColor) {
        return setAttributes({
          backIconColor: backIconColor
        });
      }
    }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: __("Icon Background"),
      color: backIconBackground,
      onChange: function onChange(backIconBackground) {
        return setAttributes({
          backIconBackground: backIconBackground
        });
      }
    }), /*#__PURE__*/React.createElement(BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, __("Margin & Padding"))), /*#__PURE__*/React.createElement(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_7__["default"], {
      resRequiredProps: resRequiredProps,
      className: "backIconMargin",
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_13__["backIconMargin"],
      baseLabel: "Margin"
    }), /*#__PURE__*/React.createElement(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_7__["default"], {
      resRequiredProps: resRequiredProps,
      className: "backIconPadding",
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_13__["backIconPadding"],
      baseLabel: "Padding"
    }), /*#__PURE__*/React.createElement(BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, __("Border"))), /*#__PURE__*/React.createElement(_util_border_shadow_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_14__["borderShadowBackIcon"],
      resRequiredProps: resRequiredProps,
      noShadow: true
    })))), /*#__PURE__*/React.createElement(PanelBody, {
      title: __("Typography"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_util_typography_control_v2__WEBPACK_IMPORTED_MODULE_9__["default"], {
      baseLabel: __("Title", "flipbox"),
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_15__["typoPrefix_title"],
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(_util_typography_control_v2__WEBPACK_IMPORTED_MODULE_9__["default"], {
      baseLabel: __("Content", "flipbox"),
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_15__["typoPrefix_content"],
      resRequiredProps: resRequiredProps
    })), linkType === "button" && /*#__PURE__*/React.createElement(PanelBody, {
      title: __("Button Style")
    }, buttonStyle === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: __("Background "),
      color: buttonBackground,
      onChange: function onChange(buttonBackground) {
        return setAttributes({
          buttonBackground: buttonBackground
        });
      }
    }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: __("Color"),
      color: buttonColor,
      onChange: function onChange(buttonColor) {
        return setAttributes({
          buttonColor: buttonColor
        });
      }
    }), /*#__PURE__*/React.createElement(_util_responsive_range_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      baseLabel: __("Button Size", "flipbox"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_16__["buttonIconSizeAttr"],
      resRequiredProps: resRequiredProps,
      min: 20,
      max: 600
    }), /*#__PURE__*/React.createElement(BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, __("Padding"))), /*#__PURE__*/React.createElement(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_7__["default"], {
      resRequiredProps: resRequiredProps,
      className: "forWrapperPadding",
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_13__["buttonPadding"],
      baseLabel: "Padding"
    }), /*#__PURE__*/React.createElement(BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, __("Border & Shadow"))), /*#__PURE__*/React.createElement(_util_border_shadow_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_14__["borderShadowBtn"],
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, __("Button Icon"))), /*#__PURE__*/React.createElement(ToggleControl, {
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
    }, /*#__PURE__*/React.createElement(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_4___default.a, {
      icons: _util_faIcons__WEBPACK_IMPORTED_MODULE_1__["default"],
      value: buttonIcon,
      onChange: function onChange(buttonIcon) {
        return setAttributes({
          buttonIcon: buttonIcon
        });
      },
      appendTo: "body",
      closeOnSelect: true
    })), displayButtonIcon && buttonIcon && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
      label: __("Icon Position"),
      id: "eb-flipbox-icon-pos"
    }, /*#__PURE__*/React.createElement(ButtonGroup, {
      id: "eb-flipbox-icon-pos"
    }, _constants__WEBPACK_IMPORTED_MODULE_5__["ICON_POSITIONS"].map(function (item) {
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
    }))))))));
  })));
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
/**
 * Internal dependencies
 */
var useBlockProps = wp.blockEditor.useBlockProps;

var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var blockId = attributes.blockId,
      flipType = attributes.flipType,
      frontIconOrImage = attributes.frontIconOrImage,
      frontImageUrl = attributes.frontImageUrl,
      frontIcon = attributes.frontIcon,
      showFrontTitle = attributes.showFrontTitle,
      frontTitle = attributes.frontTitle,
      showFrontContent = attributes.showFrontContent,
      frontContent = attributes.frontContent,
      backIconOrImage = attributes.backIconOrImage,
      backImageUrl = attributes.backImageUrl,
      backIcon = attributes.backIcon,
      showBackTitle = attributes.showBackTitle,
      backTitle = attributes.backTitle,
      showBackContent = attributes.showBackContent,
      backContent = attributes.backContent,
      link = attributes.link,
      linkType = attributes.linkType,
      buttonText = attributes.buttonText,
      buttonIcon = attributes.buttonIcon,
      buttonClasses = attributes.buttonClasses;
  return /*#__PURE__*/React.createElement("div", useBlockProps.save(), /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-container ".concat(blockId),
    "data-id": blockId,
    "data-flip-type": flipType
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-flipper ".concat(flipType)
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-front"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-items-container"
  }, frontIconOrImage !== "none" && /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-icon-wrapper"
  }, frontIconOrImage === "image" && frontImageUrl && /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-front-image-container"
  }, /*#__PURE__*/React.createElement("img", {
    src: frontImageUrl
  })), frontIconOrImage === "icon" && frontIcon && /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-icon-front",
    "data-icon": frontIcon
  }, /*#__PURE__*/React.createElement("span", {
    className: frontIcon
  }))), showFrontTitle && /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-front-title-wrapper"
  }, linkType === "title" && link ? /*#__PURE__*/React.createElement("a", {
    href: link ? link : "#",
    className: "title-link"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "eb-flipbox-front-title"
  }, frontTitle)) : /*#__PURE__*/React.createElement("h3", {
    className: "eb-flipbox-front-title"
  }, frontTitle)), showFrontContent && /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-front-content-wrapper"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eb-flipbox-front-content"
  }, frontContent)))), /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-back",
    onClick: linkType === "box" && link ? "window.location='".concat(link, "'") : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-items-container"
  }, backIconOrImage !== "none" && /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-icon-wrapper"
  }, backIconOrImage === "image" && backImageUrl && /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-back-image-container"
  }, /*#__PURE__*/React.createElement("img", {
    src: backImageUrl
  })), backIconOrImage === "icon" && backIcon && /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-icon-back",
    "data-icon": backIcon
  }, /*#__PURE__*/React.createElement("span", {
    className: backIcon
  }))), showBackTitle && /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-back-title-wrapper"
  }, linkType === "title" && link ? /*#__PURE__*/React.createElement("a", {
    href: link ? link : "#",
    className: "title-link"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "eb-flipbox-back-title"
  }, backTitle)) : /*#__PURE__*/React.createElement("h3", {
    className: "eb-flipbox-back-title"
  }, backTitle)), showBackContent && /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-back-content-wrapper"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eb-flipbox-back-content"
  }, backContent)), linkType === "button" && /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-button-container"
  }, /*#__PURE__*/React.createElement("a", {
    className: "eb-flipbox-button-link ".concat(buttonClasses),
    href: link ? link : "#"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-button-content"
  }, /*#__PURE__*/React.createElement("span", null, buttonText), buttonIcon && /*#__PURE__*/React.createElement("i", {
    className: "".concat(buttonIcon, " eb-flipbox-button-icon")
  })))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./util/background-control/bgControl.js":
/*!**********************************************!*\
  !*** ./util/background-control/bgControl.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bgControl; });
/* harmony import */ var _gradient_color_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gradient-color-controller */ "./util/gradient-color-controller/index.js");
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unit-control */ "./util/unit-control/index.js");
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color-control */ "./util/color-control/index.js");
/* harmony import */ var _image_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-avatar */ "./util/image-avatar/index.js");
/* harmony import */ var _withResButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../withResButtons */ "./util/withResButtons/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var MediaUpload = wp.blockEditor.MediaUpload;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    RangeControl = _wp$components.RangeControl,
    BaseControl = _wp$components.BaseControl,
    ButtonGroup = _wp$components.ButtonGroup;
/**
 * Internal dependencies
 */






function bgControl(_ref) {
  var resRequiredProps = _ref.resRequiredProps,
      controlName = _ref.controlName,
      noMainBgi = _ref.noMainBgi;
  var setAttributes = resRequiredProps.setAttributes,
      attributes = resRequiredProps.attributes,
      resOption = resRequiredProps.resOption;
  var bg_hoverType = attributes["".concat(controlName, "bg_hoverType")],
      bg_transition = attributes["".concat(controlName, "bg_transition")],
      backgroundType = attributes["".concat(controlName, "backgroundType")],
      backgroundColor = attributes["".concat(controlName, "backgroundColor")],
      gradientColor = attributes["".concat(controlName, "gradientColor")],
      bgImageURL = attributes["".concat(controlName, "bgImageURL")],
      bgImageID = attributes["".concat(controlName, "bgImageID")],
      bgImgAttachment = attributes["".concat(controlName, "bgImgAttachment")],
      backgroundSize = attributes["".concat(controlName, "backgroundSize")],
      bgImgCustomSize = attributes["".concat(controlName, "bgImgCustomSize")],
      bgImgCustomSizeUnit = attributes["".concat(controlName, "bgImgCustomSizeUnit")],
      bgImgPos = attributes["".concat(controlName, "bgImgPos")],
      bgImgcustomPosX = attributes["".concat(controlName, "bgImgcustomPosX")],
      bgImgcustomPosXUnit = attributes["".concat(controlName, "bgImgcustomPosXUnit")],
      bgImgcustomPosY = attributes["".concat(controlName, "bgImgcustomPosY")],
      bgImgcustomPosYUnit = attributes["".concat(controlName, "bgImgcustomPosYUnit")],
      bgImgRepeat = attributes["".concat(controlName, "bgImgRepeat")],
      TABbackgroundSize = attributes["TAB".concat(controlName, "backgroundSize")],
      TABbgImgCustomSize = attributes["TAB".concat(controlName, "bgImgCustomSize")],
      TABbgImgCustomSizeUnit = attributes["TAB".concat(controlName, "bgImgCustomSizeUnit")],
      TABbgImgPos = attributes["TAB".concat(controlName, "bgImgPos")],
      TABbgImgcustomPosX = attributes["TAB".concat(controlName, "bgImgcustomPosX")],
      TABbgImgcustomPosXUnit = attributes["TAB".concat(controlName, "bgImgcustomPosXUnit")],
      TABbgImgcustomPosY = attributes["TAB".concat(controlName, "bgImgcustomPosY")],
      TABbgImgcustomPosYUnit = attributes["TAB".concat(controlName, "bgImgcustomPosYUnit")],
      TABbgImgRepeat = attributes["TAB".concat(controlName, "bgImgRepeat")],
      MOBbackgroundSize = attributes["MOB".concat(controlName, "backgroundSize")],
      MOBbgImgCustomSize = attributes["MOB".concat(controlName, "bgImgCustomSize")],
      MOBbgImgCustomSizeUnit = attributes["MOB".concat(controlName, "bgImgCustomSizeUnit")],
      MOBbgImgPos = attributes["MOB".concat(controlName, "bgImgPos")],
      MOBbgImgcustomPosX = attributes["MOB".concat(controlName, "bgImgcustomPosX")],
      MOBbgImgcustomPosXUnit = attributes["MOB".concat(controlName, "bgImgcustomPosXUnit")],
      MOBbgImgcustomPosY = attributes["MOB".concat(controlName, "bgImgcustomPosY")],
      MOBbgImgcustomPosYUnit = attributes["MOB".concat(controlName, "bgImgcustomPosYUnit")],
      MOBbgImgRepeat = attributes["MOB".concat(controlName, "bgImgRepeat")],
      hov_backgroundType = attributes["hov_".concat(controlName, "backgroundType")],
      hov_backgroundColor = attributes["hov_".concat(controlName, "backgroundColor")],
      hov_gradientColor = attributes["hov_".concat(controlName, "gradientColor")],
      hov_bgImageURL = attributes["hov_".concat(controlName, "bgImageURL")],
      hov_bgImageID = attributes["hov_".concat(controlName, "bgImageID")],
      hov_bgImgAttachment = attributes["hov_".concat(controlName, "bgImgAttachment")],
      hov_backgroundSize = attributes["hov_".concat(controlName, "backgroundSize")],
      hov_bgImgCustomSize = attributes["hov_".concat(controlName, "bgImgCustomSize")],
      hov_bgImgCustomSizeUnit = attributes["hov_".concat(controlName, "bgImgCustomSizeUnit")],
      hov_bgImgPos = attributes["hov_".concat(controlName, "bgImgPos")],
      hov_bgImgcustomPosX = attributes["hov_".concat(controlName, "bgImgcustomPosX")],
      hov_bgImgcustomPosXUnit = attributes["hov_".concat(controlName, "bgImgcustomPosXUnit")],
      hov_bgImgcustomPosY = attributes["hov_".concat(controlName, "bgImgcustomPosY")],
      hov_bgImgcustomPosYUnit = attributes["hov_".concat(controlName, "bgImgcustomPosYUnit")],
      hov_bgImgRepeat = attributes["hov_".concat(controlName, "bgImgRepeat")],
      hov_TABbackgroundSize = attributes["hov_TAB".concat(controlName, "backgroundSize")],
      hov_TABbgImgCustomSize = attributes["hov_TAB".concat(controlName, "bgImgCustomSize")],
      hov_TABbgImgCustomSizeUnit = attributes["hov_TAB".concat(controlName, "bgImgCustomSizeUnit")],
      hov_TABbgImgPos = attributes["hov_TAB".concat(controlName, "bgImgPos")],
      hov_TABbgImgcustomPosX = attributes["hov_TAB".concat(controlName, "bgImgcustomPosX")],
      hov_TABbgImgcustomPosXUnit = attributes["hov_TAB".concat(controlName, "bgImgcustomPosXUnit")],
      hov_TABbgImgcustomPosY = attributes["hov_TAB".concat(controlName, "bgImgcustomPosY")],
      hov_TABbgImgcustomPosYUnit = attributes["hov_TAB".concat(controlName, "bgImgcustomPosYUnit")],
      hov_TABbgImgRepeat = attributes["hov_TAB".concat(controlName, "bgImgRepeat")],
      hov_MOBbackgroundSize = attributes["hov_MOB".concat(controlName, "backgroundSize")],
      hov_MOBbgImgCustomSize = attributes["hov_MOB".concat(controlName, "bgImgCustomSize")],
      hov_MOBbgImgCustomSizeUnit = attributes["hov_MOB".concat(controlName, "bgImgCustomSizeUnit")],
      hov_MOBbgImgPos = attributes["hov_MOB".concat(controlName, "bgImgPos")],
      hov_MOBbgImgcustomPosX = attributes["hov_MOB".concat(controlName, "bgImgcustomPosX")],
      hov_MOBbgImgcustomPosXUnit = attributes["hov_MOB".concat(controlName, "bgImgcustomPosXUnit")],
      hov_MOBbgImgcustomPosY = attributes["hov_MOB".concat(controlName, "bgImgcustomPosY")],
      hov_MOBbgImgcustomPosYUnit = attributes["hov_MOB".concat(controlName, "bgImgcustomPosYUnit")],
      hov_MOBbgImgRepeat = attributes["hov_MOB".concat(controlName, "bgImgRepeat")];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, null, /*#__PURE__*/React.createElement(ButtonGroup, null, [{
    label: __("Normal"),
    value: "normal"
  }, {
    label: __("Hover"),
    value: "hover"
  }].map(function (_ref2) {
    var value = _ref2.value,
        label = _ref2.label;
    return /*#__PURE__*/React.createElement(Button // isSmall
    // isLarge
    , {
      isPrimary: bg_hoverType === value,
      isSecondary: bg_hoverType !== value,
      onClick: function onClick() {
        return setAttributes(_defineProperty({}, "".concat(controlName, "bg_hoverType"), value));
      }
    }, label);
  }))), bg_hoverType === "normal" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Background Type")
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, [{
    label: __("Classic"),
    value: "classic"
  }, {
    label: __("Gradient"),
    value: "gradient"
  }].map(function (_ref3) {
    var value = _ref3.value,
        label = _ref3.label;
    return /*#__PURE__*/React.createElement(Button // isSmall
    // isLarge
    , {
      isPrimary: backgroundType === value,
      isSecondary: backgroundType !== value,
      onClick: function onClick() {
        return setAttributes(_defineProperty({}, "".concat(controlName, "backgroundType"), value));
      }
    }, label);
  }))), backgroundType === "classic" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __("Background Color"),
    color: backgroundColor,
    onChange: function onChange(backgroundColor) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "backgroundColor"), backgroundColor));
    }
  }), noMainBgi === false && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Background Image")
  }), /*#__PURE__*/React.createElement(MediaUpload, {
    onSelect: function onSelect(_ref4) {
      var _setAttributes4;

      var url = _ref4.url,
          id = _ref4.id;
      return setAttributes((_setAttributes4 = {}, _defineProperty(_setAttributes4, "".concat(controlName, "bgImageURL"), url), _defineProperty(_setAttributes4, "".concat(controlName, "bgImageID"), id), _setAttributes4));
    },
    type: "image",
    value: bgImageID,
    render: function render(_ref5) {
      var open = _ref5.open;
      return !bgImageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        className: "eb-background-control-inspector-panel-img-btn components-button",
        label: __("Upload Image"),
        icon: "format-image",
        onClick: open
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          padding: "10px 0",
          display: "block"
        }
      }));
    }
  }), bgImageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_image_avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    imageUrl: bgImageURL,
    onDeleteImage: function onDeleteImage() {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImageURL"), null));
    }
  }), resOption === "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: bgImgPos,
    options: [{
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
    }],
    onChange: function onChange(bgImgPos) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgPos"), bgImgPos));
    }
  })), bgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: bgImgcustomPosXUnit,
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
    onClick: function onClick(bgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgcustomPosXUnit"), bgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: bgImgcustomPosX,
    min: 0,
    max: bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(bgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgcustomPosX"), bgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: bgImgcustomPosYUnit,
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
    onClick: function onClick(bgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgcustomPosYUnit"), bgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: bgImgcustomPosY,
    min: 0,
    max: bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(bgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgcustomPosY"), bgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(bgImgAttachment) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgAttachment"), bgImgAttachment));
    }
  }), bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: bgImgRepeat,
    options: [{
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
    }],
    onChange: function onChange(bgImgRepeat) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgRepeat"), bgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
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
    }],
    onChange: function onChange(backgroundSize) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "backgroundSize"), backgroundSize));
    }
  })), backgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: bgImgCustomSizeUnit,
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
    onClick: function onClick(bgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgCustomSizeUnit"), bgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: bgImgCustomSize,
    min: 0,
    max: bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(bgImgCustomSize) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgCustomSize"), bgImgCustomSize));
    }
  })))), resOption === "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: TABbgImgPos,
    options: [{
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
    }],
    onChange: function onChange(TABbgImgPos) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgPos"), TABbgImgPos));
    }
  })), TABbgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABbgImgcustomPosXUnit,
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
    onClick: function onClick(TABbgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgcustomPosXUnit"), TABbgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: TABbgImgcustomPosX,
    min: 0,
    max: TABbgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(TABbgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgcustomPosX"), TABbgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABbgImgcustomPosYUnit,
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
    onClick: function onClick(TABbgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgcustomPosYUnit"), TABbgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: TABbgImgcustomPosY,
    min: 0,
    max: TABbgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: TABbgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(TABbgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgcustomPosY"), TABbgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(bgImgAttachment) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgAttachment"), bgImgAttachment));
    }
  }), bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: TABbgImgRepeat,
    options: [{
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
    }],
    onChange: function onChange(TABbgImgRepeat) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgRepeat"), TABbgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: TABbackgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
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
    }],
    onChange: function onChange(TABbackgroundSize) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "backgroundSize"), TABbackgroundSize));
    }
  })), TABbackgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABbgImgCustomSizeUnit,
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
    onClick: function onClick(TABbgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgCustomSizeUnit"), TABbgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: TABbgImgCustomSize,
    min: 0,
    max: TABbgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: TABbgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(TABbgImgCustomSize) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgCustomSize"), TABbgImgCustomSize));
    }
  })))), resOption === "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: MOBbgImgPos,
    options: [{
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
    }],
    onChange: function onChange(MOBbgImgPos) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgPos"), MOBbgImgPos));
    }
  })), MOBbgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBbgImgcustomPosXUnit,
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
    onClick: function onClick(MOBbgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgcustomPosXUnit"), MOBbgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: MOBbgImgcustomPosX,
    min: 0,
    max: MOBbgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(MOBbgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgcustomPosX"), MOBbgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBbgImgcustomPosYUnit,
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
    onClick: function onClick(MOBbgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgcustomPosYUnit"), MOBbgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: MOBbgImgcustomPosY,
    min: 0,
    max: MOBbgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: MOBbgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(MOBbgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgcustomPosY"), MOBbgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(bgImgAttachment) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgAttachment"), bgImgAttachment));
    }
  }), bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: MOBbgImgRepeat,
    options: [{
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
    }],
    onChange: function onChange(MOBbgImgRepeat) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgRepeat"), MOBbgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: MOBbackgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
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
    }],
    onChange: function onChange(MOBbackgroundSize) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "backgroundSize"), MOBbackgroundSize));
    }
  })), MOBbackgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBbgImgCustomSizeUnit,
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
    onClick: function onClick(MOBbgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgCustomSizeUnit"), MOBbgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: MOBbgImgCustomSize,
    min: 0,
    max: MOBbgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: MOBbgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(MOBbgImgCustomSize) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgCustomSize"), MOBbgImgCustomSize));
    }
  }))))))), backgroundType === "gradient" && /*#__PURE__*/React.createElement(_gradient_color_controller__WEBPACK_IMPORTED_MODULE_0__["default"], {
    gradientColor: gradientColor,
    onChange: function onChange(gradientColor) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "gradientColor"), gradientColor));
    }
  })), bg_hoverType === "hover" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Background Type")
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, [{
    label: __("Classic"),
    value: "classic"
  }, {
    label: __("Gradient"),
    value: "gradient"
  }].map(function (_ref6) {
    var value = _ref6.value,
        label = _ref6.label;
    return /*#__PURE__*/React.createElement(Button // isSmall
    // isLarge
    , {
      isPrimary: hov_backgroundType === value,
      isSecondary: hov_backgroundType !== value,
      onClick: function onClick() {
        return setAttributes(_defineProperty({}, "hov_".concat(controlName, "backgroundType"), value));
      }
    }, label);
  }))), hov_backgroundType === "classic" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __("Background Color"),
    color: hov_backgroundColor,
    onChange: function onChange(hov_backgroundColor) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "backgroundColor"), hov_backgroundColor));
    }
  }), noMainBgi === false && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Background Image")
  }), /*#__PURE__*/React.createElement(MediaUpload, {
    onSelect: function onSelect(_ref7) {
      var _setAttributes39;

      var url = _ref7.url,
          id = _ref7.id;
      return setAttributes((_setAttributes39 = {}, _defineProperty(_setAttributes39, "hov_".concat(controlName, "bgImageURL"), url), _defineProperty(_setAttributes39, "hov_".concat(controlName, "bgImageID"), id), _setAttributes39));
    },
    type: "image",
    value: hov_bgImageID,
    render: function render(_ref8) {
      var open = _ref8.open;
      return !hov_bgImageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        className: "eb-background-control-inspector-panel-img-btn components-button",
        label: __("Upload Image"),
        icon: "format-image",
        onClick: open
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          padding: "10px 0",
          display: "block"
        }
      }));
    }
  }), hov_bgImageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_image_avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    imageUrl: hov_bgImageURL,
    onDeleteImage: function onDeleteImage() {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImageURL"), null));
    }
  }), resOption === "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_bgImgPos,
    options: [{
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
    }],
    onChange: function onChange(hov_bgImgPos) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgPos"), hov_bgImgPos));
    }
  })), hov_bgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_bgImgcustomPosXUnit,
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
    onClick: function onClick(hov_bgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgcustomPosXUnit"), hov_bgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_bgImgcustomPosX,
    min: 0,
    max: hov_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(hov_bgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgcustomPosX"), hov_bgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_bgImgcustomPosYUnit,
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
    onClick: function onClick(hov_bgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgcustomPosYUnit"), hov_bgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_bgImgcustomPosY,
    min: 0,
    max: hov_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_bgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgcustomPosY"), hov_bgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: hov_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(hov_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgAttachment"), hov_bgImgAttachment));
    }
  }), hov_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_bgImgRepeat,
    options: [{
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
    }],
    onChange: function onChange(hov_bgImgRepeat) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgRepeat"), hov_bgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
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
    }],
    onChange: function onChange(hov_backgroundSize) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "backgroundSize"), hov_backgroundSize));
    }
  })), hov_backgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_bgImgCustomSizeUnit,
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
    onClick: function onClick(hov_bgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgCustomSizeUnit"), hov_bgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_bgImgCustomSize,
    min: 0,
    max: hov_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_bgImgCustomSize) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgCustomSize"), hov_bgImgCustomSize));
    }
  })))), resOption === "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_TABbgImgPos,
    options: [{
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
    }],
    onChange: function onChange(hov_TABbgImgPos) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "bgImgPos"), hov_TABbgImgPos));
    }
  })), hov_TABbgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_TABbgImgcustomPosXUnit,
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
    onClick: function onClick(hov_TABbgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "bgImgcustomPosXUnit"), hov_TABbgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_TABbgImgcustomPosX,
    min: 0,
    max: hov_TABbgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(hov_TABbgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "bgImgcustomPosX"), hov_TABbgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_TABbgImgcustomPosYUnit,
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
    onClick: function onClick(hov_TABbgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "bgImgcustomPosYUnit"), hov_TABbgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_TABbgImgcustomPosY,
    min: 0,
    max: hov_TABbgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_TABbgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_TABbgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "bgImgcustomPosY"), hov_TABbgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: hov_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(hov_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgAttachment"), hov_bgImgAttachment));
    }
  }), hov_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_TABbgImgRepeat,
    options: [{
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
    }],
    onChange: function onChange(hov_TABbgImgRepeat) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "bgImgRepeat"), hov_TABbgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_TABbackgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
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
    }],
    onChange: function onChange(hov_TABbackgroundSize) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "backgroundSize"), hov_TABbackgroundSize));
    }
  })), hov_TABbackgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_TABbgImgCustomSizeUnit,
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
    onClick: function onClick(hov_TABbgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "bgImgCustomSizeUnit"), hov_TABbgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_TABbgImgCustomSize,
    min: 0,
    max: hov_TABbgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_TABbgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_TABbgImgCustomSize) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "bgImgCustomSize"), hov_TABbgImgCustomSize));
    }
  })))), resOption === "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_MOBbgImgPos,
    options: [{
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
    }],
    onChange: function onChange(hov_MOBbgImgPos) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "bgImgPos"), hov_MOBbgImgPos));
    }
  })), hov_MOBbgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_MOBbgImgcustomPosXUnit,
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
    onClick: function onClick(hov_MOBbgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "bgImgcustomPosXUnit"), hov_MOBbgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_MOBbgImgcustomPosX,
    min: 0,
    max: hov_MOBbgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(hov_MOBbgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "bgImgcustomPosX"), hov_MOBbgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_MOBbgImgcustomPosYUnit,
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
    onClick: function onClick(hov_MOBbgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "bgImgcustomPosYUnit"), hov_MOBbgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_MOBbgImgcustomPosY,
    min: 0,
    max: hov_MOBbgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_MOBbgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_MOBbgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "bgImgcustomPosY"), hov_MOBbgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: hov_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(hov_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "bgImgAttachment"), hov_bgImgAttachment));
    }
  }), hov_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_MOBbgImgRepeat,
    options: [{
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
    }],
    onChange: function onChange(hov_MOBbgImgRepeat) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "bgImgRepeat"), hov_MOBbgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_MOBbackgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
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
    }],
    onChange: function onChange(hov_MOBbackgroundSize) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "backgroundSize"), hov_MOBbackgroundSize));
    }
  })), hov_MOBbackgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_MOBbgImgCustomSizeUnit,
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
    onClick: function onClick(hov_MOBbgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "bgImgCustomSizeUnit"), hov_MOBbgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_MOBbgImgCustomSize,
    min: 0,
    max: hov_MOBbgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_MOBbgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_MOBbgImgCustomSize) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "bgImgCustomSize"), hov_MOBbgImgCustomSize));
    }
  }))))))), hov_backgroundType === "gradient" && /*#__PURE__*/React.createElement(_gradient_color_controller__WEBPACK_IMPORTED_MODULE_0__["default"], {
    gradientColor: hov_gradientColor,
    onChange: function onChange(hov_gradientColor) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "gradientColor"), hov_gradientColor));
    }
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Background Transition"),
    value: bg_transition,
    min: 0,
    max: 5,
    step: 0.1,
    onChange: function onChange(bg_transition) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bg_transition"), bg_transition));
    }
  })));
}

/***/ }),

/***/ "./util/background-control/index.js":
/*!******************************************!*\
  !*** ./util/background-control/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackgroundControl; });
/* harmony import */ var _overlayControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overlayControl */ "./util/background-control/overlayControl.js");
/* harmony import */ var _bgControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bgControl */ "./util/background-control/bgControl.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var ToggleControl = wp.components.ToggleControl;
/**
 * Internal dependencies
 */



function BackgroundControl(_ref) {
  var resRequiredProps = _ref.resRequiredProps,
      controlName = _ref.controlName,
      _ref$noOverlay = _ref.noOverlay,
      noOverlay = _ref$noOverlay === void 0 ? false : _ref$noOverlay,
      _ref$noMainBgi = _ref.noMainBgi,
      noMainBgi = _ref$noMainBgi === void 0 ? false : _ref$noMainBgi,
      _ref$noOverlayBgi = _ref.noOverlayBgi,
      noOverlayBgi = _ref$noOverlayBgi === void 0 ? false : _ref$noOverlayBgi;
  var setAttributes = resRequiredProps.setAttributes,
      attributes = resRequiredProps.attributes;
  var isBgOverlay = attributes["".concat(controlName, "isBgOverlay")];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_bgControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: controlName,
    noMainBgi: noMainBgi
  }), noOverlay === false && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Enable Overlay"),
    checked: isBgOverlay,
    onChange: function onChange() {
      return setAttributes(_defineProperty({}, "".concat(controlName, "isBgOverlay"), !isBgOverlay));
    }
  }), isBgOverlay && /*#__PURE__*/React.createElement(_overlayControl__WEBPACK_IMPORTED_MODULE_0__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: controlName,
    noOverlayBgi: noOverlayBgi
  })));
}

/***/ }),

/***/ "./util/background-control/overlayControl.js":
/*!***************************************************!*\
  !*** ./util/background-control/overlayControl.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return overlayControl; });
/* harmony import */ var _gradient_color_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gradient-color-controller */ "./util/gradient-color-controller/index.js");
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unit-control */ "./util/unit-control/index.js");
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color-control */ "./util/color-control/index.js");
/* harmony import */ var _image_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-avatar */ "./util/image-avatar/index.js");
/* harmony import */ var _withResButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../withResButtons */ "./util/withResButtons/index.js");
/* harmony import */ var _reset_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reset-control */ "./util/reset-control/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var MediaUpload = wp.blockEditor.MediaUpload;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    RangeControl = _wp$components.RangeControl,
    BaseControl = _wp$components.BaseControl,
    ButtonGroup = _wp$components.ButtonGroup,
    ToggleControl = _wp$components.ToggleControl;
/**
 * Internal dependencies
 */







function overlayControl(_ref) {
  var resRequiredProps = _ref.resRequiredProps,
      controlName = _ref.controlName,
      noOverlayBgi = _ref.noOverlayBgi;
  var setAttributes = resRequiredProps.setAttributes,
      attributes = resRequiredProps.attributes,
      resOption = resRequiredProps.resOption;
  var ovl_hoverType = attributes["".concat(controlName, "ovl_hoverType")],
      ovl_bg_transition = attributes["".concat(controlName, "ovl_bg_transition")],
      ovl_filtersTransition = attributes["".concat(controlName, "ovl_filtersTransition")],
      ovl_opacityTransition = attributes["".concat(controlName, "ovl_opacityTransition")],
      overlayType = attributes["".concat(controlName, "overlayType")],
      overlayColor = attributes["".concat(controlName, "overlayColor")],
      overlayGradient = attributes["".concat(controlName, "overlayGradient")],
      ovl_bgImageURL = attributes["".concat(controlName, "ovl_bgImageURL")],
      ovl_bgImageID = attributes["".concat(controlName, "ovl_bgImageID")],
      ovl_bgImgAttachment = attributes["".concat(controlName, "ovl_bgImgAttachment")],
      ovl_opacity = attributes["".concat(controlName, "ovl_opacity")],
      ovl_blendMode = attributes["".concat(controlName, "ovl_blendMode")],
      ovl_allowFilters = attributes["".concat(controlName, "ovl_allowFilters")],
      ovl_fltrBrightness = attributes["".concat(controlName, "ovl_fltrBrightness")],
      ovl_fltrContrast = attributes["".concat(controlName, "ovl_fltrContrast")],
      ovl_fltrSaturation = attributes["".concat(controlName, "ovl_fltrSaturation")],
      ovl_fltrBlur = attributes["".concat(controlName, "ovl_fltrBlur")],
      ovl_fltrHue = attributes["".concat(controlName, "ovl_fltrHue")],
      ovl_backgroundSize = attributes["".concat(controlName, "ovl_backgroundSize")],
      ovl_bgImgCustomSize = attributes["".concat(controlName, "ovl_bgImgCustomSize")],
      ovl_bgImgCustomSizeUnit = attributes["".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      ovl_bgImgPos = attributes["".concat(controlName, "ovl_bgImgPos")],
      ovl_bgImgcustomPosX = attributes["".concat(controlName, "ovl_bgImgcustomPosX")],
      ovl_bgImgcustomPosXUnit = attributes["".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      ovl_bgImgcustomPosY = attributes["".concat(controlName, "ovl_bgImgcustomPosY")],
      ovl_bgImgcustomPosYUnit = attributes["".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      ovl_bgImgRepeat = attributes["".concat(controlName, "ovl_bgImgRepeat")],
      TABovl_backgroundSize = attributes["TAB".concat(controlName, "ovl_backgroundSize")],
      TABovl_bgImgCustomSize = attributes["TAB".concat(controlName, "ovl_bgImgCustomSize")],
      TABovl_bgImgCustomSizeUnit = attributes["TAB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      TABovl_bgImgPos = attributes["TAB".concat(controlName, "ovl_bgImgPos")],
      TABovl_bgImgcustomPosX = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosX")],
      TABovl_bgImgcustomPosXUnit = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      TABovl_bgImgcustomPosY = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosY")],
      TABovl_bgImgcustomPosYUnit = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      TABovl_bgImgRepeat = attributes["TAB".concat(controlName, "ovl_bgImgRepeat")],
      MOBovl_backgroundSize = attributes["MOB".concat(controlName, "ovl_backgroundSize")],
      MOBovl_bgImgCustomSize = attributes["MOB".concat(controlName, "ovl_bgImgCustomSize")],
      MOBovl_bgImgCustomSizeUnit = attributes["MOB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      MOBovl_bgImgPos = attributes["MOB".concat(controlName, "ovl_bgImgPos")],
      MOBovl_bgImgcustomPosX = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosX")],
      MOBovl_bgImgcustomPosXUnit = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      MOBovl_bgImgcustomPosY = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosY")],
      MOBovl_bgImgcustomPosYUnit = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      MOBovl_bgImgRepeat = attributes["MOB".concat(controlName, "ovl_bgImgRepeat")],
      hov_overlayType = attributes["hov_".concat(controlName, "overlayType")],
      hov_overlayColor = attributes["hov_".concat(controlName, "overlayColor")],
      hov_overlayGradient = attributes["hov_".concat(controlName, "overlayGradient")],
      hov_ovl_bgImageURL = attributes["hov_".concat(controlName, "ovl_bgImageURL")],
      hov_ovl_bgImageID = attributes["hov_".concat(controlName, "ovl_bgImageID")],
      hov_ovl_bgImgAttachment = attributes["hov_".concat(controlName, "ovl_bgImgAttachment")],
      hov_ovl_opacity = attributes["hov_".concat(controlName, "ovl_opacity")],
      hov_ovl_blendMode = attributes["hov_".concat(controlName, "ovl_blendMode")],
      hov_ovl_allowFilters = attributes["hov_".concat(controlName, "ovl_allowFilters")],
      hov_ovl_fltrBrightness = attributes["hov_".concat(controlName, "ovl_fltrBrightness")],
      hov_ovl_fltrContrast = attributes["hov_".concat(controlName, "ovl_fltrContrast")],
      hov_ovl_fltrSaturation = attributes["hov_".concat(controlName, "ovl_fltrSaturation")],
      hov_ovl_fltrBlur = attributes["hov_".concat(controlName, "ovl_fltrBlur")],
      hov_ovl_fltrHue = attributes["hov_".concat(controlName, "ovl_fltrHue")],
      hov_ovl_backgroundSize = attributes["hov_".concat(controlName, "ovl_backgroundSize")],
      hov_ovl_bgImgCustomSize = attributes["hov_".concat(controlName, "ovl_bgImgCustomSize")],
      hov_ovl_bgImgCustomSizeUnit = attributes["hov_".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      hov_ovl_bgImgPos = attributes["hov_".concat(controlName, "ovl_bgImgPos")],
      hov_ovl_bgImgcustomPosX = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosX")],
      hov_ovl_bgImgcustomPosXUnit = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      hov_ovl_bgImgcustomPosY = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosY")],
      hov_ovl_bgImgcustomPosYUnit = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      hov_ovl_bgImgRepeat = attributes["hov_".concat(controlName, "ovl_bgImgRepeat")],
      hov_TABovl_backgroundSize = attributes["hov_TAB".concat(controlName, "ovl_backgroundSize")],
      hov_TABovl_bgImgCustomSize = attributes["hov_TAB".concat(controlName, "ovl_bgImgCustomSize")],
      hov_TABovl_bgImgCustomSizeUnit = attributes["hov_TAB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      hov_TABovl_bgImgPos = attributes["hov_TAB".concat(controlName, "ovl_bgImgPos")],
      hov_TABovl_bgImgcustomPosX = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosX")],
      hov_TABovl_bgImgcustomPosXUnit = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      hov_TABovl_bgImgcustomPosY = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosY")],
      hov_TABovl_bgImgcustomPosYUnit = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      hov_TABovl_bgImgRepeat = attributes["hov_TAB".concat(controlName, "ovl_bgImgRepeat")],
      hov_MOBovl_backgroundSize = attributes["hov_MOB".concat(controlName, "ovl_backgroundSize")],
      hov_MOBovl_bgImgCustomSize = attributes["hov_MOB".concat(controlName, "ovl_bgImgCustomSize")],
      hov_MOBovl_bgImgCustomSizeUnit = attributes["hov_MOB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      hov_MOBovl_bgImgPos = attributes["hov_MOB".concat(controlName, "ovl_bgImgPos")],
      hov_MOBovl_bgImgcustomPosX = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosX")],
      hov_MOBovl_bgImgcustomPosXUnit = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      hov_MOBovl_bgImgcustomPosY = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosY")],
      hov_MOBovl_bgImgcustomPosYUnit = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      hov_MOBovl_bgImgRepeat = attributes["hov_MOB".concat(controlName, "ovl_bgImgRepeat")];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Background Overlay")
  }), /*#__PURE__*/React.createElement(BaseControl, null, /*#__PURE__*/React.createElement(ButtonGroup, null, [{
    label: __("Normal"),
    value: "normal"
  }, {
    label: __("Hover"),
    value: "hover"
  }].map(function (_ref2) {
    var value = _ref2.value,
        label = _ref2.label;
    return /*#__PURE__*/React.createElement(Button // isSmall
    // isLarge
    , {
      isPrimary: ovl_hoverType === value,
      isSecondary: ovl_hoverType !== value,
      onClick: function onClick() {
        return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_hoverType"), value));
      }
    }, label);
  }))), ovl_hoverType === "normal" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Overlay Type")
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    id: "eb-background-control-new"
  }, [{
    label: "Classic",
    value: "classic"
  }, {
    label: "Gradient",
    value: "gradient"
  }].map(function (_ref3) {
    var value = _ref3.value,
        label = _ref3.label;
    return /*#__PURE__*/React.createElement(Button, {
      isLarge: true,
      isPrimary: overlayType === value,
      isSecondary: overlayType !== value,
      onClick: function onClick() {
        return setAttributes(_defineProperty({}, "".concat(controlName, "overlayType"), value));
      }
    }, label);
  }))), overlayType === "classic" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __("Overlay Color"),
    color: overlayColor,
    onChange: function onChange(overlayColor) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "overlayColor"), overlayColor));
    }
  }), noOverlayBgi === false && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Overlay Image")
  }), /*#__PURE__*/React.createElement(MediaUpload, {
    onSelect: function onSelect(_ref4) {
      var _setAttributes4;

      var url = _ref4.url,
          id = _ref4.id;
      return setAttributes((_setAttributes4 = {}, _defineProperty(_setAttributes4, "".concat(controlName, "ovl_bgImageURL"), url), _defineProperty(_setAttributes4, "".concat(controlName, "ovl_bgImageID"), id), _setAttributes4));
    },
    type: "image",
    value: ovl_bgImageID,
    render: function render(_ref5) {
      var open = _ref5.open;
      return !ovl_bgImageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        className: "eb-background-control-inspector-panel-img-btn components-button",
        label: __("Upload Image"),
        icon: "format-image",
        onClick: open
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          padding: "10px 0",
          display: "block"
        }
      }));
    }
  }), ovl_bgImageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_image_avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    imageUrl: ovl_bgImageURL,
    onDeleteImage: function onDeleteImage() {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImageURL"), null));
    }
  }), resOption === "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: ovl_bgImgPos,
    options: [{
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
    }],
    onChange: function onChange(ovl_bgImgPos) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgPos"), ovl_bgImgPos));
    }
  })), ovl_bgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: ovl_bgImgcustomPosXUnit,
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
    onClick: function onClick(ovl_bgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgcustomPosXUnit"), ovl_bgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: ovl_bgImgcustomPosX,
    min: 0,
    max: ovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(ovl_bgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgcustomPosX"), ovl_bgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: ovl_bgImgcustomPosYUnit,
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
    onClick: function onClick(ovl_bgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgcustomPosYUnit"), ovl_bgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: ovl_bgImgcustomPosY,
    min: 0,
    max: ovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: ovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(ovl_bgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgcustomPosY"), ovl_bgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: ovl_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(ovl_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgAttachment"), ovl_bgImgAttachment));
    }
  }), ovl_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: ovl_bgImgRepeat,
    options: [{
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
    }],
    onChange: function onChange(ovl_bgImgRepeat) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgRepeat"), ovl_bgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: ovl_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
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
    }],
    onChange: function onChange(ovl_backgroundSize) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_backgroundSize"), ovl_backgroundSize));
    }
  })), ovl_backgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: ovl_bgImgCustomSizeUnit,
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
    onClick: function onClick(ovl_bgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgCustomSizeUnit"), ovl_bgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: ovl_bgImgCustomSize,
    min: 0,
    max: ovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: ovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(ovl_bgImgCustomSize) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgCustomSize"), ovl_bgImgCustomSize));
    }
  })))), resOption === "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: TABovl_bgImgPos,
    options: [{
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
    }],
    onChange: function onChange(TABovl_bgImgPos) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_bgImgPos"), TABovl_bgImgPos));
    }
  })), TABovl_bgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABovl_bgImgcustomPosXUnit,
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
    onClick: function onClick(TABovl_bgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_bgImgcustomPosXUnit"), TABovl_bgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: TABovl_bgImgcustomPosX,
    min: 0,
    max: TABovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(TABovl_bgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_bgImgcustomPosX"), TABovl_bgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABovl_bgImgcustomPosYUnit,
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
    onClick: function onClick(TABovl_bgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_bgImgcustomPosYUnit"), TABovl_bgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: TABovl_bgImgcustomPosY,
    min: 0,
    max: TABovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: TABovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(TABovl_bgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_bgImgcustomPosY"), TABovl_bgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: ovl_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(ovl_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgAttachment"), ovl_bgImgAttachment));
    }
  }), ovl_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: TABovl_bgImgRepeat,
    options: [{
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
    }],
    onChange: function onChange(TABovl_bgImgRepeat) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_bgImgRepeat"), TABovl_bgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: TABovl_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
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
    }],
    onChange: function onChange(TABovl_backgroundSize) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_backgroundSize"), TABovl_backgroundSize));
    }
  })), TABovl_backgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABovl_bgImgCustomSizeUnit,
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
    onClick: function onClick(TABovl_bgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_bgImgCustomSizeUnit"), TABovl_bgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: TABovl_bgImgCustomSize,
    min: 0,
    max: TABovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: TABovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(TABovl_bgImgCustomSize) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "ovl_bgImgCustomSize"), TABovl_bgImgCustomSize));
    }
  })))), resOption === "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: MOBovl_bgImgPos,
    options: [{
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
    }],
    onChange: function onChange(MOBovl_bgImgPos) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_bgImgPos"), MOBovl_bgImgPos));
    }
  })), MOBovl_bgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBovl_bgImgcustomPosXUnit,
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
    onClick: function onClick(MOBovl_bgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_bgImgcustomPosXUnit"), MOBovl_bgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: MOBovl_bgImgcustomPosX,
    min: 0,
    max: MOBovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(MOBovl_bgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_bgImgcustomPosX"), MOBovl_bgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBovl_bgImgcustomPosYUnit,
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
    onClick: function onClick(MOBovl_bgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_bgImgcustomPosYUnit"), MOBovl_bgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: MOBovl_bgImgcustomPosY,
    min: 0,
    max: MOBovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: MOBovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(MOBovl_bgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_bgImgcustomPosY"), MOBovl_bgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: ovl_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(ovl_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bgImgAttachment"), ovl_bgImgAttachment));
    }
  }), ovl_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: MOBovl_bgImgRepeat,
    options: [{
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
    }],
    onChange: function onChange(MOBovl_bgImgRepeat) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_bgImgRepeat"), MOBovl_bgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: MOBovl_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
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
    }],
    onChange: function onChange(MOBovl_backgroundSize) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_backgroundSize"), MOBovl_backgroundSize));
    }
  })), MOBovl_backgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBovl_bgImgCustomSizeUnit,
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
    onClick: function onClick(MOBovl_bgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_bgImgCustomSizeUnit"), MOBovl_bgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: MOBovl_bgImgCustomSize,
    min: 0,
    max: MOBovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: MOBovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(MOBovl_bgImgCustomSize) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "ovl_bgImgCustomSize"), MOBovl_bgImgCustomSize));
    }
  }))))))), overlayType === "gradient" && /*#__PURE__*/React.createElement(_gradient_color_controller__WEBPACK_IMPORTED_MODULE_0__["default"], {
    gradientColor: overlayGradient,
    onChange: function onChange(overlayGradient) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "overlayGradient"), overlayGradient));
    }
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Opacity"),
    value: ovl_opacity,
    onChange: function onChange(ovl_opacity) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_opacity"), ovl_opacity));
    },
    step: 0.01,
    min: 0,
    max: 1
  }), /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Blend Mode"),
    value: ovl_blendMode,
    options: [{
      label: __("Normal"),
      value: ""
    }, {
      label: __("Multiply"),
      value: "multiply"
    }, {
      label: __("Screen"),
      value: "screen"
    }, {
      label: __("Overlay"),
      value: "overlay"
    }, {
      label: __("Darken"),
      value: "darken"
    }, {
      label: __("Lighten"),
      value: "lighten"
    }, {
      label: __("Color Dodge"),
      value: "color-dodge"
    }, {
      label: __("Saturation"),
      value: "saturation"
    }, {
      label: __("Color"),
      value: "color"
    }, {
      label: __("Luminosity"),
      value: "luminosity"
    }],
    onChange: function onChange(ovl_blendMode) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_blendMode"), ovl_blendMode));
    }
  }), /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("CSS Filters"),
    checked: ovl_allowFilters,
    onChange: function onChange() {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_allowFilters"), !ovl_allowFilters));
    }
  }), ovl_allowFilters && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Blur"),
    value: ovl_fltrBlur,
    onChange: function onChange(ovl_fltrBlur) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_fltrBlur"), ovl_fltrBlur));
    },
    step: 0.1,
    min: 0,
    max: 10
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Brightness"),
    value: ovl_fltrBrightness,
    onChange: function onChange(ovl_fltrBrightness) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_fltrBrightness"), ovl_fltrBrightness));
    },
    step: 1,
    min: 0,
    max: 200
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Contrast"),
    value: ovl_fltrContrast,
    onChange: function onChange(ovl_fltrContrast) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_fltrContrast"), ovl_fltrContrast));
    },
    step: 1,
    min: 0,
    max: 200
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Saturation"),
    value: ovl_fltrSaturation,
    onChange: function onChange(ovl_fltrSaturation) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_fltrSaturation"), ovl_fltrSaturation));
    },
    step: 1,
    min: 0,
    max: 200
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Hue"),
    value: ovl_fltrHue,
    onChange: function onChange(ovl_fltrHue) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_fltrHue"), ovl_fltrHue));
    },
    step: 1,
    min: 0,
    max: 360
  }))), ovl_hoverType === "hover" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Overlay Type")
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    id: "eb-background-control-new"
  }, [{
    label: "Classic",
    value: "classic"
  }, {
    label: "Gradient",
    value: "gradient"
  }].map(function (_ref6) {
    var value = _ref6.value,
        label = _ref6.label;
    return /*#__PURE__*/React.createElement(Button, {
      isLarge: true,
      isPrimary: hov_overlayType === value,
      isSecondary: hov_overlayType !== value,
      onClick: function onClick() {
        return setAttributes(_defineProperty({}, "hov_".concat(controlName, "overlayType"), value));
      }
    }, label);
  }))), hov_overlayType === "classic" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __("Overlay Color"),
    color: hov_overlayColor,
    onChange: function onChange(hov_overlayColor) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "overlayColor"), hov_overlayColor));
    }
  }), noOverlayBgi === false && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Overlay Image")
  }), /*#__PURE__*/React.createElement(MediaUpload, {
    onSelect: function onSelect(_ref7) {
      var _setAttributes47;

      var url = _ref7.url,
          id = _ref7.id;
      return setAttributes((_setAttributes47 = {}, _defineProperty(_setAttributes47, "hov_".concat(controlName, "ovl_bgImageURL"), url), _defineProperty(_setAttributes47, "hov_".concat(controlName, "ovl_bgImageID"), id), _setAttributes47));
    },
    type: "image",
    value: hov_ovl_bgImageID,
    render: function render(_ref8) {
      var open = _ref8.open;
      return !hov_ovl_bgImageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        className: "eb-background-control-inspector-panel-img-btn components-button",
        label: __("Upload Image"),
        icon: "format-image",
        onClick: open
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          padding: "10px 0",
          display: "block"
        }
      }));
    }
  }), hov_ovl_bgImageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_image_avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    imageUrl: hov_ovl_bgImageURL,
    onDeleteImage: function onDeleteImage() {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImageURL"), null));
    }
  }), resOption === "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_ovl_bgImgPos,
    options: [{
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
    }],
    onChange: function onChange(hov_ovl_bgImgPos) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgPos"), hov_ovl_bgImgPos));
    }
  })), hov_ovl_bgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_ovl_bgImgcustomPosXUnit,
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
    onClick: function onClick(hov_ovl_bgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgcustomPosXUnit"), hov_ovl_bgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_ovl_bgImgcustomPosX,
    min: 0,
    max: hov_ovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(hov_ovl_bgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgcustomPosX"), hov_ovl_bgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_ovl_bgImgcustomPosYUnit,
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
    onClick: function onClick(hov_ovl_bgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgcustomPosYUnit"), hov_ovl_bgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_ovl_bgImgcustomPosY,
    min: 0,
    max: hov_ovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_ovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_ovl_bgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgcustomPosY"), hov_ovl_bgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: hov_ovl_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(hov_ovl_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgAttachment"), hov_ovl_bgImgAttachment));
    }
  }), hov_ovl_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_ovl_bgImgRepeat,
    options: [{
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
    }],
    onChange: function onChange(hov_ovl_bgImgRepeat) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgRepeat"), hov_ovl_bgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_ovl_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
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
    }],
    onChange: function onChange(hov_ovl_backgroundSize) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_backgroundSize"), hov_ovl_backgroundSize));
    }
  })), hov_ovl_backgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_ovl_bgImgCustomSizeUnit,
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
    onClick: function onClick(hov_ovl_bgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgCustomSizeUnit"), hov_ovl_bgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_ovl_bgImgCustomSize,
    min: 0,
    max: hov_ovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_ovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_ovl_bgImgCustomSize) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgCustomSize"), hov_ovl_bgImgCustomSize));
    }
  })))), resOption === "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_TABovl_bgImgPos,
    options: [{
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
    }],
    onChange: function onChange(hov_TABovl_bgImgPos) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_bgImgPos"), hov_TABovl_bgImgPos));
    }
  })), hov_TABovl_bgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_TABovl_bgImgcustomPosXUnit,
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
    onClick: function onClick(hov_TABovl_bgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosXUnit"), hov_TABovl_bgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_TABovl_bgImgcustomPosX,
    min: 0,
    max: hov_TABovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(hov_TABovl_bgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosX"), hov_TABovl_bgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_TABovl_bgImgcustomPosYUnit,
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
    onClick: function onClick(hov_TABovl_bgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosYUnit"), hov_TABovl_bgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_TABovl_bgImgcustomPosY,
    min: 0,
    max: hov_TABovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_TABovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_TABovl_bgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosY"), hov_TABovl_bgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: hov_ovl_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(hov_ovl_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgAttachment"), hov_ovl_bgImgAttachment));
    }
  }), hov_ovl_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_TABovl_bgImgRepeat,
    options: [{
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
    }],
    onChange: function onChange(hov_TABovl_bgImgRepeat) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_bgImgRepeat"), hov_TABovl_bgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_TABovl_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
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
    }],
    onChange: function onChange(hov_TABovl_backgroundSize) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_backgroundSize"), hov_TABovl_backgroundSize));
    }
  })), hov_TABovl_backgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_TABovl_bgImgCustomSizeUnit,
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
    onClick: function onClick(hov_TABovl_bgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_bgImgCustomSizeUnit"), hov_TABovl_bgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_TABovl_bgImgCustomSize,
    min: 0,
    max: hov_TABovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_TABovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_TABovl_bgImgCustomSize) {
      return setAttributes(_defineProperty({}, "hov_TAB".concat(controlName, "ovl_bgImgCustomSize"), hov_TABovl_bgImgCustomSize));
    }
  })))), resOption === "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_MOBovl_bgImgPos,
    options: [{
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
    }],
    onChange: function onChange(hov_MOBovl_bgImgPos) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_bgImgPos"), hov_MOBovl_bgImgPos));
    }
  })), hov_MOBovl_bgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_MOBovl_bgImgcustomPosXUnit,
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
    onClick: function onClick(hov_MOBovl_bgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosXUnit"), hov_MOBovl_bgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_MOBovl_bgImgcustomPosX,
    min: 0,
    max: hov_MOBovl_bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(hov_MOBovl_bgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosX"), hov_MOBovl_bgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_MOBovl_bgImgcustomPosYUnit,
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
    onClick: function onClick(hov_MOBovl_bgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosYUnit"), hov_MOBovl_bgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_MOBovl_bgImgcustomPosY,
    min: 0,
    max: hov_MOBovl_bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: hov_MOBovl_bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_MOBovl_bgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosY"), hov_MOBovl_bgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(SelectControl, {
    label: "Attachment",
    value: hov_ovl_bgImgAttachment,
    options: [{
      label: __("Default"),
      value: ""
    }, {
      label: __("Scroll"),
      value: "scroll"
    }, {
      label: __("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(hov_ovl_bgImgAttachment) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_bgImgAttachment"), hov_ovl_bgImgAttachment));
    }
  }), hov_ovl_bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_MOBovl_bgImgRepeat,
    options: [{
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
    }],
    onChange: function onChange(hov_MOBovl_bgImgRepeat) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_bgImgRepeat"), hov_MOBovl_bgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(SelectControl, {
    value: hov_MOBovl_backgroundSize,
    options: [{
      label: __("Default"),
      value: ""
    }, {
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
    }],
    onChange: function onChange(hov_MOBovl_backgroundSize) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_backgroundSize"), hov_MOBovl_backgroundSize));
    }
  })), hov_MOBovl_backgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: hov_MOBovl_bgImgCustomSizeUnit,
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
    onClick: function onClick(hov_MOBovl_bgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_bgImgCustomSizeUnit"), hov_MOBovl_bgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_withResButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: hov_MOBovl_bgImgCustomSize,
    min: 0,
    max: hov_MOBovl_bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: hov_MOBovl_bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(hov_MOBovl_bgImgCustomSize) {
      return setAttributes(_defineProperty({}, "hov_MOB".concat(controlName, "ovl_bgImgCustomSize"), hov_MOBovl_bgImgCustomSize));
    }
  }))))))), hov_overlayType === "gradient" && /*#__PURE__*/React.createElement(_gradient_color_controller__WEBPACK_IMPORTED_MODULE_0__["default"], {
    gradientColor: hov_overlayGradient,
    onChange: function onChange(hov_overlayGradient) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "overlayGradient"), hov_overlayGradient));
    }
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Overlay Transition"),
    value: ovl_bg_transition,
    min: 0,
    max: 5,
    step: 0.1,
    onChange: function onChange(ovl_bg_transition) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_bg_transition"), ovl_bg_transition));
    }
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onReset: function onReset() {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_opacity"), undefined));
    }
  }, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Opacity"),
    value: hov_ovl_opacity,
    onChange: function onChange(hov_ovl_opacity) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_opacity"), hov_ovl_opacity));
    },
    step: 0.01,
    min: 0,
    max: 1
  })), hov_ovl_opacity && /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Opacity Transition"),
    value: ovl_opacityTransition,
    onChange: function onChange(ovl_opacityTransition) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_opacityTransition"), ovl_opacityTransition));
    },
    step: 0.01,
    min: 0,
    max: 5
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Blend Mode"),
    value: hov_ovl_blendMode,
    options: [{
      label: __("Normal"),
      value: ""
    }, {
      label: __("multiply"),
      value: "multiply"
    }, {
      label: __("screen"),
      value: "screen"
    }, {
      label: __("overlay"),
      value: "overlay"
    }, {
      label: __("darken"),
      value: "darken"
    }, {
      label: __("lighten"),
      value: "lighten"
    }, {
      label: __("color-dodge"),
      value: "Color Dodge"
    }, {
      label: __("saturation"),
      value: "saturation"
    }, {
      label: __("color"),
      value: "color"
    }, {
      label: __("luminosity"),
      value: "luminosity"
    }],
    onChange: function onChange(hov_ovl_blendMode) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_blendMode"), hov_ovl_blendMode));
    }
  }), /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("CSS Filters"),
    checked: hov_ovl_allowFilters,
    onChange: function onChange() {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_allowFilters"), !hov_ovl_allowFilters));
    }
  }), hov_ovl_allowFilters && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Blur"),
    value: hov_ovl_fltrBlur,
    onChange: function onChange(hov_ovl_fltrBlur) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_fltrBlur"), hov_ovl_fltrBlur));
    },
    step: 0.1,
    min: 0,
    max: 10
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Brightness"),
    value: hov_ovl_fltrBrightness,
    onChange: function onChange(hov_ovl_fltrBrightness) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_fltrBrightness"), hov_ovl_fltrBrightness));
    },
    step: 1,
    min: 0,
    max: 200
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Contrast"),
    value: hov_ovl_fltrContrast,
    onChange: function onChange(hov_ovl_fltrContrast) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_fltrContrast"), hov_ovl_fltrContrast));
    },
    step: 1,
    min: 0,
    max: 200
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Saturation"),
    value: hov_ovl_fltrSaturation,
    onChange: function onChange(hov_ovl_fltrSaturation) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_fltrSaturation"), hov_ovl_fltrSaturation));
    },
    step: 1,
    min: 0,
    max: 200
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Hue"),
    value: hov_ovl_fltrHue,
    onChange: function onChange(hov_ovl_fltrHue) {
      return setAttributes(_defineProperty({}, "hov_".concat(controlName, "ovl_fltrHue"), hov_ovl_fltrHue));
    },
    step: 1,
    min: 0,
    max: 360
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Css Filters Transition"),
    value: ovl_filtersTransition,
    onChange: function onChange(ovl_filtersTransition) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "ovl_filtersTransition"), ovl_filtersTransition));
    },
    step: 0.01,
    min: 0,
    max: 5
  }))));
}

/***/ }),

/***/ "./util/border-shadow-control/index.js":
/*!*********************************************!*\
  !*** ./util/border-shadow-control/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BorderShadowControl; });
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color-control */ "./util/color-control/index.js");
/* harmony import */ var _reset_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reset-control */ "./util/reset-control/index.js");
/* harmony import */ var _dimensions_control_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dimensions-control-v2 */ "./util/dimensions-control-v2/index.js");
/* harmony import */ var _typography_control_v2_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../typography-control-v2/Icon */ "./util/typography-control-v2/Icon.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button,
    RangeControl = _wp$components.RangeControl,
    BaseControl = _wp$components.BaseControl,
    ButtonGroup = _wp$components.ButtonGroup,
    SelectControl = _wp$components.SelectControl,
    Dropdown = _wp$components.Dropdown;
/**
 * Internal dependencies
 */





function BorderShadowControl(_ref) {
  var resRequiredProps = _ref.resRequiredProps,
      controlName = _ref.controlName,
      noBorder = _ref.noBorder,
      noShadow = _ref.noShadow;
  var setAttributes = resRequiredProps.setAttributes,
      attributes = resRequiredProps.attributes;
  var borderStyle = attributes["".concat(controlName, "borderStyle")],
      borderColor = attributes["".concat(controlName, "borderColor")],
      shadowType = attributes["".concat(controlName, "shadowType")],
      shadowColor = attributes["".concat(controlName, "shadowColor")],
      hOffset = attributes["".concat(controlName, "hOffset")],
      vOffset = attributes["".concat(controlName, "vOffset")],
      blur = attributes["".concat(controlName, "blur")],
      spread = attributes["".concat(controlName, "spread")],
      hoverShadowColor = attributes["".concat(controlName, "hoverShadowColor")],
      hoverHOffset = attributes["".concat(controlName, "hoverHOffset")],
      hoverVOffset = attributes["".concat(controlName, "hoverVOffset")],
      hoverBlur = attributes["".concat(controlName, "hoverBlur")],
      hoverSpread = attributes["".concat(controlName, "hoverSpread")],
      inset = attributes["".concat(controlName, "inset")],
      BorderType = attributes["".concat(controlName, "BorderType")],
      HborderStyle = attributes["".concat(controlName, "HborderStyle")],
      HborderColor = attributes["".concat(controlName, "HborderColor")],
      borderTransition = attributes["".concat(controlName, "borderTransition")],
      radiusTransition = attributes["".concat(controlName, "radiusTransition")],
      shadowTransition = attributes["".concat(controlName, "shadowTransition")];
  return /*#__PURE__*/React.createElement(React.Fragment, null, noBorder !== true && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    id: "eb-infobox-border-hover-ptions"
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    id: "eb-infobox-border-hover-ptions"
  }, [{
    label: "Normal",
    value: "normal"
  }, {
    label: "Hover",
    value: "hover"
  }].map(function (_ref2) {
    var value = _ref2.value,
        label = _ref2.label;
    return /*#__PURE__*/React.createElement(Button, {
      isLarge: true,
      isSecondary: BorderType !== value,
      isPrimary: BorderType === value,
      onClick: function onClick() {
        return setAttributes(_defineProperty({}, "".concat(controlName, "BorderType"), value));
      }
    }, label);
  }))), BorderType === "normal" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Border Style"),
    value: borderStyle,
    options: [{
      label: __("None"),
      value: "none"
    }, {
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
    }],
    onChange: function onChange(borderStyle) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "borderStyle"), borderStyle));
    }
  }), borderStyle !== "none" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: __("Border Color"),
    color: borderColor,
    onChange: function onChange(borderColor) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "borderColor"), borderColor));
    }
  }), /*#__PURE__*/React.createElement(_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: "".concat(controlName, "Bdr_"),
    baseLabel: "Border Width"
  })), /*#__PURE__*/React.createElement(_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    forBorderRadius: true,
    resRequiredProps: resRequiredProps,
    controlName: "".concat(controlName, "Rds_"),
    baseLabel: "Border Radius"
  })), BorderType === "hover" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Border Style"),
    value: HborderStyle,
    options: [{
      label: __("None"),
      value: "none"
    }, {
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
    }],
    onChange: function onChange(HborderStyle) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "HborderStyle"), HborderStyle));
    }
  }), HborderStyle !== "none" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: __("Border Color"),
    color: HborderColor,
    onChange: function onChange(HborderColor) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "HborderColor"), HborderColor));
    }
  }), /*#__PURE__*/React.createElement(_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: "".concat(controlName, "HBdr_"),
    baseLabel: "Border Width"
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Border Transition"),
    value: borderTransition,
    onChange: function onChange(borderTransition) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "borderTransition"), borderTransition));
    },
    step: 0.01,
    min: 0,
    max: 5
  })), /*#__PURE__*/React.createElement(_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    forBorderRadius: true,
    resRequiredProps: resRequiredProps,
    controlName: "".concat(controlName, "HRds_"),
    baseLabel: "Border Radius"
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Border Radius Transition"),
    value: radiusTransition,
    onChange: function onChange(radiusTransition) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "radiusTransition"), radiusTransition));
    },
    step: 0.01,
    min: 0,
    max: 5
  }))), noShadow !== true && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Box Shadow"),
    className: "eb-typography-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref3) {
      var isOpen = _ref3.isOpen,
          onToggle = _ref3.onToggle;
      return /*#__PURE__*/React.createElement(Button, {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, /*#__PURE__*/React.createElement(_typography_control_v2_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], null));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "eb-panel-control",
        style: {
          minWidth: "230px",
          padding: "10px"
        }
      }, /*#__PURE__*/React.createElement(BaseControl, {
        id: "eb-infobox-shadow-hover-ptions"
      }, /*#__PURE__*/React.createElement(ButtonGroup, {
        id: "eb-infobox-shadow-hover-ptions"
      }, [{
        label: "Normal",
        value: "normal"
      }, {
        label: "Hover",
        value: "hover"
      }].map(function (_ref4) {
        var value = _ref4.value,
            label = _ref4.label;
        return /*#__PURE__*/React.createElement(Button, {
          isLarge: true,
          isSecondary: shadowType !== value,
          isPrimary: shadowType === value,
          onClick: function onClick() {
            return setAttributes(_defineProperty({}, "".concat(controlName, "shadowType"), value));
          }
        }, label);
      }))), /*#__PURE__*/React.createElement(ToggleControl, {
        label: __("Inset"),
        checked: inset,
        onChange: function onChange() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "inset"), !inset));
        }
      }), shadowType === "normal" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        label: __("Shadow Color"),
        color: shadowColor,
        onChange: function onChange(shadowColor) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "shadowColor"), shadowColor));
        }
      }), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hOffset"), undefined));
        }
      }, /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Horizontal Offset"),
        value: hOffset,
        onChange: function onChange(hOffset) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hOffset"), hOffset));
        },
        min: 0,
        max: 20
      })), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "vOffset"), undefined));
        }
      }, /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Vertical Offset"),
        value: vOffset,
        onChange: function onChange(vOffset) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "vOffset"), vOffset));
        },
        min: 0,
        max: 20
      })), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "blur"), undefined));
        }
      }, /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Shadow Blur"),
        value: blur,
        onChange: function onChange(blur) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "blur"), blur));
        },
        min: 0,
        max: 20
      })), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "spread"), undefined));
        }
      }, /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Shadow Spread"),
        value: spread,
        onChange: function onChange(spread) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "spread"), spread));
        },
        min: 0,
        max: 20
      }))), shadowType === "hover" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        label: __("Hover Shadow Color"),
        color: hoverShadowColor,
        onChange: function onChange(hoverShadowColor) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverShadowColor"), hoverShadowColor));
        }
      }), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverHOffset"), undefined));
        }
      }, /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Horizontal Offset"),
        value: hoverHOffset,
        onChange: function onChange(hoverHOffset) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverHOffset"), hoverHOffset));
        },
        min: 0,
        max: 20
      })), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverVOffset"), undefined));
        }
      }, /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Vertical Offset"),
        value: hoverVOffset,
        onChange: function onChange(hoverVOffset) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverVOffset"), hoverVOffset));
        },
        min: 0,
        max: 20
      })), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverBlur"), undefined));
        }
      }, /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Shadow Blur"),
        value: hoverBlur,
        onChange: function onChange(hoverBlur) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverBlur"), hoverBlur));
        },
        min: 0,
        max: 20
      })), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverSpread"), undefined));
        }
      }, /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Shadow Spread"),
        value: hoverSpread,
        onChange: function onChange(hoverSpread) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverSpread"), hoverSpread));
        },
        min: 0,
        max: 20
      })), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Shadow Transition"),
        value: shadowTransition,
        onChange: function onChange(shadowTransition) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "shadowTransition"), shadowTransition));
        },
        step: 0.01,
        min: 0,
        max: 5
      }))));
    }
  }))));
}

/***/ }),

/***/ "./util/color-control/index.js":
/*!*************************************!*\
  !*** ./util/color-control/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    Dropdown = _wp$components.Dropdown,
    Tooltip = _wp$components.Tooltip,
    ColorPicker = _wp$components.ColorPicker,
    Button = _wp$components.Button;
var colorBallStyles = {
  padding: 2,
  borderRadius: 0,
  background: "white",
  border: "1px solid #ebebeb"
};
var colorStyles = {
  height: 16,
  width: 16,
  borderRadius: "0%",
  boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)"
};

var ColorControl = function ColorControl(_ref) {
  var label = _ref.label,
      color = _ref.color,
      onChange = _ref.onChange;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      bgColor = _useState2[0],
      setBgColor = _useState2[1];

  useEffect(function () {
    onChange(bgColor);
  }, [bgColor]);
  useEffect(function () {
    // console.log("----color-useEffect-fired", { color, bgColor });
    setBgColor(color);
  }, []); // console.log({ color, bgColor });

  return /*#__PURE__*/React.createElement(BaseControl, {
    label: label || "",
    className: "eb-color-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(Tooltip, {
        text: bgColor || "default"
      }, /*#__PURE__*/React.createElement("div", {
        className: "eb-color-ball",
        style: bgColor && colorBallStyles
      }, /*#__PURE__*/React.createElement("div", {
        style: _objectSpread(_objectSpread({}, colorStyles), {}, {
          backgroundColor: bgColor
        }),
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": bgColor || "default"
      })));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(ColorPicker, {
        color: bgColor,
        onChangeComplete: function onChangeComplete(_ref3) {
          var rgb = _ref3.rgb;
          setBgColor("rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")"));
        }
      });
    }
  }), bgColor && /*#__PURE__*/React.createElement(Button, {
    isSmall: true,
    className: "eb-color-undo",
    icon: "image-rotate",
    style: {
      transform: "scaleX(-1) rotate(90deg)"
    },
    onClick: function onClick() {
      setBgColor(undefined);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorControl);

/***/ }),

/***/ "./util/dimensions-control-v2/dimensions.js":
/*!**************************************************!*\
  !*** ./util/dimensions-control-v2/dimensions.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DimensionsControl; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./util/helpers/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _wp$element = wp.element,
    useEffect = _wp$element.useEffect,
    useState = _wp$element.useState;
var dispatch = wp.data.dispatch;

function DimensionsControl(_ref) {
  var top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left,
      onChange = _ref.onChange,
      neededProps = _ref.neededProps;

  var _useState = useState({
    top: top,
    right: right,
    bottom: bottom,
    left: left
  }),
      _useState2 = _slicedToArray(_useState, 2),
      dimensions = _useState2[0],
      setDimensions = _useState2[1];

  var baseLabel = neededProps.baseLabel,
      resOption = neededProps.resOption,
      forBorderRadius = neededProps.forBorderRadius,
      setAttributes = neededProps.setAttributes,
      dimensionIsLinked = neededProps.dimensionIsLinked,
      controlName = neededProps.controlName;

  var _useState3 = useState(dimensionIsLinked),
      _useState4 = _slicedToArray(_useState3, 2),
      isLinked = _useState4[0],
      setIsLinked = _useState4[1];

  var onButtonClick = function onButtonClick() {
    return setIsLinked(!isLinked);
  };

  var onInputChange = function onInputChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;

    if (isLinked) {
      setDimensions({
        top: value,
        right: value,
        bottom: value,
        left: value
      });
    } else {
      setDimensions(function (prevDimensions) {
        return _objectSpread(_objectSpread({}, prevDimensions), {}, _defineProperty({}, name, value));
      });
    }
  };

  useEffect(function () {
    onChange(dimensions);
  }, [dimensions]);
  useEffect(function () {
    setAttributes(_defineProperty({}, "".concat(controlName, "isLinked"), isLinked)); // console.log({ isLinked });
  }, [isLinked]);
  return /*#__PURE__*/React.createElement("div", {
    className: "dimention-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "withResWrapperInDimension"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dimention-label"
  }, baseLabel), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleDesktopBtnClick"])({
        setAttributes: setAttributes,
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType
      });
    },
    "class": "typoResButton dashicons dashicons-desktop ".concat(resOption === "Desktop" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleTabBtnClick"])({
        setAttributes: setAttributes,
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType
      });
    },
    "class": "typoResButton dashicons dashicons-tablet ".concat(resOption === "Tablet" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleMobileBtnClick"])({
        setAttributes: setAttributes,
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType
      });
    },
    "class": "typoResButton dashicons dashicons-smartphone ".concat(resOption === "Mobile" ? "active" : " ")
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "input-wrapper"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "top",
    value: dimensions.top,
    onChange: onInputChange
  }), /*#__PURE__*/React.createElement("label", {
    className: "dimentions-input-label"
  }, forBorderRadius ? " " : "Top")), /*#__PURE__*/React.createElement("div", {
    className: "input-wrapper"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "right",
    value: dimensions.right,
    onChange: onInputChange
  }), /*#__PURE__*/React.createElement("label", {
    className: "dimentions-input-label"
  }, forBorderRadius ? " " : "Right")), /*#__PURE__*/React.createElement("div", {
    className: "input-wrapper"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "bottom",
    value: dimensions.bottom,
    onChange: onInputChange
  }), /*#__PURE__*/React.createElement("label", {
    className: "dimentions-input-label"
  }, forBorderRadius ? " " : "Bottom")), /*#__PURE__*/React.createElement("div", {
    className: "input-wrapper"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "left",
    value: dimensions.left,
    onChange: onInputChange
  }), /*#__PURE__*/React.createElement("label", {
    className: "dimentions-input-label"
  }, forBorderRadius ? " " : "Left")), /*#__PURE__*/React.createElement("button", {
    className: "linked-btn components-button is-button dashicons dashicons-".concat(isLinked ? "admin-links is-primary" : "editor-unlink is-default"),
    onClick: onButtonClick
  })));
}

/***/ }),

/***/ "./util/dimensions-control-v2/index.js":
/*!*********************************************!*\
  !*** ./util/dimensions-control-v2/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResponsiveDimensionsControl; });
/* harmony import */ var _dimensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dimensions */ "./util/dimensions-control-v2/dimensions.js");
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unit-control */ "./util/unit-control/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function ResponsiveDimensionsControl(_ref) {
  var resRequiredProps = _ref.resRequiredProps,
      controlName = _ref.controlName,
      baseLabel = _ref.baseLabel,
      forBorderRadius = _ref.forBorderRadius;
  var attributes = resRequiredProps.attributes,
      setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption;
  var dimensionIsLinked = attributes["".concat(controlName, "isLinked")],
      dimensionUnit = attributes["".concat(controlName, "Unit")],
      dimensionTop = attributes["".concat(controlName, "Top")],
      dimensionRight = attributes["".concat(controlName, "Right")],
      dimensionBottom = attributes["".concat(controlName, "Bottom")],
      dimensionLeft = attributes["".concat(controlName, "Left")],
      TABdimensionUnit = attributes["TAB".concat(controlName, "Unit")],
      TABdimensionTop = attributes["TAB".concat(controlName, "Top")],
      TABdimensionRight = attributes["TAB".concat(controlName, "Right")],
      TABdimensionBottom = attributes["TAB".concat(controlName, "Bottom")],
      TABdimensionLeft = attributes["TAB".concat(controlName, "Left")],
      MOBdimensionUnit = attributes["MOB".concat(controlName, "Unit")],
      MOBdimensionTop = attributes["MOB".concat(controlName, "Top")],
      MOBdimensionRight = attributes["MOB".concat(controlName, "Right")],
      MOBdimensionBottom = attributes["MOB".concat(controlName, "Bottom")],
      MOBdimensionLeft = attributes["MOB".concat(controlName, "Left")];
  var UNITS = [{
    label: "px",
    value: "px"
  }, {
    label: "em",
    value: "em"
  }, {
    label: "%",
    value: "%"
  }];
  var neededProps = {
    resOption: resOption,
    baseLabel: baseLabel,
    forBorderRadius: forBorderRadius,
    setAttributes: setAttributes,
    dimensionIsLinked: dimensionIsLinked,
    controlName: controlName
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, resOption == "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: dimensionUnit,
    unitTypes: UNITS,
    onClick: function onClick(dimensionUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "Unit"), dimensionUnit));
    }
  }), /*#__PURE__*/React.createElement(_dimensions__WEBPACK_IMPORTED_MODULE_0__["default"], {
    top: dimensionTop,
    right: dimensionRight,
    bottom: dimensionBottom,
    left: dimensionLeft,
    neededProps: neededProps,
    onChange: function onChange(_ref2) {
      var _setAttributes2;

      var top = _ref2.top,
          right = _ref2.right,
          bottom = _ref2.bottom,
          left = _ref2.left;
      return setAttributes((_setAttributes2 = {}, _defineProperty(_setAttributes2, "".concat(controlName, "Top"), top), _defineProperty(_setAttributes2, "".concat(controlName, "Right"), right), _defineProperty(_setAttributes2, "".concat(controlName, "Bottom"), bottom), _defineProperty(_setAttributes2, "".concat(controlName, "Left"), left), _setAttributes2));
    }
  })), resOption == "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABdimensionUnit,
    unitTypes: UNITS,
    onClick: function onClick(TABdimensionUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "Unit"), TABdimensionUnit));
    }
  }), /*#__PURE__*/React.createElement(_dimensions__WEBPACK_IMPORTED_MODULE_0__["default"], {
    top: TABdimensionTop,
    right: TABdimensionRight,
    bottom: TABdimensionBottom,
    left: TABdimensionLeft,
    neededProps: neededProps,
    onChange: function onChange(_ref3) {
      var _setAttributes4;

      var top = _ref3.top,
          right = _ref3.right,
          bottom = _ref3.bottom,
          left = _ref3.left;
      return setAttributes((_setAttributes4 = {}, _defineProperty(_setAttributes4, "TAB".concat(controlName, "Top"), top), _defineProperty(_setAttributes4, "TAB".concat(controlName, "Right"), right), _defineProperty(_setAttributes4, "TAB".concat(controlName, "Bottom"), bottom), _defineProperty(_setAttributes4, "TAB".concat(controlName, "Left"), left), _setAttributes4));
    }
  })), resOption == "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBdimensionUnit,
    unitTypes: UNITS,
    onClick: function onClick(MOBdimensionUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "Unit"), MOBdimensionUnit));
    }
  }), /*#__PURE__*/React.createElement(_dimensions__WEBPACK_IMPORTED_MODULE_0__["default"], {
    top: MOBdimensionTop,
    right: MOBdimensionRight,
    bottom: MOBdimensionBottom,
    left: MOBdimensionLeft,
    neededProps: neededProps,
    onChange: function onChange(_ref4) {
      var _setAttributes6;

      var top = _ref4.top,
          right = _ref4.right,
          bottom = _ref4.bottom,
          left = _ref4.left;
      return setAttributes((_setAttributes6 = {}, _defineProperty(_setAttributes6, "MOB".concat(controlName, "Top"), top), _defineProperty(_setAttributes6, "MOB".concat(controlName, "Right"), right), _defineProperty(_setAttributes6, "MOB".concat(controlName, "Bottom"), bottom), _defineProperty(_setAttributes6, "MOB".concat(controlName, "Left"), left), _setAttributes6));
    }
  })));
}

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

/***/ "./util/gradient-color-controller/helper.js":
/*!**************************************************!*\
  !*** ./util/gradient-color-controller/helper.js ***!
  \**************************************************/
/*! exports provided: parseGradientColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseGradientColor", function() { return parseGradientColor; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Parses the gradient color string
var parseGradientColor = function parseGradientColor() {
  var gradientColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "linear-gradient(45deg,#7967ff,#c277f2)";
  var angle = 45,
      colorOnePosition = 0,
      colorTwoPosition = 100,
      radialShape = "ellipse",
      radialX = 50,
      radialY = 50;

  var _ref = gradientColor.match(/\#[a-f\d]{3,8}|rgba?\([\d\,\.]{3,16}\)/gi) || ["rgba(0,0,0,0)", "rgba(0,0,0,0)"],
      _ref2 = _slicedToArray(_ref, 2),
      colorOne = _ref2[0],
      colorTwo = _ref2[1];

  var _ref3 = gradientColor.match(/\w{6}(?=-)/i) || ["linear"],
      _ref4 = _slicedToArray(_ref3, 1),
      gradientType = _ref4[0];

  if (gradientType == "linear") {
    angle = gradientColor.match(/\d{1,3}(?=deg)/i)[0];

    var _ref5 = gradientColor.match(/\d{1,3}(?=\%)/gi) || ["0", "100"];

    var _ref6 = _slicedToArray(_ref5, 2);

    colorOnePosition = _ref6[0];
    colorTwoPosition = _ref6[1];
  } else {
    radialShape = (gradientColor.match(/\w+(?= at)/i) || ["circle"])[0];
    var pcents = gradientColor.match(/\d{1,3}(?=\%)/gi) || ["50", "50", "18", "82"];
    radialX = pcents[0];
    radialY = pcents[1];
    colorOnePosition = pcents[2];
    colorTwoPosition = pcents[3];
  }

  return {
    gradientType: gradientType,
    angle: angle,
    colorOne: colorOne,
    colorTwo: colorTwo,
    colorOnePosition: colorOnePosition,
    colorTwoPosition: colorTwoPosition,
    radialShape: radialShape,
    radialX: radialX,
    radialY: radialY
  };
};

/***/ }),

/***/ "./util/gradient-color-controller/index.js":
/*!*************************************************!*\
  !*** ./util/gradient-color-controller/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggle_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toggle-button */ "./util/toggle-button/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./util/gradient-color-controller/constants.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper */ "./util/gradient-color-controller/helper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$components = wp.components,
    RangeControl = _wp$components.RangeControl,
    BaseControl = _wp$components.BaseControl,
    Dropdown = _wp$components.Dropdown,
    Tooltip = _wp$components.Tooltip,
    ColorPicker = _wp$components.ColorPicker;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
/**
 * Internal dependencies
 */
// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";




var colorBallStyles = {
  padding: 2,
  borderRadius: 0,
  background: "white",
  border: "1px solid #ebebeb"
};
var colorStyles = {
  height: 16,
  width: 16,
  borderRadius: "0%",
  boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)"
};

var GradientColorControl = function GradientColorControl(_ref) {
  var _ref$gradientColor = _ref.gradientColor,
      gradientColor = _ref$gradientColor === void 0 ? "linear-gradient(45deg,#000000cc,#00000088)" : _ref$gradientColor,
      onChange = _ref.onChange;

  var _useState = useState("linear"),
      _useState2 = _slicedToArray(_useState, 2),
      gradientType = _useState2[0],
      setGradientType = _useState2[1];

  var _useState3 = useState("transparent"),
      _useState4 = _slicedToArray(_useState3, 2),
      colorOne = _useState4[0],
      setColorOne = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      colorOnePosition = _useState6[0],
      setColorOnePosition = _useState6[1];

  var _useState7 = useState("transparent"),
      _useState8 = _slicedToArray(_useState7, 2),
      colorTwo = _useState8[0],
      setColorTwo = _useState8[1];

  var _useState9 = useState(100),
      _useState10 = _slicedToArray(_useState9, 2),
      colorTwoPosition = _useState10[0],
      setColorTwoPosition = _useState10[1];

  var _useState11 = useState(0),
      _useState12 = _slicedToArray(_useState11, 2),
      angle = _useState12[0],
      setAngle = _useState12[1];

  var _useState13 = useState("ellipse"),
      _useState14 = _slicedToArray(_useState13, 2),
      radialShape = _useState14[0],
      setRadialShape = _useState14[1];

  var _useState15 = useState(50),
      _useState16 = _slicedToArray(_useState15, 2),
      radialX = _useState16[0],
      setRadialX = _useState16[1];

  var _useState17 = useState(50),
      _useState18 = _slicedToArray(_useState17, 2),
      radialY = _useState18[0],
      setRadialY = _useState18[1];

  useEffect(function () {
    var _parseGradientColor = Object(_helper__WEBPACK_IMPORTED_MODULE_2__["parseGradientColor"])(gradientColor),
        gradientType = _parseGradientColor.gradientType,
        angle = _parseGradientColor.angle,
        colorOne = _parseGradientColor.colorOne,
        colorTwo = _parseGradientColor.colorTwo,
        colorOnePosition = _parseGradientColor.colorOnePosition,
        colorTwoPosition = _parseGradientColor.colorTwoPosition,
        radialShape = _parseGradientColor.radialShape,
        radialX = _parseGradientColor.radialX,
        radialY = _parseGradientColor.radialY;

    setGradientType(gradientType);
    setAngle(angle);
    setColorOne(colorOne);
    setColorTwo(colorTwo);
    setColorOnePosition(colorOnePosition);
    setColorTwoPosition(colorTwoPosition);
    setRadialShape(radialShape);
    setRadialX(radialX);
    setRadialY(radialY);
  }, []);
  useEffect(function () {
    onChange(gradientType === "linear" ? getLinearGradient() : getRadialGradient());
  }, [gradientType, colorOne, colorOnePosition, colorTwo, colorTwoPosition, angle, radialShape, radialX, radialY]);

  var getColorString = function getColorString() {
    return "".concat(colorOne, " ").concat(colorOnePosition, "% , ").concat(colorTwo, " ").concat(colorTwoPosition, "%");
  };

  var getRadialGradient = function getRadialGradient() {
    return "radial-gradient(".concat(radialShape, " at ").concat(radialX, "% ").concat(radialY, "%, ").concat(getColorString(), ")");
  };

  var getLinearGradient = function getLinearGradient() {
    return "linear-gradient(".concat(angle, "deg, ").concat(getColorString(), ")");
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "eb-gradient-control"
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Gradient Type"),
    className: "eb-gradient-toggle-label"
  }, /*#__PURE__*/React.createElement(_toggle_button__WEBPACK_IMPORTED_MODULE_0__["default"], {
    defaultSelected: gradientType === "linear" ? _constants__WEBPACK_IMPORTED_MODULE_1__["GRADIENT_TYPE"][0] : _constants__WEBPACK_IMPORTED_MODULE_1__["GRADIENT_TYPE"][1],
    options: _constants__WEBPACK_IMPORTED_MODULE_1__["GRADIENT_TYPE"],
    onChange: function onChange(gradientType) {
      return setGradientType(gradientType);
    }
  })), gradientType === "radial" && /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Radial Type"),
    className: "eb-gradient-toggle-label"
  }, /*#__PURE__*/React.createElement(_toggle_button__WEBPACK_IMPORTED_MODULE_0__["default"], {
    defaultSelected: radialShape === "ellipse" ? _constants__WEBPACK_IMPORTED_MODULE_1__["RADIAL_TYPES"][0] : _constants__WEBPACK_IMPORTED_MODULE_1__["RADIAL_TYPES"][1],
    options: _constants__WEBPACK_IMPORTED_MODULE_1__["RADIAL_TYPES"],
    onChange: function onChange(radialShape) {
      return setRadialShape(radialShape);
    }
  })), /*#__PURE__*/React.createElement(BaseControl, {
    label: "First Color",
    className: "eb-color-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(Tooltip, {
        text: colorOne || "default"
      }, /*#__PURE__*/React.createElement("div", {
        className: "eb-color-ball",
        style: colorOne && colorBallStyles
      }, /*#__PURE__*/React.createElement("div", {
        style: _objectSpread(_objectSpread({}, colorStyles), {}, {
          backgroundColor: colorOne
        }),
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": colorOne || "default"
      })));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(ColorPicker, {
        color: colorOne,
        onChangeComplete: function onChangeComplete(_ref3) {
          var rgb = _ref3.rgb;
          setColorOne("rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")"));
        }
      });
    }
  })), /*#__PURE__*/React.createElement(BaseControl, {
    label: "Second Color",
    className: "eb-color-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    renderToggle: function renderToggle(_ref4) {
      var isOpen = _ref4.isOpen,
          onToggle = _ref4.onToggle;
      return /*#__PURE__*/React.createElement(Tooltip, {
        text: colorTwo || "default"
      }, /*#__PURE__*/React.createElement("div", {
        className: "eb-color-ball",
        style: colorTwo && colorBallStyles
      }, /*#__PURE__*/React.createElement("div", {
        style: _objectSpread(_objectSpread({}, colorStyles), {}, {
          backgroundColor: colorTwo
        }),
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": colorTwo || "default"
      })));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(ColorPicker, {
        color: colorTwo,
        onChangeComplete: function onChangeComplete(_ref5) {
          var rgb = _ref5.rgb;
          setColorTwo("rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")"));
        }
      });
    }
  })), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("First Color Position"),
    value: colorOnePosition,
    onChange: function onChange(colorOnePosition) {
      return setColorOnePosition(colorOnePosition);
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Second Color Position"),
    value: colorTwoPosition,
    onChange: function onChange(colorTwoPosition) {
      return setColorTwoPosition(colorTwoPosition);
    },
    min: 0,
    max: 100
  }), gradientType === "linear" && /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Angle"),
    value: angle,
    onChange: function onChange(angle) {
      return setAngle(angle);
    },
    min: 0,
    max: 360
  }), gradientType === "radial" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Center X Position"),
    value: radialX,
    onChange: function onChange(radialX) {
      return setRadialX(radialX);
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Center Y Position"),
    value: radialY,
    onChange: function onChange(radialY) {
      return setRadialY(radialY);
    },
    min: 0,
    max: 100
  })));
}; // GradientColorControl.propTypes = {
//   gradientColor: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };


/* harmony default export */ __webpack_exports__["default"] = (GradientColorControl);

/***/ }),

/***/ "./util/helpers/backgroundHelpers.js":
/*!*******************************************!*\
  !*** ./util/helpers/backgroundHelpers.js ***!
  \*******************************************/
/*! exports provided: generateBackgroundAttributes, generateBackgroundControlStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBackgroundAttributes", function() { return generateBackgroundAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBackgroundControlStyles", function() { return generateBackgroundControlStyles; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// function to generate Background control's attributes
var generateBackgroundAttributes = function generateBackgroundAttributes(controlName) {
  var _objectSpread2, _objectSpread3, _mainBgiAttrs, _ovlWithoutBgiAttrs, _ovlBgiAttrs;

  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isBgDefaultGradient = defaults.isBgDefaultGradient,
      defaultFillColor = defaults.defaultFillColor,
      _defaults$defaultBgGr = defaults.defaultBgGradient,
      defaultBgGradient = _defaults$defaultBgGr === void 0 ? "linear-gradient(45deg,#00000000,#00000000)" : _defaults$defaultBgGr,
      _defaults$noOverlay = defaults.noOverlay,
      noOverlay = _defaults$noOverlay === void 0 ? false : _defaults$noOverlay,
      _defaults$noMainBgi = defaults.noMainBgi,
      noMainBgi = _defaults$noMainBgi === void 0 ? false : _defaults$noMainBgi,
      _defaults$noOverlayBg = defaults.noOverlayBgi,
      noOverlayBgi = _defaults$noOverlayBg === void 0 ? false : _defaults$noOverlayBg;
  var bgColorAttr = defaultFillColor ? _defineProperty({}, "".concat(controlName, "backgroundColor"), {
    type: "string",
    "default": defaultFillColor
  }) : _defineProperty({}, "".concat(controlName, "backgroundColor"), {
    type: "string"
  });

  var mainWithoutBgiAttrs = _objectSpread(_objectSpread((_objectSpread2 = {}, _defineProperty(_objectSpread2, "".concat(controlName, "bg_hoverType"), {
    type: "string",
    "default": "normal"
  }), _defineProperty(_objectSpread2, "".concat(controlName, "bg_transition"), {
    type: "number",
    "default": 0.5
  }), _defineProperty(_objectSpread2, "".concat(controlName, "backgroundType"), {
    type: "string",
    "default": isBgDefaultGradient === true ? "gradient" : "classic"
  }), _objectSpread2), bgColorAttr), {}, (_objectSpread3 = {}, _defineProperty(_objectSpread3, "".concat(controlName, "gradientColor"), {
    type: "string",
    "default": defaultBgGradient
  }), _defineProperty(_objectSpread3, "hov_".concat(controlName, "backgroundType"), {
    type: "string",
    "default": "classic"
  }), _defineProperty(_objectSpread3, "hov_".concat(controlName, "backgroundColor"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "hov_".concat(controlName, "gradientColor"), {
    type: "string"
  }), _objectSpread3));

  var mainBgiAttrs = (_mainBgiAttrs = {}, _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImageURL"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImageID"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgAttachment"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "TAB".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "MOB".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImageURL"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImageID"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgAttachment"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "hov_".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgCustomSize"), {
    type: "number"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgcustomPosX"), {
    type: "number"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgcustomPosY"), {
    type: "number"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "hov_TAB".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgCustomSize"), {
    type: "number"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgcustomPosX"), {
    type: "number"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgcustomPosY"), {
    type: "number"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_mainBgiAttrs, "hov_MOB".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _mainBgiAttrs);
  var ovlWithoutBgiAttrs = (_ovlWithoutBgiAttrs = {}, _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "isBgOverlay"), {
    type: "boolean",
    "default": false
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "ovl_bg_transition"), {
    type: "number",
    "default": 0.5
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "ovl_filtersTransition"), {
    type: "number",
    "default": 0.5
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "ovl_opacityTransition"), {
    type: "number",
    "default": 0.5
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "ovl_hoverType"), {
    type: "string",
    "default": "normal"
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "overlayType"), {
    type: "string",
    "default": "classic"
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "overlayColor"), {
    type: "string"
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "overlayGradient"), {
    type: "string",
    "default": "linear-gradient(45deg,#000000cc,#00000099)"
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "ovl_opacity"), {
    type: "number",
    "default": 0.5
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "ovl_blendMode"), {
    type: "string"
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "ovl_allowFilters"), {
    type: "boolean",
    "default": false
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "ovl_fltrBrightness"), {
    type: "number",
    "default": 100
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "ovl_fltrContrast"), {
    type: "number",
    "default": 100
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "ovl_fltrSaturation"), {
    type: "number",
    "default": 100
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "ovl_fltrBlur"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlWithoutBgiAttrs, "".concat(controlName, "ovl_fltrHue"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "overlayType"), {
    type: "string",
    "default": "classic"
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "overlayColor"), {
    type: "string"
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "overlayGradient"), {
    type: "string"
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "ovl_bgImageURL"), {
    type: "string"
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "ovl_bgImageID"), {
    type: "string"
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "ovl_bgImgAttachment"), {
    type: "string"
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "ovl_opacity"), {
    type: "number"
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "ovl_blendMode"), {
    type: "string"
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "ovl_allowFilters"), {
    type: "boolean",
    "default": false
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "ovl_fltrBrightness"), {
    type: "number"
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "ovl_fltrContrast"), {
    type: "number"
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "ovl_fltrSaturation"), {
    type: "number"
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "ovl_fltrBlur"), {
    type: "number"
  }), _defineProperty(_ovlWithoutBgiAttrs, "hov_".concat(controlName, "ovl_fltrHue"), {
    type: "number"
  }), _ovlWithoutBgiAttrs);
  var ovlBgiAttrs = (_ovlBgiAttrs = {}, _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImageURL"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImageID"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgAttachment"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_backgroundSize"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgPos"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "".concat(controlName, "ovl_bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_backgroundSize"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgPos"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "TAB".concat(controlName, "ovl_bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_backgroundSize"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgPos"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "MOB".concat(controlName, "ovl_bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_backgroundSize"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgPos"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "hov_".concat(controlName, "ovl_bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_backgroundSize"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgCustomSize"), {
    type: "number"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgPos"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosX"), {
    type: "number"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosY"), {
    type: "number"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "hov_TAB".concat(controlName, "ovl_bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_backgroundSize"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgCustomSize"), {
    type: "number"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgPos"), {
    type: "string"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosX"), {
    type: "number"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosY"), {
    type: "number"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ovlBgiAttrs, "hov_MOB".concat(controlName, "ovl_bgImgRepeat"), {
    type: "string"
  }), _ovlBgiAttrs);
  var result = noOverlay === true ? noMainBgi === true ? _objectSpread({}, mainWithoutBgiAttrs) : _objectSpread(_objectSpread({}, mainWithoutBgiAttrs), mainBgiAttrs) : noOverlayBgi === true && noMainBgi === true ? _objectSpread(_objectSpread({}, mainWithoutBgiAttrs), ovlWithoutBgiAttrs) : noOverlayBgi === true && noMainBgi === false ? _objectSpread(_objectSpread(_objectSpread({}, mainWithoutBgiAttrs), mainBgiAttrs), ovlWithoutBgiAttrs) : noOverlayBgi === false && noMainBgi === true ? _objectSpread(_objectSpread(_objectSpread({}, mainWithoutBgiAttrs), ovlWithoutBgiAttrs), ovlBgiAttrs) : _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, mainWithoutBgiAttrs), mainBgiAttrs), ovlWithoutBgiAttrs), ovlBgiAttrs); // console.log({ result });

  return result;
}; // function to generate Background control styles based on the unique controlName(prefix)

var generateBackgroundControlStyles = function generateBackgroundControlStyles(_ref3) {
  var controlName = _ref3.controlName,
      attributes = _ref3.attributes,
      _ref3$noOverlay = _ref3.noOverlay,
      noOverlay = _ref3$noOverlay === void 0 ? false : _ref3$noOverlay,
      _ref3$noMainBgi = _ref3.noMainBgi,
      noMainBgi = _ref3$noMainBgi === void 0 ? false : _ref3$noMainBgi,
      _ref3$noOverlayBgi = _ref3.noOverlayBgi,
      noOverlayBgi = _ref3$noOverlayBgi === void 0 ? false : _ref3$noOverlayBgi;
  var bg_transition = attributes["".concat(controlName, "bg_transition")],
      backgroundType = attributes["".concat(controlName, "backgroundType")],
      backgroundColor = attributes["".concat(controlName, "backgroundColor")],
      gradientColor = attributes["".concat(controlName, "gradientColor")],
      bgImageURL = attributes["".concat(controlName, "bgImageURL")],
      backgroundSize = attributes["".concat(controlName, "backgroundSize")],
      bgImgCustomSize = attributes["".concat(controlName, "bgImgCustomSize")],
      bgImgCustomSizeUnit = attributes["".concat(controlName, "bgImgCustomSizeUnit")],
      bgImgPos = attributes["".concat(controlName, "bgImgPos")],
      bgImgcustomPosX = attributes["".concat(controlName, "bgImgcustomPosX")],
      bgImgcustomPosXUnit = attributes["".concat(controlName, "bgImgcustomPosXUnit")],
      bgImgcustomPosY = attributes["".concat(controlName, "bgImgcustomPosY")],
      bgImgcustomPosYUnit = attributes["".concat(controlName, "bgImgcustomPosYUnit")],
      bgImgAttachment = attributes["".concat(controlName, "bgImgAttachment")],
      bgImgRepeat = attributes["".concat(controlName, "bgImgRepeat")],
      TABbackgroundSize = attributes["TAB".concat(controlName, "backgroundSize")],
      TABbgImgCustomSize = attributes["TAB".concat(controlName, "bgImgCustomSize")],
      TABbgImgCustomSizeUnit = attributes["TAB".concat(controlName, "bgImgCustomSizeUnit")],
      TABbgImgPos = attributes["TAB".concat(controlName, "bgImgPos")],
      TABbgImgcustomPosX = attributes["TAB".concat(controlName, "bgImgcustomPosX")],
      TABbgImgcustomPosXUnit = attributes["TAB".concat(controlName, "bgImgcustomPosXUnit")],
      TABbgImgcustomPosY = attributes["TAB".concat(controlName, "bgImgcustomPosY")],
      TABbgImgcustomPosYUnit = attributes["TAB".concat(controlName, "bgImgcustomPosYUnit")],
      TABbgImgRepeat = attributes["TAB".concat(controlName, "bgImgRepeat")],
      MOBbackgroundSize = attributes["MOB".concat(controlName, "backgroundSize")],
      MOBbgImgCustomSize = attributes["MOB".concat(controlName, "bgImgCustomSize")],
      MOBbgImgCustomSizeUnit = attributes["MOB".concat(controlName, "bgImgCustomSizeUnit")],
      MOBbgImgPos = attributes["MOB".concat(controlName, "bgImgPos")],
      MOBbgImgcustomPosX = attributes["MOB".concat(controlName, "bgImgcustomPosX")],
      MOBbgImgcustomPosXUnit = attributes["MOB".concat(controlName, "bgImgcustomPosXUnit")],
      MOBbgImgcustomPosY = attributes["MOB".concat(controlName, "bgImgcustomPosY")],
      MOBbgImgcustomPosYUnit = attributes["MOB".concat(controlName, "bgImgcustomPosYUnit")],
      MOBbgImgRepeat = attributes["MOB".concat(controlName, "bgImgRepeat")],
      hov_backgroundType = attributes["hov_".concat(controlName, "backgroundType")],
      hov_backgroundColor = attributes["hov_".concat(controlName, "backgroundColor")],
      hov_gradientColor = attributes["hov_".concat(controlName, "gradientColor")],
      hov_bgImageURL = attributes["hov_".concat(controlName, "bgImageURL")],
      hov_bgImgAttachment = attributes["hov_".concat(controlName, "bgImgAttachment")],
      hov_backgroundSize = attributes["hov_".concat(controlName, "backgroundSize")],
      hov_bgImgCustomSize = attributes["hov_".concat(controlName, "bgImgCustomSize")],
      hov_bgImgCustomSizeUnit = attributes["hov_".concat(controlName, "bgImgCustomSizeUnit")],
      hov_bgImgPos = attributes["hov_".concat(controlName, "bgImgPos")],
      hov_bgImgcustomPosX = attributes["hov_".concat(controlName, "bgImgcustomPosX")],
      hov_bgImgcustomPosXUnit = attributes["hov_".concat(controlName, "bgImgcustomPosXUnit")],
      hov_bgImgcustomPosY = attributes["hov_".concat(controlName, "bgImgcustomPosY")],
      hov_bgImgcustomPosYUnit = attributes["hov_".concat(controlName, "bgImgcustomPosYUnit")],
      hov_bgImgRepeat = attributes["hov_".concat(controlName, "bgImgRepeat")],
      hov_TABbackgroundSize = attributes["hov_TAB".concat(controlName, "backgroundSize")],
      hov_TABbgImgCustomSize = attributes["hov_TAB".concat(controlName, "bgImgCustomSize")],
      hov_TABbgImgCustomSizeUnit = attributes["hov_TAB".concat(controlName, "bgImgCustomSizeUnit")],
      hov_TABbgImgPos = attributes["hov_TAB".concat(controlName, "bgImgPos")],
      hov_TABbgImgcustomPosX = attributes["hov_TAB".concat(controlName, "bgImgcustomPosX")],
      hov_TABbgImgcustomPosXUnit = attributes["hov_TAB".concat(controlName, "bgImgcustomPosXUnit")],
      hov_TABbgImgcustomPosY = attributes["hov_TAB".concat(controlName, "bgImgcustomPosY")],
      hov_TABbgImgcustomPosYUnit = attributes["hov_TAB".concat(controlName, "bgImgcustomPosYUnit")],
      hov_TABbgImgRepeat = attributes["hov_TAB".concat(controlName, "bgImgRepeat")],
      hov_MOBbackgroundSize = attributes["hov_MOB".concat(controlName, "backgroundSize")],
      hov_MOBbgImgCustomSize = attributes["hov_MOB".concat(controlName, "bgImgCustomSize")],
      hov_MOBbgImgCustomSizeUnit = attributes["hov_MOB".concat(controlName, "bgImgCustomSizeUnit")],
      hov_MOBbgImgPos = attributes["hov_MOB".concat(controlName, "bgImgPos")],
      hov_MOBbgImgcustomPosX = attributes["hov_MOB".concat(controlName, "bgImgcustomPosX")],
      hov_MOBbgImgcustomPosXUnit = attributes["hov_MOB".concat(controlName, "bgImgcustomPosXUnit")],
      hov_MOBbgImgcustomPosY = attributes["hov_MOB".concat(controlName, "bgImgcustomPosY")],
      hov_MOBbgImgcustomPosYUnit = attributes["hov_MOB".concat(controlName, "bgImgcustomPosYUnit")],
      hov_MOBbgImgRepeat = attributes["hov_MOB".concat(controlName, "bgImgRepeat")],
      isBgOverlay = attributes["".concat(controlName, "isBgOverlay")],
      ovl_bg_transition = attributes["".concat(controlName, "ovl_bg_transition")],
      ovl_filtersTransition = attributes["".concat(controlName, "ovl_filtersTransition")],
      ovl_opacityTransition = attributes["".concat(controlName, "ovl_opacityTransition")],
      overlayType = attributes["".concat(controlName, "overlayType")],
      overlayColor = attributes["".concat(controlName, "overlayColor")],
      overlayGradient = attributes["".concat(controlName, "overlayGradient")],
      ovl_bgImageURL = attributes["".concat(controlName, "ovl_bgImageURL")],
      ovl_bgImgAttachment = attributes["".concat(controlName, "ovl_bgImgAttachment")],
      ovl_opacity = attributes["".concat(controlName, "ovl_opacity")],
      ovl_blendMode = attributes["".concat(controlName, "ovl_blendMode")],
      ovl_allowFilters = attributes["".concat(controlName, "ovl_allowFilters")],
      ovl_fltrBrightness = attributes["".concat(controlName, "ovl_fltrBrightness")],
      ovl_fltrContrast = attributes["".concat(controlName, "ovl_fltrContrast")],
      ovl_fltrSaturation = attributes["".concat(controlName, "ovl_fltrSaturation")],
      ovl_fltrBlur = attributes["".concat(controlName, "ovl_fltrBlur")],
      ovl_fltrHue = attributes["".concat(controlName, "ovl_fltrHue")],
      ovl_backgroundSize = attributes["".concat(controlName, "ovl_backgroundSize")],
      ovl_bgImgCustomSize = attributes["".concat(controlName, "ovl_bgImgCustomSize")],
      ovl_bgImgCustomSizeUnit = attributes["".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      ovl_bgImgPos = attributes["".concat(controlName, "ovl_bgImgPos")],
      ovl_bgImgcustomPosX = attributes["".concat(controlName, "ovl_bgImgcustomPosX")],
      ovl_bgImgcustomPosXUnit = attributes["".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      ovl_bgImgcustomPosY = attributes["".concat(controlName, "ovl_bgImgcustomPosY")],
      ovl_bgImgcustomPosYUnit = attributes["".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      ovl_bgImgRepeat = attributes["".concat(controlName, "ovl_bgImgRepeat")],
      TABovl_backgroundSize = attributes["TAB".concat(controlName, "ovl_backgroundSize")],
      TABovl_bgImgCustomSize = attributes["TAB".concat(controlName, "ovl_bgImgCustomSize")],
      TABovl_bgImgCustomSizeUnit = attributes["TAB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      TABovl_bgImgPos = attributes["TAB".concat(controlName, "ovl_bgImgPos")],
      TABovl_bgImgcustomPosX = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosX")],
      TABovl_bgImgcustomPosXUnit = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      TABovl_bgImgcustomPosY = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosY")],
      TABovl_bgImgcustomPosYUnit = attributes["TAB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      TABovl_bgImgRepeat = attributes["TAB".concat(controlName, "ovl_bgImgRepeat")],
      MOBovl_backgroundSize = attributes["MOB".concat(controlName, "ovl_backgroundSize")],
      MOBovl_bgImgCustomSize = attributes["MOB".concat(controlName, "ovl_bgImgCustomSize")],
      MOBovl_bgImgCustomSizeUnit = attributes["MOB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      MOBovl_bgImgPos = attributes["MOB".concat(controlName, "ovl_bgImgPos")],
      MOBovl_bgImgcustomPosX = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosX")],
      MOBovl_bgImgcustomPosXUnit = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      MOBovl_bgImgcustomPosY = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosY")],
      MOBovl_bgImgcustomPosYUnit = attributes["MOB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      MOBovl_bgImgRepeat = attributes["MOB".concat(controlName, "ovl_bgImgRepeat")],
      hov_overlayType = attributes["hov_".concat(controlName, "overlayType")],
      hov_overlayColor = attributes["hov_".concat(controlName, "overlayColor")],
      hov_overlayGradient = attributes["hov_".concat(controlName, "overlayGradient")],
      hov_ovl_bgImageURL = attributes["hov_".concat(controlName, "ovl_bgImageURL")],
      hov_ovl_bgImgAttachment = attributes["hov_".concat(controlName, "ovl_bgImgAttachment")],
      hov_ovl_opacity = attributes["hov_".concat(controlName, "ovl_opacity")],
      hov_ovl_blendMode = attributes["hov_".concat(controlName, "ovl_blendMode")],
      hov_ovl_allowFilters = attributes["hov_".concat(controlName, "ovl_allowFilters")],
      hov_ovl_fltrBrightness = attributes["hov_".concat(controlName, "ovl_fltrBrightness")],
      hov_ovl_fltrContrast = attributes["hov_".concat(controlName, "ovl_fltrContrast")],
      hov_ovl_fltrSaturation = attributes["hov_".concat(controlName, "ovl_fltrSaturation")],
      hov_ovl_fltrBlur = attributes["hov_".concat(controlName, "ovl_fltrBlur")],
      hov_ovl_fltrHue = attributes["hov_".concat(controlName, "ovl_fltrHue")],
      hov_ovl_backgroundSize = attributes["hov_".concat(controlName, "ovl_backgroundSize")],
      hov_ovl_bgImgCustomSize = attributes["hov_".concat(controlName, "ovl_bgImgCustomSize")],
      hov_ovl_bgImgCustomSizeUnit = attributes["hov_".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      hov_ovl_bgImgPos = attributes["hov_".concat(controlName, "ovl_bgImgPos")],
      hov_ovl_bgImgcustomPosX = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosX")],
      hov_ovl_bgImgcustomPosXUnit = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      hov_ovl_bgImgcustomPosY = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosY")],
      hov_ovl_bgImgcustomPosYUnit = attributes["hov_".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      hov_ovl_bgImgRepeat = attributes["hov_".concat(controlName, "ovl_bgImgRepeat")],
      hov_TABovl_backgroundSize = attributes["hov_TAB".concat(controlName, "ovl_backgroundSize")],
      hov_TABovl_bgImgCustomSize = attributes["hov_TAB".concat(controlName, "ovl_bgImgCustomSize")],
      hov_TABovl_bgImgCustomSizeUnit = attributes["hov_TAB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      hov_TABovl_bgImgPos = attributes["hov_TAB".concat(controlName, "ovl_bgImgPos")],
      hov_TABovl_bgImgcustomPosX = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosX")],
      hov_TABovl_bgImgcustomPosXUnit = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      hov_TABovl_bgImgcustomPosY = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosY")],
      hov_TABovl_bgImgcustomPosYUnit = attributes["hov_TAB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      hov_TABovl_bgImgRepeat = attributes["hov_TAB".concat(controlName, "ovl_bgImgRepeat")],
      hov_MOBovl_backgroundSize = attributes["hov_MOB".concat(controlName, "ovl_backgroundSize")],
      hov_MOBovl_bgImgCustomSize = attributes["hov_MOB".concat(controlName, "ovl_bgImgCustomSize")],
      hov_MOBovl_bgImgCustomSizeUnit = attributes["hov_MOB".concat(controlName, "ovl_bgImgCustomSizeUnit")],
      hov_MOBovl_bgImgPos = attributes["hov_MOB".concat(controlName, "ovl_bgImgPos")],
      hov_MOBovl_bgImgcustomPosX = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosX")],
      hov_MOBovl_bgImgcustomPosXUnit = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosXUnit")],
      hov_MOBovl_bgImgcustomPosY = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosY")],
      hov_MOBovl_bgImgcustomPosYUnit = attributes["hov_MOB".concat(controlName, "ovl_bgImgcustomPosYUnit")],
      hov_MOBovl_bgImgRepeat = attributes["hov_MOB".concat(controlName, "ovl_bgImgRepeat")];
  var backgroundStylesDesktop = "\n      background-image: ".concat(noMainBgi === false && backgroundType === "classic" && bgImageURL ? "url(\"".concat(bgImageURL, "\")") : backgroundType === "gradient" ? gradientColor : "none", ";\n  \n      ").concat(noMainBgi === false && backgroundType === "classic" && bgImageURL ? "\n          ".concat(backgroundSize && backgroundSize !== "custom" ? "background-size: ".concat(backgroundSize, ";") : backgroundSize === "custom" ? "background-size: ".concat(bgImgCustomSize).concat(bgImgCustomSizeUnit, " auto;") : " ", "\n  \n          ").concat(bgImgPos && bgImgPos !== "custom" ? "background-position: ".concat(bgImgPos, ";") : bgImgPos === "custom" ? "background-position: ".concat(bgImgcustomPosX).concat(bgImgcustomPosXUnit, " ").concat(bgImgcustomPosY).concat(bgImgcustomPosYUnit, ";") : " ", "\n  \n          ").concat(bgImgAttachment ? "background-attachment: ".concat(bgImgAttachment, ";") : " ", "\n  \n          ").concat(bgImgRepeat ? "background-repeat: ".concat(bgImgRepeat, ";") : " ", "\n          \n         \n          ") : " ", "\n\n      ").concat(isBgOverlay ? "\n            z-index: 2;\n            position: relative;\n          " : " ", "\t\n    \n      ").concat(backgroundColor ? "background-color: ".concat(backgroundColor, ";") : " ", "\n  \n    ");
  var hoverBackgroundStylesDesktop = "\n  \n    ".concat(noMainBgi === false && hov_backgroundType === "classic" && hov_bgImageURL || hov_backgroundType === "gradient" && hov_gradientColor ? "\n        background-image: ".concat(noMainBgi === false && hov_backgroundType === "classic" && hov_bgImageURL ? "url(\"".concat(hov_bgImageURL, "\")") : hov_backgroundType === "gradient" && hov_gradientColor ? hov_gradientColor : "none", ";    \n        ") : " ", "\n  \n   \n  \n    ").concat(noMainBgi === false && hov_backgroundType === "classic" && hov_bgImageURL ? "\n        ".concat(hov_backgroundSize && hov_backgroundSize !== "custom" ? "background-size: ".concat(hov_backgroundSize, ";") : hov_backgroundSize === "custom" ? "background-size: ".concat(hov_bgImgCustomSize).concat(hov_bgImgCustomSizeUnit, " auto;") : " ", "\n  \n        ").concat(hov_bgImgPos && hov_bgImgPos !== "custom" ? "background-position: ".concat(hov_bgImgPos, ";") : hov_bgImgPos === "custom" ? "background-position: ".concat(hov_bgImgcustomPosX).concat(hov_bgImgcustomPosXUnit, " ").concat(hov_bgImgcustomPosY).concat(hov_bgImgcustomPosYUnit, ";") : " ", "\n  \n        ").concat(hov_bgImgAttachment ? "background-attachment: ".concat(hov_bgImgAttachment, ";") : " ", "\n  \n        ").concat(hov_bgImgRepeat ? "background-repeat: ".concat(hov_bgImgRepeat, ";") : " ", "\n        \n        ") : " ", "\n  \n        ").concat(hov_backgroundColor ? "background-color: ".concat(hov_backgroundColor, ";") : " ", "\n  \n  ");
  var backgroundStylesTab = "\n      ".concat(noMainBgi === false && backgroundType === "classic" && bgImageURL ? "\n          ".concat(TABbackgroundSize && TABbackgroundSize !== "custom" ? "background-size: ".concat(TABbackgroundSize, ";") : TABbackgroundSize === "custom" ? "background-size: ".concat(TABbgImgCustomSize).concat(TABbgImgCustomSizeUnit, " auto;") : " ", "\n  \n          ").concat(TABbgImgPos && TABbgImgPos !== "custom" ? "background-position: ".concat(TABbgImgPos, ";") : TABbgImgPos === "custom" ? "background-position: ".concat(TABbgImgcustomPosX).concat(TABbgImgcustomPosXUnit, " ").concat(TABbgImgcustomPosY).concat(TABbgImgcustomPosYUnit, ";") : " ", "\n  \n          ").concat(TABbgImgRepeat ? "background-repeat: ".concat(TABbgImgRepeat, ";") : " ", "\n          background-attachment: scroll;\n          ") : " ", "\n  \n    ");
  var hoverBackgroundStylesTab = "\n    ".concat(noMainBgi === false && hov_backgroundType === "classic" && hov_bgImageURL ? "\n        ".concat(hov_TABbackgroundSize && hov_TABbackgroundSize !== "custom" ? "background-size: ".concat(hov_TABbackgroundSize, ";") : hov_TABbackgroundSize === "custom" ? "background-size: ".concat(hov_TABbgImgCustomSize).concat(hov_TABbgImgCustomSizeUnit, " auto;") : " ", "\n  \n        ").concat(hov_TABbgImgPos && hov_TABbgImgPos !== "custom" ? "background-position: ".concat(hov_TABbgImgPos, ";") : hov_TABbgImgPos === "custom" ? "background-position: ".concat(hov_TABbgImgcustomPosX).concat(hov_TABbgImgcustomPosXUnit, " ").concat(hov_TABbgImgcustomPosY).concat(hov_TABbgImgcustomPosYUnit, ";") : " ", "\n  \n        ").concat(hov_TABbgImgRepeat ? "background-repeat: ".concat(hov_TABbgImgRepeat, ";") : " ", "\n        background-attachment: scroll;\n        ") : " ", "\n  \n  ");
  var backgroundStylesMobile = "\n      ".concat(noMainBgi === false && backgroundType === "classic" && bgImageURL ? "\n          ".concat(MOBbackgroundSize && MOBbackgroundSize !== "custom" ? "background-size: ".concat(MOBbackgroundSize, ";") : MOBbackgroundSize === "custom" ? "background-size: ".concat(MOBbgImgCustomSize).concat(MOBbgImgCustomSizeUnit, " auto;") : " ", "\n  \n          ").concat(MOBbgImgPos && MOBbgImgPos !== "custom" ? "background-position: ".concat(MOBbgImgPos, ";") : MOBbgImgPos === "custom" ? "background-position: ".concat(MOBbgImgcustomPosX).concat(MOBbgImgcustomPosXUnit, " ").concat(MOBbgImgcustomPosY).concat(MOBbgImgcustomPosYUnit, ";") : " ", "\n  \n          ").concat(MOBbgImgRepeat ? "background-repeat: ".concat(MOBbgImgRepeat, ";") : " ", "\n  \n          ") : " ", "\n  \n    ");
  var hoverBackgroundStylesMobile = "\n    ".concat(noMainBgi === false && hov_backgroundType === "classic" && hov_bgImageURL ? "\n        ".concat(hov_MOBbackgroundSize && hov_MOBbackgroundSize !== "custom" ? "background-size: ".concat(hov_MOBbackgroundSize, ";") : hov_MOBbackgroundSize === "custom" ? "background-size: ".concat(hov_MOBbgImgCustomSize).concat(hov_MOBbgImgCustomSizeUnit, " auto;") : " ", "\n    \n        ").concat(hov_MOBbgImgPos && hov_MOBbgImgPos !== "custom" ? "background-position: ".concat(hov_MOBbgImgPos, ";") : hov_MOBbgImgPos === "custom" ? "background-position: ".concat(hov_MOBbgImgcustomPosX).concat(hov_MOBbgImgcustomPosXUnit, " ").concat(hov_MOBbgImgcustomPosY).concat(hov_MOBbgImgcustomPosYUnit, ";") : " ", "\n    \n        ").concat(hov_MOBbgImgRepeat ? "background-repeat: ".concat(hov_MOBbgImgRepeat, ";") : " ", "\n    \n        ") : " ", "\n    \n    "); // console.log({ ovl_blendMode });

  var overlayStylesDesktop = "\n    \n      ".concat(noOverlay === false && isBgOverlay ? "\n            content: \"\";\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            right: 0;\n            left: 0;\n            z-index: 0;\n            background-image: ".concat(noOverlayBgi === false && overlayType === "classic" && ovl_bgImageURL ? "url(\"".concat(ovl_bgImageURL, "\")") : overlayType === "gradient" ? overlayGradient : "none", ";\n            ").concat(overlayColor ? "background-color: ".concat(overlayColor, ";") : " ", "\n            ").concat(ovl_opacity || ovl_opacity === 0 ? "opacity: ".concat(ovl_opacity, ";") : " ", "\n            ").concat(ovl_blendMode ? "mix-blend-mode: ".concat(ovl_blendMode, ";") : " ", "\n            ").concat(ovl_allowFilters ? "filter: brightness( ".concat(ovl_fltrBrightness, "% ) contrast( ").concat(ovl_fltrContrast, "% ) saturate( ").concat(ovl_fltrSaturation, "% ) blur( ").concat(ovl_fltrBlur, "px ) hue-rotate( \n              ").concat(ovl_fltrHue, "deg );") : " ", "\n  \n        ").concat(noOverlayBgi === false && overlayType === "classic" && ovl_bgImageURL ? "\n            ".concat(ovl_backgroundSize && ovl_backgroundSize !== "custom" ? "background-size: ".concat(ovl_backgroundSize, ";") : ovl_backgroundSize === "custom" ? "background-size: ".concat(ovl_bgImgCustomSize).concat(ovl_bgImgCustomSizeUnit, " auto;") : " ", "\n  \n            ").concat(ovl_bgImgPos && ovl_bgImgPos !== "custom" ? "background-position: ".concat(ovl_bgImgPos, ";") : ovl_bgImgPos === "custom" ? "background-position: ".concat(ovl_bgImgcustomPosX).concat(ovl_bgImgcustomPosXUnit, " ").concat(ovl_bgImgcustomPosY).concat(ovl_bgImgcustomPosYUnit, ";") : " ", "\n  \n            ").concat(ovl_bgImgAttachment ? "background-attachment: ".concat(ovl_bgImgAttachment, ";") : " ", "\n  \n            ").concat(ovl_bgImgRepeat ? "background-repeat: ".concat(ovl_bgImgRepeat, ";") : " ", "\n            \n            ") : " ", "\n  \n        ") : " ", "\n    \n    \n    ");
  var hoverOverlayStylesDesktop = "\n    \n    ".concat(noOverlay === false && isBgOverlay ? "\n        ".concat(noOverlayBgi === false && hov_overlayType === "classic" && hov_ovl_bgImageURL || hov_overlayType === "gradient" && hov_overlayGradient ? "\n          background-image: ".concat(noOverlayBgi === false && hov_overlayType === "classic" && hov_ovl_bgImageURL ? "url(\"".concat(hov_ovl_bgImageURL, "\")") : hov_overlayType === "gradient" && hov_overlayGradient ? hov_overlayGradient : "none", ";\n          ") : " ", "\n  \n        ").concat(hov_overlayColor ? "background-color: ".concat(hov_overlayColor, ";") : " ", "\n        ").concat(hov_ovl_opacity || hov_ovl_opacity === 0 ? "opacity: ".concat(hov_ovl_opacity, ";") : " ", "\n        ").concat(hov_ovl_blendMode ? "mix-blend-mode: ".concat(hov_ovl_blendMode, ";") : " ", "\n        ").concat(hov_ovl_allowFilters ? "filter: brightness( ".concat(hov_ovl_fltrBrightness, "% ) contrast( ").concat(hov_ovl_fltrContrast, "% ) saturate( ").concat(hov_ovl_fltrSaturation, "% ) blur( ").concat(hov_ovl_fltrBlur, "px ) hue-rotate( \n          ").concat(hov_ovl_fltrHue, "deg );") : " ", "\n    \n      ").concat(noOverlayBgi === false && hov_overlayType === "classic" && hov_ovl_bgImageURL ? "\n          ".concat(hov_ovl_backgroundSize && hov_ovl_backgroundSize !== "custom" ? "background-size: ".concat(hov_ovl_backgroundSize, ";") : hov_ovl_backgroundSize === "custom" ? "background-size: ".concat(hov_ovl_bgImgCustomSize).concat(hov_ovl_bgImgCustomSizeUnit, " auto;") : " ", "\n    \n          ").concat(hov_ovl_bgImgPos && hov_ovl_bgImgPos !== "custom" ? "background-position: ".concat(hov_ovl_bgImgPos, ";") : hov_ovl_bgImgPos === "custom" ? "background-position: ".concat(hov_ovl_bgImgcustomPosX).concat(hov_ovl_bgImgcustomPosXUnit, " ").concat(hov_ovl_bgImgcustomPosY).concat(hov_ovl_bgImgcustomPosYUnit, ";") : " ", "\n    \n          ").concat(hov_ovl_bgImgAttachment ? "background-attachment: ".concat(hov_ovl_bgImgAttachment, ";") : " ", "\n    \n          ").concat(hov_ovl_bgImgRepeat ? "background-repeat: ".concat(hov_ovl_bgImgRepeat, ";") : " ", "\n          \n          ") : " ", "\n    \n      ") : " ", "\n    \n    \n    ");
  var overlayStylesTab = "\n    ".concat(noOverlay === false && noOverlayBgi === false && isBgOverlay && overlayType === "classic" && ovl_bgImageURL ? "\n        ".concat(TABovl_backgroundSize && TABovl_backgroundSize !== "custom" ? "background-size: ".concat(TABovl_backgroundSize, ";") : TABovl_backgroundSize === "custom" ? "background-size: ".concat(TABovl_bgImgCustomSize).concat(TABovl_bgImgCustomSizeUnit, " auto;") : " ", "\n  \n          ").concat(TABovl_bgImgPos && TABovl_bgImgPos !== "custom" ? "background-position: ".concat(TABovl_bgImgPos, ";") : TABovl_bgImgPos === "custom" ? "background-position: ".concat(TABovl_bgImgcustomPosX).concat(TABovl_bgImgcustomPosXUnit, " ").concat(TABovl_bgImgcustomPosY).concat(TABovl_bgImgcustomPosYUnit, ";") : " ", "\n  \n          ").concat(TABovl_bgImgRepeat ? "background-repeat: ".concat(TABovl_bgImgRepeat, ";") : " ", "\n          background-attachment: scroll;\n        ") : " ", "\n    \n    ");
  var hoverOverlayStylesTab = "\n  ".concat(noOverlay === false && noOverlayBgi === false && isBgOverlay && hov_overlayType === "classic" && hov_ovl_bgImageURL ? "\n      ".concat(hov_TABovl_backgroundSize && hov_TABovl_backgroundSize !== "custom" ? "background-size: ".concat(hov_TABovl_backgroundSize, ";") : hov_TABovl_backgroundSize === "custom" ? "background-size: ".concat(hov_TABovl_bgImgCustomSize).concat(hov_TABovl_bgImgCustomSizeUnit, " auto;") : " ", "\n  \n        ").concat(hov_TABovl_bgImgPos && hov_TABovl_bgImgPos !== "custom" ? "background-position: ".concat(hov_TABovl_bgImgPos, ";") : hov_TABovl_bgImgPos === "custom" ? "background-position: ".concat(hov_TABovl_bgImgcustomPosX).concat(hov_TABovl_bgImgcustomPosXUnit, " ").concat(hov_TABovl_bgImgcustomPosY).concat(hov_TABovl_bgImgcustomPosYUnit, ";") : " ", "\n  \n        ").concat(hov_TABovl_bgImgRepeat ? "background-repeat: ".concat(hov_TABovl_bgImgRepeat, ";") : " ", "\n        background-attachment: scroll;\n      ") : " ", "\n  \n  ");
  var overlayStylesMobile = "\n    ".concat(noOverlay === false && noOverlayBgi === false && isBgOverlay && overlayType === "classic" && ovl_bgImageURL ? "\n        ".concat(MOBovl_backgroundSize && MOBovl_backgroundSize !== "custom" ? "background-size: ".concat(MOBovl_backgroundSize, ";") : MOBovl_backgroundSize === "custom" ? "background-size: ".concat(MOBovl_bgImgCustomSize).concat(MOBovl_bgImgCustomSizeUnit, " auto;") : " ", "\n  \n        ").concat(MOBovl_bgImgPos && MOBovl_bgImgPos !== "custom" ? "background-position: ".concat(MOBovl_bgImgPos, ";") : MOBovl_bgImgPos === "custom" ? "background-position: ".concat(MOBovl_bgImgcustomPosX).concat(MOBovl_bgImgcustomPosXUnit, " ").concat(MOBovl_bgImgcustomPosY).concat(MOBovl_bgImgcustomPosYUnit, ";") : " ", "\n  \n        ").concat(MOBovl_bgImgRepeat ? "background-repeat: ".concat(MOBovl_bgImgRepeat, ";") : " ", "\n        ") : " ", "\n    \n    ");
  var hoverOverlayStylesMobile = "\n    ".concat(noOverlay === false && noOverlayBgi === false && isBgOverlay && hov_overlayType === "classic" && hov_ovl_bgImageURL ? "\n        ".concat(hov_MOBovl_backgroundSize && hov_MOBovl_backgroundSize !== "custom" ? "background-size: ".concat(hov_MOBovl_backgroundSize, ";") : hov_MOBovl_backgroundSize === "custom" ? "background-size: ".concat(hov_MOBovl_bgImgCustomSize).concat(hov_MOBovl_bgImgCustomSizeUnit, " auto;") : " ", "\n  \n        ").concat(hov_MOBovl_bgImgPos && hov_MOBovl_bgImgPos !== "custom" ? "background-position: ".concat(hov_MOBovl_bgImgPos, ";") : hov_MOBovl_bgImgPos === "custom" ? "background-position: ".concat(hov_MOBovl_bgImgcustomPosX).concat(hov_MOBovl_bgImgcustomPosXUnit, " ").concat(hov_MOBovl_bgImgcustomPosY).concat(hov_MOBovl_bgImgcustomPosYUnit, ";") : " ", "\n  \n        ").concat(hov_MOBovl_bgImgRepeat ? "background-repeat: ".concat(hov_MOBovl_bgImgRepeat, ";") : " ", "\n        ") : " ", "\n    \n    ");
  var bgTransitionStyle = "background ".concat(bg_transition || 0, "s");
  var ovlTransitionStyle = "background ".concat(ovl_bg_transition || 0, "s, opacity ").concat(ovl_opacityTransition || 0, "s, filter ").concat(ovl_filtersTransition || 0, "s");
  return {
    backgroundStylesDesktop: backgroundStylesDesktop,
    hoverBackgroundStylesDesktop: hoverBackgroundStylesDesktop,
    backgroundStylesTab: backgroundStylesTab,
    hoverBackgroundStylesTab: hoverBackgroundStylesTab,
    backgroundStylesMobile: backgroundStylesMobile,
    hoverBackgroundStylesMobile: hoverBackgroundStylesMobile,
    overlayStylesDesktop: overlayStylesDesktop,
    hoverOverlayStylesDesktop: hoverOverlayStylesDesktop,
    overlayStylesTab: overlayStylesTab,
    hoverOverlayStylesTab: hoverOverlayStylesTab,
    overlayStylesMobile: overlayStylesMobile,
    hoverOverlayStylesMobile: hoverOverlayStylesMobile,
    bgTransitionStyle: bgTransitionStyle,
    ovlTransitionStyle: ovlTransitionStyle
  };
};

/***/ }),

/***/ "./util/helpers/borderShadowHelpers.js":
/*!*********************************************!*\
  !*** ./util/helpers/borderShadowHelpers.js ***!
  \*********************************************/
/*! exports provided: generateBorderShadowAttributes, generateBorderShadowStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBorderShadowAttributes", function() { return generateBorderShadowAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBorderShadowStyles", function() { return generateBorderShadowStyles; });
/* harmony import */ var _dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dimensionHelpers */ "./util/helpers/dimensionHelpers.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Important: the following "generateBorderShadowAttributes" function must be declared below the "generateDimensionsAttributes" function declaration
// function to generate BorderShadow control's attributes

var generateBorderShadowAttributes = function generateBorderShadowAttributes(controlName) {
  var _objectSpread2, _shdAttrs, _transitionAttrs;

  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _defaults$bdrDefaults = defaults.bdrDefaults,
      bdrDefaults = _defaults$bdrDefaults === void 0 ? {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  } : _defaults$bdrDefaults,
      _defaults$rdsDefaults = defaults.rdsDefaults,
      rdsDefaults = _defaults$rdsDefaults === void 0 ? {} : _defaults$rdsDefaults,
      _defaults$noBorder = defaults.noBorder,
      noBorder = _defaults$noBorder === void 0 ? false : _defaults$noBorder,
      _defaults$noShadow = defaults.noShadow,
      noShadow = _defaults$noShadow === void 0 ? false : _defaults$noShadow;

  var bdrAttrs = _objectSpread(_objectSpread(_objectSpread(_objectSpread((_objectSpread2 = {}, _defineProperty(_objectSpread2, "".concat(controlName, "BorderType"), {
    type: "string",
    "default": "normal"
  }), _defineProperty(_objectSpread2, "".concat(controlName, "borderColor"), {
    type: "string"
  }), _defineProperty(_objectSpread2, "".concat(controlName, "borderStyle"), {
    type: "string",
    "default": "none"
  }), _defineProperty(_objectSpread2, "".concat(controlName, "HborderColor"), {
    type: "string"
  }), _defineProperty(_objectSpread2, "".concat(controlName, "HborderStyle"), {
    type: "string",
    "default": "none"
  }), _objectSpread2), Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__["generateDimensionsAttributes"])("".concat(controlName, "Bdr_"), bdrDefaults)), Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__["generateDimensionsAttributes"])("".concat(controlName, "Rds_"), rdsDefaults)), Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__["generateDimensionsAttributes"])("".concat(controlName, "HBdr_"))), Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__["generateDimensionsAttributes"])("".concat(controlName, "HRds_")));

  var shdAttrs = (_shdAttrs = {}, _defineProperty(_shdAttrs, "".concat(controlName, "hOffset"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "vOffset"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "blur"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "spread"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "shadowColor"), {
    type: "string"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "inset"), {
    type: "boolean",
    "default": false
  }), _defineProperty(_shdAttrs, "".concat(controlName, "shadowType"), {
    type: "string",
    "default": "normal"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "hoverHOffset"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "hoverVOffset"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "hoverBlur"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "hoverSpread"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "hoverShadowColor"), {
    type: "string"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "hoverInset"), {
    type: "boolean",
    "default": false
  }), _shdAttrs);
  var transitionAttrs = (_transitionAttrs = {}, _defineProperty(_transitionAttrs, "".concat(controlName, "borderTransition"), {
    type: "number",
    "default": 0.5
  }), _defineProperty(_transitionAttrs, "".concat(controlName, "radiusTransition"), {
    type: "number",
    "default": 0.5
  }), _defineProperty(_transitionAttrs, "".concat(controlName, "shadowTransition"), {
    type: "number",
    "default": 0.5
  }), _transitionAttrs);

  if (noBorder === true) {
    return _objectSpread(_objectSpread({}, shdAttrs), transitionAttrs);
  } else if (noShadow === true) {
    return _objectSpread(_objectSpread({}, bdrAttrs), transitionAttrs);
  } else {
    return _objectSpread(_objectSpread(_objectSpread({}, bdrAttrs), shdAttrs), transitionAttrs);
  } // const result = {
  //   // Border Shadow attributes ⬇
  //   // border attributes ⬇
  //   [`${controlName}BorderType`]: {
  //     type: "string",
  //     default: "normal",
  //   },
  //   [`${controlName}borderColor`]: {
  //     type: "string",
  //   },
  //   [`${controlName}borderStyle`]: {
  //     type: "string",
  //     default: "none",
  //   },
  //   [`${controlName}HborderColor`]: {
  //     type: "string",
  //   },
  //   [`${controlName}HborderStyle`]: {
  //     type: "string",
  //     default: "none",
  //   },
  //   // shadow attributes  ⬇
  //   [`${controlName}hOffset`]: {
  //     type: "number",
  //   },
  //   [`${controlName}vOffset`]: {
  //     type: "number",
  //   },
  //   [`${controlName}blur`]: {
  //     type: "number",
  //   },
  //   [`${controlName}spread`]: {
  //     type: "number",
  //   },
  //   [`${controlName}shadowColor`]: {
  //     type: "string",
  //   },
  //   [`${controlName}inset`]: {
  //     type: "boolean",
  //     default: false,
  //   },
  //   [`${controlName}shadowType`]: {
  //     type: "string",
  //     default: "normal",
  //   },
  //   [`${controlName}hoverHOffset`]: {
  //     type: "number",
  //   },
  //   [`${controlName}hoverVOffset`]: {
  //     type: "number",
  //   },
  //   [`${controlName}hoverBlur`]: {
  //     type: "number",
  //   },
  //   [`${controlName}hoverSpread`]: {
  //     type: "number",
  //   },
  //   [`${controlName}hoverShadowColor`]: {
  //     type: "string",
  //   },
  //   [`${controlName}hoverInset`]: {
  //     type: "boolean",
  //     default: false,
  //   },
  //   [`${controlName}borderTransition`]: {
  //     type: "string",
  //     default: "500",
  //   },
  //   ...generateDimensionsAttributes(`${controlName}Bdr_`, bdrDefaults),
  //   ...generateDimensionsAttributes(`${controlName}Rds_`, rdsDefaults),
  //   ...generateDimensionsAttributes(`${controlName}HBdr_`),
  //   ...generateDimensionsAttributes(`${controlName}HRds_`),
  // };
  // console.log("---generateBorderShadowAttributes:", { result });
  // return result;

}; // Important: the following "generateBorderShadowStyles" function must be declared below the "generateDimensionsControlStyles" function declaration
// function to generate BorderShadow control's Styles for an element based on it's controlName(prefix)

var generateBorderShadowStyles = function generateBorderShadowStyles(_ref) {
  var controlName = _ref.controlName,
      attributes = _ref.attributes,
      noBorder = _ref.noBorder,
      noShadow = _ref.noShadow;
  var borderStylesDesktop = "";
  var borderStylesTab = "";
  var borderStylesMobile = "";
  var radiusStylesDesktop = "";
  var radiusStylesTab = "";
  var radiusStylesMobile = "";
  var HborderStylesDesktop = "";
  var HborderStylesTab = "";
  var HborderStylesMobile = "";
  var HradiusStylesDesktop = "";
  var HradiusStylesTab = "";
  var HradiusStylesMobile = "";

  if (noBorder !== true) {
    var _generateDimensionsCo = Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__["generateDimensionsControlStyles"])({
      controlName: "".concat(controlName, "Bdr_"),
      styleFor: "border",
      attributes: attributes
    }),
        F_borderStylesDesktop = _generateDimensionsCo.dimensionStylesDesktop,
        F_borderStylesTab = _generateDimensionsCo.dimensionStylesTab,
        F_borderStylesMobile = _generateDimensionsCo.dimensionStylesMobile;

    var _generateDimensionsCo2 = Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__["generateDimensionsControlStyles"])({
      controlName: "".concat(controlName, "Rds_"),
      styleFor: "border-radius",
      attributes: attributes
    }),
        F_radiusStylesDesktop = _generateDimensionsCo2.dimensionStylesDesktop,
        F_radiusStylesTab = _generateDimensionsCo2.dimensionStylesTab,
        F_radiusStylesMobile = _generateDimensionsCo2.dimensionStylesMobile;

    var _generateDimensionsCo3 = Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__["generateDimensionsControlStyles"])({
      controlName: "".concat(controlName, "HBdr_"),
      styleFor: "border",
      attributes: attributes
    }),
        F_HborderStylesDesktop = _generateDimensionsCo3.dimensionStylesDesktop,
        F_HborderStylesTab = _generateDimensionsCo3.dimensionStylesTab,
        F_HborderStylesMobile = _generateDimensionsCo3.dimensionStylesMobile;

    var _generateDimensionsCo4 = Object(_dimensionHelpers__WEBPACK_IMPORTED_MODULE_0__["generateDimensionsControlStyles"])({
      controlName: "".concat(controlName, "HRds_"),
      styleFor: "border-radius",
      attributes: attributes
    }),
        F_HradiusStylesDesktop = _generateDimensionsCo4.dimensionStylesDesktop,
        F_HradiusStylesTab = _generateDimensionsCo4.dimensionStylesTab,
        F_HradiusStylesMobile = _generateDimensionsCo4.dimensionStylesMobile;

    borderStylesDesktop = F_borderStylesDesktop;
    borderStylesTab = F_borderStylesTab;
    borderStylesMobile = F_borderStylesMobile;
    radiusStylesDesktop = F_radiusStylesDesktop;
    radiusStylesTab = F_radiusStylesTab;
    radiusStylesMobile = F_radiusStylesMobile;
    HborderStylesDesktop = F_HborderStylesDesktop;
    HborderStylesTab = F_HborderStylesTab;
    HborderStylesMobile = F_HborderStylesMobile;
    HradiusStylesDesktop = F_HradiusStylesDesktop;
    HradiusStylesTab = F_HradiusStylesTab;
    HradiusStylesMobile = F_HradiusStylesMobile;
  } // const {
  //   dimensionStylesDesktop: borderStylesDesktop,
  //   dimensionStylesTab: borderStylesTab,
  //   dimensionStylesMobile: borderStylesMobile,
  // } = generateDimensionsControlStyles({
  //   controlName: `${controlName}Bdr_`,
  //   styleFor: "border",
  //   attributes,
  // });
  // const {
  //   dimensionStylesDesktop: radiusStylesDesktop,
  //   dimensionStylesTab: radiusStylesTab,
  //   dimensionStylesMobile: radiusStylesMobile,
  // } = generateDimensionsControlStyles({
  //   controlName: `${controlName}Rds_`,
  //   styleFor: "border-radius",
  //   attributes,
  // });
  // const {
  //   dimensionStylesDesktop: HborderStylesDesktop,
  //   dimensionStylesTab: HborderStylesTab,
  //   dimensionStylesMobile: HborderStylesMobile,
  // } = generateDimensionsControlStyles({
  //   controlName: `${controlName}HBdr_`,
  //   styleFor: "border",
  //   attributes,
  // });
  // const {
  //   dimensionStylesDesktop: HradiusStylesDesktop,
  //   dimensionStylesTab: HradiusStylesTab,
  //   dimensionStylesMobile: HradiusStylesMobile,
  // } = generateDimensionsControlStyles({
  //   controlName: `${controlName}HRds_`,
  //   styleFor: "border-radius",
  //   attributes,
  // });


  var borderStyle = attributes["".concat(controlName, "borderStyle")],
      _attributes$ = attributes["".concat(controlName, "borderColor")],
      borderColor = _attributes$ === void 0 ? "#333333" : _attributes$,
      HborderStyle = attributes["".concat(controlName, "HborderStyle")],
      _attributes$2 = attributes["".concat(controlName, "HborderColor")],
      HborderColor = _attributes$2 === void 0 ? borderColor : _attributes$2,
      shadowColor = attributes["".concat(controlName, "shadowColor")],
      _attributes$3 = attributes["".concat(controlName, "hOffset")],
      hOffset = _attributes$3 === void 0 ? 0 : _attributes$3,
      _attributes$4 = attributes["".concat(controlName, "vOffset")],
      vOffset = _attributes$4 === void 0 ? 0 : _attributes$4,
      _attributes$5 = attributes["".concat(controlName, "blur")],
      blur = _attributes$5 === void 0 ? 0 : _attributes$5,
      _attributes$6 = attributes["".concat(controlName, "spread")],
      spread = _attributes$6 === void 0 ? 0 : _attributes$6,
      inset = attributes["".concat(controlName, "inset")],
      _attributes$7 = attributes["".concat(controlName, "hoverShadowColor")],
      hoverShadowColor = _attributes$7 === void 0 ? shadowColor : _attributes$7,
      _attributes$8 = attributes["".concat(controlName, "hoverHOffset")],
      hoverHOffset = _attributes$8 === void 0 ? hOffset : _attributes$8,
      _attributes$9 = attributes["".concat(controlName, "hoverVOffset")],
      hoverVOffset = _attributes$9 === void 0 ? vOffset : _attributes$9,
      _attributes$10 = attributes["".concat(controlName, "hoverBlur")],
      hoverBlur = _attributes$10 === void 0 ? blur : _attributes$10,
      _attributes$11 = attributes["".concat(controlName, "hoverSpread")],
      hoverSpread = _attributes$11 === void 0 ? spread : _attributes$11,
      borderTransition = attributes["".concat(controlName, "borderTransition")],
      radiusTransition = attributes["".concat(controlName, "radiusTransition")],
      shadowTransition = attributes["".concat(controlName, "shadowTransition")];
  var styesDesktop = "  \n      ".concat(noBorder !== true ? "\n          ".concat(radiusStylesDesktop, "\n          ").concat(borderStyle !== "none" && borderColor ? "\n              ".concat(borderStylesDesktop, "\n              border-color: ").concat(borderColor, ";\n              border-style: ").concat(borderStyle, ";\n              ") : " ", "\n          ") : " ", "\n    \n      ").concat(noShadow !== true ? shadowColor ? "box-shadow: ".concat(shadowColor, " ").concat(hOffset, "px ").concat(vOffset, "px ").concat(blur, "px ").concat(spread, "px ").concat(inset ? "inset" : "", ";") : " " : " ", "\n  \n  \n    ");
  var styesTab = "  \n    ".concat(noBorder !== true ? "\n        ".concat(borderColor ? borderStylesTab : " ", "\n        ").concat(radiusStylesTab, "\n        ") : " ", "\n      \n    ");
  var styesMobile = "\n    ".concat(noBorder !== true ? "\n        ".concat(borderColor ? borderStylesMobile : " ", "\n        ").concat(radiusStylesMobile, "\n        ") : " ", "\n    ");
  var stylesHoverDesktop = "\n    ".concat(noBorder !== true ? "\n        ".concat(HborderStyle !== "none" ? "\n              ".concat(HborderColor !== borderColor ? "border-color: ".concat(HborderColor, ";") : " ", " \n              ").concat(HborderStyle !== borderStyle ? "border-style: ".concat(HborderStyle, ";") : " ", "\n              ").concat(HborderStylesDesktop, "\n            ") : " ", "\n  \n        ").concat(HradiusStylesDesktop, "    \n        ") : " ", "   \n     \n    ").concat(noShadow !== true ? hoverShadowColor ? "box-shadow: ".concat(hoverShadowColor, " ").concat(hoverHOffset, "px ").concat(hoverVOffset, "px ").concat(hoverBlur, "px ").concat(hoverSpread, "px ").concat(inset ? "inset" : " ", ";") : " " : " ", "\n  \n    ");
  var stylesHoverTab = "\n    ".concat(noBorder !== true ? "\n        ".concat(HborderStyle !== "none" ? HborderStylesTab : " ", "\n        ").concat(HradiusStylesTab, "  \n        ") : " ", "\n    ");
  var stylesHoverMobile = "\n    ".concat(noBorder !== true ? "\n        ".concat(HborderStyle !== "none" ? HborderStylesMobile : " ", "\n        ").concat(HradiusStylesMobile, "\n        ") : " ", "\n     \n    ");
  var transitionStyle = "\n  border ".concat(borderTransition || 0, "s, border-radius ").concat(radiusTransition || 0, "s, box-shadow ").concat(shadowTransition || 0, "s\n  ");
  return {
    styesDesktop: styesDesktop,
    styesTab: styesTab,
    styesMobile: styesMobile,
    stylesHoverDesktop: stylesHoverDesktop,
    stylesHoverTab: stylesHoverTab,
    stylesHoverMobile: stylesHoverMobile,
    transitionStyle: transitionStyle
  };
};

/***/ }),

/***/ "./util/helpers/dimensionHelpers.js":
/*!******************************************!*\
  !*** ./util/helpers/dimensionHelpers.js ***!
  \******************************************/
/*! exports provided: generateDimensionsAttributes, generateDimensionsControlStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDimensionsAttributes", function() { return generateDimensionsAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDimensionsControlStyles", function() { return generateDimensionsControlStyles; });
/* harmony import */ var _hasVal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasVal */ "./util/helpers/hasVal.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // function to generate New Dimensions-Control's attributes for multiple Dimensions control based on the array of values(prefixs)

var generateDimensionsAttributes = function generateDimensionsAttributes(controlName) {
  var _objectSpread2, _objectSpread3;

  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var top = defaults.top,
      right = defaults.right,
      bottom = defaults.bottom,
      left = defaults.left,
      _defaults$isLinked = defaults.isLinked,
      isLinked = _defaults$isLinked === void 0 ? true : _defaults$isLinked;
  var desktopTop = Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(top) ? _defineProperty({}, "".concat(controlName, "Top"), {
    type: "string",
    "default": "".concat(top)
  }) : _defineProperty({}, "".concat(controlName, "Top"), {
    type: "string"
  });
  var desktopRight = Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(right) ? _defineProperty({}, "".concat(controlName, "Right"), {
    type: "string",
    "default": "".concat(right)
  }) : _defineProperty({}, "".concat(controlName, "Right"), {
    type: "string"
  });
  var desktopBottom = Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(bottom) ? _defineProperty({}, "".concat(controlName, "Bottom"), {
    type: "string",
    "default": "".concat(bottom)
  }) : _defineProperty({}, "".concat(controlName, "Bottom"), {
    type: "string"
  });
  var desktopLeft = Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(left) ? _defineProperty({}, "".concat(controlName, "Left"), {
    type: "string",
    "default": "".concat(left)
  }) : _defineProperty({}, "".concat(controlName, "Left"), {
    type: "string"
  });
  return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread((_objectSpread2 = {}, _defineProperty(_objectSpread2, "".concat(controlName, "isLinked"), {
    type: "boolean",
    "default": isLinked
  }), _defineProperty(_objectSpread2, "".concat(controlName, "Unit"), {
    type: "string",
    "default": "px"
  }), _objectSpread2), desktopTop), desktopRight), desktopBottom), desktopLeft), {}, (_objectSpread3 = {}, _defineProperty(_objectSpread3, "TAB".concat(controlName, "Unit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_objectSpread3, "TAB".concat(controlName, "Top"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "TAB".concat(controlName, "Right"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "TAB".concat(controlName, "Bottom"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "TAB".concat(controlName, "Left"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "MOB".concat(controlName, "Unit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_objectSpread3, "MOB".concat(controlName, "Top"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "MOB".concat(controlName, "Right"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "MOB".concat(controlName, "Bottom"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "MOB".concat(controlName, "Left"), {
    type: "string"
  }), _objectSpread3));
}; //
// function to generate dimensions-controls styles for an element based on it's controlName(prefix)

var generateDimensionsControlStyles = function generateDimensionsControlStyles(_ref9) {
  var controlName = _ref9.controlName,
      styleFor = _ref9.styleFor,
      attributes = _ref9.attributes;
  var isLinked = attributes["".concat(controlName, "isLinked")],
      dimensionUnit = attributes["".concat(controlName, "Unit")],
      dimensionTop = attributes["".concat(controlName, "Top")],
      dimensionRight = attributes["".concat(controlName, "Right")],
      dimensionBottom = attributes["".concat(controlName, "Bottom")],
      dimensionLeft = attributes["".concat(controlName, "Left")],
      TABdimensionUnit = attributes["TAB".concat(controlName, "Unit")],
      TABdimensionTop = attributes["TAB".concat(controlName, "Top")],
      TABdimensionRight = attributes["TAB".concat(controlName, "Right")],
      TABdimensionBottom = attributes["TAB".concat(controlName, "Bottom")],
      TABdimensionLeft = attributes["TAB".concat(controlName, "Left")],
      MOBdimensionUnit = attributes["MOB".concat(controlName, "Unit")],
      MOBdimensionTop = attributes["MOB".concat(controlName, "Top")],
      MOBdimensionRight = attributes["MOB".concat(controlName, "Right")],
      MOBdimensionBottom = attributes["MOB".concat(controlName, "Bottom")],
      MOBdimensionLeft = attributes["MOB".concat(controlName, "Left")];
  var dimensionStylesDesktop = " ";
  var dimensionStylesTab = " ";
  var dimensionStylesMobile = " ";

  if (isLinked === true) {
    if (styleFor === "border") {
      dimensionStylesDesktop = "\n            ".concat(dimensionTop ? "border-width: ".concat(parseFloat(dimensionTop)).concat(dimensionUnit, "; ") : " ", "\n        \n            ");
      dimensionStylesTab = "\n                ".concat(TABdimensionTop ? "border-width: ".concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n    \n            ");
      dimensionStylesMobile = "\n                ".concat(MOBdimensionTop ? "border-width: ".concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n    \n            ");
    } else if (styleFor === "border-radius") {
      dimensionStylesDesktop = "\n                ".concat(dimensionTop ? "border-radius: ".concat(parseFloat(dimensionTop)).concat(dimensionUnit, ";") : " ", "\n        \n            ");
      dimensionStylesTab = "\n                ".concat(TABdimensionTop ? "border-radius: ".concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n    \n            ");
      dimensionStylesMobile = "\n                ".concat(MOBdimensionTop ? "border-radius: ".concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n    \n            ");
    } else {
      dimensionStylesDesktop = "\n            ".concat(dimensionTop ? "".concat(styleFor, ": ").concat(parseFloat(dimensionTop)).concat(dimensionUnit, ";") : " ", "\n        \n            ");
      dimensionStylesTab = "\n                ".concat(TABdimensionTop ? "".concat(styleFor, ": ").concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n    \n            ");
      dimensionStylesMobile = "\n                ".concat(MOBdimensionTop ? "".concat(styleFor, ": ").concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n    \n            ");
    }
  } else {
    if (styleFor === "border") {
      dimensionStylesDesktop = "\n            ".concat(dimensionTop ? "border-top-width: ".concat(parseFloat(dimensionTop)).concat(dimensionUnit, "; z-index:999;") : " ", "\n            ").concat(dimensionRight ? "border-right-width: ".concat(parseFloat(dimensionRight)).concat(dimensionUnit, ";") : " ", "\n            ").concat(dimensionLeft ? "border-left-width: ".concat(parseFloat(dimensionLeft)).concat(dimensionUnit, ";") : " ", "\n            ").concat(dimensionBottom ? "border-bottom-width: ".concat(parseFloat(dimensionBottom)).concat(dimensionUnit, ";") : " ", "\n        \n            ");
      dimensionStylesTab = "\n                ".concat(TABdimensionTop ? "border-top-width: ".concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionRight ? "border-right-width: ".concat(parseFloat(TABdimensionRight)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionLeft ? "border-left-width: ".concat(parseFloat(TABdimensionLeft)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionBottom ? "border-bottom-width: ".concat(parseFloat(TABdimensionBottom)).concat(TABdimensionUnit, ";") : " ", "\n    \n            ");
      dimensionStylesMobile = "\n                ".concat(MOBdimensionTop ? "border-top-width: ".concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionRight ? "border-right-width: ".concat(parseFloat(MOBdimensionRight)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionLeft ? "border-left-width: ".concat(parseFloat(MOBdimensionLeft)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionBottom ? "border-bottom-width: ".concat(parseFloat(MOBdimensionBottom)).concat(MOBdimensionUnit, ";") : " ", "\n    \n            ");
    } else if (styleFor === "border-radius") {
      dimensionStylesDesktop = "\n                ".concat(dimensionTop ? "border-top-left-radius: ".concat(parseFloat(dimensionTop)).concat(dimensionUnit, ";") : " ", "\n                ").concat(dimensionRight ? "border-top-right-radius: ".concat(parseFloat(dimensionRight)).concat(dimensionUnit, ";") : " ", "\n                ").concat(dimensionLeft ? "border-bottom-left-radius: ".concat(parseFloat(dimensionLeft)).concat(dimensionUnit, ";") : " ", "\n                ").concat(dimensionBottom ? "border-bottom-right-radius: ".concat(parseFloat(dimensionBottom)).concat(dimensionUnit, ";") : " ", "\n        \n            ");
      dimensionStylesTab = "\n                ".concat(TABdimensionTop ? "border-top-left-radius: ".concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionRight ? "border-top-right-radius: ".concat(parseFloat(TABdimensionRight)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionLeft ? "border-bottom-left-radius: ".concat(parseFloat(TABdimensionLeft)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionBottom ? "border-bottom-right-radius: ".concat(parseFloat(TABdimensionBottom)).concat(TABdimensionUnit, ";") : " ", "\n    \n            ");
      dimensionStylesMobile = "\n                ".concat(MOBdimensionTop ? "border-top-left-radius: ".concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionRight ? "border-top-right-radius: ".concat(parseFloat(MOBdimensionRight)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionLeft ? "border-bottom-left-radius: ".concat(parseFloat(MOBdimensionLeft)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionBottom ? "border-bottom-right-radius: ".concat(parseFloat(MOBdimensionBottom)).concat(MOBdimensionUnit, ";") : " ", "\n    \n            ");
    } else {
      dimensionStylesDesktop = "\n            ".concat(dimensionTop ? "".concat(styleFor, "-top: ").concat(parseFloat(dimensionTop)).concat(dimensionUnit, ";") : " ", "\n            ").concat(dimensionRight ? "".concat(styleFor, "-right: ").concat(parseFloat(dimensionRight)).concat(dimensionUnit, ";") : " ", "\n            ").concat(dimensionLeft ? "".concat(styleFor, "-left: ").concat(parseFloat(dimensionLeft)).concat(dimensionUnit, ";") : " ", "\n            ").concat(dimensionBottom ? "".concat(styleFor, "-bottom: ").concat(parseFloat(dimensionBottom)).concat(dimensionUnit, ";") : " ", "\n        \n            ");
      dimensionStylesTab = "\n                ".concat(TABdimensionTop ? "".concat(styleFor, "-top: ").concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionRight ? "".concat(styleFor, "-right: ").concat(parseFloat(TABdimensionRight)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionLeft ? "".concat(styleFor, "-left: ").concat(parseFloat(TABdimensionLeft)).concat(TABdimensionUnit, ";") : " ", "\n                ").concat(TABdimensionBottom ? "".concat(styleFor, "-bottom: ").concat(parseFloat(TABdimensionBottom)).concat(TABdimensionUnit, ";") : " ", "\n    \n            ");
      dimensionStylesMobile = "\n                ".concat(MOBdimensionTop ? "".concat(styleFor, "-top: ").concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionRight ? "".concat(styleFor, "-right: ").concat(parseFloat(MOBdimensionRight)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionLeft ? "".concat(styleFor, "-left: ").concat(parseFloat(MOBdimensionLeft)).concat(MOBdimensionUnit, ";") : " ", "\n                ").concat(MOBdimensionBottom ? "".concat(styleFor, "-bottom: ").concat(parseFloat(MOBdimensionBottom)).concat(MOBdimensionUnit, ";") : " ", "\n    \n            ");
    }
  } // console.log({
  //   dimensionStylesDesktop,
  //   // dimensionStylesTab,
  //   // dimensionStylesMobile,
  // });


  return {
    dimensionStylesDesktop: dimensionStylesDesktop,
    dimensionStylesTab: dimensionStylesTab,
    dimensionStylesMobile: dimensionStylesMobile
  };
};

/***/ }),

/***/ "./util/helpers/flipboxHelpers.js":
/*!****************************************!*\
  !*** ./util/helpers/flipboxHelpers.js ***!
  \****************************************/
/*! exports provided: getFlipTransform, getButtonClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlipTransform", function() { return getFlipTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getButtonClasses", function() { return getButtonClasses; });
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

/***/ }),

/***/ "./util/helpers/funcsForUseEffect.js":
/*!*******************************************!*\
  !*** ./util/helpers/funcsForUseEffect.js ***!
  \*******************************************/
/*! exports provided: mimmikCssForResBtns, mimmikCssForPreviewBtnClick, mimmikCssOnPreviewBtnClickWhileBlockSelected, duplicateBlockIdFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimmikCssForResBtns", function() { return mimmikCssForResBtns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimmikCssForPreviewBtnClick", function() { return mimmikCssForPreviewBtnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimmikCssOnPreviewBtnClickWhileBlockSelected", function() { return mimmikCssOnPreviewBtnClickWhileBlockSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateBlockIdFix", function() { return duplicateBlockIdFix; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
// function to mimmik css when clicking the responsive buttons in the inspector panel
var mimmikCssForResBtns = function mimmikCssForResBtns(_ref) {
  var _ref$isForPreviewButt = _ref.isForPreviewButton,
      isForPreviewButton = _ref$isForPreviewButt === void 0 ? false : _ref$isForPreviewButt,
      domObj = _ref.domObj,
      resOption = _ref.resOption;
  var allEbBlocksWrapper;

  if (isForPreviewButton) {
    allEbBlocksWrapper = domObj.querySelectorAll(".eb-guten-block-main-parent-wrapper > style");
  } else {
    allEbBlocksWrapper = domObj.querySelectorAll(".eb-guten-block-main-parent-wrapper:not(.is-selected) > style");
  }

  if (allEbBlocksWrapper.length < 1) return;
  allEbBlocksWrapper.forEach(function (styleTag) {
    var cssStrings = styleTag.textContent;
    var minCss = cssStrings.replace(/\s+/g, " "); // console.log({ minCss });

    var regexCssMimmikSpace = /(mimmikcssStart\s\*\/)(.+)(\/\*\smimmikcssEnd)/i;
    var newCssStrings = " ";

    if (resOption === "Tablet") {
      var tabCssStrings = (minCss.match(/tabcssStart\s\*\/(.+)(?=\/\*\stabcssEnd)/i) || [, " "])[1]; // console.log({ tabCssStrings });

      newCssStrings = minCss.replace(regexCssMimmikSpace, "$1 ".concat(tabCssStrings, " $3"));
    } else if (resOption === "Mobile") {
      var _tabCssStrings = (minCss.match(/tabcssStart\s\*\/(.+)(?=\/\*\stabcssEnd)/i) || [, " "])[1];
      var mobCssStrings = (minCss.match( // /(?<=mobcssStart\s\*\/).+(?=\/\*\smobcssEnd)/i
      /mobcssStart\s\*\/(.+)(?=\/\*\smobcssEnd)/i) || [, " "])[1]; // console.log({ tabCssStrings, mobCssStrings });

      newCssStrings = minCss.replace(regexCssMimmikSpace, "$1 ".concat(_tabCssStrings, " ").concat(mobCssStrings, " $3"));
    } else {
      newCssStrings = minCss.replace(regexCssMimmikSpace, "$1  $3");
    }

    styleTag.textContent = newCssStrings;
  });
}; //
// IMPORTANT: The following fuction declaration must be below the 'mimmikCssForResBtns' function declaration
// function to mimmik css for responsive preview when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button

var mimmikCssForPreviewBtnClick = function mimmikCssForPreviewBtnClick(_ref2) {
  var domObj = _ref2.domObj,
      select = _ref2.select;
  var bodyClasses = domObj.body.className;
  if (/eb\-mimmik\-added/i.test(bodyClasses)) return;
  domObj.body.classList.add("eb-mimmik-added");
  var wpResBtnsWrap = domObj.querySelector("#editor .edit-post-layout + .popover-slot");
  wpResBtnsWrap.addEventListener("click", function (e) {
    if (/block\-editor\-post\-preview__button\-resize|components\-menu\-item__item/i.test(e.target.className)) {
      setTimeout(function () {
        var resOption = select("core/edit-post").__experimentalGetPreviewDeviceType(); // console.log("---mimmikCssForPreviewBtnClick", { resOption });


        mimmikCssForResBtns({
          isForPreviewButton: true,
          domObj: domObj,
          resOption: resOption
        });
      }, 0);
    }
  });
}; // IMPORTANT: The following fuction declaration must be below the 'mimmikCssForResBtns' function declaration
// function to mimmik css for responsive preview when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM

var mimmikCssOnPreviewBtnClickWhileBlockSelected = function mimmikCssOnPreviewBtnClickWhileBlockSelected(_ref3) {
  var domObj = _ref3.domObj,
      select = _ref3.select,
      setAttributes = _ref3.setAttributes;
  var wpResBtnsWrap = domObj.querySelector("#editor .edit-post-layout + .popover-slot");

  var handleCLick = function handleCLick(e) {
    if (/block\-editor\-post\-preview__button\-resize|components\-menu\-item__item/i.test(e.target.className)) {
      setTimeout(function () {
        var resOption = select("core/edit-post").__experimentalGetPreviewDeviceType(); // console.log("---resoption from setTimeout", { resOption });


        mimmikCssForResBtns({
          isForPreviewButton: true,
          domObj: domObj,
          resOption: resOption
        });
        setAttributes({
          resOption: resOption
        });
      }, 0);
    }
  };

  wpResBtnsWrap.addEventListener("click", handleCLick);
  return function () {
    wpResBtnsWrap.removeEventListener("click", handleCLick);
  };
}; //
// this function is for creating a unique blockId for each block's unique className

var duplicateBlockIdFix = function duplicateBlockIdFix(_ref4) {
  var BLOCK_PREFIX = _ref4.BLOCK_PREFIX,
      blockId = _ref4.blockId,
      setAttributes = _ref4.setAttributes,
      select = _ref4.select,
      clientId = _ref4.clientId;
  var unique_id = BLOCK_PREFIX + "-" + Math.random().toString(36).substr(2, 7);
  /**
   * Define and Generate Unique Block ID
   */

  if (!blockId) {
    setAttributes({
      blockId: unique_id
    });
  }
  /**
   * Assign New Unique ID when duplicate BlockId found
   * Mostly happens when User Duplicate a Block
   */


  var all_blocks = select("core/block-editor").getBlocks(); // console.log({ all_blocks });

  var duplicateFound = false;

  var fixDuplicateBlockId = function fixDuplicateBlockId(blocks) {
    if (duplicateFound) return;

    var _iterator = _createForOfIteratorHelper(blocks),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        var innerBlocks = item.innerBlocks;

        if (item.attributes.blockId === blockId) {
          if (item.clientId !== clientId) {
            setAttributes({
              blockId: unique_id
            }); // console.log("found a duplicate");

            duplicateFound = true;
            return;
          } else if (innerBlocks.length > 0) {
            fixDuplicateBlockId(innerBlocks);
          }
        } else if (innerBlocks.length > 0) {
          fixDuplicateBlockId(innerBlocks);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  fixDuplicateBlockId(all_blocks);
};

/***/ }),

/***/ "./util/helpers/handlingPreviewBtnsHelpers.js":
/*!****************************************************!*\
  !*** ./util/helpers/handlingPreviewBtnsHelpers.js ***!
  \****************************************************/
/*! exports provided: handleDesktopBtnClick, handleTabBtnClick, handleMobileBtnClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleDesktopBtnClick", function() { return handleDesktopBtnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleTabBtnClick", function() { return handleTabBtnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleMobileBtnClick", function() { return handleMobileBtnClick; });
//
// These following 3 functions to handle the resBtns click
// function 1: to handle desktop button click
var handleDesktopBtnClick = function handleDesktopBtnClick(_ref) {
  var setPreviewDeviceType = _ref.setPreviewDeviceType,
      setAttributes = _ref.setAttributes;
  setAttributes({
    resOption: "Desktop"
  });
  setPreviewDeviceType("Desktop");
}; // function 2: to handle Tab button click

var handleTabBtnClick = function handleTabBtnClick(_ref2) {
  var setPreviewDeviceType = _ref2.setPreviewDeviceType,
      setAttributes = _ref2.setAttributes;
  setAttributes({
    resOption: "Tablet"
  });
  setPreviewDeviceType("Tablet");
}; // function 3: to handle Mobile button click

var handleMobileBtnClick = function handleMobileBtnClick(_ref3) {
  var setPreviewDeviceType = _ref3.setPreviewDeviceType,
      setAttributes = _ref3.setAttributes;
  setAttributes({
    resOption: "Mobile"
  });
  setPreviewDeviceType("Mobile");
};

/***/ }),

/***/ "./util/helpers/hasVal.js":
/*!********************************!*\
  !*** ./util/helpers/hasVal.js ***!
  \********************************/
/*! exports provided: hasVal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasVal", function() { return hasVal; });
// check if range controller input numbers  has value
var hasVal = function hasVal(val) {
  return val || val === 0;
};

/***/ }),

/***/ "./util/helpers/index.js":
/*!*******************************!*\
  !*** ./util/helpers/index.js ***!
  \*******************************/
/*! exports provided: generateBackgroundControlStyles, generateBackgroundAttributes, generateTypographyAttributes, generateTypographyStyles, generateDimensionsAttributes, generateDimensionsControlStyles, generateBorderShadowAttributes, generateBorderShadowStyles, generateResponsiveRangeStyles, generateResponsiveRangeAttributes, textInsideForEdit, generateRandomNumber, hardMinifyCssStrings, softMinifyCssStrings, isCssExists, handleDesktopBtnClick, handleTabBtnClick, handleMobileBtnClick, mimmikCssForResBtns, mimmikCssForPreviewBtnClick, mimmikCssOnPreviewBtnClickWhileBlockSelected, duplicateBlockIdFix, getFlipTransform, getButtonClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _backgroundHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backgroundHelpers */ "./util/helpers/backgroundHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateBackgroundControlStyles", function() { return _backgroundHelpers__WEBPACK_IMPORTED_MODULE_0__["generateBackgroundControlStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateBackgroundAttributes", function() { return _backgroundHelpers__WEBPACK_IMPORTED_MODULE_0__["generateBackgroundAttributes"]; });

/* harmony import */ var _typoHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typoHelpers */ "./util/helpers/typoHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateTypographyAttributes", function() { return _typoHelpers__WEBPACK_IMPORTED_MODULE_1__["generateTypographyAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateTypographyStyles", function() { return _typoHelpers__WEBPACK_IMPORTED_MODULE_1__["generateTypographyStyles"]; });

/* harmony import */ var _dimensionHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dimensionHelpers */ "./util/helpers/dimensionHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateDimensionsAttributes", function() { return _dimensionHelpers__WEBPACK_IMPORTED_MODULE_2__["generateDimensionsAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateDimensionsControlStyles", function() { return _dimensionHelpers__WEBPACK_IMPORTED_MODULE_2__["generateDimensionsControlStyles"]; });

/* harmony import */ var _borderShadowHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./borderShadowHelpers */ "./util/helpers/borderShadowHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateBorderShadowAttributes", function() { return _borderShadowHelpers__WEBPACK_IMPORTED_MODULE_3__["generateBorderShadowAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateBorderShadowStyles", function() { return _borderShadowHelpers__WEBPACK_IMPORTED_MODULE_3__["generateBorderShadowStyles"]; });

/* harmony import */ var _responsiveRangeHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./responsiveRangeHelpers */ "./util/helpers/responsiveRangeHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateResponsiveRangeStyles", function() { return _responsiveRangeHelpers__WEBPACK_IMPORTED_MODULE_4__["generateResponsiveRangeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateResponsiveRangeAttributes", function() { return _responsiveRangeHelpers__WEBPACK_IMPORTED_MODULE_4__["generateResponsiveRangeAttributes"]; });

/* harmony import */ var _miniHelperFuncs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./miniHelperFuncs */ "./util/helpers/miniHelperFuncs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textInsideForEdit", function() { return _miniHelperFuncs__WEBPACK_IMPORTED_MODULE_5__["textInsideForEdit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateRandomNumber", function() { return _miniHelperFuncs__WEBPACK_IMPORTED_MODULE_5__["generateRandomNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hardMinifyCssStrings", function() { return _miniHelperFuncs__WEBPACK_IMPORTED_MODULE_5__["hardMinifyCssStrings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "softMinifyCssStrings", function() { return _miniHelperFuncs__WEBPACK_IMPORTED_MODULE_5__["softMinifyCssStrings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCssExists", function() { return _miniHelperFuncs__WEBPACK_IMPORTED_MODULE_5__["isCssExists"]; });

/* harmony import */ var _handlingPreviewBtnsHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handlingPreviewBtnsHelpers */ "./util/helpers/handlingPreviewBtnsHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleDesktopBtnClick", function() { return _handlingPreviewBtnsHelpers__WEBPACK_IMPORTED_MODULE_6__["handleDesktopBtnClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleTabBtnClick", function() { return _handlingPreviewBtnsHelpers__WEBPACK_IMPORTED_MODULE_6__["handleTabBtnClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleMobileBtnClick", function() { return _handlingPreviewBtnsHelpers__WEBPACK_IMPORTED_MODULE_6__["handleMobileBtnClick"]; });

/* harmony import */ var _funcsForUseEffect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./funcsForUseEffect */ "./util/helpers/funcsForUseEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mimmikCssForResBtns", function() { return _funcsForUseEffect__WEBPACK_IMPORTED_MODULE_7__["mimmikCssForResBtns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mimmikCssForPreviewBtnClick", function() { return _funcsForUseEffect__WEBPACK_IMPORTED_MODULE_7__["mimmikCssForPreviewBtnClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mimmikCssOnPreviewBtnClickWhileBlockSelected", function() { return _funcsForUseEffect__WEBPACK_IMPORTED_MODULE_7__["mimmikCssOnPreviewBtnClickWhileBlockSelected"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "duplicateBlockIdFix", function() { return _funcsForUseEffect__WEBPACK_IMPORTED_MODULE_7__["duplicateBlockIdFix"]; });

/* harmony import */ var _flipboxHelpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./flipboxHelpers */ "./util/helpers/flipboxHelpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFlipTransform", function() { return _flipboxHelpers__WEBPACK_IMPORTED_MODULE_8__["getFlipTransform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getButtonClasses", function() { return _flipboxHelpers__WEBPACK_IMPORTED_MODULE_8__["getButtonClasses"]; });









 //
// // unused function
// export const getBackgroundImage = (type, gradientValue, imageURL) => {
//   switch (type) {
//     case "fill":
//       return "none";
//     case "gradient":
//       return gradientValue;
//     case "image":
//       if (imageURL) {
//         return `url(${imageURL})`;
//       }
//       return "none";
//   }
// };

/***/ }),

/***/ "./util/helpers/miniHelperFuncs.js":
/*!*****************************************!*\
  !*** ./util/helpers/miniHelperFuncs.js ***!
  \*****************************************/
/*! exports provided: textInsideForEdit, generateRandomNumber, hardMinifyCssStrings, softMinifyCssStrings, isCssExists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textInsideForEdit", function() { return textInsideForEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomNumber", function() { return generateRandomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hardMinifyCssStrings", function() { return hardMinifyCssStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "softMinifyCssStrings", function() { return softMinifyCssStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCssExists", function() { return isCssExists; });
// helper Functions: function 'textInsideForEdit' is for setting the innertext depending on whether separator should be shown and which separator should be shown in the number-counter block
var textInsideForEdit = function textInsideForEdit(value, isShowSeparator, separator) {
  return isShowSeparator ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator) : value.toString();
}; // generateRandomNumber function is for generating a random number

var generateRandomNumber = function generateRandomNumber() {
  return Math.floor(Math.random() * 1000000000);
}; // hardMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js

var hardMinifyCssStrings = function hardMinifyCssStrings(cssString) {
  // console.log({ cssString });
  return cssString.replace(/\s+/g, " ").replace(/(?<=\:).+(?=\;)/g, function (match) {
    // console.log({ match, g1, offset, string });
    return match.trim().replace(/\s+/g, "__s_p_a_c_e__");
  }) // .replace(/\s+(?!(?:[\w\d\.\-\#]+\{))/g, "")
  .replace(/\s+(?![\w\d\.\-\#]+\{)/g, "").replace(/\s+/g, " ").replace(/__s_p_a_c_e__/g, " ");
}; // softMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js

var softMinifyCssStrings = function softMinifyCssStrings(cssString) {
  return cssString.replace(/\s+/g, " ");
}; // check if css string is empty or not.

var isCssExists = function isCssExists(cssString) {
  return /.+(?=\:(?!hover)(?!focus))/.test(cssString);
};

/***/ }),

/***/ "./util/helpers/responsiveRangeHelpers.js":
/*!************************************************!*\
  !*** ./util/helpers/responsiveRangeHelpers.js ***!
  \************************************************/
/*! exports provided: generateResponsiveRangeAttributes, generateResponsiveRangeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateResponsiveRangeAttributes", function() { return generateResponsiveRangeAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateResponsiveRangeStyles", function() { return generateResponsiveRangeStyles; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// function to generate responsive range controller attributes for multiple range control based on the array of prefix
var generateResponsiveRangeAttributes = function generateResponsiveRangeAttributes(controlName) {
  var _ref3, _objectSpread2;

  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var defaultRange = defaults.defaultRange,
      noUnits = defaults.noUnits;
  var desktop = defaultRange ? _defineProperty({}, "".concat(controlName, "Range"), {
    type: "number",
    "default": defaultRange
  }) : _defineProperty({}, "".concat(controlName, "Range"), {
    type: "number"
  });
  var units = noUnits === true ? {} : (_ref3 = {}, _defineProperty(_ref3, "".concat(controlName, "Unit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ref3, "TAB".concat(controlName, "Unit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_ref3, "MOB".concat(controlName, "Unit"), {
    type: "string",
    "default": "px"
  }), _ref3);
  return _objectSpread(_objectSpread({}, desktop), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, "TAB".concat(controlName, "Range"), {
    type: "number"
  }), _defineProperty(_objectSpread2, "MOB".concat(controlName, "Range"), {
    type: "number"
  }), _objectSpread2), units);
}; // function to generate responsive range control styles for an element based on it's prefix

var generateResponsiveRangeStyles = function generateResponsiveRangeStyles(_ref4) {
  var controlName = _ref4.controlName,
      property = _ref4.property,
      attributes = _ref4.attributes,
      customUnit = _ref4.customUnit;
  // console.log({ controlName, property, attributes, customUnit });
  var desktopSizeUnit;
  var TABsizeUnit;
  var MOBsizeUnit;

  if (!customUnit) {
    desktopSizeUnit = attributes["".concat(controlName, "Unit")];
    TABsizeUnit = attributes["TAB".concat(controlName, "Unit")];
    MOBsizeUnit = attributes["MOB".concat(controlName, "Unit")];
  } else {
    desktopSizeUnit = TABsizeUnit = MOBsizeUnit = customUnit;
  }

  var desktopRange = attributes["".concat(controlName, "Range")],
      TABrange = attributes["TAB".concat(controlName, "Range")],
      MOBrange = attributes["MOB".concat(controlName, "Range")];
  var rangeStylesDesktop = desktopRange || desktopRange === 0 ? property + ":" + desktopRange + (customUnit || desktopSizeUnit) + ";" : "";
  var rangeStylesTab = TABrange || TABrange === 0 ? property + ":" + TABrange + (customUnit || TABsizeUnit) + ";" : "";
  var rangeStylesMobile = MOBrange || MOBrange === 0 ? property + ":" + MOBrange + (customUnit || MOBsizeUnit) + ";" : "";
  return {
    rangeStylesDesktop: rangeStylesDesktop,
    rangeStylesTab: rangeStylesTab,
    rangeStylesMobile: rangeStylesMobile
  };
};

/***/ }),

/***/ "./util/helpers/typoHelpers.js":
/*!*************************************!*\
  !*** ./util/helpers/typoHelpers.js ***!
  \*************************************/
/*! exports provided: generateTypographyAttributes, generateTypographyStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTypographyAttributes", function() { return generateTypographyAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTypographyStyles", function() { return generateTypographyStyles; });
/* harmony import */ var _hasVal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasVal */ "./util/helpers/hasVal.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // function to generate typography attributes for multiple typography control based on the array of prefix

var generateTypographyAttributes = function generateTypographyAttributes(prefixArray) {
  var typoAttrs = prefixArray.reduce(function (total, current) {
    var _result;

    var result = (_result = {}, _defineProperty(_result, "".concat(current, "FontFamily"), {
      type: "string"
    }), _defineProperty(_result, "".concat(current, "SizeUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "".concat(current, "FontSize"), {
      type: "number"
    }), _defineProperty(_result, "".concat(current, "FontWeight"), {
      type: "string"
    }), _defineProperty(_result, "".concat(current, "TextTransform"), {
      type: "string"
    }), _defineProperty(_result, "".concat(current, "TextDecoration"), {
      type: "string"
    }), _defineProperty(_result, "".concat(current, "LetterSpacingUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "".concat(current, "LetterSpacing"), {
      type: "number"
    }), _defineProperty(_result, "".concat(current, "LineHeightUnit"), {
      type: "string",
      "default": "em"
    }), _defineProperty(_result, "".concat(current, "LineHeight"), {
      type: "number"
    }), _defineProperty(_result, "TAB".concat(current, "SizeUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "TAB".concat(current, "FontSize"), {
      type: "number"
    }), _defineProperty(_result, "TAB".concat(current, "LetterSpacingUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "TAB".concat(current, "LetterSpacing"), {
      type: "number"
    }), _defineProperty(_result, "TAB".concat(current, "LineHeightUnit"), {
      type: "string",
      "default": "em"
    }), _defineProperty(_result, "TAB".concat(current, "LineHeight"), {
      type: "number"
    }), _defineProperty(_result, "MOB".concat(current, "SizeUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "MOB".concat(current, "FontSize"), {
      type: "number"
    }), _defineProperty(_result, "MOB".concat(current, "LetterSpacingUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "MOB".concat(current, "LetterSpacing"), {
      type: "number"
    }), _defineProperty(_result, "MOB".concat(current, "LineHeightUnit"), {
      type: "string",
      "default": "em"
    }), _defineProperty(_result, "MOB".concat(current, "LineHeight"), {
      type: "number"
    }), _result);
    return _objectSpread(_objectSpread({}, total), result);
  }, {}); //
  // console.log({ typoAttrs });

  return typoAttrs;
}; //
// function to generate typography styles for an element based on it's prefix

var generateTypographyStyles = function generateTypographyStyles(_ref) {
  var prefixConstant = _ref.prefixConstant,
      defaultFontSize = _ref.defaultFontSize,
      attributes = _ref.attributes;
  var fontFamily = attributes["".concat(prefixConstant, "FontFamily")],
      fontWeight = attributes["".concat(prefixConstant, "FontWeight")],
      textTransform = attributes["".concat(prefixConstant, "TextTransform")],
      textDecoration = attributes["".concat(prefixConstant, "TextDecoration")],
      _attributes$ = attributes["".concat(prefixConstant, "FontSize")],
      fontSize = _attributes$ === void 0 ? defaultFontSize : _attributes$,
      sizeUnit = attributes["".concat(prefixConstant, "SizeUnit")],
      letterSpacing = attributes["".concat(prefixConstant, "LetterSpacing")],
      letterSpacingUnit = attributes["".concat(prefixConstant, "LetterSpacingUnit")],
      lineHeight = attributes["".concat(prefixConstant, "LineHeight")],
      lineHeightUnit = attributes["".concat(prefixConstant, "LineHeightUnit")],
      TABsizeUnit = attributes["TAB".concat(prefixConstant, "SizeUnit")],
      TABletterSpacingUnit = attributes["TAB".concat(prefixConstant, "LetterSpacingUnit")],
      TABlineHeightUnit = attributes["TAB".concat(prefixConstant, "LineHeightUnit")],
      TABfontSize = attributes["TAB".concat(prefixConstant, "FontSize")],
      TABletterSpacing = attributes["TAB".concat(prefixConstant, "LetterSpacing")],
      TABlineHeight = attributes["TAB".concat(prefixConstant, "LineHeight")],
      MOBsizeUnit = attributes["MOB".concat(prefixConstant, "SizeUnit")],
      MOBletterSpacingUnit = attributes["MOB".concat(prefixConstant, "LetterSpacingUnit")],
      MOBlineHeightUnit = attributes["MOB".concat(prefixConstant, "LineHeightUnit")],
      MOBfontSize = attributes["MOB".concat(prefixConstant, "FontSize")],
      MOBletterSpacing = attributes["MOB".concat(prefixConstant, "LetterSpacing")],
      MOBlineHeight = attributes["MOB".concat(prefixConstant, "LineHeight")];
  var typoStylesDesktop = "\n              ".concat(fontFamily ? "font-family: ".concat(fontFamily, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(fontSize) ? "font-size: ".concat(fontSize).concat(sizeUnit, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(lineHeight) ? "line-height: ".concat(lineHeight).concat(lineHeightUnit, ";") : " ", "\n              ").concat(fontWeight ? "font-weight: ".concat(fontWeight, ";") : " ", "\n              ").concat(textDecoration ? "text-decoration: ".concat(textDecoration, ";") : " ", "\n              ").concat(textTransform ? "text-transform: ".concat(textTransform, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(letterSpacing) ? "letter-spacing: ".concat(letterSpacing).concat(letterSpacingUnit, ";") : " ", "\n          ");
  var typoStylesTab = "\n              ".concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(TABfontSize) ? "font-size: ".concat(TABfontSize).concat(TABsizeUnit, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(TABlineHeight) ? "line-height: ".concat(TABlineHeight).concat(TABlineHeightUnit, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(TABletterSpacing) ? "letter-spacing: ".concat(TABletterSpacing).concat(TABletterSpacingUnit, ";") : " ", "\n          ");
  var typoStylesMobile = "\n              ".concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(MOBfontSize) ? "font-size: ".concat(MOBfontSize).concat(MOBsizeUnit, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(MOBlineHeight) ? "line-height: ".concat(MOBlineHeight).concat(MOBlineHeightUnit, ";") : " ", "\n              ").concat(Object(_hasVal__WEBPACK_IMPORTED_MODULE_0__["hasVal"])(MOBletterSpacing) ? "letter-spacing: ".concat(MOBletterSpacing).concat(MOBletterSpacingUnit, ";") : " ", "\n          ");
  return {
    typoStylesDesktop: typoStylesDesktop,
    typoStylesTab: typoStylesTab,
    typoStylesMobile: typoStylesMobile
  };
};

/***/ }),

/***/ "./util/image-avatar/index.js":
/*!************************************!*\
  !*** ./util/image-avatar/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useState = wp.element.useState;

var ImageAvatar = function ImageAvatar(_ref) {
  var imageUrl = _ref.imageUrl,
      onDeleteImage = _ref.onDeleteImage;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hover = _useState2[0],
      setHover = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      deleteHover = _useState4[0],
      setDeleteHover = _useState4[1];

  var deleteButtonStyle = {
    visibility: hover ? "visible" : "hidden",
    backgroundColor: deleteHover ? "white" : "#64666a",
    color: "#b4b5b7",
    position: "absolute",
    right: 34,
    fontSize: 16,
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    cursor: "pointer"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "image-avatar",
    style: {
      backgroundImage: "url(".concat(imageUrl, ")")
    },
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "image-avatar-delete dashicons dashicons-trash",
    onMouseEnter: function onMouseEnter() {
      return setDeleteHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setDeleteHover(false);
    },
    style: deleteButtonStyle,
    onClick: function onClick() {
      return onDeleteImage();
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageAvatar);

/***/ }),

/***/ "./util/reset-control/index.js":
/*!*************************************!*\
  !*** ./util/reset-control/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var ResetControl = function ResetControl(_ref) {
  var onReset = _ref.onReset,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "eb-range-controller-container"
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "eb-range-reset-button",
    onClick: onReset
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "dashicon dashicons dashicons-image-rotate"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ResetControl);

/***/ }),

/***/ "./util/responsive-range-control/index.js":
/*!************************************************!*\
  !*** ./util/responsive-range-control/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _responsive_btn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./responsive-btn */ "./util/responsive-range-control/responsive-btn.js");
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unit-control */ "./util/unit-control/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var RangeControl = wp.components.RangeControl;



var ResponsiveRangeController = function ResponsiveRangeController(_ref) {
  var baseLabel = _ref.baseLabel,
      controlName = _ref.controlName,
      resRequiredProps = _ref.resRequiredProps,
      units = _ref.units,
      min = _ref.min,
      max = _ref.max,
      step = _ref.step,
      noUnits = _ref.noUnits;
  var attributes = resRequiredProps.attributes,
      setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption;
  var desktopSizeUnit;
  var TABsizeUnit;
  var MOBsizeUnit;
  var defaultUnits;
  var desktopRange = attributes["".concat(controlName, "Range")],
      TABrange = attributes["TAB".concat(controlName, "Range")],
      MOBrange = attributes["MOB".concat(controlName, "Range")];

  if (!noUnits) {
    desktopSizeUnit = attributes["".concat(controlName, "Unit")];
    TABsizeUnit = attributes["TAB".concat(controlName, "Unit")];
    MOBsizeUnit = attributes["MOB".concat(controlName, "Unit")];
    defaultUnits = [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }];
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "responsiveRangeControllerWrapper"
  }, noUnits ? /*#__PURE__*/React.createElement(React.Fragment, null, resOption == "Desktop" && /*#__PURE__*/React.createElement(_responsive_btn__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: baseLabel,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: desktopRange,
    onChange: function onChange(desktopRange) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "Range"), desktopRange));
    },
    step: step || 1,
    min: min || 0,
    max: max || 100
  })), resOption == "Tablet" && /*#__PURE__*/React.createElement(_responsive_btn__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: baseLabel,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: TABrange,
    onChange: function onChange(TABrange) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "Range"), TABrange));
    },
    step: step || 1,
    min: min || 0,
    max: max || 100
  })), resOption == "Mobile" && /*#__PURE__*/React.createElement(_responsive_btn__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: baseLabel,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: MOBrange,
    onChange: function onChange(MOBrange) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "Range"), MOBrange));
    },
    step: step || 1,
    min: min || 0,
    max: max || 100
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, resOption == "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: desktopSizeUnit,
    unitTypes: units || defaultUnits,
    onClick: function onClick(desktopSizeUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "Unit"), desktopSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_responsive_btn__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: baseLabel,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: desktopRange,
    onChange: function onChange(desktopRange) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "Range"), desktopRange));
    },
    step: desktopSizeUnit === "em" ? 0.1 : step,
    min: desktopSizeUnit === "px" ? min : 0,
    max: desktopSizeUnit === "px" ? max : 100
  }))), resOption == "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: TABsizeUnit,
    unitTypes: units || defaultUnits,
    onClick: function onClick(TABsizeUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "Unit"), TABsizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_responsive_btn__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: baseLabel,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: TABrange,
    onChange: function onChange(TABrange) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "Range"), TABrange));
    },
    step: TABsizeUnit === "em" ? 0.1 : step,
    min: TABsizeUnit === "px" ? min : 0,
    max: TABsizeUnit === "px" ? max : 100
  }))), resOption == "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedUnit: MOBsizeUnit,
    unitTypes: units || defaultUnits,
    onClick: function onClick(MOBsizeUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "Unit"), MOBsizeUnit));
    }
  }), /*#__PURE__*/React.createElement(_responsive_btn__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: baseLabel,
    resRequiredProps: resRequiredProps,
    controlName: controlName
  }, /*#__PURE__*/React.createElement(RangeControl, {
    value: MOBrange,
    onChange: function onChange(MOBrange) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "Range"), MOBrange));
    },
    step: MOBsizeUnit === "em" ? 0.1 : step,
    min: MOBsizeUnit === "px" ? min : 0,
    max: MOBsizeUnit === "px" ? max : 100
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ResponsiveRangeController);

/***/ }),

/***/ "./util/responsive-range-control/responsive-btn.js":
/*!*********************************************************!*\
  !*** ./util/responsive-range-control/responsive-btn.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithResBtns; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./util/helpers/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dispatch = wp.data.dispatch;

function WithResBtns(_ref) {
  var children = _ref.children,
      resRequiredProps = _ref.resRequiredProps,
      label = _ref.label,
      controlName = _ref.controlName,
      onReset = _ref.onReset;
  var setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption,
      objAttributes = resRequiredProps.objAttributes;

  onReset = function onReset() {
    resOption == "Desktop" ? setAttributes(_defineProperty({}, "".concat(controlName, "Range"), objAttributes["".concat(controlName, "Range")]["default"])) : "";
    resOption == "Tablet" ? setAttributes(_defineProperty({}, "TAB".concat(controlName, "Range"), objAttributes["TAB".concat(controlName, "Range")]["default"])) : "";
    resOption == "Mobile" ? setAttributes(_defineProperty({}, "MOB".concat(controlName, "Range"), objAttributes["MOB".concat(controlName, "Range")]["default"])) : "";
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "responsive-btn-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "responsive-btn"
  }, /*#__PURE__*/React.createElement("span", {
    className: "responsive-btn-label"
  }, label), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleDesktopBtnClick"])({
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType,
        setAttributes: setAttributes
      });
    },
    "class": "typoResButton dashicons dashicons-desktop ".concat(resOption === "Desktop" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleTabBtnClick"])({
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType,
        setAttributes: setAttributes
      });
    },
    "class": "typoResButton dashicons dashicons-tablet ".concat(resOption === "Tablet" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleMobileBtnClick"])({
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType,
        setAttributes: setAttributes
      });
    },
    "class": "typoResButton dashicons dashicons-smartphone ".concat(resOption === "Mobile" ? "active" : " ")
  })), /*#__PURE__*/React.createElement("div", {
    className: "eb-component-wrapper"
  }, children, /*#__PURE__*/React.createElement("button", {
    className: "eb-range-reset-button",
    onClick: onReset
  }, /*#__PURE__*/React.createElement("span", {
    className: "dashicon dashicons dashicons-image-rotate"
  }))));
}

/***/ }),

/***/ "./util/toggle-button/index.js":
/*!*************************************!*\
  !*** ./util/toggle-button/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _wp$element = wp.element,
    useEffect = _wp$element.useEffect,
    useState = _wp$element.useState;

var ToggleButton = function ToggleButton(_ref) {
  var options = _ref.options,
      onChange = _ref.onChange,
      defaultSelected = _ref.defaultSelected;

  var _useState = useState(defaultSelected || options[0]),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  useEffect(function () {
    onChange(selected.value);
  }, [selected]);
  useEffect(function () {
    if (defaultSelected) {
      setSelected(defaultSelected);
    }
  }, [defaultSelected]);
  return /*#__PURE__*/React.createElement("div", {
    id: "switch",
    className: "eb-switch-control"
  }, options.map(function (option) {
    return /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "gh",
      placeholder: "name",
      onChange: function onChange() {
        return setSelected(option);
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: selected.value === option.value ? "white" : "black"
      }
    }, option.label));
  }), /*#__PURE__*/React.createElement("span", {
    className: "slideBg",
    style: {
      backgroundColor: "#551ef7",
      transform: selected == options[0] ? "translateX(0)" : "translateX(100%)"
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ToggleButton);

/***/ }),

/***/ "./util/typography-control-v2/FontPicker.js":
/*!**************************************************!*\
  !*** ./util/typography-control-v2/FontPicker.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./util/typography-control-v2/constants.js");
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

/***/ "./util/typography-control-v2/Icon.js":
/*!********************************************!*\
  !*** ./util/typography-control-v2/Icon.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TypographyIcon = function TypographyIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve",
    style: {
      width: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M92.6 431.3c5.1 0 6.1-.5 10.7-1.5l91.9-18.4c9.7-2.5 19.4-7.1 27.1-14.8L444.9 174c34.2-34.2 34.2-92.9 0-127.1L426 27c-34.2-34.2-93.4-34.2-127.6 0L75.8 250.1c-7.2 7.1-12.3 17.4-14.8 27.1l-19.4 92.9c-2.5 17.4 2.6 34.2 14.8 46.5 9.7 9.6 24 14.7 36.2 14.7zM110 286.9L332.6 63.8c14.8-14.8 41.9-14.8 56.2 0l19.4 19.4c17.4 17.4 17.4 41.9 0 58.7L186.1 365l-94.4 15.8 18.3-93.9zm0 0M442.8 463H66.1c-14.8 0-24.5 9.7-24.5 24.5S53.9 512 66.1 512h374.7c14.8 0 27.1-9.7 27.1-24.5-.6-14.8-12.8-24.5-25.1-24.5zm0 0",
    className: "eb-typography-icon"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TypographyIcon);

/***/ }),

/***/ "./util/typography-control-v2/WithResButtons.js":
/*!******************************************************!*\
  !*** ./util/typography-control-v2/WithResButtons.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithResButtons; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./util/helpers/index.js");
var dispatch = wp.data.dispatch;

function WithResButtons(_ref) {
  var className = _ref.className,
      children = _ref.children,
      resOption = _ref.resOption,
      setAttributes = _ref.setAttributes;
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap_res ".concat(className || " ")
  }, /*#__PURE__*/React.createElement("div", {
    className: "resIcons"
  }, /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleDesktopBtnClick"])({
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType,
        setAttributes: setAttributes
      });
    },
    "class": "typoResButton dashicons dashicons-desktop ".concat(resOption === "Desktop" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleTabBtnClick"])({
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType,
        setAttributes: setAttributes
      });
    },
    "class": "typoResButton dashicons dashicons-tablet ".concat(resOption === "Tablet" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleMobileBtnClick"])({
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType,
        setAttributes: setAttributes
      });
    },
    "class": "typoResButton dashicons dashicons-smartphone ".concat(resOption === "Mobile" ? "active" : " ")
  })), children);
}

/***/ }),

/***/ "./util/typography-control-v2/constants.js":
/*!*************************************************!*\
  !*** ./util/typography-control-v2/constants.js ***!
  \*************************************************/
/*! exports provided: FONTS, sizeUnitTypes, optionsFontWeights, optionsTextTransforms, optionsTextDecorations, optionsLhLsp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONTS", function() { return FONTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeUnitTypes", function() { return sizeUnitTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsFontWeights", function() { return optionsFontWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsTextTransforms", function() { return optionsTextTransforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsTextDecorations", function() { return optionsTextDecorations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsLhLsp", function() { return optionsLhLsp; });
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
var sizeUnitTypes = [{
  label: "px",
  value: "px"
}, {
  label: "%",
  value: "%"
}, {
  label: "em",
  value: "em"
}];
var optionsFontWeights = [{
  label: __("Default"),
  value: ""
}, {
  label: __("100"),
  value: "100"
}, {
  label: __("200"),
  value: "200"
}, {
  label: __("300"),
  value: "300"
}, {
  label: __("400"),
  value: "400"
}, {
  label: __("500"),
  value: "500"
}, {
  label: __("600"),
  value: "600"
}, {
  label: __("700"),
  value: "700"
}, {
  label: __("800"),
  value: "800"
}, {
  label: __("900"),
  value: "900"
}];
var optionsTextTransforms = [{
  label: __("Default"),
  value: ""
}, {
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
var optionsTextDecorations = [{
  label: __("Default"),
  value: ""
}, {
  label: __("None"),
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
var optionsLhLsp = [{
  label: "px",
  value: "px"
}, {
  label: "em",
  value: "em"
}];

/***/ }),

/***/ "./util/typography-control-v2/index.js":
/*!*********************************************!*\
  !*** ./util/typography-control-v2/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit-control */ "./util/typography-control-v2/unit-control.js");
/* harmony import */ var _FontPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FontPicker */ "./util/typography-control-v2/FontPicker.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon */ "./util/typography-control-v2/Icon.js");
/* harmony import */ var _WithResButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WithResButtons */ "./util/typography-control-v2/WithResButtons.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./util/typography-control-v2/constants.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    Button = _wp$components.Button,
    Dropdown = _wp$components.Dropdown,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl;






function TypographyDropdown(_ref) {
  var baseLabel = _ref.baseLabel,
      typographyPrefixConstant = _ref.typographyPrefixConstant,
      resRequiredProps = _ref.resRequiredProps;
  var attributes = resRequiredProps.attributes,
      setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption;
  var fontFamily = attributes["".concat(typographyPrefixConstant, "FontFamily")],
      fontWeight = attributes["".concat(typographyPrefixConstant, "FontWeight")],
      textTransform = attributes["".concat(typographyPrefixConstant, "TextTransform")],
      textDecoration = attributes["".concat(typographyPrefixConstant, "TextDecoration")],
      fontSize = attributes["".concat(typographyPrefixConstant, "FontSize")],
      sizeUnit = attributes["".concat(typographyPrefixConstant, "SizeUnit")],
      letterSpacing = attributes["".concat(typographyPrefixConstant, "LetterSpacing")],
      letterSpacingUnit = attributes["".concat(typographyPrefixConstant, "LetterSpacingUnit")],
      lineHeight = attributes["".concat(typographyPrefixConstant, "LineHeight")],
      lineHeightUnit = attributes["".concat(typographyPrefixConstant, "LineHeightUnit")],
      TABsizeUnit = attributes["TAB".concat(typographyPrefixConstant, "SizeUnit")],
      TABletterSpacingUnit = attributes["TAB".concat(typographyPrefixConstant, "LetterSpacingUnit")],
      TABlineHeightUnit = attributes["TAB".concat(typographyPrefixConstant, "LineHeightUnit")],
      TABfontSize = attributes["TAB".concat(typographyPrefixConstant, "FontSize")],
      TABletterSpacing = attributes["TAB".concat(typographyPrefixConstant, "LetterSpacing")],
      TABlineHeight = attributes["TAB".concat(typographyPrefixConstant, "LineHeight")],
      MOBsizeUnit = attributes["MOB".concat(typographyPrefixConstant, "SizeUnit")],
      MOBletterSpacingUnit = attributes["MOB".concat(typographyPrefixConstant, "LetterSpacingUnit")],
      MOBlineHeightUnit = attributes["MOB".concat(typographyPrefixConstant, "LineHeightUnit")],
      MOBfontSize = attributes["MOB".concat(typographyPrefixConstant, "FontSize")],
      MOBletterSpacing = attributes["MOB".concat(typographyPrefixConstant, "LetterSpacing")],
      MOBlineHeight = attributes["MOB".concat(typographyPrefixConstant, "LineHeight")];
  return /*#__PURE__*/React.createElement(BaseControl, {
    label: __(baseLabel),
    className: "eb-typography-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(Button, {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, /*#__PURE__*/React.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], null));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement("div", {
        className: "eb-panel-control eb-typography-component-panel",
        style: {
          padding: "0.2rem"
        }
      }, /*#__PURE__*/React.createElement(_FontPicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
        label: __("Font Family"),
        value: fontFamily,
        onChange: function onChange(FontFamily) {
          setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "FontFamily"), FontFamily));
        }
      }), /*#__PURE__*/React.createElement(_WithResButtons__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "forFontSize",
        resOption: resOption,
        setAttributes: setAttributes
      }, resOption === "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: sizeUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["sizeUnitTypes"],
        onClick: function onClick(sizeUnit) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "SizeUnit"), sizeUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Font Size"),
        value: fontSize,
        onChange: function onChange(FontSize) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "FontSize"), FontSize));
        },
        step: sizeUnit === "em" ? 0.1 : 1,
        min: 0,
        max: sizeUnit === "em" ? 10 : 300
      })), resOption === "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: TABsizeUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["sizeUnitTypes"],
        onClick: function onClick(TABsizeUnit) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "SizeUnit"), TABsizeUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Font Size"),
        value: TABfontSize,
        onChange: function onChange(FontSize) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "FontSize"), FontSize));
        },
        step: TABsizeUnit === "em" ? 0.1 : 1,
        min: 0,
        max: TABsizeUnit === "em" ? 10 : 300
      })), resOption === "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: MOBsizeUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["sizeUnitTypes"],
        onClick: function onClick(MOBsizeUnit) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "SizeUnit"), MOBsizeUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Font Size"),
        value: MOBfontSize,
        onChange: function onChange(FontSize) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "FontSize"), FontSize));
        },
        step: MOBsizeUnit === "em" ? 0.1 : 1,
        min: 0,
        max: MOBsizeUnit === "em" ? 10 : 300
      }))), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Font Weight"),
        value: fontWeight,
        options: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsFontWeights"],
        onChange: function onChange(FontWeight) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "FontWeight"), FontWeight));
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Text Transform"),
        value: textTransform,
        options: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsTextTransforms"],
        onChange: function onChange(TextTransform) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "TextTransform"), TextTransform));
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Text Decoration"),
        value: textDecoration,
        options: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsTextDecorations"],
        onChange: function onChange(TextDecoration) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "TextDecoration"), TextDecoration));
        }
      }), /*#__PURE__*/React.createElement(_WithResButtons__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "forLetterSpacing",
        resOption: resOption,
        setAttributes: setAttributes
      }, resOption === "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: letterSpacingUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsLhLsp"],
        onClick: function onClick(LetterSpacingUnit) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "LetterSpacingUnit"), LetterSpacingUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Letter Spacing"),
        value: letterSpacing,
        onChange: function onChange(LetterSpacing) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "LetterSpacing"), LetterSpacing));
        },
        min: 0,
        max: letterSpacingUnit === "em" ? 10 : 100,
        step: letterSpacingUnit === "em" ? 0.1 : 1
      })), resOption === "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: TABletterSpacingUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsLhLsp"],
        onClick: function onClick(TABletterSpacingUnit) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "LetterSpacingUnit"), TABletterSpacingUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Letter Spacing"),
        value: TABletterSpacing,
        onChange: function onChange(LetterSpacing) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "LetterSpacing"), LetterSpacing));
        },
        min: 0,
        max: TABletterSpacingUnit === "em" ? 10 : 100,
        step: TABletterSpacingUnit === "em" ? 0.1 : 1
      })), resOption === "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: MOBletterSpacingUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsLhLsp"],
        onClick: function onClick(MOBletterSpacingUnit) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "LetterSpacingUnit"), MOBletterSpacingUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Letter Spacing"),
        value: MOBletterSpacing,
        onChange: function onChange(LetterSpacing) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "LetterSpacing"), LetterSpacing));
        },
        min: 0,
        max: MOBletterSpacingUnit === "em" ? 10 : 100,
        step: MOBletterSpacingUnit === "em" ? 0.1 : 1
      }))), /*#__PURE__*/React.createElement(_WithResButtons__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "forLineHeight",
        resOption: resOption,
        setAttributes: setAttributes
      }, resOption === "Desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: lineHeightUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsLhLsp"],
        onClick: function onClick(LineHeightUnit) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "LineHeightUnit"), LineHeightUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Line Height"),
        value: lineHeight,
        onChange: function onChange(LineHeight) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "LineHeight"), LineHeight));
        },
        min: 0,
        max: lineHeightUnit === "em" ? 10 : 600,
        step: lineHeightUnit === "em" ? 0.1 : 1
      })), resOption === "Tablet" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: TABlineHeightUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsLhLsp"],
        onClick: function onClick(TABlineHeightUnit) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "LineHeightUnit"), TABlineHeightUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Line Height"),
        value: TABlineHeight,
        onChange: function onChange(LineHeight) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "LineHeight"), LineHeight));
        },
        min: 0,
        max: TABlineHeightUnit === "em" ? 10 : 600,
        step: TABlineHeightUnit === "em" ? 0.1 : 1
      })), resOption === "Mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        selectedUnit: MOBlineHeightUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_4__["optionsLhLsp"],
        onClick: function onClick(MOBlineHeightUnit) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "LineHeightUnit"), MOBlineHeightUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Line Height"),
        value: MOBlineHeight,
        onChange: function onChange(LineHeight) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "LineHeight"), LineHeight));
        },
        min: 0,
        max: MOBlineHeightUnit === "em" ? 10 : 600,
        step: MOBlineHeightUnit === "em" ? 0.1 : 1
      }))));
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TypographyDropdown);

/***/ }),

/***/ "./util/typography-control-v2/unit-control.js":
/*!****************************************************!*\
  !*** ./util/typography-control-v2/unit-control.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * WordPress dependencies
 */
var _wp$components = wp.components,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button;

var UnitControl = function UnitControl(_ref) {
  var selectedUnit = _ref.selectedUnit,
      unitTypes = _ref.unitTypes,
      _onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(ButtonGroup, {
    className: "eb-unit-control-btn-group"
  }, unitTypes.map(function (unit) {
    return /*#__PURE__*/React.createElement(Button, {
      className: "eb-unit-control-btn ".concat(unit.value === selectedUnit && "eb-unit-active"),
      isSmall: true,
      isPrimary: unit.value === selectedUnit,
      onClick: function onClick() {
        return _onClick(unit.value);
      }
    }, unit.label);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UnitControl);

/***/ }),

/***/ "./util/unit-control/index.js":
/*!************************************!*\
  !*** ./util/unit-control/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * WordPress dependencies
 */
var _wp$components = wp.components,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button;

var UnitControl = function UnitControl(_ref) {
  var selectedUnit = _ref.selectedUnit,
      unitTypes = _ref.unitTypes,
      _onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(ButtonGroup, {
    className: "eb-unit-control-btn-group"
  }, unitTypes.map(function (unit) {
    return /*#__PURE__*/React.createElement(Button, {
      className: "eb-unit-control-btn ".concat(unit.value === selectedUnit && "eb-unit-active"),
      isSmall: true,
      isPrimary: unit.value === selectedUnit,
      onClick: function onClick() {
        return _onClick(unit.value);
      }
    }, unit.label);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UnitControl);

/***/ }),

/***/ "./util/withResButtons/index.js":
/*!**************************************!*\
  !*** ./util/withResButtons/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithResButtons; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./util/helpers/index.js");
var dispatch = wp.data.dispatch;

function WithResButtons(_ref) {
  var className = _ref.className,
      children = _ref.children,
      resRequiredProps = _ref.resRequiredProps,
      label = _ref.label;
  var setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption;
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap_res ".concat(className || " ")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(label ? "resBtns" : "resIcons")
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      paddingRight: "5px"
    },
    className: "resLabel"
  }, label), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleDesktopBtnClick"])({
        setAttributes: setAttributes,
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType
      });
    },
    "class": "typoResButton dashicons dashicons-desktop ".concat(resOption === "Desktop" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleTabBtnClick"])({
        setAttributes: setAttributes,
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType
      });
    },
    "class": "typoResButton dashicons dashicons-tablet ".concat(resOption === "Tablet" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["handleMobileBtnClick"])({
        setAttributes: setAttributes,
        setPreviewDeviceType: dispatch("core/edit-post").__experimentalSetPreviewDeviceType
      });
    },
    "class": "typoResButton dashicons dashicons-smartphone ".concat(resOption === "Mobile" ? "active" : " ")
  })), children);
}

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

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