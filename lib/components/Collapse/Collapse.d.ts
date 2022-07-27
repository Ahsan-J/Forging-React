import React from 'react';
export interface ICollapseRef {
    collapse: React.Dispatch<React.SetStateAction<boolean>>;
}
interface propTypes {
    className?: string;
    style?: React.CSSProperties;
    title?: string | (() => JSX.Element | null) | JSX.Element | null;
    collapse?: boolean;
}
declare const Collapse: React.ForwardRefExoticComponent<propTypes & {
    children?: React.ReactNode;
} & React.RefAttributes<ICollapseRef>>;
export default Collapse;
