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
var aphrodite_1 = require("../../helpers/aphrodite");
var NavBar_styles_1 = __importDefault(require("./NavBar.styles"));
var sizeMaps = {
    "small": "sm",
    "medium": "md",
    "large": "lg",
    "x-large": "xl",
    "xx-large": "xxl"
};
var NavBar = react_1.default.forwardRef(function (props, ref) {
    var styles = (0, NavBar_styles_1.default)(props);
    var navBarColor = (0, react_1.useMemo)(function () { return props.type ? "bg-".concat(props.type) : ""; }, [props.type]);
    var navBarSize = (0, react_1.useMemo)(function () { return sizeMaps[props.size || "large"]; }, [props.size]);
    var navBarFix = (0, react_1.useMemo)(function () { return props.fixed ? "fixed-".concat(props.fixed) : ""; }, [props.fixed]);
    if (!props.id) {
        return null;
    }
    return (react_1.default.createElement("nav", { "data-test": "NavBarWrapper", ref: ref, className: "navbar navbar-expand-".concat(navBarSize, " ").concat(navBarFix, " navbar-").concat(props.theme, " ").concat(navBarColor, " ").concat((0, aphrodite_1.css)(styles.container), " ").concat(props.className || "").trim(), style: props.style },
        react_1.default.createElement("button", { "data-test": "NavBarMobileButton", className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#".concat(props.id), "aria-controls": "navbar", "aria-expanded": "false", "aria-label": "Toggle navigation" },
            react_1.default.createElement("span", { "data-test": "NavBarMobileButtonIcon", className: "navbar-toggler-icon" })),
        react_1.default.createElement("div", { "data-test": "NavBarCollapseContainer", className: "collapse navbar-collapse", id: props.id }, props.children)));
});
NavBar.defaultProps = {
    className: '',
    id: "navbar",
    type: "primary",
    theme: "light"
};
exports.default = NavBar;
