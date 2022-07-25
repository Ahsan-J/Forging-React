import React from 'react';
declare type propTypes = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
};
declare const Stepper: React.ForwardRefExoticComponent<propTypes & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export default Stepper;
