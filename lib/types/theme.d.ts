export type ColorSchemes = "primary" | "secondary" | "danger" | "warning" | "success" | "info" | "link" | "light" | "dark";
export type Size = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
export interface IThemeConfig {
    backgroundColor: Record<ColorSchemes, string>;
    textColor: Record<ColorSchemes, string>;
    borderColor: Record<ColorSchemes, string>;
    outlineColor: Record<ColorSchemes, string>;
    fontSize: Record<Size, string | number>;
}
