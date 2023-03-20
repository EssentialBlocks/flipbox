/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js ***!
  \****************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
!function(e,t){ true?module.exports=t(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),__webpack_require__(/*! react */ "react"),__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"),__webpack_require__(/*! react-dom */ "react-dom"),__webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js")):0}(window,function(e,t,r,n,a){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=15)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.flattenPossiblyCategorizedSource=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Array.isArray(e))return o(e);if(null!==t)return void 0!==e[t]?o(e[t]):[];var r=[],n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){a(e,t,r[t])})}return e}({},e);return Object.keys(n).forEach(function(e){r=o(r).concat(o(n[e]))}),r},t.getPossibleCategories=function(e){return Array.isArray(e)?null:Object.keys(e)},t.convertToHex=function(e){return String.fromCodePoint(parseInt(e,10))},t.isArrayEqual=function(e,t){if(!Array.isArray(e)||!Array.isArray(t))return!1;var r=o(e);r.sort();var n=o(t);return n.sort(),JSON.stringify(r)===JSON.stringify(n)},t.getOffset=function(e){var t=e.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+r}},t.getSourceType=function(e){return null===e?"null":"object"!==n(e)||Array.isArray(e)?Array.isArray(e)?"array":n(e):"object"},t.InvalidSourceException=function(e,t){this.givenType=e,this.requiredType=t,this.message="Expected of type: ".concat(this.requiredType,", found: ").concat(this.givenType),this.toString=function(){return"Invalid Source Exception: ".concat(this.message)}},t.fuzzySearch=function(e,t){e=e.toLowerCase();var r=(t=t.toLowerCase()).length,n=e.length;if(n>r)return!1;if(n===r)return e===t;e:for(var a=0,o=0;a<n;a++){for(var l=e.codePointAt(a);o<r;)if(t.codePointAt(o++)===l)continue e;return!1}return!0},t.debounce=void 0,t.debounce=function(e,t){var r;return function(){var n=this,a=arguments;clearTimeout(r),r=setTimeout(function(){return e.apply(n,a)},t)}}},function(e,t){e.exports=r},,,function(e,t){e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(1)),a=r(6),o=u(r(0)),l=u(r(3)),i=r(2);function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==c(n)&&"function"!=typeof n?d(this):n,Object.defineProperty(d(r),"syncPortalPosition",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.resetPortalPosition(),r.fixWindowOverflow()}}),Object.defineProperty(d(r),"fixWindowOverflow",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=r.props.domRef.current.offsetWidth,t=r.props.domRef.current.offsetHeight,n=window,a=n.innerWidth,o=n.pageYOffset,l=document.documentElement.clientHeight,u=(0,i.getOffset)(r.props.domRef.current),c=u.left,s=u.top,f="self"===r.state.appendRoot?r.props.domRef.current:r.state.appendRoot,d=(0,i.getOffset)(f),p=r.props.btnRef.current,h=r.props.domRef.current,y=(0,i.getOffset)(p),b=getComputedStyle(p),g=(parseInt(b.borderTop,10)||0)+(parseInt(b.borderBottom,10)||0);if(c+e>a-20){var m=y.left+r.props.btnRef.current.offsetWidth-(e+d.left);m+d.left<0&&(m=10-d.left),h.style.left="".concat(m,"px")}t+s-o>l&&y.top-t>0&&("self"===r.state.appendRoot?h.style.top="-".concat(t-g,"px"):h.style.top="".concat(y.top+g-t,"px"))}}),r.state={},r.debouncedSyncPortalPosition=(0,i.debounce)(r.syncPortalPosition,250),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),f(t,null,[{key:"getDerivedStateFromProps",value:function(e){var r=t.calculateAppendAndClass(e.appendRoot);return{appendRoot:r.appendRoot,portalClasses:r.portalClasses}}},{key:"calculateAppendAndClass",value:function(e){var t="self",r=(0,l.default)({"rfipdropdown--portal":!1!==e});return!1!==e&&(t=document.querySelector(e)),{portalClasses:r,appendRoot:t}}}]),f(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.debouncedSyncPortalPosition),window.addEventListener("scroll",this.debouncedSyncPortalPosition),this.syncPortalPosition()}},{key:"componentDidUpdate",value:function(){this.syncPortalPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.debouncedSyncPortalPosition),window.removeEventListener("scroll",this.debouncedSyncPortalPosition)}},{key:"positionPortal",value:function(){var e=this.props.domRef.current.style.display;this.props.domRef.current.style.display="none";var t=this.props.btnRef.current,r=(0,i.getOffset)(t),n=(0,i.getOffset)(this.state.appendRoot),a=t.offsetHeight;this.props.domRef.current.style.left="".concat(r.left-n.left,"px"),this.props.domRef.current.style.top="".concat(r.top+a,"px"),this.props.domRef.current.style.display=e}},{key:"resetPortalPosition",value:function(){var e=this.props.domRef.current;"self"===this.state.appendRoot?e.style.top="":this.positionPortal()}},{key:"render",value:function(){var e=(0,l.default)(this.props.className,this.state.portalClasses),t=n.default.createElement("div",{className:e,ref:this.props.domRef},this.props.children);return"self"===this.state.appendRoot?t:(0,a.createPortal)(t,this.state.appendRoot)}}]),t}();Object.defineProperty(p,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{appendRoot:o.default.oneOfType([o.default.bool,o.default.string]),children:o.default.node.isRequired,domRef:o.default.object.isRequired,btnRef:o.default.object.isRequired,className:o.default.string.isRequired}}),Object.defineProperty(p,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{appendRoot:!1}});var h=p;t.default=h},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(1)),a=i(r(0)),o=i(r(3)),l=r(2);function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==u(n)&&"function"!=typeof n?d(this):n,Object.defineProperty(d(r),"handleChangePage",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=r.props.currentPage,o=r.state.totalPage;null!==n?"next"===n?a+=1:a-=1:a=parseInt(e.target.value,10)-1,a<0&&(a=0),a>o-1&&(a=o-1),t=a+1,null===n&&Number.isNaN(a)&&(a=0,t=""),r.setState({viewPage:t}),r.props.handleChangePage(a)}}),Object.defineProperty(d(r),"handlePageKeyBoard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){13!==e.keyCode&&32!==e.keyCode||r.handleChangePage({},t)}}),Object.defineProperty(d(r),"handleChangeValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.props.handleChangeValue(e)}}),Object.defineProperty(d(r),"handleValueKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){13!==e.keyCode&&32!==e.keyCode||r.handleChangeValue(t)}}),r.state={viewPage:r.props.currentPage+1},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),f(t,null,[{key:"getDerivedStateFromProps",value:function(e,r){var n=t.getCategoryFilteredState(e.currentCategory,e.categories,e.icons),a=t.getCategoryFilteredState(e.currentCategory,e.categories,null===e.search?e.icons:e.search),o=t.getActiveIcons(n,a,e.currentSearch),l=o.activeIcons,i=o.activeTitles,u=e.currentPage,c=e.iconsPerPage,s={iconView:t.getCurrentViewIcons(l,c,u),titleView:t.getCurrentViewIcons(i,c,u),totalPage:Math.ceil(l.length/c)};return""!==r.viewPage&&(s.viewPage=e.currentPage+1),s}},{key:"getActiveIcons",value:function(e,t,r){var n=c(e),a=c(t);if(""===r||null===r)return{activeIcons:n,activeTitles:a};var o=[],i=[];return n.forEach(function(e,n){(0,l.fuzzySearch)(r,t[n])&&(o.push(e),i.push(t[n]))}),{activeIcons:o,activeTitles:i}}},{key:"getCategoryFilteredState",value:function(e,t,r){var n=null,a=(0,l.getSourceType)(r);if(Array.isArray(t)){if("object"!==a)throw new l.InvalidSourceException(a,"object")}else if("array"!==a)throw new l.InvalidSourceException(a,"array");return 0!==e&&Array.isArray(t)&&(n=t[e]||null),(0,l.flattenPossiblyCategorizedSource)(r,n)}},{key:"getCurrentViewIcons",value:function(e,t,r){var n=r*t,a=(r+1)*t;return e.slice(n,a)}}]),f(t,[{key:"renderPager",value:function(){var e=this;if(this.state.totalPage<1)return null;var t=this.props.currentPage>0?n.default.createElement("span",{className:"rfipicons__left",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"prev")},onClick:function(t){return e.handleChangePage(t,"prev")}},n.default.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Left"},n.default.createElement("i",{className:"fipicon-angle-left"}))):null,r=this.props.currentPage<this.state.totalPage-1?n.default.createElement("span",{className:"rfipicons__right",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"next")},onClick:function(t){return e.handleChangePage(t,"next")}},n.default.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Right"},n.default.createElement("i",{className:"fipicon-angle-right"}))):null;return n.default.createElement("div",{className:"rfipicons__pager"},n.default.createElement("div",{className:"rfipicons__num"},n.default.createElement("input",{value:this.state.viewPage,onChange:this.handleChangePage,className:"rfipicons__cp",type:"tel",min:1}),n.default.createElement("span",{className:"rfipicons__sp"},"/"),n.default.createElement("span",{className:"rfipicons__tp"},this.state.totalPage)),n.default.createElement("div",{className:"rfipicons__arrow"},t,r))}},{key:"renderIconView",value:function(){var e=this;return this.state.totalPage>0?this.state.iconView.map(function(t,r){var a=(0,o.default)("rfipicons__icon",{"rfipicons__icon--selected":e.props.value===t||Array.isArray(e.props.value)&&e.props.value.includes(t)});return n.default.createElement("span",{className:a,key:t,title:e.state.titleView[r]},n.default.createElement("span",{className:"rfipicons__ibox",tabIndex:0,role:"button",onClick:function(){return e.handleChangeValue(t)},onKeyDown:function(r){return e.handleValueKeyboard(r,t)}},e.props.renderIcon(t)))}):n.default.createElement("span",{className:"rfipicons__icon--error"},n.default.createElement("span",{className:"rfipicons__ibox--error"},this.props.noIconPlaceholder))}},{key:"render",value:function(){return n.default.createElement("div",{className:"rfipicons"},this.renderPager(),n.default.createElement("div",{className:"rfipicons__selector"},this.renderIconView()))}}]),t}();Object.defineProperty(p,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{categories:a.default.arrayOf(a.default.string),currentCategory:a.default.number,isMulti:a.default.bool.isRequired,icons:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.objectOf(a.default.arrayOf(a.default.string)),a.default.arrayOf(a.default.string)]),value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.oneOfType([a.default.number,a.default.string]))]).isRequired,currentSearch:a.default.string.isRequired,handleChangeValue:a.default.func.isRequired,currentPage:a.default.number.isRequired,iconsPerPage:a.default.number.isRequired,handleChangePage:a.default.func.isRequired,renderIcon:a.default.func.isRequired,noIconPlaceholder:a.default.string.isRequired}}),Object.defineProperty(p,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{categories:null,currentCategory:null,search:null}});var h=p;t.default=h},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(1)),a=o(r(0));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){return n.default.createElement("div",{className:"rfipsearch"},n.default.createElement("input",{type:"text",className:"rfipsearch__input",value:e.value,onChange:e.handleSearch,placeholder:e.placeholder}))};l.propTypes={handleSearch:a.default.func.isRequired,value:a.default.string.isRequired,placeholder:a.default.string.isRequired};var i=l;t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(1)),a=o(r(0));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),r=t,(a=[{key:"render",value:function(){return n.default.createElement("div",{className:"rfipcategory"},n.default.createElement("select",{className:"rfipcategory__select",onChange:this.props.handleCategory,value:this.props.value},this.props.categories.map(function(e,t){return n.default.createElement("option",{className:"rfipcategory__select__option",key:e,value:t},e)})),n.default.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"}))}}])&&i(r.prototype,a),t}();Object.defineProperty(u,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{handleCategory:a.default.func.isRequired,value:a.default.number.isRequired,categories:a.default.arrayOf(a.default.string).isRequired}});var c=u;t.default=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(1)),a=c(r(0)),o=c(r(10)),l=c(r(9)),i=c(r(8)),u=r(2);function c(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==s(n)&&"function"!=typeof n?p(this):n,Object.defineProperty(p(r),"handleCategory",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=parseInt(e.target.value,10);Number.isNaN(t)&&(t=0),r.props.handleChangeCategory(t),r.props.handleChangePage(0)}}),Object.defineProperty(p(r),"handleSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.target.value;r.props.handleChangeSearch(t)}}),r.state={},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),d(t,null,[{key:"getDerivedStateFromProps",value:function(e){var t=(0,u.getPossibleCategories)(e.icons);return null!==t&&(t=[e.allCatPlaceholder].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(t))),{categories:t,searchString:e.currentSearch}}}]),d(t,[{key:"render",value:function(){return n.default.createElement("div",{className:"rfipdropdown__selector"},this.props.showSearch?n.default.createElement(l.default,{handleSearch:this.handleSearch,value:this.state.searchString,placeholder:this.props.searchPlaceholder}):null,this.props.showCategory&&this.state.categories&&this.state.categories.length?n.default.createElement(o.default,{handleCategory:this.handleCategory,value:this.props.currentCategory,categories:this.state.categories}):null,n.default.createElement(i.default,{categories:this.state.categories,currentCategory:this.props.currentCategory,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,value:this.props.value,currentSearch:this.props.currentSearch,handleChangeValue:this.props.handleChangeValue,currentPage:this.props.currentPage,iconsPerPage:this.props.iconsPerPage,handleChangePage:this.props.handleChangePage,renderIcon:this.props.renderIcon,noIconPlaceholder:this.props.noIconPlaceholder}))}}]),t}();Object.defineProperty(h,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{isMulti:a.default.bool.isRequired,value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.any)]).isRequired,currentCategory:a.default.number.isRequired,currentPage:a.default.number.isRequired,currentSearch:a.default.string.isRequired,icons:a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.object,a.default.arrayOf(a.default.string)]),showCategory:a.default.bool.isRequired,showSearch:a.default.bool.isRequired,iconsPerPage:a.default.number.isRequired,allCatPlaceholder:a.default.string.isRequired,searchPlaceholder:a.default.string.isRequired,noIconPlaceholder:a.default.string.isRequired,renderIcon:a.default.func.isRequired,handleChangeValue:a.default.func.isRequired,handleChangeCategory:a.default.func.isRequired,handleChangePage:a.default.func.isRequired,handleChangeSearch:a.default.func.isRequired}}),Object.defineProperty(h,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{search:null}});var y=h;t.default=y},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(1)),a=l(r(0)),o=l(r(3));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){function t(){var e,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,l=new Array(o),i=0;i<o;i++)l[i]=arguments[i];return s(a,(r=a=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),Object.defineProperty(f(a),"handleClick",{configurable:!0,enumerable:!0,writable:!0,value:function(){a.props.onClick()}}),Object.defineProperty(f(a),"handleKeyDown",{configurable:!0,enumerable:!0,writable:!0,value:function(e){32!==e.keyCode&&13!==e.keyCode||a.props.onClick()}}),Object.defineProperty(f(a),"handleDelete",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){e.stopPropagation(),a.props.handleDeleteValue(t)}}),Object.defineProperty(f(a),"handleDeleteKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){32!==e.keyCode&&13!==e.keyCode||a.props.handleDeleteValue(t)}}),Object.defineProperty(f(a),"renderEmptyIcon",{configurable:!0,enumerable:!0,writable:!0,value:function(){return n.default.createElement("span",{className:"rfipbtn__icon--empty"},a.props.noSelectedPlaceholder)}}),r))}var r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),r=t,(a=[{key:"renderIcon",value:function(e){var t=this;return""===e||null===e||void 0===e?this.renderEmptyIcon():n.default.createElement("span",{className:"rfipbtn__icon",key:e},n.default.createElement("span",{className:"rfipbtn__elm"},this.props.renderIcon(e)),n.default.createElement("span",{className:"rfipbtn__del",onClick:function(r){return t.handleDelete(r,e)},onKeyDown:function(r){return t.handleDeleteKeyboard(r,e)},tabIndex:0,role:"button"},"×"))}},{key:"renderCurrentIcons",value:function(){var e=this;return this.props.isMulti?this.props.value.length?this.props.value.map(function(t){return e.renderIcon(t)}):this.renderEmptyIcon():this.renderIcon(this.props.value)}},{key:"render",value:function(){var e={onClick:this.handleClick,onKeyDown:this.handleKeyDown,onFocus:this.handleFocus,onBlur:this.handleBlur,tabIndex:0},t=(0,o.default)("rfipbtn__button","rfipbtn__button--".concat(this.props.isOpen?"open":"close")),r=(0,o.default)(this.props.className);return n.default.createElement("div",u({className:r,ref:this.props.domRef},e),n.default.createElement("div",{className:"rfipbtn__current"},this.renderCurrentIcons()),n.default.createElement("div",{className:t},n.default.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"})))}}])&&c(r.prototype,a),t}();Object.defineProperty(d,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{className:a.default.string.isRequired,isOpen:a.default.bool.isRequired,onClick:a.default.func.isRequired,domRef:a.default.object.isRequired,isMulti:a.default.bool.isRequired,value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.oneOfType([a.default.number,a.default.string]))]).isRequired,renderIcon:a.default.func.isRequired,handleDeleteValue:a.default.func.isRequired,noSelectedPlaceholder:a.default.string.isRequired}});var p=d;t.default=p},function(e,t){e.exports=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(r(1)),a=f(r(0)),o=f(r(3)),l=r(13),i=f(r(12)),u=f(r(11)),c=f(r(7)),s=r(2);function f(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t,r){return t&&y(e.prototype,t),r&&y(e,r),e}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=[],v="",P=function(e){function t(e){var r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,a=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!a||"object"!==d(a)&&"function"!=typeof a?g(this):a,Object.defineProperty(g(r),"handleOuterClick",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.target;r.isClickWithin(t)||r.closeDropdown()}}),Object.defineProperty(g(r),"handleEscapeKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e){27===e.keyCode&&r.closeDropdown()}}),Object.defineProperty(g(r),"isClickWithin",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return r.fipButtonRef.current.contains(e)||r.fipDropDownRef.current&&r.fipDropDownRef.current.contains(e)}}),Object.defineProperty(g(r),"handleToggle",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.setState(function(e){return r.handleDropDown(!e.isOpen,!1)})}}),Object.defineProperty(g(r),"closeDropdown",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.handleDropDown(!1)}}),Object.defineProperty(g(r),"handleDropDown",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a={isOpen:e};return a.elemClass=t.getDerivedClassName("rfip",r.props.theme,r.props.isMulti,e),a.btnClass=t.getDerivedClassName("rfipbtn",r.props.theme,r.props.isMulti,e),a.ddClass=t.getDerivedClassName("rfipdropdown",r.props.theme,r.props.isMulti,e),n&&r.setState(a),a}}),Object.defineProperty(g(r),"handleChangeValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t;r.props.isMulti?(t=p(r.state.value)).includes(e)?(t=t.filter(function(t){return t!==e})).length||(t=m):t.push(e):t=e===r.state.value?v:e,r.setState({value:t,isOpen:!r.props.closeOnSelect}),r.props.onChange(t)}}),Object.defineProperty(g(r),"handleDeleteValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var n;n=r.props.isMulti?r.state.value.filter(function(t){return t!==e}):t.getDerivedValue(n,r.props.isMulti),r.setState({value:n}),r.props.onChange(n)}}),Object.defineProperty(g(r),"handleChangePage",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentPage:e})}}),Object.defineProperty(g(r),"handleChangeCategory",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentCategory:e,currentPage:0})}}),Object.defineProperty(g(r),"handleChangeSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentSearch:e,currentPage:0})}}),Object.defineProperty(g(r),"resetPortalStyle",{configurable:!0,enumerable:!0,writable:!0,value:function(e){["maxHeight","paddingTop","paddingBottom"].forEach(function(t){e.style[t]=null})}}),Object.defineProperty(g(r),"handlePortalEnter",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t);var n=getComputedStyle(t);r.fipPortalComputedStyle={height:n.height,paddingTop:n.paddingTop,paddingBottom:n.paddingBottom},["maxHeight","paddingTop","paddingBottom"].forEach(function(e){t.style[e]="0px"})}}),Object.defineProperty(g(r),"handlePortalEntering",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];t.style.maxHeight=r.fipPortalComputedStyle.height,t.style.paddingTop=r.fipPortalComputedStyle.paddingTop,t.style.paddingBottom=r.fipPortalComputedStyle.paddingBottom}}),Object.defineProperty(g(r),"handlePortalEntered",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t),r.props.showSearch&&void 0===window.orientation&&-1===navigator.userAgent.indexOf("IEMobile")&&t.querySelector(".rfipsearch__input").focus()}}),Object.defineProperty(g(r),"handlePortalExit",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t);var n=getComputedStyle(t).height;t.style.maxHeight=n}}),Object.defineProperty(g(r),"handlePortalExiting",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];t.style.maxHeight="0px",t.style.paddingTop="0px",t.style.paddingBottom="0px"}}),Object.defineProperty(g(r),"renderIcon",{configurable:!0,enumerable:!0,writable:!0,value:function(e){if("function"==typeof r.props.renderFunc)return r.props.renderFunc(e);if("class"===r.props.renderUsing)return n.default.createElement("i",{className:e});var t=h({},r.props.renderUsing,r.props.convertHex?(0,s.convertToHex)(e):e);return n.default.createElement("i",t)}}),r.fipButtonRef=n.default.createRef(),r.fipDropDownRef=n.default.createRef(),r.state={currentCategory:0,currentPage:0,isOpen:!1,currentSearch:""},r.fipPortalComputedStyle=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),b(t,null,[{key:"getDerivedStateFromProps",value:function(e,r){var n={};return n.elemClass=t.getDerivedClassName("rfip",e.theme,e.isMulti,r.isOpen),n.btnClass=t.getDerivedClassName("rfipbtn",e.theme,e.isMulti,r.isOpen),n.ddClass=t.getDerivedClassName("rfipdropdown",e.theme,e.isMulti,r.isOpen),n.value=t.getDerivedValue(e.value,e.isMulti),e.showCategory||(n.currentCategory=0,n.currentPage=0),e.showSearch||(n.currentSearch="",n.currentPage=0),n}},{key:"getDerivedClassName",value:function(e,t,r,n){return(0,o.default)(e,"".concat(e,"--").concat(t),h({},"".concat(e,"--multi"),r),"".concat(e,"--").concat(n?"open":"close"))}},{key:"getDerivedValue",value:function(e,t){var r=e;return t?r=Array.isArray(e)?p(e):m:"number"!=typeof e&&"string"!=typeof e&&(r=v),r}}]),b(t,[{key:"componentDidMount",value:function(){var e=this;["click"].forEach(function(t){document.addEventListener(t,e.handleOuterClick,!1)}),document.addEventListener("keydown",this.handleEscapeKeyboard,!1),this.props.onChange(this.state.value)}},{key:"componentWillUnmount",value:function(){var e=this;["click"].forEach(function(t){document.removeEventListener(t,e.handleOuterClick,!1)}),document.removeEventListener("keydown",this.handleEscapeKeyboard,!1)}},{key:"render",value:function(){var e={currentCategory:this.state.currentCategory,currentPage:this.state.currentPage,currentSearch:this.state.currentSearch,value:this.state.value,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,showCategory:this.props.showCategory,showSearch:this.props.showSearch,iconsPerPage:this.props.iconsPerPage,allCatPlaceholder:this.props.allCatPlaceholder,searchPlaceholder:this.props.searchPlaceholder,noIconPlaceholder:this.props.noIconPlaceholder,renderIcon:this.renderIcon,handleChangeValue:this.handleChangeValue,handleChangeCategory:this.handleChangeCategory,handleChangePage:this.handleChangePage,handleChangeSearch:this.handleChangeSearch};return n.default.createElement("div",{className:this.state.elemClass,ref:this.fipRef},n.default.createElement(i.default,{className:this.state.btnClass,isOpen:this.state.isOpen,onClick:this.handleToggle,domRef:this.fipButtonRef,isMulti:this.props.isMulti,value:this.state.value,renderIcon:this.renderIcon,handleDeleteValue:this.handleDeleteValue,noSelectedPlaceholder:this.props.noSelectedPlaceholder}),n.default.createElement(l.CSSTransition,{classNames:"fipappear",timeout:300,in:this.state.isOpen,unmountOnExit:!0,onEnter:this.handlePortalEnter,onEntering:this.handlePortalEntering,onEntered:this.handlePortalEntered,onExit:this.handlePortalExit,onExiting:this.handlePortalExiting},n.default.createElement(c.default,{appendRoot:this.props.appendTo,domRef:this.fipDropDownRef,btnRef:this.fipButtonRef,className:this.state.ddClass},n.default.createElement(u.default,e))))}}]),t}();Object.defineProperty(P,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{icons:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.objectOf(a.default.arrayOf(a.default.string)),a.default.arrayOf(a.default.string)]),iconsPerPage:a.default.number,theme:a.default.string,onChange:a.default.func.isRequired,showCategory:a.default.bool,showSearch:a.default.bool,value:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.number,a.default.string]),isMulti:a.default.bool,renderUsing:a.default.string,convertHex:a.default.bool,renderFunc:a.default.func,appendTo:a.default.oneOfType([a.default.bool,a.default.string]),allCatPlaceholder:a.default.string,searchPlaceholder:a.default.string,noIconPlaceholder:a.default.string,noSelectedPlaceholder:a.default.string,closeOnSelect:a.default.bool}}),Object.defineProperty(P,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{search:null,iconsPerPage:20,theme:"default",showCategory:!0,showSearch:!0,value:null,isMulti:!1,renderUsing:"class",convertHex:!0,renderFunc:null,appendTo:!1,allCatPlaceholder:"Show from all",searchPlaceholder:"Search Icons",noIconPlaceholder:"No icons found",noSelectedPlaceholder:"Select icon",closeOnSelect:!1}}),Object.defineProperty(P,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"FontIconPicker"});var O=P;t.default=O},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(14))&&n.__esModule?n:{default:n}).default;t.default=a}]).default});
//# sourceMappingURL=fonticonpicker.react.js.map

/***/ }),

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/dimensionsNames */ "./src/constants/dimensionsNames.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





