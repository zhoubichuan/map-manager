<template>
  <el-popconfirm class="web-popconfirm" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-popconfirm>
</template>

<script lang='ts' setup name="WebPopconfirm">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebPopconfirm'
});
</script>
