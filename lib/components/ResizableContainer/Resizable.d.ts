import React from "react";
import { ColorSchemes } from "../../types/Color";
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
}
export interface IResizableRef {
    getData: () => DOMRect | null;
}
declare const ResizableContainer: React.ForwardRefExoticComponent<propTypes & React.RefAttributes<IResizableRef>>;
export default ResizableContainer;
