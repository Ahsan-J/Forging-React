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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("..");
var Icon_1 = __importDefault(require("../Icon"));
var Badge_style_1 = __importDefault(require("./Badge.style"));
var Badge = react_1.default.memo(function (props) {
    var styles = (0, Badge_style_1.default)();
    return (react_1.default.createElement("div", { className: "badge ".concat(props.rounded ? "rounded-pill" : "", " bg-").concat(props.type || "primary", " ").concat((0, __1.css)(styles.badge__container), " ").concat(props.className || ""), style: __assign({ cursor: props.onClick ? "pointer" : "default" }, props.style), onClick: props.onClick },
        react_1.default.createElement("span", null, props.text),
        props.onRemove ? (react_1.default.createElement(Icon_1.default, { name: "x", className: (0, __1.css)(styles.badge__closeBtn), onClick: props.onRemove }, "\u00D7")) : null));
});
exports.default = Badge;
