<template>
  <a v-if="link" :class="['nav-detail', 'relative', isDark ? 'nav-detail-dark' : '']" :href="link" target="_blank"
    rel="noreferrer">
    <span class="absolute top-0 right-0 flex w-3 h-3">
      <span class="absolute inline-flex w-full h-full rounded-full opacity-75 bg-sky-400 animate-ping"></span>
      <span class="relative inline-flex w-3 h-3 rounded-full bg-sky-500"></span>
    </span>
    <div class="box">
      <div class="box-header">
        <div v-if="svg" class="icon" v-html="svg"></div>
        <div v-else-if="icon && typeof icon === 'string'" class="icon">
          <img :src="icon" :alt="title" onerror="this.parentElement.style.display='none'" />
        </div>
        <div v-if="title" class="title ">{{ title }}</div>
      </div>
      <p v-if="desc" class="desc ">{{ desc }}</p>
    </div>
  </a>
</template>


<script setup lang="ts">
import { computed } from 'vue'
import { useDarkMode } from '@vuepress/theme-default/lib/client/composables'
const isDark = useDarkMode()

export interface NavLink {
  /** 站点图标 */
  icon?: string | { svg: string }
  /** 站点名称 */
  title: string
  /** 站点名称 */
  desc?: string
  /** 站点链接 */
  link: string
}

const props = defineProps<NavLink>()

const svg = computed(() => {
  if (typeof props.icon === 'object') return props.icon.svg
  return ''
})
</script>


<style lang="scss" scoped>
.nav-detail {
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 15px 0 rgba(31, 38, 135, 0.27);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 230px;
  margin: 5px;

  display: block;
  min-height: 100px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #cdf7ce59;
    border: 1px solid #409EFF
  }

  .box {
    display: flex;
    flex-direction: column;
    padding: 16px;
    height: 100%;
    box-sizing: border-box;
    justify-content: space-around;

    &-header {
      display: flex;
      align-items: center;
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    border-radius: 6px;
    width: 48px;
    height: 48px;
    font-size: 24px;
    transition: background-color 0.25s;

    :deep(svg) {
      width: 48px;
      fill: currentColor;
    }

    :deep(img) {
      border-radius: 4px;
      width: 48px;
    }
  }

  .title {
    overflow: hidden;
    flex-grow: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 48px;
    font-size: 16px;
    font-weight: 600;
    color: #303133;

    background: linear-gradient(to right, #27ae60, #aa55ff, #ffaa00) no-repeat right bottom;
    background-repeat: no-repeat;
    background-position: left bottom;
    transition: all 500ms ease;
    /*即下划线（背景图）在默认情况下宽度为0 */
    background-size: 0 2px;

    &:hover {
      font-size: 17px;
      color: #27ae60;
      font-weight: 600;
      background-size: 100% 2px;
    }
  }

  .desc {
    width: 100%;
    max-height: 40px;
    overflow: hidden;
    flex-grow: 1;
    margin: 10px 0 0;
    line-height: 20px;
    font-size: 12px;
    color: #606266;
    display: -webkit-box;
    /* 将元素作为弹性伸缩盒子展示 */
    -webkit-line-clamp: 2;
    /* 限制文本行数为 2 行 */
    -webkit-box-orient: vertical;
    /* 设置伸缩盒子为垂直方向 */
    /* 隐藏溢出文本 */
    text-overflow: ellipsis;
    overflow: hidden;
    /* 使用省略号截断溢出文本 */

  }
}

.nav-detail-dark {
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(195, 197, 194, 0.58);


  &:hover {
    background-color: #ebeae8af;
    border: 1px solid #409EFF;
    color: #409EFF;

    .title {
      color: #409EFF;
    }

    .desc {
      color: #40a0ffaf;
    }
  }

  .box {
    display: flex;
    flex-direction: column;
    padding: 16px;
    height: 100%;
    box-sizing: border-box;

    &-header {
      display: flex;
      align-items: center;
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    border-radius: 6px;
    width: 48px;
    height: 48px;
    font-size: 24px;
    transition: background-color 0.25s;

    :deep(svg) {
      width: 48px;
      fill: currentColor;
    }

    :deep(img) {
      border-radius: 4px;
      width: 48px;
    }
  }

  .title {
    color: #fff;
    font-weight: 600;
  }

  .desc {
    color: #ffffffb8;

  }
}

@media (max-width: 960px) {
  .m-nav-link {
    .box {
      padding: 8px;
    }

    .icon {
      width: 40px;
      height: 40px;
    }

    .title {
      line-height: 40px;
      font-size: 14px;
    }
  }
}
</style>
