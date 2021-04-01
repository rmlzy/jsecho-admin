import { Pipe, PipeTransform } from "@angular/core";
import { format } from "timeago.js";

@Pipe({
  name: "timeago",
})
export class TimeagoPipe implements PipeTransform {
  transform(value: number): string {
    if (value) {
      return format(value * 1000, "zh_CN");
    }
    return "-";
  }
}
