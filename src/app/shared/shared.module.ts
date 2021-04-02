import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// echarts
import * as echarts from "echarts/core";
import { NgxEchartsModule } from "ngx-echarts";
import { BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import "../config/echart.theme";

// ng zorro
import { NgZorroAntdModule } from "./ng-zorro-antd.module";

// pipes
import { TimeagoPipe, UserGroupPipe, FormatPipe } from "@/pipes";
const pipes = [TimeagoPipe, UserGroupPipe, FormatPipe];

// components
import { ExampleComponent, TagPickerComponent } from "../components";
const components = [ExampleComponent, TagPickerComponent];

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
]);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    NgxEchartsModule.forRoot({ echarts }),
  ],
  declarations: [...pipes, ...components],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    NgxEchartsModule,
    ...pipes,
    ...components,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
