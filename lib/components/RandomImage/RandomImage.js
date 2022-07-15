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
var randomimage_style_1 = __importDefault(require("./randomimage.style"));
var RandomImage = react_1.default.memo(function (props) {
    var styles = (0, randomimage_style_1.default)();
    var screenRef = (0, react_1.useRef)(null);
    var rects = (0, react_1.useRef)([]).current;
    var num = (0, react_1.useRef)(props.rectangleSize || 100);
    var newPos = function (rect) {
        rect.style.left = Math.floor(Math.random() * (40 - 20) + 20) + '%';
        rect.style.top = Math.floor(Math.random() * (40 - 20) + 20) + '%';
        rect.style.width = Math.floor(Math.random() * (100 - 20) + 20) + '%';
        rect.style.height = Math.floor(Math.random() * (100 - 20) + 20) + '%';
        rect.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        rect.style.transform = "rotate(" + Math.floor(Math.random() * 720) + 'deg) translateX(' + Math.floor(Math.random() * (100 - 0) + 0) + '%) translateY(' + Math.floor(Math.random() * (100 - 0) + 0) + '%)';
        rect.style.zIndex = "".concat(Math.random() * num.current);
        // borderRadius: Math.floor(Math.random() *50) + '%' 
    };
    var draw = function () {
        if (screenRef.current) {
            rects.forEach(function (rect) {
                newPos(rect);
            });
            screenRef.current.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        }
    };
    (0, react_1.useEffect)(function () {
        var _a;
        while (num.current - 1) {
            num.current = num.current - 1;
            var div = document.createElement('div');
            div.className = (0, __1.css)(styles.randomscreen__rect);
            (_a = screenRef.current) === null || _a === void 0 ? void 0 : _a.appendChild(div);
            rects.push(div);
            newPos(div);
        }
        draw();
    }, []);
    return (react_1.default.createElement("div", { ref: screenRef, className: "".concat((0, __1.css)(styles.randomscreen__container), " ").concat(props.className || ""), style: props.style }));
});
exports.default = RandomImage;
