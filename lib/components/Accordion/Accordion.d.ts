import React from 'react';
import { ColorSchemes } from '../../types/Color';
declare type propTypes = {
    className?: string;
    style?: React.CSSProperties;
    disabled?: Array<string>;
    onAccordionCollapse?: (link: string) => void;
    type?: ColorSchemes;
    accordions: {
        [title in string]: React.ReactNode;
    };
    multiple?: boolean;
    renderCustomTitle?: (title: string) => React.ReactNode;
};
declare const Accordion: React.NamedExoticComponent<propTypes>;
export default Accordion;
