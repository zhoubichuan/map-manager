<template>
  <el-step class="web-step" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-step>
</template>

<script lang='ts' setup name="WebStep">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebStep'
});
</script>
