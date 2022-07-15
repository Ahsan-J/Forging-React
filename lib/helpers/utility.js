"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSnakeCase = exports.toKebabCase = exports.isBrowser = exports.unmarshalFormData = exports.triggerFormError = exports.range = exports.chunkArray = void 0;
var chunkArray = function (arr, size) {
    if (arr === void 0) { arr = []; }
    if (size === void 0) { size = 10; }
    var temporary = [];
    for (var i = 0, j = arr.length; i < j; i += size) {
        temporary.push(arr.slice(i, i + size));
    }
    return temporary;
};
exports.chunkArray = chunkArray;
var range = function (startIndex, lastIndex, step) {
    if (startIndex === void 0) { startIndex = 0; }
    if (lastIndex === void 0) { lastIndex = 0; }
    if (step === void 0) { step = 1; }
    if (typeof startIndex !== 'number' || startIndex < 0)
        return [];
    var arr = new Array(lastIndex && lastIndex > startIndex ? lastIndex : startIndex).fill(0).map(function (_, i) { return i * step; });
    if (startIndex && lastIndex) {
        return arr.filter(function (i) { return i >= startIndex; });
    }
    return arr;
};
exports.range = range;
var triggerFormError = function (form, fields) {
    if (form) {
        Object.keys(fields).forEach(function (key) {
            var _a;
            var message = fields[key];
            var errorEvent = new CustomEvent('field-error', { detail: { error: message } });
            (_a = form.querySelector("[data-name=".concat(key, "]"))) === null || _a === void 0 ? void 0 : _a.dispatchEvent(errorEvent);
        });
    }
};
exports.triggerFormError = triggerFormError;
var unmarshalFormData = function (formData) {
    var e_1, _a, _b;
    var obj = {};
    try {
        // eslint-disable-next-line prefer-const
        for (var _c = __values(formData.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var _e = __read(_d.value, 2), key = _e[0], value = _e[1];
            if (/^[0-9]+$/.test("".concat(value === null || value === void 0 ? void 0 : value.toString())))
                value = parseInt(value === null || value === void 0 ? void 0 : value.toString(), 10);
            var match = /\[(.*)\]/.exec(key);
            if (match) {
                var _f = __read(match, 2), nestedKey = _f[0], capturedNestedKey = _f[1];
                var parentKey = key.replace(nestedKey, "");
                if (obj[parentKey]) {
                    if (Array.isArray(obj[parentKey])) {
                        obj[parentKey].push(value);
                    }
                    else if (capturedNestedKey && !Array.isArray(obj[parentKey]) && typeof obj[parentKey] == "object") {
                        obj[parentKey][capturedNestedKey] = value;
                    }
                }
                else {
                    if (!capturedNestedKey || /^[0-9]+$/.test(capturedNestedKey)) {
                        obj[parentKey] = [value];
                    }
                    else {
                        obj[parentKey] = (_b = {}, _b[capturedNestedKey] = value, _b);
                    }
                }
            }
            else {
                obj[key] = value;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return obj;
};
exports.unmarshalFormData = unmarshalFormData;
var isBrowser = function () { return typeof window !== 'undefined' && window.document !== undefined; };
exports.isBrowser = isBrowser;
var toKebabCase = function (s) { var _a; return (_a = s.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)) === null || _a === void 0 ? void 0 : _a.map(function (x) { return x.toLowerCase(); }).join('-'); };
exports.toKebabCase = toKebabCase;
var toSnakeCase = function (s) { var _a; return (_a = s.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)) === null || _a === void 0 ? void 0 : _a.map(function (x) { return x.toLowerCase(); }).join('_'); };
exports.toSnakeCase = toSnakeCase;
