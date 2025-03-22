import { IModalRef } from '../Modal';
import React from 'react';
import { ColorSchemes } from '../../types/theme';
type propTypes = {
    className?: string;
    type?: ColorSchemes;
    style?: React.CSSProperties;
    id?: string;
    show?: boolean;
    showFooter?: boolean;
    showHeader?: boolean;
    images?: Array<File | string | Blob>;
    index?: number;
    description?: React.ReactNode | string | null;
    onBackdrop?: ((event?: Event, ref?: React.Ref<IModalRef>) => boolean | void);
};
export interface IImageViewer {
    showModal: (state: boolean, imgSrcSet?: propTypes['images']) => void;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    downloadImageAtIndex: (index: number) => void;
}
declare const ImageViewer: (props: propTypes & React.RefAttributes<IImageViewer>) => React.ReactElement | null;
export default ImageViewer;
