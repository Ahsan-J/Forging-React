import { ColorSchemes } from "../../types/theme";
type propType = {
    width?: number;
    height?: number;
    type?: ColorSchemes;
    rounded?: boolean;
    bgAlpha?: number;
};
export declare const useStyles: (props?: propType) => {
    resizable: object;
    resizers: object;
    resizer: object;
    top_left: object;
    top_right: object;
    bottom_left: object;
    bottom_right: object;
};
export {};
