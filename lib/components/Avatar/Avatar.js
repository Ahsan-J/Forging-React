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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var aphrodite_1 = require("../../helpers/aphrodite");
var Avatar_styles_1 = __importDefault(require("./Avatar.styles"));
var Avatar = react_1.default.memo(function (props) {
    var _a, _b, _c, _d;
    var styles = (0, Avatar_styles_1.default)();
    var backgroundColor = (0, react_2.useMemo)(function () {
        var stringToColour = function (str) {
            var hash = 0;
            for (var i = 0; i < str.length; i++) {
                hash = str.charCodeAt(i) + ((hash << 5) - hash);
            }
            var colour = "#";
            for (var i = 0; i < 3; i++) {
                var value = (hash >> (i * 8)) & 0xff;
                colour += ("00" + value.toString(16)).substr(-2);
            }
            colour += "8D";
            return colour;
        };
        return stringToColour(props.name || "");
    }, [props.name]);
    var name = (_d = (_c = (_b = (_a = (props.name || "")) === null || _a === void 0 ? void 0 : _a.split(" ")) === null || _b === void 0 ? void 0 : _b.slice(0, 2)) === null || _c === void 0 ? void 0 : _c.map(function (n) { return n[0]; })) === null || _d === void 0 ? void 0 : _d.join("");
    var renderContent = (0, react_2.useMemo)(function () {
        if (props.src) {
            return (react_1.default.createElement("img", { src: props.src, alt: "" }));
        }
        if (name) {
            return react_1.default.createElement("span", null, name);
        }
        return null;
    }, [name, props]);
    return (react_1.default.createElement("div", { "data-test": "Avatar", className: "".concat((0, aphrodite_1.css)(styles.container), " ").concat(props.className || ""), style: __assign({ backgroundColor: backgroundColor }, props.style) },
        renderContent,
        props.children));
});
exports.default = Avatar;
