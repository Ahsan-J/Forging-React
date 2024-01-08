import React from "react";
import { ColorSchemes, Size } from '../../types/theme';
type propType = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    name?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    checked?: boolean;
    type?: ColorSchemes;
    size?: Size;
    disabled?: boolean;
    rounded?: boolean;
    outline?: boolean;
    label?: string;
};
declare const CheckBox: React.NamedExoticComponent<propType>;
export default CheckBox;
