import type { Theme, DefaultThemeOptions } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { resolve } from 'path'

export const localTheme = (options: DefaultThemeOptions): Theme => {
  return {
    name: 'vuepress-theme-local',
    extends: defaultTheme(options),
    layouts: {
      Layout: resolve(__dirname, 'layouts', 'Layout.vue'),
    },
  }
}
