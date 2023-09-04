<template>
  <ParentLayout>
    <template #page>
      <main class="flex h-screen page flex-column">
        <div class="site-sidler basis-1/5"></div>
        <div class="site-wrap basis-4/5  my-0 relative  mx-[15px] sm:mx-auto">
          <siteNavItem></siteNavItem>
        </div>
      </main>
    </template>
  </ParentLayout>
</template>
<script setup lang="ts">
import { useBlogType } from 'vuepress-plugin-blog2/lib/client'
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
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
<style lang="css" scoped>
.site-sidler {
  flex-basis: 45;
}
</style>
