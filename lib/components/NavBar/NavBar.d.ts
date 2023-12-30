import React from 'react';
import { ColorSchemes } from '../../types/theme';
type navBarSize = "large" | "small" | "medium" | "x-large" | "xx-large";
type propTypes = {
    className?: string;
    id: string;
    style?: React.CSSProperties;
    type?: ColorSchemes;
    size?: navBarSize;
    fixed?: "top" | "bottom";
    theme?: "light" | "dark";
};
declare const NavBar: (props: propTypes & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export default NavBar;
