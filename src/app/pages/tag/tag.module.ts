import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TagRoutingModule } from "./tag-routing.module";
import { ListComponent } from "./list/list.component";
import { UpdateComponent } from "./update/update.component";

@NgModule({
  declarations: [ListComponent, UpdateComponent],
  imports: [CommonModule, TagRoutingModule],
})
export class TagModule {}
