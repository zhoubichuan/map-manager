<template>
  <el-rate class="web-rate" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-rate>
</template>

<script lang='ts' setup name="WebRate">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebRate'
});
</script>
