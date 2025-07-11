<template>
  <el-input
    clearable
    :class="{ 'web-input': true, textarea: attrs.type === 'textarea' }"
    :modelValue="modelValue"
    @update:modelValue="handleUpdate"
    v-bind="newAttrs"
  >
  </el-input>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue'
import { ElInput } from 'element-plus'

defineOptions({
  name: 'WebInput'
})

const attrs = useAttrs()
let newAttrs = attrs
if (attrs.type === 'textarea') {
  newAttrs = { 'show-word-limit': false, maxlength: 1024, rows: 12, placeholder: '请输入', ...newAttrs }
}
const emits = defineEmits<{ 'update:modelValue': [string] }>()
const { modelValue } = defineProps<{ modelValue: string }>()
const handleUpdate = (val: string) => {
  emits('update:modelValue', val)
}
</script>

<style lang="scss" scoped>
@import '../../config.scss';
@import '../../common.scss';

.#{$prefix}-input {
  &.textarea {
    width: 940px;

    :deep(.#{$namespace}-textarea__inner) {
      padding: 16px 40px 16px 16px;
      overflow: auto;
      font-weight: 400;
      font-size: 24px;
      background-color: #f3f6f9;
      border: 1px solid #eef2f6;
      border-radius: 8px;
      @include scrollbar();
    }

    :deep(.#{$namespace}-input__count) {
      right: 20px;
      bottom: 10px;
      font-size: 24px;
      line-height: 28px;
      background-color: #f3f6f9;
    }
  }
}
</style>
