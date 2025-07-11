<template>
  <el-select class="web-option" v-bind="$attrs">
    <template v-if="slots.default" #default="scoped">
      <slot name="default" v-bind="scoped"></slot>
    </template>
  </el-select>
</template>

<script setup lang="ts" name="WebSelect">
import { useSlots } from 'vue'
const slots = useSlots()
defineOptions({
  name: 'WebOption'
})
</script>
