<template>
  <el-dropdown-menu class="web-dropdown-menu" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-dropdown-menu>
</template>

<script lang='ts' setup name="WebDropdownMenu">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebDropdownMenu'
});
</script>
