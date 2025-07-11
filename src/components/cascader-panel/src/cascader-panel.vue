<template>
  <el-cascader-panel class="web-cascader-panel" v-bind="$attrs">
    <template v-if="slots.default" #default="scoped">
      <slot name="default" v-bind="scoped"></slot>
    </template>
    <template v-if="slots.empty" #empty="scoped">
      <slot name="empty" v-bind="scoped"></slot>
    </template>
  </el-cascader-panel>
</template>
<script lang="ts" setup>
import { useSlots } from 'vue'
import { ElCascaderPanel } from 'element-plus'
const slots = useSlots()
defineOptions({
  name: 'WebCascaderPanel'
})
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
