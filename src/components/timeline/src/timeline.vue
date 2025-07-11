<template>
  <el-timeline class="web-timeline" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-timeline>
</template>

<script lang='ts' setup name="WebTimeline">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebTimeline'
});
</script>
