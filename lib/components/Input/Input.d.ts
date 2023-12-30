import React, { InputHTMLAttributes } from "react";
import { ColorSchemes, Size } from "../../types/theme";
declare const Input: (props: {
    label?: string | undefined;
    labelClass?: string | undefined;
    type?: ColorSchemes | undefined;
    htmlType?: InputHTMLAttributes<HTMLInputElement>['type'];
    error?: string | boolean | undefined;
    floating?: boolean | undefined;
    inputClass?: string | undefined;
    size?: Size | undefined;
    helpText?: string | undefined;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & React.RefAttributes<HTMLInputElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export default Input;
