import React from "react";
declare type propTypes = {
    debounce?: number;
    isReverse?: boolean;
    hasMore?: boolean;
    threshold?: number;
    data: Array<any>;
    onEndReach?: (e: Event, page: number) => void;
    renderItem: (item: any, index: number) => JSX.Element | React.ReactText;
};
export interface IListInstance {
    page: number;
    debounce: number;
}
declare const InfiniteList: React.ForwardRefExoticComponent<propTypes & {
    children?: React.ReactNode;
} & React.RefAttributes<IListInstance>>;
export default InfiniteList;
