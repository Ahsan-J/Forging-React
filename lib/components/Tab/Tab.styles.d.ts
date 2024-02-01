import { ColorSchemes } from '../../types/theme';
type propType = {
    type?: ColorSchemes;
    bgAlpha?: number;
};
export declare const useStyles: (props?: propType) => {
    container: object;
    headerWrapper: object;
    tabHead: object;
    tabHeadActive: object;
    tabPaneContainer: object;
};
export {};
