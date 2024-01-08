import React from 'react';
import Button from '../Button';
import { ColorSchemes, Size } from '../../types/theme';
import { ObjectType } from '../../types/app';
import { IDropdownItem } from '../Dropdown';
type ButtonProps = React.ComponentProps<typeof Button>;
export interface IBreadcrumbItem {
    leftIcon?: ButtonProps['leftIcon'];
    rightIcon?: ButtonProps['rightIcon'];
    label: string;
    options?: ObjectType<IDropdownItem>;
}
type propTypes<T = unknown> = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    items: T;
    active?: keyof T;
    size?: Size;
    renderItems?: (options: {
        key: keyof T;
        label: IBreadcrumbItem['label'];
        isActive: boolean;
    }) => React.ReactNode;
    disabled?: Array<keyof T>;
    onClick?: (key: keyof T) => void;
    type?: ColorSchemes;
    iconOnActive?: boolean;
    divider?: string;
};
declare function Breadcrumb<T extends ObjectType<IBreadcrumbItem>>(props: propTypes<T>): import("react/jsx-runtime").JSX.Element;
export default Breadcrumb;
