"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var __1 = require("..");
exports.default = (function (_a) {
    var _b = _a.errorText, errorText = _b === void 0 ? "" : _b, _c = _a.hasPlaceholder, hasPlaceholder = _c === void 0 ? false : _c;
    return (0, react_1.useMemo)(function () {
        return __1.StyleSheet.create({
            "input__input": {
                ":focus-visible": {
                    outline: "none",
                },
            },
            "floatInput__label": {
                position: "relative",
                borderBottom: "1px solid ".concat(errorText ? 'var(--bs-danger)' : 'var(--bs-light)'),
                display: 'flex',
                flexDirection: 'row',
                "& > span": {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transform: "translateY(30px)",
                    fontSize: "0.875em",
                    transitionDuration: "300ms",
                    paddingLeft: "0.5rem",
                },
                "& > div > span": {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transform: "translateY(30px)",
                    fontSize: "0.875em",
                    transitionDuration: "300ms",
                    paddingLeft: "0.5rem",
                },
                "& *": {
                    boxSizing: 'border-box',
                },
                ":focus-within": {
                    "& > span": {
                        color: "var(--bs-primary)",
                        transform: "translateY(0px)",
                        paddingLeft: 0,
                    },
                    "& > div > span": {
                        color: "var(--bs-primary)",
                        transform: "translateY(0px)",
                        paddingLeft: 0,
                    }
                },
                "& > button": {
                    marginTop: 20,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                }
            },
            "floatInput__input": {
                width: "100%",
                padding: "0.55rem 0px",
                paddingLeft: "0.5rem",
                marginTop: 20,
                border: "1px solid ".concat(errorText ? 'var(--bs-danger)' : 'gray'),
                borderRadius: "0.2rem",
                outline: "none",
                "::placeholder": {
                    opacity: 0,
                },
                ":focus::placeholder": {
                    opacity: hasPlaceholder ? 1 : 0,
                },
                ":not(:placeholder-shown) + span": {
                    color: "var(--bs-primary)",
                    transform: "translateY(0px)",
                    paddingLeft: 0,
                },
                ":not(:placeholder-shown) + div>span": {
                    color: "var(--bs-primary)",
                    transform: "translateY(0px)",
                    paddingLeft: 0,
                }
            },
        });
    }, [errorText, hasPlaceholder]);
});
// .floatInput__label:focus-within > span,
// .floatInput__input:not(:placeholder-shown) + span{
//     color: var(--primary-color);
//     transform:translateY(0px);
//     padding-left: 0;
// }
