"use strict";var __values=this&&this.__values||function(r){var e="function"==typeof Symbol&&Symbol.iterator,t=e&&r[e],o=0;if(t)return t.call(r);if(r&&"number"==typeof r.length)return{next:function(){return{value:(r=r&&o>=r.length?void 0:r)&&r[o++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},jsonQuery_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.Validator=void 0,require("../helpers/jsonQuery")),Validator=function(){function r(r){return this.keys=r,this}return r.prototype.validate=function(s,f){var v=this;return void 0===f&&(f=this.keys),Object.keys(f||[]).reduce(function(r,e){var t,o=null==f?void 0:f[e],n=new jsonQuery_1.JsonObject(Object.assign({},s)).query(e.toString());if(Array.isArray(o))try{for(var i=__values(o),a=i.next();!a.done;a=i.next()){var l,u=a.value;"object"!=typeof r||r[e]||"function"!=typeof u||"boolean"!=typeof(l=u(n,s))&&(r[e]=l)}}catch(r){t={error:r}}finally{try{a&&!a.done&&(y=i.return)&&y.call(i)}finally{if(t)throw t.error}}var y=null==s?void 0:s[e];return y&&"object"==typeof y&&!Array.isArray(o)&&(r[e]=v.validate(y,o)),e in r||(r[e]=!0),r},{})},r.prototype.assert=function(r,e){var t,o,n=null==(n=this.keys)?void 0:n[r];if(Array.isArray(n))try{for(var i=__values(n),a=i.next();!a.done;a=i.next()){var l=a.value;if("function"==typeof l){var u=l(e);if("boolean"!=typeof u)return u}}}catch(r){t={error:r}}finally{try{a&&!a.done&&(o=i.return)&&o.call(i)}finally{if(t)throw t.error}}return!0},r}();exports.Validator=Validator;