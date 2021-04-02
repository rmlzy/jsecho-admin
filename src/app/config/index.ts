import { IThemeConfig, IMenu } from '@/interfaces';
import AppMenus from './app-menus';

export const THEME_CONFIG: IThemeConfig = {
  layout: 'vertical',
  asideTheme: 'dark',
  fixedHeader: true,
  fluid: false,
};

export const APP_MENUS: IMenu[] = AppMenus;
