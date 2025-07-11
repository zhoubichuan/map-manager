<template>
  <el-badge class="web-badge" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-badge>
</template>

<script lang='ts' setup name="WebFooter">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebFooter'
});
</script>
