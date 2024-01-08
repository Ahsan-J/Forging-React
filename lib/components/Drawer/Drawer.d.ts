import React from 'react';
type propTypes = {
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
declare const Drawer: (props: propTypes & {
    children?: React.ReactNode;
} & React.RefAttributes<IDrawerRef>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export default Drawer;
