import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/document/": [
    // "", //感觉代表document下面的md文档
    {
      text: "程序开发",
      icon: "streamline-pixel:coding-apps-websites-programming-bug",
      collapsible: true,
      // expanded: true,
      prefix: "development/", // 下级文件夹
      children: "structure",
    },
    {
      text: "中间件",
      icon: "lucide:server-crash",
      prefix: "middleware/",
      collapsible: true,
      // expanded: true,
      children: "structure",
    },
    {
      text: "运维",
      icon: "ix:maintenance-octagon-filled",
      prefix: "maintenance/",
      collapsible: true,
      // expanded: true,
      children: "structure",
    },
    {
      text: "生活记录",
      icon: "lets-icons:happy",
      prefix: "daily/",
      collapsible: true,
      // expanded: true,
      children: "structure",
    },
    {
      text: "博客教程",
      icon: "gears",
      prefix: "demo/",
      collapsible: true,
      // expanded: true,
      children: "structure",
    },
  ],
  // "/document/development/java": "structure",
  // "/document/development/python": "structure",
  // "/document/middleware/kafka": "structure",
  // "/document/middleware/rabbitmq": "structure",
  // "/document/middleware/redis": "structure",
  // "/document/maintenance/docker": "structure",
  // "/document/maintenance/linux": "structure",
  // "/document/maintenance/openvpn": "structure",

  // "/": [
  //   "",
  // {
  //   text: "如何使用",
  //   icon: "laptop-code",
  //   prefix: "demo/",
  //   link: "demo/",
  //   children: "structure",
  // },
  // {
  //   text: "文章",
  //   icon: "book",
  //   prefix: "posts/",
  //   children: "structure",
  // },
  // "intro",
  // {
  //   text: "幻灯片",
  //   icon: "person-chalkboard",
  //   link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
  // },
  // ],
});

// sidebar: sidebar,
// sidebar:"structure",  注释和structure直接生成全部
// sidebar: [
//   {
//     text: "Group",
//     prefix: "/",
//     collapsible: true,
//     children: [

//       "baz" /* /baz.html */,
//       {
//         text: "Sub Group 1",
//         children: ["quz" /* /quz.html */, "xyzzy" /* /xyzzy.html */],
//       },
//       {
//         text: "Sub Group 2",
//          collapsible: true,
//         prefix: "corge/",
//         children: [
//           "fred" /* /corge/fred.html */,
//           "grault" /* /corge/grault.html */,
//         ],
//       },
//       "foo" /* /foo.html */,
//     ],
//   },
// ],

// 侧边栏 第一种  指定页面或者目录
// sidebar: ["/posts/", "/posts/dragonfruit.md"],

// sidebar, //注释了就跟全部文件目录
