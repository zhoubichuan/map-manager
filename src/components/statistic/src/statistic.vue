<template>
  <el-statistic class="web-statistic" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-statistic>
</template>

<script lang='ts' setup name="WebStatistic">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebStatistic'
});
</script>
