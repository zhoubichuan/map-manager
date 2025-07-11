<template>
  <el-radio class="web-radio" v-bind="$attrs">
    <slot></slot>
  </el-radio>
</template>
<script lang="ts" setup>
defineOptions({
  name: 'WebRadio'
})
</script>
<style lang="scss">
.web-radio {
  .el-radio__inner {
    border: var(--web-radio-circle-not-checked-border);
  }

  &:hover {
    .el-radio__input:not(.is-disabled) .el-radio__inner {
      border: var(--web-radio-circle-not-checked-border-hover);
    }
  }

  .el-radio__input.is-checked:not(.is-disabled) .el-radio__inner {
    background-color: var(--web-color-primary);
    border-color: var(--web-color-primary);
  }

  .el-radio__input.is-checked:not(.is-disabled) + .el-radio__label {
    color: var(--web-color-primary);
  }

  &.el-radio.is-bordered.is-disabled {
    background-color: var(--web-color-placeholder-bg);
    border-color: var(--web-color-disabled-boder-color);
  }

  &.el-radio.is-bordered.is-checked:not(.is-disabled) {
    border-color: var(--web-color-primary);
  }

  .el-radio__input.is-disabled.is-checked .el-radio__inner {
    border: var(--web-color-circle-checked-disabled-border);

    &::after {
      display: none;
    }
  }
}
</style>
