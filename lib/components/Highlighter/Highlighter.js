"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("..");
var Highlighter_styles_1 = __importDefault(require("./Highlighter.styles"));
var Highlighter = react_1.default.memo(function (props) {
    var styles = (0, Highlighter_styles_1.default)();
    var highlight = function (text, search) { return text.replace(new RegExp(search, "ig"), function (s) { return "<span class=\"".concat((0, __1.css)(styles.highight), "\">").concat(s, "</span>"); }); };
    return react_1.default.createElement("span", { style: props.style, "data-test": "Highlighter", className: (0, __1.css)(styles.container), dangerouslySetInnerHTML: { __html: highlight(props.text, props.searchText) } });
});
exports.default = Highlighter;
