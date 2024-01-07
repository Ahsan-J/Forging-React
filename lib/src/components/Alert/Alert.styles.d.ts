import { ColorSchemes } from "../../types/theme";
type propTypes = {
    autoDismissTimeout?: number;
    type?: ColorSchemes;
};
export declare const useStyles: (props?: propTypes) => {
    container: object;
    iconStyle: object;
    innerContainer: object;
};
export {};
