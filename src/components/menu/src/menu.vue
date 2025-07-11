<template>
  <el-menu v-bind="$attrs" class="web-menu">
    <slot></slot>
  </el-menu>
</template>
<script lang="ts">
export default {
  name: 'WebMenu'
}
</script>
<style lang="scss">
.web-menu {
  &.el-menu--horizontal > .el-menu-item.is-active {
    color: var(--color-primary) !important;
    border-bottom: 2px solid var(--color-primary);
  }
}
</style>
