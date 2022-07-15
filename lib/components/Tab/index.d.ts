/// <reference types="react" />
import * as Tab from './Tab';
export declare type TabItemType = Tab.TabItemType;
declare const _default: import("react").ForwardRefExoticComponent<Pick<import("react").PropsWithChildren<{
    className?: string | undefined;
    data: Tab.TabItemType;
    id?: string | undefined;
    style?: import("react").CSSProperties | undefined;
    ref?: import("react").Ref<HTMLDivElement> | undefined;
    onTabClose?: ((key: string) => void) | undefined;
    onAddTab?: ((key: string) => void) | undefined;
}>, "data" | "style" | "className" | "children" | "id" | "onTabClose" | "onAddTab"> & import("react").RefAttributes<HTMLDivElement>>;
export default _default;
