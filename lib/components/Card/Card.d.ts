import React from 'react';
import { ColorSchemes } from '../../types/Color';
declare type propType = {
    className?: string;
    style?: React.CSSProperties;
    type?: ColorSchemes;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    subtitle?: string;
    title?: string;
};
declare const Card: React.NamedExoticComponent<React.PropsWithChildren<propType>>;
export default Card;
