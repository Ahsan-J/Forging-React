import React from 'react';
import { ColorSchemes } from '../../types/Color';
declare type propTypes = {
    className?: string;
    style?: React.CSSProperties;
    id?: string;
    data: Array<any>;
    renderItem: (item: any, index: number) => React.ReactNode;
    keyExtractor: string | number | ((item: any, index: number) => string | number);
    type?: ColorSchemes;
};
declare const Timeline: React.NamedExoticComponent<React.PropsWithChildren<propTypes>>;
export default Timeline;
