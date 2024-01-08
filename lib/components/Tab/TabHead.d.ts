import React from 'react';
import { ColorSchemes } from '../../types/theme';
type propTypes = {
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    name: string;
    active?: boolean;
    onTabClick?: (name: string) => void;
    type?: ColorSchemes;
};
declare const TabHead: React.NamedExoticComponent<React.PropsWithChildren<propTypes>>;
export default TabHead;
