/*! For license information please see 6715.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[6715],{"7851":function(t,n,o){o.d(n,{"a":function(){return createCommonjsModule},"b":function(){return s},"c":function(){return a},"g":function(){return getDefaultExportFromCjs}});var i=o(1002),s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==o.g?o.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function createCommonjsModule(t,n,o){return t(o={"path":n,"exports":{},"require":function require(t,n){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},o.exports),o.exports}var a=createCommonjsModule((function(t){!function(){var n={}.hasOwnProperty;function r(){for(var t=[],o=0;o<arguments.length;o++){var s=arguments[o];if(s){var a=(0,i.Z)(s);if("string"===a||"number"===a)t.push(s);else if(Array.isArray(s)){if(s.length){var u=r.apply(null,s);u&&t.push(u)}}else if("object"===a)if(s.toString===Object.prototype.toString)for(var c in s)n.call(s,c)&&s[c]&&t.push(c);else t.push(s.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):window.classNames=r}()}))},"6715":function(t,n,o){o.r(n),o.d(n,{"taro_navigator_core":function(){return u}});var i=o(4933),s=o(9042),a=o(7851),u=function(){function e(t){(0,i.r)(this,t),this.onSuccess=(0,i.c)(this,"cuccess",7),this.onFail=(0,i.c)(this,"fail",7),this.onComplete=(0,i.c)(this,"Complete",7),this.openType="navigate",this.isHover=!1,this.delta=0}return e.prototype.onClick=function(){var t=this,n=t.openType,o=t.onSuccess,i=t.onFail,a=t.onComplete,u=Promise.resolve();switch(n){case"navigate":u=(0,s.T8)({"url":this.url});break;case"redirect":u=(0,s.gB)({"url":this.url});break;case"switchTab":u=(0,s.MR)({"url":this.url});break;case"reLaunch":u=(0,s.UY)({"url":this.url});break;case"navigateBack":u=(0,s.n)({"delta":this.delta});break;case"exit":u=Promise.reject(new Error('navigator:fail 暂不支持"openType: exit"'))}u&&u.then((function(t){o.emit(t)})).catch((function(t){i.emit(t)})).finally((function(){a.emit()}))},e.prototype.render=function(){var t,n=this.isHover,o=this.hoverClass;return(0,i.h)(i.H,{"class":(0,a.c)((t={},t[o]=n,t))})},e}();u.style=".navigator-hover{background:#efefef}"}}]);