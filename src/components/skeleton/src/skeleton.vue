<template>
  <el-skeleton class="web-skeleton" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
    <template v-if="slots.template" #template>
      <slot name="template"></slot>
    </template>
  </el-skeleton>
</template>

<script lang='ts' setup name="WebSkeleton">
import { ElSkeleton } from 'element-plus'
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebSkeleton'
});
</script>
