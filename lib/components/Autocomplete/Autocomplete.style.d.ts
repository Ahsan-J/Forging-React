import { ColorSchemes, Size } from "../../types/theme";
type propType = {
    type?: ColorSchemes;
    bgAlpha?: number;
    errorText?: string;
    size?: Size;
    floating?: boolean;
};
export declare const useStyles: (props?: propType) => {
    container: object;
    autoCompleteInputContainer: object;
    input: object;
    valueFilledInput: object;
    dropdown: object;
    label: object;
    textBox: object;
};
export {};
