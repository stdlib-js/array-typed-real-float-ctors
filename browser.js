// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,o;t=this,o=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,n=Object.prototype.hasOwnProperty,r="function"==typeof Symbol?Symbol:void 0,e="function"==typeof r?r.toStringTag:"",l=t&&"symbol"==typeof Symbol.toStringTag?function(t){var r,l,a,f,y;if(null==t)return o.call(t);l=t[e],y=e,r=null!=(f=t)&&n.call(f,y);try{t[e]=void 0}catch(n){return o.call(t)}return a=o.call(t),r?t[e]=l:delete t[e],a}:function(t){return o.call(t)},a="function"==typeof Float64Array,f="function"==typeof Float64Array?Float64Array:null,y="function"==typeof Float64Array?Float64Array:void 0,i=function(){var t,o,n;if("function"!=typeof f)return!1;try{o=new f([1,3.14,-3.14,NaN]),n=o,t=(a&&n instanceof Float64Array||"[object Float64Array]"===l(n))&&1===o[0]&&3.14===o[1]&&-3.14===o[2]&&o[3]!=o[3]}catch(o){t=!1}return t}()?y:function(){throw new Error("not implemented")},u="function"==typeof Float32Array,c=Number.POSITIVE_INFINITY,p="function"==typeof Float32Array?Float32Array:null,d="function"==typeof Float32Array?Float32Array:void 0,b={float64:i,float32:function(){var t,o,n;if("function"!=typeof p)return!1;try{o=new p([1,3.14,-3.14,5e40]),n=o,t=(u&&n instanceof Float32Array||"[object Float32Array]"===l(n))&&1===o[0]&&3.140000104904175===o[1]&&-3.140000104904175===o[2]&&o[3]===c}catch(o){t=!1}return t}()?d:function(){throw new Error("not implemented")}};return function(t){return b[t]||null}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(t="undefined"!=typeof globalThis?globalThis:t||self).ctors=o();
//# sourceMappingURL=browser.js.map
