import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CategoryRoutingModule } from "./category-routing.module";
import { ListComponent } from "./list/list.component";
import { UpdateComponent } from "./update/update.component";

@NgModule({
  declarations: [ListComponent, UpdateComponent],
  imports: [CommonModule, CategoryRoutingModule],
})
export class CategoryModule {}
