import { Size } from "../../types/theme";
type propType = {
    clickable?: boolean;
    size?: Size;
    bgAlpha?: number;
};
export declare const useStyles: (props?: propType) => {
    container: object;
    tableRowClass: object;
    loadingContainer: object;
    hoverRow: object;
    pagination: object;
};
export {};
