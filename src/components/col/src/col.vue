<template>
  <el-col class="web-col" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-col>
</template>

<script lang='ts' setup name="WebCol">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebCol'
});
</script>
