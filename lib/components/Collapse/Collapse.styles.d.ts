import { ColorSchemes } from "../../types/theme";
type propType = {
    type?: ColorSchemes;
    collapse: boolean;
    bgAlpha?: number;
};
export declare const useStyles: (props?: propType) => {
    collapsible: object;
    content: object;
    titleContainer: object;
};
export {};
