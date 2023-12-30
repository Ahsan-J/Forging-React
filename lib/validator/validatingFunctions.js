"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isMemberOf=exports.isRequired=exports.isArray=exports.isBlob=exports.isBoolean=exports.isEqual=exports.isMatchingRegex=exports.isAlphabet=exports.isUpperCase=exports.isLowerCase=exports.isNumeric=exports.isAlphaNumeric=exports.isMin=exports.isMax=exports.isEmpty=exports.isString=exports.isEmail=void 0;var regex_1=require("../helpers/regex"),utility_1=require("../helpers/utility");function isEmail(r){return function(e){return!("string"!=typeof e||!regex_1.emailRegex.test(e))||(null!=r?r:"")}}function isString(r){return function(e){return"string"==typeof e||(null!=r?r:"")}}function isEmpty(r){return function(e){return""===e||(null!=r?r:"")}}function isMax(n,i){return function(e,r){var t=parseInt("".concat(n).replaceAll(",",""),10),r=(r&&"object"==typeof r&&n in r&&regex_1.numberRegex.test("".concat(r[n]))&&(t=parseInt("".concat(r[n]),10)),regex_1.numberRegex.test("".concat(e).replaceAll(",","")));return!!(r&&parseFloat("".concat(e).replaceAll(",",""))<=t)||!!((Array.isArray(e)||"string"==typeof e&&!r)&&e.length<=t)||(null!=i?i:"")}}function isMin(n,i){return function(e,r){var t=parseInt("".concat(n).replaceAll(",",""),10),r=(null!=r&&r[n]&&regex_1.numberRegex.test("".concat(r[n]))&&(t=parseInt("".concat(r[n]),10)),regex_1.numberRegex.test("".concat(e).replaceAll(",","")));return!!(r&&parseFloat("".concat(e).replaceAll(",",""))>=t)||!!((Array.isArray(e)||"string"==typeof e&&!r)&&e.length>=t)||(null!=i?i:"")}}function isAlphaNumeric(r){return function(e){return!("string"!=typeof e&&("number"!=typeof e||isNaN(e))||!regex_1.alphaNumRegex.test("".concat(e)))||(null!=r?r:"")}}function isNumeric(r){return function(e){return!(("number"!=typeof e||isNaN(e))&&!regex_1.numberRegex.test("".concat(e).replaceAll(",","")))||(null!=r?r:"")}}function isLowerCase(r,t){return void 0===t&&(t=0),function(e){return"string"==typeof e&&(t||e.toLowerCase()==e)&&(e=e.match(/[a-z]/g),!(0<t&&e&&e.length<t))||(null!=r?r:"")}}function isUpperCase(r,t){return void 0===t&&(t=0),function(e){return"string"==typeof e&&(t||e.toUpperCase()==e)&&(e=e.match(/[A-Z]/g),!(0<t&&e&&e.length<t))||(null!=r?r:"")}}function isAlphabet(r){return function(e){return!("string"!=typeof e||!regex_1.alphabetRegex.test(e))||(null!=r?r:"")}}function isMatchingRegex(r,t){return function(e){return!!r.test("".concat(e))||(null!=t?t:"")}}function isEqual(r,t){return function(e){return!!(0,utility_1.deepEquals)(e,r)||(null!=t?t:"")}}function isBoolean(r){return function(e){return"boolean"==typeof e||(null!=r?r:"")}}function isBlob(r){return function(e){return!(0,utility_1.isBrowser)()||e instanceof File||e instanceof Blob||(null!=r?r:"")}}function isArray(r){return function(e){return!!Array.isArray(e)||(null!=r?r:"")}}function isRequired(r){return function(e){return!!e||(null!=r?r:"")}}function isMemberOf(e,r){var t=e.map(function(e){return regex_1.numberRegex.test("".concat(e))?parseInt("".concat(e),10):e});return function(e){return!!t.includes(e)||(null!=r?r:"")}}exports.isEmail=isEmail,exports.isString=isString,exports.isEmpty=isEmpty,exports.isMax=isMax,exports.isMin=isMin,exports.isAlphaNumeric=isAlphaNumeric,exports.isNumeric=isNumeric,exports.isLowerCase=isLowerCase,exports.isUpperCase=isUpperCase,exports.isAlphabet=isAlphabet,exports.isMatchingRegex=isMatchingRegex,exports.isEqual=isEqual,exports.isBoolean=isBoolean,exports.isBlob=isBlob,exports.isArray=isArray,exports.isRequired=isRequired,exports.isMemberOf=isMemberOf;