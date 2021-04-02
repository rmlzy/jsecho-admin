import { NzMenuThemeType } from 'ng-zorro-antd/menu';

export interface IUserProfile {
  uid: number;
  name: string;
  screenName: string;
  mail: string;
  url: string;
  group: string;
}

export interface IThemeConfig {
  layout: 'vertical' | 'horizontal';
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

export interface IMeta {
  mid: number;
  name: string;
  slug?: string;
  parent?: number;
  description?: string;
}

export type IUserGroup = 'administrator' | 'editor' | 'contributor' | 'subscriber' | 'visitor';

export interface IResponse<T> {
  code: number;
  message: string;
  data: T;
}

export interface IPaginate<T> {
  pageIndex: number;
  pageSize: number;
  total: number;
  items: T[];
}
