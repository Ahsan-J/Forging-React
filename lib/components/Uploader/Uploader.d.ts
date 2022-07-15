import React from 'react';
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
    iconName?: string;
    onChange?: (files: Array<File>) => void;
}
declare const Uploader: React.MemoExoticComponent<(props: React.PropsWithChildren<propTypes>) => JSX.Element>;
export default Uploader;
