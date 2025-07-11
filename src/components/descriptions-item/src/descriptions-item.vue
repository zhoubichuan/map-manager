<template>
  <el-descriptions-item class="web-descriptions-item" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-descriptions-item>
</template>

<script lang='ts' setup name="WebDescriptionsItem">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebDescriptionsItem'
});
</script>
