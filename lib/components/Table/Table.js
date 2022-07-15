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
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
var react_1 = __importStar(require("react"));
var Pagination_1 = __importDefault(require("../Pagination/Pagination"));
var aphrodite_1 = require("../../helpers/aphrodite");
var Table_styles_1 = __importDefault(require("./Table.styles"));
var __1 = require("..");
var utility_1 = require("../../helpers/utility");
var Table = react_1.default.forwardRef(function (props, ref) {
    var _a;
    var _b = __read((0, react_1.useState)(), 2), orderBy = _b[0], setOrderKey = _b[1];
    var _c = __read((0, react_1.useState)("asc"), 2), orderDirection = _c[0], setOrderDirection = _c[1];
    var _d = __read((0, react_1.useState)(1), 2), paginationIndex = _d[0], setPageNumber = _d[1];
    var _e = __read((0, react_1.useState)(null), 2), activeRow = _e[0], setActiveRow = _e[1];
    var styles = (0, Table_styles_1.default)(props);
    var tableRef = (0, react_1.useRef)(null);
    var hoverRowWrapper = (0, react_1.useRef)(null);
    var onSortData = props.onSortData, onPageChange = props.onPageChange, onRowItemClick = props.onRowItemClick, rowClass = props.rowClass, renderOnRowHover = props.renderOnRowHover;
    var data = (0, react_1.useMemo)(function () {
        if (typeof props.data === 'function')
            return props.data(paginationIndex - 1);
        if (props.data && props.data instanceof Array && props.data.length > 0)
            return props.data;
        return [];
    }, [props, paginationIndex]);
    var total = (0, react_1.useMemo)(function () { return props.total || Object.keys(data).length; }, [props.total, data]);
    var setOrderStatus = (0, react_1.useCallback)(function (orderKey, direction, event) {
        event.stopPropagation();
        setOrderDirection(direction);
        setOrderKey(orderKey);
        onSortData === null || onSortData === void 0 ? void 0 : onSortData(orderKey, direction);
    }, [onSortData]);
    (0, react_1.useEffect)(function () {
        if (typeof props.currentPage === 'number' && props.currentPage > 0) {
            setPageNumber(props.currentPage); // index sent should be [1,2,3...]
        }
    }, [props.currentPage]);
    var onPagination = (0, react_1.useCallback)(function (index, e) {
        e.stopPropagation();
        if (!index || typeof index != "number")
            return;
        if (typeof props.currentPage !== 'number') {
            setPageNumber(index);
        }
        if (onPageChange)
            onPageChange(index);
    }, [onPageChange, props.currentPage]);
    var onRowClick = (0, react_1.useCallback)(function (row, index) {
        if (onRowItemClick)
            onRowItemClick(row, index + (paginationIndex * (props.pageSize || 1)));
    }, [paginationIndex, onRowItemClick, props.pageSize]);
    var renderRowData = (0, react_1.useCallback)(function (column, row, rowKey) {
        var orSplit = "".concat(column.keyIndex).split(",");
        // Case: Where the additional data is required to be passed
        var dataIndeces = orSplit.reduce(function (resultIndeces, orIndex) {
            var nestingSplit = "".concat(orIndex).split(".");
            // Case: Where the nesting data value should be retrieved.
            if (nestingSplit.length > 0) {
                var nestedValue = nestingSplit.reduce(function (result, nestingIndex) {
                    result = result ? result[nestingIndex] : result;
                    return result;
                }, row);
                resultIndeces[orIndex] = nestedValue;
                return resultIndeces;
            }
            else {
                resultIndeces[column.keyIndex] = "".concat(orIndex || "");
                return resultIndeces;
            }
        }, {});
        if (column.render) {
            var value = Object.keys(dataIndeces).length > 1 ? dataIndeces : dataIndeces[column.keyIndex];
            var tableIndex = rowKey + ((paginationIndex - 1) * (props.pageSize || 1));
            return column.render(value, column.keyIndex, tableIndex);
        }
        return dataIndeces[column.keyIndex] || "N/A";
    }, [paginationIndex, props.pageSize]);
    var createSortKey = (0, react_1.useCallback)(function (value, index) {
        if (typeof (value === null || value === void 0 ? void 0 : value.sortIndex) === "function")
            return value === null || value === void 0 ? void 0 : value.sortIndex(value, value === null || value === void 0 ? void 0 : value.keyIndex, index);
        if (typeof (value === null || value === void 0 ? void 0 : value.sortIndex) === "undefined")
            return value === null || value === void 0 ? void 0 : value.keyIndex;
        return value === null || value === void 0 ? void 0 : value.sortIndex;
    }, []);
    var getSortedList = (0, react_1.useCallback)(function (dataList) {
        if (!orderBy)
            return dataList;
        return dataList === null || dataList === void 0 ? void 0 : dataList.sort(function (a, b) {
            if (typeof a[orderBy] == "number" && typeof b[orderBy] == "number") {
                return orderDirection == "asc" ? a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy];
            }
            if (typeof a[orderBy] == "string" && typeof b[orderBy] == "string") {
                return orderDirection == "asc" ? a[orderBy].localeCompare(b[orderBy]) : b[orderBy].localeCompare(a[orderBy]);
            }
            return 0;
        });
    }, [orderBy, orderDirection]);
    var renderTableHeader = (0, react_1.useMemo)(function () {
        return props.columnHeadings.map(function (value, key) {
            var sortKey = createSortKey(value, key);
            var onColHeadClick = function (e) {
                e.stopPropagation();
                if (value.sortable) {
                    var orderDirectionTemp = "asc";
                    if (orderBy === sortKey && orderDirection === orderDirectionTemp) {
                        orderDirectionTemp = "desc";
                    }
                    else {
                        orderDirectionTemp = "asc";
                    }
                    setOrderStatus(sortKey, orderDirectionTemp, e);
                }
            };
            return (react_1.default.createElement("th", { scope: "col", key: value.keyIndex, onClick: onColHeadClick, style: __assign({ cursor: value.sortable ? "pointer" : "default" }, value.style) },
                value.renderColumn ? value.renderColumn(value, key) : (value.label || value.keyIndex),
                value.sortable && (orderBy === sortKey ? (react_1.default.createElement(__1.Icon, { name: orderDirection === "asc" ? "caret-up-fill" : "caret-down-fill" })) : (react_1.default.createElement(__1.Icon, { name: "caret-right-fill" })))));
        });
    }, [createSortKey, orderBy, orderDirection, props.columnHeadings, setOrderStatus]);
    var renderEmptyOrLoadingRow = (0, react_1.useMemo)(function () {
        var _a;
        if (props.loading || total == 0) {
            return (react_1.default.createElement("tr", null,
                react_1.default.createElement("td", { colSpan: (_a = Object.keys(props.columnHeadings)) === null || _a === void 0 ? void 0 : _a.length },
                    react_1.default.createElement("div", { className: (0, aphrodite_1.css)(styles.loadingContainer) }, props.loading ? (react_1.default.createElement(__1.Spinner, { loader: props.loading })) : (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(__1.Icon, { width: "3rem", height: "3rem", name: "folder-x" }),
                        react_1.default.createElement("p", null, "No Data")))))));
        }
        return null;
    }, [props.loading, total, props.columnHeadings, styles.loadingContainer]);
    var renderTableRows = (0, react_1.useMemo)(function () {
        var _a;
        var sortedData = props.autoSort ? getSortedList(data) : data;
        var chunkData = props.data instanceof Array && typeof props.currentPage !== 'number' ? (_a = (0, utility_1.chunkArray)(sortedData, props.pageSize)) === null || _a === void 0 ? void 0 : _a[paginationIndex - 1] : sortedData;
        return chunkData === null || chunkData === void 0 ? void 0 : chunkData.map(function (row, key) { return (react_1.default.createElement("tr", { key: "".concat(key, "-").concat(paginationIndex), onMouseEnter: renderOnRowHover ? setActiveRow.bind(_this, row) : undefined, onClick: onRowClick.bind(_this, row, key), style: props.rowStyle, className: "".concat((0, aphrodite_1.css)(styles.tableRowClass), " ").concat((rowClass === null || rowClass === void 0 ? void 0 : rowClass(row, key)) || "") }, props.columnHeadings.map(function (column, columnKeyIndex) {
            return (react_1.default.createElement("td", { key: "".concat(key, "-").concat(columnKeyIndex), style: column.style, className: column.className }, renderRowData(column, row, key)));
        }))); });
    }, [props.autoSort, props.data, props.pageSize, props.currentPage, props.columnHeadings, props.rowStyle, getSortedList, data, paginationIndex, styles, renderOnRowHover, rowClass, onRowClick, renderRowData]);
    var onMouseMove = (0, react_1.useCallback)(function (e) {
        if (renderOnRowHover && activeRow && hoverRowWrapper.current && tableRef.current) {
            var offset = 5; // To prevent hover effect on the hover element
            var rect = tableRef.current.getBoundingClientRect();
            var x = e.clientX - rect.left + offset; //x position within the element.
            var y = e.clientY - rect.top + offset;
            hoverRowWrapper.current.style.transform = "translate(".concat(x, "px,").concat(y, "px)");
            // hoverRowWrapper.current.style.top = `${e.pageY - tableRef.current.offsetTop}px`;
        }
    }, [activeRow, renderOnRowHover]);
    (0, react_1.useImperativeHandle)(ref, function () { return tableRef.current; }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("table", { ref: tableRef, className: "".concat((0, aphrodite_1.css)(styles.container), " ").concat(props.className || ""), style: props.style },
            react_1.default.createElement("thead", null,
                react_1.default.createElement("tr", { className: "".concat(props.headerRowClass || "") }, renderTableHeader)),
            react_1.default.createElement("tbody", { onMouseMove: onMouseMove, onMouseLeave: setActiveRow.bind(_this, null) },
                renderEmptyOrLoadingRow,
                renderTableRows,
                renderOnRowHover && activeRow ? (react_1.default.createElement("tr", { ref: hoverRowWrapper, className: "".concat((0, aphrodite_1.css)(styles.hoverRow), " ").concat(props.hoverWrapperClassName || "") },
                    react_1.default.createElement("td", { colSpan: (_a = Object.keys(props.columnHeadings)) === null || _a === void 0 ? void 0 : _a.length }, renderOnRowHover === null || renderOnRowHover === void 0 ? void 0 : renderOnRowHover(activeRow, 0)))) : null)),
        total > (props.pageSize || 0) && total > 0 ?
            react_1.default.createElement(Pagination_1.default, { onItemClick: onPagination, showNumberLength: props.showNumberLength || 6, total: total / (props.pageSize || 1), currentPage: paginationIndex })
            : null));
});
Table.defaultProps = {
    className: 'table table-hover',
    pageSize: 10,
    autoSort: true,
    showNumberLength: 6,
    headerRowClass: "",
};
exports.default = Table;
