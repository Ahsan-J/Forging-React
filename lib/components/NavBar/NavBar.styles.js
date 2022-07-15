"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var aphrodite_1 = require("../../helpers/aphrodite");
exports.default = (function (props) {
    if (props === void 0) { props = {}; }
    return (0, react_1.useMemo)(function () {
        return aphrodite_1.StyleSheet.create({
            container: {}
        });
    }, [props]);
});
