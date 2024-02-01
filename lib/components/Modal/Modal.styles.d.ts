type propType = {
    animationDirection?: "top" | "bottom" | "left" | "right";
    show?: boolean;
    bgAlpha?: number;
};
export declare const useStyles: (props?: propType) => {
    backdropShow: object;
    backdropContainer: object;
    modalInnerContainer: object;
    buttonDismiss: object;
};
export {};
