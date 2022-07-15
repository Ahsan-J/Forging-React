"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var aphrodite_1 = require("../../helpers/aphrodite");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.default = (function () { return (0, react_1.useMemo)(function () {
    return aphrodite_1.StyleSheet.create({
        container: {
            position: 'relative',
        },
        fileItem: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            border: "1px solid var(--bs-light)",
            padding: "0.5rem",
            margin: "0.2rem",
            "& svg": {
                margin: "0.2rem",
            }
        },
    });
}, []); });
