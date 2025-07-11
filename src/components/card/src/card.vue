<template>
  <el-card class="box-card">
    <template v-if="slots.default" #default="scoped">
      <slot name="default" v-bind="scoped"></slot>
    </template>
    <template v-if="slots.header" #header="scoped">
      <slot name="header" v-bind="scoped"></slot>
    </template>
    <template v-if="slots.footer" #footer="scoped">
      <slot name="footer" v-bind="scoped"></slot>
    </template>
  </el-card>
</template>
<script setup lang="ts" name="WebCard">
import { useSlots } from 'vue'
import { ElCard } from 'element-plus'

defineOptions({
  name: 'WebCard'
})

const slots = useSlots()
</script>
