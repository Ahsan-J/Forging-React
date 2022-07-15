import React from 'react';
declare type propTypes = {
    id?: string;
    className?: string;
    ref?: React.Ref<HTMLDivElement>;
    style?: React.CSSProperties;
};
declare const Stepper: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<propTypes>, "style" | "className" | "children" | "id"> & React.RefAttributes<HTMLDivElement>>;
export default Stepper;
