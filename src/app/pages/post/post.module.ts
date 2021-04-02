import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@/shared/shared.module";
import { PostRoutingModule } from "./post-routing.module";
import { ListComponent } from "./list/list.component";
import { UpdateComponent } from "./update/update.component";

@NgModule({
  imports: [CommonModule, PostRoutingModule, SharedModule],
  declarations: [ListComponent, UpdateComponent],
})
export class PostModule {}
