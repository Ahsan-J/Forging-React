import React from 'react';
declare type propTypes = {
    className?: string;
    style?: React.CSSProperties;
    id?: string;
    show?: boolean;
    showFooter?: boolean;
    showHeader?: boolean;
    images?: Array<File | string>;
    description?: React.ReactNode | string | null;
};
export interface IImageViewer {
    showModal: (state: boolean, imgSrcSet?: propTypes['images']) => void;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    setImages: React.Dispatch<React.SetStateAction<string[]>>;
    downloadImageAtIndex: (index: number) => void;
}
declare const ImageViewer: React.ForwardRefExoticComponent<propTypes & React.RefAttributes<IImageViewer>>;
export default ImageViewer;
