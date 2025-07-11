<template>
  <el-checkbox-group class="web-checkbox-group" v-bind="$attrs">
    <template v-if="slots.default" #default="scoped">
      <slot name="default" v-bind="scoped"></slot>
    </template>
  </el-checkbox-group>
</template>

<script setup lang="ts" name="WebCheckboxGroup">
import { useSlots } from 'vue'

const slots = useSlots()
defineOptions({
  name: 'WebCheckboxGroup'
});
</script>

<style lang="scss">
.web-checkbox-group {

}
</style>
