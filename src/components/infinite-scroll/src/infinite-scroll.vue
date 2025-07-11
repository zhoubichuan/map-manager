<template>
  <el-infinite-scroll class="web-infinite-scroll" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-infinite-scroll>
</template>

<script lang='ts' setup name="WebInfiniteScroll">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebInfiniteScroll'
});
</script>
