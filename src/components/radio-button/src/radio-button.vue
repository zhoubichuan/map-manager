<template>
  <el-radio-button class="web-radio-button" v-bind="$attrs">
    <slot></slot>
  </el-radio-button>
</template>
<script lang="ts" setup name="WebRadioButton">
defineOptions({
  name: 'WebRadioButton'
})
</script>
<style lang="scss">
.web-radio-button {
  width: 100%;
}
</style>
