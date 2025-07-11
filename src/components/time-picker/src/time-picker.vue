<template>
  <el-config-provider :locale="zhCn">
    <el-time-picker class="web-time-picker" v-bind="$attrs" />
  </el-config-provider>
</template>

<script setup lang="ts" name="WebTimePicker">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

defineOptions({
  name: 'WebTimePicker'
})
</script>
