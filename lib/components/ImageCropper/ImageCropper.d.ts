import React from 'react';
import { ColorSchemes } from '../../types/theme';
import { IModalRef } from '../Modal';
type propTypes = {
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
    bgAlpha?: number;
};
export interface ICropperRef {
    showModal: IModalRef['showModal'];
    outputImageFile?: File | null;
}
declare const ImageCropper: (props: propTypes & React.RefAttributes<ICropperRef>) => React.ReactElement | null;
export default ImageCropper;
