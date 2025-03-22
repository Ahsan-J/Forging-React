import { ObjectType } from "../types/app";
/**
 * chunkArray creates a chunk of array.
 * @param {Array<T>} arr - array to creates chunk of
 * @param {number} size - size of chunks to create
 * @returns {Array<Array<T>>}
 * */
export declare const chunkArray: <T = unknown>(arr?: Array<T>, size?: number) => Array<Array<T>>;
/**
 * range creates a new numbered array.
 * @param {number} startIndex - Starting index of an array if lastIndex is specified. If lastIndex is not specified, it can act as a range length. Default to 0
 * @param {number} lastIndex - Last index of the range
 * @param {number} step - Specifies the different between each value. Defaults to 1
 * @returns {Array<number>}
 * */
export declare const range: (startIndex?: number, lastIndex?: number, step?: number) => Array<number>;
/**
 * cleanObject creates a new object from existing and removes all undefined values.
 * @param {ObjectType} obj - Object type
 * @returns {ObjectType}
 * */
export declare const cleanObject: (obj?: ObjectType) => ObjectType;
/**
 * Merge Objects together in array of objects by matching a value of specified object key.
 * @param {Array<ObjectType>} des - Target array of objects to merge objects into
 * @param {Array<ObjectType>} src - Source array of objects to merge from
 * @param {string | number | symbol} key - key of Object to match objects with for merging
 * @returns {Array<ObjectType>}
 */
export declare const mergeArrayByKey: (des?: Array<ObjectType>, src?: Array<ObjectType>, key?: string) => ObjectType[];
/**
 * groupBy groups the array of object under a value defined at key
 * @param {Array<T>} xs - Array of Object
 * @param {keyof T | ((item: T) => T[keyof T])} key - key of the object or a function that resolves to the key of the object
 * @returns {ObjectType}
 */
export declare const groupBy: <T extends ObjectType<string | number | symbol>>(xs: Array<T>, key: keyof T | ((item: T) => T[keyof T])) => { [key in T[keyof T]]?: T | T[] | undefined; };
/**
 * Converts the other types of css measurement units into pixels.
 * @param {string} measurement - A floating number with the unit of measurement to calculate from. Currently supports "rem", "em", "pt", "pc", "in" and "cm" units and convert them to pixels
 * @param {{fontSize: number}} options - options to set values for relative calculating values
 * @returns pixel value as number
 */
export declare const getNumberFromMeasuredUnit: (measurement: string, options?: {
    fontSize: number;
}) => number;
/**
 * Creates a color code from a string value. The color code is case sensitive and generates same color code for the same string value.
 * @param {string} str - The string value to create a color code from.
 * @returns the hex color code
 */
export declare const stringToColor: (str?: string) => string;
/**
 * Check whether the given color hex code is light or dark
 * @param {string} color - Color to check against whether it is dark or not
 * @returns {bool} - true if it is dark, false if it is not.
 */
export declare const colorIsDark: (color: string, alphaThreshold?: number) => boolean;
/**
 * Generates a random number between min and max values
 * @param {number} min - min bounding value to keep value greater than. Default value is 0.
 * @param {number} max - max bounding value to keep value less than. Default value is 100
 * @returns random number between min and max
 */
export declare const generateRandom: (min?: number, max?: number) => number;
/**
 * Generates a new array and remove any repeated values for the given key
 * @param {Array<unknown>} data - Array of data that need to be iterated over.
 * @param {string} key - key of object in the array to filter with.
 * @returns a new array of objects with the values filtered
 */
export declare const uniqueBy: <T extends ObjectType>(dataArray: Array<T>, key: keyof T) => T[];
/**
 * Returns a new hex code with alpha values applied
 * @param {string} hex - hex color string
 * @param {number} opacity - opacity value to apply
 */
export declare const getHexColorAlpha: (hex?: string, opacity?: number) => string;
/**
 * Iterates over two values and compares them deeply to check for equality.
 * @param {unknown} object1 - the first value to compare
 * @param {unknown} object2 - the second value to compare
 * @returns {boolean} true if the values are equal, false otherwise
 */
export declare const deepEquals: (object1: unknown, object2: unknown) => boolean;
/**
 * Modifies the function and add a simple caching mechanism over it. It returns the same value based on the argument passed
 * @param {Function} function - function to memoize
 * @returns {Function} - memoized function
 */
export declare const memoize: <T extends Array<unknown>, R = unknown>(fn: (...args: T) => R) => (...args: T) => R;
/**
 * Generates the random and unique UUID
 * @returns {string} - The unique id
 */
export declare const getUniqueId: () => string;
export declare const upperFirst: (s?: string) => string | undefined;
export declare const isBrowser: () => boolean;
export declare const toKebabCase: (s: string) => string;
export declare const toSnakeCase: (s: string) => string;
export declare const toSentenceCase: (s: string) => string;
export declare const toTitleCase: (s: string) => string;
