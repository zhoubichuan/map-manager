<template>
  <div class="web-select-image">
    <web-select-options
      v-if="!view"
      :options="options"
      :option-label="optionLabel"
      :option-value="optionValue"
      v-bind="$attrs"
    />
    <el-image :src="modelValue" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import WebSelectOptions from '../../select-options/index'
const { view, options, optionLabel, optionValue, modelValue } = defineProps({
  view: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array,
    require: true
  },
  optionLabel: {
    type: String,
    default: 'label'
  },
  optionValue: {
    type: String,
    default: 'value'
  },
  modelValue: {
    type: String,
    default: ''
  }
})
</script>
<style lang="scss" scoped>
.web-select-image {
  width: 100%;

  .web-select {
    display: inline-block;
    width: calc(100% - 120px);
    margin-right: 20px;
    vertical-align: middle;
  }

  .el-image {
    display: inline-block;
    width: 100px;
    height: 100px;
    vertical-align: middle;
  }
}
</style>
