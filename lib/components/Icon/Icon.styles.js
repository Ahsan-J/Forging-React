"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var aphrodite_1 = require("../../helpers/aphrodite");
exports.default = (function (state) {
    if (state === void 0) { state = {}; }
    return (0, react_1.useMemo)(function () {
        return aphrodite_1.StyleSheet.create({
            buttonWrapper: {
                backgroundColor: "transparent",
                borderWidth: 0,
                ':focus': {
                    outline: "none",
                },
            }
        });
    }, [state]);
});
