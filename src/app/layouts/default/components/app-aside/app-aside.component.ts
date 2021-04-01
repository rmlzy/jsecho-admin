import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";
import { NzMenuModeType, NzMenuThemeType } from "ng-zorro-antd/menu";
import { ConfigService } from "@/services";
import { IMenu } from "@/interfaces";

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

  constructor(private config: ConfigService) {
    this.config.menus.subscribe((value) => {
      this.menus = value;
    });
    this.config.theme.subscribe((value) => {
      this.menuTheme = value.asideTheme;
      this.menuMode = value.layout === "vertical" ? "horizontal" : "inline";
    });
  }

  ngOnInit() {}

  toggle() {
    this.toggleCollapsed.emit();
  }
}
