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
var react_1 = __importStar(require("react"));
var __1 = require("..");
var aphrodite_1 = require("../../helpers/aphrodite");
var Button_styles_1 = __importDefault(require("./Button.styles"));
var Icon_1 = __importDefault(require("../Icon/Icon"));
var Button = react_1.default.forwardRef(function (props, ref) {
    var _a, _b, _c;
    var styles = (0, Button_styles_1.default)({ type: props.type, hasChildren: !!props.children });
    var btnRef = (0, react_1.useRef)(null);
    var _d = __read((0, react_1.useState)(false), 2), loader = _d[0], setLoader = _d[1];
    (0, react_1.useImperativeHandle)(ref, function () { return Object.assign({}, btnRef.current, {
        setLoader: setLoader,
        getProps: function () { return props; },
        isLoading: function () { return loader; }
    }); }, [loader, props]);
    var onClick = (0, react_1.useCallback)(function (event) {
        if (props.onClick && !props.disabled)
            props.onClick(event);
    }, [props]);
    return (react_1.default.createElement("button", { "data-test": "Button", id: props.id, ref: btnRef, type: props.htmlType || "button", className: "btn btn".concat(props.outline ? "-outline" : "", "-").concat(((_a = props.type) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || "primary", " ").concat(((_b = props.size) === null || _b === void 0 ? void 0 : _b.toLowerCase()) == "large" ? "btn-lg" : "", " ").concat(((_c = props.size) === null || _c === void 0 ? void 0 : _c.toLowerCase()) == "small" ? "btn-sm" : "", " ").concat(props.block ? "btn-block" : "", " ").concat((0, aphrodite_1.css)(styles.container), " ").concat(props.className || "", " ").concat(props.disabled ? "disabled" : "").trim(), onClick: onClick, style: props.style },
        react_1.default.createElement(__1.Spinner, { className: (0, aphrodite_1.css)(styles.loader), type: props.outline ? props.type : "dark", size: "small", loader: loader }),
        props.iconName && !loader ? react_1.default.createElement(Icon_1.default, { name: props.iconName, className: (0, aphrodite_1.css)(styles.icon) }) : null,
        props.children ? props.children : null));
});
Button.defaultProps = {
    className: '',
    outline: false,
    disabled: false,
    block: false,
    type: "primary",
    htmlType: "button",
    size: "normal",
};
exports.default = Button;
