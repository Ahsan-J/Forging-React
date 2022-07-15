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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var infinitelist_style_1 = __importDefault(require("./infinitelist.style"));
var InfiniteList = react_1.default.forwardRef(function (props, ref) {
    var elementRef = (0, react_1.useRef)(null);
    var _canApi = (0, react_1.useRef)(true);
    var _lastScrollTop = (0, react_1.useRef)(0);
    var _page = (0, react_1.useRef)(0);
    var _debounceTime = (0, react_1.useRef)(props.debounce || 1000);
    var data = props.data, renderItem = props.renderItem, isReverse = props.isReverse;
    var styles = (0, infinitelist_style_1.default)(props);
    (0, react_1.useImperativeHandle)(ref, function () {
        return {
            set page(p) {
                _page.current = p;
            },
            get page() {
                return _page.current;
            },
            set debounce(d) {
                _debounceTime.current = d;
            },
            get debounce() {
                return _debounceTime.current;
            }
        };
    });
    var onScroll = (0, react_1.useCallback)(function (e) {
        if (!props.hasMore)
            return;
        if (isReverse && _canApi.current == true && e.target.scrollTop <= (props.threshold || 0)) {
            if (props.onEndReach && _lastScrollTop.current > e.target.scrollTop) {
                props.onEndReach(e, _page.current);
                _page.current = _page.current + 1;
            }
            _canApi.current = false;
            setTimeout(function () { return _canApi.current = true; }, _debounceTime.current);
        }
        if (!isReverse && _canApi.current == true && (e.target.scrollHeight - e.target.scrollTop - (props.threshold || 0) <= e.target.clientHeight)) {
            if (props.onEndReach && _lastScrollTop.current < e.target.scrollTop) {
                props.onEndReach(e, _page.current);
                _page.current = _page.current + 1;
            }
            _canApi.current = false;
            setTimeout(function () { return _canApi.current = true; }, _debounceTime.current);
        }
        _lastScrollTop.current = e.target.scrollTop;
    }, [isReverse, props]);
    (0, react_1.useEffect)(function () {
        var _a, _b;
        if (((_a = props.data) === null || _a === void 0 ? void 0 : _a.length) > 0 && props.hasMore && elementRef.current) {
            var parentElement_1 = elementRef.current.parentElement;
            parentElement_1 === null || parentElement_1 === void 0 ? void 0 : parentElement_1.addEventListener("scroll", onScroll);
            (_b = elementRef.current) === null || _b === void 0 ? void 0 : _b.remove(); // Remove entry from DOM as it is polluting DOM heirarchy
            if (props.isReverse)
                parentElement_1 === null || parentElement_1 === void 0 ? void 0 : parentElement_1.scrollTo(0, parentElement_1 === null || parentElement_1 === void 0 ? void 0 : parentElement_1.scrollHeight);
            return function () {
                parentElement_1 === null || parentElement_1 === void 0 ? void 0 : parentElement_1.removeEventListener("scroll", onScroll);
            };
        }
    }, [onScroll, props]);
    var renderedItems = (0, react_1.useMemo)(function () { return data === null || data === void 0 ? void 0 : data.map(renderItem); }, [data, renderItem]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { ref: elementRef, style: { display: "none" } }),
        renderedItems));
});
InfiniteList.defaultProps = {
    threshold: 200,
    debounce: 1000,
    isReverse: false,
    data: [],
    hasMore: false,
    renderItem: function (e) { return e; },
};
exports.default = InfiniteList;