// import {
// 	generateTypographyAttributes,
// 	generateDimensionsAttributes,
// 	generateResponsiveRangeAttributes,
// 	generateBackgroundAttributes,
// 	generateBorderShadowAttributes,
// } from "../../../util/helpers";

var _window$EBFlipboxCont = window.EBFlipboxControls,
  generateTypographyAttributes = _window$EBFlipboxCont.generateTypographyAttributes,
  generateDimensionsAttributes = _window$EBFlipboxCont.generateDimensionsAttributes,
  generateResponsiveRangeAttributes = _window$EBFlipboxCont.generateResponsiveRangeAttributes,
  generateBackgroundAttributes = _window$EBFlipboxCont.generateBackgroundAttributes,
  generateBorderShadowAttributes = _window$EBFlipboxCont.generateBorderShadowAttributes;

var attributes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
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
    "default": "styleOne"
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
  },
  contentPosition: {
    type: "string",
    "default": "center"
  },
  linkOpenNewTab: {
    type: "boolean",
    "default": false
  }
}, generateTypographyAttributes(Object.values(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__))), generateDimensionsAttributes(_constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__.dimensionsMargin, {
  top: 28,
  right: 0,
  bottom: 28,
  left: 0,
  isLinked: false,
  disableLeftRight: true
})), generateDimensionsAttributes(_constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__.dimensionsPadding)), generateDimensionsAttributes(_constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__.buttonPadding)), generateDimensionsAttributes(_constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__.frontIconMargin)), generateDimensionsAttributes(_constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__.frontIconPadding)), generateDimensionsAttributes(_constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__.backIconMargin)), generateDimensionsAttributes(_constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__.backIconPadding)), generateDimensionsAttributes(_constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__.frontTitlePadding)), generateDimensionsAttributes(_constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__.backTitlePadding)), generateDimensionsAttributes(_constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__.frontContentPadding)), generateDimensionsAttributes(_constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__.backContentPadding)), generateDimensionsAttributes(_constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__.frontImgPadding)), generateDimensionsAttributes(_constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__.backImgPadding)), generateDimensionsAttributes(_constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__.frontItemPadding)), generateDimensionsAttributes(_constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_1__.backItemPadding)), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_2__.boxHeightAttr, {
  defaultRange: 310
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_2__.boxWidthAttr, {
  defaultRange: 600
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_2__.boxFrontIconSizeAttr, {
  defaultRange: 50
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_2__.boxBackIconSizeAttr, {
  defaultRange: 50
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_2__.buttonIconSizeAttr, {
  defaultRange: 100
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_2__.frontImgSizeAttr, {
  defaultRange: 100
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_2__.backImgSizeAttr, {
  defaultRange: 100
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_2__.frontImgRadiusAttr)), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_2__.backImgRadiusAttr)), generateBorderShadowAttributes(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__.borderShadow)), generateBorderShadowAttributes(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__.borderShadowBtn)), generateBorderShadowAttributes(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__.borderShadowFrontIcon, {
  noShadow: true
})), generateBorderShadowAttributes(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__.borderShadowBackIcon, {
  noShadow: true
})), generateBackgroundAttributes(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_4__.flipboxFrontWrapper, {
  isBgDefaultGradient: true,
  defaultFillColor: "#7967ff",
  defaultBgGradient: "linear-gradient(90deg,#4919f6,#7529f9)"
})), generateBackgroundAttributes(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_4__.flipboxBackWrapper, {
  isBgDefaultGradient: true,
  defaultFillColor: "#3074ff",
  defaultBgGradient: "linear-gradient(90deg,#7529f9,#4919f6)"
}));
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/constants/backgroundsConstants.js":
/*!***********************************************!*\
  !*** ./src/constants/backgroundsConstants.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flipboxBackWrapper": function() { return /* binding */ flipboxBackWrapper; },
