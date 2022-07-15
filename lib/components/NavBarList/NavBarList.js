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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var utility_1 = require("../../helpers/utility");
var NavBarList_styles_1 = __importDefault(require("./NavBarList.styles"));
var aphrodite_1 = require("../../helpers/aphrodite");
var Icon_1 = __importDefault(require("../Icon"));
var NavBarList = react_1.default.forwardRef(function (props, ref) {
    var styles = (0, NavBarList_styles_1.default)();
    var typeClass = (0, react_1.useMemo)(function () {
        switch (props.type) {
            case "NavBar":
                return "navbar-nav mr-auto";
            case "Tab":
                return "nav nav-tabs";
            default:
                return "";
        }
    }, [props.type]);
    var renderListItem = function (item) {
        var _a;
        var anchorClass = "nav-link";
        if (item.dropdownItems)
            anchorClass = anchorClass + " dropdown-toggle";
        if (props.active == item.title)
            anchorClass = anchorClass + " active";
        var onItemClose = function (event) {
            event.stopPropagation();
            if (props.onItemClose)
                props.onItemClose(item);
        };
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("a", { key: item.title, className: anchorClass.trim(), href: item.url, onClick: (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.bind(_this, item.title), role: "button", "aria-haspopup": "true", "aria-expanded": "false" },
                react_1.default.createElement("span", null, item.title),
                props.onItemClose ? (react_1.default.createElement(Icon_1.default, { name: "x-circle", onClick: onItemClose })) : null),
            item.dropdownItems ? (react_1.default.createElement("div", { key: item.title, className: "dropdown-menu" }, item.dropdownItems.map(function (dropdownItem, index) { return (react_1.default.createElement("a", { key: dropdownItem.id || index, className: "dropdown-item", href: dropdownItem.url }, dropdownItem.title)); }))) : null));
    };
    return (react_1.default.createElement("ul", { ref: ref, className: "".concat(typeClass, " ").concat(props.className || "") },
        props.data.map(function (item, index) {
            var _a;
            var liClass = "nav-item";
            if (item.dropdownItems)
                liClass = liClass + " dropdown";
            return (react_1.default.createElement("li", { key: (0, utility_1.toKebabCase)(((_a = item.id) === null || _a === void 0 ? void 0 : _a.toString()) || "") || index, className: liClass.trim() }, props.renderListItem ? props.renderListItem(item, index) : renderListItem(item)));
        }),
        props.onAddItem ? (react_1.default.createElement("li", { className: "nav-item" },
            react_1.default.createElement("button", { className: "nav-link ".concat((0, aphrodite_1.css)(styles.addButton)), onClick: props.onAddItem },
                react_1.default.createElement(Icon_1.default, { name: "plus-circle" })))) : null));
});
NavBarList.defaultProps = {
    className: '',
    type: "NavBar"
};
exports.default = NavBarList;
