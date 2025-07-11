<template>
  <div class="input-more-child">
    <el-input class="input" v-bind="$attrs" v-model="value" @input="handleChange" />
    <el-button link @click="handleUp">上移</el-button>
    <el-button link @click="handleDown"> 下移</el-button>
    <el-button :icon="Delete" link @click="handleDelete"></el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { Delete } from '@element-plus/icons-vue'

const { index, data } = defineProps({
  index: {
    type: Number,
    default: 0
  },
  data: {
    type: Object,
    default: { value: 0, index: 0 }
  }
})
const emits = defineEmits(['input', 'up', 'down', 'delete'])
defineOptions({
  name: 'WebInputMoreChild'
})
const value = ref('')
watch(
  () => data,
  newVal => {
    value.value = newVal.value
  },
  {
    immediate: true,
    deep: true
  }
)
const handleChange = () => {
  emits('input', { key: index, value: { value, index: data.index } })
}
const handleUp = () => {
  emits('up', { key: index, value: { value, index: data.index } })
}
const handleDown = () => {
  emits('down', { key: index, value: { value, index: data.index } })
}
const handleDelete = () => {
  emits('delete', { key: index, value: { value, index: data.index } })
}
</script>
<style scoped lang="scss">
.input-more-child {
  width: 100%;
  margin-top: 10px;

  .input {
    display: inline-block;
    width: calc(100% - 130px);

    :deep(.el-input__wrapper) {
      width: 100%;
    }
  }
}
</style>
