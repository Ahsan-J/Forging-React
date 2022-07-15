"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var aphrodite_1 = require("../../helpers/aphrodite");
exports.default = (function (props) {
    if (props === void 0) { props = {}; }
    return (0, react_1.useMemo)(function () {
        return aphrodite_1.StyleSheet.create({
            "randomscreen__container": {
                width: "100%",
                height: "100%",
                position: "absolute",
                overflow: "hidden",
                transition: "0.5s",
            },
            "randomscreen__rect": {
                position: "absolute",
                transition: "0.5s",
                opacity: 0.5,
            }
        });
    }, []);
});
