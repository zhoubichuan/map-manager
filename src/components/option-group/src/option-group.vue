<template>
  <el-option-group class="web-option-group" v-bind="$attrs">
    <template v-if="slots.default" #default="scoped">
      <slot name="default" v-bind="scoped"></slot>
    </template>
  </el-option-group>
</template>

<script setup lang="ts" name="WebOptionGroup">
import { useSlots } from 'vue'
const slots = useSlots()
defineOptions({
  name: 'WebOptionGroup'
})
</script>
