import { ObjectType } from "../types/app";
export declare class JsonObject<T extends ObjectType> {
    private json?;
    constructor(json: T);
    private getNestedKeys;
    private traverseData;
    query(masterKey: string, obj?: T): any;
}
