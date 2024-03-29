import type { Theme } from '@vuepress/core'
import { defaultTheme } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { CustomThemeOptions } from './types/theme'

export const CustomTheme = (options: CustomThemeOptions): Theme => {
  return {
    name: 'vuepress-theme-qyd',
    extends: defaultTheme(options),
    alias: {
      '@theme/Home.vue': path.resolve(__dirname, './components/Home.vue'),
      '@theme/NavbarItems.vue': path.resolve(__dirname, './components/NavbarItems.vue'),
      '@theme/HomeFooter.vue': path.resolve(__dirname, './components/HomeFooter.vue'),
    },
    layouts: {
      Layout: path.resolve(__dirname, './layouts/Layout.vue'),
      Category: path.resolve(__dirname, "./layouts/Category.vue"),
      Tag: path.resolve(__dirname, "./layouts/Tag.vue"),
      SiteNav: path.resolve(__dirname, "./modules/siteNav/index.vue"),
      Timeline: path.resolve(__dirname, "./layouts/Timeline.vue"),
      404: path.resolve(__dirname, './layouts/404.vue')
    }
  }
}
