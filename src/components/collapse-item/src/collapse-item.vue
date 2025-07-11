<template>
  <el-collapse-item class="web-collapse-item" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-collapse-item>
</template>

<script lang='ts' setup name="WebCollapseItem">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebCollapseItem'
});
</script>
