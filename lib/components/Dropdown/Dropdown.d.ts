import React from "react";
import { ColorSchemes } from "../../types/Color";
export interface IDropdownInstance {
    value: string;
}
export interface IDropdownItem {
    label: string;
    icon?: string;
}
declare type propTypes = {
    defaultKey?: string;
    options: {
        [key: string]: IDropdownItem;
    };
    onItemClick?: (key: string, value: IDropdownItem) => void;
    renderItem?: (value: IDropdownItem, key: string) => React.ReactElement;
    renderSelectedValue?: (value: IDropdownItem) => React.ReactElement;
    placeholder?: string;
    style?: React.CSSProperties;
    className?: string;
    ref?: React.Ref<IDropdownInstance>;
    name?: string;
    label?: string;
    type?: ColorSchemes;
    iconName?: string;
    outline?: boolean;
    disabled?: boolean;
};
declare const Dropdown: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<propTypes>, "type" | "outline" | "disabled" | "label" | "style" | "className" | "name" | "children" | "iconName" | "onItemClick" | "placeholder" | "defaultKey" | "options" | "renderItem" | "renderSelectedValue"> & React.RefAttributes<IDropdownInstance>>;
export default Dropdown;
