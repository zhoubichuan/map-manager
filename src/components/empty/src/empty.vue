<template>
  <el-empty class="web-empty" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
    <template v-if="slots.image" #image>
      <slot name="image"></slot>
    </template>
    <template v-if="slots.description" #description>
      <slot name="description"></slot>
    </template>
  </el-empty>
</template>

<script lang='ts' setup name="WebEmpty">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebEmpty'
});
</script>
