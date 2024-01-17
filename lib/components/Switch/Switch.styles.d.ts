import { ColorSchemes, Size } from "../../types/theme";
type propType = {
    size?: Size;
    type?: ColorSchemes;
    bgAlpha?: number;
};
export declare const useStyles: (props?: propType) => {
    switch: object;
    checked: object;
    offscreen: object;
};
export {};
