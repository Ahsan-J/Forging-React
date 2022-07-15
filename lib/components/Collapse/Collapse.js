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
var Collapse_styles_1 = __importDefault(require("./Collapse.styles"));
var aphrodite_1 = require("../../helpers/aphrodite");
var Collapse = react_1.default.forwardRef(function (props, ref) {
    var contentRef = (0, react_1.useRef)(null);
    var _a = __read((0, react_1.useState)(props.collapse || false), 2), collapse = _a[0], setCollapse = _a[1];
    var id = (0, react_1.useId)();
    var TitleComponent = props.title;
    var styles = (0, Collapse_styles_1.default)();
    (0, react_1.useImperativeHandle)(ref, function () {
        return {
            collapse: setCollapse,
        };
    });
    (0, react_1.useEffect)(function () {
        setCollapse(!!props.collapse);
    }, [props.collapse]);
    (0, react_1.useLayoutEffect)(function () {
        if (!contentRef.current)
            return;
        if (!collapse) {
            contentRef.current.style.maxHeight = "";
        }
        else {
            contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
        }
    }, [collapse]);
    var renderTitle = (0, react_1.useMemo)(function () {
        if (typeof TitleComponent == "function")
            return react_1.default.createElement(TitleComponent, null);
        return TitleComponent;
    }, [TitleComponent]);
    var onClick = function (e) {
        e.stopPropagation();
        setCollapse(function (c) { return !c; });
    };
    return (react_1.default.createElement("div", { id: id, className: props.className, style: props.style },
        react_1.default.createElement("button", { onClick: onClick, className: "".concat((0, aphrodite_1.css)(styles.collapsible), " lead ").concat(collapse ? "active" : "") }, renderTitle),
        react_1.default.createElement("div", { ref: contentRef, className: (0, aphrodite_1.css)(styles.content) }, props.children)));
});
exports.default = Collapse;
