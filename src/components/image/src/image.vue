<template>
  <el-image class="web-image" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-image>
</template>

<script lang='ts' setup name="WebImage">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebImage'
});
</script>
