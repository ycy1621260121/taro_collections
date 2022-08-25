/*! For license information please see 9411.js.LICENSE.txt */
(self.webpackJsonp=self.webpackJsonp||[]).push([[9411],{"4864":function(e,r,t){"use strict";t.d(r,{"zx":function(){return b},"Ee":function(){return x},"xv":function(){return h},"G7":function(){return m}});var o=t(7294),n=t(4942),a=t(9439),c=t(1002),i=t(5671),s=t(3144),u=t(136),l=t(2963),f=t(1120),p=t(3433);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _createSuper(e){var r=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var t,o=(0,f.Z)(e);if(r){var n=(0,f.Z)(this).constructor;t=Reflect.construct(o,arguments,n)}else t=o.apply(this,arguments);return(0,l.Z)(this,t)}}o.createElement;var d="taro-scroll-view-core",v=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,r,t){/^--/.test(r)?e.style.setProperty(r,t):"number"!=typeof t||v.test(r)?e.style[r]=t:e.style[r]=t+"px"}function updateProp(e,r,t,o,n){var a=e.ref.current,c=n[t],i=o?o[t]:void 0;if("children"!==t)if("classname"!==t.toLowerCase()){if("style"!==t){if(/^data-.+/.test(t)&&a.setAttribute(t,c),r===d){if("scrollTop"===t)return void(a.mpScrollTop=c);if("scrollLeft"===t)return void(a.mpScrollLeft=c);if("scrollIntoView"===t)return void(a.mpScrollIntoView=c)}if("function"==typeof c&&t.match(/^on[A-Z]/)){var s=t.substr(2).toLowerCase(),u=c;return r===d&&"scroll"===s&&(u=function fn(e){e instanceof CustomEvent&&c.apply(null,Array.from(arguments))}),e.eventHandlers.push([s,u]),a.addEventListener(s,u)}return"string"==typeof c||"number"==typeof c?(a.setAttribute(t,c),void(a[t]=c)):"boolean"==typeof c?c?(a[t]=!0,a.setAttribute(t,c)):(a[t]=!1,a.removeAttribute(t)):void(a[t]=c)}if("string"==typeof c)return void a.setAttribute(t,c);if(!c)return void a.removeAttribute(t);if(o)if("string"==typeof i)a.style.cssText="";else for(var l in i)updateStyle(a,l,"");for(var f in c)updateStyle(a,f,c[f])}else a.className=o?function getClassName(e,r,t){var o=Array.from(e.classList),n=(r.className||r.class||"").split(" "),a=(t.className||t.class||"").split(" "),c=[];return o.forEach((function(e){a.indexOf(e)>-1?(c.push(e),a=a.filter((function(r){return r!==e}))):-1===n.indexOf(e)&&c.push(e)})),(c=[].concat((0,p.Z)(c),(0,p.Z)(a))).join(" ")}(a,o,n):c}var y=function reactifyWebComponent(e){var r=function(r){(0,u.Z)(Index,r);var t=_createSuper(Index);function Index(e){var r;return(0,i.Z)(this,Index),(r=t.call(this,e)).eventHandlers=[],r.ref=(0,o.createRef)(),r}return(0,s.Z)(Index,[{"key":"update","value":function update(r){var t=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(r||{}).forEach((function(o){"children"===o||"key"===o||o in t.props||updateProp(t,e,o,r,t.props)})),Object.keys(this.props).forEach((function(o){updateProp(t,e,o,r,t.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,c.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(r){var t=(0,a.Z)(r,2),o=t[0],n=t[1];e.ref.current&&e.ref.current.removeEventListener(o,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var r=this.props,t=r.children,n=r.dangerouslySetInnerHTML,a={"ref":this.ref};return n&&(a.dangerouslySetInnerHTML=n),(0,o.createElement)(e,a,t)}}]),Index}(o.Component);return o.forwardRef((function(e,t){return o.createElement(r,_objectSpread(_objectSpread({},e),{},{"forwardRef":t}))}))},m=(y("taro-cover-image-core"),y("taro-cover-view-core"),y("taro-match-media-core"),y("taro-movable-area-core"),y("taro-movable-view-core"),y("taro-page-container-core"),y("taro-root-portal-core"),y("taro-scroll-view-core"),y("taro-share-element-core"),y("taro-swiper-core"),y("taro-swiper-item-core"),y("taro-view-core")),h=(y("taro-icon-core"),y("taro-progress-core"),y("taro-rich-text-core"),y("taro-text-core")),b=y("taro-button-core"),x=(y("taro-checkbox-core"),y("taro-checkbox-group-core"),y("taro-editor-core"),y("taro-form-core"),y("taro-keyboard-accessory-core"),y("taro-label-core"),y("taro-picker-core"),y("taro-picker-view-core"),y("taro-picker-view-column-core"),y("taro-radio-core"),y("taro-radio-group-core"),y("taro-slider-core"),y("taro-switch-core"),y("taro-textarea-core"),y("taro-functional-page-navigator-core"),y("taro-navigator-core"),y("taro-audio-core"),y("taro-camera-core"),y("taro-image-core"));y("taro-live-player-core"),y("taro-video-core"),y("taro-voip-room-core"),y("taro-map-core"),y("taro-canvas-core"),y("taro-web-view-core"),y("taro-ad-core"),y("taro-ad-custom-core"),y("taro-official-account-core"),y("taro-open-data-core"),y("taro-navigation-bar-core"),y("taro-page-meta-core"),y("taro-custom-wrapper-core")},"78":function(e,r){"use strict";Object.defineProperty(r,"__esModule",{"value":!0}),r.ENV_TYPE=void 0;r.ENV_TYPE={"WEAPP":"WEAPP","WEB":"WEB","RN":"RN","SWAN":"SWAN","ALIPAY":"ALIPAY","TT":"TT","QQ":"QQ","JD":"JD"}},"5561":function(e,r,t){"use strict";var o=t(4836);Object.defineProperty(r,"__esModule",{"value":!0}),r.default=void 0;var n=o(t(7424)),a=t(8633),c=t(7294);var i=function useEnv(){var e=(0,c.useState)(""),r=(0,n.default)(e,2),t=r[0],o=r[1];return(0,c.useEffect)((function(){o((0,a.getEnv)())}),[]),t};r.default=i},"8474":function(e,r,t){"use strict";var o=t(4836);r.Z=void 0;var n=o(t(2122)),a=t(8633),c=t(7294);var i=function useModal(e){var r=(0,c.useRef)();(0,c.useEffect)((function(){r.current=e}),[e]);var t=(0,c.useCallback)((function(e){return new Promise((function(t,o){try{if(!e&&!r.current)return console.warn("please provide a option"),o(new Error("please provide a option"));var c=Object.assign({},r.current||{},e||{});(0,a.showModal)((0,n.default)((0,n.default)({},c),{},{"success":t,"fail":o})).catch(o)}catch(e){o(e)}}))}),[r]);return[t]};r.Z=i},"5219":function(e,r,t){"use strict";var o=t(4836);r.Z=void 0;var n=o(t(2122)),a=t(8633),c=t(7294),i=o(t(5561)),s=t(78);var u=function useNavigationBar(e){var r,t=(0,c.useRef)({}),o=(0,i.default)();(0,c.useEffect)((function(){if(e&&o&&o!==s.ENV_TYPE.WEB){var r=[],n=e.loading,a=e.title,c=e.frontColor,i=e.backgroundColor,d=e.animation,v=e.hideHomeButton;n&&r.push(u()),a&&r.push(l(a)),v&&r.push(p()),c&&i&&r.push(f({"backgroundColor":i,"frontColor":c,"animation":d})),r.length&&Promise.all(r).finally((function(){t.current=e}))}}),[e,o]);var u=(0,c.useCallback)((function(){return new Promise((function(e,r){try{var o,c=a.showNavigationBarLoading,i={"loading":!0};(null===(o=t.current)||void 0===o?void 0:o.loading)&&(c=a.hideNavigationBarLoading,i=(0,n.default)((0,n.default)({},t.current),{},{"loading":!1})),c({"success":function success(r){t.current=i,e(r)},"fail":r})}catch(e){r(e)}}))}),[t]),l=(0,c.useCallback)((function(e){return new Promise((function(r,o){try{if(!e)throw new Error("you must provide a title");(0,a.setNavigationBarTitle)({"title":e,"success":function success(o){t.current=(0,n.default)((0,n.default)({},t.current),{},{"title":e}),r(o)}}).catch(o)}catch(e){o(e)}}))}),[]),f=(0,c.useCallback)((function(e){return new Promise((function(r,o){try{if(!e.backgroundColor||!e.frontColor)throw new Error("you must provide backgroundColor or frontColor");(0,a.setNavigationBarColor)((0,n.default)((0,n.default)({},e),{},{"success":function success(o){var a=e.frontColor,c=e.backgroundColor,i=e.animation,s=void 0!==i&&i;t.current=(0,n.default)((0,n.default)({},t.current),{},{"frontColor":a,"backgroundColor":c,"animation":s}),r(o)},"fail":o}))}catch(e){o(e)}}))}),[]),p=(0,c.useCallback)((function(){return new Promise((function(e,r){try{(0,a.hideHomeButton)({"success":function success(r){t.current=(0,n.default)((0,n.default)({},t.current),{},{"hideHomeButton":!0}),e(r)},"fail":r})}catch(e){r(e)}}))}),[]);return[(null===(r=t.current)||void 0===r?void 0:r.loading)||!1,{"toggleLoading":u,"hideHomeButton":p,"setTitle":l,"setColor":f}]};r.Z=u},"2639":function(e,r,t){"use strict";var o=t(4836);r.Z=void 0;var n=o(t(2122)),a=t(8633),c=t(7294);var i=function useToast(e){var r=(0,c.useRef)();(0,c.useEffect)((function(){r.current=e}),[e]);var t=(0,c.useCallback)((function(e){return new Promise((function(t,o){try{if(!e&&!r.current)return console.warn("please provide a option"),o(new Error("please provide a option"));var c=Object.assign({},r.current||{},e||{});c.title?(0,a.showToast)((0,n.default)((0,n.default)({},c),{},{"success":t,"fail":o})).catch(o):o({"errMsg":"showToast: fail"})}catch(e){o(e)}}))}),[r]);return[t,(0,c.useCallback)((function(){return new Promise((function(e,r){try{(0,a.hideToast)({"success":e,"fail":r})}catch(e){r(e)}}))}),[])]};r.Z=i},"9411":function(e,r,t){"use strict";t.r(r),t.d(r,{"default":function(){return d}});var o=t(2639),n=t(8474),a=t(5219),c=t(9439),i=t(5561),s=t(7294),u=t(4864),l=t(4117),f=t(5893),p=function HelloWord(){return(0,f.jsx)(u.G7,{"className":"wrapper","children":"大家好，我是一个组件"})},d=function Index(e){var r=(0,i.default)(),t=(0,a.Z)({"title":"Taro Hooks"}),d=(0,c.Z)(t,2),v=(d[0],d[1].setTitle),y=(0,n.Z)({"title":"Taro Hooks!","showCancel":!1,"confirmColor":"#8c2de9","confirmText":"支持一下","mask":!0}),m=(0,c.Z)(y,1)[0],h=(0,o.Z)({"mask":!0}),b=(0,c.Z)(h,1)[0],x=(0,s.useCallback)((function(){m({"content":"不如给一个star⭐️!"}).then((function(){b({"title":"点击了支持!"})}))}),[m,b]);return(0,f.jsxs)(u.G7,{"className":"wrapper","children":[(0,f.jsx)(u.Ee,{"className":"logo","src":l}),(0,f.jsx)(u.xv,{"className":"title","children":"为Taro而设计的Hooks Library"}),(0,f.jsx)(u.xv,{"className":"desc","children":"目前覆盖70%官方API. 抹平部分API在H5端短板. 提供近40+Hooks! 并结合ahook适配Taro!"}),(0,f.jsxs)(u.G7,{"className":"list","children":[(0,f.jsx)(u.xv,{"className":"label","children":"运行环境"}),(0,f.jsx)(u.xv,{"className":"note","children":r})]}),(0,f.jsx)(p,{}),(0,f.jsx)(u.zx,{"className":"button","onClick":function onClick(){return v("Taro Hooks Nice!")},"children":"设置标题"}),(0,f.jsx)(u.zx,{"className":"button","onClick":x,"children":"使用Modal"})]})}},"5251":function(e,r,t){"use strict";var o=t(7294),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,r,t){var o,a={},u=null,l=null;for(o in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,o)&&!s.hasOwnProperty(o)&&(a[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===a[o]&&(a[o]=r[o]);return{"$$typeof":n,"type":e,"key":u,"ref":l,"props":a,"_owner":i.current}}r.jsx=q,r.jsxs=q},"5893":function(e,r,t){"use strict";e.exports=t(5251)},"4117":function(e,r,t){"use strict";e.exports=t.p+"static/images/images/hook.png"},"3897":function(e){e.exports=function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=new Array(r);t<r;t++)o[t]=e[t];return o},e.exports.__esModule=!0,e.exports.default=e.exports},"5372":function(e){e.exports=function _arrayWithHoles(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},"8416":function(e){e.exports=function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{"value":t,"enumerable":!0,"configurable":!0,"writable":!0}):e[r]=t,e},e.exports.__esModule=!0,e.exports.default=e.exports},"4836":function(e){e.exports=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}},e.exports.__esModule=!0,e.exports.default=e.exports},"8872":function(e){e.exports=function _iterableToArrayLimit(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var o,n,a=[],c=!0,i=!1;try{for(t=t.call(e);!(c=(o=t.next()).done)&&(a.push(o.value),!r||a.length!==r);c=!0);}catch(e){i=!0,n=e}finally{try{c||null==t.return||t.return()}finally{if(i)throw n}}return a}},e.exports.__esModule=!0,e.exports.default=e.exports},"2218":function(e){e.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},"2122":function(e,r,t){var o=t(8416);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}e.exports=function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e},e.exports.__esModule=!0,e.exports.default=e.exports},"7424":function(e,r,t){var o=t(5372),n=t(8872),a=t(6116),c=t(2218);e.exports=function _slicedToArray(e,r){return o(e)||n(e,r)||a(e,r)||c()},e.exports.__esModule=!0,e.exports.default=e.exports},"6116":function(e,r,t){var o=t(3897);e.exports=function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return o(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,r):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);