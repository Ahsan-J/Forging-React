import { ColorSchemes, Size } from "../../types/theme";
type propType = {
    type?: ColorSchemes;
    size?: Size;
    direction?: "left" | "right";
    bgAlpha?: number;
    errorText?: string;
};
export declare const useStyles: (props?: propType) => {
    container: object;
    radioButton: object;
    activeRadio: object;
    errorFeedback: object;
};
export {};
