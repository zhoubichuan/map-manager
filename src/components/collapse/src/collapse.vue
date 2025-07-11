<template>
  <el-collapse class="web-collapse" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-collapse>
</template>

<script lang='ts' setup name="WebCollapse">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebCollapse'
});
</script>
