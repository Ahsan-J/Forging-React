import React from 'react';
import { IThemeConfig } from '../../types/theme';
type propTypes = {
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    config?: IThemeConfig;
};
declare const ThemeProvider: React.NamedExoticComponent<React.PropsWithChildren<propTypes>>;
export default ThemeProvider;
