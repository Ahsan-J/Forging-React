import React from 'react';
import { ColorSchemes } from '../../types/Color';
import { IconNames } from '../Icon';
declare type propTypes = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    type?: ColorSchemes;
    onDismiss?: () => void;
    title: string;
    show?: boolean;
    renderIcon?: (iconName?: IconNames) => React.ReactNode;
    autoDismissTimeout?: number;
};
declare const Alert: React.ForwardRefExoticComponent<propTypes & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export default Alert;
