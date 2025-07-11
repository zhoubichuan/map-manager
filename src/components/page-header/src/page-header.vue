<template>
  <el-page-header class="web-page-header" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-page-header>
</template>

<script lang='ts' setup name="WebPageHeader">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebPageHeader'
});
</script>
