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
    onChange?: (files: Array<File>) => void;
}
declare const Uploader: React.NamedExoticComponent<React.PropsWithChildren<propTypes>>;
export default Uploader;
