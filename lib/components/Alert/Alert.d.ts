import React from 'react';
import { ColorSchemes } from '../../types/Color';
declare type propTypes = {
    id?: string;
    className?: string;
    ref?: React.Ref<HTMLDivElement>;
    style?: React.CSSProperties;
    type?: ColorSchemes;
    onDismiss?: () => void;
    title: string;
    autoDismissTimeout?: number;
};
declare const Alert: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<propTypes>, "type" | "style" | "title" | "className" | "children" | "id" | "onDismiss" | "autoDismissTimeout"> & React.RefAttributes<HTMLDivElement>>;
export default Alert;
