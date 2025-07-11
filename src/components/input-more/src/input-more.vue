<template>
  <div class="web-input-more">
    <div class="add">
      <el-button link @click="handleAdd">添加</el-button>
    </div>
    <web-input-more-child
      v-bind="$attrs"
      v-for="(item, index) in items"
      :key="item.index"
      :data="item"
      :index="index"
      @input="handleChange"
      @up="handleUp"
      @down="handleDown"
      @delete="handleDelete"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import WebInputMoreChild from './input-more-child.vue'

const { modelValue } = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['update:modelValue'])
const items = reactive([{ value: '', index: new Date().getTime() }])
if (modelValue) {
  items.splice(0, 1, ...modelValue.split(',').map((item, index) => ({ value: item, index })))
}
const handleAdd = () => {
  items.push({ value: '', index: new Date().getTime() })
}
const handleChange = ({ key, value }) => {
  items[key] = value
  emit('update:modelValue', items.map(item => item.value).join(','))
}
const handleUp = ({ key, value }) => {
  if (key > 0) {
    items.splice(
      key - 1,
      2,
      { value: value.value, index: new Date().getTime() },
      { value: items[key - 1].value, index: new Date().getTime() }
    )
  }
  emit('update:modelValue', items.map(item => item.value).join(','))
}
const handleDown = ({ key, value }) => {
  if (key < items.length - 1) {
    items.splice(
      key,
      2,
      { value: items[key + 1].value, index: new Date().getTime() },
      { value: value.value, index: new Date().getTime() }
    )
  }
  emit('update:modelValue', items.map(item => item.value).join(','))
}
const handleDelete = ({ key }) => {
  items.splice(key, 1)
  emit('update:modelValue', items.map(item => item.value).join(','))
}
defineOptions({
  name: 'WebInputMore'
})
</script>
<style scoped lang="scss">
.web-input-more {
  width: 100%;

  .add {
    margin-left: 40px;
  }
}
</style>
