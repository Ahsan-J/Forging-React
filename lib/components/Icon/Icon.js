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
var aphrodite_1 = require("../../helpers/aphrodite");
var Icon_styles_1 = __importDefault(require("./Icon.styles"));
var iconsets_1 = __importDefault(require("./iconsets"));
var Icon = react_1.default.memo(function (props) {
    // default Props
    var _a = props.className, className = _a === void 0 ? '' : _a, _b = props.name, name = _b === void 0 ? 'question' : _b;
    var styles = (0, Icon_styles_1.default)();
    var Comp = (0, react_1.useMemo)(function () { return iconsets_1.default[name || 'question'] || iconsets_1.default['question']; }, [name]);
    if (props.onClick) {
        return (react_1.default.createElement("button", { onClick: props.onClick, className: "".concat((0, aphrodite_1.css)(styles.buttonWrapper), " ").concat(className || ""), style: props.style },
            react_1.default.createElement(Comp, { width: props.width, height: props.height, fill: props.fill })));
    }
    return react_1.default.createElement(Comp, { width: props.width, height: props.height, style: props.style, className: className, fill: props.fill });
});
exports.default = Icon;
