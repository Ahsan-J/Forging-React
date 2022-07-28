import React from 'react';
declare type propTypes = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    onOpen?: () => void;
    onClose?: () => void;
    show?: boolean;
    width?: string;
    title?: React.ReactNode;
};
export interface IDrawerRef {
    open: () => void;
    close: () => void;
    toggle: () => void;
}
declare const Drawer: React.ForwardRefExoticComponent<propTypes & {
    children?: React.ReactNode;
} & React.RefAttributes<IDrawerRef>>;
export default Drawer;
