import { ObjectType } from '../../types/app';
import React from 'react';
import { ColorSchemes, Size } from '../../types/theme';
export interface IRadioItem {
    label?: string;
}
type propTypes<T = ObjectType<IRadioItem>> = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    defaultKey?: keyof T;
    options?: T;
    onChange?: (key: keyof T, value: T[keyof T]) => void;
    renderItem?: (value: T[keyof T], key: keyof T) => React.ReactNode;
    name?: string;
    type?: ColorSchemes;
    size?: Size;
    direction?: "left" | "right";
    disabled?: boolean;
    value?: keyof T;
    error?: string;
    keyEvents?: boolean;
    onFieldError?: (error: string) => void;
    bgAlpha?: number;
};
declare function RadioButton<T extends ObjectType<IRadioItem>>(props: propTypes<T>): import("react/jsx-runtime").JSX.Element | null;
export default RadioButton;
