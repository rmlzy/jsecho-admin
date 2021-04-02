import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@/shared/shared.module';
import { SettingRoutingModule } from './setting-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { PluginComponent } from './plugin/plugin.component';
import { ThemeComponent } from './theme/theme.component';
import { BackupComponent } from './backup/backup.component';
import { BasicComponent } from './basic/basic.component';
import { ReadingComponent } from './reading/reading.component';
import { PermalinkComponent } from './permalink/permalink.component';
import { CommentComponent } from './comment/comment.component';
import { UpdateProfileComponent } from './profile/update-profile/update-profile.component';
import { UpdatePasswordComponent } from './profile/update-password/update-password.component';

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
    UpdateProfileComponent,
    UpdatePasswordComponent,
  ],
  imports: [CommonModule, SharedModule, SettingRoutingModule],
})
export class SettingModule {}
