<template>
  <el-cascader
    class="web-cascader"
    @visible-change="handleVisibleChange"
    clearable
    v-bind="$attrs"
    :options="newOptions.length ? newOptions : options"
  >
    <template v-if="slots.default" #default="scoped">
      <slot name="default" v-bind="scoped"></slot>
    </template>
    <template v-if="slots.empty" #empty="scoped">
      <slot name="empty" v-bind="scoped"></slot>
    </template>
  </el-cascader>
</template>

<script lang="ts" setup name="WebCascader">
import { useSlots, onMounted, ref } from 'vue'
import { ElCascader } from 'element-plus'
import type { CascaderOption } from 'element-plus'
const { request, options } = defineProps({
  request: {
    type: Function,
    default: () => {}
  },
  options: {
    type: Array as () => CascaderOption[],
    default: () => []
  }
})
const newOptions = ref([])
const slots = useSlots()
const handleVisibleChange = async (open: boolean) => {
  if (open) {
    //展开
    newOptions.value = await request()
  }
}
onMounted(async () => {
  newOptions.value = await request()
})
defineOptions({
  name: 'WebCascader'
})
</script>

<style lang="scss">
@import '../../index.scss';

.web-cascader {
  width: 100%;
}
</style>
