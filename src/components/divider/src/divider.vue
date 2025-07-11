<template>
  <el-divider class="web-divider" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-divider>
</template>

<script lang='ts' setup name="WebDivider">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebDivider'
});
</script>
