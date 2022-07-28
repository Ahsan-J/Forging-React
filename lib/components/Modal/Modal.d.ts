import React from 'react';
export interface IModalRef {
    showModal: React.Dispatch<React.SetStateAction<boolean>>;
}
declare type propTypes = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    onDismiss?: () => void;
    animationDirection?: "right" | "left" | "top" | "bottom";
    showChildren?: boolean;
    wrapper?: keyof HTMLElementTagNameMap;
    onBackdrop?: (event?: Event, ref?: React.Ref<IModalRef>) => void;
    show?: boolean;
};
declare const Modal: React.ForwardRefExoticComponent<propTypes & {
    children?: React.ReactNode;
} & React.RefAttributes<IModalRef>>;
export default Modal;
