import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog",
  // TODO 解决md不能读取超链接图片
  head: [
    ['link', { rel: 'icon', href: '/images/logo1.png' }], 
    ["meta", { name:"referrer", content:"no-referrer"}]
  ],
  lang: "zh-CN",
  title: "うちはいたち",
  description: "うちはいたち的博客演示",
  theme,
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
