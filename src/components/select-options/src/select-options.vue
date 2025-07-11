<template>
  <el-select class="web-select" popper-class="web-select-popper" :suffix-icon="CaretTop" v-bind="$attrs">
    <el-option v-for="(item, index) in options" :key="index" :label="item[optionLabel]" :value="item[optionValue]" />
  </el-select>
</template>

<script setup lang="ts" name="WebSelect">
import { CaretTop } from '@element-plus/icons-vue'
import { PropType, computed } from 'vue'
const { options } = defineProps({
  options: {
    type: Array as PropType<{ label: string; value: string }[]>,
    default: () => []
  },
  optionLabel: {
    type: String,
    default: 'label'
  },
  optionValue: {
    type: String,
    default: 'value'
  }
})
const slots = useSlots()
import { useSlots } from 'vue'
defineOptions({
  name: 'WebSelectOptions'
})
</script>

<style lang="scss" scoped>
@import '../../config.scss';
@import '../../common.scss';

.web-select {
  &.el-select {
    width: var(--web-select-width-default);
  }

  .el-input__inner {
    height: var(--web-select-input-height);
  }

  &.el-select .el-input.is-focus input.el-input__inner {
    border-color: var(--web-color-primary) !important;
  }

  &.el-select .el-input.is-focus .el-input__inner,
  &.el-select .el-input__inner:focus {
    border-color: var(--web-color-primary) !important;
  }

  &.el-select .el-select__tags .el-tag--info {
    background-color: var(--web-color-f2f2f2);
  }

  &.el-select .el-select__tags-text {
    color: var(--web-color-text-primary);
  }
}

.web-select-popper {
  .el-select .el-input__inner {
    border-color: var(--web-select-border-color-default);

    &:hover {
      border-color: var(--web-select-border-color-hover);
    }
  }

  .el-select-dropdown__item.selected {
    color: var(--web-color-primary);
    background: var(--web-color-help);
  }

  .el-select-dropdown__item.hover,
  .el-select-dropdown__item:hover {
    background: var(--web-color-help);
  }

  .el-select-dropdown.is-multiple .el-select-dropdown__item.selected {
    color: var(--web-color-primary);
    background-color: none;

    &::after {
      display: inline-block;
      width: 10px;
      height: 10px;
      content: '';
    }
  }

  .el-input.is-disabled .el-input__inner {
    background-color: var(--web-select-bg-color-disabled);
  }
}
</style>
