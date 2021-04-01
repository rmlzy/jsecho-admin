export default [
  { level: 1, title: "控制台", icon: "dashboard", link: "/" },
  {
    level: 1,
    title: "管理文章",
    icon: "file-word",
    children: [{ level: 2, title: "文章列表", link: "/post/list" }],
  },
  {
    level: 1,
    title: "管理用户",
    icon: "user",
    children: [{ level: 2, title: "用户列表", link: "/user/list" }],
  },
];
