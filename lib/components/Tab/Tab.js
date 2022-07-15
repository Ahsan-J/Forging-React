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
var NavBarList_1 = __importDefault(require("../NavBarList"));
var utility_1 = require("../../helpers/utility");
var Tab_styles_1 = __importDefault(require("./Tab.styles"));
var aphrodite_1 = require("../../helpers/aphrodite");
var Tab = react_1.default.forwardRef(function (props, ref) {
    var styles = (0, Tab_styles_1.default)(props);
    var _a = __read((0, react_1.useState)(Object.keys(props.data)[0]), 2), activeTab = _a[0], setActiveTab = _a[1];
    var onTabClick = function (title, e) {
        e.stopPropagation();
        setActiveTab(title);
    };
    var navBaristData = (0, react_1.useMemo)(function () {
        return Object.keys(props.data).map(function (tabItemKey) {
            return {
                title: tabItemKey,
                onClick: onTabClick.bind(_this, tabItemKey),
                id: (0, utility_1.toKebabCase)(tabItemKey || ""),
            };
        });
    }, [props.data]);
    var getTabNumber = function () {
        var tabIndex = 0;
        while (Object.keys(props.data).includes("New Tab ".concat(tabIndex)))
            tabIndex++;
        return tabIndex;
    };
    var onTabClose = function (item) {
        if (props.onTabClose)
            props.onTabClose(item.title);
    };
    var onAddTab = function () {
        if (props.onAddTab)
            props.onAddTab("New Tab ".concat(getTabNumber()));
    };
    var renderTabs = (0, react_1.useMemo)(function () {
        return Object.keys(props.data).map(function (tabItemKey, index) {
            var Component = props.data[tabItemKey];
            if (typeof Component == "function")
                Component = react_1.default.createElement(Component, { "data-test": "TabComponent" });
            return (react_1.default.createElement("div", { "data-test": "TabComponentWrapper", key: (0, utility_1.toKebabCase)(tabItemKey) || index, className: "tab-pane fade ".concat(tabItemKey == activeTab ? "active show" : "").trim(), id: (0, utility_1.toKebabCase)(tabItemKey) }, Component));
        });
    }, [props.data, activeTab]);
    return (react_1.default.createElement("div", { "data-test": "TabContainer", id: props.id, style: props.style, className: "".concat((0, aphrodite_1.css)(styles.container), " ").concat(props.className || "").trim(), ref: ref },
        react_1.default.createElement(NavBarList_1.default, { data: navBaristData, type: "Tab", onClick: setActiveTab, onItemClose: props.onTabClose ? onTabClose : undefined, onAddItem: props.onAddTab ? onAddTab : undefined, active: activeTab }),
        react_1.default.createElement("div", { "data-test": "TabContent", className: "tab-content" }, renderTabs)));
});
Tab.defaultProps = {
    className: '',
};
exports.default = Tab;
