"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
var react_1 = __importStar(require("react"));
var autocomplete_style_1 = __importDefault(require("./autocomplete.style"));
var __1 = require("..");
var Icon_1 = __importDefault(require("../Icon"));
var Badge_1 = __importDefault(require("../Badge"));
var Highlighter_1 = __importDefault(require("../Highlighter"));
var AutoComplete = react_1.default.memo(function (props) {
    var _a = __read((0, react_1.useState)(false), 2), showClass = _a[0], setShowClass = _a[1];
    var _b = __read((0, react_1.useState)(""), 2), searchText = _b[0], setSearchText = _b[1];
    var label = props.label, onItemClick = props.onItemClick, options = props.options, renderDropdownItem = props.renderDropdownItem, className = props.className, _c = props.multiple, multiple = _c === void 0 ? true : _c, placeholder = props.placeholder;
    var _d = __read((0, react_1.useState)(), 2), selectedItems = _d[0], setSelectedItems = _d[1];
    var _e = __read((0, react_1.useState)(""), 2), errorText = _e[0], setError = _e[1];
    var styles = (0, autocomplete_style_1.default)({ errorText: errorText, hasPlaceholder: !!placeholder });
    var inputRef = (0, react_1.useRef)(null);
    var mainContaier = (0, react_1.useRef)(null);
    var id = (0, react_1.useId)();
    var selectedKeys = (0, react_1.useMemo)(function () { return Object.keys(selectedItems || {}); }, [selectedItems]);
    var onDropdownItemClick = (0, react_1.useCallback)(function (key, e) {
        var _a;
        e.stopPropagation();
        if (inputRef.current)
            inputRef.current.value = "";
        if (key && (options === null || options === void 0 ? void 0 : options[key])) {
            if (multiple) {
                setSelectedItems(function (s) {
                    var _a;
                    return (__assign(__assign({}, s), (_a = {}, _a[key] = options === null || options === void 0 ? void 0 : options[key], _a)));
                });
            }
            else {
                setSelectedItems((_a = {}, _a[key] = options === null || options === void 0 ? void 0 : options[key], _a));
            }
        }
        if (onItemClick && (options === null || options === void 0 ? void 0 : options[key]))
            onItemClick(key, options === null || options === void 0 ? void 0 : options[key]);
        setShowClass(false);
        setError("");
    }, [onItemClick, options, multiple]);
    var onFocus = function (e) {
        e.stopPropagation();
        setShowClass(true);
        if (props.onFocus)
            props.onFocus(e);
    };
    (0, react_1.useEffect)(function () {
        var onClickOutside = function (e) {
            var _a;
            if (e.target instanceof HTMLElement && !((_a = mainContaier.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {
                setShowClass(false);
                if (inputRef.current)
                    inputRef.current.value = "";
            }
        };
        document.addEventListener("click", onClickOutside);
        return function () {
            document.removeEventListener("click", onClickOutside);
        };
    }, []);
    var onChange = function (e) {
        e.stopPropagation();
        setSearchText(e.target.value);
        setError("");
        if (props.onChange)
            props.onChange(e);
    };
    var renderSelectedItems = (0, react_1.useMemo)(function () {
        var onRemoveBadge = function (key) {
            var t = Object.assign({}, selectedItems);
            delete t[key];
            setSelectedItems(t);
        };
        return selectedKeys.map(function (key) {
            var value = selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems[key];
            return react_1.default.createElement(Badge_1.default, { className: props.badgeClass, type: props.type, onRemove: onRemoveBadge.bind(_this, key), text: (value === null || value === void 0 ? void 0 : value.label) || "", key: key });
        });
    }, [selectedItems, selectedKeys, props.type, props.badgeClass]);
    var renderOptions = (0, react_1.useMemo)(function () {
        var onFilterItems = function (key) {
            var _a, _b;
            var value = options === null || options === void 0 ? void 0 : options[key];
            return (!selectedKeys.includes(key) &&
                ((_b = (_a = value === null || value === void 0 ? void 0 : value.label) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes(searchText.toLowerCase())));
        };
        return Object.keys(options || {}).filter(onFilterItems).map(function (key) {
            var value = options === null || options === void 0 ? void 0 : options[key];
            if (renderDropdownItem && value)
                return renderDropdownItem(value, key);
            return (react_1.default.createElement("li", { key: key, onClick: onDropdownItemClick.bind(_this, key) },
                (value === null || value === void 0 ? void 0 : value.icon) ? react_1.default.createElement(Icon_1.default, { name: value.icon }) : null,
                react_1.default.createElement(Highlighter_1.default, { color: props.highlightColor, text: (value === null || value === void 0 ? void 0 : value.label) || "", searchText: searchText })));
        });
    }, [onDropdownItemClick, selectedKeys, options, renderDropdownItem, searchText, props.highlightColor]);
    (0, react_1.useEffect)(function () {
        if (mainContaier.current) {
            var el_1 = mainContaier.current;
            var onFieldError_1 = function (e) { var _a; return setError((_a = e.detail) === null || _a === void 0 ? void 0 : _a.error); };
            el_1.addEventListener('field-error', onFieldError_1);
            return function () {
                el_1.removeEventListener('field-error', onFieldError_1);
            };
        }
    }, []);
    return (react_1.default.createElement("div", { ref: mainContaier, "data-name": "".concat(props.name).concat(multiple ? "[]" : ""), className: "".concat((0, __1.css)(styles.container), " ").concat(className || "") },
        props.name && selectedKeys.length ? selectedKeys.map(function (key) { return (react_1.default.createElement("input", { readOnly: true, key: key, value: key, type: "hidden", name: "".concat(props.name).concat(multiple ? "[]" : "") })); }) : null,
        react_1.default.createElement("label", { className: (0, __1.css)(styles.floatInput__label), htmlFor: id },
            react_1.default.createElement("div", { style: errorText ? { borderColor: 'var(--bs-danger)' } : undefined, className: (0, __1.css)(styles.inputContainer) },
                renderSelectedItems,
                react_1.default.createElement("span", { style: selectedKeys.length ? {
                        transform: "translate(0)",
                        padding: 0
                    } : undefined }, label),
                react_1.default.createElement("input", { onChange: onChange, onFocus: onFocus, ref: inputRef, className: "".concat((0, __1.css)(styles.floatInput__input), " ").concat(className || ""), id: id, placeholder: placeholder || label }))),
        react_1.default.createElement("span", { className: "invalid-feedback", style: errorText ? { display: "block" } : undefined }, errorText),
        react_1.default.createElement("ul", { className: (0, __1.css)(styles['dropdown-content'], showClass ? styles.show : undefined) }, renderOptions)));
});
exports.default = AutoComplete;
