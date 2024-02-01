import { ColorSchemes, Size } from "../../types/theme";
type propTypes = {
    autoDismissTimeout?: number;
    type?: ColorSchemes;
    bgAlpha?: number;
    size?: Size;
};
export declare const useStyles: (props?: propTypes) => {
    container: object;
    iconStyle: object;
    innerContainer: object;
};
export {};
