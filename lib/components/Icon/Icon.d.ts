import React from 'react';
declare type propTypes = {
    className?: string;
    style?: React.CSSProperties;
    name: string;
    width?: string | number;
    height?: string | number;
    fill?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
declare const Icon: React.MemoExoticComponent<(props: React.PropsWithChildren<propTypes>) => JSX.Element>;
export default Icon;
