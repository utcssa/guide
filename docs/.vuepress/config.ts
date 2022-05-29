import { defineUserConfig, defaultTheme } from 'vuepress'
import { navbar } from './configs/navbar'
import { sidebar } from './configs/sidebar'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'UTCSSA 指南',
  description: 'UTCSSA 指南，你的奥斯汀留学生活学习指南',
  theme: defaultTheme({
    docsRepo: 'utcssa/guide',
    editLinkPattern: ':repo/edit/:branch/docs/:path',
    navbar,
    sidebar,
    sidebarDepth: 1,
    tip: '💡 小贴士',
    warning: '⚠️ 注意',
    danger: '🚨 警告',
  }),
  markdown: {
    linkify: true,
  },
  plugins: [
    mdEnhancePlugin({
      tasklist: { disabled: false },
    }),
  ],
})
