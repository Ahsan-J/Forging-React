import { ColorSchemes, Size } from '../../types/theme';
type propType = {
    type?: ColorSchemes;
    rounded?: boolean;
    size?: Size;
    bgAlpha?: number;
};
export declare const useStyles: (props?: propType) => {
    container: object;
    button: object;
};
export {};
