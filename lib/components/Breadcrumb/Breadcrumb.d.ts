import React from 'react';
import { ColorSchemes } from '../../types/Color';
import { IconNames } from '../Icon';
export interface IBreadcrumbItem {
    disabled?: boolean;
    iconName?: IconNames;
    title: string;
}
declare type propTypes = {
    className?: string;
    style?: React.CSSProperties;
    items: {
        [link in string]: IBreadcrumbItem;
    };
    active?: string;
    size?: "small" | "large" | "normal";
    renderItems?: (link: string, title: IBreadcrumbItem, isActive: boolean) => React.ReactNode;
    disabled?: Array<string>;
    onClick?: (link: string) => void;
    type?: ColorSchemes;
    iconOnActive?: boolean;
};
declare const BreadCrumb: React.NamedExoticComponent<propTypes>;
export default BreadCrumb;
