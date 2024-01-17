import { Size } from "../../types/theme";
import { IconNames } from "../Icon";
type propType = {
    size?: Size;
    name?: string;
    iconName?: IconNames;
};
export declare const useStyles: (props?: propType) => {
    container: object;
    image: object;
    iconContainer: object;
    button: object;
};
export {};
