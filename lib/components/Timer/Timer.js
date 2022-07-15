"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
var react_1 = __importStar(require("react"));
var Timer = react_1.default.forwardRef(function (props, ref) {
    var id = (0, react_1.useId)();
    var _a = __read((0, react_1.useState)(0), 2), duration = _a[0], setDuration = _a[1];
    var interval = (0, react_1.useRef)(0);
    var renderTimer = props.renderTimer;
    var tick = (0, react_1.useCallback)(function () { return setDuration(function (d) { return d + 1; }); }, []);
    (0, react_1.useEffect)(function () {
        if (typeof props.play == "boolean" && props.play == true) {
            interval.current = window.setInterval(tick, 1000);
            return function () {
                clearInterval(interval.current);
            };
        }
        else if (typeof props.play == "boolean" && props.play == false) {
            clearInterval(interval.current);
        }
    }, [tick, props.play]);
    var formatDuration = function (d) { return ("".concat(Math.floor(d / 60)).padStart(2, '0') + ":" + "".concat(Math.floor(d % 60)).padStart(2, '0')); };
    (0, react_1.useImperativeHandle)(ref, function () { return ({
        id: id,
        duration: function (d) {
            if (d) {
                return setDuration(d);
            }
            return duration;
        },
        formatDuration: formatDuration,
        pause: function () { return clearInterval(interval.current); },
        play: function () {
            clearInterval(interval.current);
            interval.current = window.setInterval(tick, 1000);
        }
    }); }, [duration, id, tick]);
    var timerUI = (0, react_1.useMemo)(function () {
        if (renderTimer)
            return renderTimer(duration);
        return formatDuration(duration);
    }, [renderTimer, duration]);
    return (react_1.default.createElement("span", { id: id, className: props.className || "", style: props.style },
        timerUI,
        props.total ? (react_1.default.createElement(react_1.default.Fragment, null, " / " + formatDuration(props.total))) : null));
});
Timer.defaultProps = {
    play: true,
};
exports.default = Timer;
