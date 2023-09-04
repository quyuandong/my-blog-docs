<template>
  <div class="p-[15px] mt-[25px] text-center border-t-[1px] border-t-[color:#eee] border-solid border-x-0 border-b-0">
    <Icon icon="SafetyCertificateOutlined" target="_blank" text="xxx" :textSize="15" class="mr-[30px]" />
    <Icon icon="CopyrightCircleOutlined" text="时光静好 2022" :textSize="15" class="mr-[30px]" />
    <!-- 浏览量-->
    <Icon icon="FireOutlined" class="text-[13px] mr-[1rem]">
      <span class="waline-pageview-count" :data-path="props.dataPath" style="padding-left: 5px"></span>
    </Icon>
  </div>
</template>
<script setup lang="ts">
import { useCount } from '../composables'

const props = defineProps({
  dataPath: { type: String, default: '/my-blog-docs/' }
})
useCount()
</script>
