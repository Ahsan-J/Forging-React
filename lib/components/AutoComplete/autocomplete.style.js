"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var __1 = require("..");
var Dropdown_style_1 = __importDefault(require("../Dropdown/Dropdown.style"));
var input_style_1 = __importDefault(require("../Input/input.style"));
exports.default = (function (_a) {
    var _b = _a.errorText, errorText = _b === void 0 ? "" : _b, _c = _a.hasPlaceholder, hasPlaceholder = _c === void 0 ? false : _c;
    var dropdownStyle = (0, Dropdown_style_1.default)();
    var inputStyle = (0, input_style_1.default)({ errorText: errorText, hasPlaceholder: hasPlaceholder });
    var styles = (0, react_1.useMemo)(function () { return __1.StyleSheet.create({
        container: {
            position: 'relative',
            display: 'inline-block',
        },
        inputContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            border: "1px solid grey",
            flexWrap: 'wrap',
            width: "100%",
            marginTop: 20,
            "& > input": {
                marginTop: 0,
                border: 'none',
                width: "auto",
            }
        },
    }); }, []);
    return Object.assign(styles, inputStyle, dropdownStyle);
});
