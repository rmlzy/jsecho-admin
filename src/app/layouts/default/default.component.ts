import { Component, OnInit } from "@angular/core";
import { ConfigService, AuthService } from "@/services";
import { IThemeConfig } from "@/interfaces";
import { THEME_CONFIG } from "@/config";

@Component({
  selector: "app-default",
  templateUrl: "./default.component.html",
  styleUrls: ["./default.component.less"],
})
export class DefaultComponent implements OnInit {
  theme: IThemeConfig = THEME_CONFIG;
  collapsed = false;
  spinning = false;

  constructor(
    private configService: ConfigService,
    private authService: AuthService
  ) {
    this.configService.theme.subscribe((value) => {
      this.theme = value;
    });
  }

  async ngOnInit() {
    this.spinning = true;
    await this.authService.fetchUserProfile();
    this.spinning = false;
  }

  toggleCollapsed(event: Event) {
    this.collapsed = !this.collapsed;
  }
}
