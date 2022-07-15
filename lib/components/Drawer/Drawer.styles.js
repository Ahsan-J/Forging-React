"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var aphrodite_1 = require("../../helpers/aphrodite");
exports.default = (function (props) {
    if (props === void 0) { props = {}; }
    return (0, react_1.useMemo)(function () {
        return aphrodite_1.StyleSheet.create({
            container: {
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                marginTop: 0,
                borderRadius: 0,
                maxWidth: "25rem",
                minWidth: "20rem",
                // "&button": {
                //     display:"none"
                // }
            },
            openButton: {}
        });
    }, [props]);
});
