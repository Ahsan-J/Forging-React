import { ColorSchemes, Size } from "../../types/theme";
type propType = {
    type?: ColorSchemes;
    bgAlpha?: number;
    size?: Size;
};
export declare const useStyles: (props?: propType) => {
    container: object;
    collapsible: object;
    accordionItem: object;
    activeAccordionItem: object;
    componentContainer: object;
};
export {};
