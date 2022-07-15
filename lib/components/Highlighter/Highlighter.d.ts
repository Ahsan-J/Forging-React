import React, { PropsWithChildren } from 'react';
declare type propType = {
    text: string;
    searchText: string;
    style?: React.CSSProperties;
    id?: string;
    className?: string;
    color?: string;
};
declare const Highlighter: React.MemoExoticComponent<(props: PropsWithChildren<propType>) => JSX.Element>;
export default Highlighter;
