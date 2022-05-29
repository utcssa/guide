import { NavbarConfig } from 'vuepress'

const navbar: NavbarConfig = [
  { text: '首页', link: '/' },
  {
    text: '新生手册',
    children: [
      { text: '序言', link: '/newcomer/preface' },
      { text: '第零章 · 从零开始', link: '/newcomer/chapter-0/' },
      { text: '第壹章 · 作别故土', link: '/newcomer/chapter-1/' },
      { text: '第贰章 · 初来乍到', link: '/newcomer/chapter-2/' },
      { text: '第叁章 · 安居乐业', link: '/newcomer/chapter-3/' },
      { text: '第肆章 · 渐入佳境', link: '/newcomer/chapter-4/' },
      { text: '第伍章 · 落地扎根', link: '/newcomer/chapter-5/' },
      { text: '附录', link: '/appendix/' },
    ],
  },
  {
    text: 'UTCSSA',
    children: [
      { text: '官网', link: 'https://utcssa.net/' },
      { text: '论坛', link: 'https://forum.utcssa.net/' },
    ],
  },
]

export { navbar }
