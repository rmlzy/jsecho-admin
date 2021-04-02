export default [
  {
    level: 1,
    title: "控制台",
    children: [
      { level: 2, title: "概要", link: "/" },
      { level: 2, title: "个人设置", link: "/setting/profile" },
      { level: 2, title: "插件", link: "/setting/plugin" },
      { level: 2, title: "外观", link: "/setting/theme" },
      { level: 2, title: "备份", link: "/setting/backup" },
    ],
  },
  {
    level: 1,
    title: "撰写",
    children: [
      { level: 2, title: "撰写文章", link: "/post/create" },
      { level: 2, title: "撰写页面", link: "/page/create" },
    ],
  },
  {
    level: 1,
    title: "管理",
    children: [
      { level: 2, title: "文章", link: "/post/list" },
      { level: 2, title: "独立页面", link: "/page/list" },
      { level: 2, title: "评论", link: "/comment/list" },
      { level: 2, title: "分类", link: "/category/list" },
      { level: 2, title: "标签", link: "/tag/list" },
      { level: 2, title: "文件", link: "/file/list" },
      { level: 2, title: "用户", link: "/user/list" },
    ],
  },
  {
    level: 1,
    title: "设置",
    children: [
      { level: 2, title: "基本", link: "/setting/basic" },
      { level: 2, title: "评论", link: "/setting/comment" },
      { level: 2, title: "阅读", link: "/setting/reading" },
      { level: 2, title: "永久链接", link: "/page/permalink" },
    ],
  },
];
