<template>
  <el-menu-item class="web-menu-item" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
    <template v-if="slots.title" #title>
      <slot name="title"></slot>
    </template>
  </el-menu-item>
</template>

<script lang='ts' setup name="WebMenuItem">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebMenuItem'
});
</script>
