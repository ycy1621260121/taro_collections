(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/testB/index/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/testB/index/index.tsx":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/testB/index/index.tsx ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var taro_hooks_lib_useToast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! taro-hooks/lib/useToast */ "./node_modules/taro-hooks/lib/useToast/index.js");
/* harmony import */ var taro_hooks_lib_useModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! taro-hooks/lib/useModal */ "./node_modules/taro-hooks/lib/useModal/index.js");
/* harmony import */ var taro_hooks_lib_useNavigationBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! taro-hooks/lib/useNavigationBar */ "./node_modules/taro-hooks/lib/useNavigationBar/index.js");
/* harmony import */ var D_hzx_work_miniprogram_floorMaster_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var taro_hooks_lib_useEnv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! taro-hooks/lib/useEnv */ "./node_modules/taro-hooks/lib/useEnv/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _images_hook_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/images/hook.png */ "./src/images/hook.png");
/* harmony import */ var _components_HelloWord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/HelloWord */ "./src/components/HelloWord/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






 // @ts-ignore
//import {getBookList} from '@/common/testA/api/home'

 // @ts-ignore






var IndexPage = function IndexPage() {
  var env = (0,taro_hooks_lib_useEnv__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var _useNavigationBar = (0,taro_hooks_lib_useNavigationBar__WEBPACK_IMPORTED_MODULE_5__["default"])({
    title: "Taro Hooks"
  }),
      _useNavigationBar2 = (0,D_hzx_work_miniprogram_floorMaster_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useNavigationBar, 2),
      _ = _useNavigationBar2[0],
      setTitle = _useNavigationBar2[1].setTitle;

  var _useModal = (0,taro_hooks_lib_useModal__WEBPACK_IMPORTED_MODULE_7__["default"])({
    title: "Taro Hooks!",
    showCancel: false,
    confirmColor: "#8c2de9",
    confirmText: "支持一下",
    mask: true
  }),
      _useModal2 = (0,D_hzx_work_miniprogram_floorMaster_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useModal, 1),
      show = _useModal2[0];

  var _useToast = (0,taro_hooks_lib_useToast__WEBPACK_IMPORTED_MODULE_8__["default"])({
    mask: true
  }),
      _useToast2 = (0,D_hzx_work_miniprogram_floorMaster_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useToast, 1),
      showToast = _useToast2[0];

  var handleModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    show({
      content: "不如给一个star⭐️!"
    }).then(function () {
      showToast({
        title: "点击了支持!"
      });
    });
  }, [show, showToast]); // useEffect(() => {
  //   try {
  //     getBookList({}).then(res => {
  //       console.log(res)
  //     })
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }, [])

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
    className: "wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Image, {
      className: "logo",
      src: _images_hook_png__WEBPACK_IMPORTED_MODULE_1__
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "list",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
        className: "note",
        children: env
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Button, {
      className: "button",
      onClick: function onClick() {
        return setTitle("Taro Hooks Nice!");
      },
      children: "\u8BBE\u7F6E\u6807\u9898"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Button, {
      className: "button",
      onClick: handleModal,
      children: "\u4F7F\u7528Modal"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_HelloWord__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./node_modules/taro-hooks/lib/constant.js":
/*!*************************************************!*\
  !*** ./node_modules/taro-hooks/lib/constant.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ENV_TYPE = void 0;
var ENV_TYPE = {
  WEAPP: 'WEAPP',
  WEB: 'WEB',
  RN: 'RN',
  SWAN: 'SWAN',
  ALIPAY: 'ALIPAY',
  TT: 'TT',
  QQ: 'QQ',
  JD: 'JD'
};
exports.ENV_TYPE = ENV_TYPE;

/***/ }),

/***/ "./node_modules/taro-hooks/lib/useEnv/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/taro-hooks/lib/useEnv/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _taro = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");

var _react = __webpack_require__(/*! react */ "webpack/container/remote/react");

