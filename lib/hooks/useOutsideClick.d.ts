/// <reference types="react" />
declare const useOutsideClick: <T = HTMLDivElement>(handler: (e: MouseEvent) => void) => import("react").RefObject<T>;
export default useOutsideClick;
