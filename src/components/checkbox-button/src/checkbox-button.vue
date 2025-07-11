<template>
  <el-checkbox-button class="web-checkbox-button" v-bind="$attrs">
    <template v-if="slots.default" #default="scoped">
      <slot name="default" v-bind="scoped"></slot>
    </template>
  </el-checkbox-button>
</template>

<script setup lang="ts" name="WebCheckboxButton">
import { useSlots } from 'vue'

const slots = useSlots()
defineOptions({
  name: 'WebCheckboxButton'
});
</script>

<style lang="scss">
.web-checkbox-button {

}
</style>
