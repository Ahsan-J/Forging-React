import { CSSProperties } from "react";
type propTypes<T = unknown> = {
    id?: string;
    className?: string;
    style?: CSSProperties;
    debounce?: number;
    isReverse?: boolean;
    hasMore?: boolean;
    threshold?: number;
    data?: Array<T>;
    renderItem?: (item: T, index: number) => React.ReactNode;
    wrapper?: keyof HTMLElementTagNameMap;
    onEndReach?: (e: Event, page: number) => void;
    page?: number;
};
declare function InfiniteList<T = unknown>(props: propTypes<T>): import("react/jsx-runtime").JSX.Element;
export default InfiniteList;
