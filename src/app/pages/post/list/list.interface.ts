interface ICategory {
  id: number;
  name: string;
}

export interface ITableRow {
  cid: number;
  title: string;
  authorId: number;
  authorName: string;
  categories?: ICategory[];
  created: number;
  modified: number;
}
