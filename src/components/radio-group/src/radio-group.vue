<template>
  <el-radio-group class="web-radio-group" v-bind="$attrs">
    <slot></slot>
  </el-radio-group>
</template>
<script lang="ts" setup name="WebRadioGroup">
defineOptions({
  name: 'WebRadioGroup'
})
</script>

<style lang="scss">
.web-radio-group {
  width: 100%;
}
</style>