/* harmony export */   "flipboxFrontWrapper": function() { return /* binding */ flipboxFrontWrapper; }
/* harmony export */ });
// each and every const here has to be totally unique from one another
var flipboxFrontWrapper = "front_wrapper_";
var flipboxBackWrapper = "back_wrapper_";

/***/ }),

/***/ "./src/constants/borderShadowConstants.js":
/*!************************************************!*\
  !*** ./src/constants/borderShadowConstants.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "borderShadow": function() { return /* binding */ borderShadow; },
/* harmony export */   "borderShadowBackIcon": function() { return /* binding */ borderShadowBackIcon; },
/* harmony export */   "borderShadowBtn": function() { return /* binding */ borderShadowBtn; },
/* harmony export */   "borderShadowFrontIcon": function() { return /* binding */ borderShadowFrontIcon; }
/* harmony export */ });
var borderShadow = "front_";
var borderShadowBtn = "btn_";
var borderShadowFrontIcon = "front_icon_";
var borderShadowBackIcon = "back_icon_";

/***/ }),

/***/ "./src/constants/dimensionsNames.js":
/*!******************************************!*\
  !*** ./src/constants/dimensionsNames.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "backContentPadding": function() { return /* binding */ backContentPadding; },
/* harmony export */   "backIconMargin": function() { return /* binding */ backIconMargin; },
/* harmony export */   "backIconPadding": function() { return /* binding */ backIconPadding; },
/* harmony export */   "backImgPadding": function() { return /* binding */ backImgPadding; },
/* harmony export */   "backItemPadding": function() { return /* binding */ backItemPadding; },
/* harmony export */   "backTitlePadding": function() { return /* binding */ backTitlePadding; },
/* harmony export */   "buttonPadding": function() { return /* binding */ buttonPadding; },
/* harmony export */   "dimensionsMargin": function() { return /* binding */ dimensionsMargin; },
/* harmony export */   "dimensionsPadding": function() { return /* binding */ dimensionsPadding; },
/* harmony export */   "frontContentPadding": function() { return /* binding */ frontContentPadding; },
/* harmony export */   "frontIconMargin": function() { return /* binding */ frontIconMargin; },
/* harmony export */   "frontIconPadding": function() { return /* binding */ frontIconPadding; },
/* harmony export */   "frontImgPadding": function() { return /* binding */ frontImgPadding; },
/* harmony export */   "frontItemPadding": function() { return /* binding */ frontItemPadding; },
/* harmony export */   "frontTitlePadding": function() { return /* binding */ frontTitlePadding; }
/* harmony export */ });
// the consts defined here should be unique from one another
var dimensionsMargin = "margin";
var dimensionsPadding = "padding";
var buttonPadding = "btn_padding";
var frontIconMargin = "front_icon_margin";
var frontIconPadding = "front_icon_padding";
var backIconMargin = "back_icon_margin";
var backIconPadding = "back_icon_padding";
var frontTitlePadding = "frontTitlePadding";
var backTitlePadding = "backTitlePadding";
var frontContentPadding = "frontContentPadding";
var backContentPadding = "backContentPadding";
var frontImgPadding = "frontImgPadding";
var backImgPadding = "backImgPadding";
var frontItemPadding = "frontItemPadding";
var backItemPadding = "backItemPadding";

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BACKGROUND_ATTACHMENT": function() { return /* binding */ BACKGROUND_ATTACHMENT; },
/* harmony export */   "BACKGROUND_POSITION": function() { return /* binding */ BACKGROUND_POSITION; },
/* harmony export */   "BACKGROUND_REPEAT": function() { return /* binding */ BACKGROUND_REPEAT; },
/* harmony export */   "BACKGROUND_SIZE": function() { return /* binding */ BACKGROUND_SIZE; },
/* harmony export */   "BACKGROUND_TYPE": function() { return /* binding */ BACKGROUND_TYPE; },
/* harmony export */   "BORDER_STYLES": function() { return /* binding */ BORDER_STYLES; },
/* harmony export */   "BOX_HEIGHT_UNIT": function() { return /* binding */ BOX_HEIGHT_UNIT; },
/* harmony export */   "BUTTON_STYLES": function() { return /* binding */ BUTTON_STYLES; },
/* harmony export */   "CONTENT_POSITION": function() { return /* binding */ CONTENT_POSITION; },
/* harmony export */   "DEFAULT_BACK_BACKGROUND": function() { return /* binding */ DEFAULT_BACK_BACKGROUND; },
/* harmony export */   "DEFAULT_FRONT_BACKGROUND": function() { return /* binding */ DEFAULT_FRONT_BACKGROUND; },
/* harmony export */   "DEFAULT_ICON_SIZE": function() { return /* binding */ DEFAULT_ICON_SIZE; },
/* harmony export */   "FLIPBOX_SIDES": function() { return /* binding */ FLIPBOX_SIDES; },
/* harmony export */   "FLIPBOX_STYLES": function() { return /* binding */ FLIPBOX_STYLES; },
/* harmony export */   "FLIPBOX_TYPE": function() { return /* binding */ FLIPBOX_TYPE; },
/* harmony export */   "FONT_SIZES": function() { return /* binding */ FONT_SIZES; },
/* harmony export */   "FONT_WEIGHTS": function() { return /* binding */ FONT_WEIGHTS; },
/* harmony export */   "FRONT_IMAGE_UNITS": function() { return /* binding */ FRONT_IMAGE_UNITS; },
/* harmony export */   "ICON_POSITIONS": function() { return /* binding */ ICON_POSITIONS; },
/* harmony export */   "ICON_TYPE": function() { return /* binding */ ICON_TYPE; },
/* harmony export */   "LINK_TYPE": function() { return /* binding */ LINK_TYPE; },
/* harmony export */   "TEXT_DECORATION": function() { return /* binding */ TEXT_DECORATION; },
/* harmony export */   "TEXT_TRANSFORM": function() { return /* binding */ TEXT_TRANSFORM; },
/* harmony export */   "UNIT_TYPES": function() { return /* binding */ UNIT_TYPES; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


var DEFAULT_ICON_SIZE = "50";
var DEFAULT_FRONT_BACKGROUND = "#7967ff";
var DEFAULT_BACK_BACKGROUND = "#4a5059";
var FLIPBOX_SIDES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Front", "essential-blocks"),
  value: "front"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Back", "essential-blocks"),
  value: "back"
}];
var FLIPBOX_TYPE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flip Left", "essential-blocks"),
  value: "flip-left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flip Right", "essential-blocks"),
  value: "flip-right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flip Up", "essential-blocks"),
  value: "flip-up"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flip Bottom", "essential-blocks"),
  value: "flip-bottom"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom In", "essential-blocks"),
  value: "zoom-in"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom Out", "essential-blocks"),
  value: "zoom-out"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fade", "essential-blocks"),
  value: "fade"
}];
var BORDER_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dashed", "essential-blocks"),
  value: "dashed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Solid", "essential-blocks"),
  value: "solid"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dotted", "essential-blocks"),
  value: "dotted"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Double", "essential-blocks"),
  value: "double"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Groove", "essential-blocks"),
  value: "groove"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inset", "essential-blocks"),
  value: "inset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Outset", "essential-blocks"),
  value: "outset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ridge", "essential-blocks"),
  value: "ridge"
}];
var ICON_TYPE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "essential-blocks"),
  value: "none"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon", "essential-blocks"),
  value: "icon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image", "essential-blocks"),
  value: "image"
}];
var LINK_TYPE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Box", "essential-blocks"),
  value: "box"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title", "essential-blocks"),
  value: "title"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button", "essential-blocks"),
  value: "button"
}];
var ICON_POSITIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Before", "essential-blocks"),
  value: "before"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("After", "essential-blocks"),
  value: "after"
}];
var BUTTON_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Style 1", "essential-blocks"),
  value: "styleOne"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Style 2", "essential-blocks"),
  value: "styleTwo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Style 3", "essential-blocks"),
  value: "styleThree"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Custom", "essential-blocks"),
  value: "custom"
}];
var BACKGROUND_TYPE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fill", "essential-blocks"),
  value: "fill"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gradient", "essential-blocks"),
  value: "gradient"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image", "essential-blocks"),
  value: "image"
}];
var BACKGROUND_SIZE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Auto", "essential-blocks"),
  value: "auto"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cover", "essential-blocks"),
  value: "cover"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Contain", "essential-blocks"),
  value: "contain"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Custom", "essential-blocks"),
  value: "custom"
}];
var BACKGROUND_REPEAT = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "essential-blocks"),
  value: ""
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("No-repeat", "essential-blocks"),
  value: "no-repeat"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Repeat", "essential-blocks"),
  value: "repeat"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Repeat-x", "essential-blocks"),
  value: "repeat-x"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Repeat-y", "essential-blocks"),
  value: "repeat-y"
}];
var BACKGROUND_POSITION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "essential-blocks"),
  value: ""
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center Center", "essential-blocks"),
  value: "center center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center Left", "essential-blocks"),
  value: "center left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center Right", "essential-blocks"),
  value: "center right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top Center", "essential-blocks"),
  value: "top center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top Left", "essential-blocks"),
  value: "top left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top Right", "essential-blocks"),
  value: "top right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom Center", "essential-blocks"),
  value: "bottom center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom Left", "essential-blocks"),
  value: "bottom left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom Right", "essential-blocks"),
  value: "bottom right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Custom", "essential-blocks"),
  value: "custom"
}];
var BACKGROUND_ATTACHMENT = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "essential-blocks"),
  value: ""
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fixed", "essential-blocks"),
  value: "fixed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scroll", "essential-blocks"),
  value: "scroll"
}];
var FLIPBOX_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "essential-blocks"),
  value: "default"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mint", "essential-blocks"),
  value: "mint"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tangelo", "essential-blocks"),
  value: "tangelo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Royal", "essential-blocks"),
  value: "royal"
}];
var FONT_SIZES = [{
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Small", "essential-blocks"),
  size: 12,
  slug: "s"
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Medium", "essential-blocks"),
  size: 16,
  slug: "m"
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Large", "essential-blocks"),
  size: 24,
  slug: "l"
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Extra Large", "essential-blocks"),
  size: 36,
  slug: "xl"
}];
var TEXT_TRANSFORM = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "essential-blocks"),
  value: "none"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lowercase", "essential-blocks"),
  value: "lowercase"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Capitalize", "essential-blocks"),
  value: "capitalize"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Uppercase", "essential-blocks"),
  value: "uppercase"
}];
var FONT_WEIGHTS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lighter", "essential-blocks"),
  value: "lighter"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal", "essential-blocks"),
  value: "normal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bold", "essential-blocks"),
  value: "bold"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bolder", "essential-blocks"),
  value: "bolder"
}];
var TEXT_DECORATION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Initial", "essential-blocks"),
  value: "initial"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overline", "essential-blocks"),
  value: "overline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Through", "essential-blocks"),
  value: "line-through"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underline", "essential-blocks"),
  value: "underline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underline Oveline", "essential-blocks"),
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
var CONTENT_POSITION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)( /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "editor-alignleft"
  })),
  value: "left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)( /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "editor-aligncenter"
  })),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)( /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "editor-alignright"
  })),
  value: "right"
}];

/***/ }),

/***/ "./src/constants/rangeNames.js":
/*!*************************************!*\
  !*** ./src/constants/rangeNames.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "backImgRadiusAttr": function() { return /* binding */ backImgRadiusAttr; },
/* harmony export */   "backImgSizeAttr": function() { return /* binding */ backImgSizeAttr; },
/* harmony export */   "boxBackIconSizeAttr": function() { return /* binding */ boxBackIconSizeAttr; },
/* harmony export */   "boxFrontIconSizeAttr": function() { return /* binding */ boxFrontIconSizeAttr; },
/* harmony export */   "boxHeightAttr": function() { return /* binding */ boxHeightAttr; },
/* harmony export */   "boxWidthAttr": function() { return /* binding */ boxWidthAttr; },
/* harmony export */   "buttonIconSizeAttr": function() { return /* binding */ buttonIconSizeAttr; },
/* harmony export */   "frontImgRadiusAttr": function() { return /* binding */ frontImgRadiusAttr; },
/* harmony export */   "frontImgSizeAttr": function() { return /* binding */ frontImgSizeAttr; }
/* harmony export */ });
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typoPrefix_content": function() { return /* binding */ typoPrefix_content; },
/* harmony export */   "typoPrefix_title": function() { return /* binding */ typoPrefix_title; }
/* harmony export */ });
var typoPrefix_title = "title";
var typoPrefix_content = "content";

/***/ }),

/***/ "./src/deprecated.js":
/*!***************************!*\
  !*** ./src/deprecated.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * WordPress dependencies
 */



