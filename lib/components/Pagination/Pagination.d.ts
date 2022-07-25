import React from 'react';
declare type propTypes = {
    onPreviousClick?: (index: number) => void;
    onNextClick?: (index: number) => void;
    currentPage: number;
    total: number;
    showNumberLength?: number;
    onItemClick: (index: number, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    className?: string;
    style?: React.CSSProperties;
};
declare const Pagination: React.NamedExoticComponent<propTypes>;
export default Pagination;
