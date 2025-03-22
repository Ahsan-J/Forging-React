import React from 'react';
import { ColorSchemes, Size } from '../../types/theme';
type propTypes = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    type?: ColorSchemes;
    striped?: boolean;
    animated?: boolean;
    progress?: number;
    total?: number;
    size?: Size;
    rounded?: boolean;
    label?: string;
    bgAlpha?: number;
};
export interface IProgressInstance {
    setProgress: React.Dispatch<React.SetStateAction<number>>;
    progress: number;
    unsafeShowProgress: (p: number) => void;
}
declare const Progress: (props: propTypes & React.RefAttributes<IProgressInstance>) => React.ReactElement | null;
export default Progress;
