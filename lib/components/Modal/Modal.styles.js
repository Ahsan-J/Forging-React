"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var aphrodite_1 = require("../../helpers/aphrodite");
exports.default = (function (props) {
    if (props === void 0) { props = {}; }
    return (0, react_1.useMemo)(function () {
        var transformationOptimal = "translate(0, 0)";
        switch (props.animationDirection) {
            case "right":
                transformationOptimal = "translate(100rem, 0)";
                break;
            case "left":
                transformationOptimal = "translate(-100rem, 0)";
                break;
            case "top":
                transformationOptimal = "translate(0, -100rem)";
                break;
            case "bottom":
                transformationOptimal = "translate(0, 100rem)";
                break;
        }
        return aphrodite_1.StyleSheet.create({
            backdropShow: {
                backgroundColor: 'rgba(0,0,0,0.6)',
                "& > div": {
                    transform: "translate(0,0)",
                }
            },
            backdropContainer: {
                display: "flex",
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                padding: ".25rem .75rem",
                position: "absolute",
                margin: "auto",
                inset: 0,
                zIndex: 1,
                backgroundColor: 'rgba(0,0,0,0.0)',
                transition: 'background-color 1s'
            },
            modalInnerContainer: {
                width: "70%",
                height: "70%",
                overflowY: "auto",
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: "var(--bs-body-bg)",
                // marginTop: "5rem",
                // minHeight: "20rem",
                // minWidth: "30rem",
                position: "relative",
                zIndex: 2,
                transform: transformationOptimal,
                borderRadius: "0.5rem",
                transition: 'transform 1s'
            },
            buttonDismiss: {
                backgroundColor: "transparent",
                borderWidth: 0,
                ':focus': {
                    outline: "none",
                },
                position: 'absolute',
                top: "0.5rem",
                right: "0.7rem"
            },
        });
    }, [props]);
});
