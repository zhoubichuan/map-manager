<template>
  <el-spinner class="web-spinner" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-spinner>
</template>

<script lang='ts' setup name="WebSpinner">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebSpinner'
});
</script>
