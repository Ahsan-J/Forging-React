import React from 'react';
import { ColorSchemes } from '../../types/theme';
type propTypes = {
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    title: string;
    type?: ColorSchemes;
};
declare const CollapseTitle: React.NamedExoticComponent<propTypes>;
export default CollapseTitle;
