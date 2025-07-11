<template>
  <el-container class="web-container" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-container>
</template>

<script lang='ts' setup name="WebContainer">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebContainer'
});
</script>
