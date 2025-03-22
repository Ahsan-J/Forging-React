import React from 'react';
import { IconNames } from '../Icon';
import { ColorSchemes, Size } from '../../types/theme';
type propType = {
    id?: string;
    className?: string;
    outline?: boolean;
    rounded?: boolean;
    style?: React.CSSProperties;
    type?: ColorSchemes;
    link?: string;
    disabled?: boolean;
    active?: boolean;
    size?: Size;
    block?: boolean;
    leftIcon?: IconNames | React.ReactNode | (() => React.ReactNode);
    rightIcon?: IconNames | React.ReactNode | (() => React.ReactNode);
    loader?: boolean;
    htmlType?: HTMLButtonElement['type'] | "link";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
    value?: string | number | boolean;
    bgAlpha?: number;
};
export interface IButtonRef {
    setLoader: (loader: boolean) => void;
}
declare const Button: (props: propType & {
    children?: React.ReactNode | undefined;
} & React.RefAttributes<IButtonRef & HTMLButtonElement>) => React.ReactElement | null;
export default Button;
