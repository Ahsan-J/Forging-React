import React from "react";
declare type propTypes<T = any> = {
    debounce?: number;
    isReverse?: boolean;
    hasMore?: boolean;
    threshold?: number;
    data: Array<T>;
    onEndReach?: (e: Event, page: number) => void;
    renderItem: (item: T, index: number) => React.ReactNode;
};
export interface IListInstance {
    page: number;
    debounce: number;
}
declare const InfiniteList: React.ForwardRefExoticComponent<propTypes<any> & {
    children?: React.ReactNode;
} & React.RefAttributes<IListInstance>>;
export default InfiniteList;
