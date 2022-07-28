import React from "react";
import { ColorSchemes } from "../../types/Color";
import { IconNames } from "../Icon";
export interface IDropdownInstance {
    value: string;
}
export interface IDropdownItem {
    label: string;
    icon?: IconNames;
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
    name?: string;
    label?: string;
    type?: ColorSchemes;
    iconName?: IconNames;
    outline?: boolean;
    disabled?: boolean;
    value?: string;
    block?: boolean;
    error?: string;
};
declare const Dropdown: React.ForwardRefExoticComponent<propTypes & React.RefAttributes<IDropdownInstance>>;
export default Dropdown;
