import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IThemeConfig, IUserProfile, IMenu } from '@/interfaces';
import { THEME_CONFIG, APP_MENUS } from '@/config';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  menus: BehaviorSubject<IMenu[]> = new BehaviorSubject<IMenu[]>(APP_MENUS);
  theme: BehaviorSubject<IThemeConfig> = new BehaviorSubject<any>(THEME_CONFIG);
  userProfile: Subject<IUserProfile> = new Subject<IUserProfile>();

  constructor() {}

  setUserProfile(value: IUserProfile) {
    this.userProfile.next(value);
  }

  setTheme(value: IThemeConfig) {
    this.theme.next(value);
  }

  setMenus(value: IMenu[]) {
    this.menus.next(value);
  }

  // setThemeByKeyValue(key, value) {
  //   const theme = this.theme.getValue();
  //   // TODO: 此处报错
  //   theme[key] = value;
  //   this.theme.next(theme);
  // }
}
