import React, { InputHTMLAttributes } from "react";
import { ColorSchemes, Size } from "../../types/theme";
declare const Input: (props: {
    label?: string;
    labelClass?: string;
    type?: ColorSchemes;
    htmlType?: InputHTMLAttributes<HTMLInputElement>["type"];
    error?: boolean | string;
    floating?: boolean;
    inputClass?: string;
    size?: Size;
    helpText?: string;
    bgAlpha?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & React.RefAttributes<HTMLInputElement>) => React.ReactElement | null;
export default Input;
