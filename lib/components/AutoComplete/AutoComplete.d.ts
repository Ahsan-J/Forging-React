import React from "react";
import { IDropdownItem } from "../Dropdown/Dropdown";
import { ColorSchemes } from "../../types/Color";
declare type propTypes = {
    className?: string;
    label?: string;
    labelClass?: string;
    options?: {
        [key: string]: IDropdownItem;
    };
    style?: React.CSSProperties;
    name?: string;
    multiple?: boolean;
    type?: ColorSchemes;
    badgeClass?: string;
    highlightColor?: string;
    placeholder?: HTMLInputElement['placeholder'];
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onItemClick?: (key: string, value: IDropdownItem) => void;
    renderDropdownItem?: (value: IDropdownItem, key: string) => React.ReactElement;
    error?: string;
    values?: Array<string>;
};
declare const AutoComplete: React.NamedExoticComponent<propTypes>;
export default AutoComplete;
