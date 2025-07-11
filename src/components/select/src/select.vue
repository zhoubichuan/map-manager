<template>
  <el-select class="web-select" clearable popper-class="web-select-popper" :suffix-icon="CaretTop" v-bind="$attrs">
    <template v-if="newOptions.length">
      <el-option
        v-for="(item, index) in newOptions"
        :key="index"
        :label="item[newOptionsProps.label]"
        :value="item[newOptionsProps.value]"
      />
    </template>
    <template v-if="slots.default && !newOptions.length" #default>
      <slot v-if="slots.default" name="default"></slot>
    </template>
    <template v-if="slots.header" #header="scoped">
      <slot name="header" v-bind="scoped"></slot>
    </template>
    <template v-if="slots.footer" #footer="scoped">
      <slot name="footer" v-bind="scoped"></slot>
    </template>
    <template v-if="slots.prefix" #prefix="scoped">
      <slot name="prefix" v-bind="scoped"></slot>
    </template>
    <template v-if="slots.empty" #empty="scoped">
      <slot name="empty" v-bind="scoped"></slot>
    </template>
    <template v-if="slots.tag" #tag="scoped">
      <slot name="tag" v-bind="scoped"></slot>
    </template>
    <template v-if="slots.loading" #loading="scoped">
      <slot name="loading" v-bind="scoped"></slot>
    </template>
    <template v-if="slots.label" #label="scoped">
      <slot name="label" v-bind="scoped"></slot>
    </template>
  </el-select>
</template>

<script setup lang="ts" name="WebSelect">
import { onMounted, useSlots, ref } from 'vue'
import { CaretTop } from '@element-plus/icons-vue'
import { PropType, computed } from 'vue'
const { options, request, optionsProps } = defineProps({
  options: {
    type: Array as PropType<{ label: string; value: string }[]>,
    default: () => []
  },
  request: {
    type: Function,
    default: () => {}
  },
  optionsProps: {
    type: Object as PropType<{ label: string; value: string }>,
    default: () => ({
      label: 'label',
      value: 'value'
    })
  }
})
const newOptions = ref([])
const newOptionsProps = computed(() => optionsProps as { label: string; value: string })
const slots = useSlots()
onMounted(async () => {
  newOptions.value = await request()
})
defineOptions({
  name: 'WebSelect'
})
</script>

<style lang="scss" scoped>
@import '../../index.scss';

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
