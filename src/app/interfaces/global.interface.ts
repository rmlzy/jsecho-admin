import { NzMenuThemeType } from "ng-zorro-antd/menu";

export interface IUserProfile {
  uid: number;
  name: string;
  screenName: string;
  mail: string;
  url: string;
  group: string;
}

export interface IThemeConfig {
  layout: "vertical" | "horizontal";
  asideTheme: NzMenuThemeType;
  fixedHeader: boolean;
  fluid: boolean;
}

export interface IMenu {
  level: number;
  title: string;
  icon?: string;
  link?: string;
  disabled?: boolean;
  children?: IMenu[];
}

export interface IBaseResponse {
  code: number;
  message: string;
}

export interface IStringResponse {
  code: number;
  message: string;
  data: string;
}
