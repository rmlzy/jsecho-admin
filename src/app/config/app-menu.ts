type IMenu = {
  level: number;
  title: string;
  icon?: string;
  link?: string;
  disabled?: boolean;
  children?: IMenu[];
};

export type IAppMenu = IMenu[];

export const APP_MENUS: IAppMenu = [
  { level: 1, title: "控制台", icon: "dashboard", link: "/" },
  {
    level: 1,
    title: "管理文章",
    icon: "file-word",
    children: [{ level: 2, title: "文章列表", link: "/content/list" }],
  },
];
