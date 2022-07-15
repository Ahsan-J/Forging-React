import React from 'react';
export interface IColumnHeading<T = any> {
    label?: string;
    keyIndex: string | number;
    sortable?: boolean;
    sortIndex?: IColumnHeading['keyIndex'] | ((value: T, key: number | string, index: number | string) => IColumnHeading['keyIndex']);
    render?: (value: Array<T>, key: number | string, index: number | string) => JSX.Element | React.ReactNode;
    renderColumn?: (value: IColumnHeading<T>, key: number | string) => JSX.Element | React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
declare type propTypes = {
    className?: string;
    style?: React.CSSProperties;
    pageSize?: number;
    columnHeadings: Array<IColumnHeading>;
    data: ((page: number) => Array<any>) | Array<any>;
    autoSort?: boolean;
    currentPage?: number;
    onSortData?: (orderKey: IColumnHeading['sortIndex'], orderDirectionTemp: "desc" | "asc") => void;
    onPageChange?: (index: number) => void;
    onNextPage?: (index: number) => void;
    onPreviousPage?: (index: number) => void;
    onRowItemClick?: (row: any, index: number) => void;
    rowClass?: (row: any, index: number) => string;
    renderOnRowHover?: (row: any, index: number) => React.ReactElement | null;
    hoverWrapperClassName?: string;
    headerRowClass?: string;
    rowStyle?: React.CSSProperties;
    loading?: boolean;
    renderEmptyList?: React.ReactElement | null;
    ref?: React.Ref<HTMLTableElement>;
    total?: number;
    showNumberLength?: number;
};
declare const Table: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<propTypes>, "data" | "style" | "className" | "children" | "showNumberLength" | "pageSize" | "columnHeadings" | "autoSort" | "currentPage" | "onSortData" | "onPageChange" | "onNextPage" | "onPreviousPage" | "onRowItemClick" | "rowClass" | "renderOnRowHover" | "hoverWrapperClassName" | "headerRowClass" | "rowStyle" | "loading" | "renderEmptyList" | "total"> & React.RefAttributes<HTMLTableElement>>;
export default Table;
