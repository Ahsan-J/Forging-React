"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var aphrodite_1 = require("../../helpers/aphrodite");
exports.default = (function () { return (0, react_1.useMemo)(function () {
    return aphrodite_1.StyleSheet.create({
        collapsible: {
            /* background-color: var(--bs-body-bg);
            color: var(--bs-body-color); */
            cursor: "pointer",
            padding: "0.8rem",
            width: "100%",
            border: "none",
            borderBottom: "1px solid var(--bs-light)",
            textAlign: "left",
            outline: 'none',
        },
        active: {
            color: "var(--bs-primary)",
            backgroundColor: "var(--bs-gray-200)",
        },
        content: {
            padding: "0 0.8rem",
            maxHeight: 0,
            overflow: "hidden",
            transition: "max-height 0.2s ease-out",
        }
    });
}, []); });
