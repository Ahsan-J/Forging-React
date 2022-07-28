import React from 'react';
import { ColorSchemes } from '../../types/Color';
declare type propTypes = {
    onPreviousClick?: (index: number) => void;
    onNextClick?: (index: number) => void;
    currentPage: number;
    total: number;
    showNumberLength?: number;
    onItemClick: (index: number, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    className?: string;
    style?: React.CSSProperties;
    outline?: Array<number> | boolean;
    disabled?: Array<number> | boolean;
    type?: ColorSchemes;
    size?: "large" | "small" | "normal";
};
declare const Pagination: React.NamedExoticComponent<propTypes>;
export default Pagination;
