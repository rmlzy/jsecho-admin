import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent, BlankComponent } from '@/layouts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'post',
        loadChildren: () => import('./post/post.module').then((m) => m.PostModule),
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then((m) => m.CategoryModule),
      },
      {
        path: 'tag',
        loadChildren: () => import('./tag/tag.module').then((m) => m.TagModule),
      },
      {
        path: 'comment',
        loadChildren: () => import('./comment/comment.module').then((m) => m.CommentModule),
      },
      {
        path: 'setting',
        loadChildren: () => import('./setting/setting.module').then((m) => m.SettingModule),
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [{ path: 'login', component: LoginComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
