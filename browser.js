// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,o;t=this,o=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,n=Object.prototype.hasOwnProperty,r="function"==typeof Symbol?Symbol.toStringTag:"",e=t&&"symbol"==typeof Symbol.toStringTag?function(t){var e,l,a,f,y;if(null==t)return o.call(t);l=t[r],y=r,e=null!=(f=t)&&n.call(f,y);try{t[r]=void 0}catch(n){return o.call(t)}return a=o.call(t),e?t[r]=l:delete t[r],a}:function(t){return o.call(t)},l="function"==typeof Float64Array,a="function"==typeof Float64Array?Float64Array:null,f="function"==typeof Float64Array?Float64Array:void 0,y=function(){var t,o,n;if("function"!=typeof a)return!1;try{o=new a([1,3.14,-3.14,NaN]),n=o,t=(l&&n instanceof Float64Array||"[object Float64Array]"===e(n))&&1===o[0]&&3.14===o[1]&&-3.14===o[2]&&o[3]!=o[3]}catch(o){t=!1}return t}()?f:function(){throw new Error("not implemented")},i="function"==typeof Float32Array,u=Number.POSITIVE_INFINITY,c="function"==typeof Float32Array?Float32Array:null,p="function"==typeof Float32Array?Float32Array:void 0,d={float64:y,float32:function(){var t,o,n;if("function"!=typeof c)return!1;try{o=new c([1,3.14,-3.14,5e40]),n=o,t=(i&&n instanceof Float32Array||"[object Float32Array]"===e(n))&&1===o[0]&&3.140000104904175===o[1]&&-3.140000104904175===o[2]&&o[3]===u}catch(o){t=!1}return t}()?p:function(){throw new Error("not implemented")}};return function(t){return d[t]||null}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(t="undefined"!=typeof globalThis?globalThis:t||self).ctors=o();
//# sourceMappingURL=browser.js.map
