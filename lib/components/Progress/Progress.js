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
var Progress_styles_1 = __importDefault(require("./Progress.styles"));
var Progress = react_1.default.forwardRef(function (props, ref) {
    var styles = (0, Progress_styles_1.default)();
    var _a = __read((0, react_1.useState)(0), 2), progress = _a[0], setProgress = _a[1];
    (0, react_1.useImperativeHandle)(ref, function () { return ({ setProgress: setProgress }); }, []);
    (0, react_1.useEffect)(function () {
        if (props.progress && props.total) {
            setProgress(Math.ceil((props.progress / props.total) * 100));
        }
    }, [props.progress, props.total]);
    if (Math.floor(progress) == 0)
        return null;
    return (react_1.default.createElement("div", { "data-test": "Progress", className: "progress ".concat((0, aphrodite_1.css)(styles.container), " ").concat(props.className), style: props.style, id: props.id },
        react_1.default.createElement("div", { "data-test": "ProgressBar", className: "progress-bar ".concat(props.striped ? "progress-bar-striped" : "", " ").concat(props.animated ? "progress-bar-animated" : "", " ").concat(props.type ? "bg-".concat(props.type) : "").trim(), role: "progressbar", style: { width: "".concat(progress, "%") } })));
});
Progress.defaultProps = {
    className: '',
    type: "primary",
    animated: false,
    striped: false,
};
exports.default = Progress;