function useEnv() {
  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      env = _useState2[0],
      setEnv = _useState2[1];

  (0, _react.useEffect)(function () {
    setEnv((0, _taro.getEnv)());
  }, []);
  return env;
}

var _default = useEnv;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/taro-hooks/lib/useModal/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/taro-hooks/lib/useModal/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_unused_export__ = ({
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "./node_modules/@babel/runtime/helpers/objectSpread2.js"));

var _taro = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");

var _react = __webpack_require__(/*! react */ "webpack/container/remote/react");

function useModal(option) {
  var initialOption = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    initialOption.current = option;
  }, [option]);
  var showModalAsync = (0, _react.useCallback)(function (option) {
    return new Promise(function (resolve, reject) {
      try {
        if (!option && !initialOption.current) {
          console.warn('please provide a option');
          return reject(new Error('please provide a option'));
        } else {
          var options = Object.assign({}, initialOption.current || {}, option || {});
          (0, _taro.showModal)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, options), {}, {
            success: resolve,
            fail: reject
          })).catch(reject);
        }
      } catch (e) {
        reject(e);
      }
    });
  }, [initialOption]);
  return [showModalAsync];
}

var _default = useModal;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/taro-hooks/lib/useNavigationBar/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/taro-hooks/lib/useNavigationBar/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_unused_export__ = ({
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "./node_modules/@babel/runtime/helpers/objectSpread2.js"));

var _taro = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");

var _react = __webpack_require__(/*! react */ "webpack/container/remote/react");

var _useEnv = _interopRequireDefault(__webpack_require__(/*! ../useEnv */ "./node_modules/taro-hooks/lib/useEnv/index.js"));

var _constant = __webpack_require__(/*! ../constant */ "./node_modules/taro-hooks/lib/constant.js");

function useNavigationBar(option) {
  var _initialOption$curren2;

  var initialOption = (0, _react.useRef)({});
  var env = (0, _useEnv.default)();
  (0, _react.useEffect)(function () {
    if (option && env && env !== _constant.ENV_TYPE.WEB) {
      var PromiseArray = [];
      var loading = option.loading,
          _title = option.title,
          frontColor = option.frontColor,
          backgroundColor = option.backgroundColor,
          animation = option.animation,
          _hideHomeButton = option.hideHomeButton;
      loading && PromiseArray.push(toggleLoadingAsync());
      _title && PromiseArray.push(setTitleAsync(_title));
      _hideHomeButton && PromiseArray.push(hideHomeButtonAsync());
      frontColor && backgroundColor && PromiseArray.push(setColorAsync({
        backgroundColor: backgroundColor,
        frontColor: frontColor,
        animation: animation
      }));
      PromiseArray.length && Promise.all(PromiseArray).finally(function () {
        initialOption.current = option;
      });
    }
  }, [option, env]);
  var toggleLoadingAsync = (0, _react.useCallback)(function () {
    return new Promise(function (resolve, reject) {
      try {
        var _initialOption$curren;

        var _Action = _taro.showNavigationBarLoading,
            _option = {
          loading: true
        };

        if ((_initialOption$curren = initialOption.current) === null || _initialOption$curren === void 0 ? void 0 : _initialOption$curren.loading) {
          _Action = _taro.hideNavigationBarLoading;
          _option = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, initialOption.current), {}, {
            loading: false
          });
        }

        _Action({
          success: function success(res) {
            initialOption.current = _option;
            resolve(res);
          },
          fail: reject
        });
      } catch (e) {
        reject(e);
      }
    });
  }, [initialOption]);
  var setTitleAsync = (0, _react.useCallback)(function (title) {
    return new Promise(function (resolve, reject) {
      try {
        if (!title) {
          throw new Error('you must provide a title');
        }

        (0, _taro.setNavigationBarTitle)({
          title: title,
          success: function success(res) {
            initialOption.current = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, initialOption.current), {}, {
              title: title
            });
            resolve(res);
          }
        }).catch(reject);
      } catch (e) {
        reject(e);
      }
    });
  }, []);
  var setColorAsync = (0, _react.useCallback)(function (option) {
    return new Promise(function (resolve, reject) {
      try {
        if (!option.backgroundColor || !option.frontColor) {
          throw new Error('you must provide backgroundColor or frontColor');
        }

        (0, _taro.setNavigationBarColor)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, option), {}, {
          success: function success(res) {
            var frontColor = option.frontColor,
                backgroundColor = option.backgroundColor,
                _option$animation = option.animation,
                animation = _option$animation === void 0 ? false : _option$animation;
            initialOption.current = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, initialOption.current), {}, {
              frontColor: frontColor,
              backgroundColor: backgroundColor,
              animation: animation
            });
            resolve(res);
          },
          fail: reject
        }));
      } catch (e) {
        reject(e);
      }
    });
  }, []);
  var hideHomeButtonAsync = (0, _react.useCallback)(function () {
    return new Promise(function (resolve, reject) {
      try {
        (0, _taro.hideHomeButton)({
          success: function success(res) {
            initialOption.current = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, initialOption.current), {}, {
              hideHomeButton: true
            });
            resolve(res);
          },
          fail: reject
        });
      } catch (e) {
        reject(e);
      }
    });
  }, []);
  return [((_initialOption$curren2 = initialOption.current) === null || _initialOption$curren2 === void 0 ? void 0 : _initialOption$curren2.loading) || false, {
    toggleLoading: toggleLoadingAsync,
    hideHomeButton: hideHomeButtonAsync,
    setTitle: setTitleAsync,
    setColor: setColorAsync
  }];
}

