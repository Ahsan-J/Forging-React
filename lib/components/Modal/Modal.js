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
/* eslint-disable no-unused-vars */
var react_1 = __importStar(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var __1 = require("..");
var aphrodite_1 = require("../../helpers/aphrodite");
var Modal_styles_1 = __importDefault(require("./Modal.styles"));
var Modal = react_1.default.forwardRef(function (props, ref) {
    var wrapper = props.wrapper, children = props.children, className = props.className;
    var _a = __read((0, react_1.useState)(!!props.show), 2), show = _a[0], showModal = _a[1];
    var styles = (0, Modal_styles_1.default)({ show: show, animationDirection: props.animationDirection });
    var el = (0, react_1.useRef)();
    (0, react_1.useImperativeHandle)(ref, function () {
        return {
            showModal: showModal,
        };
    }, []);
    (0, react_1.useEffect)(function () {
        showModal(!!props.show);
    }, [props.show]);
    var onBackdrop = (0, react_1.useCallback)(function (e) {
        e.stopPropagation();
        if (e.target === e.currentTarget) {
            showModal(false);
            if (props.onBackdrop)
                props.onBackdrop(e, ref);
        }
    }, [props, ref]);
    (0, react_1.useEffect)(function () {
        var _a, _b;
        var modalRoot = document.getElementsByTagName('body')[0];
        el.current = el.current || document.createElement(wrapper || "div");
        (_a = el.current) === null || _a === void 0 ? void 0 : _a.setAttribute("class", (0, aphrodite_1.css)(styles.backdropContainer, show ? styles.backdropShow : null));
        (_b = el.current) === null || _b === void 0 ? void 0 : _b.addEventListener("click", onBackdrop);
        if (show && el.current)
            modalRoot.appendChild(el.current);
        return function () {
            if (modalRoot.hasChildNodes() && el.current && modalRoot.contains(el.current))
                modalRoot.removeChild(el.current);
        };
    }, [show, wrapper, onBackdrop, styles]);
    var onAnimationEnd = function () {
        // if (!show && el.current) {
        //     const modalRoot = document.getElementsByTagName('body')[0];
        //     modalRoot.removeChild(el.current)
        // }
    };
    if (!show && props.showChildren)
        return (react_1.default.createElement(react_1.default.Fragment, null, children));
    if (!el.current || !show)
        return null;
    return react_dom_1.default.createPortal((react_1.default.createElement("div", { style: props.style, id: props.id, className: "".concat((0, aphrodite_1.css)(styles.modalInnerContainer), " ").concat(className || "").trim(), onAnimationEnd: onAnimationEnd },
        children,
        props.onDismiss ? (react_1.default.createElement(__1.Icon, { name: "x", width: "1.8rem", height: "1.8rem", onClick: props.onDismiss, style: styles.buttonDismiss })) : null)), el.current);
});
Modal.defaultProps = {
    className: "",
    showChildren: false,
    animationDirection: "top"
};
exports.default = Modal;
