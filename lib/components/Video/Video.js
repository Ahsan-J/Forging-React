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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var aphrodite_1 = require("../../helpers/aphrodite");
var Icon_1 = __importDefault(require("../Icon"));
var Timer_1 = __importDefault(require("../Timer"));
var video_styles_1 = __importDefault(require("./video.styles"));
var Video = react_1.default.forwardRef(function (props, ref) {
    var _a, _b;
    var _c = __read((0, react_1.useState)(!!props.autoPlay), 2), play = _c[0], setPlay = _c[1];
    var _d = __read((0, react_1.useState)(100), 2), volume = _d[0], setVolume = _d[1];
    var iconContainerRef = (0, react_1.useRef)(null);
    var videoRef = (0, react_1.useRef)(null);
    var debounceTimeout = (0, react_1.useRef)(0);
    var sliderRef = (0, react_1.useRef)(null);
    var timerRef = (0, react_1.useRef)(null);
    var mainContainerRef = (0, react_1.useRef)(null);
    var styles = (0, video_styles_1.default)();
    var finalSrc = (0, react_1.useMemo)(function () {
        if (typeof props.src == "string")
            return props.src;
        if (typeof props.src == "object" && 'arrayBuffer' in props.src)
            return URL.createObjectURL(props.src);
        return undefined;
    }, [props.src]);
    (0, react_1.useEffect)(function () {
        var _a, _b;
        if (play) {
            (_a = videoRef.current) === null || _a === void 0 ? void 0 : _a.play();
        }
        else {
            (_b = videoRef.current) === null || _b === void 0 ? void 0 : _b.pause();
        }
        clearTimeout(debounceTimeout.current);
        debounceTimeout.current = window.setTimeout(function () {
            if (iconContainerRef.current) {
                iconContainerRef.current.style.visibility = 'hidden';
                iconContainerRef.current.style.opacity = '0';
                iconContainerRef.current.style.transform = 'scale(2)';
            }
        }, 1500);
    }, [play]);
    var onTimeUpdate = function () {
        if (timerRef.current && videoRef.current) {
            timerRef.current.duration(videoRef.current.currentTime);
        }
        if (sliderRef.current && videoRef.current) {
            if (!sliderRef.current.max)
                sliderRef.current.max = "".concat(videoRef.current.duration);
            sliderRef.current.value = "".concat(videoRef.current.currentTime / videoRef.current.duration * parseInt(sliderRef.current.max, 10));
            var perc = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            sliderRef.current.style.backgroundImage = "linear-gradient(90deg, var(--bs-secondary) ".concat(perc, "%, rgba(0,0,0,0.1) ").concat(perc, "%)");
        }
    };
    (0, react_1.useEffect)(function () {
        var onKeyup = function (e) {
            var _a, _b, _c;
            if (["input", "textarea"].includes(((_b = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.tagName) === null || _b === void 0 ? void 0 : _b.toLowerCase()) || ""))
                return;
            if (e.target instanceof HTMLElement && mainContainerRef.current && ((_c = mainContainerRef.current) === null || _c === void 0 ? void 0 : _c.contains(e.target))) {
                if (e.code == "Space" && videoRef.current)
                    onVideoClick();
                if (e.code == "ArrowRight" && videoRef.current) {
                    videoRef.current.currentTime = videoRef.current.currentTime + (props.fastDiff || 5);
                    if (sliderRef.current) {
                        sliderRef.current.value = "".concat(videoRef.current.currentTime);
                    }
                }
                if (e.code == "ArrowLeft" && videoRef.current) {
                    videoRef.current.currentTime = videoRef.current.currentTime - (props.fastDiff || 5);
                    if (sliderRef.current) {
                        sliderRef.current.value = "".concat(videoRef.current.currentTime);
                    }
                }
            }
        };
        document.addEventListener('keyup', onKeyup);
        return function () {
            document.removeEventListener('keyup', onKeyup);
        };
    }, [props.fastDiff]);
    var onSliderChange = function () {
        if (sliderRef.current && videoRef.current) {
            videoRef.current.currentTime = videoRef.current.duration * parseInt(sliderRef.current.value) / parseInt(sliderRef.current.max);
        }
    };
    var onVideoClick = function (e) {
        e === null || e === void 0 ? void 0 : e.stopPropagation();
        setPlay(function (p) { return !p; });
        if (iconContainerRef.current) {
            iconContainerRef.current.style.visibility = 'visible';
            iconContainerRef.current.style.opacity = '0.6';
            iconContainerRef.current.style.transform = '';
        }
    };
    var onVolumeChange = function (e) {
        e.stopPropagation();
        setVolume(parseInt(e.target.value, 10));
    };
    var volumeIconName = (0, react_1.useMemo)(function () {
        if (volume > 0 && volume < 50)
            return "volume-down-fill";
        if (volume >= 50)
            return "volume-up-fill";
        return "volume-mute-fill";
    }, [volume]);
    (0, react_1.useLayoutEffect)(function () {
        if (videoRef.current)
            videoRef.current.volume = volume / 100;
    }, [volume]);
    (0, react_1.useEffect)(function () {
        if (videoRef.current) {
            videoRef.current.load();
            setPlay(false);
            if (sliderRef.current)
                sliderRef.current.value = "0";
            if (timerRef.current)
                timerRef.current.duration(0);
        }
    }, [finalSrc]);
    (0, react_1.useImperativeHandle)(ref, function () { return videoRef.current; }, []);
    // if(!finalSrc && !ref) {
    //     return (
    //         <div style={props.style as React.CSSProperties} className={`${css(styles.previewContainer)} ${props.className || ""}`}>
    //             <p className='lead'>No Preview available</p>
    //         </div>
    //     )
    // }
    return (react_1.default.createElement("div", { ref: mainContainerRef, style: props.style, onClick: onVideoClick, className: "".concat((0, aphrodite_1.css)(styles.container), " ").concat(props.className || "") },
        props.title || props.onInfo ? (react_1.default.createElement("div", { className: "".concat((0, aphrodite_1.css)(styles.topContainer)) },
            react_1.default.createElement("p", { className: 'lead' }, props.title || ""),
            props.onInfo ? react_1.default.createElement(Icon_1.default, { name: "info-circle-fill", onClick: props.onInfo }) : null)) : null,
        react_1.default.createElement("video", { onPause: setPlay.bind(_this, false), onPlay: setPlay.bind(_this, true), onTimeUpdate: onTimeUpdate, ref: videoRef, className: "".concat((0, aphrodite_1.css)(styles.video)), autoPlay: props.autoPlay },
            react_1.default.createElement("source", { src: finalSrc })),
        react_1.default.createElement("div", { ref: iconContainerRef, className: "".concat((0, aphrodite_1.css)(styles.iconContainer)) },
            react_1.default.createElement(Icon_1.default, { height: "5.5rem", width: "5.5rem", name: "".concat(!play ? "play" : "pause", "-circle"), fill: "#fff" })),
        react_1.default.createElement("div", { onClick: function (e) { return e.stopPropagation(); }, className: "".concat((0, aphrodite_1.css)(styles.controllerContainer)) },
            react_1.default.createElement("div", { className: "".concat((0, aphrodite_1.css)(styles.controllers)) },
                react_1.default.createElement("div", { className: "".concat((0, aphrodite_1.css)(styles.durationWrapper)) },
                    react_1.default.createElement(Icon_1.default, { height: "1.4rem", width: "1.4rem", name: !play ? "play" : "pause", fill: "#fff", onClick: function () { return setPlay(function (p) { return !p; }); } }),
                    react_1.default.createElement(Timer_1.default, { className: "".concat((0, aphrodite_1.css)(styles.timerStyle)), play: false, ref: timerRef, total: (_a = videoRef.current) === null || _a === void 0 ? void 0 : _a.duration })),
                react_1.default.createElement("div", { className: "".concat((0, aphrodite_1.css)(styles.volumeContainer)) },
                    react_1.default.createElement(Icon_1.default, { height: "1.4rem", width: "1.4rem", fill: "#fff", name: volumeIconName, onClick: function () { return setVolume(function (v) { return v > 0 ? 0 : 100; }); } }),
                    react_1.default.createElement("input", { type: "range", min: "0", max: "100", className: "".concat((0, aphrodite_1.css)(styles.volumeSlider)), onChange: onVolumeChange, value: volume }))),
            react_1.default.createElement("input", { ref: sliderRef, type: "range", min: "0", max: (_b = videoRef.current) === null || _b === void 0 ? void 0 : _b.duration, defaultValue: "0", onChange: onSliderChange, className: "".concat((0, aphrodite_1.css)(styles.slider)) }))));
});
exports.default = Video;
