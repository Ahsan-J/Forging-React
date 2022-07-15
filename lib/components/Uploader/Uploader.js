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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
var react_1 = __importStar(require("react"));
var aphrodite_1 = require("../../helpers/aphrodite");
var Button_1 = __importDefault(require("../Button"));
var Icon_1 = __importDefault(require("../Icon"));
var Uploader_styles_1 = __importDefault(require("./Uploader.styles"));
var iconType_1 = __importDefault(require("./iconType"));
var Uploader = react_1.default.memo(function (props) {
    var _a;
    var styles = (0, Uploader_styles_1.default)();
    var _b = __read((0, react_1.useState)(props.files || []), 2), files = _b[0], setFiles = _b[1];
    var _c = __read((0, react_1.useState)(""), 2), errorText = _c[0], setError = _c[1];
    var inputRef = (0, react_1.useRef)(null);
    var onChange = function (e) {
        var _a, _b;
        var t = Object.assign([], files);
        var _loop_1 = function (i) {
            var f = (_b = e.target.files) === null || _b === void 0 ? void 0 : _b.item(i);
            if (f && !t.some(function (e) { return e.name === f.name; }))
                t.push(f);
        };
        for (var i = 0; i < (((_a = e.target.files) === null || _a === void 0 ? void 0 : _a.length) || 0); i++) {
            _loop_1(i);
        }
        if (props.onChange)
            props.onChange(t);
        setError("");
        setFiles(t);
    };
    var onRemoveFile = function (file) { return setFiles(function (files) { return files.filter(function (f) { return f.name != file.name; }); }); };
    var onBtnClick = function () { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.click(); };
    var renderFiles = (0, react_1.useMemo)(function () {
        return files.map(function (file) {
            return (react_1.default.createElement("div", { className: (0, aphrodite_1.css)(styles.fileItem), key: file.name },
                react_1.default.createElement(Icon_1.default, { height: "1.5rem", width: "1.5rem", name: iconType_1.default[file.type] || 'paperclip' }),
                react_1.default.createElement("span", { className: 'lead', style: { flex: 1 } }, file.name),
                react_1.default.createElement(Icon_1.default, { height: "1.5rem", width: "1.5rem", name: "trash", fill: 'var(--bs-danger)', onClick: onRemoveFile.bind(_this, file) })));
        });
    }, [files, styles]);
    (0, react_1.useEffect)(function () {
        var e_1, _a;
        if (inputRef.current) {
            var dt = new DataTransfer();
            try {
                for (var files_1 = __values(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                    var file = files_1_1.value;
                    dt.items.add(file);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            inputRef.current.files = dt.files;
        }
    }, [files]);
    (0, react_1.useEffect)(function () {
        var _a;
        if (props.files && ((_a = props.files) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            setFiles(props.files);
        }
    }, [props.files]);
    (0, react_1.useEffect)(function () {
        if (inputRef.current) {
            var el_1 = inputRef.current;
            var onFieldError_1 = function (e) { var _a; return setError((_a = e.detail) === null || _a === void 0 ? void 0 : _a.error); };
            el_1.addEventListener('field-error', onFieldError_1);
            return function () {
                el_1.removeEventListener('field-error', onFieldError_1);
            };
        }
    }, []);
    return (react_1.default.createElement("div", { style: props.style, id: props.id, className: "".concat((0, aphrodite_1.css)(styles.container), " ").concat(props.className || "") },
        react_1.default.createElement("input", { "data-name": props.name, accept: (_a = props.accept) === null || _a === void 0 ? void 0 : _a.join(","), name: props.name, style: { display: 'none' }, ref: inputRef, type: "file", multiple: props.multiple, onChange: onChange }),
        react_1.default.createElement(Button_1.default, { iconName: props.iconName || 'upload', type: props.type || 'light', onClick: onBtnClick }, props.title || "Upload"),
        react_1.default.createElement("span", { className: "invalid-feedback", style: errorText ? { display: "block" } : undefined }, errorText),
        props.children ? props.children : renderFiles));
});
exports.default = Uploader;
