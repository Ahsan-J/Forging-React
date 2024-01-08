import { ColorSchemes, Size } from "../../types/theme";
type propType = {
    type?: ColorSchemes;
    size?: Size;
    rounded?: boolean;
    animated?: boolean;
    striped?: boolean;
    bgAlpha?: number;
};
export declare const useStyles: (props?: propType) => {
    container: object;
};
export {};
