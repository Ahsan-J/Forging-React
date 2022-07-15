import React from 'react';
import { ColorSchemes } from '../../types/Color';
declare type propTypes = {
    id?: string;
    className?: string;
    ref?: React.Ref<HTMLDivElement>;
    style?: React.CSSProperties;
    onDismiss?: () => void;
    title: string;
    show: boolean;
    type?: ColorSchemes;
    animationDirection?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    autoDismissTimeout?: number;
};
declare const Toast: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<propTypes>, "type" | "animationDirection" | "style" | "title" | "className" | "children" | "id" | "show" | "onDismiss" | "autoDismissTimeout"> & React.RefAttributes<HTMLDivElement>>;
export default Toast;
