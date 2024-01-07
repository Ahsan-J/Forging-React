import { ColorSchemes, Size } from "../../types/theme";
type propType = {
    size?: Size;
    type?: ColorSchemes;
    spinDuration?: number;
    bgAlpha?: number;
};
export declare const useStyles: (props?: propType) => {
    container: object;
    spinner: object;
};
export {};
