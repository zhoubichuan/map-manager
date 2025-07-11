<template>
  <el-dropdown class="web-dropdown" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
    <template v-if="slots.dropdown" #dropdown>
      <slot name="dropdown"></slot>
    </template>
  </el-dropdown>
</template>

<script lang='ts' setup name="WebDropdown">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebDropdown'
});
</script>
