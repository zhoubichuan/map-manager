<template>
  <el-descriptions class="web-descriptions" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-descriptions>
</template>

<script lang='ts' setup name="WebDescriptions">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebDescriptions'
});
</script>
