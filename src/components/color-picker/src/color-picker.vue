<template>
  <el-color-picker class="web-color-picker" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-color-picker>
</template>

<script lang='ts' setup name="WebColorPicker">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebColorPicker'
});
</script>
