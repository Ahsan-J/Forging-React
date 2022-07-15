"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
var react_1 = __importDefault(require("react"));
var utility_1 = require("../../helpers/utility");
var Pagination = react_1.default.memo(function (props) {
    // default Props 
    var _a = props.className, className = _a === void 0 ? '' : _a, _b = props.showNumberLength, showNumberLength = _b === void 0 ? 6 : _b;
    var getPageNumbers = function (total, current) {
        var startIndex = 1;
        var endIndex = Math.ceil(total);
        if (current - Math.ceil(showNumberLength / 2) >= 1) {
            startIndex = current - Math.ceil(showNumberLength / 2);
        }
        if (total - showNumberLength > 0 && startIndex > total - showNumberLength) { // limit not to exceed 
            startIndex = total - showNumberLength;
        }
        if (current <= (total - Math.ceil(showNumberLength / 2))) {
            endIndex = (startIndex + showNumberLength);
        }
        var array = (0, utility_1.range)(startIndex, endIndex + 1);
        if (startIndex > 1) {
            array.unshift("...");
            array.unshift(1);
        }
        if (endIndex < total) {
            array.push("...");
            array.push(total);
        }
        return array;
    };
    var onNextClick = function (e) {
        e.stopPropagation();
        if ((props.currentPage) <= Math.ceil(props.total)) {
            if (props.onNextClick)
                return props.onNextClick(props.currentPage + 1);
            props.onItemClick(props.currentPage + 1, e);
        }
    };
    var onPreviousClick = function (e) {
        e.stopPropagation();
        if ((props.currentPage - 1) > 0) {
            if (props.onPreviousClick)
                return props.onPreviousClick(props.currentPage - 1);
            props.onItemClick(props.currentPage - 1, e);
        }
    };
    return (react_1.default.createElement("ul", { className: "pagination ".concat(className), style: props.style },
        react_1.default.createElement("li", { className: "page-item" },
            react_1.default.createElement("button", { className: "page-link", onClick: onPreviousClick }, "\u00AB")),
        getPageNumbers(props.total, props.currentPage).map(function (index, i) {
            return (react_1.default.createElement("li", { key: typeof index == 'number' ? index : i, className: "page-item ".concat(index === props.currentPage ? "active" : "") },
                react_1.default.createElement("button", { onClick: typeof index === "number" ? props.onItemClick.bind(_this, index) : undefined, className: "page-link" }, index)));
        }),
        react_1.default.createElement("li", { className: "page-item" },
            react_1.default.createElement("button", { onClick: onNextClick, className: "page-link" }, "\u00BB"))));
});
exports.default = Pagination;
