"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var aphrodite_1 = require("../../helpers/aphrodite");
exports.default = (function (state) {
    if (state === void 0) { state = {}; }
    return (0, react_1.useMemo)(function () {
        return aphrodite_1.StyleSheet.create({
            closeButton: {
                borderWidth: 0,
                backgroundColor: 'transparent',
                ':focus': {
                    outline: 'none'
                }
            },
            addButton: {
                borderTopLeftRadius: "0.75rem",
                borderTopRightRadius: "0.75rem",
                padding: "0.5rem 0.75rem",
            }
        });
    }, [state]);
});
