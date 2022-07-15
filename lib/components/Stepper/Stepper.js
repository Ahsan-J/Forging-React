"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Stepper_styles_1 = __importDefault(require("./Stepper.styles"));
var Stepper = react_1.default.forwardRef(function (props, ref) {
    var styles = (0, Stepper_styles_1.default)(props);
    return (react_1.default.createElement("div", null));
});
Stepper.defaultProps = {
    className: '',
};
exports.default = Stepper;
