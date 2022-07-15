"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var aphrodite_1 = require("../../helpers/aphrodite");
exports.default = (function (props) {
    if (props === void 0) { props = {}; }
    return (0, react_1.useMemo)(function () {
        var alertAnimation = {
            '0%': {
                transform: 'translateY(0)',
            },
            '15%': {
                transform: 'translateY(13rem)'
            },
            '90%': {
                transform: 'translateY(13rem)'
            },
            '100%': {
                transform: 'translateY(0)',
            }
        };
        return aphrodite_1.StyleSheet.create({
            container: {
                display: "flex",
                alignItems: 'center',
                flex: 1,
                padding: ".25rem .75rem",
                position: "absolute",
                top: props.autoDismissTimeout ? "-10rem" : "3rem",
                width: "80%",
                margin: "auto",
                left: 0,
                right: 0,
                zIndex: 99,
                animationName: props.autoDismissTimeout > 0 ? [alertAnimation] : [],
                animationDuration: "".concat(props.autoDismissTimeout, "ms"),
                animationPlayState: "running"
            },
            iconStyle: {
                flex: 0.1,
            },
            innerContainer: {
                flex: 0.9,
            }
        });
    }, [props]);
});