var deprecated = [{
  attributes: _objectSpread({}, _attributes__WEBPACK_IMPORTED_MODULE_2__["default"]),
  supports: {
    anchor: true
  },
  save: function save(_ref) {
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
      buttonClasses = attributes.buttonClasses,
      contentPosition = attributes.contentPosition;
    var alignmentClass = contentPosition === "center" ? " eb-flipbox-align-center" : contentPosition === "right" ? " eb-flipbox-align-right" : "";
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(), /*#__PURE__*/React.createElement("div", {
      className: "eb-flipbox-container ".concat(blockId).concat(alignmentClass),
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
  }
}, {
  attributes: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.omit)(_objectSpread({}, _attributes__WEBPACK_IMPORTED_MODULE_2__["default"]), ["contentPosition"]),
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
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
    return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(), /*#__PURE__*/React.createElement("div", {
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
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/dimensionsNames */ "./src/constants/dimensionsNames.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/**
 * WordPress dependencits
 */






/**
 * External depencencies
 */

/*
 * Internal dependencies
 */







var _window$EBFlipboxCont = window.EBFlipboxControls,
  getFlipTransform = _window$EBFlipboxCont.getFlipTransform,
  duplicateBlockIdFix = _window$EBFlipboxCont.duplicateBlockIdFix,
  softMinifyCssStrings = _window$EBFlipboxCont.softMinifyCssStrings,
  generateTypographyStyles = _window$EBFlipboxCont.generateTypographyStyles,
  generateDimensionsControlStyles = _window$EBFlipboxCont.generateDimensionsControlStyles,
  generateResponsiveRangeStyles = _window$EBFlipboxCont.generateResponsiveRangeStyles,
  generateBackgroundControlStyles = _window$EBFlipboxCont.generateBackgroundControlStyles,
  generateBorderShadowStyles = _window$EBFlipboxCont.generateBorderShadowStyles;
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
    className = props.className,
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
    align = attributes.align,
    contentPosition = attributes.contentPosition,
    classHook = attributes.classHook;

  // Default colors
  var deafultFrontTitleColor = "#ffffff";
  var defaultFrontContentColor = "#ffffff";
  var defautlBackContentColor = "#ffffff";
  var defaultBackTitleColor = "#ffffff";
  var defaultFrontIconBackground = "transparent";
  var defaultBackIconBackground = "transparent";

  // wrapper styles css in strings ⬇
  var _generateDimensionsCo = generateDimensionsControlStyles({
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_7__.dimensionsMargin,
      styleFor: "margin",
      attributes: attributes
    }),
    wrapperMarginStylesDesktop = _generateDimensionsCo.dimensionStylesDesktop,
    wrapperMarginStylesTab = _generateDimensionsCo.dimensionStylesTab,
    wrapperMarginStylesMobile = _generateDimensionsCo.dimensionStylesMobile;
  var _generateDimensionsCo2 = generateDimensionsControlStyles({
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_7__.dimensionsPadding,
      styleFor: "padding",
      attributes: attributes
    }),
    wrapperPaddingStylesDesktop = _generateDimensionsCo2.dimensionStylesDesktop,
    wrapperPaddingStylesTab = _generateDimensionsCo2.dimensionStylesTab,
    wrapperPaddingStylesMobile = _generateDimensionsCo2.dimensionStylesMobile;
  // wrapper border & shadow settings
  var _generateBorderShadow = generateBorderShadowStyles({
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_11__.borderShadow,
      attributes: attributes
    }),
    bdShadowStyesDesktop = _generateBorderShadow.styesDesktop,
    bdShadowStyesTab = _generateBorderShadow.styesTab,
    bdShadowStyesMobile = _generateBorderShadow.styesMobile,
    bdShadowStylesHoverDesktop = _generateBorderShadow.stylesHoverDesktop,
    bdShadowStylesHoverTab = _generateBorderShadow.stylesHoverTab,
    bdShadowStylesHoverMobile = _generateBorderShadow.stylesHoverMobile,
    bdShadowTransitionStyle = _generateBorderShadow.transitionStyle;

  // responsive range controller
  var _generateResponsiveRa = generateResponsiveRangeStyles({
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_10__.boxHeightAttr,
      property: "height",
      attributes: attributes,
      customUnit: "px"
    }),
    wrapperHeightStylesDesktop = _generateResponsiveRa.rangeStylesDesktop,
    wrapperHeightStylesTab = _generateResponsiveRa.rangeStylesTab,
    wrapperHeightStylesMobile = _generateResponsiveRa.rangeStylesMobile;
  var _generateResponsiveRa2 = generateResponsiveRangeStyles({
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_10__.boxHeightAttr,
      property: "min-height",
      attributes: attributes,
      customUnit: "px"
    }),
    wrapperMinHeightStylesDesktop = _generateResponsiveRa2.rangeStylesDesktop,
    wrapperMinHeightStylesTab = _generateResponsiveRa2.rangeStylesTab,
    wrapperMinHeightStylesMobile = _generateResponsiveRa2.rangeStylesMobile;
  var _generateResponsiveRa3 = generateResponsiveRangeStyles({
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_10__.boxWidthAttr,
      property: "max-width",
      attributes: attributes
    }),
    wrapperWidthStylesDesktop = _generateResponsiveRa3.rangeStylesDesktop,
    wrapperWidthStylesTab = _generateResponsiveRa3.rangeStylesTab,
    wrapperWidthStylesMobile = _generateResponsiveRa3.rangeStylesMobile;
  var _generateResponsiveRa4 = generateResponsiveRangeStyles({
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_10__.boxFrontIconSizeAttr,
      property: "font-size",
      attributes: attributes
    }),
    frontFontSizeDesktop = _generateResponsiveRa4.rangeStylesDesktop,
    frontFontSizeTab = _generateResponsiveRa4.rangeStylesTab,
    frontFontSizeMobile = _generateResponsiveRa4.rangeStylesMobile;
  var _generateResponsiveRa5 = generateResponsiveRangeStyles({
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_10__.boxBackIconSizeAttr,
      property: "font-size",
      attributes: attributes
    }),
    backFontSizeDesktop = _generateResponsiveRa5.rangeStylesDesktop,
    backFontSizeTab = _generateResponsiveRa5.rangeStylesTab,
    backFontSizeMobile = _generateResponsiveRa5.rangeStylesMobile;

  // front background controller
  var _generateBackgroundCo = generateBackgroundControlStyles({
      attributes: attributes,
      controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__.flipboxFrontWrapper
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
    frontHoverOverlayStylesMobile = _generateBackgroundCo.hoverOverlayStylesMobile,
    frontBgTransitionStyle = _generateBackgroundCo.bgTransitionStyle,
    frontOvlTransitionStyle = _generateBackgroundCo.ovlTransitionStyle;

  // front Icon Margin & Padding
  var _generateDimensionsCo3 = generateDimensionsControlStyles({
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_7__.frontIconMargin,
      styleFor: "margin",
      attributes: attributes
    }),
    frontIconMarginStylesDesktop = _generateDimensionsCo3.dimensionStylesDesktop,
    frontIconMarginStylesTab = _generateDimensionsCo3.dimensionStylesTab,
    frontIconMarginStylesMobile = _generateDimensionsCo3.dimensionStylesMobile;
  var _generateDimensionsCo4 = generateDimensionsControlStyles({
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_7__.frontIconPadding,
      styleFor: "padding",
      attributes: attributes
    }),
    frontIconPaddingStylesDesktop = _generateDimensionsCo4.dimensionStylesDesktop,
    frontIconPaddingStylesTab = _generateDimensionsCo4.dimensionStylesTab,
    frontIconPaddingStylesMobile = _generateDimensionsCo4.dimensionStylesMobile;

  // front icon border
  var _generateBorderShadow2 = generateBorderShadowStyles({
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_11__.borderShadowFrontIcon,
      attributes: attributes,
      noShadow: true
    }),
    frontIconBorderDesktop = _generateBorderShadow2.styesDesktop,
    frontIconBorderTab = _generateBorderShadow2.styesTab,
    frontIconBorderMobile = _generateBorderShadow2.styesMobile,
    frontIconBorderHoverDesktop = _generateBorderShadow2.stylesHoverDesktop,
    frontIconBorderHoverTab = _generateBorderShadow2.stylesHoverTab,
    frontIconBorderHoverMobile = _generateBorderShadow2.stylesHoverMobile,
    frontIconTransitionStyle = _generateBorderShadow2.transitionStyle;

  // front image
  var _generateResponsiveRa6 = generateResponsiveRangeStyles({
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_10__.frontImgSizeAttr,
      property: "height",
      attributes: attributes
    }),
    frontImgHeightDesktop = _generateResponsiveRa6.rangeStylesDesktop,
    frontImgHeightTab = _generateResponsiveRa6.rangeStylesTab,
    frontImgHeightMobile = _generateResponsiveRa6.rangeStylesMobile;
  var _generateResponsiveRa7 = generateResponsiveRangeStyles({
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_10__.frontImgSizeAttr,
      property: "width",
      attributes: attributes
    }),
    frontImgWidthDesktop = _generateResponsiveRa7.rangeStylesDesktop,
    frontImgWidthTab = _generateResponsiveRa7.rangeStylesTab,
    frontImgWidthMobile = _generateResponsiveRa7.rangeStylesMobile;
  var _generateResponsiveRa8 = generateResponsiveRangeStyles({
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_10__.frontImgRadiusAttr,
      property: "border-radius",
      attributes: attributes
    }),
    frontImgRadiusDesktop = _generateResponsiveRa8.rangeStylesDesktop,
    frontImgRadiusTab = _generateResponsiveRa8.rangeStylesTab,
    frontImgRadiusMobile = _generateResponsiveRa8.rangeStylesMobile;

  // back background controller
  var _generateBackgroundCo2 = generateBackgroundControlStyles({
      attributes: attributes,
      controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__.flipboxBackWrapper
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
    backHoverOverlayStylesMobile = _generateBackgroundCo2.hoverOverlayStylesMobile,
    backBgTransitionStyle = _generateBackgroundCo2.bgTransitionStyle,
    backOvlTransitionStyle = _generateBackgroundCo2.ovlTransitionStyle;
  var _generateTypographySt = generateTypographyStyles({
      attributes: attributes,
      prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_8__.typoPrefix_title
    }),
    titleTypoStylesDesktop = _generateTypographySt.typoStylesDesktop,
    titleTypoStylesTab = _generateTypographySt.typoStylesTab,
    titleTypoStylesMobile = _generateTypographySt.typoStylesMobile;
  var _generateTypographySt2 = generateTypographyStyles({
      attributes: attributes,
      prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_8__.typoPrefix_content
    }),
    contentTypoStylesDesktop = _generateTypographySt2.typoStylesDesktop,
    contentTypoStylesTab = _generateTypographySt2.typoStylesTab,
    contentTypoStylesMobile = _generateTypographySt2.typoStylesMobile;

  // back Icon Margin & Padding
  var _generateDimensionsCo5 = generateDimensionsControlStyles({
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_7__.backIconMargin,
      styleFor: "margin",
      attributes: attributes
    }),
    backIconMarginStylesDesktop = _generateDimensionsCo5.dimensionStylesDesktop,
    backIconMarginStylesTab = _generateDimensionsCo5.dimensionStylesTab,
    backIconMarginStylesMobile = _generateDimensionsCo5.dimensionStylesMobile;
  var _generateDimensionsCo6 = generateDimensionsControlStyles({
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_7__.backIconPadding,
      styleFor: "padding",
      attributes: attributes
    }),
    backIconPaddingStylesDesktop = _generateDimensionsCo6.dimensionStylesDesktop,
    backIconPaddingStylesTab = _generateDimensionsCo6.dimensionStylesTab,
    backIconPaddingStylesMobile = _generateDimensionsCo6.dimensionStylesMobile;

  // back icon border
  var _generateBorderShadow3 = generateBorderShadowStyles({
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_11__.borderShadowBackIcon,
      attributes: attributes,
      noShadow: true
    }),
    backIconBorderDesktop = _generateBorderShadow3.styesDesktop,
    backIconBorderTab = _generateBorderShadow3.styesTab,
    backIconBorderMobile = _generateBorderShadow3.styesMobile,
    backIconBorderHoverDesktop = _generateBorderShadow3.stylesHoverDesktop,
    backIconBorderHoverTab = _generateBorderShadow3.stylesHoverTab,
    backIconBorderHoverMobile = _generateBorderShadow3.stylesHoverMobile,
    backIconTransitionStyle = _generateBorderShadow3.transitionStyle;

  // back image
  var _generateResponsiveRa9 = generateResponsiveRangeStyles({
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_10__.backImgSizeAttr,
      property: "height",
      attributes: attributes
    }),
    backImgHeightDesktop = _generateResponsiveRa9.rangeStylesDesktop,
    backImgHeightTab = _generateResponsiveRa9.rangeStylesTab,
    backImgHeightMobile = _generateResponsiveRa9.rangeStylesMobile;
  var _generateResponsiveRa10 = generateResponsiveRangeStyles({
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_10__.backImgSizeAttr,
      property: "width",
      attributes: attributes
    }),
    backImgWidthDesktop = _generateResponsiveRa10.rangeStylesDesktop,
    backImgWidthTab = _generateResponsiveRa10.rangeStylesTab,
    backImgWidthMobile = _generateResponsiveRa10.rangeStylesMobile;
  var _generateResponsiveRa11 = generateResponsiveRangeStyles({
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_10__.backImgRadiusAttr,
      property: "border-radius",
      attributes: attributes
    }),
    backImgRadiusDesktop = _generateResponsiveRa11.rangeStylesDesktop,
    backImgRadiusTab = _generateResponsiveRa11.rangeStylesTab,
    backImgRadiusMobile = _generateResponsiveRa11.rangeStylesMobile;

  // front title
  var _generateDimensionsCo7 = generateDimensionsControlStyles({
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_7__.frontTitlePadding,
      styleFor: "padding",
      attributes: attributes
    }),
    frontTitlePaddingStylesDesktop = _generateDimensionsCo7.dimensionStylesDesktop,
    frontTitlePaddingStylesTab = _generateDimensionsCo7.dimensionStylesTab,
    frontTitlePaddingStylesMobile = _generateDimensionsCo7.dimensionStylesMobile;

  // back title
  var _generateDimensionsCo8 = generateDimensionsControlStyles({
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_7__.backTitlePadding,
      styleFor: "padding",
      attributes: attributes
    }),
    backTitlePaddingStylesDesktop = _generateDimensionsCo8.dimensionStylesDesktop,
    backTitlePaddingStylesTab = _generateDimensionsCo8.dimensionStylesTab,
    backTitlePaddingStylesMobile = _generateDimensionsCo8.dimensionStylesMobile;

  // front content padding
  var _generateDimensionsCo9 = generateDimensionsControlStyles({
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_7__.frontContentPadding,
      styleFor: "padding",
      attributes: attributes
    }),
    frontContentPaddingStylesDesktop = _generateDimensionsCo9.dimensionStylesDesktop,
    frontContentPaddingStylesTab = _generateDimensionsCo9.dimensionStylesTab,
    frontContentPaddingStylesMobile = _generateDimensionsCo9.dimensionStylesMobile;

  // back content Padding
  var _generateDimensionsCo10 = generateDimensionsControlStyles({
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_7__.backContentPadding,
      styleFor: "padding",
      attributes: attributes
    }),
    backContentPaddingStylesDesktop = _generateDimensionsCo10.dimensionStylesDesktop,
    backContentPaddingStylesTab = _generateDimensionsCo10.dimensionStylesTab,
    backContentPaddingStylesMobile = _generateDimensionsCo10.dimensionStylesMobile;

  // front Image Padding
  var _generateDimensionsCo11 = generateDimensionsControlStyles({
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_7__.frontImgPadding,
      styleFor: "padding",
      attributes: attributes
    }),
    frontImgPaddingStylesDesktop = _generateDimensionsCo11.dimensionStylesDesktop,
    frontImgPaddingStylesTab = _generateDimensionsCo11.dimensionStylesTab,
    frontImgPaddingStylesMobile = _generateDimensionsCo11.dimensionStylesMobile;

  // back Image Padding
  var _generateDimensionsCo12 = generateDimensionsControlStyles({
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_7__.backImgPadding,
      styleFor: "padding",
      attributes: attributes
    }),
    backImgPaddingStylesDesktop = _generateDimensionsCo12.dimensionStylesDesktop,
    backImgPaddingStylesTab = _generateDimensionsCo12.dimensionStylesTab,
    backImgPaddingStylesMobile = _generateDimensionsCo12.dimensionStylesMobile;

  // front Item Padding
  var _generateDimensionsCo13 = generateDimensionsControlStyles({
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_7__.frontItemPadding,
      styleFor: "padding",
      attributes: attributes
    }),
    frontItemPaddingStylesDesktop = _generateDimensionsCo13.dimensionStylesDesktop,
    frontItemPaddingStylesTab = _generateDimensionsCo13.dimensionStylesTab,
    frontItemPaddingStylesMobile = _generateDimensionsCo13.dimensionStylesMobile;

  // back Item Padding
  var _generateDimensionsCo14 = generateDimensionsControlStyles({
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_7__.backItemPadding,
      styleFor: "padding",
      attributes: attributes
    }),
    backItemPaddingStylesDesktop = _generateDimensionsCo14.dimensionStylesDesktop,
    backItemPaddingStylesTab = _generateDimensionsCo14.dimensionStylesTab,
    backItemPaddingStylesMobile = _generateDimensionsCo14.dimensionStylesMobile;
  var flipContainerStyleDesktop = "\n\t\t.eb-flipbox-align-center .eb-flipper {\n\t\t\tmargin-right: auto !important;\n\t\t\tmargin-left: auto !important;\n\t\t}\n\t\t.eb-flipbox-align-right .eb-flipper {\n\t\t\tmargin-left: auto !important;\n\t\t}\n\t\t.eb-flipbox-container.".concat(blockId, "{\n\t\t\t").concat(wrapperMarginStylesDesktop, "\n\t\t\t").concat(wrapperPaddingStylesDesktop, "\n\t\t\twidth: 100%;\n\t\t\toverflow: hidden;\n\t\t}\n\t");
  var flipContainerStyleTab = "\n\t .eb-flipbox-container.".concat(blockId, "{\n\t\t ").concat(wrapperMarginStylesTab, "\n\t\t ").concat(wrapperPaddingStylesTab, "\n\t }\n\t ");
  var flipContainerStyleMobile = "\n\t .eb-flipbox-container.".concat(blockId, "{\n\t\t ").concat(wrapperMarginStylesMobile, "\n\t\t ").concat(wrapperPaddingStylesMobile, "\n\t }\n\t ");
  var itemsContainerStyle = "\n\t.eb-flipbox-container.".concat(blockId, " .eb-flipbox-front .eb-flipbox-items-container {\n\t\t").concat(frontItemPaddingStylesDesktop, "\n\t}\n\n\t.eb-flipbox-container.").concat(blockId, " .eb-flipbox-back .eb-flipbox-items-container {\n\t\t").concat(backItemPaddingStylesDesktop, "\n\t}\n\n\t.eb-flipbox-container.").concat(blockId, " .eb-flipbox-items-container {\n\talign-items: ").concat(getFlexAlign(align), ";\n\t}\n\t");
  var itemsContainerStyleTab = "\n\t.eb-flipbox-container.".concat(blockId, " .eb-flipbox-front .eb-flipbox-items-container {\n\t\t").concat(frontItemPaddingStylesTab, "\n\t}\n\n\t.eb-flipbox-container.").concat(blockId, " .eb-flipbox-back .eb-flipbox-items-container {\n\t\t").concat(backItemPaddingStylesTab, "\n\t}\n\t");
  var itemsContainerStyleMobile = "\n\t.eb-flipbox-container.".concat(blockId, " .eb-flipbox-front .eb-flipbox-items-container {\n\t\t").concat(frontItemPaddingStylesMobile, "\n\t}\n\n\t.eb-flipbox-container.").concat(blockId, " .eb-flipbox-back .eb-flipbox-items-container {\n\t\t").concat(backItemPaddingStylesMobile, "\n\t}\n\t");

  // prefix title styles css in strings ⬇
  var titleStylesDesktop = "\n\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-front-title, .eb-flipbox-container.").concat(blockId, " .eb-flipbox-back-title {\n\t\t ").concat(titleTypoStylesDesktop, "\n\t\t width: 100%;\n\t\t text-align: ").concat(align, ";\n\t }\n\n\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-front-title {\n\t\t").concat(frontTitlePaddingStylesDesktop, "\n\t\t color: ").concat(frontTitleColor ? frontTitleColor : deafultFrontTitleColor, ";\n\t }\n\n\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-back-title {\n\t\t").concat(backTitlePaddingStylesDesktop, "\n\t\t color: ").concat(backTitleColor ? backTitleColor : defaultBackTitleColor, ";\n\t }\n\t ");
  var titleStylesTab = "\n\t.eb-flipbox-container.".concat(blockId, " .eb-flipbox-front-title {\n\t\t").concat(frontTitlePaddingStylesTab, "\n\t}\n\n\t.eb-flipbox-container.").concat(blockId, " .eb-flipbox-back-title {\n\t\t").concat(frontTitlePaddingStylesTab, "\n\t}\n\n\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-front-title, .eb-flipbox-container.").concat(blockId, " .eb-flipbox-back-title {\n\t\t ").concat(titleTypoStylesTab, "\n\t }\n\t ");
  var titleStylesMobile = "\n\t.eb-flipbox-container.".concat(blockId, " .eb-flipbox-front-title {\n\t\t").concat(frontTitlePaddingStylesMobile, "\n\t}\n\n\t.eb-flipbox-container.").concat(blockId, " .eb-flipbox-back-title {\n\t\t").concat(frontTitlePaddingStylesMobile, "\n\t}\n\n\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-front-title, .eb-flipbox-container.").concat(blockId, " .eb-flipbox-back-title {\n\t\t ").concat(titleTypoStylesMobile, "\n\t }\n\t ");

  // prefix content styles css in strings ⬇
  var contentStylesDesktop = "\n\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-front-content, .eb-flipbox-container.").concat(blockId, " .eb-flipbox-back-content {\n\t\t ").concat(contentTypoStylesDesktop, "\n\t\t width: 100%;\n\t\t text-align: ").concat(align, ";\n\t\t margin: 10px 0;\n\t }\n\n\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-front-content {\n\t\t ").concat(frontContentPaddingStylesDesktop, "\n\t\t color: ").concat(frontContentColor ? frontContentColor : defaultFrontContentColor, ";\n\t }\n\n\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-back-content {\n\t\t ").concat(backContentPaddingStylesDesktop, "\n\t\t color: ").concat(backContentColor ? backContentColor : defautlBackContentColor, ";\n\t }\n\t ");
  var contentStylesTab = "\n\t.eb-flipbox-container.".concat(blockId, " .eb-flipbox-front-content {\n\t\t").concat(frontContentPaddingStylesTab, "\n\t}\n\n\t.eb-flipbox-container.").concat(blockId, " .eb-flipbox-back-content {\n\t\t").concat(backContentPaddingStylesTab, "\n\t}\n\n\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-front-content, .eb-flipbox-container.").concat(blockId, " .eb-flipbox-back-content {\n\t\t ").concat(contentTypoStylesTab, "\n\t }\n\t ");
  var contentStylesMobile = "\n\t.eb-flipbox-container.".concat(blockId, " .eb-flipbox-front-content {\n\t\t").concat(frontContentPaddingStylesMobile, "\n\t}\n\n\t.eb-flipbox-container.").concat(blockId, " .eb-flipbox-back-content {\n\t\t").concat(backContentPaddingStylesMobile, "\n\t}\n\n\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-front-content, .eb-flipbox-container.").concat(blockId, " .eb-flipbox-back-content {\n\t\t ").concat(contentTypoStylesMobile, "\n\t }\n\t ");

  // flipper style
  var flipperStyle = "\n\t .eb-flipbox-container.".concat(blockId, " .eb-flipper {\n\t\t transition: ").concat(transitionSpeed ? transitionSpeed / 1000 : 0.6, "s;\n\t\t ").concat(wrapperMinHeightStylesDesktop, "\n\t\t ").concat(wrapperWidthStylesDesktop, "\n\t }\n\t .eb-flipbox-container.").concat(blockId, " .eb-flipper.back-is-selected {\n\t\t transform:\n\t\t\t  ").concat(isHover || selectedSide === "back" ? getFlipTransform(flipType) : "none", ";\n\t }\n\t ");
  var flipperStyleTab = "\n\t\t.eb-flipbox-container.".concat(blockId, " .eb-flipper {\n\t\t\t").concat(wrapperMinHeightStylesTab, "\n\t\t\t").concat(wrapperWidthStylesTab, "\n\t\t}\n\t");
  var flipperStyleMobile = "\n\t\t.eb-flipbox-container.".concat(blockId, " .eb-flipper {\n\t\t\t").concat(wrapperMinHeightStylesMobile, "\n\t\t\t").concat(wrapperWidthStylesMobile, "\n\t\t}\n\t");
  var frontStyleDesktop = "\n\t\t.eb-flipbox-container.".concat(blockId, " .eb-flipper .eb-flipbox-front {\n\t\t\t").concat(frontBackgroundStylesDesktop, "\n\t\t\t").concat(wrapperMinHeightStylesDesktop, "\n\t\t\t").concat(wrapperWidthStylesDesktop, "\n\t\t\t").concat(bdShadowStyesDesktop, "\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\theight: auto;\n\t\t\twidth: 100%;\n\t\t\tz-index: 1;\n\t\t\ttransition: ").concat(flipType === "fade" ? "opacity 0.6s, " : "").concat(frontBgTransitionStyle, ", ").concat(bdShadowTransitionStyle, ";\n\t\t}\n\n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-front:hover {\n\t\t\t").concat(frontHoverBackgroundStylesDesktop, "\n\t\t\t").concat(bdShadowStylesHoverDesktop, "\n\t\t}\n\n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-front:before{\n\t\t\t").concat(frontOverlayStylesDesktop, "\n\t\t\ttransition: ").concat(frontOvlTransitionStyle, ";\n\t\t}\n\n\n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-front:hover:before{\n\t\t\t").concat(frontHoverOverlayStylesDesktop, "\n\t\t}\n\n\t\t").concat((isHover || selectedSide === "front") && flipType === "fade" ? "\n\t\t\t.eb-flipbox-container.".concat(blockId, " .eb-flipper.back-is-selected .eb-flipbox-front {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t") : "", "\n\n\t ");
  var frontStyleTab = "\n\t\t .eb-flipbox-container.".concat(blockId, " .eb-flipper .eb-flipbox-front {\n\t\t\t").concat(wrapperMinHeightStylesTab, "\n\t\t\t").concat(wrapperWidthStylesTab, "\n\t\t\t").concat(frontBackgroundStylesTab, "\n\t\t\t").concat(bdShadowStyesTab, "\n\t\t }\n\n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-front:hover {\n\t\t\t").concat(frontHoverBackgroundStylesTab, "\n\t\t\t").concat(bdShadowStylesHoverTab, "\n\t\t}\n\n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-front:before{\n\t\t\t").concat(frontOverlayStylesTab, "\n\t\t}\n\n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-front:hover:before{\n\t\t\t").concat(frontHoverOverlayStylesTab, "\n\t\t}\n\n\t ");
  var frontStyleMobile = "\n\t\t .eb-flipbox-container.".concat(blockId, " .eb-flipper .eb-flipbox-front {\n\t\t\t").concat(wrapperMinHeightStylesMobile, "\n\t\t\t").concat(wrapperWidthStylesMobile, "\n\t\t\t").concat(frontBackgroundStylesMobile, "\n\t\t\t").concat(bdShadowStyesMobile, "\n\t\t }\n\n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-front:hover {\n\t\t\t").concat(frontHoverBackgroundStylesMobile, "\n\t\t\t").concat(bdShadowStylesHoverMobile, "\n\t\t}\n\n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-front:before{\n\t\t\t").concat(frontOverlayStylesMobile, "\n\t\t}\n\n\n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-front:hover:before{\n\t\t\t").concat(frontHoverOverlayStylesMobile, "\n\t\t}\n\t ");
  var frontImageStyleDesktop = "\n\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-front .eb-flipbox-front-image-container {\n\t\t ").concat(frontImgPaddingStylesDesktop, "\n\t\t display: ").concat(frontIconOrImage === "image" && frontImageUrl ? "flex" : "none", ";\n\t\t justify-content: center;\n\t }\n\n\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-front .eb-flipbox-front-image-container img {\n\t\t ").concat(frontImgHeightDesktop, "\n\t\t ").concat(frontImgWidthDesktop, "\n\t\t ").concat(frontImgRadiusDesktop, "\n\t }\n\t ");
  var frontImageStyleTab = "\n\t.eb-flipbox-container.".concat(blockId, " .eb-flipbox-front .eb-flipbox-front-image-container {\n\t\t").concat(frontImgPaddingStylesTab, "\n\t}\n\n\t.eb-flipbox-container.").concat(blockId, " .eb-flipbox-front .eb-flipbox-front-image-container img {\n\t\t").concat(frontImgHeightTab, "\n\t\t ").concat(frontImgWidthTab, "\n\t\t ").concat(frontImgRadiusTab, "\n\t}\n\t");
  var frontImageStyleMobile = "\n\t.eb-flipbox-container.".concat(blockId, " .eb-flipbox-front .eb-flipbox-front-image-container {\n\t\t").concat(frontImgPaddingStylesMobile, "\n\t}\n\n\t.eb-flipbox-container.").concat(blockId, " .eb-flipbox-front .eb-flipbox-front-image-container img {\n\t\t").concat(frontImgHeightMobile, "\n\t\t ").concat(frontImgWidthMobile, "\n\t\t ").concat(frontImgRadiusMobile, "\n\t}\n\t");
  var frontIconStyleDesktop = "\n\t\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-icon-front {\n\t\t\t ").concat(frontFontSizeDesktop, "\n\t\t\t ").concat(frontIconMarginStylesDesktop, "\n\t\t\t ").concat(frontIconPaddingStylesDesktop, "\n\t\t\t ").concat(frontIconBorderDesktop, "\n\t\t\t color: ").concat(frontIconColor ? frontIconColor : "#ffffff", ";\n\t\t\t background: ").concat(frontIconBackground ? frontIconBackground : defaultFrontIconBackground, ";\n\t\t\t width: 100%;\n\t\t\t text-align:").concat(align, ";\n\t\t\t display: ").concat(frontIconOrImage === "icon" && frontIcon ? "block" : "none", ";\n\t\t\t transition: ").concat(frontIconTransitionStyle, ";\n\t\t }\n\n\t\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-icon-front:hover {\n\t\t\t ").concat(frontIconBorderHoverDesktop, "\n\t\t }\n\t ");
  var frontIconStyleTab = "\n\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-icon-front {\n\t\t").concat(frontFontSizeTab, "\n\t\t").concat(frontIconMarginStylesTab, "\n\t\t").concat(frontIconPaddingStylesTab, "\n\t\t").concat(frontIconBorderTab, "\n\t }\n\n\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-icon-front:hover {\n\t\t").concat(frontIconBorderHoverTab, "\n\t}\n\t ");
  var frontIconStyleMobile = "\n\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-icon-front {\n\t\t").concat(frontFontSizeMobile, "\n\t\t").concat(frontIconMarginStylesMobile, "\n\t\t").concat(frontIconPaddingStylesMobile, "\n\t\t").concat(frontIconBorderMobile, "\n\t }\n\n\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-icon-front:hover {\n\t\t").concat(frontIconBorderHoverMobile, "\n\t}\n\t ");
  var backStyleDesktop = "\n\n\t .eb-flipbox-container.".concat(blockId, " .eb-flipper .eb-flipbox-back {\n\t\t").concat(backBackgroundStylesDesktop, "\n\t\t").concat(wrapperMinHeightStylesDesktop, "\n\t\t").concat(wrapperWidthStylesDesktop, "\n\t\t").concat(bdShadowStyesDesktop, "\n\t\t display: flex;\n\t\t flex-direction: column;\n\t\t justify-content: center;\n\t\t align-items: center;\n\t\t height: auto;\n\t\t width: 100%;\n\t\t transform:  ").concat(flipType === "flip-up" && "rotateX(-180deg)" || flipType === "flip-bottom" && "rotateX(180deg)" || (flipType === "zoom-in" || flipType === "zoom-out" || flipType === "fade") && "none", ";\n\t\ttransition: ").concat(flipType === "fade" ? "opacity 0.6s, " : "").concat(backBgTransitionStyle, ", ").concat(bdShadowTransitionStyle, ";\n\t\t cursor: ").concat(linkType === "box" && link ? "pointer" : "default", ";\n\t\t ").concat(isHover && (flipType === "zoom-in" || flipType === "zoom-out") ? "z-index: 5;" : "", "\n\t }\n\n\t .eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-back:hover {\n\t\t").concat(backHoverBackgroundStylesDesktop, "\n\t\t").concat(bdShadowStylesHoverDesktop, "\n\t }\n\n\n\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-back:before{\n\t\t").concat(backOverlayStylesDesktop, "\n\t\ttransition: ").concat(backOvlTransitionStyle, ";\n\t}\n\n\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-back:hover:before{\n\t\t").concat(backHoverOverlayStylesDesktop, "\n\t}\n\n\t").concat((isHover || selectedSide === "back") && flipType === "fade" ? ".eb-flipbox-container.".concat(blockId, " .eb-flipper.back-is-selected .eb-flipbox-back {\n\t\topacity: 1;\n\t }") : "", "\n\n\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-front,\n\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-back{\n\tposition: absolute;\n\t}\n\n\t ");
  var backStyleTab = "\n\t\t .eb-flipbox-container.".concat(blockId, " .eb-flipper .eb-flipbox-back {\n\t\t\t ").concat(wrapperMinHeightStylesTab, "\n\t\t\t ").concat(wrapperWidthStylesTab, "\n\t\t\t ").concat(backBackgroundStylesTab, "\n\t\t\t ").concat(bdShadowStyesTab, "\n\t\t }\n\n\t\t .eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-back:hover {\n\t\t\t").concat(backHoverBackgroundStylesTab, "\n\t\t\t").concat(bdShadowStylesHoverTab, "\n\t\t }\n\n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-back:before{\n\t\t\t").concat(backOverlayStylesTab, "\n\t\t}\n\n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-back:hover:before{\n\t\t\t").concat(backHoverOverlayStylesTab, "\n\t\t}\n\n\t ");
  var backStyleMobile = "\n\t\t .eb-flipbox-container.".concat(blockId, " .eb-flipper .eb-flipbox-back {\n\t\t\t").concat(wrapperMinHeightStylesMobile, "\n\t\t\t").concat(wrapperWidthStylesMobile, "\n\t\t\t").concat(backBackgroundStylesMobile, "\n\t\t\t").concat(bdShadowStyesMobile, "\n\t\t\t").concat(bdShadowStylesHoverMobile, "\n\t\t }\n\n\t\t .eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-back:hover {\n\t\t\t").concat(backHoverBackgroundStylesMobile, "\n\t\t\t").concat(bdShadowStylesHoverMobile, "\n\t\t }\n\n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-back:before{\n\t\t\t").concat(backOverlayStylesMobile, "\n\t\t}\n\n\t\t.eb-flipbox-container.").concat(blockId, " .eb-flipper .eb-flipbox-back:hover:before{\n\t\t\t").concat(backHoverOverlayStylesMobile, "\n\t\t}\n\t ");
  var backImageStyleDesktop = "\n\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-back .eb-flipbox-back-image-container {\n\t\t").concat(backImgPaddingStylesDesktop, "\n\t\tdisplay: ").concat(backIconOrImage === "image" && backImageUrl ? "flex" : "none", ";\n\t\tjustify-content: center;\n\t }\n\n\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-back .eb-flipbox-back-image-container img {\n\t\t").concat(backImgHeightDesktop, "\n\t\t").concat(backImgWidthDesktop, "\n\t\t").concat(backImgRadiusDesktop, "\n\t }\n\t ");
  var backImageStyleTab = "\n\t.eb-flipbox-container.".concat(blockId, " .eb-flipbox-back .eb-flipbox-back-image-container {\n\t\t").concat(backImgPaddingStylesTab, "\n\t}\n\n\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-back .eb-flipbox-back-image-container img {\n\t\t").concat(backImgHeightTab, "\n\t\t").concat(backImgWidthTab, "\n\t\t").concat(backImgRadiusTab, "\n\t }\n\t ");
  var backImageStyleMobile = "\n\t.eb-flipbox-container.".concat(blockId, " .eb-flipbox-back .eb-flipbox-back-image-container {\n\t\t").concat(backImgPaddingStylesMobile, "\n\t}\n\n\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-back .eb-flipbox-back-image-container img {\n\t\t").concat(backImgHeightMobile, "\n\t\t").concat(backImgWidthMobile, "\n\t\t").concat(backImgRadiusMobile, "\n\t }\n\t ");
  var backIconStyleDesktop = "\n\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-icon-back {\n\t\t").concat(backFontSizeDesktop, "\n\t\t").concat(backIconMarginStylesDesktop, "\n\t\t").concat(backIconPaddingStylesDesktop, "\n\t\t").concat(backIconBorderDesktop, "\n\t\tcolor: ").concat(backIconColor ? backIconColor : "#ffffff", ";\n\t\tbackground: ").concat(backIconBackground ? backIconBackground : defaultBackIconBackground, ";\n\t\twidth: 100%;\n\t\ttext-align: ").concat(align, ";\n\t\tdisplay: ").concat(backIconOrImage === "icon" && backIcon ? "block" : "none", ";\n\t\ttransition: ").concat(backIconTransitionStyle, ";\n\t }\n\n\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-icon-back:hover {\n\t\t").concat(backIconBorderHoverDesktop, "\n\t }\n\t ");
  var backIconStyleTab = "\n\t.eb-flipbox-container.".concat(blockId, " .eb-flipbox-icon-back {\n\t\t").concat(backFontSizeTab, "\n\t\t").concat(backIconMarginStylesTab, "\n\t\t").concat(backIconPaddingStylesTab, "\n\t\t").concat(backIconBorderTab, "\n\t}\n\n\t.eb-flipbox-container.").concat(blockId, " .eb-flipbox-icon-back:hover {\n\t\t").concat(backIconBorderHoverTab, "\n\t}\n\t");
  var backIconStyleMobile = "\n\t.eb-flipbox-container.".concat(blockId, " .eb-flipbox-icon-back {\n\t\t").concat(backFontSizeMobile, "\n\t\t").concat(backIconMarginStylesMobile, "\n\t\t").concat(backIconPaddingStylesMobile, "\n\t\t").concat(backIconBorderMobile, "\n\t}\n\n\t.eb-flipbox-container.").concat(blockId, " .eb-flipbox-icon-back:hover {\n\t\t").concat(backIconBorderHoverMobile, "\n\t}\n\t");
  var backButtonStyleDesktop = "";
  var backButtonStyleTab = "";
  var backButtonStyleMobile = "";
  if (buttonStyle === "custom") {
    var _generateDimensionsCo15 = generateDimensionsControlStyles({
        controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_7__.buttonPadding,
        styleFor: "padding",
        attributes: attributes
      }),
      buttonPaddingStylesDesktop = _generateDimensionsCo15.dimensionStylesDesktop,
      buttonPaddingStylesTab = _generateDimensionsCo15.dimensionStylesTab,
      buttonPaddingStylesMobile = _generateDimensionsCo15.dimensionStylesMobile;
    // border & shadow controller
    var _generateBorderShadow4 = generateBorderShadowStyles({
        controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_11__.borderShadowBtn,
        attributes: attributes
      }),
      btnBdShadowStyesDesktop = _generateBorderShadow4.styesDesktop,
      btnBdShadowStyesTab = _generateBorderShadow4.styesTab,
      btnBdShadowStyesMobile = _generateBorderShadow4.styesMobile,
      btnBdShadowStylesHoverDesktop = _generateBorderShadow4.stylesHoverDesktop,
      btnBdShadowStylesHoverTab = _generateBorderShadow4.stylesHoverTab,
      btnBdShadowStylesHoverMobile = _generateBorderShadow4.stylesHoverMobile,
      btnBdShadowTransitionStyle = _generateBorderShadow4.transitionStyle;
    // button size
    var _generateResponsiveRa12 = generateResponsiveRangeStyles({
        controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_10__.buttonIconSizeAttr,
        property: "width",
        attributes: attributes
      }),
      buttonSizeDesktop = _generateResponsiveRa12.rangeStylesDesktop,
      buttonSizeTab = _generateResponsiveRa12.rangeStylesTab,
      buttonSizeMobile = _generateResponsiveRa12.rangeStylesMobile;
    backButtonStyleDesktop = "\n\t\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-button-container .eb-flipbox-button-link {\n\t\t\t ").concat(buttonPaddingStylesDesktop, "\n\t\t\t ").concat(btnBdShadowStyesDesktop, "\n\t\t\t ").concat(buttonSizeDesktop, "\n\t\t\t ").concat(buttonBackground ? "background: ".concat(buttonBackground, ";") : "", "\n\t\t\t ").concat(buttonColor ? "color: ".concat(buttonColor, ";") : "", "\n\t\t\t transition: ").concat(btnBdShadowTransitionStyle, ";\n\t\t }\n\n\t\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-button-container .eb-flipbox-button-link:hover {\n\t\t\t ").concat(btnBdShadowStylesHoverDesktop, "\n\t\t }\n\n\t\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-button-container .eb-flipbox-button-content {\n\t\t\t display: flex;\n\t\t\t flex-direction: ").concat(buttonIconPos === "after" ? "row" : "row-reverse", ";\n\t\t\t justify-content: space-around;\n\t\t\t align-items: center;\n\t\t }\n\n\t\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-button-container .eb-flipbox-button-content .eb-flipbox-button-icon {\n\t\t\t display: ").concat(displayButtonIcon ? "block" : "none", ";\n\t\t }\n\t\t ");
    backButtonStyleTab = "\n\t\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-button-container .eb-flipbox-button-link {\n\t\t\t ").concat(buttonPaddingStylesTab, "\n\t\t\t ").concat(btnBdShadowStyesTab, "\n\t\t\t ").concat(buttonSizeTab, "\n\t\t }\n\n\t\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-button-container .eb-flipbox-button-link:hover {\n\t\t\t").concat(buttonPaddingStylesTab, "\n\t\t\t").concat(btnBdShadowStylesHoverTab, "\n\t\t}\n\t\t ");
    backButtonStyleMobile = "\n\t\t .eb-flipbox-container.".concat(blockId, " .eb-flipbox-button-container .eb-flipbox-button-link {\n\t\t\t ").concat(buttonPaddingStylesMobile, "\n\t\t\t ").concat(btnBdShadowStyesMobile, "\n\t\t\t ").concat(buttonSizeMobile, "\n\t\t }\n\n\t\t .eb-flipbox-container.").concat(blockId, " .eb-flipbox-button-container .eb-flipbox-button-link:hover {\n\t\t\t ").concat(btnBdShadowStylesHoverMobile, "\n\t\t }\n\t\t ");
  }

  // all css styles for large screen width (desktop/laptop) in strings ⬇
  var desktopAllStyles = softMinifyCssStrings("\n\t\t ".concat(itemsContainerStyle, "\n\t\t ").concat(flipContainerStyleDesktop, "\n\t\t ").concat(titleStylesDesktop, "\n\t\t ").concat(contentStylesDesktop, "\n\t\t ").concat(flipperStyle, "\n\t\t ").concat(frontStyleDesktop, "\n\t\t ").concat(frontImageStyleDesktop, "\n\t\t ").concat(frontIconStyleDesktop, "\n\t\t ").concat(backIconStyleDesktop, "\n\t\t ").concat(backStyleDesktop, "\n\t\t ").concat(backImageStyleDesktop, "\n\t\t ").concat(backButtonStyleDesktop, "\n\t "));

  // all css styles for Tab in strings ⬇
  var tabAllStyles = softMinifyCssStrings("\n\t\t ".concat(itemsContainerStyleTab, "\n\t\t ").concat(flipContainerStyleTab, "\n\t\t ").concat(titleStylesTab, "\n\t\t ").concat(contentStylesTab, "\n\t\t ").concat(flipperStyleTab, "\n\t\t ").concat(backButtonStyleTab, "\n\t\t ").concat(frontStyleTab, "\n\t\t ").concat(backStyleTab, "\n\t\t ").concat(frontIconStyleTab, "\n\t\t ").concat(backIconStyleTab, "\n\t\t ").concat(frontImageStyleTab, "\n\t\t ").concat(backImageStyleTab, "\n\t "));

  // all css styles for Mobile in strings ⬇
  var mobileAllStyles = softMinifyCssStrings("\n\t\t ".concat(itemsContainerStyleMobile, "\n\t\t ").concat(flipContainerStyleMobile, "\n\t\t ").concat(titleStylesMobile, "\n\t\t ").concat(contentStylesMobile, "\n\t\t ").concat(flipperStyleMobile, "\n\t\t ").concat(backButtonStyleMobile, "\n\t\t ").concat(frontStyleMobile, "\n\t\t ").concat(backStyleMobile, "\n\t\t ").concat(frontIconStyleMobile, "\n\t\t ").concat(backIconStyleMobile, "\n\t\t ").concat(frontImageStyleMobile, "\n\t\t ").concat(backImageStyleMobile, "\n\t "));
  // Set All Style in "blockMeta" Attribute
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
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
  }, [attributes]);

  // this useEffect is for creating an unique id for each block's unique className by a random unique number
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var BLOCK_PREFIX = "eb-flipbox";
    duplicateBlockIdFix({
      BLOCK_PREFIX: BLOCK_PREFIX,
      blockId: blockId,
      setAttributes: setAttributes,
      select: _wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select,
      clientId: clientId
    });
  }, []);

  // // this useEffect is for mimmiking css when responsive options clicked from wordpress's 'preview' button
  // useEffect(() => {
  // 	mimmikCssForPreviewBtnClick({
  // 		domObj: document,
  // 		select,
  // 	});
  // }, []);

  var alignmentClass = contentPosition === "center" ? " eb-flipbox-align-center" : contentPosition === "right" ? " eb-flipbox-align-right" : "";
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, "eb-guten-block-main-parent-wrapper")
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    title: "Front",
    icon: "arrow-right-alt2",
    isActive: selectedSide === "front",
    onClick: function onClick() {
      return setAttributes({
        selectedSide: "front"
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    title: "Back",
    icon: "arrow-left-alt2",
    isActive: selectedSide === "back",
    onClick: function onClick() {
      return setAttributes({
        selectedSide: "back"
      });
    }
  })), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.AlignmentToolbar, {
    value: align,
    onChange: function onChange(align) {
      return setAttributes({
        align: align
      });
    }
  })), /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("style", null, "\n\t\t\t\t ".concat(desktopAllStyles, "\n\n\t\t\t\t /* mimmikcssStart */\n\n\t\t\t\t ").concat(resOption === "Tablet" ? tabAllStyles : " ", "\n\t\t\t\t ").concat(resOption === "Mobile" ? tabAllStyles + mobileAllStyles : " ", "\n\n\t\t\t\t /* mimmikcssEnd */\n\n\t\t\t\t @media all and (max-width: 1024px) {\n\n\t\t\t\t\t /* tabcssStart */\n\t\t\t\t\t ").concat(softMinifyCssStrings(tabAllStyles), "\n\t\t\t\t\t /* tabcssEnd */\n\n\t\t\t\t }\n\n\t\t\t\t @media all and (max-width: 767px) {\n\n\t\t\t\t\t /* mobcssStart */\n\t\t\t\t\t ").concat(softMinifyCssStrings(mobileAllStyles), "\n\t\t\t\t\t /* mobcssEnd */\n\n\t\t\t\t }\n\t\t\t\t ")), /*#__PURE__*/React.createElement("div", {
    className: "eb-parent-wrapper eb-parent-".concat(blockId, " ").concat(classHook)
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-container ".concat(blockId).concat(alignmentClass),
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
  })))))))))));
}
/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/example.js":
/*!************************!*\
  !*** ./src/example.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlipboxIcon": function() { return /* binding */ FlipboxIcon; }
