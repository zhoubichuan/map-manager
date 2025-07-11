<template>
  <el-header class="web-header" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-header>
</template>

<script lang='ts' setup name="WebHeader">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebHeader'
});
</script>
