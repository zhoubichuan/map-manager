<template>
  <el-tooltip v-bind="$attrs" :disabled="show">
    <template #default="scoped">
      <div @mousemove.enter="showTips" class="web-tooltip">
        <slot name="default" v-bind="scoped"></slot>
      </div>
    </template>
    <template #content="scoped">
      <slot name="content" v-bind="scoped"></slot>
    </template>
  </el-tooltip>
</template>

<script lang="ts" setup>
import { ElTooltip } from 'element-plus'
import { ref } from 'vue'

const show = ref(false)
defineOptions({
  name: 'WebTooltip'
})
const showTips = (event: Event) => {
  const target = event.target as EventTarget
  const { clientWidth, scrollWidth } = target as HTMLElement
  show.value = scrollWidth <= clientWidth
}
</script>

<style lang="scss" scoped>
@import '../../common.scss';

.web-tooltip {
  color: #244367;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  @include ellipsis(1);
}
</style>
