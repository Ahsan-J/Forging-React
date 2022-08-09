import React from 'react';
import { ColorSchemes } from '../../types/Color';
declare type propTypes = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    type?: ColorSchemes;
    striped?: boolean;
    animated?: boolean;
    progress?: number;
    total?: number;
};
export interface IProgressInstance {
    setProgress: React.Dispatch<React.SetStateAction<number>>;
    progress: number;
    unsafeShowProgress: (p: number) => void;
}
declare const Progress: React.ForwardRefExoticComponent<propTypes & React.RefAttributes<IProgressInstance>>;
export default Progress;
