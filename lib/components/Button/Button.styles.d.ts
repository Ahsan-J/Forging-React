import { ColorSchemes, Size } from "../../types/theme";
type propType = {
    type?: ColorSchemes;
    rounded?: boolean;
    bgAlpha?: number;
    outline?: boolean;
    block?: boolean;
    size?: Size;
};
export declare const useStyles: (props: propType) => {
    container: object;
    active: object;
    disabled: object;
    loader: object;
};
export {};
