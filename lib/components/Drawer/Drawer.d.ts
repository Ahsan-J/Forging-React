import React from 'react';
declare type propTypes = {
    id?: string;
    className?: string;
    ref?: React.Ref<DrawerRef>;
    style?: React.CSSProperties;
    onOpen?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
};
export declare type DrawerRef = {
    openDrawer: () => void;
    closeDrawer: () => void;
};
declare const Drawer: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<propTypes>, "style" | "className" | "children" | "id" | "onOpen"> & React.RefAttributes<DrawerRef>>;
export default Drawer;
