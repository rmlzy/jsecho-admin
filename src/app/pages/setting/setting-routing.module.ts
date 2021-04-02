import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PluginComponent } from './plugin/plugin.component';
import { ThemeComponent } from './theme/theme.component';
import { BackupComponent } from './backup/backup.component';
import { BasicComponent } from './basic/basic.component';
import { ReadingComponent } from './reading/reading.component';
import { PermalinkComponent } from './permalink/permalink.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  { path: 'backup', component: BackupComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'comment', component: CommentComponent },
  { path: 'permalink', component: PermalinkComponent },
  { path: 'plugin', component: PluginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'reading', component: ReadingComponent },
  { path: 'theme', component: ThemeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule {}
