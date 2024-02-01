import React from 'react';
import { IconNames } from '../Icon';
import { ColorSchemes, Size } from '../../types/theme';
type propType = {
    name?: IconNames;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    loader?: boolean;
    spinDuration?: number;
    type?: ColorSchemes;
    size?: Size;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    viewBox?: string;
    bgAlpha?: number;
};
export interface ISpinnerInstance {
    setLoader: React.Dispatch<React.SetStateAction<boolean>>;
}
declare const Spinner: (props: propType & React.RefAttributes<ISpinnerInstance>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export default Spinner;
