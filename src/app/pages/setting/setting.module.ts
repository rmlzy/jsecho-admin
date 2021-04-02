import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SettingRoutingModule } from "./setting-routing.module";
import { ProfileComponent } from "./profile/profile.component";
import { PluginComponent } from "./plugin/plugin.component";
import { ThemeComponent } from "./theme/theme.component";
import { BackupComponent } from "./backup/backup.component";
import { BasicComponent } from "./basic/basic.component";
import { ReadingComponent } from "./reading/reading.component";
import { PermalinkComponent } from "./permalink/permalink.component";
import { CommentComponent } from "./comment/comment.component";

@NgModule({
  declarations: [
    ProfileComponent,
    PluginComponent,
    ThemeComponent,
    BackupComponent,
    BasicComponent,
    ReadingComponent,
    PermalinkComponent,
    CommentComponent,
  ],
  imports: [CommonModule, SettingRoutingModule],
})
export class SettingModule {}
