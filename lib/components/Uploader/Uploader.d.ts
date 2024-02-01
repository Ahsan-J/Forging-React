import React from 'react';
import { IconNames } from '../Icon';
import { ColorSchemes, Size } from '../../types/theme';
interface propTypes {
    className?: string;
    style?: React.CSSProperties;
    id?: string;
    multiple?: boolean;
    files?: Array<File>;
    name?: string;
    title?: string;
    accept?: Array<string>;
    type?: ColorSchemes;
    iconName?: IconNames;
    showList?: boolean;
    outline?: boolean;
    block?: boolean;
    disabled?: boolean;
    loader?: boolean;
    size?: Size;
    onChange?: (files: Array<File>) => void;
    error?: string;
    bgAlpha?: number;
}
declare const Uploader: React.NamedExoticComponent<propTypes>;
export default Uploader;
