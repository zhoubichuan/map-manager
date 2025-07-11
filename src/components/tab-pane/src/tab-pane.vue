<template>
  <el-tab-pane class="web-tab-pane" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
    <template v-if="slots.label" #label>
      <slot name="label"></slot>
    </template>
  </el-tab-pane>
</template>

<script lang='ts' setup name="WebTabPane">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebTabPane'
});
</script>
