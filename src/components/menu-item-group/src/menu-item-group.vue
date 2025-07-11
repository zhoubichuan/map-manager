<template>
  <el-menu-item-group class="web-menu-item-group" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
    <template v-if="slots.title" #title>
      <slot name="title"></slot>
    </template>
  </el-menu-item-group>
</template>

<script lang='ts' setup name="WebMenuItemGroup">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebMenuItemGroup'
});
</script>
