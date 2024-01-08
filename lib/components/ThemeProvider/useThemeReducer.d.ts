/// <reference types="react" />
import { IThemeConfig } from "../../types/theme";
declare const useThemeReducer: (initialState: IThemeConfig) => [IThemeConfig & Partial<IThemeConfig>, import("react").Dispatch<Partial<IThemeConfig>>];
export default useThemeReducer;
