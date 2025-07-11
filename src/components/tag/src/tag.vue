<template>
  <el-tag v-bind="$attrs" class="web-tag">
    <slot></slot>
  </el-tag>
</template>
<script lang="ts">
export default {
  name: 'WebTag'
}
</script>
