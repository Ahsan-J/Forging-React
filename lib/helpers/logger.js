"use strict";var __read=this&&this.__read||function(r,e){var t="function"==typeof Symbol&&r[Symbol.iterator];if(!t)return r;var o,n,i=t.call(r),l=[];try{for(;(void 0===e||0<e--)&&!(o=i.next()).done;)l.push(o.value)}catch(r){n={error:r}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(n)throw n.error}}return l},__spreadArray=this&&this.__spreadArray||function(r,e,t){if(t||2===arguments.length)for(var o,n=0,i=e.length;n<i;n++)!o&&n in e||((o=o||Array.prototype.slice.call(e,0,n))[n]=e[n]);return r.concat(o||Array.prototype.slice.call(e))},utility_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.Logger=void 0,require("./utility"));exports.Logger={log:function(r){for(var e=1;e<arguments.length;e++)e-1,0;"development"===process.env.NODE_ENV&&(r=Array.isArray(r)?r.filter(function(r){return r}).join(","):r,(0,utility_1.stringToColor)(r))},error:function(r){for(var e=1;e<arguments.length;e++)e-1,0;"development"===process.env.NODE_ENV&&Array.isArray(r)&&r.filter(function(r){return r}).join(",")},warn:function(r){for(var e=1;e<arguments.length;e++)e-1,0;"development"===process.env.NODE_ENV&&Array.isArray(r)&&r.filter(function(r){return r}).join(",")}},Object.freeze(exports.Logger),Object.seal(exports.Logger);