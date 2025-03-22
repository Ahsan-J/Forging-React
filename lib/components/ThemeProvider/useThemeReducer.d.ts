import { IThemeConfig } from "../../types/theme";
declare const useThemeReducer: (initialState: IThemeConfig) => [IThemeConfig, import("react").ActionDispatch<[action: Partial<IThemeConfig>]>];
export default useThemeReducer;
