import React from 'react';
import { ColorSchemes } from '../../types/Color';
export interface ISpinnerInstance {
    setLoader: React.Dispatch<React.SetStateAction<boolean>>;
}
declare type propTypes = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    loader?: boolean;
    spinDuration?: number;
    type?: ColorSchemes;
    size?: "small" | "normal" | "large";
};
declare const Spinner: React.ForwardRefExoticComponent<propTypes & React.RefAttributes<ISpinnerInstance>>;
export default Spinner;
