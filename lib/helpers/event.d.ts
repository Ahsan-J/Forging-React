import { ObjectType } from "../types/app";
declare class AppEvent<T = ObjectType<unknown>> {
    private _listeners;
    constructor(event?: AppEvent<T>);
    getListeners(): Map<keyof T, ((data?: T[keyof T] | undefined) => void)[]>;
    on(str: keyof T, fn: (data?: T[typeof str]) => void): void;
    off(str: keyof T, fn: (data?: T[typeof str]) => void): void;
    offAll(str: keyof T): void;
    emit(str: keyof T, data?: T[typeof str]): void;
    addEventListener(str: keyof T, fn: (data?: T[typeof str]) => void): () => void;
    removeEventListener(str: keyof T, fn: (data?: T[typeof str]) => void): void;
    removeAllListeners(str: keyof T): void;
}
export default AppEvent;
