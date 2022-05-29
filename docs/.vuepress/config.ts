import { defineUserConfig, defaultTheme } from "vuepress";
import { navbar } from "./configs/navbar";
import { sidebar } from "./configs/sidebar";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  lang: "zh-CN",
  title: "UTCSSA 新生手册",
  description: "UTCSSA 新生手册，你的奥斯汀留学生活指南",
  theme: defaultTheme({
    docsRepo: "utcssa/guide",
    navbar,
    sidebar,
    sidebarDepth: 1,
  }),
  markdown: {
    linkify: true,
  },
  plugins: [
    mdEnhancePlugin({
      tasklist: { disabled: false },
    }),
  ],
});
