import { Pipe, PipeTransform } from "@angular/core";
import { IUserGroup } from "@/interfaces";

@Pipe({
  name: "userGroup",
})
export class UserGroupPipe implements PipeTransform {
  transform(value: IUserGroup, ...args: unknown[]): unknown {
    const map = {
      administrator: "管理员",
      editor: "编辑",
      contributor: "贡献者",
      subscriber: "关注者",
      visitor: "访问者",
    };
    return map[value];
  }
}
