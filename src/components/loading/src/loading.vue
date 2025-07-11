<template>
  <el-loading class="web-loading" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-loading>
</template>

<script lang='ts' setup name="WebLoading">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebLoading'
});
</script>
