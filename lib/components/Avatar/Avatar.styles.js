"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var aphrodite_1 = require("../../helpers/aphrodite");
exports.default = (function () { return (0, react_1.useMemo)(function () {
    return aphrodite_1.StyleSheet.create({
        container: {
            borderRadius: "2.5rem",
            position: 'relative',
            height: "2.5rem",
            width: "2.5rem",
            backgroundColor: "var(--bs-gray)",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            "& > img": {
                width: "inherit",
                height: "inherit",
                objectFit: "cover",
                borderRadius: "inherit",
            },
            "& > span": {
                color: "var(--bs-body-color)",
                fontWeight: "700",
            },
        },
    });
}, []); });
