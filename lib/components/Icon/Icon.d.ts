import React from 'react';
import { IconNames } from '.';
type propTypes = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    name: IconNames;
    width?: string | number;
    height?: string | number;
    fill?: string;
    btnClass?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    viewBox?: string;
};
declare const Icon: React.NamedExoticComponent<propTypes>;
export default Icon;
