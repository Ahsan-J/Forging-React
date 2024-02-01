import React from 'react';
import { Size } from "../../types/theme";
type propTypes = {
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    bgAlpha?: number;
    size?: Size;
};
declare const Card: React.NamedExoticComponent<React.PropsWithChildren<propTypes>>;
export default Card;
