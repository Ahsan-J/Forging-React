import React from 'react';
import { ColorSchemes } from '../../types/Color';
declare type propTypes = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    onDismiss?: () => void;
    title?: React.ReactNode | string;
    show?: boolean;
    type?: ColorSchemes;
    direction?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    autoDismissTimeout?: number;
    progress?: boolean;
};
declare type showToastParameter = {
    show?: propTypes['show'];
    title: propTypes['title'];
    body: React.ReactNode | string;
    autoDismissTimeout?: propTypes['autoDismissTimeout'];
    type?: propTypes['type'];
};
export interface IToastRef {
    showToast: (param: showToastParameter) => void;
}
declare const Toast: React.ForwardRefExoticComponent<propTypes & {
    children?: React.ReactNode;
} & React.RefAttributes<IToastRef>>;
export default Toast;
