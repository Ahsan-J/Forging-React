import { ObjectType } from "../types/app";
import { ValidationData, ValidationKeys, ValidationResult } from "./validationType";
export declare class Validator<T extends ObjectType> {
    keys?: ValidationKeys<T>;
    constructor(keys: ValidationKeys<T>);
    validate(data: ValidationData<T>, keys?: ValidationKeys<T> | undefined): ValidationResult<T>;
    assert<K extends keyof T>(key: K, value: T[K] extends ObjectType ? ValidationData<T[K]> : unknown): string | true;
}
