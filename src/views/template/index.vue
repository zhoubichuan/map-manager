<template>
  <button @click="showRemoteChild = true">加载远程组件</button>
  <RemoteChild v-if="showRemoteChild" />
</template>

<script setup>
import { defineAsyncComponent, ref } from "vue";
import * as Vue from "vue";
import { loadModule } from "vue3-sfc-loader";

const showRemoteChild = ref(false);
const options = {
  pathResolve({ refPath, relPath }) {
    if (relPath === ".")
      return refPath;
    if (relPath[0] !== "." && relPath[0] !== "/") return relPath;
    return String(
      new URL(relPath, refPath === undefined ? window.location : refPath)
    );
  },
  moduleCache: {
    vue: Vue,
  },
  async getFile(url) {
    const res = await fetch(url);
    const code = await res.text();
    return code;
  },
  addStyle(textContent) {
    const style = Object.assign(document.createElement("style"), {
      textContent,
    });
    const ref = document.head.getElementsByTagName("style")[0] || null;
    document.head.insertBefore(style, ref);
  },
};

const RemoteChild = defineAsyncComponent(async () => {
  const url = location.search.replace("?", "").split('=')[1]
  const res = await loadModule(
    url,
    options
  );
  return res;
});
</script>

<style scoped></style>
