import { ObjectType } from "../types/app";
export declare const triggerFormError: (form: HTMLFormElement | null, fields: ObjectType<string>) => void;
export declare const getFormObject: (form: HTMLFormElement | FormData | null) => ObjectType<string | number | unknown[] | ObjectType> | null;
