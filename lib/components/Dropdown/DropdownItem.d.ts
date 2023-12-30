import React from "react";
import { IconNames } from "../Icon";
import { ColorSchemes, Size } from "../../types/theme";
type propTypes = {
    id?: string;
    className?: string;
    type?: ColorSchemes;
    style?: React.CSSProperties;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    iconLeft?: IconNames | React.ReactNode | null;
    iconRight?: IconNames | React.ReactNode | null;
    checked?: boolean;
    value?: string | number | boolean;
    onChecked?: React.ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
    onMouseEnter?: React.MouseEventHandler<HTMLLIElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLLIElement>;
    loader?: boolean;
    size?: Size;
    rounded?: boolean;
    bgAlpha?: number;
};
declare const DropdownItem: (props: propTypes & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLLIElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export default DropdownItem;
