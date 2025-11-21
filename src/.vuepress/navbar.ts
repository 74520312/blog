import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "指南",
    icon: "tdesign:anchor",
    link: "/document/",
  },
  {
    text: "教程跳转 ",
    icon: "tdesign:cat",
    prefix: "/document/",
    children: [
      {
        text: "开发相关",
        icon: "pen-to-square",
        prefix: "development/",
        children: [
          { text: "Java程序语言", icon: "cib:java", link: "java/" },
          { text: "Python程序语言", icon: "simple-icons:python", link: "python/" },
          // { text: "Java", icon: "ri:java-fill", link: "1" },
        ],
      },
      {
        text: "中间件",
        icon: "pen-to-square",
        prefix: "middleware/",
        children: [
          { text: "Redis", icon: "devicon-plain:redis", link: "redis/" },
          { text: "Rabbitmq", icon: "simple-icons:rabbitmq", link: "rabbitmq/" },
          { text: "Kafka", icon: "devicon:apachekafka", link: "kafka/" },
          // { text: "Java", icon: "ri:java-fill", link: "1" },
        ],
      },
      {
        text: "运维相关",
        icon: "pen-to-square",
        prefix: "maintenance/",
        children: [
          { text: "Linux", icon: "teenyicons:linux-outline", link: "linux/" },
          { text: "Docker", icon: "teenyicons:docker-solid", link: "docker/" },
          {
            text: "OpenVpn",
            icon: "streamline-logos:openvpn-logo-solid",
            link: "openvpn/",
          },
        ],
      },
      // { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      // { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      // "tomato",
    ],
  },
  {
    text: "文章分类",
    icon: "tag",
    link: "/category/苹果/",
  },
  {
    text: "生活记录",
    icon: "dinkie-icons:fox-face",
    link: "/document/daily/",
  },

  {
    text: "时间轴",
    icon: "timeline",
    link: "/timeline/",
  },
]);
