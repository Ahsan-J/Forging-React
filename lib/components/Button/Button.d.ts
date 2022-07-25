import React from 'react';
import { ColorSchemes } from '../../types/Color';
import { IconNames } from '../Icon';
declare type propTypes = {
    id?: string;
    className?: string;
    outline?: boolean;
    style?: React.CSSProperties;
    type?: ColorSchemes;
    disabled?: boolean;
    size?: "large" | "small" | "normal";
    block?: boolean;
    iconName?: IconNames;
    loader?: boolean;
    htmlType?: "button" | "submit" | "reset";
    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
};
export interface IButtonRef {
    setLoader: (loader: boolean) => void;
    isLoading: () => boolean;
}
declare const Button: React.ForwardRefExoticComponent<propTypes & {
    children?: React.ReactNode;
} & React.RefAttributes<IButtonRef & HTMLButtonElement>>;
export default Button;
