import { ColorSchemes, Size } from "../../types/theme";
type propType = {
    rounded?: boolean;
    outline?: boolean;
    type?: ColorSchemes;
    bgAlpha?: number;
    size?: Size;
};
export declare const useStyles: (props?: propType) => {
    container: object;
    checkboxInput: object;
    checkMark: object;
};
export {};
