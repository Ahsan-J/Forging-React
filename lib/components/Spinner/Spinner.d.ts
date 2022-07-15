import React from 'react';
import { ColorSchemes } from '../../types/Color';
export interface ISpinnerInstance {
    setLoader: React.Dispatch<React.SetStateAction<boolean>>;
}
declare type propTypes = {
    id?: string;
    className?: string;
    ref?: React.Ref<ISpinnerInstance>;
    style?: React.CSSProperties;
    loader?: boolean;
    spinDuration?: number;
    type?: ColorSchemes;
    size?: "small" | "normal" | "large";
};
declare const Spinner: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<propTypes>, "type" | "size" | "loader" | "style" | "className" | "children" | "id" | "spinDuration"> & React.RefAttributes<ISpinnerInstance>>;
export default Spinner;