/* harmony export */ });
var FlipboxIcon = function FlipboxIcon() {
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
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./example */ "./src/example.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../block.json */ "./block.json");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deprecated */ "./src/deprecated.js");
/**
 * WordPress dependencies
 */



/*
 * Internal dependencies
 */








var _EBFlipboxControls = EBFlipboxControls,
  ebConditionalRegisterBlockType = _EBFlipboxControls.ebConditionalRegisterBlockType;
ebConditionalRegisterBlockType(_block_json__WEBPACK_IMPORTED_MODULE_8__, {
  icon: _icon__WEBPACK_IMPORTED_MODULE_2__.FlipboxIcon,
  category: "essential-blocks",
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"],
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("eb flipbox", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("essential", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("box", "essential-blocks")],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  example: _example__WEBPACK_IMPORTED_MODULE_5__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_9__["default"]
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants/dimensionsNames */ "./src/constants/dimensionsNames.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");
/**
 * WordPress dependencies
 */






/*
 * External dependencies
 */


/*
 * Internal dependencies
 */


var _window$EBFlipboxCont = window.EBFlipboxControls,
  faIcons = _window$EBFlipboxCont.faIcons,
  ImageAvatar = _window$EBFlipboxCont.ImageAvatar,
  BorderShadowControl = _window$EBFlipboxCont.BorderShadowControl,
  getButtonClasses = _window$EBFlipboxCont.getButtonClasses,
  ResponsiveDimensionsControl = _window$EBFlipboxCont.ResponsiveDimensionsControl,
  ResponsiveRangeController = _window$EBFlipboxCont.ResponsiveRangeController,
  TypographyDropdown = _window$EBFlipboxCont.TypographyDropdown,
  ColorControl = _window$EBFlipboxCont.ColorControl,
  BackgroundControl = _window$EBFlipboxCont.BackgroundControl,
  AdvancedControls = _window$EBFlipboxCont.AdvancedControls;





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
    displayButtonIcon = attributes.displayButtonIcon,
    contentPosition = attributes.contentPosition,
    linkOpenNewTab = attributes.linkOpenNewTab;

  // Genereate different button styles
  var handleButtonStyle = function handleButtonStyle(newStyle) {
    var buttonStyle = newStyle;
    var buttonClasses = getButtonClasses(newStyle);
    setAttributes({
      buttonStyle: buttonStyle,
      buttonClasses: buttonClasses
    });
  };
  var resRequiredProps = {
    setAttributes: setAttributes,
    resOption: resOption,
    attributes: attributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"]
  };
  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    keys: "controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-panel-control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TabPanel, {
    className: "eb-parent-tab-panel",
    activeClass: "active-tab",
    tabs: [{
      name: "general",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("General", "essential-blocks"),
      className: "eb-tab general"
    }, {
      name: "styles",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Style", "essential-blocks"),
      className: "eb-tab styles"
    }, {
      name: "advanced",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Advanced", "essential-blocks"),
      className: "eb-tab advanced"
    }]
  }, function (tab) {
    return /*#__PURE__*/React.createElement("div", {
      className: "eb-tab-controls" + tab.name
    }, tab.name === "general" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Selected Side", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
      id: "eb-flipbox-sides"
    }, _constants__WEBPACK_IMPORTED_MODULE_7__.FLIPBOX_SIDES.map(function (item, index) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        key: index,
        isPrimary: selectedSide === item.value,
        isSecondary: selectedSide !== item.value,
        onClick: function onClick() {
          return setAttributes({
            selectedSide: item.value
          });
        }
      }, item.label);
    })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flipbox Settings", "essential-blocks"),
      initialOpen: true
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alignment", "essential-blocks"),
      id: "eb-button-group-alignment"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
      id: "eb-button-group-alignment"
    }, _constants__WEBPACK_IMPORTED_MODULE_7__.CONTENT_POSITION.map(function (item, index) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        key: index,
        isPrimary: contentPosition === item.value,
        isSecondary: contentPosition !== item.value,
        onClick: function onClick() {
          return setAttributes({
            contentPosition: item.value
          });
        }
      }, item.label);
    }))), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Box Height", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_12__.boxHeightAttr,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 1000,
      step: 1,
      noUnits: true
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Box Width", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_12__.boxWidthAttr,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 600,
      step: 1,
      noUnits: true
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flipbox Type", "essential-blocks"),
      value: flipType,
      options: _constants__WEBPACK_IMPORTED_MODULE_7__.FLIPBOX_TYPE,
      onChange: function onChange(newStyle) {
        return setAttributes({
          flipType: newStyle
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Transition Speed(millisecond)", "essential-blocks"),
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
    }), selectedSide === "front" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Type", "essential-blocks"),
      id: "eb-flipbox-icon-type"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
      id: "eb-flipbox-icon-type"
    }, _constants__WEBPACK_IMPORTED_MODULE_7__.ICON_TYPE.map(function (item, index) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        key: index,
        isPrimary: frontIconOrImage === item.value,
        isSecondary: frontIconOrImage !== item.value,
        onClick: function onClick() {
          return setAttributes({
            frontIconOrImage: item.value
          });
        }
      }, item.label);
    })))), selectedSide === "back" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Type", "essential-blocks"),
      id: "eb-flipbox-icon-type"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
      id: "eb-flipbox-icon-type"
    }, _constants__WEBPACK_IMPORTED_MODULE_7__.ICON_TYPE.map(function (item, index) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        key: index,
        isPrimary: backIconOrImage === item.value,
        isSecondary: backIconOrImage !== item.value,
        onClick: function onClick() {
          return setAttributes({
            backIconOrImage: item.value
          });
        }
      }, item.label);
    }))))), selectedSide === "front" && frontIconOrImage === "icon" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Front Icon Settings", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Select Front Icon", "essential-blocks")
    }, /*#__PURE__*/React.createElement((_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_5___default()), {
      icons: faIcons,
      value: frontIcon,
      onChange: function onChange(frontIcon) {
        return setAttributes({
          frontIcon: frontIcon
        });
      },
      appendTo: "body",
      closeOnSelect: true
    })), frontIcon && /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Size", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_12__.boxFrontIconSizeAttr,
      resRequiredProps: resRequiredProps,
      min: 8,
      max: 100
    }))), selectedSide === "front" && frontIconOrImage === "image" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Front Image Settings", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flipbox Image", "essential-blocks"),
      id: "eb-flipbox-front-image"
    }, frontImageUrl ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ImageAvatar, {
      imageUrl: frontImageUrl,
      onDeleteImage: function onDeleteImage() {
        return setAttributes({
          frontImageUrl: null
        });
      }
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Size", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_12__.frontImgSizeAttr,
      resRequiredProps: resRequiredProps,
      units: _constants__WEBPACK_IMPORTED_MODULE_7__.FRONT_IMAGE_UNITS,
      min: 0,
      max: 300,
      step: 1
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Radius", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_12__.frontImgRadiusAttr,
      resRequiredProps: resRequiredProps,
      units: _constants__WEBPACK_IMPORTED_MODULE_7__.FRONT_IMAGE_UNITS,
      min: 0,
      max: 100
    })) : /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
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
        return !frontImageUrl && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          className: "eb-flipbox-upload-button",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Upload Image", "essential-blocks"),
          icon: "format-image",
          onClick: open
        });
      }
    }))), selectedSide === "back" && backIconOrImage === "icon" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Back Icon Settings", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Select Back Icon", "essential-blocks"),
      id: "eb-flipbox-back-icon"
    }, /*#__PURE__*/React.createElement((_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_5___default()), {
      icons: faIcons,
      value: backIcon,
      onChange: function onChange(backIcon) {
        return setAttributes({
          backIcon: backIcon
        });
      },
      appendTo: "body",
      closeOnSelect: true
    })), backIcon && /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Size", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_12__.boxBackIconSizeAttr,
      resRequiredProps: resRequiredProps,
      min: 8,
      max: 100
    }))), selectedSide === "back" && backIconOrImage === "image" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Back Image Settings", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flipbox Image", "essential-blocks")
    }, backImageUrl ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ImageAvatar, {
      imageUrl: backImageUrl,
      onDeleteImage: function onDeleteImage() {
        return setAttributes({
          backImageUrl: null
        });
      }
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Size", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_12__.backImgSizeAttr,
      resRequiredProps: resRequiredProps,
      units: _constants__WEBPACK_IMPORTED_MODULE_7__.FRONT_IMAGE_UNITS,
      min: 0,
      max: 300
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Radius", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_12__.backImgRadiusAttr,
      resRequiredProps: resRequiredProps,
      units: _constants__WEBPACK_IMPORTED_MODULE_7__.FRONT_IMAGE_UNITS,
      min: 0,
      max: 100
    })) : /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
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
        return !backImageUrl && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          className: "eb-flipbox-upload-button",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Upload Image", "essential-blocks"),
          icon: "format-image",
          onClick: open
        });
      }
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flipbox Content", "essential-blocks"),
      initialOpen: false
    }, selectedSide === "front" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Title?", "essential-blocks"),
      checked: showFrontTitle,
      onChange: function onChange() {
        setAttributes({
          showFrontTitle: !showFrontTitle
        });
      }
    }), showFrontTitle && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Front Title", "essential-blocks"),
      value: frontTitle,
      onChange: function onChange(newText) {
        return setAttributes({
          frontTitle: newText
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Content?", "essential-blocks"),
      checked: showFrontContent,
      onChange: function onChange() {
        setAttributes({
          showFrontContent: !showFrontContent
        });
      }
    }), showFrontContent && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Front Content", "essential-blocks"),
      value: frontContent,
      onChange: function onChange(newText) {
        return setAttributes({
          frontContent: newText
        });
      }
    })), selectedSide === "back" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Title?", "essential-blocks"),
      checked: showBackTitle,
      onChange: function onChange() {
        setAttributes({
          showBackTitle: !showBackTitle
        });
      }
    }), showBackTitle && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Back Title", "essential-blocks"),
      value: backTitle,
      onChange: function onChange(newText) {
        return setAttributes({
          backTitle: newText
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Content?", "essential-blocks"),
      checked: showBackContent,
      onChange: function onChange() {
        setAttributes({
          showBackContent: !showBackContent
        });
      }
    }), showBackContent && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Back Content", "essential-blocks"),
      value: backContent,
      onChange: function onChange(newText) {
        return setAttributes({
          backContent: newText
        });
      }
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Link Settings", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, /*#__PURE__*/React.createElement("em", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Note: Link settings will only work on back side.", "essential-blocks"))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Link Type", "essential-blocks"),
      id: "eb-flipbox-link-type"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
      id: "eb-flipbox-link-type"
    }, _constants__WEBPACK_IMPORTED_MODULE_7__.LINK_TYPE.map(function (item, index) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        key: index,
        isPrimary: linkType === item.value,
        isSecondary: linkType !== item.value,
        onClick: function onClick() {
          setAttributes({
            linkType: item.value
          }), handleButtonStyle(buttonStyle);
        }
      }, item.label);
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Link", "essential-blocks"),
      value: link,
      placeholder: "https://your-link.com",
      onChange: function onChange(newLink) {
        return setAttributes({
          link: newLink
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Open in New Tab", "essential-blocks"),
      checked: linkOpenNewTab,
      onChange: function onChange() {
        return setAttributes({
          linkOpenNewTab: !linkOpenNewTab
        });
      }
    }), linkType === "button" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Text", "essential-blocks"),
      value: buttonText,
      onChange: function onChange(newText) {
        return setAttributes({
          buttonText: newText
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Style", "essential-blocks"),
      value: buttonStyle,
      options: _constants__WEBPACK_IMPORTED_MODULE_7__.BUTTON_STYLES,
      onChange: function onChange(newStyle) {
        return handleButtonStyle(newStyle);
      }
    })))), tab.name === "styles" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Selected Side", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
      id: "eb-flipbox-sides"
    }, _constants__WEBPACK_IMPORTED_MODULE_7__.FLIPBOX_SIDES.map(function (item, index) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        key: index,
        isPrimary: selectedSide === item.value,
        isSecondary: selectedSide !== item.value,
        onClick: function onClick() {
          return setAttributes({
            selectedSide: item.value
          });
        }
      }, item.label);
    })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flipbox Style", "essential-blocks"),
      initialOpen: true
    }, selectedSide === "front" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Front Title", "essential-blocks"),
      color: frontTitleColor,
      onChange: function onChange(frontTitleColor) {
        return setAttributes({
          frontTitleColor: frontTitleColor
        });
      }
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_9__.frontTitlePadding,
      baseLabel: "Front Title Padding"
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Front Content", "essential-blocks"),
      color: frontContentColor,
      onChange: function onChange(frontContentColor) {
        return setAttributes({
          frontContentColor: frontContentColor
        });
      }
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_9__.frontContentPadding,
      baseLabel: "Padding"
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Front Side Background", "essential-blocks"))), /*#__PURE__*/React.createElement(BackgroundControl, {
      controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_8__.flipboxFrontWrapper,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_9__.frontItemPadding,
      baseLabel: "Items Padding"
    })), selectedSide === "back" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Back Title Color", "essential-blocks"),
      color: backTitleColor,
      onChange: function onChange(backTitleColor) {
        return setAttributes({
          backTitleColor: backTitleColor
        });
      }
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_9__.backTitlePadding,
      baseLabel: "Back Title Padding"
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Back Content Color", "essential-blocks"),
      color: backContentColor,
      onChange: function onChange(backContentColor) {
        return setAttributes({
          backContentColor: backContentColor
        });
      }
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_9__.backContentPadding,
      baseLabel: "Padding"
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Back Side Background", "essential-blocks"))), /*#__PURE__*/React.createElement(BackgroundControl, {
      controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_8__.flipboxBackWrapper,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_9__.backItemPadding,
      baseLabel: "Items Padding"
    }))), selectedSide === "front" && frontIconOrImage === "icon" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Front Icon Style", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(React.Fragment, null, frontIcon && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Color", "essential-blocks"),
      color: frontIconColor,
      onChange: function onChange(frontIconColor) {
        return setAttributes({
          frontIconColor: frontIconColor
        });
      }
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Background", "essential-blocks"),
      color: frontIconBackground,
      onChange: function onChange(frontIconBackground) {
        return setAttributes({
          frontIconBackground: frontIconBackground
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin & Padding", "essential-blocks"))), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      className: "frontIconMargin",
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_9__.frontIconMargin,
      baseLabel: "Margin"
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      className: "frontIconPadding",
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_9__.frontIconPadding,
      baseLabel: "Padding"
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border", "essential-blocks"))), /*#__PURE__*/React.createElement(BorderShadowControl, {
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_10__.borderShadowFrontIcon,
      resRequiredProps: resRequiredProps,
      noShadow: true
    })))), selectedSide === "front" && frontIconOrImage === "image" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Front Image Style", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_9__.frontImgPadding,
      baseLabel: "Padding"
    }))), selectedSide === "back" && backIconOrImage === "icon" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Back Icon Style", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(React.Fragment, null, backIcon && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Color", "essential-blocks"),
      color: backIconColor,
      onChange: function onChange(backIconColor) {
        return setAttributes({
          backIconColor: backIconColor
        });
      }
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Background", "essential-blocks"),
      color: backIconBackground,
      onChange: function onChange(backIconBackground) {
        return setAttributes({
          backIconBackground: backIconBackground
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin & Padding", "essential-blocks"))), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      className: "backIconMargin",
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_9__.backIconMargin,
      baseLabel: "Margin"
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      className: "backIconPadding",
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_9__.backIconPadding,
      baseLabel: "Padding"
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border", "essential-blocks"))), /*#__PURE__*/React.createElement(BorderShadowControl, {
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_10__.borderShadowBackIcon,
      resRequiredProps: resRequiredProps,
      noShadow: true
    })))), selectedSide === "back" && backIconOrImage === "image" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Back Image Style", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_9__.backImgPadding,
      baseLabel: "Padding"
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(TypographyDropdown, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title", "essential-blocks"),
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_11__.typoPrefix_title,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(TypographyDropdown, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Content", "essential-blocks"),
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_11__.typoPrefix_content,
      resRequiredProps: resRequiredProps
    })), linkType === "button" && buttonStyle === "custom" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Style", "essential-blocks")
    }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background", "essential-blocks"),
      color: buttonBackground,
      onChange: function onChange(buttonBackground) {
        return setAttributes({
          buttonBackground: buttonBackground
        });
      }
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "essential-blocks"),
      color: buttonColor,
      onChange: function onChange(buttonColor) {
        return setAttributes({
          buttonColor: buttonColor
        });
      }
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Size", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_12__.buttonIconSizeAttr,
      resRequiredProps: resRequiredProps,
      min: 20,
      max: 600
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padding", "essential-blocks"))), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      className: "forWrapperPadding",
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_9__.buttonPadding,
      baseLabel: "Padding"
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border & Shadow", "essential-blocks"))), /*#__PURE__*/React.createElement(BorderShadowControl, {
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_10__.borderShadowBtn,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Icon", "essential-blocks"))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Display Button Icon", "essential-blocks"),
      checked: displayButtonIcon,
      onChange: function onChange() {
        return setAttributes({
          displayButtonIcon: !displayButtonIcon
        });
      }
    }), displayButtonIcon && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Select Icon", "essential-blocks"),
      id: "eb-flipbox-link-icon",
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add icon with button (optional)", "essential-blocks")
    }, /*#__PURE__*/React.createElement((_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_5___default()), {
      icons: faIcons,
      value: buttonIcon,
      onChange: function onChange(buttonIcon) {
        return setAttributes({
          buttonIcon: buttonIcon
        });
      },
      appendTo: "body",
      closeOnSelect: true
    })), displayButtonIcon && buttonIcon && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Position", "essential-blocks"),
      id: "eb-flipbox-icon-pos"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
      id: "eb-flipbox-icon-pos"
    }, _constants__WEBPACK_IMPORTED_MODULE_7__.ICON_POSITIONS.map(function (item, index) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        key: index,
        style: {
          zIndex: 0
        } // ? Add this style to fix icon list and primary button issue
        // isLarge
        ,
        isSecondary: buttonIconPos !== item.value,
        isPrimary: buttonIconPos === item.value,
        onClick: function onClick() {
          return setAttributes({
            buttonIconPos: item.value
          });
        }
      }, item.label);
    }))))))), tab.name === "advanced" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin & Padding", "essential-blocks"))), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      className: "forWrapperMargin",
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_9__.dimensionsMargin,
      baseLabel: "Margin",
      disableLeftRight: true
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      className: "forWrapperPadding",
      controlName: _constants_dimensionsNames__WEBPACK_IMPORTED_MODULE_9__.dimensionsPadding,
      baseLabel: "Padding"
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, null, /*#__PURE__*/React.createElement("h3", {
      className: "eb-control-title"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border & Shadow", "essential-blocks"))), /*#__PURE__*/React.createElement(BorderShadowControl, {
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_10__.borderShadow,
      resRequiredProps: resRequiredProps
    })), /*#__PURE__*/React.createElement(AdvancedControls, {
      attributes: attributes,
      setAttributes: setAttributes
    })));
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Internal dependencies
 */

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
    buttonClasses = attributes.buttonClasses,
    contentPosition = attributes.contentPosition,
    linkOpenNewTab = attributes.linkOpenNewTab,
    classHook = attributes.classHook;
  var alignmentClass = contentPosition === "center" ? " eb-flipbox-align-center" : contentPosition === "right" ? " eb-flipbox-align-right" : "";
  return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(), /*#__PURE__*/React.createElement("div", {
    className: "eb-parent-wrapper eb-parent-".concat(blockId, " ").concat(classHook)
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-container ".concat(blockId).concat(alignmentClass),
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
    onClick: linkType === "box" && link && linkOpenNewTab ? "window.open('".concat(link, "', '_blank');") : linkType === "box" && link ? "window.location='".concat(link, "'") : undefined
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
    className: "title-link",
    target: linkOpenNewTab ? "_blank" : "_self",
    rel: "noopener"
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
    href: link ? link : "#",
    target: linkOpenNewTab ? "_blank" : "_self",
    rel: "noopener"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-flipbox-button-content"
  }, /*#__PURE__*/React.createElement("span", null, buttonText), buttonIcon && /*#__PURE__*/React.createElement("i", {
    className: "".concat(buttonIcon, " eb-flipbox-button-icon")
  }))))))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addClass; }
