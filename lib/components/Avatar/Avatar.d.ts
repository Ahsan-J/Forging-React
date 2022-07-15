import React, { PropsWithChildren } from "react";
declare type propTypes = {
    id?: string;
    className?: string;
    ref?: React.Ref<HTMLDivElement>;
    style?: React.CSSProperties;
    name?: string;
    src?: string;
};
declare const Avatar: React.MemoExoticComponent<(props: PropsWithChildren<propTypes>) => JSX.Element>;
export default Avatar;
