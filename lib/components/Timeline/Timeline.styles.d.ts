import { ColorSchemes } from "../../types/theme";
import { Size } from "../../types/theme";
type propType = {
    type?: ColorSchemes;
    size?: Size;
};
export declare const useStyles: (props?: propType) => {
    timeline: object;
    container: object;
    left: object;
    right: object;
    content: object;
};
export {};
