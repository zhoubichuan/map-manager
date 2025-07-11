<template>
  <el-input-number :class="{ 'web-input-number': true }" v-bind="$attrs"> </el-input-number>
</template>

<script setup lang="ts">
import { ElInputNumber } from 'element-plus'

defineOptions({
  name: 'WebInputNumber'
})
</script>

<style lang="scss" scoped>
.web-input-number {
  width: 100%;
}
</style>
