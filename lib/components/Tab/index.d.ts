import Tab from './Tab';
export declare const TabHead: import("react").NamedExoticComponent<import("react").PropsWithChildren<{
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    name: string;
    active?: boolean;
    onTabClick?: (name: string) => void;
    type?: import("..").ColorSchemes;
}>>;
export declare const TabPane: import("react").NamedExoticComponent<import("react").PropsWithChildren<{
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    name: string;
}>>;
export default Tab;
