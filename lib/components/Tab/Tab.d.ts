import React from 'react';
declare type propTypes = {
    className?: string;
    data: TabItemType;
    id?: string;
    style?: React.CSSProperties;
    ref?: React.Ref<HTMLDivElement>;
    onTabClose?: (key: string) => void;
    onAddTab?: (key: string) => void;
};
export declare type TabItemType = {
    [key in string]: (() => JSX.Element | null) | JSX.Element | null;
};
declare const Tab: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<propTypes>, "data" | "style" | "className" | "children" | "id" | "onTabClose" | "onAddTab"> & React.RefAttributes<HTMLDivElement>>;
export default Tab;
