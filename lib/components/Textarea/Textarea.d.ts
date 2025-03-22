import React from "react";
import { ColorSchemes, Size } from "../../types/theme";
declare const Textarea: React.ForwardRefExoticComponent<{
    label?: string;
    labelClass?: string;
    type?: ColorSchemes;
    error?: string;
    floating?: boolean;
    inputClass?: string;
    size?: Size;
    helpText?: string;
    bgAlpha?: number;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement> & React.RefAttributes<HTMLTextAreaElement>>;
export default Textarea;
