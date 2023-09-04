<template>
  <div class="w-full pb-5 module-card">
    <h2 class="mt-2 mb-0">
      <a :href="`#${formatTitle}`" aria-hidden="true">#</a>
      测试模板
    </h2>
    <div class="flex flex-wrap w-full">
      <SiteNavDetail title="测试" icon="https://qyd-node-resource.oss-cn-beijing.aliyuncs.com/img/202212161512946.jpg"
        desc="撒够嘎斯撒够撒够嘎斯撒够嘎斯盖玉姑姑撒够嘎斯盖玉姑姑盖玉姑姑嘎斯盖玉姑姑撒够嘎斯盖玉姑姑盖玉姑姑" link="222"></SiteNavDetail>
      <SiteNavDetail title="测试" icon="aa" desc="撒够嘎斯撒够撒够嘎斯撒够嘎斯盖玉姑姑撒够嘎斯盖玉姑姑盖玉姑姑嘎斯盖玉姑姑撒够嘎斯盖玉姑姑盖玉姑姑" link="222">
      </SiteNavDetail>
      <SiteNavDetail title="测试" icon="aa" desc="撒够嘎斯盖玉姑姑" link="222"></SiteNavDetail>
      <SiteNavDetail title="测试" icon="aa" desc="ceshii" link="222"></SiteNavDetail>
      <SiteNavDetail title="测试" icon="aa" desc="ceshii" link="222"></SiteNavDetail>
      <SiteNavDetail title="测试" icon="aa" desc="ceshii" link="222"></SiteNavDetail>
      <SiteNavDetail title="测试" icon="aa" desc="ceshii" link="222"></SiteNavDetail>
      <SiteNavDetail title="测试" icon="aa" desc="ceshii" link="222"></SiteNavDetail>
      <SiteNavDetail title="测试" icon="aa" desc="ceshii" link="222"></SiteNavDetail>
      <SiteNavDetail title="测试" icon="aa" desc="ceshii" link="222"></SiteNavDetail>
      <SiteNavDetail title="测试" icon="aa" desc="ceshii" link="222"></SiteNavDetail>
      <SiteNavDetail title="测试" icon="aa" desc="ceshii" link="222"></SiteNavDetail>
      <SiteNavDetail title="测试" icon="https://qyd-node-resource.oss-cn-beijing.aliyuncs.com/img/202212161512946.jpg"
        link="222"></SiteNavDetail>
      <SiteNavDetail title="测试" icon="aa" link="222"></SiteNavDetail>
      <SiteNavDetail title="测试" icon="aa" link="222"></SiteNavDetail>
    </div>
  </div>
</template>

<script setup lang="ts">
import SiteNavDetail from "./SiteNavDetail.vue"
import { computed } from 'vue'



</script>



<style lang="scss" scoped>
.module-card {
  // min-height: 300px;
  // border-radius: 5px;
  border-bottom: 1px solid #eeeeee;
  
  

  h2 {
    border-bottom: none;
    margin: none;
    cursor:pointer;
  }

  .module-card-title {}
}</style>
