<template>
  <el-main class="web-main" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-main>
</template>

<script lang='ts' setup name="WebMain">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebMain'
});
</script>
