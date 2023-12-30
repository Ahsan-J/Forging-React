import React from 'react';
import { ColorSchemes, Size } from '../../types/theme';
export interface ITableColumnHeading<T = unknown> {
    label?: string;
    keyIndex: keyof T;
    sortable?: boolean;
    primaryColumn?: boolean;
    sortIndex?: keyof T;
    render?: (value: unknown, key: keyof T, index: number) => React.ReactNode;
    renderColumn?: (value: ITableColumnHeading<T>, index: number) => React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
type propTypes<T = unknown> = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    pageSize?: number;
    columnHeadings: Array<ITableColumnHeading<T>>;
    data?: Array<T> | ((page: number) => Array<T>);
    autoSort?: boolean;
    currentPage?: number;
    onSortData?: (orderKey: ITableColumnHeading<T>['sortIndex'], orderDirectionTemp: "desc" | "asc") => void;
    onPageChange?: (index: number) => void;
    onNextPage?: (index: number) => void;
    onPreviousPage?: (index: number) => void;
    onRowItemClick?: (row: T, index: number) => void;
    rowClass?: (row: T, index: number) => string;
    renderOnRowHover?: (row: T, index: number) => React.ReactElement | null;
    hoverWrapperClassName?: string;
    headerRowClass?: string;
    footerRowClass?: string;
    rowStyle?: React.CSSProperties;
    loading?: boolean;
    renderEmptyList?: React.ReactElement | null;
    total?: number;
    showNumberLength?: number;
    type?: ColorSchemes;
    size?: Size;
};
declare function Table<T = unknown>(props: propTypes<T>): import("react/jsx-runtime").JSX.Element | null;
declare namespace Table {
    var displayName: string;
}
export default Table;
