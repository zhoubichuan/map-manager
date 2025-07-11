<template>
  <el-config-provider size="default" :z-index="3000" :locale="zhCn">
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import { watch } from "vue";
import { ElConfigProvider } from 'element-plus'
 import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const route = useRoute();
watch(
  route,
  (to) => {
    if (to.meta.title) {
      document.title = String(to.meta.title);
    } else {
      document.title = import.meta.env.VITE_APP_TITLE;
    }
  },
  { immediate: true }
);
</script>
<style>
#app{
  height: 100vh;
}
</style>
