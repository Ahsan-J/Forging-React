import React from 'react';
import { ColorSchemes, Size } from '../../types/theme';
type propType = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    type?: ColorSchemes;
    size?: Size;
    checked?: boolean;
    name?: string;
};
declare const Switch: React.NamedExoticComponent<propType>;
export default Switch;
