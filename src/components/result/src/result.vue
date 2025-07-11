<template>
  <el-result class="web-result" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-result>
</template>

<script lang='ts' setup name="WebResult">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebResult'
});
</script>
