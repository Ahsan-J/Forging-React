import React from "react";
import { ColorSchemes } from "../../types/theme";
interface propTypes {
    id?: string;
    style?: React.CSSProperties;
    className?: string;
    minimumWidth?: number;
    minimumHeight?: number;
    width?: number;
    height?: number;
    allowDrag?: boolean;
    allowResize?: boolean;
    rounded?: boolean;
    type?: ColorSchemes;
    bgAlpha?: number;
}
export interface IResizableRef {
    getData: () => DOMRect | null;
}
declare const ResizableContainer: React.ForwardRefExoticComponent<propTypes & React.RefAttributes<IResizableRef>>;
export default ResizableContainer;
