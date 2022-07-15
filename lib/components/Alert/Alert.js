"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var __1 = require("..");
var aphrodite_1 = require("../../helpers/aphrodite");
var Alert_styles_1 = __importDefault(require("./Alert.styles"));
var iconMaps = {
    success: "check-circle",
    danger: "x-octagon",
    info: "info-circle",
    warning: "exclamation-triangle",
    dark: "info-circle",
    light: "info-circle",
    link: "info-circle",
    primary: "info-circle",
    secondary: "info-circle"
};
var Alert = react_1.default.forwardRef(function (props, ref) {
    // default props
    var _a = props.className, className = _a === void 0 ? "" : _a, _b = props.type, type = _b === void 0 ? "primary" : _b, _c = props.autoDismissTimeout, autoDismissTimeout = _c === void 0 ? 6000 : _c;
    var styles = (0, Alert_styles_1.default)({ autoDismissTimeout: autoDismissTimeout });
    var icon = (0, react_1.useMemo)(function () { return iconMaps[type || "primary"]; }, [type]);
    return (react_1.default.createElement("div", { "data-test": "AlertWrapper", ref: ref, id: props.id, style: props.style, onAnimationEnd: props.onDismiss, className: "alert ".concat(props.onDismiss ? "alert-dismissible" : "", " alert-").concat(type || "primary", " fade show ").concat((0, aphrodite_1.css)(styles.container), " ").concat(className || "").trim() },
        props.onDismiss ? react_1.default.createElement("button", { type: "button", className: "close", "data-dismiss": "alert", onClick: props.onDismiss }, "\u00D7") : null,
        react_1.default.createElement(__1.Icon, { "data-test": "AlertIcon", name: icon, height: 40, width: 40, className: (0, aphrodite_1.css)(styles.iconStyle) }),
        react_1.default.createElement("div", { "data-test": "AlertInnerContainer", className: (0, aphrodite_1.css)(styles.innerContainer) },
            react_1.default.createElement("h4", { "data-test": "AlertHeading", className: "alert-heading" }, props.title),
            props.children)));
});
exports.default = Alert;
