import React from 'react';
import { ColorSchemes, Size } from "../../types/theme";
type AccordionCustomHeaderProp = {
    key?: string;
    disabled?: boolean;
    active?: boolean;
};
type propTypes = {
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    disabled?: Array<string>;
    onAccordionCollapse?: (accordionKey: string) => void;
    multiple?: boolean;
    active?: Array<string | undefined>;
    renderCustomTitle?: (props: AccordionCustomHeaderProp) => React.ReactNode;
    size?: Size;
    bgAlpha?: number;
    type?: ColorSchemes;
};
declare const Accordion: React.NamedExoticComponent<React.PropsWithChildren<propTypes>>;
export default Accordion;
