import React from 'react';
import { ColorSchemes, Size } from '../../types/theme';
type propTypes = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    onPreviousClick?: (index: number) => void;
    onNextClick?: (index: number) => void;
    currentPage?: number;
    total?: number;
    showNumberLength?: number;
    onItemClick?: (index: number, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    outline?: Array<number> | boolean;
    disabled?: Array<number> | boolean;
    type?: ColorSchemes;
    size?: Size;
};
declare const Pagination: React.NamedExoticComponent<propTypes>;
export default Pagination;
