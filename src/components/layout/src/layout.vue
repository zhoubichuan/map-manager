<template>
  <el-row :gutter="20">
    <el-col :span="24 / data.length" v-for="(child, index) in data" :key="index">
      <slot v-bind="child">
        <component v-if="child.is" :is="child.is" v-bind="child"></component>
        <div v-else>1111</div>
      </slot>
    </el-col>
  </el-row>
</template>
<script setup lang="ts" name="WebLayout">
const { data } = defineProps<{
  data: {
    type: Array
    default: () => []
  }
}>()
</script>
<script lang="ts">
export default {
  name: 'WebLayout'
}
</script>
