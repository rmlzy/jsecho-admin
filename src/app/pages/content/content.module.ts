import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContentRoutingModule } from "./content-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { ListComponent } from "./list/list.component";

@NgModule({
  imports: [CommonModule, ContentRoutingModule, SharedModule],
  declarations: [ListComponent],
})
export class ContentModule {}
