import { Pipe, PipeTransform } from "@angular/core";
import dayjs from "dayjs";

@Pipe({
  name: "format",
})
export class FormatPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    if (value) {
      return dayjs(value * 1000).format("YYYY年MM月DD日");
    }
    return "-";
  }
}
