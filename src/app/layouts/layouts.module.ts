import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@/shared/shared.module";
import { DefaultComponent } from "./default/default.component";
import { BlankComponent } from "./blank/blank.component";
import {
  AppHeaderComponent,
  AppBodyComponent,
  AppAsideComponent,
  AppFooterComponent,
} from "./default/components";

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule],
  declarations: [
    DefaultComponent,
    AppHeaderComponent,
    AppBodyComponent,
    AppAsideComponent,
    AppFooterComponent,
    BlankComponent,
  ],
})
export class LayoutsModule {}
