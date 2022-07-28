import React from 'react';
declare type propTypes = {
    className?: string;
    data: ITabItem;
    id?: string;
    style?: React.CSSProperties;
    onTabClose?: (key: string) => void;
    onAddTab?: (key: string) => void;
};
export declare type ITabItem = {
    [key in string]: (() => JSX.Element | null) | React.ReactNode;
};
declare const Tab: React.ForwardRefExoticComponent<propTypes & React.RefAttributes<HTMLDivElement>>;
export default Tab;
