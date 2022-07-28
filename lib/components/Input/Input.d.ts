import React from "react";
export interface IInputInstance {
    setError: React.Dispatch<React.SetStateAction<string>>;
}
declare const Input: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & {
    label?: string | undefined;
    labelClass?: string | undefined;
    type?: "textarea" | "default" | "floating" | "floating-textarea" | undefined;
    htmlType?: string | undefined;
    error?: string | undefined;
} & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLInputElement | HTMLTextAreaElement | IInputInstance | null>>;
export default Input;
