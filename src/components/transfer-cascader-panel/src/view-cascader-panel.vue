<template>
  <web-cascader-panel v-bind="$attrs" :props="props" :options="newOptions" />
</template>
<script setup lang="ts" name="WebTransferCascaderPanel">
import { ref, onBeforeMount } from 'vue'
import WebCascaderPanel from '../../cascader-panel/index'
import { cloneDeep } from 'lodash'
import type { CascaderOption } from 'element-plus'

interface TreeNode extends CascaderOption {
  id: never
  children: TreeNode[]
}
const { options, modelValue } = defineProps({
  options: {
    type: Array as () => TreeNode[],
    default: () => []
  },
  modelValue: {
    type: Array as () => Array<never[]>,
    default: () => []
  }
})
const props = {
  expandTrigger: 'hover' as const,
  label: 'name',
  value: 'id'
}
const newOptions = ref<CascaderOption[]>([])

onBeforeMount(() => {
  const arr = [[], [], []]
  for (let i = 0; i < modelValue.length; i++) {
    const [a, b, c] = modelValue[i]
    if (a && !arr[0].includes(a)) {
      arr[0].push(a)
    }
    if (b && !arr[0].includes(b)) {
      arr[1].push(b)
    }
    if (c && !arr[0].includes(c)) {
      arr[2].push(c)
    }
  }
  newOptions.value = cloneDeep(options)
    .filter(childs => arr[0].includes(childs.id))
    .map(item => ({
      ...item,
      children: item.children
        .filter(childs => arr[1].includes(childs.id))
        .map(childItem => ({
          ...childItem,
          children: childItem.children.filter(c => arr[2].includes(c.id))
        }))
    }))
})
defineOptions({
  name: 'ViewCascaderPanel'
})
</script>
