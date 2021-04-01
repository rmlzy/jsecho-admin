import { IThemeConfig, IMenu } from "@/interfaces";
import AppMenus from "./app-menus";

export const THEME_CONFIG: IThemeConfig = {
  layout: "horizontal",
  asideTheme: "dark",
  fixedHeader: true,
  fluid: true,
};

export const APP_MENUS: IMenu[] = AppMenus;
