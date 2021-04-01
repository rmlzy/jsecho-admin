import { Component, OnInit } from "@angular/core";
import { AuthService, ConfigService } from "@/services";
import { IUserProfile } from "@/interfaces";

@Component({
  selector: "app-header",
  templateUrl: "./app-header.component.html",
  styleUrls: ["./app-header.component.less"],
})
export class AppHeaderComponent implements OnInit {
  userProfile: IUserProfile = {
    uid: -1,
    name: "",
    screenName: "",
    mail: "",
    url: "",
    group: "",
  };

  constructor(private config: ConfigService, private authService: AuthService) {
    this.config.userProfile.subscribe((value) => {
      this.userProfile = value;
    });
  }

  ngOnInit() {}

  async logout() {
    await this.authService.logout();
  }
}
