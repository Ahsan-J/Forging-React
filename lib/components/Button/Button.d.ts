import React from 'react';
import { ColorSchemes } from '../../types/Color';
declare type propTypes = {
    id?: string;
    className?: string;
    outline?: boolean;
    ref?: React.Ref<IButtonInstance>;
    style?: React.CSSProperties;
    type?: ColorSchemes;
    disabled?: boolean;
    size?: "large" | "small" | "normal";
    block?: boolean;
    iconName?: string;
    htmlType?: "button" | "submit" | "reset";
    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
};
export interface IButtonInstance {
    setLoader: (loader: boolean) => void;
    getProps: () => propTypes;
    isLoading: () => boolean;
}
declare const Button: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<propTypes>, "type" | "outline" | "block" | "disabled" | "size" | "style" | "className" | "children" | "onClick" | "id" | "iconName" | "htmlType"> & React.RefAttributes<IButtonInstance & HTMLButtonElement>>;
export default Button;
