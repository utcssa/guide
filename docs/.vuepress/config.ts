import { defineUserConfig, defaultTheme } from 'vuepress'
import { navbar, sidebar } from './configs'
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
    // page meta
    editLinkText: '编辑此页',
    lastUpdatedText: '上次更新于',
    contributorsText: '贡献者',
    // 404 page
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',
    // a11y
    openInNewWindow: '在新窗口打开',
    toggleDarkMode: '切换夜间模式',
    toggleSidebar: '切换侧边栏',
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
