import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@/shared/shared.module";
import { ContentRoutingModule } from "./content-routing.module";
import { ListComponent } from "./list/list.component";

@NgModule({
  imports: [CommonModule, ContentRoutingModule, SharedModule],
  declarations: [ListComponent],
})
export class ContentModule {}
