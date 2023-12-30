/// <reference types="react" />
import Tab from './Tab';
export declare const TabHead: import("react").NamedExoticComponent<import("react").PropsWithChildren<{
    className?: string | undefined;
    id?: string | undefined;
    style?: import("react").CSSProperties | undefined;
    name: string;
    active?: boolean | undefined;
    onTabClick?: ((name: string) => void) | undefined;
    type?: import("..").ColorSchemes | undefined;
}>>;
export declare const TabPane: import("react").NamedExoticComponent<import("react").PropsWithChildren<{
    className?: string | undefined;
    id?: string | undefined;
    style?: import("react").CSSProperties | undefined;
    name: string;
}>>;
export default Tab;
