<template>
  <el-transfer class="box-transfer">
    <template v-if="slots.default" #default="scoped">
      <slot name="default" v-bind="scoped"></slot>
    </template>
    <template v-if="slots.header" #header="scoped">
      <slot name="header" v-bind="scoped"></slot>
    </template>
    <template v-if="slots.footer" #footer="scoped">
      <slot name="footer" v-bind="scoped"></slot>
    </template>
  </el-transfer>
</template>
<script setup lang="ts" name="Webtransfer">
import { useSlots } from 'vue'
import { WebTransfer } from 'element-plus'

defineOptions({
  name: 'WebTransfer'
})

const slots = useSlots()
</script>
