<template>
  <el-switch
    class="web-switch"
    :active-color="activeColor"
    :inactive-color="inactiveColor"
    inline-prompt
    active-text="开"
    inactive-text="关"
    v-bind="$attrs"
  ></el-switch>
</template>

<script setup lang="ts" name="WebSwitch">
defineOptions({
  name: 'WebSwitch'
})
import { ref } from 'vue'

const activeColor = ref('#2FB755')
const inactiveColor = ref('#DDD')
</script>

<!-- <style lang="scss">
.web-switch {
  &.el-switch--default .el-switch__core {
    width: var(--switch-width-default) !important;
    height: var(--switch-height-default);
    border-radius: var(--switch-border-radius-default);
  }

  &.el-switch--default .el-switch__action {
    width: var(--switch-circle-width-default);
    height: var(--switch-circle-height-default);
  }

  &.el-switch--default .el-switch__core .el-switch__inner {
    top: 3px;
  }

  &.el-switch--default.is-checked .el-switch__core .el-switch__action {
    margin-left: calc(-1px - var(--switch-circle-width-default)) !important;
  }

  &.el-switch--default .el-switch__core .is-text {
    font-size: var(--switch-text-size-default);
  }

  // switch-large
  &.el-switch--large .el-switch__core {
    width: var(--switch-width-large) !important;
    height: var(--switch-height-large);
    border-radius: var(--switch-border-radius-large);
  }

  &.el-switch--large .el-switch__action {
    width: var(--switch-circle-width-large);
    height: var(--switch-circle-height-large);
  }

  &.el-switch--large .el-switch__core .el-switch__inner {
    top: 4px;
  }

  &.el-switch--large.is-checked .el-switch__core .el-switch__action {
    margin-left: calc(-1px - var(--switch-circle-width-large)) !important;
  }

  &.el-switch--large .el-switch__core .is-text {
    font-size: var(--switch-text-size-large);
  }
}
</style> -->
