"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
var react_1 = __importStar(require("react"));
var input_style_1 = __importDefault(require("./input.style"));
var __1 = require("..");
var Button_1 = __importDefault(require("../Button"));
var Input = react_1.default.forwardRef(function (props, ref) {
    var label = props.label, type = props.type, htmlType = props.htmlType, labelClass = props.labelClass, className = props.className, inputProps = __rest(props, ["label", "type", "htmlType", "labelClass", "className"]);
    var id = (0, react_1.useId)();
    var _a = __read((0, react_1.useState)(htmlType != "password"), 2), showSecureText = _a[0], setShowSecureText = _a[1];
    var _b = __read((0, react_1.useState)(""), 2), errorText = _b[0], setError = _b[1];
    var inputRef = (0, react_1.useRef)(null);
    var styles = (0, input_style_1.default)({ errorText: errorText, hasPlaceholder: !!inputProps.placeholder });
    (0, react_1.useEffect)(function () {
        if (props.error) {
            setError(props.error);
        }
    }, [props.error]);
    (0, react_1.useEffect)(function () {
        if (inputRef.current) {
            var el_1 = inputRef.current;
            var onFieldError_1 = function (e) { var _a; return setError((_a = e.detail) === null || _a === void 0 ? void 0 : _a.error); };
            var onChange_1 = function () { return setError(""); };
            el_1.addEventListener('input', onChange_1);
            el_1.addEventListener('field-error', onFieldError_1);
            return function () {
                el_1.removeEventListener('input', onChange_1);
                el_1.removeEventListener('field-error', onFieldError_1);
            };
        }
    }, []);
    (0, react_1.useImperativeHandle)(ref, function () { return Object.assign({
        setError: setError
    }, inputRef.current); }, []);
    if (type == "floating") {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("label", { className: "".concat((0, __1.css)(styles.floatInput__label), " ").concat(labelClass || ""), htmlFor: id },
                react_1.default.createElement("input", __assign({}, inputProps, { ref: inputRef, className: "".concat((0, __1.css)(styles.floatInput__input), " ").concat(className || ""), type: showSecureText && htmlType == "password" ? "text" : htmlType, id: id, "data-name": inputProps.name, placeholder: inputProps.placeholder || label })),
                react_1.default.createElement("span", null, label),
                htmlType == "password" && (react_1.default.createElement(Button_1.default, { iconName: !showSecureText ? "eye-slash-fill" : "eye-fill", onClick: function () { return setShowSecureText(function (c) { return !c; }); } }))),
            react_1.default.createElement("span", { className: "invalid-feedback", style: errorText ? { display: "block" } : undefined }, errorText)));
    }
    if (type == "floating-textarea") {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("label", { className: "".concat((0, __1.css)(styles.floatInput__label), " ").concat(labelClass || ""), htmlFor: id },
                react_1.default.createElement("textarea", __assign({}, inputProps, { ref: inputRef, className: "".concat((0, __1.css)(styles.floatInput__input), " ").concat(className || ""), id: id, "data-name": inputProps.name, placeholder: inputProps.placeholder || label })),
                react_1.default.createElement("span", null, label)),
            react_1.default.createElement("span", { className: "invalid-feedback", style: errorText ? { display: "block" } : undefined }, errorText)));
    }
    if (type == 'textarea') {
        return (react_1.default.createElement("div", null,
            label ? react_1.default.createElement("label", { htmlFor: id, className: "".concat(labelClass || "") }, label) : null,
            react_1.default.createElement("textarea", __assign({}, inputProps, { id: id, "data-name": inputProps.name, ref: inputRef, className: "".concat((0, __1.css)(styles.input__input), " ").concat(className || "") })),
            react_1.default.createElement("span", { className: "invalid-feedback", style: errorText ? { display: "block" } : undefined }, errorText)));
    }
    return (react_1.default.createElement("div", null,
        label ? react_1.default.createElement("label", { htmlFor: id, className: "".concat(labelClass || "") }, label) : null,
        react_1.default.createElement("input", __assign({}, inputProps, { id: id, "data-name": inputProps.name, ref: inputRef, type: showSecureText && htmlType == "password" ? "text" : htmlType, className: "".concat((0, __1.css)(styles.input__input), " ").concat(className || "") })),
        htmlType == "password" && (react_1.default.createElement(Button_1.default, { iconName: !showSecureText ? "eye-slash-fill" : "eye-fill", onClick: function () { return setShowSecureText(function (c) { return !c; }); } })),
        react_1.default.createElement("span", { className: "invalid-feedback", style: errorText ? { display: "block" } : undefined }, errorText)));
});
Input.defaultProps = {
    className: "",
    htmlType: "text",
    placeholder: "",
};
exports.default = Input;
