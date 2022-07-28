import React from 'react';
import { IconNames } from '.';
declare type propTypes = {
    className?: string;
    style?: React.CSSProperties;
    name: IconNames;
    width?: string | number;
    height?: string | number;
    fill?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
declare const Icon: React.NamedExoticComponent<propTypes>;
export default Icon;
