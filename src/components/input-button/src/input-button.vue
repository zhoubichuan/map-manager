<template>
  <div class="web-input-button">
    <el-input class="input" v-bind="$attrs" @input="handleInput" />
    <el-button class="btn" @click="handleClick">确认</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, useAttrs } from 'vue'
import { ElMessage } from 'element-plus'
import { ElButton, ElInput } from 'element-plus'

const attrs = useAttrs()
const emit = defineEmits(['update:modelValue'])
const { request } = defineProps({
  request: {
    type: Function,
    default: () => {}
  }
})
const handleInput = (val: string) => {
  emit('update:modelValue', val)
}
const handleClick = async () => {
  const res = await request({ spuId: attrs.modelValue })
  if (res) {
    ElMessage.success('spuId存在')
  } else {
    ElMessage.warning('spuId不存在')
  }
}
defineOptions({
  name: 'WebInputButton'
})
</script>

<style lang="scss" scoped>
.web-input-button {
  width: 100%;

  .input {
    width: calc(100% - 70px);
  }

  .btn {
    margin-left: 10px;
  }
}
</style>