/* harmony export */ });
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/esm/hasClass.js");

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0,_hasClass__WEBPACK_IMPORTED_MODULE_0__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hasClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hasClass.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ hasClass; }
/* harmony export */ });
/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/removeClass.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/removeClass.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ removeClass; }
/* harmony export */ });
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ (function(module) {

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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

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
    } catch (x) { /**/ }
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
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

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
    bigint: createPrimitiveTypeChecker('bigint'),
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
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
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
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
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

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
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
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
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
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
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

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
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
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
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
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
/***/ (function(module) {

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

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ (function(module) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/CSSTransition.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-helpers/addClass */ "./node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/removeClass */ "./node_modules/dom-helpers/esm/removeClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _utils_reflow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/reflow */ "./node_modules/react-transition-group/esm/utils/reflow.js");











var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0,dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_3__["default"])(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0,dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_4__["default"])(node, c);
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
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(CSSTransition, _React$Component);

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
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      if (node) (0,_utils_reflow__WEBPACK_IMPORTED_MODULE_6__.forceReflow)(node);
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
        props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["classNames"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Transition__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Transition__WEBPACK_IMPORTED_MODULE_7__["default"].propTypes, {
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
  classNames: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func)
}) : 0;
/* harmony default export */ __webpack_exports__["default"] = (CSSTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/ReplaceTransition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/ReplaceTransition.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");






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
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ReplaceTransition, _React$Component);

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
    var child = react__WEBPACK_IMPORTED_MODULE_2___default().Children.toArray(children)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);

    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_3___default().findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in"]);

    var _React$Children$toArr = react__WEBPACK_IMPORTED_MODULE_2___default().Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_TransitionGroup__WEBPACK_IMPORTED_MODULE_4__["default"], props, inProp ? react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));

