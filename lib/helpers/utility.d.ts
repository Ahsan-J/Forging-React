export declare const chunkArray: (arr?: Array<any>, size?: number) => any[][];
export declare const range: (startIndex?: number, lastIndex?: number, step?: number) => Array<number>;
export declare const triggerFormError: (form: HTMLFormElement | null, fields: {
    [x: string]: string;
}) => void;
export declare const unmarshalFormData: (formData: FormData) => any;
export declare const isBrowser: () => boolean;
export declare const toKebabCase: (s: string) => string | undefined;
export declare const toSnakeCase: (s: string) => string | undefined;
