import React from 'react';
import { IconNames } from '../Icon';
import { ColorSchemes } from '../../types/Color';
interface propTypes {
    className?: string;
    style?: React.CSSProperties;
    id?: string;
    multiple?: boolean;
    files?: Array<File>;
    name?: HTMLInputElement['name'];
    title?: string;
    accept?: Array<string>;
    type?: ColorSchemes;
    iconName?: IconNames;
    showList?: boolean;
    outline?: boolean;
    block?: boolean;
    disabled?: boolean;
    loader?: boolean;
    size?: "normal" | "small" | "large";
    onChange?: (files: Array<File>) => void;
    error?: string;
}
declare const Uploader: React.NamedExoticComponent<propTypes>;
export default Uploader;
