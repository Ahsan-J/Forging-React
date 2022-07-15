"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var aphrodite_1 = require("../../helpers/aphrodite");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.default = (function () { return (0, react_1.useMemo)(function () {
    return aphrodite_1.StyleSheet.create({
        badge__container: {
            margin: "0.1rem",
            fontSize: ".875rem",
        },
        badge__closeBtn: {
            padding: "0",
            paddingLeft: "0.4rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
            cursor: "pointer",
            color: 'inherit',
        }
    });
}, []); });
