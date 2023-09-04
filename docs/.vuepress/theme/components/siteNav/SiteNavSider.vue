<template>
  <div class="w-full pb-5 module-sidler">
    <div class="duration-300 ease-in sidler-item ">
      <img class="sidler-item-img" src="https://qyd-node-resource.oss-cn-beijing.aliyuncs.com/img/202309042243191.png" />
      <span class="animation_line">影视资源</span>
      <span class="sidler-item-num">（88）</span>
    </div>
  </div>
</template>

<script setup lang="ts">



</script>



<style lang="scss" scoped>
.animation_line {
  background-repeat: no-repeat;
  background-position: left bottom;
  transition: all 500ms ease;
  background: linear-gradient(to right, #55aaff, #aa55ff, #ffaa00) no-repeat right bottom;
  /*即下划线（背景图）在默认情况下宽度为0 */
  background-size: 0 2px;
  padding-bottom: 4px;
}

.animation_line:hover {
  background-size: 100% 2px;
  background-position-x: left;

}

.module-sidler {
  height: 100%;
  overflow: auto;

  .sidler-item {
    height: 40px;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-bottom: 1px solid #eeeeee;
    cursor: pointer;

    &-img {
      width: 25px;
      height: 25px;
      padding-right: 10px;
    }

    &-num {
      color: #e6a23c;
      font-size: 14px;
    }

    &:hover {
      font-size: 17px;
      color: #409EFF;

      .sidler-item-img {
        width: 27px;
        height: 27px;
      }

      .sidler-item-num {
        font-size: 15px;
      }
    }
  }
}
</style>
