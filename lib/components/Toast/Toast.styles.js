"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var aphrodite_1 = require("../../helpers/aphrodite");
exports.default = (function (props) {
    if (props === void 0) { props = {}; }
    return (0, react_1.useMemo)(function () {
        var transformationOptimal = "translate(0, 0)";
        var directions = {};
        switch (props.animationDirection) {
            case "top-right":
                transformationOptimal = "translate(100rem, 0)";
                directions.right = "5rem";
                directions.top = "3rem";
                break;
            case "top-left":
                transformationOptimal = "translate(-100rem, 0)";
                directions.left = "5rem";
                directions.top = "3rem";
                break;
            case "bottom-left":
                transformationOptimal = "translate(-100rem, 0)";
                directions.left = "5rem";
                directions.bottom = "3rem";
                break;
            case "bottom-right":
                transformationOptimal = "translate(100rem, 0)";
                directions.right = "5rem";
                directions.bottom = "3rem";
                break;
        }
        var toastInAnimation = {
            '0%': {
                transform: transformationOptimal,
            },
            '100%': {
                transform: 'translate(0,0)'
            },
        };
        var toastOutAnimation = {
            '0%': {
                transform: 'translate(0,0)',
            },
            '100%': {
                transform: transformationOptimal
            },
        };
        return aphrodite_1.StyleSheet.create({
            sectionWrapper: {
                overflowX: "hidden"
            },
            body: {
                overflowX: "hidden",
                position: "relative",
            },
            container: __assign(__assign({}, directions), { display: "flex", flexDirection: "column", flex: 1, minWidth: "20rem", position: "absolute", margin: "auto", zIndex: 1, opacity: 1, overflowX: "hidden", animationName: [props.show ? toastInAnimation : toastOutAnimation], animationDuration: "".concat(props.autoDismissTimeout, "ms"), animationPlayState: "running" }),
            progress: {
                height: "0.4rem"
            },
            closeBtn: {
                position: "absolute",
                top: "0.1rem",
                right: "0.2rem",
                backgroundColor: "transparent",
                borderWidth: 0,
                ":focus": {
                    outline: "none",
                },
            }
        });
    }, [props]);
});
