import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@/shared/shared.module";
import { UserRoutingModule } from "./user-routing.module";
import { ListComponent } from "./list/list.component";

@NgModule({
  imports: [CommonModule, UserRoutingModule, SharedModule],
  declarations: [ListComponent],
})
export class UserModule {}
