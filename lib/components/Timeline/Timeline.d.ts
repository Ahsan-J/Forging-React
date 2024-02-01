import React from 'react';
import { ColorSchemes, Size } from '../../types/theme';
type propTypes<T = unknown> = {
    className?: string;
    style?: React.CSSProperties;
    id?: string;
    data: Array<T>;
    renderItem: (item: T, index: number) => React.ReactNode;
    keyExtractor: string | number | ((item: T, index: number) => string | number);
    type?: ColorSchemes;
    size?: Size;
    bgAlpha?: number;
};
declare function Timeline<T>(props: React.PropsWithChildren<propTypes<T>>): import("react/jsx-runtime").JSX.Element;
export default Timeline;
