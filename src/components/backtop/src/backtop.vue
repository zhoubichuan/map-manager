<template>
  <el-backtop class="web-backtop" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-backtop>
</template>

<script lang='ts' setup name="WebBacktop">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebBacktop'
});
</script>
