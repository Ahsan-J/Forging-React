import React from 'react';
import { ColorSchemes } from '../../types/theme';
type propType = {
    text: string;
    searchText: string;
    style?: React.CSSProperties;
    id?: string;
    className?: string;
    type?: ColorSchemes;
};
declare const Highlighter: React.NamedExoticComponent<propType>;
export default Highlighter;
