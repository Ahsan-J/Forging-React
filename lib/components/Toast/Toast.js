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
var react_dom_1 = __importDefault(require("react-dom"));
var __1 = require("..");
var aphrodite_1 = require("../../helpers/aphrodite");
var Toast_styles_1 = __importDefault(require("./Toast.styles"));
var Toast = react_1.default.forwardRef(function (props, ref) {
    var sectionWrapper = (0, react_1.useRef)(document.createElement('section')).current;
    var body = (0, react_1.useRef)(document.getElementsByTagName('body')[0]).current;
    var styles = (0, Toast_styles_1.default)(props);
    var bodyClass = (0, react_1.useRef)((0, aphrodite_1.css)(styles.body)).current;
    // const progressBarRef = useRef<HTMLDivElement>(null);
    (0, react_1.useEffect)(function () {
        if (props.show) {
            sectionWrapper.className = (0, aphrodite_1.css)(styles.sectionWrapper);
            sectionWrapper.setAttribute("data-test", "ToastSectionWrapper");
            body.className = "".concat(body.className, " ").concat(bodyClass).trim();
            body.appendChild(sectionWrapper);
        }
    }, [body, bodyClass, props.show, sectionWrapper, styles.sectionWrapper]);
    var onAnimationEnd = function () {
        if (!props.show) {
            body.className = body.className.replace(bodyClass, "");
            body.removeChild(sectionWrapper);
        }
        // if (props.show && props.autoDismissTimeout && props.autoDismissTimeout > 0 && progressBarRef.current && progressBarRef.current.children[0]) {
        //     (progressBarRef.current.children[0] as HTMLDivElement).ontransitionend = () => {
        //         if (props.onDismiss) props.onDismiss()
        //     };
        //     (progressBarRef.current.children[0] as HTMLDivElement).style.transition = `width ${(props.autoDismissTimeout || 1) / 1000}s`;
        //     (progressBarRef.current.children[0] as HTMLDivElement).style.width = "0";
        // }
    };
    return react_dom_1.default.createPortal((react_1.default.createElement("div", { "data-test": "ToastContainer", id: props.id, onAnimationEnd: onAnimationEnd, style: props.style, ref: ref, className: "toast ".concat((0, aphrodite_1.css)(styles.container), " ").concat(props.className || "").trim(), role: "alert", "aria-live": "assertive", "aria-atomic": "true" },
        props.title ? (react_1.default.createElement("div", { "data-test": "ToastHeader", className: "toast-header" },
            react_1.default.createElement("strong", { className: "mr-auto" }, props.title))) : null,
        props.onDismiss ? (react_1.default.createElement("button", { type: "button", "data-dismiss": "toast", "aria-label": "Close", onClick: props.onDismiss, className: (0, aphrodite_1.css)(styles.closeBtn) },
            react_1.default.createElement(__1.Icon, { name: "x", width: "1.5rem", height: "1.5rem" }))) : null,
        react_1.default.createElement("div", { "data-test": "ToastBody", className: "toast-body" }, props.children),
        props.onDismiss && props.autoDismissTimeout ? (react_1.default.createElement(__1.Progress, { "data-test": "ToastProgress", type: props.type, className: (0, aphrodite_1.css)(styles.progress) })) : null)), sectionWrapper);
});
Toast.defaultProps = {
    className: '',
    show: false,
    type: "primary",
    animationDirection: "top-right",
    autoDismissTimeout: 0,
};
exports.default = Toast;