ReplaceTransition.propTypes =  true ? {
  in: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool.isRequired),
  children: function children(props, propName) {
    if (react__WEBPACK_IMPORTED_MODULE_2___default().Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : 0;
/* harmony default export */ __webpack_exports__["default"] = (ReplaceTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/SwitchTransition.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/SwitchTransition.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modes": function() { return /* binding */ modes; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");


var _leaveRenders, _enterRenders;






function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (react__WEBPACK_IMPORTED_MODULE_1___default().isValidElement(oldChildren) && react__WEBPACK_IMPORTED_MODULE_1___default().isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
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
  return react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERING, null);
    })
  });
}, _leaveRenders[modes.in] = function (_ref2) {
  var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
  return [current, react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERING);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
  var children = _ref3.children,
      changeState = _ref3.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERED, react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function (_ref4) {
  var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
  return [react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERED, react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {
        in: true
      }));
    })
  }), react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {
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
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: _Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERED,
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

    if (state.status === _Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERING && props.mode === modes.in) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERING
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_2__.EXITING
      };
    }

    return {
      current: react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(props.children, {
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
      case _Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERING:
        component = enterRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_2__.EXITING:
        component = leaveRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERED:
        component = current;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };

  return SwitchTransition;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

SwitchTransition.propTypes =  true ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out`: New element transitions in first, then when complete, the current element transitions out.
   *
   * @type {'out-in'|'in-out'}
   */
  mode: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf([modes.in, modes.out]),

  /**
   * Any `Transition` or `CSSTransition` component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().element.isRequired)])
} : 0;
SwitchTransition.defaultProps = {
  mode: modes.out
};
/* harmony default export */ __webpack_exports__["default"] = (SwitchTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/Transition.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/Transition.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ENTERED": function() { return /* binding */ ENTERED; },
/* harmony export */   "ENTERING": function() { return /* binding */ ENTERING; },
/* harmony export */   "EXITED": function() { return /* binding */ EXITED; },
/* harmony export */   "EXITING": function() { return /* binding */ EXITING; },
/* harmony export */   "UNMOUNTED": function() { return /* binding */ UNMOUNTED; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
/* harmony import */ var _utils_reflow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/reflow */ "./node_modules/react-transition-group/esm/utils/reflow.js");









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
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Transition, _React$Component);

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
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_3___default().findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

          if (node) (0,_utils_reflow__WEBPACK_IMPORTED_MODULE_4__.forceReflow)(node);
        }

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

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom__WEBPACK_IMPORTED_MODULE_3___default().findDOMNode(this), appearing],
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
    var maybeNode = this.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_3___default().findDOMNode(this); // no exit animation skip right to EXITED

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
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_3___default().findDOMNode(this);
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
        childProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(react__WEBPACK_IMPORTED_MODULE_2___default().Children.only(children), childProps))
    );
  };

  return Transition;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"];
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
  nodeRef: prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({
    current: typeof Element === 'undefined' ? (prop_types__WEBPACK_IMPORTED_MODULE_7___default().any) : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return prop_types__WEBPACK_IMPORTED_MODULE_7___default().instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
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
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().func.isRequired), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().element.isRequired)]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

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
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * Enable or disable enter transitions.
   */
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * Enable or disable exit transitions.
   */
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

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
    var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__.timeoutsShape;
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
  addEndListener: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
} : 0; // Name the function so it is clearer in the documentation

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
/* harmony import */ var _utils_ChildMapping__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/esm/utils/ChildMapping.js");









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
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)); // Initial children should all be entering, dependent on appear


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
      children: firstRender ? (0,_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_5__.getInitialChildMapping)(nextProps, handleExited) : (0,_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_5__.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0,_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_5__.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.children);

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
        props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
      value: contextValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(Component, props, children));
  };

  return TransitionGroup;
}((react__WEBPACK_IMPORTED_MODULE_4___default().Component));

TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().any),

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
  children: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().node),

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

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
  childFactory: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
} : 0;
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (TransitionGroup);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null));

/***/ }),

/***/ "./node_modules/react-transition-group/esm/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/config.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSTransition": function() { return /* reexport safe */ _CSSTransition__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "ReplaceTransition": function() { return /* reexport safe */ _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "SwitchTransition": function() { return /* reexport safe */ _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "Transition": function() { return /* reexport safe */ _Transition__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "TransitionGroup": function() { return /* reexport safe */ _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "config": function() { return /* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_5__["default"]; }
/* harmony export */ });
/* harmony import */ var _CSSTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/esm/ReplaceTransition.js");
/* harmony import */ var _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchTransition */ "./node_modules/react-transition-group/esm/SwitchTransition.js");
/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");







/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/ChildMapping.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/ChildMapping.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getChildMapping": function() { return /* binding */ getChildMapping; },
/* harmony export */   "getInitialChildMapping": function() { return /* binding */ getInitialChildMapping; },
/* harmony export */   "getNextChildMapping": function() { return /* binding */ getNextChildMapping; },
/* harmony export */   "mergeChildMappings": function() { return /* binding */ mergeChildMappings; }
/* harmony export */ });
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
    return mapFn && (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, function (c) {
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
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
    if (!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classNamesShape": function() { return /* binding */ classNamesShape; },
/* harmony export */   "timeoutsShape": function() { return /* binding */ timeoutsShape; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
}).isRequired]) : 0;
var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  active: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  enterDone: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  enterActive: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exitDone: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exitActive: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
})]) : 0;

/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/reflow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/reflow.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forceReflow": function() { return /* binding */ forceReflow; }
/* harmony export */ });
var forceReflow = function forceReflow(node) {
  return node.scrollTop;
};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _assertThisInitialized; }
/* harmony export */ });
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
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inheritsLoose; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
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

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"flipbox/flipbox-block","title":"Flipbox","category":"widgets","description":"Deliver Your Content Beautifully To Grab Attention","keywords":["flipbox","flip","box"],"textdomain":"flipbox","editorScript":"file:./dist/index.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"dist": 0,
/******/ 			"./style-dist": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkflipbox_block"] = self["webpackChunkflipbox_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-dist"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map