interface ICategory {
  id: number;
  name: string;
}

interface ITableRow {
  cid: number;
  title: string;
  authorId: number;
  authorName: string;
  categories?: ICategory[];
  created: number;
  modified: number;
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
