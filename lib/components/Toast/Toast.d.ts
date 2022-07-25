import React from 'react';
import { ColorSchemes } from '../../types/Color';
declare type propTypes = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    onDismiss?: () => void;
    title: string;
    show: boolean;
    type?: ColorSchemes;
    animationDirection?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    autoDismissTimeout?: number;
};
declare const Toast: React.ForwardRefExoticComponent<propTypes & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export default Toast;
