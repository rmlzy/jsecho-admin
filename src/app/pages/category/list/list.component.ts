import { Component, OnInit } from "@angular/core";
import { NzTableQueryParams } from "ng-zorro-antd/table";
import { HttpClient } from "@angular/common/http";
import { NzMessageService } from "ng-zorro-antd/message";
import { environment } from "@environments/environment";
import { ITableData, IResponse } from "./list.interface";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.less"],
})
export class ListComponent implements OnInit {
  tableLoading = false;
  tableData: ITableData = {
    items: [],
    pageIndex: 1,
    pageSize: 20,
    total: 0,
  };

  constructor(private http: HttpClient, private message: NzMessageService) {}

  ngOnInit(): void {}

  async fetchTableData() {
    this.tableLoading = true;
    try {
      const { pageIndex, pageSize } = this.tableData;
      const res = await this.http
        .get<IResponse>(`${environment.baseUrl}/metas`, {
          params: {
            pageIndex: String(pageIndex),
            pageSize: String(pageSize),
            type: "category",
          },
        })
        .toPromise();
      if (res.code !== 200) {
        this.message.warning(res.message);
        return;
      }
      this.tableData = res.data;
    } catch (e) {
      this.message.warning(e.message);
    } finally {
      this.tableLoading = false;
    }
  }

  async remove(cid: number) {
    this.tableLoading = true;
    try {
      const res = await this.http
        .delete<IResponse>(`${environment.baseUrl}/metas/${cid}`)
        .toPromise();
      if (res.code !== 200) {
        this.message.warning(res.message);
      }
      this.message.success("操作成功");
      await this.fetchTableData();
    } catch (e) {
      this.message.warning(e.message);
    } finally {
      this.tableLoading = false;
    }
  }

  query(params: NzTableQueryParams) {
    console.log("params", params);
    const { pageSize, pageIndex } = params;
    this.tableData = {
      items: [],
      pageIndex,
      pageSize,
      total: 0,
    };
    this.fetchTableData();
  }
}
