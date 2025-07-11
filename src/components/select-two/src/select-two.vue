<template>
  <el-select
    @change="handleChange"
    v-model="leftVal"
    placeholder="请选择"
    style="width: calc(50% - 5px)"
    v-bind="$attrs"
  >
    <el-option v-for="item in leftOptions" :key="item.token" :label="item.showPic" :value="item.token" /> </el-select
  >&nbsp;
  <el-select
    @change="handleChange"
    v-model="rightVal"
    placeholder="请选择"
    style="width: calc(50% - 5px)"
    v-bind="$attrs"
  >
    <el-option v-for="item in rightOptions" :key="item.token" :label="item.showPic" :value="item.token" />
  </el-select>
</template>

<script setup lang="ts" name="WebSelectTwo">
import { ref } from 'vue'
import { PropType } from 'vue'

const emits = defineEmits(['update:modelValue'])
const { leftOptions, rightOptions, modelValue } = defineProps({
  leftOptions: {
    type: Array as PropType<{ label: string; value: string }[]>,
    default: () => []
  },
  rightOptions: {
    type: Array as PropType<{ label: string; value: string }[]>,
    default: () => []
  },
  modelValue: {
    type: Array as () => Array<string[]>,
    default: () => []
  }
})
const leftVal = ref('')
const rightVal = ref('')
if (modelValue && modelValue.length) {
  leftVal.value = modelValue[0].token
  rightVal.value = modelValue[1].token
}
// watch(modelValue, () => {
//   debugger
//   if (modelValue && modelValue.length) {
//     debugger
//     leftVal.value = modelValue[0].id
//     rightVal.value = modelValue[1].id
//   }
// }, {
//   deep: true
// })
const handleChange = () => {
  const value = [leftOptions.find(i => i.token === leftVal.value), rightOptions.find(i => i.token === rightVal.value)]
  emits('update:modelValue', value)
}

defineOptions({
  name: 'WebSelectTwo'
})
</script>
