"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var aphrodite_1 = require("../../helpers/aphrodite");
exports.default = (function (_a) {
    var _b = _a.type, type = _b === void 0 ? "primary" : _b, _c = _a.hasChildren, hasChildren = _c === void 0 ? false : _c;
    return (0, react_1.useMemo)(function () {
        return aphrodite_1.StyleSheet.create({
            container: {
                display: 'flex',
                flexDirection: 'row',
                position: "relative",
                alignItems: 'center',
                justifyContent: 'center',
                border: "1px solid var(--bs-".concat(type, ")"),
            },
            loader: {
                background: "transparent",
                color: "var(--bs-body-color)",
                position: "absolute",
                margin: "auto",
                top: 0,
                bottom: 0,
            },
            icon: {
                marginRight: hasChildren ? "0.2rem" : undefined,
            }
        });
    }, [type, hasChildren]);
});
