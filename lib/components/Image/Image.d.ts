import React from 'react';
type propTypes = {
    alt?: React.ImgHTMLAttributes<HTMLImageElement>['alt'];
    src: string | File | Blob;
    crossOrigin?: React.ImgHTMLAttributes<HTMLImageElement>['crossOrigin'];
    loading?: React.ImgHTMLAttributes<HTMLImageElement>['loading'];
    referrerPolicy?: React.ImgHTMLAttributes<HTMLImageElement>['referrerPolicy'];
    height?: React.ImgHTMLAttributes<HTMLImageElement>['height'];
    width?: React.ImgHTMLAttributes<HTMLImageElement>['width'];
    className?: string;
    style?: React.CSSProperties;
    id?: string;
    loader?: boolean;
    onLoad?: React.ReactEventHandler<HTMLImageElement>;
    title?: React.ImgHTMLAttributes<HTMLImageElement>['title'];
};
declare const Image: React.NamedExoticComponent<propTypes>;
export default Image;
