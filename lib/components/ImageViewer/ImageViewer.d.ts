import { IModalRef } from '..';
import React from 'react';
declare type propTypes = {
    className?: string;
    style?: React.CSSProperties;
    id?: string;
    show?: boolean;
    showFooter?: boolean;
    showHeader?: boolean;
    images?: Array<File | string>;
    useFetch?: boolean;
    description?: React.ReactNode | string | null;
    header?: Array<HeadersInit> | HeadersInit | undefined;
    onBackdrop?: ((event?: Event, ref?: React.Ref<IModalRef>) => boolean | void);
};
export interface IImageViewer {
    showModal: (state: boolean, imgSrcSet?: propTypes['images']) => void;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    setImages: React.Dispatch<React.SetStateAction<Array<string | File>>>;
    downloadImageAtIndex: (index: number) => void;
}
declare const ImageViewer: React.ForwardRefExoticComponent<propTypes & React.RefAttributes<IImageViewer>>;
export default ImageViewer;
