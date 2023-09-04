<template>
  <ParentLayout>
    <template #page>
      <main class="flex site-main page flex-column">
        <div class="m-4 overflow-hidden rounded site-sidler shadow-item">
          <SiteNavSider></SiteNavSider>
        </div>
        <div class="site-wrap   my-0 relative  mx-[15px] sm:mx-auto">
          <siteNavItem></siteNavItem>
        </div>
      </main>
    </template>
  </ParentLayout>
</template>
<script setup lang="ts">
import { useBlogType } from 'vuepress-plugin-blog2/lib/client'
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import SiteNavSider from '../../components/siteNav/SiteNavSider.vue'
import siteNavItem from '../../components/siteNav/siteNavItem.vue'
import { computed } from 'vue'
import { dateFormat } from '../../utils'
const siteNav = useBlogType('siteNav')
const timelineData: any = computed(() => {
  const items = siteNav.value.items
  const objData: Record<string, Array<unknown>> = {}
  let objArray: Array<Record<string, unknown>> = []
  items.forEach((item: any) => {
    const date = item.info.data.frontmatter?.date
    if (date) {
      const year = dateFormat(date, 'year')
      objData[year] ? objData[year].push(item) : (objData[year] = [item])
    }
  })
  Object.keys(objData).forEach((item) => {
    objArray.unshift({ year: item, value: objData[item] })
  })
  return objArray
})
</script>
<style lang="scss" scoped>
.site-main {

  height: calc(100vh - 90px);
  overflow: hidden;

  .site-sidler {
    height: 100%;
    flex-basis: 15%;
    // background-color: red;

  }

  .site-wrap {
    height: 100%;
    overflow-y: auto;
    flex-basis: 85%;
  }
}
</style>
