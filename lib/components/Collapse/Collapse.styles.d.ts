import { ColorSchemes } from "../../types/theme";
type propType = {
    type?: ColorSchemes;
    collapse: boolean;
};
export declare const useStyles: (props?: propType) => {
    collapsible: object;
    content: object;
    titleContainer: object;
};
export {};
