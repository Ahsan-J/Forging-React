import { ColorSchemes, Size } from "../../types/theme";
type propType = {
    type?: ColorSchemes;
    rounded?: boolean;
    bgAlpha?: number;
    size?: Size;
};
export declare const useStyles: (props?: propType) => {
    container: object;
    closeBtn: object;
    closeIcon: object;
};
export {};
