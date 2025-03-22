import React from 'react';
import { IDropdownItem } from '../Dropdown';
import { ObjectType } from '../../types/app';
import { ColorSchemes, Size } from '../../types/theme';
type propType<T = unknown> = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    label?: string;
    labelClass?: string;
    name?: string;
    multiple?: boolean;
    data: T;
    badgeClass?: string;
    type?: ColorSchemes;
    size?: Size;
    highlightColor?: string;
    onRemove?: (key: keyof T) => void;
    onOutsideClick?: (value: string) => void;
    placeholder?: React.InputHTMLAttributes<HTMLInputElement>['placeholder'];
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onItemClick?: (key: keyof T, value: T[keyof T]) => void;
    renderDropdownItem?: (value: T[keyof T], key: keyof T) => React.ReactNode;
    error?: string;
    values?: Array<keyof T>;
    disabled?: boolean;
    allowNewValue?: boolean;
    keyEvents?: boolean;
    floating?: boolean;
    renderSelectedBadges?: boolean | ((selectedKeys: Array<keyof T>, onRemoveBadge: (key: keyof T) => void) => React.ReactNode);
    loader?: boolean;
    searchable?: boolean;
    bgAlpha?: number;
};
declare const _default: <T extends ObjectType<IDropdownItem>>(props: propType<T> & React.RefAttributes<HTMLInputElement>) => React.ReactElement | null;
export default _default;
