import { ColorSchemes, Size } from "../../types/theme";
type propType = {
    type?: ColorSchemes;
    bgAlpha?: number;
    size?: Size;
};
export declare const useStyles: (props?: propType) => {
    container: object;
    itemContainer: object;
    slideshow_container: object;
    actionButtons: object;
    next: object;
    prev: object;
    numberText: object;
    dotContainer: object;
    dot: object;
    activeDot: object;
    fade: object;
};
export {};
