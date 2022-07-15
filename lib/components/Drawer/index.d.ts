/// <reference types="react" />
import * as Drawer from './Drawer';
export declare type DrawerRef = Drawer.DrawerRef;
declare const _default: import("react").ForwardRefExoticComponent<Pick<import("react").PropsWithChildren<{
    id?: string | undefined;
    className?: string | undefined;
    ref?: import("react").Ref<Drawer.DrawerRef> | undefined;
    style?: import("react").CSSProperties | undefined;
    onOpen?: ((event: import("react").MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
}>, "style" | "className" | "children" | "id" | "onOpen"> & import("react").RefAttributes<Drawer.DrawerRef>>;
export default _default;
