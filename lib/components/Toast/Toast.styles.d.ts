type StyleProp = {
    direction?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-middle" | "bottom-middle";
    show?: boolean;
};
export declare const useStyles: (props: StyleProp) => {
    sectionWrapper: object;
    body: object;
    container: object;
    progress: object;
    closeBtn: object;
};
export {};
