import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";
import { NzMenuModeType, NzMenuThemeType } from "ng-zorro-antd/menu";
import { AuthService, ConfigService } from "@/services";
import { IMenu, IUserProfile } from "@/interfaces";

@Component({
  selector: "app-aside",
  templateUrl: "./app-aside.component.html",
  styleUrls: ["./app-aside.component.less"],
})
export class AppAsideComponent implements OnInit {
  @Input() collapsed: boolean | undefined;
  @Output() toggleCollapsed = new EventEmitter();

  menus: IMenu[] = [];
  menuTheme: NzMenuThemeType = "dark";
  menuMode: NzMenuModeType = "vertical";
  userProfile: IUserProfile = {
    uid: -1,
    name: "",
    screenName: "",
    mail: "",
    url: "",
    group: "",
  };

  constructor(private config: ConfigService, private authService: AuthService) {
    this.config.menus.subscribe((value) => {
      this.menus = value;
    });
    this.config.theme.subscribe((value) => {
      this.menuTheme = value.asideTheme;
      this.menuMode = value.layout === "vertical" ? "horizontal" : "inline";
    });
    this.config.userProfile.subscribe((value) => {
      this.userProfile = value;
    });
  }

  ngOnInit() {}

  onMenuClick() {}

  toggle() {
    this.toggleCollapsed.emit();
  }

  toProfilePage() {}

  async logout() {
    await this.authService.logout();
  }

  openUserSite() {
    window.open(this.userProfile.url);
  }
}
