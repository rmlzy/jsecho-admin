import { IUserGroup } from '@/interfaces';

interface ITableRow {
  uid: number;
  name: string;
  mail: number;
  group: IUserGroup;
  screenName: string;
  url: string;
  logged: number;
}

export interface ITableData {
  pageIndex: number;
  pageSize: number;
  total: number;
  items: ITableRow[];
}
