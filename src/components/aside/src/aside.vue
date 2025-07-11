<template>
  <el-aside class="web-aside" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-aside>
</template>

<script lang='ts' setup name="WebAside">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebAside'
});
</script>
