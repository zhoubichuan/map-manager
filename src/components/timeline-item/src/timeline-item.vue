<template>
  <el-timeline-item class="web-timeline-item" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-timeline-item>
</template>

<script lang='ts' setup name="WebTimelineItem">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebTimelineItem'
});
</script>
