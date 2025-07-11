<template>
  <el-progress class="web-progress" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-progress>
</template>

<script lang="ts" setup>
import { useSlots } from 'vue'
import { ElProgress } from 'element-plus';
const slots = useSlots()
defineOptions({
  name: 'WebProgress'
})
</script>

<style lang="scss">
@import url(../../index.scss);

.web-progress {

}
</style>
