import React, { PropsWithChildren } from "react";
import { ColorSchemes } from "../../types/Color";
declare type propTypes = {
    onRemove?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
    text: string;
    className?: string;
    style?: React.CSSProperties;
    type?: ColorSchemes;
    color?: ColorSchemes;
    rounded?: boolean;
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
declare const Badge: React.MemoExoticComponent<(props: PropsWithChildren<propTypes>) => JSX.Element>;
export default Badge;
