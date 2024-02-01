import React from 'react';
import { ColorSchemes } from '../../types/theme';
interface propTypes {
    className?: string;
    style?: React.CSSProperties;
    src?: File | string;
    autoPlay?: boolean;
    fastDiff?: number;
    controls?: boolean;
    onInfo?: () => void;
    title?: string;
    name?: HTMLInputElement['value'];
    type?: ColorSchemes;
    bgAlpha?: number;
}
declare const Video: React.ForwardRefExoticComponent<propTypes & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLVideoElement>>;
export default Video;
