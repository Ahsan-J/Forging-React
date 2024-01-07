import { ColorSchemes, Size } from "../../types/theme";
type propType = {
    type?: ColorSchemes;
    errorText?: string;
    placeholder?: string;
    bgAlpha?: number;
    size?: Size;
};
export declare const useStyles: (props?: propType) => {
    label: object;
    floatingLabel: object;
    normalLabel: object;
    input: object;
    floatingInput: object;
    errorFeedback: object;
    helpFeedback: object;
};
export {};
