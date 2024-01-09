import React from 'react';
import { ColorSchemes, Size } from '../../types/theme';
type propType<T = unknown> = {
    className?: string;
    style?: React.CSSProperties;
    id?: string;
    type?: ColorSchemes;
    size?: Size;
    interval?: number;
    onSlideChange?: (slideIndex: number) => void;
    showIndex?: boolean;
    renderItem: (item: T, index: number) => React.ReactNode;
    data: Array<T>;
    keyExtractor?: string | number | ((item: T) => string | number);
};
export interface ICarouselRef {
    setSlideIndex: React.Dispatch<React.SetStateAction<number>>;
}
declare const _default: <T = unknown>(props: propType<T> & React.RefAttributes<ICarouselRef>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export default _default;
