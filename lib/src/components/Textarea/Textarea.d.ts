import React from "react";
import { ColorSchemes, Size } from "../../types/theme";
declare const Textarea: React.ForwardRefExoticComponent<{
    label?: string | undefined;
    labelClass?: string | undefined;
    type?: ColorSchemes | undefined;
    error?: string | undefined;
    floating?: boolean | undefined;
    inputClass?: string | undefined;
    size?: Size | undefined;
    helpText?: string | undefined;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement> & React.RefAttributes<HTMLTextAreaElement>>;
export default Textarea;
