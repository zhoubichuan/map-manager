<template>
  <el-avatar class="web-avatar" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-avatar>
</template>

<script lang='ts' setup name="WebAvatar">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebAvatar'
});
</script>
