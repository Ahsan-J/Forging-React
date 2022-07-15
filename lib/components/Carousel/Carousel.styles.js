"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var aphrodite_1 = require("../../helpers/aphrodite");
exports.default = (function () { return (0, react_1.useMemo)(function () {
    var slideIn = {
        '0%': {
            transform: 'translateX(50rem)',
        },
        '99%': {
            transform: 'translateX(0)'
        },
    };
    var slideOut = {
        '0%': {
            transform: 'translateX(0)',
        },
        '100%': {
            transform: 'translateX(-50rem)'
        },
    };
    return aphrodite_1.StyleSheet.create({
        container: {
            position: 'relative',
            width: "50rem",
            height: "30rem",
        },
        carouselInner: {
            // display:'flex',
            // flexDirection:"row",
            // flex:1,
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
            height: "100%",
        },
        carouselItemContainer: {
            margin: "5px",
            backgroundColor: 'var(--bs-danger)',
            // width: "100%",
            // height:"100%",
            display: "inline",
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
        },
        slideIn: {
            animationFillMode: "forwards",
            animationName: [slideIn],
            animationDuration: "3000ms",
            animationPlayState: "running",
        },
        slideOut: {
            animationName: [slideOut],
            animationDuration: "3000ms",
            animationPlayState: "running",
            animationFillMode: "forwards",
        }
    });
}, []); });
