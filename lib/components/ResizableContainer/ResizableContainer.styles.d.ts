import { ColorSchemes } from "../../types/Color";
declare type StyleProp = {
    width?: number;
    height?: number;
    type?: ColorSchemes;
    rounded?: boolean;
};
declare const _default: (props?: StyleProp) => {
    resizable: object;
    resizers: object;
    resizer: object;
    top_left: object;
    top_right: object;
    bottom_left: object;
    bottom_right: object;
};
export default _default;
