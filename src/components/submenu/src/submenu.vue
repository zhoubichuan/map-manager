<template>
  <el-submenu class="web-submenu" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
    <template v-if="slots.title" #title>
      <slot name="title"></slot>
    </template>
  </el-submenu>
</template>

<script lang='ts' setup name="WebSubmenu">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebSubmenu'
});
</script>