var _default = useNavigationBar;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/taro-hooks/lib/useToast/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/taro-hooks/lib/useToast/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_unused_export__ = ({
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "./node_modules/@babel/runtime/helpers/objectSpread2.js"));

var _taro = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");

var _react = __webpack_require__(/*! react */ "webpack/container/remote/react");

function useToast(option) {
  var initialOption = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    initialOption.current = option;
  }, [option]);
  var showToastAsync = (0, _react.useCallback)(function (option) {
    return new Promise(function (resolve, reject) {
      try {
        if (!option && !initialOption.current) {
          console.warn('please provide a option');
          return reject(new Error('please provide a option'));
        } else {
          var options = Object.assign({}, initialOption.current || {}, option || {});

          if (!options.title) {
            reject({
              errMsg: 'showToast: fail'
            });
          } else {
            (0, _taro.showToast)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, options), {}, {
              success: resolve,
              fail: reject
            })).catch(reject);
          }
        }
      } catch (e) {
        reject(e);
      }
    });
  }, [initialOption]);
  var hideToastAsync = (0, _react.useCallback)(function () {
    return new Promise(function (resolve, reject) {
      try {
        (0, _taro.hideToast)({
          success: resolve,
          fail: reject
        });
      } catch (e) {
        reject(e);
      }
    });
  }, []);
  return [showToastAsync, hideToastAsync];
}

var _default = useToast;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/HelloWord/index.tsx":
/*!********************************************!*\
  !*** ./src/components/HelloWord/index.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);




var HelloWord = function HelloWord() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
    className: "wrapper",
    children: "\u5927\u5BB6\u597D\uFF0C\u6211\u662F\u4E00\u4E2A\u7EC4\u4EF6"
  });
};

/* harmony default export */ __webpack_exports__["default"] = (HelloWord);

/***/ }),

/***/ "./src/pages/testB/index/index.tsx":
/*!*****************************************!*\
  !*** ./src/pages/testB/index/index.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.tsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/testB/index/index.tsx");


var config = {"navigationBarTitleText":"楼掌门","enableShareAppMessage":true};

_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].enableShareAppMessage = true
var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/testB/index/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/images/hook.png":
/*!*****************************!*\
  !*** ./src/images/hook.png ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/hook.png";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ (function(module) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/***/ (function(module) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
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
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/***/ (function(module) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/***/ (function(module) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread2.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread2.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","common"], function() { return __webpack_exec__("./src/pages/testB/index/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map