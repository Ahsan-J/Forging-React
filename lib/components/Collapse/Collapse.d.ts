import React from 'react';
import { ColorSchemes } from '../../types/theme';
export interface ICollapseRef {
    collapse: React.Dispatch<React.SetStateAction<boolean>>;
}
type propTypes = {
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    collapse?: boolean;
    title?: React.ReactNode | string;
    onCollapse?: (state: boolean) => void;
    disabled?: boolean;
    type?: ColorSchemes;
};
declare const Collapse: (props: propTypes & {
    children?: React.ReactNode;
} & React.RefAttributes<ICollapseRef>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export default Collapse;
