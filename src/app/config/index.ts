import { NzMenuThemeType } from "ng-zorro-antd/menu";
import { IAppMenu, APP_MENUS } from "./app-menu";

export interface IConfig {
  menus: IAppMenu;
  layout: "vertical" | "horizontal";
  asideTheme: NzMenuThemeType;
  fixedHeader: boolean;
  fluid: boolean;
}

export const CONFIG: IConfig = {
  menus: APP_MENUS,
  layout: "horizontal",
  asideTheme: "dark",
  fixedHeader: true,
  fluid: true,
};
