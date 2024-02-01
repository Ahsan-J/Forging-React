import { ColorSchemes, Size } from "../../types/theme";
type propType = {
    type?: ColorSchemes;
    size?: Size;
    bgAlpha?: number;
};
export declare const useStyles: (props?: propType) => {
    timeline: object;
    container: object;
    left: object;
    right: object;
    content: object;
};
export {};
