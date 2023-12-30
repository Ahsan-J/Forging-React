import React from 'react';
import TabHead from './TabHead';
import { ColorSchemes } from '../../types/theme';
type propTypes = {
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    active?: string;
    onChange?: (active: string) => void;
    strategy?: 'hide' | 'remove';
    renderCustomLabel?: (labelProps: React.ComponentProps<typeof TabHead>) => React.ReactNode;
    type?: ColorSchemes;
};
declare const Tab: React.NamedExoticComponent<React.PropsWithChildren<propTypes>>;
export default Tab;
