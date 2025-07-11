<template>
  <el-row class="web-row" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-row>
</template>

<script lang='ts' setup name="WebRow">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebRow'
});
</script>
