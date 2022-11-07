import React from 'react';
import { IModalRef, ColorSchemes } from '..';
declare type propTypes = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    src?: string | File;
    width?: string | number;
    showUploader?: boolean;
    rounded?: boolean;
    name?: string;
    type?: ColorSchemes;
    title?: string;
    onCrop?: (output: File) => void;
};
export interface ICropperRef {
    showModal: IModalRef['showModal'];
    outputImageFile?: File | null;
}
declare const ImageCropper: React.ForwardRefExoticComponent<propTypes & React.RefAttributes<ICropperRef>>;
export default ImageCropper;
