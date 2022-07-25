import React from 'react';
import { ColorSchemes } from '../../types/Color';
declare type navBarSize = "large" | "small" | "medium" | "x-large" | "xx-large";
declare type propTypes = {
    className?: string;
    id: string;
    style?: React.CSSProperties;
    type?: ColorSchemes;
    size?: navBarSize;
    fixed?: "top" | "bottom";
    theme?: "light" | "dark";
};
declare const NavBar: React.ForwardRefExoticComponent<propTypes & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLElement>>;
export default NavBar;
