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
var __1 = require("..");
var Button_1 = __importDefault(require("../Button"));
var Icon_1 = __importDefault(require("../Icon"));
var Dropdown_style_1 = __importDefault(require("./Dropdown.style"));
var Dropdown = react_1.default.forwardRef(function (props, ref) {
    var _a = __read((0, react_1.useState)(false), 2), showClass = _a[0], setShowClass = _a[1];
    var _b = __read((0, react_1.useState)(props.defaultKey), 2), selectedKey = _b[0], setSelectedKey = _b[1];
    var _c = __read((0, react_1.useState)(""), 2), errorText = _c[0], setError = _c[1];
    var dropdownRef = (0, react_1.useRef)(null);
    var styles = (0, Dropdown_style_1.default)();
    (0, react_1.useImperativeHandle)(ref, function () {
        return {
            set value(v) {
                if (props.options[v]) {
                    setSelectedKey("".concat(v || ""));
                }
            },
            get value() {
                return selectedKey || "";
            },
        };
    }, [selectedKey, props.options]);
    var toggleClass = (0, react_1.useCallback)(function (e) {
        e.stopPropagation();
        setShowClass(function (s) { return !s; });
    }, []);
    var onItemClick = (0, react_1.useCallback)(function (e) {
        var _a;
        e.stopPropagation();
        if (e.target instanceof HTMLLIElement) {
            var key = ((_a = e.target.dataset) === null || _a === void 0 ? void 0 : _a.value) || "";
            if (props.onItemClick)
                props.onItemClick(key, props.options[key]);
            setSelectedKey(key);
            setError("");
            setShowClass(false);
        }
    }, [props]);
    (0, react_1.useEffect)(function () {
        var onClickOutside = function (e) {
            var _a;
            if (e.target instanceof HTMLElement && !((_a = dropdownRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {
                setShowClass(false);
            }
        };
        document.addEventListener("click", onClickOutside);
        return function () {
            document.removeEventListener("click", onClickOutside);
        };
    }, []);
    (0, react_1.useEffect)(function () {
        if (dropdownRef.current) {
            var el_1 = dropdownRef.current;
            var onFieldError_1 = function (e) { var _a; return setError((_a = e.detail) === null || _a === void 0 ? void 0 : _a.error); };
            el_1.addEventListener('field-error', onFieldError_1);
            return function () {
                el_1.removeEventListener('field-error', onFieldError_1);
            };
        }
    }, [props.name, selectedKey]);
    var renderSelectedItem = (0, react_1.useMemo)(function () {
        var _a, _b, _c;
        if (props.renderSelectedValue) {
            return props.renderSelectedValue((_a = props.options) === null || _a === void 0 ? void 0 : _a[selectedKey || ""]);
        }
        return ((_c = (_b = props.options) === null || _b === void 0 ? void 0 : _b[selectedKey || ""]) === null || _c === void 0 ? void 0 : _c.label) || props.placeholder || "";
    }, [props, selectedKey]);
    var renderOptiosn = (0, react_1.useMemo)(function () {
        return Object.keys(props.options).map(function (key) {
            var value = props.options[key];
            if (props.renderItem) {
                return props.renderItem(value, key);
            }
            return (react_1.default.createElement("li", { key: key, "data-value": key },
                value.icon ? react_1.default.createElement(Icon_1.default, { name: value.icon }) : null,
                value.label));
        });
    }, [props]);
    if (Object.keys(props.options).length == 0) {
        return null;
    }
    return (react_1.default.createElement("div", { ref: dropdownRef, "data-name": props.name, className: "".concat((0, __1.css)(styles.dropdown), " ").concat(props.className || ""), style: props.style },
        props.label ? react_1.default.createElement("span", null, props.label) : null,
        props.name && selectedKey ? (react_1.default.createElement("input", { readOnly: true, name: props.name, type: "hidden", value: selectedKey })) : null,
        react_1.default.createElement(Button_1.default, { style: errorText ? { borderColor: 'var(--bs-danger)' } : undefined, outline: props.outline, disabled: props.disabled, type: props.type, iconName: props.iconName, onClick: toggleClass }, renderSelectedItem),
        react_1.default.createElement("ul", { className: (0, __1.css)(styles["dropdown-content"], showClass ? styles.show : undefined), onClick: onItemClick }, renderOptiosn),
        react_1.default.createElement("span", { className: "invalid-feedback", style: errorText ? { display: "block" } : undefined }, errorText)));
});
Dropdown.defaultProps = {
    options: {},
    className: "",
};
exports.default = Dropdown;
