<template>
  <el-dropdown-item class="web-dropdown-item" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-dropdown-item>
</template>

<script lang='ts' setup name="WebDropdownItem">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebDropdownItem'
});
</script>
