interface ITableRow {
  mid: number;
  name: string;
  slug: string;
  contentCount: number;
}

export interface ITableData {
  pageIndex: number;
  pageSize: number;
  total: number;
  items: ITableRow[];
}

export interface IResponse {
  code: number;
  message: string;
  data: ITableData;
}
