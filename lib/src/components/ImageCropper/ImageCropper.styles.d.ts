import { ColorSchemes } from "../../types/theme";
type propType = {
    type?: ColorSchemes;
    rounded?: boolean;
    bgAlpha?: number;
};
export declare const useStyles: (props?: propType) => {
    container: object;
    uploadingContainer: object;
    dragHover: object;
    previewImage: object;
    imageIcon: object;
    titleHeading: object;
    body: object;
    footerContainer: object;
};
export {};
