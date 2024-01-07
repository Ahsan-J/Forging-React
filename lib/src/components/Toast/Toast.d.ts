import React from 'react';
import { ColorSchemes } from '../../types/theme';
type propTypes = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    onDismiss?: () => void;
    title?: React.ReactNode | string;
    show?: boolean;
    type?: ColorSchemes;
    direction?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-middle" | "bottom-middle";
    autoDismissTimeout?: number;
    progress?: boolean;
};
type showToastParameter = {
    show?: propTypes['show'];
    title: propTypes['title'];
    body?: React.ReactNode | string;
    autoDismissTimeout?: propTypes['autoDismissTimeout'];
    type?: propTypes['type'];
};
export interface IToastRef {
    showToast: (param: showToastParameter) => void;
}
declare const Toast: (props: propTypes & {
    children?: React.ReactNode;
} & React.RefAttributes<IToastRef>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export default Toast;
