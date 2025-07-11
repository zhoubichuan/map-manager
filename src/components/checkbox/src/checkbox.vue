<template>
  <el-checkbox class="web-checkbox" v-bind="$attrs">
    <template v-if="slots.default" #default="scoped">
      <slot name="default" v-bind="scoped"></slot>
    </template>
  </el-checkbox>
</template>

<script setup lang="ts" name="WebCheckbox">
import { useSlots } from 'vue'

const slots = useSlots()
defineOptions({
  name: 'WebCheckbox'
})
</script>

<style lang="scss">
.web-checkbox {
  .el-checkbox__inner {
    border: var(--web-radio-circle-not-checked-border);
  }

  &:hover {
    .el-checkbox__input:not(.is-disabled) .el-checkbox__inner {
      border: var(--web-radio-circle-not-checked-border-hover);
    }
  }

  .el-checkbox__input.is-checked:not(.is-disabled) .el-checkbox__inner {
    background-color: var(--web-color-primary);
    border-color: var(--web-color-primary);
  }

  .el-checkbox__input.is-checked:not(.is-disabled) + .el-checkbox__label {
    color: var(--web-color-primary);
  }

  &.el-checkbox.is-bordered.is-disabled {
    background-color: var(--web-color-placeholder-bg);
    border-color: var(--web-radio-disabled-boder-color);
  }

  &.el-checkbox.is-bordered.is-checked:not(.is-disabled) {
    border-color: var(--web-color-primary);
  }

  .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
    // border: var(--web-radio-circle-checked-disabled-border);
    &::after {
      // display: none;
    }
  }

  &.web-checkbox .el-checkbox__inner {
    border: 1px solid #dcdfe6;
  }
}
</style>
