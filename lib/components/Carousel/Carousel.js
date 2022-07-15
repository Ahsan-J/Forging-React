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
var aphrodite_1 = require("../../helpers/aphrodite");
var Carousel_styles_1 = __importDefault(require("./Carousel.styles"));
var Carousel = react_1.default.forwardRef(function (props, ref) {
    var _a = __read((0, react_1.useState)(0), 2), index = _a[0], setIndex = _a[1];
    var styles = (0, Carousel_styles_1.default)();
    return (react_1.default.createElement("div", { className: "".concat((0, aphrodite_1.css)(styles.container), " ").concat(props.className || ""), id: props.id, "data-test": "Carousel", style: props.style },
        react_1.default.createElement("div", { className: (0, aphrodite_1.css)(styles.carouselInner) },
            react_1.default.createElement("div", { className: (0, aphrodite_1.css)(styles.carouselItemContainer, styles.slideOut) },
                react_1.default.createElement("img", { src: "https://via.placeholder.com/500", alt: "https://via.placeholder.com/150" })),
            react_1.default.createElement("div", { className: (0, aphrodite_1.css)(styles.carouselItemContainer, styles.slideIn) },
                react_1.default.createElement("img", { src: "https://via.placeholder.com/500", alt: "https://via.placeholder.com/150" })))));
});
Carousel.defaultProps = {
    className: '',
};
exports.default = Carousel;
