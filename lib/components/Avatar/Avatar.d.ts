import React, { PropsWithChildren } from "react";
import { IconNames } from "../Icon";
declare type propTypes = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    name?: string;
    src?: string;
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    iconName?: IconNames;
};
declare const Avatar: React.MemoExoticComponent<(props: PropsWithChildren<propTypes>) => JSX.Element>;
export default Avatar;
