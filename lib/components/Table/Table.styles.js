"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var aphrodite_1 = require("../../helpers/aphrodite");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.default = (function (props) {
    if (props === void 0) { props = {}; }
    return (0, react_1.useMemo)(function () {
        return aphrodite_1.StyleSheet.create({
            container: {
                position: 'relative',
            },
            tableRowClass: {
                cursor: props.onRowItemClick ? "pointer" : "default"
            },
            loadingContainer: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: "1.5rem",
            },
            hoverRow: {
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: "var(--bs-white)",
                borderRadius: "1rem",
                border: "1px solid whitesmoke"
            }
        });
    }, [props]);
});
