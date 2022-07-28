import React from "react";
import { ColorSchemes } from "../../types/Color";
declare type propTypes = {
    onRemove?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
    className?: string;
    style?: React.CSSProperties;
    type?: ColorSchemes;
    rounded?: boolean;
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
declare const Badge: React.NamedExoticComponent<React.PropsWithChildren<propTypes>>;
export default Badge;
