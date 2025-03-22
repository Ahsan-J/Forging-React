import React from 'react';
export interface IModalRef {
    showModal: React.Dispatch<React.SetStateAction<boolean>>;
}
type propTypes = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    onDismiss?: () => void;
    animationDirection?: "right" | "left" | "top" | "bottom";
    showChildren?: boolean;
    wrapper?: keyof HTMLElementTagNameMap;
    onBackdrop?: (event?: Event, ref?: React.Ref<IModalRef>) => boolean | void;
    show?: boolean;
    bgAlpha?: number;
};
declare const Modal: (props: propTypes & {
    children?: React.ReactNode | undefined;
} & React.RefAttributes<IModalRef>) => React.ReactElement | null;
export default Modal;
