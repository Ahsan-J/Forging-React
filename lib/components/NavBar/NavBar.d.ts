import React from 'react';
import { ColorSchemes } from '../../types/Color';
declare type navBarSize = "large" | "small" | "medium" | "x-large" | "xx-large";
declare type propTypes = {
    className?: string;
    ref?: React.Ref<HTMLElement>;
    id: string;
    style?: React.CSSProperties;
    type?: ColorSchemes;
    size?: navBarSize;
    fixed?: "top" | "bottom";
    theme?: "light" | "dark";
};
declare const NavBar: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<propTypes>, "type" | "fixed" | "size" | "style" | "className" | "children" | "id" | "theme"> & React.RefAttributes<HTMLElement>>;
export default NavBar;
