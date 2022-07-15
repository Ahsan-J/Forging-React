"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var aphrodite_1 = require("../../helpers/aphrodite");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.default = (function (props) {
    if (props === void 0) { props = {}; }
    return (0, react_1.useMemo)(function () {
        var spin = {
            "0%": {
                transform: "rotate(0deg)",
            },
            "100%": {
                transform: "rotate(360deg)",
            },
        };
        var size = 2;
        if (props.size == "small")
            size = 1;
        if (props.size == "large")
            size = 3;
        return aphrodite_1.StyleSheet.create({
            loader: {
                borderRadius: "".concat(size, "rem"),
                border: "".concat(size / 10, "rem solid var(--bs-light)"),
                borderTop: "".concat(size / 10, "rem solid var(--bs-").concat(props.type, ")"),
                width: "".concat(size, "rem"),
                height: "".concat(size, "rem"),
                alignSelf: "center",
                zIndex: 12,
                animationName: [spin],
                animationDuration: "".concat(props.spinDuration, "ms"),
                animationPlayState: "running",
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
            },
        });
    }, [props]);
});
