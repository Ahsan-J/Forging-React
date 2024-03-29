import { ValidationFunction } from "./validationType";
export declare function isEmail(message?: string): ValidationFunction;
export declare function isString(message?: string): ValidationFunction;
export declare function isEmpty(message?: string): (value: unknown) => string | true;
export declare function isMax(maxValue: number | string, message?: string): ValidationFunction;
export declare function isMin(minValue: number | string, message?: string): ValidationFunction;
export declare function isAlphaNumeric(message?: string): ValidationFunction;
export declare function isNumeric(message?: string): ValidationFunction;
export declare function isLowerCase(message?: string, minLimit?: number): ValidationFunction;
export declare function isUpperCase(message?: string, minLimit?: number): ValidationFunction;
export declare function isAlphabet(message?: string): ValidationFunction;
export declare function isMatchingRegex(regex: RegExp, message?: string): ValidationFunction;
export declare function isEqual(match: unknown, message?: string): ValidationFunction;
export declare function isBoolean(message?: string): ValidationFunction;
export declare function isBlob(message?: string): ValidationFunction;
export declare function isArray(message?: string): ValidationFunction;
export declare function isRequired(message?: string): ValidationFunction;
export declare function isMemberOf(list: Array<unknown>, message?: string): (value: unknown) => string | true;
