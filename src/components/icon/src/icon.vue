<template>
  <el-icon class="web-icon" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-icon>
</template>

<script lang='ts' setup name="WebIcon">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebIcon'
});
</script>
