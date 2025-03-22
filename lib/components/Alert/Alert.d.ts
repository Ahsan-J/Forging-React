import React from 'react';
import { ColorSchemes } from '../../types/theme';
import { IconNames } from '../Icon';
type propTypes = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    type?: ColorSchemes;
    onDismiss?: () => void;
    show?: boolean;
    icon?: IconNames | React.ReactNode | (() => React.ReactNode);
    autoDismissTimeout?: number;
};
declare const Alert: (props: propTypes & {
    children?: React.ReactNode | undefined;
} & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export default Alert;
