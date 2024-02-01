import React from 'react';
import { IconNames } from '../Icon';
import { ObjectType } from '../../types/app';
import { ColorSchemes, Size } from '../../types/theme';
import Button from '../Button';
export interface IDropdownItem {
    label?: string;
    iconRight?: IconNames;
    iconLeft?: IconNames;
    checked?: boolean;
    onChecked?: React.ChangeEventHandler<HTMLInputElement>;
}
export interface IDropdownInstance<T = unknown> {
    value: keyof T;
    setShowClass: React.Dispatch<React.SetStateAction<boolean>>;
    isVisible: boolean;
}
type ButtonProps = React.ComponentProps<typeof Button>;
type propTypes<T = unknown> = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    defaultKey?: keyof T;
    options?: T;
    onItemClick?: (key: keyof T, value: T[keyof T]) => void;
    renderItem?: (value: T[keyof T], key: keyof T) => React.ReactNode;
    renderSelectedValue?: (value: T[keyof T], key: keyof T) => React.ReactNode;
    placeholder?: string;
    name?: string;
    value?: keyof T;
    limit?: number;
    error?: string;
    onOutsideClick?: () => void;
    keyEvents?: boolean;
    loader?: boolean;
    type?: ColorSchemes;
    size?: Size;
    bgAlpha?: number;
    rightIcon?: ButtonProps['rightIcon'];
    leftIcon?: ButtonProps['leftIcon'];
    disabled?: ButtonProps['disabled'];
    outline?: ButtonProps['outline'];
    rounded?: ButtonProps['rounded'];
    active?: ButtonProps['active'];
};
declare const _default: <T extends ObjectType<IDropdownItem>>(props: propTypes<T> & React.RefAttributes<IDropdownInstance<T>>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export default _default;
